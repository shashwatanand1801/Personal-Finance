import { faker } from '@faker-js/faker';
// or, if using CommonJS
// const { faker } = require('@faker-js/faker');

const randomName = faker.name.fullName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz

const data = [];

var transaction = ['Expenditure', 'Earning']

for(let i=1; i<=50; i++) {
    var randomNumber = Math.floor(Math.random()*transaction.length);
    const start_date = faker.date.between('2022-01-01T00:00:00.000Z', '2022-08-01T00:00:00.000Z')
    data.push({
        id: i,
        from : start_date.toString().substring(4,15),
        to : faker.date.between('2022-08-01T00:00:00.000Z', '2022-09-01T00:00:00.000Z').toString().substring(4,15),
        data: faker.commerce.product(),
        type: transaction[randomNumber],
        tag: faker.commerce.department(),
        amount: faker.commerce.price(0, 5000),
        month: start_date.getMonth()
    })
}



var expn = 0;
var earn = 0;

var monthly_expenditure = new Array(7).fill(0);
var monthly_earning = new Array(7).fill(0);

for(var i=0;i<data.length;i++){
  if(data[i].type === 'Expenditure'){
    expn += parseInt(data[i].amount)
    monthly_expenditure[data[i].month] += parseInt(data[i].amount);
  } else {
    earn += parseInt(data[i].amount)
    monthly_earning[data[i].month] += parseInt(data[i].amount);
  }
}

console.log(monthly_earning)

export const monthlyVal = {
  expenditure : monthly_expenditure,
  earning : monthly_earning
}


export const amtVal = {
    expenditure : expn,
    earning : earn
}

export {data};