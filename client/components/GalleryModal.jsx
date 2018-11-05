/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/prop-types */
import React from 'react';
// eslint-disable-next-line import/extensions
import Report from './Report.jsx';
import '../../public/style.css';

class GalleryModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,

    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  // modal code
  handleOpenModal(option) {
    if (option === 'open') {
      const newState = this.state;
      newState.showModal = true;
      this.setState(newState);
    }
  }

  handleCloseModal(e) {
    e.stopPropagation();
    // eslint-disable-next-line react/destructuring-assignment
    if (this.state.showModal) {
      this.setState({ showModal: false });
    } else {
      this.setState({ showModal: true });
    }

    const newState = this.state;
    newState.showModal = false;
    this.setState({ showModal: false });
  }

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    if (!this.props.src) {
      return null;
    }
    return (
      <div>
        <div className="modal-overlay" />
        <div className="modal">
          // eslint-disable-next-line no-underscore-dangle
          <div key={this.props.src._id} className="modal-body">
            <a href="#" className="modal-close" onClick={this.props.closeModal}>&times;</a>
            {this.props.hasPrev && <a href="#" className="modal-prev" onClick={this.props.findPrev}>&lsaquo;</a>}
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            {this.props.hasNext && <a href="#" className="modal-next" onClick={this.props.findNext}>&rsaquo;</a>}
            <div className="image-sec">
              // eslint-disable-next-line jsx-quotes
              // eslint-disable-next-line no-underscore-dangle
              <img alt={this.props.src.description} key={this.props.src._id} src={this.props.src.image_url} width="630" height="440" />
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events
              <div onClick={() => this.handleOpenModal('open')}>
                <img className="flag" src="flag.png" />

                <Report
                  showModal={this.state.showModal}
                  // handleOpenModal={this.handleOpenModal}
                  handleCloseModal={this.handleCloseModal}
                />

              </div>
              <p>{this.props.src.description}</p>
              // eslint-disable-next-line react/prop-types
              <p>{this.props.src.taken_by}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default GalleryModal;
