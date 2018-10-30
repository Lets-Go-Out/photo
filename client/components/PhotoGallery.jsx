import React from 'react';
import Photo from './Photo.jsx';
import withModal from './withModal.jsx';



class PhotoGallery extends React.Component {
  render() {
    let imageHolder = null;
    let imageCollec = [];
    for (var key in this.props.imageList) {
      let imageArr = this.props.imageList[key].images_array;
      for (var key in imageArr) {
        imageCollec.push(imageArr[key]);

      }
    }
    let SlideWithModal = withModal(Photo);
    //console.log(imageHolder);
    imageHolder = imageCollec.map(slide => {
      return <SlideWithModal key={slide._id} image_src={slide.image_url} image_alt={slide.description} />;
    })


    return (
      <div className="image-container">
        {imageHolder}
      </div>
    );
  }
}


export default PhotoGallery;