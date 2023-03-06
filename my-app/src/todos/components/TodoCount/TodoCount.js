export default function TodoCount({ count }) {
  return (
    <div className="TodoCount">
      {count > 1 ? count + ' todos' : count + ' todo'} remaining
    </div>
  );
}

// export default function TodoCount(props) {
//   return (
//     <div className="TodoCount">
//       {props.count > 1 ? props.count + ' todos' : props.count + ' todo'} remaining
//     </div>
//   );
// }

// const x = 1;
// const coords = { x }; // shorthand { x: x }

// const coords = { x: 1, y: 2};

// const x = coords.x;
// const y = coords.y;

//       { x: 1       , y: 2}
// const { x: myXvalue      } = coords;
// console.log(myXvalue);

//       { x: 1       , y: 2}
// const { x      } = coords;
