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

console.log("C1: " + cC1);
console.log("C2: " + cC2);
console.log("C3: " + cC3);
console.log("C4: " + cC4);
console.log("C5: " + cC5);
console.log("C6: " + cC6);
console.log("C7: " + cC7);
console.log("C8: " + cC8);