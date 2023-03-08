import React from 'react';
import './Header.css';
import { connect } from 'react-redux';

function Header({ prenom }) {
  return (
    <div className="Header">
      <h2>MyApp (Redux)</h2>
      <span>Hello {prenom}</span>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    prenom: state.name,
  };
}

export default connect(mapStateToProps)(Header);
