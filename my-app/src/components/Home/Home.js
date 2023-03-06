import styles from './Home.module.css';


import { Component, createElement } from 'react';
import Card from '../Card/Card';
import Select from '../Select/Select';

// export default class Home extends Component {
//   render() {
//     // return createElement(
//     //   'div',
//     //   {
//     //     className: 'Home',
//     //     id: 'homepage',
//     //   },
//     //   createElement('h2', {}, 'Home page'),
//     //   createElement('p', {}, 'lorem ipsum...'),
//     // );

//     return (
//       <div className="Home" id="homepage">
//         <h2>Home page</h2>
//         <p>lorem ipsum...</p>
//       </div>
//     );
//   }
// }

export default class Home extends Component {
  state = {
    prenoms: ['Jean', 'Paul', 'Eric'],
    selectedPrenom: 'Jean',
  };
  render() {
    const { prenoms, selectedPrenom } = this.state;
    return (
      <div className={styles.root}>
        <p>Vous avez sélectionné : {selectedPrenom}</p>
        <Select
          items={prenoms}
          selected={selectedPrenom}
          onSelected={(item) => this.setState({ selectedPrenom: item })}
          formatItem={(it, i) => <><b>{i}:</b><span>{it}</span></>}
        />

        <Card>
          <h2>Ceci provient de Home</h2>
          <p>lorem</p>
        </Card>
      </div>
    );
  }
}
