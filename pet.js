let petstock = []
let petA = {
    "name": "Velmot",
    "type": "cat",
    "age": 2,
    "birth": "12/05/2021"
}
let petB = {
    "name": "Jerry",
    "type": "Hamster",
    "age": 1,
    "birth": "05/07/2022"
}
let petC = {
    "name": "Monmong",
    "type": "fish",
    "age": 2,
    "birth": "7/20/2021"
}
petstock.push(petA)
petstock.push(petB)
petstock.push(petC)

for (var i = 0; i < petstock.length; i++) {
    console.log('Pet:' + (i + 1) + ': ' + 'Name: ' + petstock[i].name + ' ' + 'PetType: ' + petstock[i].type + ' ' + 'PetAge: ' + petstock[i].age + ' ' + 'Birthday: ' + petstock[i].birth)
}
console.log('---After Delete---')

//DELETE petstock
delete petstock.splice(1, 1)
for (var i = 0; i < petstock.length; i++) {
    console.log('Pet:' + (i + 1) + ': ' + 'Name: ' + petstock[i].name + ' ' + 'PetType: ' + petstock[i].type + ' ' + 'PetAge: ' + petstock[i].age + ' ' + 'Birthday: ' + petstock[i].birth)
}