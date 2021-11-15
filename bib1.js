//Задание 1

function findMin(arr){
    let min = 32000;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < min)
            min = arr[i];
    }
    console.log("Мин: " + min);
}

function findMax(arr){
    let max = -32000;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max)
            max = arr[i];
    }
    console.log("Макс: " + max);
}

function findMedium(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum+=arr[i];
    }
    sum/=arr.length;
    console.log("Среднее арифметическое: " + sum);
}

function clone(arr){
    let new_arr = [];
    for(let i = 0; i < arr.length; i++){
        new_arr[i] = arr[i];
    }
    console.log("Выходной массив: " + new_arr);
    return new_arr;
}