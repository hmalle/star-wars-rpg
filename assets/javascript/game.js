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
  attackPower: 5,
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
  //writeout the things that have happened!
  console.log("playerHealth = "+ all[player.attr('data-index')].healthPoints );
  console.log("defenderHealth = "+ all[defender.attr('data-index')].healthPoints ); 
  if(all[player.attr('data-index')].healthPoints <= 0)
  { 
    return "lost";
  }
  if( all[defender.attr('data-index')].healthPoints <=0)
  {
    return "won";
  }
  else
  {
    var happened = "<p>You attacked"+all[player.attr('data-index')].name+" for "+attackPower+" damage</p>"+
           "<p>"+all[defender.attr('data-index')].name+" attacked you back for "+counterPower+" damage</p>";
    $("outcomeSection").html(happened);
    return "";
  }
}

$(document).ready(function()
{
  var player;
  var defender;
  var playerSet = false;
  var defenderSet = false;
  var results = "";
  var wins = 0;
  var attackNumber = 1;
  initialize();
  $(".allSection").on("click",".availablePlayer", function()
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
    if(!defenderSet && playerSet)
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
        defender.remove();
        defenderSet = false;
      }
      if(results === 'lost')
      {
        attackNumber = 1;
        $(".outcomeSection").html("<p>You have been defeated . . .GAME OVER! ! !</p>"+
                          "<button class='restart'>Restart</button>");
      }
      attackNumber++; //to keep track of the playerAttackPower
    }
    if(!playerSet)
    {
      $(".outcomeSection").html("<p>Please select your character<p>");
    }
    else if(!defenderSet)
    {
      $(".outcomeSection").html("<p>Please select an enemy to fight<p>");
    }
  });
  
  $(".outcomeSection").on("click",".restart", function()
  {
    playerSet = false;
    defenderSet = false;
    attackNumber = 1;
    all = resetCharacters.slice(0);
    $(".playerSection").empty();
    $(".enemySection").empty();
    $(".defenderSection").empty();
    $(".outcomeSection").empty();
    console.log("The outcome is not empty");
    initialize();
  });


});
