const { app } = require("electron");
const { contextBridge, ipcRenderer } = require("electron/renderer");

contextBridge.exposeInMainWorld("darkMode", {
  toggle: () => ipcRenderer.invoke("dark-mode:toggle"),
  system: () => ipcRenderer.invoke("dark-mode:system"),
});

contextBridge.exposeInMainWorld("message", {
  messageToMain: (message) => ipcRenderer.send("messageToMain", message),
  messageFromMain: (message) => ipcRenderer.on("messageFromMain", message),
});
