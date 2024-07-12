function checkOrder(available, ordered) {
    if(available <= -1 || ordered <= -1){
        return "Don't break the game"
    }
    else if (ordered > available) {
        return "Your order is too large, we don't have enough goods."
        
    }
    else if (ordered === 0) {
        return "Your order is empty"
        
    } 
    else {
        return "Your order is accepted"
        
    }
   
}

console.log(checkOrder(10, 1))

