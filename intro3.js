let firstCard=9
let secondCard=15
let sum=firstCard+secondCard
let hasBlackJack=false
let isAlive=true
let message=""
console.log(sum)

function startGame(){
if(sum<=20){
    message="Do you want to draw a new card?"
} else if(sum===21){
    hasBlackJack=true
  message="Whoo! you've got blackJack!"
}else {
message="You are out of the game!"
isAlive=false

}
console.log(message)
}