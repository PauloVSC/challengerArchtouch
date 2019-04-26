<?php 
    
class Movie {
    private $id;
    private $title;
    private $overview;
    private $posterPath;

    public function _construct($id, $title, $overview, $posterPath){
        $this->id = $id;
        $this->title = $title;
        $this->overview = $overview;
        $this->posterPath = $posterPath;
    }

    public function setId($id){
        $this->id = $id;
    }

    public function getId(){
        return $this->id;
    }

    public function setTitle($title){
        $this->title = $title;
    }

    public function getTitle(){
        return $this->title;
    }

    public function setOverview($overview){
        $this->overview = $overview;
    }

    public function getOverview(){
        return $this->overview;
    }

    public function setPosterPath($posterPath){
        $this->posterPath = $posterPath;
    }

    public function getPosterPath(){
        return $this->posterPath;
    }

}

?>