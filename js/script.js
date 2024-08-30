function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


document.addEventListener("DOMContentLoaded", function() {
  function addVideo(videoId, videoSrc) {
    var video = document.createElement("video");
    video.setAttribute("controls", "controls");

    var source = document.createElement("source");
    source.setAttribute("src", videoSrc);
    source.setAttribute("type", "video/mp4");

    video.appendChild(source);

    var videoContainer = document.getElementById(videoId);
    videoContainer.appendChild(video);
  }

  addVideo("pimple-video", "vids/pimplesvideo.mp4");
  addVideo("pads-video", "vids/padsvideo.mp4");
});
