import React from 'react';
import { connect } from 'react-redux';

function Profile({ name, onSubmit }) {
  return (
    <div className="Profile">
      <h2>Profile</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit(event.target.name.value);
        }}
      >
        <p>
          Name :
          <input name="name" defaultValue={name} />
        </p>
        <p>
          <button>Change</button>
        </p>
      </form>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    name: state.name,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmit(value) {
      dispatch({
        type: 'UPDATE_USER',
        payload: {
          name: value,
        },
      });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
