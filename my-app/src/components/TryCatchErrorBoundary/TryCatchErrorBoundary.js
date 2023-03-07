import { Component } from 'react';

export default class TryCatchErrorBoundary extends Component {
  state = {
    errorMessage: null,
  };

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { errorMessage: error.message };
  }

  componentDidCatch(error, errorInfo) {
    // TODO envoyer l'erreur à un service de log
    console.log('Erreur : ', error.message);
  }
  render() {
    if (this.state.errorMessage) {
      return <div>
        {this.state.errorMessage}
        <button onClick={() => this.setState({errorMessage: null})}>Retry</button>
      </div>;
    }

    return this.props.children;
  }
}
