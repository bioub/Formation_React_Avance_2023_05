import styles from './Select.module.scss';

import { Component, createRef, memo, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// export default class Select extends Component {
//   hostRef = createRef(null);

//   state = {
//     opened: false,
//   };

//   toggleOpen = (event) => {
//     // console.log(event.currentTarget); // <div class="Select">
//     // console.log(event.nativeEvent.currentTarget); // <div id="root">

//     // console.log('Select click');
//     this.setState({
//       opened: !this.state.opened,
//     });
//   };

//   handleItemClick = (item) => {
//     // console.log('item click');
//     this.setState({
//       opened: false,
//     });
//     this.props.onSelected(item);
//   };

//   handleDocumentClick = (event) => {
//     if (this.hostRef.current.contains(event.target)) {
//       return;
//     }
//     // console.log('document click');
//     this.setState({
//       opened: false,
//     });
//   };

//   componentDidMount() {
//     document.addEventListener('click', this.handleDocumentClick);
//   }

//   componentWillUnmount() {
//     document.removeEventListener('click', this.handleDocumentClick);
//   }

//   render() {
//     const { items, selected, formatItem } = this.props;
//     const { opened } = this.state;

//     return (
//       <div ref={this.hostRef} className={styles.root} onClick={this.toggleOpen}>
//         <div className={styles.selected}>{selected.toUpperCase()}</div>
//         {opened && (
//           <div className={styles.items}>
//           {/* <div className={styles.items} hidden={!opened}> */}
//           {/* <div className={classNames(styles.items, { [styles.hidden]: !opened })}> */}
//             {items.map((it, i) => (
//               <div
//                 className={styles.item}
//                 key={it}
//                 onClick={() => this.handleItemClick(it)}
//               >
//                 {formatItem ? formatItem(it, i) : it}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     );
//   }
// }

/**
 *
 * @param {object} props
 * @param {string[]} props.items
 * @param {string} props.selected
 * @returns
 */
function Select({ items, selected, formatItem, onSelected }) {
  console.log('refresh Select');

  const [opened, setOpened] = useState(false);
  const hostRef = useRef(null);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (hostRef.current.contains(event.target)) {
        return;
      }
      setOpened(false);
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  const toggleOpen = () => {
    setOpened(!opened);
  };

  const handleItemClick = (item) => {
    setOpened(false);
    onSelected(item);
  };

  return (
    <div ref={hostRef} className={styles.root} onClick={toggleOpen}>
      <div className={styles.selected}>{selected.toUpperCase()}</div>
      {opened && (
        <div className={styles.items}>
          {items.map((it, i) => (
            <div
              className={styles.item}
              key={it}
              onClick={() => handleItemClick(it)}
            >
              {formatItem ? formatItem(it, i) : it}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

Select.propTypes = {
  selected: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string)
}

export default memo(Select);
