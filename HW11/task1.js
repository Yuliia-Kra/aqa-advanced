function saySmth(text, miSec) {
    setTimeout((text) => {console.log(text)}, miSec, `${text} ${miSec}` )
  }
  saySmth('The program has timeout:', 1000)