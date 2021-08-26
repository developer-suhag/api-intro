const user = {
    id: 5,
    name: 'Amok khan',
    job: 'Khay day gomay'
}

const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);
const userConvert = JSON.parse(stringified);
// console.log(userConvert);


const shop = {
    name: 'Jhankar Shop',
    address: 'America',
    profit: 20000,
    products: ['Python', 'JavaScript', 'React', 'Node', 'MongoDB', 'and many more'],
    owner: {
        ownerName: 'Jhankar Mahbub',
        profession: 'Web Dev',
    },
};

const shopStrigified = JSON.stringify(shop);

const shopConvert = JSON.parse(shopStrigified);

// console.log(shop);
console.log(shopStrigified);
console.log(shopConvert);