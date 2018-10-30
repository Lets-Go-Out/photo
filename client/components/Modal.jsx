import React, { Component } from 'react';
import PropTypes from 'prop-types';

// gray background
const backdropStyle = {
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(0,0,0,0.9)',
  padding: 50
};

const modalStyle = {
  backgroundColor: '#fff',
  borderRadius: 5,
  maxWidth: 500,
  minHeight: 300,
  margin: '0 auto',
  backgroundColor: 'rgba(0,0,0,0.5)',
  padding: 30,
  position: 'relative'
};

const footerStyle = {
  position: 'absolute',
  bottom: 20
};

export default class Modal extends React.Component {
  onClose = e => {
    e.stopPropagation();
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    if (this.props.show === false) {
      return null;
    }
    return (
      <div style={backdropStyle}>

        <div style={modalStyle}>
          <div>
            <button onClick={e => {
              this.onClose(e);
            }}>X</button>
          </div>
          <div>

            {this.props.children}

          </div>

          <div style={footerStyle}>

          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};
