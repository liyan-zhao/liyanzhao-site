function showWeather(identifier) {
  var x = document.getElementById("weather-data-" + identifier);
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    var otherData = document.getElementsByClassName("weather-data");
    for (var i = 0; i < otherData.length; i++) {
      var weatherData = otherData[i]
      weatherData.style.display = "none"
    }
    x.style.display = "block";
  }
  var otherData = document.getElementsByClassName("weather-image");
    for (var data in otherData) {
      if (!isNaN(parseInt(data))) {
        var weatherData = otherData[data]
        weatherData.style.display = "none"
      }
    }

  var otherData = document.getElementsByClassName("weather-video");
    for (var data in otherData) {
      if (!isNaN(parseInt(data))) {
        var weatherData = otherData[data]
        weatherData.style.display = "none"
      }
    }

  var otherData = document.getElementsByClassName("weather-sound");
    for (var data in otherData) {
      if (!isNaN(parseInt(data))) {
        var weatherData = otherData[data]
        weatherData.style.display = "none"
      }
    }
}

function showWork(identifier) {
  var x = document.getElementById("work-data-" + identifier);
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    var otherData = document.getElementsByClassName("work-data");
    for (var i = 0; i < otherData.length; i++) {
      var weatherData = otherData[i]
      weatherData.style.display = "none"
    }
    x.style.display = "block";
  }
}


function showImage(event, identifier) {
  var image = document.getElementById("weather-image-" + identifier);
  var hyperlink = document.getElementById("image-link-" + identifier);

  // var x = event.clientX;
  // var y = event.clientY;
  // var coords = "X coords: " + x + ", Y coords: " + y;
  // document.getElementById("demo").innerHTML = coords;

  if (image.style.display === "block") {
    image.style.display = "none";
  } else {
    image.style.display = "block";
    image.style.top= event.clientY + 'px'
    image.style.left= event.clientX + 'px'
  }
  return false;
}

function showVideo(event, identifier) {
  var video = document.getElementById("weather-video-" + identifier);
  var hyperlink = document.getElementById("video-link-" + identifier);

  if (video.style.display === "block") {
    video.style.display = "none";
  } else {
    video.style.display = "block";
    video.style.top= event.clientY + 'px'
    video.style.left= event.clientX + 'px'
  }
  return false;
}

function showSound(event, identifier) {
  var sound = document.getElementById("weather-sound-" + identifier);
  var hyperlink = document.getElementById("sound-link-" + identifier);

  if (sound.style.display === "block") {
    sound.style.display = "none";
  } else {
    sound.style.display = "block";
    sound.style.top= event.clientY + 'px'
    sound.style.left= event.clientX + 'px'
  }
  return false;
}


// window.onload=function(){
//   var allLinks = document.getElementsByClassName("image-link");
//   for (var i = 0; i < allLinks.length; i++) {
//     allLinks[i].addEventListener('click', function (e) {
//       var rect = e.target.getBoundingClientRect();
//       var x = e.clientX - rect.left; //x position within the element.

//       // var images = document.getElementsByClassName("weather-image");
//       // for (var i = 0; i < images.length; i++) {
//       //   var leftPosition = images[i].style.left;
//       //   var slice = parseInt(leftPosition.slice(0,leftPosition.length - 2))
//       //   images[i].style.left = (slice + x) + 'px'
//       // }

//       // var videos = document.getElementsByClassName("weather-video");
//       // for (var i = 0; i < videos.length; i++) {
//       //   var leftPosition = videos[i].style.left;
//       //   var slice = parseInt(leftPosition.slice(0,leftPosition.length - 2))
//       //   videos[i].style.left = (slice + x) + 'px'
//       // }
//     });
//   }
// }