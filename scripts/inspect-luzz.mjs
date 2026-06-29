import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const baseDir = process.cwd();
const host = "luzzpickleball.com";
const researchDir = path.join(baseDir, "docs/research", host);
const designDir = path.join(baseDir, "docs/design-references", host);

await mkdir(researchDir, { recursive: true });
await mkdir(designDir, { recursive: true });

const browser = await chromium.launch({ headless: true });

async function inspectViewport(name, viewport) {
  const page = await browser.newPage({ viewport });
  await page.goto("https://luzzpickleball.com/", {
    waitUntil: "domcontentloaded",
    timeout: 120000,
  });
  await page.waitForTimeout(2500);

  await page.screenshot({
    path: path.join(designDir, `${name}-full.png`),
    fullPage: true,
  });

  const data = await page.evaluate(() => {
    const getUnique = (values) => [...new Set(values.filter(Boolean))];
    const textBlocks = [...document.querySelectorAll("h1,h2,h3,p,button,a,span")]
      .map((el) => el.textContent?.trim())
      .filter((text) => text && text.length > 0);

    const links = [...document.querySelectorAll("a")]
      .map((a) => ({
        text: a.textContent?.trim() || "",
        href: a.href,
      }))
      .filter((link) => link.href);

    const images = [...document.querySelectorAll("img")].map((img) => ({
      src: img.currentSrc || img.src,
      alt: img.alt,
      width: img.naturalWidth,
      height: img.naturalHeight,
      className: img.className,
      parentClassName: img.parentElement?.className || "",
    }));

    const backgrounds = [...document.querySelectorAll("*")]
      .map((el) => {
        const style = getComputedStyle(el);
        return {
          tag: el.tagName.toLowerCase(),
          className: el.className?.toString() || "",
          backgroundImage: style.backgroundImage,
          backgroundColor: style.backgroundColor,
          color: style.color,
          fontFamily: style.fontFamily,
        };
      })
      .filter(
        (entry) =>
          entry.backgroundImage !== "none" ||
          entry.backgroundColor !== "rgba(0, 0, 0, 0)"
      );

    const sections = [...document.querySelectorAll("body *")]
      .filter((el) => {
        const rect = el.getBoundingClientRect();
        return (
          rect.height > 120 &&
          rect.width > 300 &&
          ["SECTION", "DIV", "HEADER", "FOOTER", "MAIN"].includes(el.tagName)
        );
      })
      .slice(0, 40)
      .map((el, index) => {
        const rect = el.getBoundingClientRect();
        return {
          index,
          tag: el.tagName.toLowerCase(),
          className: el.className?.toString() || "",
          id: el.id || "",
          top: Math.round(rect.top + window.scrollY),
          height: Math.round(rect.height),
          text: el.textContent?.trim().replace(/\s+/g, " ").slice(0, 180) || "",
        };
      });

    const fontFamilies = getUnique(
      [...document.querySelectorAll("body, h1, h2, h3, p, button, a")].map(
        (el) => getComputedStyle(el).fontFamily
      )
    );

    const colors = getUnique(
      [...document.querySelectorAll("body *")]
        .flatMap((el) => {
          const style = getComputedStyle(el);
          return [style.color, style.backgroundColor, style.borderColor];
        })
        .filter(
          (value) =>
            value &&
            value !== "rgba(0, 0, 0, 0)" &&
            value !== "rgb(0, 0, 0)" &&
            value !== "rgba(0, 0, 0, 1)"
        )
    ).slice(0, 80);

    return {
      title: document.title,
      url: location.href,
      viewport: { width: window.innerWidth, height: window.innerHeight },
      meta: {
        description:
          document
            .querySelector('meta[name="description"]')
            ?.getAttribute("content") || "",
      },
      headings: [...document.querySelectorAll("h1,h2,h3")]
        .map((el) => el.textContent?.trim())
        .filter(Boolean),
      textBlocks: textBlocks.slice(0, 250),
      links: links.slice(0, 200),
      images,
      backgrounds: backgrounds.slice(0, 200),
      sections,
      fontFamilies,
      colors,
      bodyClassName: document.body.className,
      htmlClassName: document.documentElement.className,
      hasSticky: [...document.querySelectorAll("*")].some(
        (el) => getComputedStyle(el).position === "sticky"
      ),
      hasFixed: [...document.querySelectorAll("*")].some(
        (el) => getComputedStyle(el).position === "fixed"
      ),
      svgCount: document.querySelectorAll("svg").length,
    };
  });

  await writeFile(
    path.join(researchDir, `${name}.json`),
    JSON.stringify(data, null, 2)
  );

  await writeFile(
    path.join(researchDir, `${name}.html`),
    await page.content()
  );

  await page.close();
}

await inspectViewport("desktop", { width: 1440, height: 900 });
await inspectViewport("tablet", { width: 768, height: 1024 });
await inspectViewport("mobile", { width: 390, height: 844 });

await browser.close();
