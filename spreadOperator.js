// const robot = ["M5","N19","F13","G54"];
// const creator = ["Faraz","Mazin","Ismail","Muzo"];

// const [a,b,c,...args] = creator;
// let result = [...robot,...creator];

// console.log(c);

// const robot = ["M5","N19","F13","G54"];
// const creator = ["Faraz","Mazin","Ismail","Muzo"];
// creator.push(...robot,4)

// let result = [...robot,creator];

// console.log(creator);


// const myfunc = (a,b,...soon) => {
//     console.log(a,b,soon[2])
// }

// myfunc(1,2,45,545,454);


// const myobj = [{
//     name : "Mazin",
//     age : 21,
//     profession : "Developer",
//     or : "Me nhi bta skta",
//     address : {
//         city : "Karachi"
//     }
// }]

// const [{name,age,profession,address,or}] = myobj;

// console.log(name,age,profession,address.city,or);



const restFunc = (numbers,...rest) => {
    // const numberdstru = [2,3,4,5,6,7,8,9]

    // const [a,b,c,...args] = numberdstru;

    // console.log(numbers,...rest);
    
    for(let i = 1; i <= rest.length; i++) {
        const result = i * numbers;
        console.log(`${numbers} * ${i} = ${result}`);
    }
}

// restFunc(2,3,4);
restFunc(3,3,4);


    const numberdstru = [2,3,4,5,6,7,8,9]

    const [a,b,c,...args] = numberdstru;
    
    for(let i = 1; i <= 10; i++) {
        const result = i * args[1];
        console.log(`${args[1]} * ${i} = ${result}`);
    }