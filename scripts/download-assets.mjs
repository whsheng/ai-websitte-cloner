import { mkdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const downloads = [
  {
    url: "https://fonts.shopifycdn.com/figtree/figtree_n4.3c0838aba1701047e60be6a99a1b0a40ce9b8419.woff2",
    dest: "src/app/fonts/luzz/figtree-400.woff2",
  },
  {
    url: "https://fonts.shopifycdn.com/figtree/figtree_n5.3b6b7df38aa5986536945796e1f947445832047c.woff2",
    dest: "src/app/fonts/luzz/figtree-500.woff2",
  },
  {
    url: "https://fonts.shopifycdn.com/figtree/figtree_n7.2fd9bfe01586148e644724096c9d75e8c7a90e55.woff2",
    dest: "src/app/fonts/luzz/figtree-700.woff2",
  },
  {
    url: "https://fonts.shopifycdn.com/barlow_condensed/barlowcondensed_n6.30a391fe19ded5366170913f031e653a88992edc.woff2",
    dest: "src/app/fonts/luzz/barlow-condensed-600.woff2",
  },
  {
    url: "https://fonts.shopifycdn.com/barlow_condensed/barlowcondensed_n7.b8dc813bf1d64de77250a6675c25535283e1677a.woff2",
    dest: "src/app/fonts/luzz/barlow-condensed-700.woff2",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0659/0772/0365/files/1_5204fe43-9d63-4fad-8682-4362c67c17ad.jpg?crop=center&height=32&v=1737010886&width=32",
    dest: "public/seo/luzzpickleball/favicon.jpg",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0659/0772/0365/files/1_5204fe43-9d63-4fad-8682-4362c67c17ad.jpg?v=1737010886&width=192",
    dest: "public/seo/luzzpickleball/apple-touch-icon.jpg",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0659/0772/0365/files/logo_d2136651-2567-47c1-acd4-b66f937fa651.png?v=1717117475",
    dest: "public/seo/luzzpickleball/og-image.png",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0659/0772/0365/files/luzz-white.svg?v=1767933647&width=100",
    dest: "public/images/luzzpickleball/luzz-white.svg",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0659/0772/0365/files/Mens_Singles_Champ_chrishaworth.pb_2.jpg?v=1776647776&width=800",
    dest: "public/images/luzzpickleball/luzz-go-player.jpg",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0659/0772/0365/files/luzz-go.svg?v=1767951912&width=1200",
    dest: "public/images/luzzpickleball/luzz-go.svg",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0659/0772/0365/files/imgi_49_i1fl7VkPY0T0SFEPrBZ4D9cvCU9jl1ePkKK9Nd1VH7G7LuN86NRI1TaFCWECXNjTKsBzJ58hcA_s160-c-k-c0x00ffffff-no-rj.jpg?v=1770601869&width=200",
    dest: "public/images/luzzpickleball/avatars/pickleball-willy.jpg",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0659/0772/0365/files/avatar_pickleball_pursuit.png?v=1768012274&width=200",
    dest: "public/images/luzzpickleball/avatars/pickleball-pursuit.png",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0659/0772/0365/files/avatar_john_kew_pickleball.png?v=1768012300&width=200",
    dest: "public/images/luzzpickleball/avatars/john-kew.png",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0659/0772/0365/files/avatar_westside_pickleball.png?v=1768012623&width=200",
    dest: "public/images/luzzpickleball/avatars/west-side.png",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0659/0772/0365/files/imgi_284_tD6wzHu9W7NmFBmbUuu3m2MSks8uaUrcxZSmxxjLO-7AVpS8zX6BnDaKGapNSE8KaCTLG0Imy6k_s400-c-k-c0x00ffffff-no-rj.jpg?v=1770603067&width=100",
    dest: "public/images/luzzpickleball/avatars/the-honest-take.jpg",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0659/0772/0365/files/imgi_243_tvVr6QhrCiXt2BQhs-KEwk8bPxmYPPUY3V5aW1Riqk2bfb54t1KA1aIY9nc31xPlUU1BFFH8nuA_s400-c-k-c0x00ffffff-no-rj.jpg?v=1770603817&width=100",
    dest: "public/images/luzzpickleball/avatars/matts-pickleball.jpg",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0659/0772/0365/files/imgi_107_liCcjshPQJka1Ng9BFol-Zy_mqQ7Zs5Xg49_sMlq0vHGNd8GfwCUNnv855u6umdDo1k265-w_s160-c-k-c0x00ffffff-no-rj.jpg?v=1770604765&width=100",
    dest: "public/images/luzzpickleball/avatars/chris-wilson.jpg",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0659/0772/0365/files/imgi_123_lmASMj9QoDjca2v56bIGmvDdfDulT1EbPiflBf_pQwGxXGlfAnqDHKoZ-_8msdWSnK1FOr8Hu9A_s160-c-k-c0x00ffffff-no-rj.jpg?v=1770605164&width=100",
    dest: "public/images/luzzpickleball/avatars/tickle-my-pickleball.jpg",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0659/0772/0365/files/imgi_230_maxresdefault.jpg?v=1770601869&width=800",
    dest: "public/images/luzzpickleball/reviews/review-honest-take.jpg",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0659/0772/0365/files/imgi_326_hq720.jpg?v=1770603793&width=800",
    dest: "public/images/luzzpickleball/reviews/review-matts-pickleball.jpg",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0659/0772/0365/files/screenshot_2026-02-09_10-41-07.png?v=1770604892&width=800",
    dest: "public/images/luzzpickleball/reviews/review-chris-wilson.jpg",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0659/0772/0365/files/imgi_346_maxresdefault.jpg?v=1770605164&width=800",
    dest: "public/images/luzzpickleball/reviews/review-tickle-my-pickleball.jpg",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0659/0772/0365/files/1_49f7d1ac-4df9-492d-b57d-cf437258ba48.jpg?v=1780034896&width=1066",
    dest: "public/images/luzzpickleball/products/pro-inferno-frozen.jpg",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0659/0772/0365/files/1_1_496b8e50-798f-4187-9266-c2e095179e16.jpg?v=1779432216&width=1066",
    dest: "public/images/luzzpickleball/products/pro-glider-2026.jpg",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0659/0772/0365/files/1_c410ad7e-ab3b-40b0-b98d-89cd1c2461cc.jpg?v=1776747966&width=720",
    dest: "public/images/luzzpickleball/products/pro-cannon.jpg",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0659/0772/0365/files/1_71c285c7-052c-4d7f-8069-a67a51cee128.jpg?v=1776741981&width=720",
    dest: "public/images/luzzpickleball/products/pro-inferno.jpg",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0659/0772/0365/files/2_f7afb554-eb2b-419e-b465-b23b37edcf20.jpg?v=1760579472&width=720",
    dest: "public/images/luzzpickleball/products/pro-kung-fu-panda.jpg",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0659/0772/0365/files/1_6ba85ad8-6a12-46f8-8a73-bb840c87d3a5.jpg?v=1776747966&width=720",
    dest: "public/images/luzzpickleball/products/pro-candy-cannon.jpg",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0659/0772/0365/files/3_97e2310d-f3d4-4fca-9f42-3acbf43da702.jpg?v=1737613228&width=1066",
    dest: "public/images/luzzpickleball/products/performance-fog.jpg",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0659/0772/0365/files/1_acb47ed7-5cdc-40b3-bb36-81a6bc9a4b9d.jpg?v=1736920737&width=1066",
    dest: "public/images/luzzpickleball/products/performance-guitar.jpg",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0659/0772/0365/files/whisper_-1.jpg?v=1739252855&width=1066",
    dest: "public/images/luzzpickleball/products/performance-whisper.jpg",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0659/0772/0365/files/1_f7843d8c-24c7-4ae3-b180-e5da3fb21f78.jpg?v=1737006875&width=1066",
    dest: "public/images/luzzpickleball/products/performance-imperial-dragon.jpg",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0659/0772/0365/files/2_151ce84d-9fca-43a8-a426-3120778968cb.jpg?v=1737005840&width=1066",
    dest: "public/images/luzzpickleball/products/performance-goldenveil.jpg",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0659/0772/0365/files/3_2bfb7b71-9828-4ce2-bf79-3ea0f907d2d6.jpg?v=1736920979&width=1066",
    dest: "public/images/luzzpickleball/products/performance-zz.jpg",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0659/0772/0365/files/dark_set.webp?v=1770169409&width=1066",
    dest: "public/images/luzzpickleball/products/infinity-set.webp",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0659/0772/0365/files/guitar-1_f28250f8-b18f-48b8-b51e-09a3b3f51ca6.jpg?v=1760000406&width=1066",
    dest: "public/images/luzzpickleball/products/infinity-guitar-groove.jpg",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0659/0772/0365/files/1-_2.jpg?v=1760000642&width=1066",
    dest: "public/images/luzzpickleball/products/infinity-bunny-blitz.jpg",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0659/0772/0365/files/986aa8fdbf76a54fead5bd8f38273387_b1c6f0b4-4715-492a-970d-bb0b3c209d4e.jpg?v=1760000521&width=1066",
    dest: "public/images/luzzpickleball/products/infinity-purr.jpg",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0659/0772/0365/files/8_36066bba-c814-433d-9b35-2ae02399de57.jpg?v=1760000621&width=1066",
    dest: "public/images/luzzpickleball/products/infinity-butterfly.jpg",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0659/0772/0365/files/3_9fff0b9e-f0ba-4129-8e12-e6329b164165.jpg?v=1770624389&width=1200",
    dest: "public/images/luzzpickleball/collections/pro-series.jpg",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0659/0772/0365/files/2_d2be15b7-63e9-4384-be99-432f10671541.png?v=1770624390&width=1200",
    dest: "public/images/luzzpickleball/collections/infinity-series.png",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0659/0772/0365/files/4_7d8cdbc9-73f0-4054-8321-1f213dc1ebb7.png?v=1770624390&width=1200",
    dest: "public/images/luzzpickleball/collections/pickleball-bag.png",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0659/0772/0365/files/5_25727e42-c62c-4a6c-9ab5-33b3af9b8146.png?v=1770624390&width=1200",
    dest: "public/images/luzzpickleball/collections/accessories.png",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0659/0772/0365/files/6_45796f30-ed89-47e1-aa49-511f8b00e1af.png?v=1770624390&width=1200",
    dest: "public/images/luzzpickleball/collections/new-arrivals.png",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0659/0772/0365/files/luzz-x-universal.svg?v=1767958022&width=800",
    dest: "public/images/luzzpickleball/luzz-x-universal.svg",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0659/0772/0365/files/2_ip.jpg?v=1770607068&width=800",
    dest: "public/images/luzzpickleball/universal/kung-fu-panda.jpg",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0659/0772/0365/files/2_ip_-1.jpg?v=1770607068&width=800",
    dest: "public/images/luzzpickleball/universal/minions.jpg",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0659/0772/0365/files/IMG_0891_2.heic?v=1768194459&width=800",
    dest: "public/images/luzzpickleball/team/chris-haworth.png",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0659/0772/0365/files/IMG_2378.jpg?v=1776647192&width=800",
    dest: "public/images/luzzpickleball/team/kaitlyn-christian.jpg",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0659/0772/0365/files/DSC00794.jpg?v=1774252833&width=800",
    dest: "public/images/luzzpickleball/team/roscoe-bellamy.jpg",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0659/0772/0365/files/d2529fcd7eadf880c7c39b5a3f049001.png?v=1771034785&width=800",
    dest: "public/images/luzzpickleball/team/ammar-wazirr.png",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0659/0772/0365/files/IMG_6574_JPG_837ef327-d9b6-4890-a287-b0982c96b579.jpg?v=1776417154&width=800",
    dest: "public/images/luzzpickleball/team/kim-eung-gwon.jpg",
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0659/0772/0365/files/imgi_3_590428369_18556502746021087_7772824866892691096_n.jpg?v=1770614968&width=800",
    dest: "public/images/luzzpickleball/team/dusty-boyer.jpg",
  },
];

async function exists(filePath) {
  try {
    await stat(filePath);
    return true;
  } catch {
    return false;
  }
}

async function downloadAsset({ dest, url }) {
  if (await exists(dest)) {
    console.log(`skip ${dest}`);
    return;
  }

  await mkdir(path.dirname(dest), { recursive: true });

  const response = await fetch(url, {
    headers: {
      "user-agent": "Mozilla/5.0 (compatible; LuzzCloneBot/1.0)",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to download ${url}: ${response.status} ${response.statusText}`);
  }

  const arrayBuffer = await response.arrayBuffer();
  await writeFile(dest, new Uint8Array(arrayBuffer));
  console.log(`downloaded ${dest}`);
}

for (const asset of downloads) {
  await downloadAsset(asset);
}
