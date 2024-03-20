import { pbkdf2Sync } from "crypto";
import * as fs from "fs";
import { join } from "path";
const PuppeteerHTMLPDF = require("puppeteer-html-pdf");
const htmlPDF = new PuppeteerHTMLPDF();

class Utils {
  private salt;
  constructor() {}

  generateHash(password) {
    const hash = pbkdf2Sync(
      password,
      process.env.SALT,
      10,
      20,
      "sha256"
    ).toString("hex");
    return hash;
  }

  compaireHash(password, hashPass) {
    const hash = pbkdf2Sync(
      password,
      process.env.SALT,
      10,
      20,
      "sha256"
    ).toString("hex");
    if (hashPass.localeCompare(hash) == 0) {
      return true;
    } else {
      return false;
    }
  }

  deleteFile(filepath: string) {
    fs.unlinkSync(filepath);
  }
}

export default new Utils();
