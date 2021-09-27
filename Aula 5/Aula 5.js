var movieList = [];

function Add() {
  var url = document.getElementById("urlMovie").value;  

  if (url != "" && (url.endsWith(".jpg") || url.endsWith(".jpeg"))) {
    if (compareURL(movieList, url)) {
      movieList.push(url);
      document.getElementById("urlMovie").value = "";

      writeList(movieList);
    }
    else {
      console.error("Filme repetido!");
      document.getElementById("urlMovie").value = "";
    }    
  }
  else {
    console.error("Endereço do filme errado!");
    document.getElementById("urlMovie").value = "";
  }
}

function compareURL(movieList, url) {
  for (var i = 0; i < movieList.length; i++) {
    if (url == movieList[i]) {
      return false;
    }      
  }

  return true;
}

function writeList(movieList) {
  var img = document.createElement("img");
  img.src = movieList[movieList.length - 1];

  document.getElementById("moviesList").appendChild(img);
}

// https://images-na.ssl-images-amazon.com/images/I/91kFYg4fX3L.jpg
// https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg
// https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg
// https://i.pinimg.com/originals/1f/26/d3/1f26d3c52508b1a46235e0cf7087ab65.jpg
// https://cultureposters.com/wp-content/uploads/2019/04/avengers-2.jpeg
// https://img.elo7.com.br/product/main/1DC8235/big-poster-avengers-infinity-war-tamanho-90x-0-cm-lo001-avengers.jpg
// https://m.media-amazon.com/images/I/81ai6zx6eXL._AC_SL1304_.jpg
