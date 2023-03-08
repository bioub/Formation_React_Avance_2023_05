const memo = require('lodash/memoize');

let todos = (new Array(2_000_000)).fill({}).map(() => ({id: Math.random(), text: (Math.random() > 0.5) ? 'Pain' : 'Lait'}))

function countPainOccurences(todos) {
  return todos.filter((t) => t.text === 'Pain').length;
}

const countPainOccurencesMemo = memo(countPainOccurences);

console.time('countPainOccurences');
console.log('Pains : ' + countPainOccurencesMemo(todos));
console.timeEnd('countPainOccurences');

console.time('countPainOccurences');
console.log('Pains : ' + countPainOccurencesMemo(todos));
console.timeEnd('countPainOccurences');

// todos.push({id: Math.random(), text: 'Pain'});
todos = [...todos, {id: Math.random(), text: 'Pain'}]

console.time('countPainOccurences');
console.log('Pains : ' + countPainOccurencesMemo(todos));
console.timeEnd('countPainOccurences');

