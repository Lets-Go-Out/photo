const $ = require("jquery");
//`http://localhost:3004/restaurants/${rest_id}/gallery`
export const resImages = (rest_id, cb) => {
  $.ajax({
    url: `http://localhost:3004/15`,
    method: "GET",
    success: resImages => {
      cb(rest_id, resImages);
    }
  });
};
