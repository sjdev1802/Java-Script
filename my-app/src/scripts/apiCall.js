
// let promise = new Promise((resolve, reject) => {
//     const result = fetch('https://api.github.com/users')
//     console.log(result)
//     result.then((response) =>  {
//         console.log(response)
//         resolve(response)
//     }).catch((e) => reject(e))
// })



// promise
// .then((result)=>{
//     return result.json()
// }).then((result) => {
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const loadData = async() => {
    const res = await fetch('https://api.github.com/users')
    const json = await res.json()
    console.log(json)
}

loadData()