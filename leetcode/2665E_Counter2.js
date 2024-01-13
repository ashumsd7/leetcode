/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    let t = init
    return {
        increment: () => {
            console.log('Going for incement++ init is', init)
            init += 1
            return init
        },
        decrement: () => {
            console.log('Going for decrement-- init is', init)
            init -= 1
            return init
        },
        reset: () => {
            console.log('Going for reset-- init is', init, t)
            init = t
            return t
        }
    }
};


const counter = createCounter(5)
console.log('  counter.increment()', counter.increment()); // 6
// console.log('  counter.increment()', counter.increment()); // 6
// console.log('  counter.decrement()', counter.decrement()); // 6
console.log('  counter.reset()', counter.reset()); // 6
// console.log('  counter.reset()', counter.reset()); // 6

console.log('  counter.decrement()', counter.decrement()); // 6




