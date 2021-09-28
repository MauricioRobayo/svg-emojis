const path = require("path");
const download = require("download");
const fs = require("fs/promises");

const svgEmojis = [
  {
    url: "https://github.com/hfg-gmuend/openmoji/releases/latest/download/openmoji-svg-black.zip",
    destination: path.join(__dirname, "openmoji", "black"),
  },
  {
    url: "https://github.com/hfg-gmuend/openmoji/releases/latest/download/openmoji-svg-color.zip",
    destination: path.join(__dirname, "openmoji", "color"),
  },
  {
    url: "https://github.com/mozilla/fxemoji/archive/refs/heads/gh-pages.zip",
    destination: path.join(__dirname, "fxemoji"),
    decompressOptions: {
      filter: ({ path }) =>
        path.includes("/svgs/FirefoxEmoji/") &&
        path.endsWith(".svg") &&
        !/\.layer\d+\.svg$/.test(path),
      map: (file) => {
        file.path = path.basename(file.path);
        return file;
      },
    },
  },
  {
    url: "https://github.com/twitter/twemoji/archive/refs/heads/master.zip",
    destination: path.join(__dirname, "twemoji"),
    decompressOptions: {
      filter: ({ path }) =>
        path.includes("/assets/svg/") && path.endsWith(".svg"),
      map: (file) => {
        file.path = path.basename(file.path);
        return file;
      },
    },
  },
];

svgEmojis.map(async ({ url, destination, decompressOptions }) => {
  await fs.rmdir(destination, { recursive: true });
  await download(url, destination, {
    extract: true,
    ...decompressOptions,
  });
  const files = await fs.readdir(destination);
  return fs.writeFile(
    path.join(destination, "index.json"),
    JSON.stringify(files, null, 2)
  );
});
