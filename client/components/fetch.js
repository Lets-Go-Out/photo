const $ = require("jquery");



export const resImages = (rest_id, cb) => {
  $.ajax({
    //`http://localhost:3004/restaurants/${rest_id}/gallery`
    url: `https://photo-demo.herokuapp.com/17`,
    method: "GET",
    success: resImages => {
      cb(rest_id, resImages);
    }
  });
};
