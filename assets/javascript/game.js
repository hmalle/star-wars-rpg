/* I think there might be a better way to manage these data*/
var character1=
{
  name: "Obi-Wan Kenobi",
  healthPoints: 120,
  attackPower: 10,
  counterAttackPower: 10
};
var character2=
{
  name: "Luke Skywalker",
  healthPoints: 100,
  attackPower: 10,
  counterAttackPower: 10
};
var character3=
{
  name: "Darth Sidious",
  healthPoints: 150,
  attackPower: 10,
  counterAttackPower: 10
};
var character4= 
{
  name: "Darth Maul",
  healthPoints: 180,
  attackPower: 10,
  counterAttackPower: 10
};
/*
var player1 = $(".character1");
var player2 = $(".character2");
var player3 = $(".character3");
var player4 = $(".character4");
*/
/*
function updateCharacterInfo()
{
  $(".character1").$("healthPoints").html(character1.healthPoints);
}
*/

var characterSelected = false;
var enemySelected = false;

$(document).ready(function()
{
  $(".character").on("click", function() //listens for clicks on the character only
  {
    if( !characterSelected )
    {
      var player = $(this);    
      $(".allCharacters").hide();
      var enemies = player.siblings();
      $(".yourCharacter").html(player);
      $(".enemies").html(enemies);
      $(".enemies").css("background-colo: red");
      characterSelected = true;
    }
    else if(!enemySelected)
    {
      $(".enemiesSection").hide($(this));
      $(".defenderSection").html(this);
      
      enemySelected = true;
    }
  });
});
