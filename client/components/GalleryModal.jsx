import React from 'react';
import Report from './Report';
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

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    if (!this.props.src) {
      return null;
    }
    return (
      <div>
        <div className="modal-overlay" />
        <div className="modal">
          <div key={this.props.src._id} className="modal-body">
            <a href="#" className="modal-close" onClick={this.props.closeModal}>&times;</a>
            {this.props.hasPrev && <a href="#" className="modal-prev" onClick={this.props.findPrev}>&lsaquo;</a>}
            {this.props.hasNext && <a href="#" className="modal-next" onClick={this.props.findNext}>&rsaquo;</a>}
            <div className="image-sec">
              <img alt={this.props.src.description} key={this.props.src._id} src={this.props.src.image_url} width="630" height="550" />
              <div>
                <img className="flag" src="flag.png" alt="flaggy" onClick={() => this.handleOpenModal('open')} />
                <Report
                  showModal={this.state.showModal}
                  handleCloseModal={this.handleCloseModal}
                />
              </div>
              <p>{this.props.src.description}</p>
              <p>{this.props.src.taken_by}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default GalleryModal;
