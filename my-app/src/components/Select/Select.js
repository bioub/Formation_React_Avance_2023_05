import './Select.css';

import { Component, createRef } from 'react';

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

  componentDidMount() {
    document.addEventListener('click', (event) => {
      if (this.hostRef.current.contains(event.target)) {
        return;
      }
      // console.log('document click');
      this.setState({
        opened: false,
      });
    });
  }

  render() {
    const { items, selected } = this.props;
    const { opened } = this.state;

    return (
      <div ref={this.hostRef} className="Select" onClick={this.toggleOpen}>
        <div className="selected">{selected}</div>
        {opened && (
          <div className="items">
            {items.map((it) => (
              <div
                className="item"
                key={it}
                onClick={() => this.handleItemClick(it)}
              >
                {it}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}
