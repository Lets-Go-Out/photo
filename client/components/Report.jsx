import React from 'react';
import ReactModal from 'react-modal';
// ReactModal.setAppElement('#gallery-container');

const modalStyle = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      //backgroundColor: 'rgba(255, 255, 255, 0.75)'
    },
    content: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      right: '40px',
      bottom: '40px',
      border: 'none',
      background: '#fff',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '4px',
      outline: 'none',
      padding: '20px',
      width: '00px'
    }
};


function Report(props) {
  // using react-modal library. Provides some standard functions like 'onRequestClose'
  // which allows you to close the modal by clicking in the overlay and simple styling options
  // for both the modal and overlay.
  return (
    <div>
      <div id="Hide" onClick={props.handleOpenModal}>
       
      </div>
      <div width='200'>
      <ReactModal 
        isOpen={props.showModal}
        contentLabel="Report"
        onRequestClose={props.handleCloseModal}
        className="modal"
        overlayClassName="overlay"
        //style={modalStyle}
      >

        <div className='myModal' style={{width: '60%'}}>
          <div>
            Report a photo problem
          </div>
          <div>
            <button onClick={props.handleCloseModal}>
              Unrelated to restaurant
            </button>
          </div>
          <div>
            <button onClick={props.handleCloseModal}>
               Inappropriate content
            </button>
          </div>
          <div>
            <button onClick={props.handleCloseModal}>
               I dont't like this photo
            </button>
          </div>
          <div>
            <button onClick={props.handleCloseModal}>
              Cancel
            </button>
          </div>
          
          
        </div>

      </ReactModal>
      </div>
    </div>
  );
}

export default Report;


