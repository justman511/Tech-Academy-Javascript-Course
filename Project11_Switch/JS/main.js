function Color_Function() {
    let Color_Output;
    const Colors = document.getElementById("color_Input").value.toLowerCase();
    const Color_String = " is a great color!";

    switch(Colors) {
        case "Red".toLocaleLowerCase():
            Color_Output = "Red" + Color_String;
            break;
        case "Yellow".toLocaleLowerCase():
            Color_Output = "Yellow" + Color_String;
            break;
        case "Green".toLocaleLowerCase():
            Color_Output = "Green" + Color_String;
            break;
        case "Blue".toLocaleLowerCase():
            Color_Output = "Blue" + Color_String;
            break;
        case "Pink".toLocaleLowerCase():
            Color_Output = "Pink" + Color_String;
            break;
        case "Purple".toLocaleLowerCase():
            Color_Output = "Purple" + Color_String;
            break;
        default:
            Color_Output = "Please enter a color exactly as written on the above list.";
    }
    document.getElementById("colorOutput").innerHTML = Color_Output;
}