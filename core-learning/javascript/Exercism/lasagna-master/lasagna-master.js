/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 * @param {number | null | undefined} timer
 */
export function cookingStatus(timer) {
  if (timer === 0) {
    return "Lasagna is done.";
  } else if (timer === undefined || timer === null) {
    return "You forgot to set the timer.";
  } else {
    return "Not done, please wait.";
  }
}

/**
 * @param {string | any[]} layers
 */
export function preparationTime(layers, time = 2) {
  return layers.length * time;
}
// /**
//  * @param {string | any[]} cookingElements;
//  */

export function quantities(cookingElements) {
  let noodlesCount = 0;
  let saucesCount = 0;
  // for (let element of cookingElements) {
  //   if (element === "noodles") {
  //     noodlesCount += 50;
  //   } else if (element === "sauce") {
  //     saucesCount += 0.2;
  //   }
  // }
  for (let i = 0; i < cookingElements.length; i++) {
    if (cookingElements[i] === "noodles") {
      noodlesCount += 50;
    } else if (cookingElements[i] === "sauce") {
      saucesCount += 0.2;
    }
  }
  // return 0;
  return {
    noodles: noodlesCount,
    sauce: saucesCount,
  };
}
// export function quantities(layers) { let noodles = 0;
//   let sauce = 0;
//   for (let i = 0; i < layers.length; i++) {
//     if (layers[i] === "noodles") {
//       noodles += 50;
//     }
//     if (layers[i] === "sauce") {
//       sauce += 0.2;
//     }
//   }
//   return { noodles, sauce };
// }

export function addSecretIngredient(fList, myList) {
  const lastItem = fList[fList.length - 1];
  myList.push(lastItem);
}

export function scaleRecipe(recipe, portion) {
  const mportion = portion / 2;
  let newReciepe = {};
  Object.keys(recipe).forEach((key) => {
    newReciepe[key] = recipe[key] * mportion;
  });

  return newReciepe;
}
