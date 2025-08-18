// let marks = prompt('Enter Marks!');

if(marks > 100 || marks < 0){
    console.log('please enter valid input!');
}else if(marks >= 90 && marks <=100){
    console.log('A');
}else if(marks >= 70 && marks <= 89){
    console.log('B');
}else if(marks >= 60 && marks <= 69){
    console.log('C');
}else if(marks >= 50 && marks <= 59){
    console.log('D');
}else if(marks >= 0 && marks <= 49){
    console.log('F');
}