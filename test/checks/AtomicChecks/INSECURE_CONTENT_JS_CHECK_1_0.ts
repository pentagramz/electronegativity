import { BrowserWindow } from "electron";

export default function initialize() {

  let mainWindow: BrowserWindow | undefined;

  function createWindow() {
    mainWindow = new BrowserWindow({
      "webPreferences": {
        allowRunningInsecureContent: false
      }
    });

    mainWindow = new BrowserWindow({
      "webPreferences": {
        allowRunningInsecureContent: 0
      }
    });
  }
}
