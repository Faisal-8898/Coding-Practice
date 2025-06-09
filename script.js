document.querySelector(".grandparent").addEventListener("click", function (e) {
  console.log("Grandparent");
  e.stopPropagation(); // Stops bubbling (has no effect in this context)
});

document.querySelector(".parent").addEventListener(
  "click",
  function () {
    console.log("Parent");
  },
  true,
);

document.querySelector(".child").addEventListener("click", function () {
  console.log("Child");
});
