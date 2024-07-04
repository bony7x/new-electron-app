document
  .getElementById("toggle-dark-mode")
  .addEventListener("click", async () => {
    const isDarkMode = await window.darkMode.toggle();
    console.log(isDarkMode);
    document.getElementById("theme-source").innerHTML = isDarkMode
      ? "Dark"
      : "Light";
  });

document
  .getElementById("reset-to-system")
  .addEventListener("click", async () => {
    await window.darkMode.system();
    document.getElementById("theme-source").innerHTML = "System";
  });

function formatDevices(devices) {
  return devices.map((device) => device.productName).join("<hr>");
}

async function testIt() {
  document.getElementById("granted-devices").innerHTML = formatDevices(
    await navigator.hid.getDevices()
  );
  document.getElementById("granted-devices2").innerHTML = formatDevices(
    await navigator.hid.requestDevice({ filters: [] })
  );
}

document.getElementById("clickme").addEventListener("click", testIt);