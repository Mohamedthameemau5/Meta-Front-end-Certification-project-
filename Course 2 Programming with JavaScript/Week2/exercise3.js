function addTwoNums(a,b){
    try {
        if(typeof(a) != "number"){
            throw new ReferenceError('the first argument is not a number')
        }else if(typeof(b) != "number"){
            throw new ReferenceError('The second argument is not a number')
        }else{
            console.log(a+b) //display the result
        }
        
    } catch(err){
        console.log("Error",err)
    }
}

addTwoNums(5,"5") // 55
console.log("It still works")