const arr = ["C1", "C3", "C2", "C1", "C8", "C4", "C5", "C2", "C6", "C7", "C8", "C3", "C1", "C5", "C8", "C2", "C4", "C6", "C7", "C8"];

let cC1 = 0;
let cC2 = 0;
let cC3 = 0;
let cC4 = 0;
let cC5 = 0;
let cC6 = 0;
let cC7 = 0;
let cC8 = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "C1") {
        cC1++;
    }
    else if (arr[i] === "C2") {
        cC2++;
    }
    else if (arr[i] === "C3") {
        cC3++;
    }
    else if (arr[i] === "C4") {
        cC4++;
    }
    else if (arr[i] === "C5") {
        cC5++;
    }
    else if (arr[i] === "C6") {
        cC6++;
    }
    else if (arr[i] === "C7") {
        cC7++;
    }
    else if (arr[i] === "C8") {
        cC8++;
    }
}

let answer = prompt("choose from C1, C2, C3, C4, C5, C6, C7 or C8");
if (answer === "C1") {
    alert("you chose C1. there are " + cC1 + " C1s in the array");
}
else if (answer === "C2") {
    alert("you chose C2. there are " + cC2 + " C2s in the array");
}
else if (answer === "C3") {
    alert("you chose C3. there are " + cC3 + " C3s in the array");
}
else if (answer === "C4") {
    alert("you chose C4. there are " + cC4 + " C4s in the array");
}
else if (answer === "C5") {
    alert("you chose C5. there are " + cC5 + " C5s in the array");
}
else if (answer === "C6") {
    alert("you chose C6. there are " + cC6 + " C6s in the array");
}
else if (answer === "C7") {
    alert("you chose C7. there are " + cC7 + " C7s in the array");
}
else if (answer === "C8") {
    alert("you chose C8. there are " + cC8 + " C8s in the array");
}