import styles from './Select.module.scss';

import { Component, createRef } from 'react';
import classNames from 'classnames';

export default class Select extends Component {
  hostRef = createRef(null);

  state = {
    opened: false,
  };

  toggleOpen = (event) => {
    // console.log(event.currentTarget); // <div class="Select">
    // console.log(event.nativeEvent.currentTarget); // <div id="root">

    // console.log('Select click');
    this.setState({
      opened: !this.state.opened,
    });
  };

  handleItemClick = (item) => {
    // console.log('item click');
    this.setState({
      opened: false,
    });
    this.props.onSelected(item);
  };

  handleDocumentClick = (event) => {
    if (this.hostRef.current.contains(event.target)) {
      return;
    }
    // console.log('document click');
    this.setState({
      opened: false,
    });
  };

  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick);
  }

  render() {
    const { items, selected, formatItem } = this.props;
    const { opened } = this.state;

    return (
      <div ref={this.hostRef} className={styles.root} onClick={this.toggleOpen}>
        <div className={styles.selected}>{selected.toUpperCase()}</div>
        {opened && (
          <div className={styles.items}>
          {/* <div className={styles.items} hidden={!opened}> */}
          {/* <div className={classNames(styles.items, { [styles.hidden]: !opened })}> */}
            {items.map((it, i) => (
              <div
                className={styles.item}
                key={it}
                onClick={() => this.handleItemClick(it)}
              >
                {formatItem ? formatItem(it, i) : it}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}
