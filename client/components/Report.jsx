import React from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
//ReactModal.setAppElement('#gallery-container');

const modalStyle = {
    overlay: {

    },
    content: {
      position: 'fixed',
      left: '46%',
      bottom: '100px',
      background: '#fff',
      borderRadius: '4px',
      outline: 'none',
      padding: '5px',
      width: '350px',
      height: '280px'
    }
};

function Report(props) {
  return (
    <div>
      <div width='200' position='relative'>
      <ReactModal
        isOpen={props.showModal}
        contentLabel="Report"
        onRequestClose={props.handleCloseModal}
        className="modal"
        overlayClassName="overlay"
        style={modalStyle}
      >
        <div className="ReportDiv">
            <h4>Report a photo problem</h4>
            <hr/>
            <button className="btn btn-primary" onClick={props.handleCloseModal}>
              Unrelated to restaurant
            </button>
           &nbsp;
            <button className="btn btn-primary" onClick={props.handleCloseModal}>
               Inappropriate content
            </button>
             &nbsp;
            <button className="btn btn-primary" onClick={props.handleCloseModal}>
               I dont't like this photo
            </button>
             &nbsp;
            <button  className="btn btn-default" onClick={props.handleCloseModal}>
              Cancel
            </button>
             &nbsp;
          </div>
      </ReactModal>
      </div>
    </div>
  );
}

Report.propTypes = {
  showModal: PropTypes.bool,
  handleCloseModal: PropTypes.func
}

export default Report;
