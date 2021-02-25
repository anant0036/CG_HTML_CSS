// const num = 9;
// num = 5;
// console.log(num);

// function testNum(a)
// {
//     let result;
//     if(a>0)
//     {
//         result = 'Positive';
//     }
//     else
//     {
//         result = 'Not Positive';
//     }
//     return result;
// }
//console.log(result);
// console.log(testNum(-5));

// function Order()
// {
//     this.id = 1;
//     this.title = "Pizza";
//     this.price = 2000;


// }

// var Order = 
// {
//     id:1,
//     title:"Pizza",
//     price:100,

//     // var data = { id:1, title:"Pizza",price:100};

//     printOrder:function()
//     {
//         console.log(this.id);
//         console.log(this.title);

//         console.log("The order is "+ " "+ this.title);
//     },
//     getprice:function()
//     {
//         console.log("The price is "+ " "+ this.price);
//     }
// }

// var O1 = Object.create(Order);
// O1.printOrder();
// O1.getprice();

// var copy = Object.assign({},Order);
// for(let val in copy)
// {
//     console.log(copy[val]);
// }
// let name = ["Tom","Ivan","Jerry"];

// function give()
// {
//     let name = ["Tom","Ivan","Jerry"];

//     var output = [];

//     for(var i = 0;i<name.length;i++)
//     {
//         output[i] = {

//             name: name[i],
//             length: name[i].length

//         };
//     }
//     console.log(output);
// }

// give();



// const titles = name[0]
// const obj = name.map(([name]) => ({name}))
// console.log(obj);

// let add = (a = 2,b = 4) => {
    
//     console.log(a+b);
// }

// add();

// let userFriends = function(name, ...friends)
// {
//     console.log(name);

//     for(let i in friends)
//     {
//         console.log(friends[i]);
//     }
// }

// userFriends("Bhushan", 'anant','dada','upa');

// function printCapitalNames(...name)
// {
//     for(let i in name)
//     {
//         console.log(name[i].toUpperCase());
//     }
// }

// let name = ["sa","da","fd","gf","bf"];
// (printCapitalNames(...name));

// let name = "Bhushan";
// let deskno = 20;
// let model = "XPS-15";

// console.log(`${name}` + ` `+ `deskno`+` `+ `model`);

// const foo = ["A","B","C","D"];
// const [one,two,three,four] = foo;
// console.log(three);

// class Account
// {
//     constructor(id,name,balance)
//     {
//         this.id = id;
//         this.name = name;
//         this.balance = balance;
//     }
//     tbal()
//     {
//         console.log("The balance is" + " "+this.balance);
//     }


// }

// class SavingAccount extends Account
// {
//     constructor(id,name,balance,interest)
//     {
//         super(id,name,balance);
//         // super(name);
//         // super(balance);
//         this.interest = interest;
//     }
//     tbalsave()
//     {
//         console.log("The balance is" + " "+this.interest+" "+this.balance);
//     }

// }

// class CurrentAccount extends Account
// {
//     constructor(id,name,balance,cash_credit)
//     {
//         super(id,name,balance);
//         // super(name);
//         // super(balance);
//         this.cash_credit = cash_credit;
//     }
//     tbalcur()
//     {
//         console.log("The balance is" + " "+this.balance+" "+ this.cash_credit );
//     }

// }

// let a1 = new SavingAccount(1,"Anant",12000,300);
// let a2 = new CurrentAccount(2,"Basant",1200,100);
// let a3 = new Account(3,"Joe",4586);

// a1.tbalsave();
// a2.tbalcur();
// a3.tbal();