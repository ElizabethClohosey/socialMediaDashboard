const darkMode = document.getElementById("change-mode");

darkMode.addEventListener("click", () => {
  console.log("CLICKED");

  if (darkMode.checked) {
    toggleDarkMode("dist/css/dark-mode.css", 2);
  } else {
    toggleDarkMode("dist/css/light-mode.css", 2);
  }
});

function toggleDarkMode(cssFile, cssLinkIndex) {
  var oldLink = document.getElementsByTagName("link").item(cssLinkIndex);

  var newLink = document.createElement("link");
  newLink.setAttribute("rel", "stylesheet");
  newLink.setAttribute("type", "text/css");
  newLink.setAttribute("href", cssFile);

  document.getElementsByTagName("head").item(0).replaceChild(newLink, oldLink);
}
