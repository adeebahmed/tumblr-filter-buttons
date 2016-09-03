var photoButton;
var videoButton;
var blogpostButton;
var allButton;
var allPosts;

document.addEventListener('DOMContentLoaded', function () {
  photoButton = document.getElementById('photos');
  videoButton = document.getElementById('videos');
  blogpostButton = document.getElementById('blogposts');
  allButton = document.getElementById('all');

  select('all');

  allPosts = document.getElementsByTagName("article");
});

function select(btn){
  var clickedBtn = document.getElementById(btn);
  clickedBtn.style.background = 'red';
  clickedBtn.style.color = 'white';

  if(btn == 'all'){ 
    selectAll();
    displayPostType("");
  }
  else if(btn == "photos"){
    selectPhotos();
    displayPostType("Photo");
  }
  else if(btn == "videos"){
    selectVideos();
    displayPostType("Video");
  }
  else if(btn == "blogposts"){
    selectBlogposts();
    displayPostType("Blog Post");
  }
}



function displayPostType(postType){
  var searchString;
  
  if(postType == ""){
    searchString = '<h4 class="postType">';
  }
  else{
    searchString = '<h4 class="postType">' + postType + '</h4>'
  }

  for(var i in allPosts)
  {
    if(!(allPosts[i].innerHTML.indexOf(searchString) > -1))
    {
      allPosts[i].style.display = 'none';
    }
    else
    {
      allPosts[i].style.display = 'block';
    }
  }
}

function selectAll(){
    photoButton.style.background = 'white';
    photoButton.style.color = 'red';
    videoButton.style.background = 'white';
    videoButton.style.color = 'red';
    blogpostButton.style.background = 'white';
    blogpostButton.style.color = 'red';
}

function selectPhotos(){
    allButton.style.background = 'white';
    allButton.style.color = 'red';
    videoButton.style.background = 'white';
    videoButton.style.color = 'red';
    blogpostButton.style.background = 'white';
    blogpostButton.style.color = 'red';
}

function selectVideos(){
    photoButton.style.background = 'white';
    photoButton.style.color = 'red';
    blogpostButton.style.background = 'white';
    blogpostButton.style.color = 'red';
    allButton.style.background = 'white';
    allButton.style.color = 'red';
}

function selectBlogposts(){
    allButton.style.background = 'white';
    allButton.style.color = 'red';
    photoButton.style.background = 'white';
    photoButton.style.color = 'red';
    videoButton.style.background = 'white';
    videoButton.style.color = 'red';
}

