console.log("hey Lizzy");

const darkMode = document.getElementById("change-mode");

darkMode.addEventListener("click", () => {
  console.log("CLICKED");

  if (darkMode.checked) {
    console.log("This is dark mode");
  } else {
    console.log("This is light mode");
  }
});

// function check() {
//   darkMode.checked = true;
// }

// function uncheck() {
//   document.getElementById("myCheck").checked = false;
// }
