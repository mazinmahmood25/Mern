const myfunc = () => {
setTimeout(() => {
    const My = {
        name : "Mazin",
        age : 21,
        address : {
            city : "Karachi",
        }
    }
    let {name,age,address:{city}} = My;
    console.log(name);
    setTimeout(() => {
        console.log(`My name is ${name} and my age is ${age}`);

        setTimeout(() => {
            console.log(`My name is ${name} and my age is ${age} and adress is ${city}`);
        },2000)

    },2000)
    
},2000)
}

myfunc();