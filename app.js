// console.log('Hello Justin')

// document.querySelector("#myBtn").addEventListener("click", () => {document.querySelector("body").style.backgroundColor = "tomato"});

updateBG = () => {
  // console.log(document.querySelector("body").style.backgroundColor);
  const x = document.querySelector("body").style.backgroundColor;
  document.querySelector("body").style.backgroundColor = (x === "tangerine") ? "azure" : "tangerine";
}

document.querySelector("#myBtn").addEventListener("click", updateBG);