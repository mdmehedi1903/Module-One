
instName = "Ostad";
stuName = "Emam Mehedi";
myIncome = 300;
myExpense = 67;
var isAdult = true;
console.log("=========>❤ ", typeof isAdult);


let information = `I'm student of ${instName}. My name is ${stuName}. My income is ${myIncome-myExpense}`;

console.log(information);




var newFruits = ["Apple", "Orange", "Guava"];
newFruits[3] = "Jackfruit";
newFruits[1] = "Komola";
console.log(newFruits);





var amarektaGolpo = {
    Name: "Emam Mehedi",
    Age: 54,
    Address: {
        Village: "Luddakhali",
        Thana: "Mirsarai",
    },
    Education: {
        SSC: 2018,
        HSC: 2020,
        Institure: ["Jhulonpul", "Nizampur"]    
    }
}

amarInformation = `Tell me about you. Ok Sure! My name is ${amarektaGolpo.Name}. Age is ${amarektaGolpo.Age}. My address is ${amarektaGolpo.Address.Village}. My SSC is ${amarektaGolpo.Education.SSC}. My first Institure is ${amarektaGolpo.Education.Institure[amarektaGolpo.Education.Institure.length-1]}`;
console.log(amarInformation)