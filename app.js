let raceNumber = Math.floor(Math.random() * 1000);
let early = true;
let age = 18;
if (early && age>18){
  raceNumber += 1000;
}if (early && age>18){
  console.log(`You will race at 9.30pm. Your race number is ${raceNumber}`)
}if (!early && age >18){
  console.log(`You will race at 11.00am. Your race number is ${raceNumber}`);
}if (early && age < 18 ){
  console.log(`You will race at 12.30pm. Your race number is ${raceNumber}`);
}if (early ='' && age<18){
  console.log(`You will race at 12.30pm. Your race number is ${raceNumber}`);
}else{
  console.log('Kindly approach the registration desk,Thank you!')
}