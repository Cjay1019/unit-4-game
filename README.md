# Forgotten Realms RPG

This application is a basic role playing game set in the world of the Forgotten Realms, a setting that is primarily used in the Dungeons and Dragons table top game.
The project was primarily created with Javascript, utilizing jQuery to dynamically create and manipulate html elements. https://cjay1019.github.io/unit-4-game/

## Objective

The game begins with the player selecting a character from a list of four. This will be the character that the character plays as for the remainder of the game. Once it is selected, the three remaining characters become the players enemies, and must be defeated one by one in order to win. A player can win the game with any of the for characters, but they must strategically choose which enemies to fight in what order.

## How To Play

At the beginning of the game the player must click which character they choose to play as. Next they must select which enemy they wish to face first. Once an opponent has been designated, they can click the attack button damage the opponent, lowering their hit points. Immediately after, provided the 'defender' is still undefeated, it will immediately counter attack the player character. If the player character's hit points are reduced to zero, the game is over and they have lost. If the defender's hit points are reduced to zero, then they have been defeated, and the player can now choose a new defender to attack. Note that at anytime if the players sees fit, they can click on the defender to retreat from the fight, and then choose a different opponent. Once all the enemies have been defeated, the player has won the game.

## Strategy

All of the characters within the game are capable of achieving a win, but each has different strengths and weaknesses. Each characters hit points are clearly indicated, but two important hidden attributes are the characters attack power, and counter-attack power. When the player character attacks a defender, they reduce the defender's hit points by the player character's attack power. The defender's counter attack power determines the reduction of the player character's hit points. The higher the characters' maximum hit points, the higher their counter attack power is, but the lower their attack power is.

The game would be unwinnable if it wasn't for the incremental increase of the player character's attack power. Each time they attack, the player character's attack power increases by it's base value, meaning they slowly gain power the longer the game goes on. However, no character can ever regain hit points, meaning that the key to victory depends on choosing the correct opponents in the correct order.
