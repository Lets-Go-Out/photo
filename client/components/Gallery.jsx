/* eslint-disable max-len */
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
    for (const key in this.props.imageList) {
      const imageArr = this.props.imageList[key].images_array;
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

  findNext() {
    this.setState(prevState => ({ currentIndex: prevState.currentIndex + 1 }));
  }

  closeModal() {
    this.setState({ currentIndex: null });
  }

  findPrev() {
    this.setState(prevState => ({ currentIndex: prevState.currentIndex - 1 }));
  }

  renderImageContent(src, index) {
    return (
      <div onClick={event => this.openModal(index)} key={index}>
        <img alt={src.description} src={src.image_url} key={src._id} width="400" height="300" />
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="gallery-grid">
          {this.state.imgUrls.map(this.renderImageContent)}
        </div>
        <GalleryModal
          closeModal={this.closeModal}
          findPrev={this.findPrev}
          findNext={this.findNext}
          hasPrev={this.state.currentIndex > 0}
          hasNext={this.state.currentIndex + 1 && this.state.currentIndex + 1 < this.state.imgUrls.length}
          src={this.state.imgUrls[this.state.currentIndex]}
        />
      </div>
    );
  }
}

export default Gallery;
