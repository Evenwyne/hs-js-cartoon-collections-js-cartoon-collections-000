function dwarfRollCall(dwarves) {
  var result = ""
  for (let i = 0; i < dwarves.length; i++) {
    result += `${i + 1}. ` + dwarves[i] + ` `  }
    return result
}

function summonCaptainPlanet(planeteerCalls) {
   var result = []
   for (let i = 0; i < planeteerCalls.length; i++) {
    result[i] = planeteerCalls[i].toUpperCase() + `!`
   }
   return result
}


function longPlaneteerCalls(words) {
   for (let i = 0; i < words.length; i++) {
     if (words.length > 4)
     return true
   }
   return false
}

function findTheCheese (foods) {
  var cheeses = ["cheddar", "gouda", "camembert"]
  for (let i = 0; i < foods.length; i++) {
  for (let j = 0; j < cheeses.length; j++) {
    if (foods[i] == cheeses[j])
    return cheeses[j]
     }
  }
return "no cheese!"
}

function wordsWithB (words) {
  var array = []
  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith("B")) {

    }
  } return
}
