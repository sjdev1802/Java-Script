let myFunc = function(hometown, state){
    console.log(`${this.firstName} ${this.lastName} from ${hometown}, ${state}`)
}

let myName = {
    firstName: 'Sudhanshu',
    lastName: 'Jindal'
}

// myFunc.call(myName, 'Hisar')

// myFunc.apply(myName, ['hisar'])

let bindFunct = myFunc.bind(myName, 'Hisar')

// console.log(bindFunct)
bindFunct('Haryana')

Function.prototype.myBind = function(...args){
    let obj = this
    let params = args.slice(1)
    return function(...args1){
        obj.apply(args[0], [...params, ...args1])
    }
}

let impBind = myFunc.myBind(myName, 'Hisar')

impBind('Haryana')