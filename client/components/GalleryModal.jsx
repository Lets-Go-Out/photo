import React from 'react';
import ReactDOM from 'react-dom';


class GalleryModal extends React.Component {
  constructor(props) {
    console.log('gallery modal', props);
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(event) {
    //ESC key
    if (event.keyCode === 27)
      this.props.closeModal();
    //Left arrow
    if (event.keyCode === 37 && this.props.hasPrev)
      this.props.findPrev();
    //Right arrow
    if (event.keyCode === 39 && this.props.hasNext)
      this.props.findNext();
  }
  render () {
    if (!this.props.src) {
      return null;
    }
    return (
      <div>
        <div className='modal-overlay'></div>
        <div className='modal'>
          <div className='modal-body'>
            <a href='#' className='modal-close' onClick={this.props.closeModal} onKeyDown={this.handleKeyDown}>&times;</a>
            {this.props.hasPrev && <a href='#' className='modal-prev' onClick={this.props.findPrev} onKeyDown={this.handleKeyDown}>&lsaquo;</a>}
            {this.props.hasNext && <a href='#' className='modal-next' onClick={this.props.findNext} onKeyDown={this.handleKeyDown}>&rsaquo;</a>}
            <div className='image-sec'>
              <img alt={this.props.src.description} key={this.props.src._id} src={this.props.src.image_url} width='560' height='440' />
              <p>{this.props.src.description}</p>
              <p>{this.props.src.taken_by}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default GalleryModal;
