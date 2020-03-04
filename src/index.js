module.exports = 
function toReadable (number) {
    const ZERO = "zero"
    const ONE = "one"
    const TWO = "two"
    const THREE = "three"
    const FOUR = "four"
    const FIVE = "five"
    const SIX = "six"
    const SEVEN = "seven"
    const EIGHT = "eight"
    const NINE = "nine"
    const TEN = "ten"
    const ELEVEN = "eleven"
    const TWELVE = "twelve"   

    let numArrayOne = {
        0: ZERO,
        1: ONE,
        2: TWO,
        3: THREE,
        4: FOUR,
        5: FIVE,
        6: SIX,
        7: SEVEN, 
        8: EIGHT,  
        9: NINE,
        10: TEN,
        11: ELEVEN,
        12: TWELVE
    }
    let numArrayDes = {
        2: "twen",
        3: "thir",
        4: "for",
        5: "fif",
        6: SIX,
        7: SEVEN, 
        8: EIGHT,  
        9: NINE,
    }

    const reversNumberArray = number < 10 ? [number] : String(number).split("").reverse();
    let result = [];
    if (reversNumberArray.length === 1) {
      result.push(numArrayOne[String(number)]);
    } else {  
      for (let i = 0; i < reversNumberArray.length; i++) {
          if (i === 0) {
              let redableNumber = "";            
              if ( reversNumberArray[1] !== 1 ) {
                  if ( reversNumberArray[i] === 0 ) {
                      redableNumber = "";
                  } else if ( reversNumberArray[i] > 0 ) {redableNumber = numArrayOne[String(reversNumberArray[i])]}
              }

              if (reversNumberArray[1] === "1") {
                  switch (reversNumberArray[i]) {
                      case "0":
                          redableNumber = numArrayOne["10"]
                          break;
                      case "1":
                          redableNumber = numArrayOne["11"]
                          break;
                      case "2":
                          redableNumber = numArrayOne["12"]
                          break;
                      case "4":
                          redableNumber = numArrayOne[String(reversNumberArray[i])]+"teen"
                          break;
                      case "8":
                          redableNumber = numArrayDes[String(reversNumberArray[i])]+"een"
                          break;
                      default:
                          redableNumber = numArrayDes[String(reversNumberArray[i])]+"teen"    
                      break;
                  }                
              }
            result.push(redableNumber)
          }
          if (i === 1) {
              let redableNumber = "";
              if (reversNumberArray[i] > 1) {
                if (reversNumberArray[i] === "8") {
                  redableNumber = numArrayDes[String(reversNumberArray[i])]+"y"
                } else {
                  redableNumber = numArrayDes[String(reversNumberArray[i])]+"ty"  
                }         
              }
              if (reversNumberArray[i] === 0)  {
                redableNumber = ""
              }
            result.push(redableNumber)
          }
          if (i === 2) {
              let redableNumber = "";
              redableNumber = numArrayOne[String(reversNumberArray[i])]+" "+"hundred"
              result.push(redableNumber)
          }
      }
    }    
    const humanRedable = result.filter(it =>it).reverse().join(" ")
    return humanRedable
}