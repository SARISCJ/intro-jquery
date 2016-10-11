
var videos = document.getElementsByTagName("a");
  for (var i = 0; i < videos.length; i++) {
    var videoLink = videos[i];
    var link = videoLink.getAttribute("href");
    var url = youtube.generateThumbnailUrl(link);
    var img = document.createElement("img");
    img.setAttribute("src", url);
    videoLink.appendChild(img);
}





