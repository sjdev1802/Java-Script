Function.prototype.myBind = function(...args) {
    let obj = this
    let params = args.slice(1)
    return function(...args2){
        obj.apply(args[0], [...params, ...args2])
    }
}

let myFunc = function(x){
    console.log(x)
}

let obj = {
    firstName: "Sudhanshu",
    lastName:  "Jindal"
}

myFunc.apply(obj, null)

let bindFun = myFunc.myBind(obj)

console.log(bindFun)


// sum(1)(2)(3)(4)(5)()


let sum = (x) => {
    return (y) => {
        if(y) return sum(x+y)
        else return x;
    } 
}

console.log(sum(1)(2)(5)(9)())

let debouncing = (fn, td) => {
    let timer;
    return function(){
        let context = this,
        params = arguments
        if(timer) clearTimeout(timer)
        timer = setTimeout(()=>{
            fn.apply(context, params)
        }, td)
    }
} 

let debounce = debouncing(myFunc, 1000)