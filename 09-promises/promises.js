'use strict'
/**
* a series of Promise examples to try out, copy and change 
* see what happens with
* 
*  Try the below in DevTools
*
* some from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
* @author PMCampbell
*/

// from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
// resolve but then throw an error
Promise.resolve()
    .then(() => {
        // Makes .then() return a rejected promise
        throw new Error('Oh no!');
    })
    .then(() => {
        console.log('Not called.');
    }).catch(error => {
        console.error('onRejected function called: ' + error.message);
    });
// from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
// action on resolve
Promise.resolve()
    //.then(resolve, reject)
    .then(() => 99, () => 42) // onResolved returns 99 which is wrapped in a resolving Promise
    .then(solution => console.log('Resolved with ' + solution)); // Resolved with 99

// from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
// action on reject
Promise.reject()
    //.then(resolve, reject)
    .then(() => 99, () => 42) // onRejected returns 42 which is wrapped in a resolving Promise
    .then(solution => console.log('Resolved with ' + solution)); // Resolved with 42
// acttion on reject, but not using reject
Promise.reject()
    //.then(resolve, reject)
    .then(() => 99) // onResolved  returns 99, onRejected passed on to the catch
    .catch(solution => console.log('caught reject')); // not resolved & reject not consumed


// Own Promise on a timeout
// resolve
// doesn't really matter what's in here, you will not be writing promises
// use it as an example of a promise that succeeds
const promiseWorks = new Promise((resolve) => {
    // using timeout  to delay execution
    setTimeout(resolve, 1000);
});
// consume the promise
// if the then() also returns a promise
promiseWorks.then(() => { console.log('complete'); return 'success' }).catch(() => console.log('end'))
// if the then() because of return statement, also returns a promise
const nextPromise = promiseWorks.then(() => { console.log('complete'); return 'success' }).catch(() => console.log('failed'))
// should be state: fulfilled, result: 'success'
console.log(nextPromise)

// reject
// doesn't really matter what's in here, you will not be writing promises
// use it as an example of a promise that fails 
const promiseFail = new Promise((resolve, reject) => {
    // using timeout to delay
    setTimeout(reject, 1000);
});
// consume the promise
promiseFail.then(() => { console.log('complete'); return 'reject' }).catch(() => console.log('failed'))
