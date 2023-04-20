const hours = [ 6, 9, 7, 8, 6, 6, 8, 5, 9, 8, 7, 6, 7, 7, 8, 6, 9 ]
const grumpyHours = []
const happyHours = []

for (night of hours){
    if (night >= 7){
        happyHours.push(night)
    }
    else {
        grumpyHours.push(night)
    }
}

let grumpyDays = grumpyHours.length
let happyDays = happyHours.length

console.log(`I was grumpy for ${grumpyDays}. I was happy for ${happyDays}.`)