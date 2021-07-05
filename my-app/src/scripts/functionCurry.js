let multiply = function(x, y){
    console.log(x*y)
}

let multiplyBy2 = multiply.bind({}, 2)

// multiplyBy2(3)

let multiplyFunc = function(x){
    return function(y){
        console.log(x*y)
    }
}

let multiply3 = multiplyFunc(3)

multiply3(5)