document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll(".projectCover img")
  
   // Iterate over each image
    images.forEach(function (image) {
        // Save the original src attribute
        var originalSrc = image.src;

        // Set the new src attribute on mouseover
        image.addEventListener("mouseover", function () {
            var hoverSrc = image.getAttribute("data-hover-src");
            if (hoverSrc) {
                image.src = hoverSrc;
            }
        });

        // Restore the original src attribute on mouseout
        image.addEventListener("mouseout", function () {
            image.src = originalSrc;
        });
    });
  });