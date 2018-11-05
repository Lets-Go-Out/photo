/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable guard-for-in */
import React from 'react';
import GalleryModal from './GalleryModal';
import '../../public/style.css';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: null,
      imgUrls: [],
    };
    this.closeModal = this.closeModal.bind(this);
    this.findNext = this.findNext.bind(this);
    this.findPrev = this.findPrev.bind(this);
    this.renderImageContent = this.renderImageContent.bind(this);
  }

  componentDidMount() {
    let imageHolder = null;
    const imageCollec = [];
    // eslint-disable-next-line no-restricted-syntax
    // eslint-disable-next-line react/prop-types
    for (const key in this.props.imageList) {
      // eslint-disable-next-line react/prop-types
      const imageArr = this.props.imageList[key].images_array;
      // eslint-disable-next-line no-restricted-syntax
      // eslint-disable-next-line guard-for-in
      // eslint-disable-next-line no-restricted-syntax
      // eslint-disable-next-line no-shadow
      for (const key in imageArr) {
        imageCollec.push(imageArr[key]);
      }
    }
    imageHolder = imageCollec;
    this.setState({ imgUrls: imageHolder });
  }

  openModal(index) {
    this.setState({ currentIndex: index });
  }

  // eslint-disable-next-line react/sort-comp
  renderImageContent(src, index) {
    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      <div onClick={() => this.openModal(index)} key={index}>
        <img
          alt={src.description}
          src={src.image_url}
          key={src._id}
          width="400"
          height="300"
        />
      </div>
    );
  }

  closeModal() {
    this.setState({ currentIndex: null });
  }

  findPrev() {
    this.setState(prevState => ({ currentIndex: prevState.currentIndex - 1 }));
  }

  findNext() {
    this.setState(prevState => ({ currentIndex: prevState.currentIndex + 1 }));
  }

  render() {
    return (
      <div>
        <div className="gallery-grid">
          // eslint-disable-next-line react/destructuring-assignment
          {this.state.imgUrls.map(this.renderImageContent)}
        </div>
        <GalleryModal
          closeModal={this.closeModal}
          findPrev={this.findPrev}
          findNext={this.findNext}
          // eslint-disable-next-line react/destructuring-assignment
          hasPrev={this.state.currentIndex > 0}
          // eslint-disable-next-line react/destructuring-assignment
          hasNext={
            this.state.currentIndex + 1
            && this.state.currentIndex + 1 < this.state.imgUrls.length
          }
          // eslint-disable-next-line react/destructuring-assignment
          src={this.state.imgUrls[this.state.currentIndex]}
        />
      </div>
    );
  }
}

export default Gallery;
