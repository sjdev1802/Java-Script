let counter = 0
let fetchResult = (x, y) => {
    console.log(`fetching ${x} for ${y}`)
}

let debounceFunc = (fn, t) => {
    let timer;
    return function(...args) {
        let context = this,
        args1 = arguments

        console.log(fn)
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(context, ['data', args1[0]])
        }, t)
    }
}

const debounce =  debounceFunc(fetchResult, 1000)

