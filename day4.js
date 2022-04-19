days = (day) => {

    day = new Date();
    currentday =  day.getDay()
    // console.log(currentday);
    switch (currentday) {
        case 1:
            console.log("False");
            break;
        case 2:
            console.log("False");
            break;
        case 3:
            console.log("False");
            break;
        case 4:
            console.log("True");
            break;
        case 5:
            console.log("False");
            break;
        default:
            console.log("Garak hojao");
            break;
    }
}
days("");