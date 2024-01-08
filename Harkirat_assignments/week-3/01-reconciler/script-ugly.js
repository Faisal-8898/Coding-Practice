function createDomElements(data) {
  var parentElement = document.getElementById("mainArea");
  const newdataLenth = data.length;
  const currentParentElementCount = parentElement.childElementCount;
  console.log(newdataLenth, currentParentElementCount);
  let added = 0;
  // Process each item in the data array
  if (currentParentElementCount < data.length) {
    console.log("we need to add something here");
    for (let i = currentParentElementCount; i < data.length; i++) {
      var childElement = document.createElement("div");
      childElement.dataset.id = data[i].id; // Store the ID on the element for future lookups

      var grandChildElement1 = document.createElement("span");
      grandChildElement1.innerHTML = data[i].title;

      var grandChildElement2 = document.createElement("span");
      grandChildElement2.innerHTML = data[i].description;

      var grandChildElement3 = document.createElement("button");
      grandChildElement3.innerHTML = "Delete";
      grandChildElement3.setAttribute(
        "onclick",
        "deleteTodo(" + data[i].id + ")",
      );

      childElement.appendChild(grandChildElement1);
      childElement.appendChild(grandChildElement2);
      childElement.appendChild(grandChildElement3);
      parentElement.appendChild(childElement);
    }
  } else {
    // remove the elements from the last
    for (let i = currentParentElementCount; i > data.length; i--) {
      parentElement.removeChild(parentElement.lastChild);
    }
  }
  console.log(added);
}

window.setInterval(() => {
  let todos = [];
  for (let i = 0; i < Math.floor(Math.random() * 100); i++) {
    todos.push({
      title: "Go to gym",
      description: "Go to gym form 5",
      id: i + 1,
    });
  }

  createDomElements(todos);
}, 5000);
