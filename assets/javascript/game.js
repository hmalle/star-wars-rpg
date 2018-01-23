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

var all = [kenobi, skywalker, sidious, maul]; 
var resetCharacters = all.slice(0); //for performing reset later on

function initialize() //also reset!
{
   /*
        <div class="character kenobi">
          <p class="characterName">Obi-Wan Kenobi</p>
          <img src="assets/images/obiWanKenobi.jpeg" alt="Obi-Wan Kenobi">
          <p class="healthPoints">120</p>
        </div>
  */
  for(var a=0; a<all.length; a++)
  {
    $(".allSection").append(
      "<div class='character availablePlayer' data-index="+a+">"+
        "<p class='characterName'>"+all[a].name +"</p>"+
        "<img src='"+ all[a].url+"' alt='"+all[a].name+"'>"+
        "<p class='healthPoints'>" + all[a].healthPoints+"</p>"+
      "</div>");    
  }
}

function attacking( player, defender, attackNumber)
{
  var attackPower = attackNumber*(all[player.attr('data-index')].attackPower); 
  var counterPower = all[defender.attr('data-index')].counterAttackPower;
  all[player.attr('data-index')].healthPoints -= counterPower;
  all[defender.attr('data-index')].healthPoints -= attackPower;  //remove some health pts from attacker
  console.log("playerHealth = "+ all[player.attr('data-index')].healthPoints );
  console.log("defenderHealth = "+ all[defender.attr('data-index')].healthPoints );
  return "You attacked the defender";
}

$(document).ready(function()
{
  var player;
  var defender;
  var playerSet = false;
  var defenderSet = false;
  var results = "";
  var attackNumber = 1;
  initialize();
  $(".availablePlayer").on("click", function()
  {
    if(!playerSet)
    {
      player = $(this);
      enemies = player.siblings();
      player.removeClass("availablePlayer");
      player.addClass("attacker");
      enemies.addClass("enemy");
      enemies.removeClass("availablePlayer");
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

  $(".attackButton").on("click", function()
  {
    // console.log(playerHealth+" "+playerAttack+" "+defenderHealth+" "+defenderCounter);
    if(playerSet && defenderSet)
    {
      results = attacking( player , defender, attackNumber);
      if(results === "won")
      {
      
      }
      else if(results === 'lost')
      {
      }
      else
      {
        $(".results").html(results);
      }
      attackNumber++; //to keep track of the playerAttackPower
    }
  });
});
