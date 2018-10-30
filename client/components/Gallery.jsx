import React from 'react';
import ReactDOM from 'react-dom';
import GalleryModal from './GalleryModal.jsx';


class Gallery extends React.Component {
  constructor(props) {
    console.log('gallery', props);
    super(props);
    this.state = { 
      currentIndex: null, 
      imgUrls: [] 
    };
    this.closeModal = this.closeModal.bind(this);
    this.findNext = this.findNext.bind(this);
    this.findPrev = this.findPrev.bind(this);
    this.renderImageContent = this.renderImageContent.bind(this);
  }
  renderImageContent(src, index) {
    return (
      <div onClick={(e) => this.openModal(e, index)} key={index}>

        <img alt={src.description} src={src.image_url} key={src._id} width="400" height="300" />
      </div>
    )
  }
  openModal(e, index) {
    this.setState({ currentIndex: index });
  }
  closeModal(e) {
    if (e != undefined) {
      e.preventDefault();
    }
    this.setState({ currentIndex: null });
  }
  findPrev(e) {
    if (e != undefined) {
      e.preventDefault();
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1
    }));
  }
  findNext(e) {
    if (e != undefined) {
      e.preventDefault();
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1
    }));
  }
  componentDidMount() {
    let imageHolder = null;
    let imageCollec = [];
    for (var key in this.props.imageList) {
      let imageArr = this.props.imageList[key].images_array;
      for (var key in imageArr) {
        imageCollec.push(imageArr[key]);

      }
    }
    imageHolder = imageCollec;
    this.setState({ imgUrls: imageHolder });
  }
  render() {

    return (
      <div className="gallery-container">

        <div className="gallery-grid">
          {this.state.imgUrls.map(this.renderImageContent)}
        </div>
        <GalleryModal
          closeModal={this.closeModal}
          findPrev={this.findPrev}
          findNext={this.findNext}
          hasPrev={this.state.currentIndex > 0}
          hasNext={this.state.currentIndex + 1 < this.state.imgUrls.length}
          src={this.state.imgUrls[this.state.currentIndex]}
        />
      </div>
    )
  }
}

export default Gallery;