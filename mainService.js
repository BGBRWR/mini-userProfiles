angular.module('userProfiles')
.service('mainService', function(){
  var data =
  [  {
        "id": 0,
        "first_name": "george",
        "last_name": "bluth",
        "avatar": "http://kyleledbetter.com/silo-3/assets/images/avatars/george_128.jpg"
    },
    {
        "id": 1,
        "first_name": "lucille",
        "last_name": "bluth",
        "avatar": "http://kyleledbetter.com/silo-3/assets/images/avatars/lucille_128.jpg"
    },
    {
        "id": 2,
        "first_name": "oscar",
        "last_name": "bluth",
        "avatar": "http://www-scf.usc.edu/~lewisal/itp104/imgs/oscarb.jpg"
    }];
  this.getUsers = function() {
    return data;
  };
  this.toggleFavorite = function(index){
      data[index].isFavorite = !data[index].isFavorite;
  };


});
