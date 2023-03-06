import { Component, createElement } from 'react';
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
      <div>
        <p>Vous avez sélectionné : {selectedPrenom}</p>
        <Select
          items={prenoms}
          selected={selectedPrenom}
          onSelected={(item) => this.setState({ selectedPrenom: item })}
        />
      </div>
    );
  }
}
