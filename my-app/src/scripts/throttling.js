/*
*   diff b/w throttling and debouncing -
*   - debounce will ensure that in every function call there is atleast some(specified by us) time duration.
*   - whereas in throttling it is ensured that no call will be there for some specific amount of time,
*     function will be blocked for some specified interval of time.
*/

let throttlingFunc = (fn, td) => {
    let flag = true;
    return function(){
        let context = this,
        params = arguments
        if(flag){
            fn.apply(context, params)
            flag = false;
            setTimeout(()=>{
                flag = true
            }, 1000)
        }
        
    }
}

const loggerFunc = () => {
    let a = 'Happy'
    console.count("Throttled Function");
  }

const loggingFunc = throttlingFunc(loggerFunc, 1000)

window.addEventListener('resize', loggingFunc)


