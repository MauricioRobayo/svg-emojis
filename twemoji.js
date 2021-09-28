const fs = require("fs/promises");
const svgr = require("@svgr/core").default;
const path = require("path");

const srcDir = path.join(__dirname, "assets", "twemoji");
const destDir = path.join(__dirname, "twemoji");

const svgrOptions = {
  typescript: true,
  memo: true,
};

(async () => {
  await fs.rmdir(destDir, { recursive: true });
  await fs.mkdir(destDir);

  const svgs = await fs.readdir(srcDir);

  for (const svg of svgs) {
    const svgCode = await fs.readFile(path.join(srcDir, svg), "utf8");
    const componentName = `TE${svg.replace(/\.svg$/, "").replace(/-/g, "_")}`;
    const svgTsx = await svgr(svgCode, svgrOptions, { componentName });
    const componentFilename = path.join(destDir, `${componentName}.tsx`);
    console.log(`${svg} => ${componentFilename}`);
    await fs.writeFile(componentFilename, svgTsx);
    await fs.appendFile(
      path.join(destDir, "index.ts"),
      `export { default as ${componentName} } from './${componentName}';\n`
    );
  }
})();
