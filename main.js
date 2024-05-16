const p1 = {
    name: 'Olga',
    money: 4000,
};

const p2 = {
    name: 'Tom',
    money: 5000,
};

const p3 = {
    name: 'Roma',
    money: 6000,
};

const bank = p1['money'] + p2.money + p3.money;

console.log(bank);

//_________________________

const arr = [
    {
    name: 'Olga',
    money: 4000,
    },

    {
    name: 'Tom',
    money: 5000,
    },

    {
    name: 'Roma',
    money: 6000,
    },
];

let sum = 0;

for (let i= 0; i < arr.length; i++) {
    
    sum = sum + arr[i].money;
    }
    
console.log(sum);

//_________________________

const person = {
    name: 'Roma',
    tinkoff: 10000,
    sber: 5000,
    vtb: 6000,
    alfa: 1000,
    psb: 500,
}

let result = 0;

                                                                /* вариант 1

for (prop in person) {

    if (prop !== 'name'){

    result = result + person[prop]
    }
}*/

                                                                // вариант 2

for (prop in person) {

    if (typeof person[prop] === 'number') {
        result = result + person[prop]
    }
};

console.log(result)

//_________________________

const pers = {
    name: 'tom',
    bank: {
        tinkoff: 10000,
        sber: 5000,
        vtb: 6000,
        alfa: 1000,
        psb: 500,
        },
    age: 30,
};

let rest = 0;

for (prop in pers.bank){
    rest = rest + pers.bank[prop];  //rest += pers.bank[prop];
};
console.log(rest);


//_________________________


const str = 'aaabbbcccabc'

let res = 0;

for (char of str) {

   if (char === 'b'){

    res ++;

   };
};

console.log(res);

//_________________________

const names = [
    'Маша',
    'Петя',
    'Саша',
    'Дима',
    'Катя',
    'Даня',
    'Давид'
]

let count = 0;
let count2 = 0;

for (let i = 0; i < names.length; i++) {
    if (names[i][0] === 'Д') {
        count++;
    }
}

for (let i = 0; i < names.length; i++) {
    for (char of names[i]) {
        if (char === 'Д' || char === 'д'){
            count2++
        }
    }
}
console.log(count);
console.log(count2);