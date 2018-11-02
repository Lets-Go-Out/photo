import React from 'react';
import Report from'./Report.jsx';
//import App from './../index.js';
import '../../public/style.css';

// const GalleryModal = (props) => {
//   //console.log('gallery modal', props);
//   if (!props.src) {
//     return null;
//   }
//   function flaggy() {
//     alert('was clicked!');
//   }

//   return (
//     <div>
//       <div className='modal-overlay'></div>
//       <div className='modal'>
//         <div key={props.src._id} className='modal-body'>
//           <a href='#' className='modal-close' onClick={props.closeModal}>&times;</a>
//           {props.hasPrev && <a href='#' className='modal-prev' onClick={props.findPrev}>&lsaquo;</a>}
//           {props.hasNext && <a href='#' className='modal-next' onClick={props.findNext}>&rsaquo;</a>}
//           <div className='image-sec'>
//             <img alt={props.src.description} key={props.src._id} src={props.src.image_url} width='630' height='440' />
//             <div onClick={flaggy}>
//               <img className='flag' src={'flag.png'} />
//             </div>
//             <p>{props.src.description}</p>
//             <p>{props.src.taken_by}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default GalleryModal;

class GalleryModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showModal: false,
      
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  // modal code
  handleOpenModal(option) {
    if(option === 'open'){
      let newState = this.state;
      newState.showModal = true;
      this.setState(newState);
    }
    
  }

  handleCloseModal(e) {
   e.stopPropagation();
   if(this.state.showModal){
     this.setState({showModal: false});
   } else{
    this.setState({showModal: true});
   }

    //alert('was cliked');
    let newState = this.state;
    newState.showModal = false;
    this.setState({showModal: false});
  }

  render(){
    if (!this.props.src) {
      return null;
    }
    return (
    <div>
      <div className='modal-overlay'></div>
      <div className='modal'>
        <div key={this.props.src._id} className='modal-body'>
          <a href='#' className='modal-close' onClick={this.props.closeModal}>&times;</a>
          {this.props.hasPrev && <a href='#' className='modal-prev' onClick={this.props.findPrev}>&lsaquo;</a>}
          {this.props.hasNext && <a href='#' className='modal-next' onClick={this.props.findNext}>&rsaquo;</a>}
          <div className='image-sec'>
            <img alt={this.props.src.description} key={this.props.src._id} src={this.props.src.image_url} width='630' height='440' />
            <div onClick={() => this.handleOpenModal('open')}>
              <img className='flag' src={'flag.png'} />
              
              <Report
                showModal={this.state.showModal}
                //handleOpenModal={this.handleOpenModal}
                handleCloseModal={this.handleCloseModal}
              />
             
            </div>
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
