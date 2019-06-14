// Javascript Foundations Assessments
console.log("1)")

// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three" or, print the number and "is not divisble by three".
isDivis3 = (num) => num = num % 3 === 0 ? `${num} is divisible by 3` : `${num} is not divisible by 3`
console.log(isDivis3(0))
// 2. Write an object called helloMe. Include your first_name, last_name and at least two other properties of you. Write a function that returns a description of you.
console.log('\n2)')

let helloMe = {
    first_name: 'Evan', 
    last_name: 'Katz', 
    dog: 'Kobe', 
    cat: 'Timmy'
}
describeMe = (object) => {
    console.log(`${object.last_name}, ${object.first_name}: father to dog ${object.dog} and cat ${object.cat}`)
}
describeMe(helloMe)
// 3. Create an array of 5 grocery items. Write a function that returns the first, middle, and last item as a string.
console.log('\n3)')

let groceries = ['carrots', 'garlic', 'apples', 'booch', 'breakfast burritos']
evenIndex = (array) => {
    let newArray = []
    for(let i = 0; i < array.length; i++){
        if(i % 2 === 0){
            newArray.push(array[i])
        }
    }
     return newArray.join(", ")
}
console.log(evenIndex(groceries))
// 4. Write a function called alphabetSoup that takes an argument of "str" and return a string with the letters in alphabetical order (ie. learn becomes aelnr). Assume numbers and punctuation symbols will not be included in the parameter.
console.log('\n4)')

alphabetSoup = (str) => {
    let strArr = str.split('')
    return newstr = strArr.sort().join('')
}
console.log(alphabetSoup('learn'))
// 5. Given the arrays below, write a function animalNums that uses a for loop to print one value from each array concatenated together.
console.log('\n5)')

var nums = [9, 5, 88, 2, 5, 42, 57]

var nouns = ["ducks", "elephants", "pangolin", "rhinoceros", "giraffes", "penguins", "llamas"]

animalNums = (arr1, arr2) => {
    let animals = []
    for(let j = 0; j < arr2.length; j++){
        let i = Math.floor(Math.random() * 7)
        animals.push(`${arr1[i]} ${arr2[j]}`)
    }
    return animals.join(', ')
}
console.log(animalNums(nums, nouns))

// output should be: "9 ducks", etc

//6. Create an array of 5 numbers. Write a function that loops through the array and returns a new array of the numbers multiplied by 5.
console.log('\n6)')

numbers = [9, 5, 28, 90, 14]
mult5 = (array) => {
    newArr = []
    for(let i = 0; i < array.length; i++){
        newArr[i] = array[i]*5
    }
    return newArr
}
console.log(mult5(numbers))

var text = 'outside'
function logIt(){
    console.log(text)
    var text = 'inside'
}

logIt()