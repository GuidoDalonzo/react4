export const getFetch = new Promise(( resolve, reject )=>{

    let condition=true
    if(condition) {
        setTimeout(()=>{
            resolve(productos)
        }, 3000)
    } else {
        reject('400 not found')
    }

})