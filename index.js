// Exercise 1********************************
function newFunction() {
    for (let i = -3; i <= 8; i++) {
        console.log(i);
    }
}
// !! : functions have to be called to run!
// newFunction();
// Exercise A********************************
let i=-10
while(i< 5){
    console.log(i)
    i++
}
// !! : five should be included!
// Exercise 2*********************************
for(i=-5; i<=5; i++){
// !! : you should be using a nested loop - check out the CWAnwers gist for an example
console.log(i)
console.log(i)
console.log(i)
}
// Exercise B**********************************
let i=10
while(i>0){
    console.log(i)
    i--
}
// !! : 0 should be included 
// Exercise 3***********************************
for(let i=-50; i<=50; i=i+2){
    console.log(i)
}
// Exercise C***********************************
let name_array=[];
let no='q'
while(name_array != no){
    // !! : you can't comapre the value of an array (as a whole) to a string value
    if(name_array==no){
        // !! : your for loop should be outside of your while loop
        for(List= name_array; list.length< name_array; list++){
            // !! : make sure your variable names match
            console.log(list) // !! this would just print the index position
        }
    }
let name_array=prompt('Enter a word, or Enter q to Quit') // !! : this promt should come before the if statment
list=[name_array] // !! : this variable should be declared (use let) also you don't need it
console.log(list)
}
// Exercise 4*************************************
let high_scores = [2112, 1024, 9000, 9001, 7200, 2600, 10000]
// !! : use let to declare a variable (including for your iterators) and the iterator should be named DIFFRENT than the array
for(high_scores=high_scores.length; high_scores<=high_scores.length; high_scores++){
    console.log(high_scores)
    if(high_scores>9000){
        console.log('Over 9000')
    }
}

