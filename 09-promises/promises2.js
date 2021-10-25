const promiseFail = new Promise((resolve, reject) => {
    // using timeout to delay
    setTimeout(reject, 10000);
});
// consume the promise
let x = promiseFail.then(() => { console.log('complete'); return 'complete' },
		() => { console.log('reject'); return 'reject' })
		.catch(() => console.log('failed'))
		
console.log(x)
const promiseX = new Promise((resolve, reject) => {
    // using timeout to delay
    setTimeout(resolve, 10000);
});
// consume the promise
let x = promiseX.then(() => { console.log('complete'); return 'complete' },
		() => { console.log('reject'); return 'reject' })
		.catch(() => console.log('failed'))
		
console.log(x)

const promiseFail = new Promise((resolve, reject) => {
    // using timeout to delay
    setTimeout(reject, 10000);
});
// consume the promise
let x = promiseFail.then(() => { console.log('complete'); return 'complete' })
		.catch(() => console.log('failed'))
		
console.log(x)
