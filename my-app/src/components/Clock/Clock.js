import { Component, useEffect, useState } from 'react';

// export default class Clock extends Component {
//   constructor() {
//     super();
//     this.state = {
//       options: {
//         format: 'HH:mm:ss',
//       },
//       now: new Date(),
//     };
//   }
//   componentDidMount() {
//     this._interval = setInterval(() => {
//       // Object.assign() / shallow merge
//       this.setState({
//         // options: {
//         //   delay: 1000,
//         // },
//         now: new Date(),
//       });
//     }, 1000);
//   }
//   componentWillUnmount() {
//     clearInterval(this._interval);
//   }
//   render() {
//     const { formatHour } = this.props;
//     let content;
//     if (formatHour) {
//       content = formatHour(this.state.now);
//     } else {
//       content = this.state.now.toLocaleTimeString();
//     }
//     // dans un composant stateful on manipule les props via this.props
//     return <div className="Clock">{content}</div>;
//   }
// }

// Historiquement dans une classe le state est un objet :
// {
//   format: 'HH:mm:ss',
//   now: new Date(),
// }

// Avec les hooks le même state sera un tableau :
// [
//   'HH:mm:ss', // 1
//   new Date(), // 2
// ]

export default function Clock({ formatHour }) {
  const [format, setFormat] = useState('HH:mm:ss'); // 1
  const [now, setNow] = useState(new Date()); // 2

  // si pas de tableau en 2e paramètre, à chaque fois que le composant
  // se rafraichit la fonction sera appelée
  // useEffect(() => {});

  // si tableau vide en 2e paramètre, équivalent à componentDidMount
  // la fonction sera appelée quand le composant apparait pour la première
  // fois à l'écran
  // useEffect(() => {}, []);

  // si tableau rempli en 2e paramètre et que la ou les valeurs du tableau change
  // la fonction est rappelée (une fois initialement, puis dans cette exemple à chaque
  // fois que format change)
  // useEffect(() => {}, [format]);

  // si le callback de useEffect retourne une fonction, cette fonction
  // sera appelée avant :
  // - de rappeler le callback de useEffect
  // - de faire disparaitre le composant
  // useEffect(() => {
  //   return () => {}; // destructeur
  // }, [format]);

  useEffect(() => {
    const _interval = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => {
      clearInterval(_interval);
    };
  }, []);

  let content;
  if (formatHour) {
    content = formatHour(now);
  } else {
    content = now.toLocaleTimeString();
  }
  // dans un composant stateful on manipule les props via this.props
  return <div className="Clock">{content}</div>;
}
