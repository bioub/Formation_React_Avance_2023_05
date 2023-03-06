import './Select.css';

import { Component } from 'react';

export default class Select extends Component {
  state = {
    opened: false,
  };

  toggleOpen = () => {
    this.setState({
      opened: !this.state.opened,
    });
  };

  handleItemClick = (item) => {
    this.setState({
      opened: false,
    });
    this.props.onSelected(item);
  };

  render() {
    const { items, selected } = this.props;
    const { opened } = this.state;

    return (
      <div className="Select" onClick={this.toggleOpen}>
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
