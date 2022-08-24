const { series, watch } = require("gulp");
const fs = require('fs');
const fsExtra = require('fs-extra');

async function copyTabOutputToMarketServer(cb) {
  const marketDistDir = 'server/market/dynamic-tabs';
  const componentFilePath = 'dist/tabs/dynamic-tabs.js';
  await fsExtra.ensureDirSync(marketDistDir);
  await fsExtra.emptyDirSync(marketDistDir);
  await fsExtra.ensureFileSync(componentFilePath);
  await fsExtra.copySync(componentFilePath, `${marketDistDir}/index.js`);
  cb();
}

exports.copyTabOutputToMarketServer = series(copyTabOutputToMarketServer);