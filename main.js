let myArgs = process.argv.slice(2);

let dict = {
    0: "Zero",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine"
};

function phonetic(myArgs) {
    //result to print out
    let result = "";
    //array to store split up digits
    let integerSplit = [];

    //converts all digits in array to a single char to compare with dictionary
    for (let i = 0; i < myArgs.length; i++) {
        let temp = myArgs[i].toString();
        for (let j = 0; j < temp.length; j++) {
            integerSplit.push(temp.charAt(j));
        }

        //adds a space to seperate complete ints (ex. 1, 10 -> '1',' ','1','0);
        //doesnt do it for the last int
        if(i != myArgs.length - 1)
            integerSplit.push(" ");
    }

    //compares each digit with dictionary key
    for (let i = 0; i < integerSplit.length; i++) {
        //add comma between each complete ints
        if (integerSplit[i] == " ") {
            result += ",";
        }
        else {
            for (let key in dict) {
                //converts char back to int
                //compares int with dictionary key
                //if key equals int then the value to result
                if (key == parseInt(integerSplit[i])) {
                    result += dict[key];
                }
            }
        }
    }

    return result;
}

console.log(phonetic(myArgs));
