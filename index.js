// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    let distance
    if (blocks <= 42) {
        distance = 42 - blocks
    } else {
        distance = blocks - 42
    }
    return distance
}

function distanceFromHqInFeet(blocks) {
    blocks = distanceFromHqInBlocks(blocks)
    return blocks * 264
}

function distanceTravelledInFeet(start, destination) {
let travel
if (start >= destination) {
    travel = (start - destination) * 264
} else {
    travel = (destination - start) * 264
}
return travel
}

function calculatesFarePrice(start, destination) {
    let price
    let distance = distanceTravelledInFeet(start, destination)
    if (distance <= 400) {
      price = 0
    } else if (distance <= 2000) {
      price = .02 * (distance - 400)
    } else if (distance > 2000 && distance <= 2500) {
      price = 25
    } else if (distance > 2500) {
      price = 'cannot travel that far'
    }
    return price
}