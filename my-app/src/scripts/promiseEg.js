let promise1 = new Promise((resolve, reject) => {
    let clean = true;
    if(clean){
        resolve(`everything's great 1`)
    }else{
        reject(`nothing's fine`)
    }
})

let promise2 = new Promise((resolve, reject) => {
    let clean = true;
    if(clean){
        resolve(`everything's great 2`)
    }else{
        reject(`nothing's fine`)
    }
})

let promise3 = new Promise((resolve, reject) => {
    let clean = true;
    if(clean){
        resolve(`everything's great 3`)
    }else{
        reject(`nothing's fine`)
    }
})

// promise1.then((result) => {
//     console.log(result)
// }).catch((result)=>{
//     console.log(result)
// })

Promise.all([promise1, promise2, promise3]).then((result)=>{
    console.log(`resolved + ${result}`)
}).catch((error)=>{
    console.log(error)
})