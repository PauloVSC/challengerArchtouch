<?php
include('movie.php');

class API {
function findAll () {
  $url= "https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=1f54bd990f1cdfb230adb312546d765d";

  $curl = curl_init();
  curl_setopt($curl, CURLOPT_URL, $url);
  curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
  curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
  $result = curl_exec($curl);
  curl_close($curl);

  $someArray = json_decode($result, true);

  $listMovie = array();
    foreach ($someArray['results'] as $result) {
      $movie = new Movie();
      //echo $result['title'] ."\n";
      $movie->setId($result['id']);
      $movie->setTitle($result['title']);
      $movie->setOverview($result['overview']);
      $movie->setPosterPath($result['poster_path']);
      $listMovie[] = array(
        "id" => $movie->getId(),
        "title" => $movie->getTitle(),
        "overview" => $movie->getOverview(),
        'poster_path' => $movie->getPosterPath()
      );
    }
    return json_encode($listMovie, true);
  }
  
}
?>
