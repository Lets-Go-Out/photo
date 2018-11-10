const $ = require("jquery");
//////
export const resImages = (rest_id, cb) => {
  $.ajax({
    url: `http://ec2-54-164-63-168.compute-1.amazonaws.com/restaurants/1/gallery`,
    method: "GET",
    success: resImages => {
      cb(rest_id, resImages);
    }
  });
};
