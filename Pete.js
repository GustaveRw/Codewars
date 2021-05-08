function cakes(recipe, available) {
  let maxCakes
  for (var ingredient in recipe) {
    if (available[ingredient]) {
      const possibleCakes = Math.floor(
        available[ingredient] / recipe[ingredient] || 0
      )
      if (!maxCakes || possibleCakes < maxCakes) {
        maxCakes = possibleCakes
      }
    } else {
      return 0
    }
  }
  return maxCakes
}
