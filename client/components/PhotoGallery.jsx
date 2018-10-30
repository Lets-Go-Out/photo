import React from 'react';
/*import Photo from './Photo.jsx';*/
//import withModal from './withModal.js'


class PhotoGallery extends React.Component {
  onClickPic(){
    alert('was clicked');
  }
  render() {
    let Slide
    let imageHolder = null;
    let imageCollec = [];
    for (var key in this.props.imageList) {
      let imageArr = this.props.imageList[key].images_array;
      for (var key in imageArr) {
        imageCollec.push(imageArr[key]);
      }
    }

    
    imageHolder = imageCollec.map(respic => {
      return <img key={respic.image_id} src={respic.image_url} width='300' height='200' />
    })
    console.log('hello',imageHolder);

    return (
      <div>
        {imageHolder}
      </div>
    );
  }
}


export default PhotoGallery;