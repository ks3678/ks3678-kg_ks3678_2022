let input = [1, 10, 123];

let dict = {
    1:"One",
    2:"Two",
    3:"Three",
    4:"Four",
    5:"Five",
    6:"Six",
    7:"Seven",
    8:"Eight",
    9:"Nine"
};

function phonetic(array){
    //result to print out
    let result = "";
    //array to store split up digits
    let integerSplit = [];

    //converts all digits in array to a single char to compare with dictionary
    for(let i =0; i<array.length; i++)
    {
        let temp = array[i].toString();
        for(let j = 0; j<temp.length; j++)
        {
            integerSplit.push(temp.charAt(j));
        }
    }

    return result;
}

console.log(phonetic(input));
