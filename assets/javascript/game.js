/* I think there might be a better way to manage these data*/
var kenobi=
{
  name: "Obi-Wan Kenobi",
  url: "assets/images/obiWanKenobi.jpeg",
  healthPoints: 120,
  attackPower: 8,
  counterAttackPower: 10
};
var skywalker=
{
  name: "Luke Skywalker",
  url: "assets/images/lukeSkywalker.jpeg",
  healthPoints: 100,
  attackPower: 10,
  counterAttackPower: 5
};
var sidious=
{
  name: "Darth Sidious",
  url: "assets/images/darthSidious.jpeg",
  healthPoints: 150,
  attackPower: 10,
  counterAttackPower: 20
};
var maul= 
{
  name: "Darth Maul",
  url: "assets/images/darthMaul.jpeg",
  healthPoints: 180,
  attackPower: 10,
  counterAttackPower: 25
};

var allCharacters = [kenobi, skywalker, sidious, maul]; 
var resetCharacters = allCharacters.slice(0); //for performing reset later on

function initialize() //also reset!
{
 /*
      <div class="character kenobi">
        <p class="characterName">Obi-Wan Kenobi</p>
        <img src="assets/images/obiWanKenobi.jpeg" alt="Obi-Wan Kenobi">
        <p class="healthPoints">120</p>
      </div>
*/
  for(var a=0; a<allCharacters.length; a++)
  {
    $(".allCharacters").append(
      "<div class='character ally'>"+
        "<p class='characterName'>"+allCharacters[a].name +"</p>"+
        "<img src='"+ allCharacters[a].url+"' alt='"+allCharacters[a].name+"'>"+
        "<p class='healthPoints'>" + allCharacters[a].healthPoints+"</p>"+
      "</div>");    
  }
}

$(document).ready(function()
{ 
  var player;
  var defender;
  var playerSet = false;
  var defenderSet = false;
  initialize();
  $(".ally").on("click", function()
  {
    if(!playerSet)
    {
      player = $(this);
      enemies = player.siblings();
      player.removeClass("ally");
      enemies.addClass("enemy");
      enemies.removeClass("ally");
      $(".playerSection").append(player);
      $(".enemySection").append(enemies);
      playerSet = true;
    }
  }); 
  $(".enemySection").on("click",".enemy",function()
  {
    if(!defenderSet)
    { 
      defender = $(this);
      defender.removeClass("enemy");
      defender.addClass("defender");
      $(".defenderSection").append(defender);
      defenderSet = true;
    }
  });
});
