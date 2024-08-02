function counter(num){
    if(num >= 0){
        console.log(num)
        num--
        counter(num)
    }

}
counter(5)