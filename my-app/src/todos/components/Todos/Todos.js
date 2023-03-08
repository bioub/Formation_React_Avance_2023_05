import { useCallback, useMemo, useState } from 'react';
import Clock from '../../../components/Clock/Clock';
import Select from '../../../components/Select/Select';
import TodoFormContainer from '../../containers/TodoFormContainer';
import TodoListContainer from '../../containers/TodoListContainer';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';

export default function Todos() {
  return (
    <div className="Todos">
      <TodoFormContainer />
      <TodoListContainer />
      <hr />
      <Clock formatHour={(now) => now.toString()} />
    </div>
  );
}

// const possibleTodos = ['Pain', 'Lait', 'Beurre'];

// export default function Todos() {
//   console.log('refresh Todos');


//   // const [todos, setTodos] = useState([
//   //   { id: Math.random(), text: 'Pain' },
//   //   { id: Math.random(), text: 'Lait' },
//   // ]);
//   const [todos, setTodos] = useState(
//     (new Array(10)).fill({}).map(() => ({id: Math.random(), text: (Math.random() > 0.5) ? 'Pain' : 'Lait'}))
//   );
//   const [newTodo, setNewTodo] = useState('Beurre');

//   function addTodo(val) {
//     setTodos([...todos, { id: Math.random(), text: val }]);
//     // todos.push({ id: Math.random(), text: val });
//     // setTodos(todos);
//   }

//   // const formatItem = useMemo(() => (it, i) => <><b>{i}:</b><span>{it}</span></>, [])
//   const formatItem = useCallback((it, i) => <><b>{i}:</b><span>{it}</span></>, [])

//   return (
//     <div className="Todos">
//       <TodoForm
//         newTodoInput={newTodo}
//         onNewTodoChange={(val) => setNewTodo(val)}
//         onNewTodoAdd={addTodo}
//       />
//       <TodoList count={todos.length} items={todos} />

//       <hr />
//       <Clock formatHour={(now) => now.toString()} />
//       <Select
//           items={possibleTodos}
//           selected={newTodo}
//           onSelected={setNewTodo}
//           formatItem={formatItem}
//         />
//     </div>
//   );
// }
