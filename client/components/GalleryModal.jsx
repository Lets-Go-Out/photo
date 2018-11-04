import React from 'react';
import Report from './Report';
import '../../public/style.css';


const GalleryModal = (props) => {
  if (!props.src) {
    return null;
  }

  return (
    <div>
      <div className="modal-overlay" />
      <div className="modal">
        <div key={props.src._id} className="modal-body">
          <a href="#" className="modal-close" onClick={props.closeModal}>&times;</a>
          {props.hasPrev && <a href="#" className="modal-prev" onClick={props.findPrev}>&lsaquo;</a>}
          {props.hasNext && <a href="#" className="modal-next" onClick={props.findNext}>&rsaquo;</a>}
          <div className="image-sec">
            <table>
              <tbody>
                <tr>
                  <td colSpan="2">
                    <img alt={props.src.description} key={props.src._id} src={props.src.image_url} width="630" height="550" />
                  </td>
                </tr>
                <tr>
                  <td align="left">
                    {props.src.description}
                  </td>
                  <td align="right" valign="top" rowSpan="2">  
                    <img className="flag" src="flag.png" alt="flaggy" onClick={props.handleOpenModal} />
                  </td>
                </tr>
                <tr>
                  <td fontSize="46px">
                    {props.src.taken_by}
                  </td>
                </tr>
                </tbody>
            </table>
            <div>
              <Report
                showModal={props.showModal}
                handleCloseModal={props.handleCloseModal}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
  
export default GalleryModal;
