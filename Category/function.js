function (number) {
    switch (number) {
        case 0:
            array_category[id.value].name = name.value;
            break;
        case 1:
            name.value = array_category[id.value].name;
            break;
        case 2:
            name.value = "";
            break;
        case 3:
            array_category[id.value].code = code.value;
            break;
        case 4:
            code.value = array_category[id.value].code;
            break;
        case 5:
            code.value = "";
            break;
        case 5:
            code.value = "";
            break;    
        default:
           console.log("Empty..");
    }
}