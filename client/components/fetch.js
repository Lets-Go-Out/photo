const $ = require("jquery");
//`http://localhost:3004/restaurants/${rest_id}/gallery`
export const resImages = (rest_id, cb) => {
  $.ajax({
    url: `https://photo-demo.herokuapp.com/17`,
    method: "GET",
    success: resImages => {
      cb(rest_id, resImages);
    }
  });
};
