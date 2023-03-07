import { Component } from "react";

export function hideable(InnerComponent) {
  class OuterComponent extends Component {
    state = {
      show: this.props.show,
    };
    handleClick = () => {
      this.setState({
        show: !this.state.show,
      });
    };
    render() {
      const {show, ...innerProps} = this.props;

      return (
        <div className="HideableClock">
          {this.state.show && <InnerComponent {...innerProps} />}
          <button onClick={this.handleClick}>
            {this.state.show ? 'Off' : 'On'}
          </button>
        </div>
      )
    }
  }
  return OuterComponent;
}
