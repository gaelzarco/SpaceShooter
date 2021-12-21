function laserCollision(laser, enemy, shipTop) {
    let laserLeft = parseInt(laser.style.left),
    laserTop = parseInt(laser.style.top),
    enemyTop = parseInt(enemy.style.top),
    enemyLeft = parseInt(enemy.style.left),
    enemyRight = enemyLeft + 90;
    if(laserTop > 20 && laserTop - 70 < enemyTop) {
        if(laserLeft >= enemyLeft && laserLeft <= enemyRight) {
            if (shipTop > enemyTop) {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    } else {
        return false
    }
}

// COULD NOT  GET COLLISION WORKING
// function shipCollision(enemy, shipLeft, shipTop) {
//     let enemyBottom = parseInt(enemy.style.bottom),
//     enemyTop = parseInt(enemy.style.top)
//     enemyLeft = parseInt(enemy.style.left),
//     enemyRight = enemyLeft + 90;
//     if(shipTop <= enemyBottom && shipTop >= enemyTop) {
//         if(shipLeft >= enemyLeft && shipLeft <= enemyRight) {
//             return true
//         } else {
//             return false
//         }
//     } else {
//         return false
//     }
// }