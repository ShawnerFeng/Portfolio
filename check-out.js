const fs = require("fs");

if (!fs.existsSync("out")) {
  console.error("ERROR: out folder was not generated.");
  console.error("Please check next.config.mjs output export setting.");
  process.exit(1);
}

console.log("out folder exists.");