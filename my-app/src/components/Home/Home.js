import styles from './Home.module.css';


import { Component, createElement } from 'react';
import Card from '../Card/Card';
import Select from '../Select/Select';
import { hideable } from '../../hocs/hideable';
import Clock from '../Clock/Clock';

const HideableClock = hideable(Clock);

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
    prenoms: ['Jean', 'Paul', 'Eric', 123],
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

        <HideableClock />

        {/* Les higher order components peuvent dans 99% des cas être remplacés par
          - des hooks (si l'objectif était d'obtenir des props supplémentaire, ex: withRouter)
          - soit un composant avec children voir render props si de l'ui supplémentaire, ex: hideable)
        */}
        {/*
        Le même comportement serait obtenu comme ceci
        <Hideable>
          <Clock />
        </Hideable> */}
      </div>
    );
  }
}
