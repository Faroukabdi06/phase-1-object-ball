function gameObject(){
    let teams = {
        home: {
            "teamName": "Brooklyn Nets",
            "colors": " Black,White",
            "players": {
                "Alan Anderson" :{
                    "number": 0,
                    "shoe" : 16,
                    "points": 22,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 1,
                },
                "Reggie Evans" :{
                    "number": 30,
                    "shoe" : 14,
                    "points": 12,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 12,
                    "blocks": 12,
                    "slamDunks": 7,
                },
                "Brook Lopez" :{
                    "number": 11,
                    "shoe" : 17,
                    "points": 17,
                    "rebounds": 19,
                    "assists": 10,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 15
                },
                "Mason Plumlee" :{
                    "number": 1,
                    "shoe" : 19,
                    "points": 26,
                    "rebounds": 12,
                    "assists": 6,
                    "steals": 3,
                    "blocks": 8,
                    "slamDunks": 5
                },
                "Jason Terry" :{
                    "number": 31,
                    "shoe" : 15,
                    "points": 19,
                    "rebounds": 2,
                    "assists": 2,
                    "steals": 4,
                    "blocks": 11,
                    "slamDunks": 1,
                }

            },
        },
        Away: {
            "teamName": "Charlotte Hornets",
            "colors": " Turquoise, Purple",
            "players": {
                "Jeff Adrien" :{
                    "number": 4,
                    "shoe" : 18,
                    "points": 10,
                    "rebounds": 1,
                    "assists": 1,
                    "steals": 2,
                    "blocks": 7,
                    "slamDunks": 2,
                },
                "Bismak Biyombo" :{
                    "number": 0,
                    "shoe" : 16,
                    "points": 12,
                    "rebounds": 4,
                    "assists": 7,
                    "steals": 7,
                    "blocks": 15,
                    "slamDunks": 10,
                },
                "DeSagna Diop" :{
                    "number": 2,
                    "shoe" : 14,
                    "points": 24,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 4,
                    "blocks": 5,
                    "slamDunks": 5,
                },
                "Ben Gordon" :{
                    "number": 8,
                    "shoe" : 15,
                    "points": 33,
                    "rebounds": 3,
                    "assists": 2,
                    "steals": 1,
                    "blocks": 1,
                    "slamDunks": 0,
                },
                "Brendan haywood" :{
                    "number": 33,
                    "shoe" : 15,
                    "points": 6,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 22,
                    "blocks": 5,
                    "slamDunks": 12,
                }

            },
        },
    }
    return teams
}
console.log(gameObject())

function numPointsScored(playersName){
  let game = gameObject();
  for(let teamKey in game){
    let team = game[teamKey];
    let players = team.players;
    if(players[playersName]){
        return players[playersName].points;
    }
  }

}
numPointsScored("Ben Gordon");

function shoeSize(playername){
    let object = gameObject();
    for(let teamKey in object){
        let team = object[teamKey];
        let players = team.players;
    if(players[playername]){
        return players[playername].shoe

    }


    }

}
console.log(shoeSize("Brendan haywood"));

function teamColors(teamsName){
   let game = gameObject();
   for(let teamKey in game){
        let teams = game[teamKey];
        if(teams.teamName === teamsName){
            return teams.colors;

        }
   }

}

console.log(teamColors("Brooklyn Nets"))

function teamNames(teamsName){
    let game = gameObject();
    for(let teamKey in game){
        let teams = game[teamKey];
        if(teams.teamName === teamsName){
            return teams.teamName;
        }

    }
}
console.log(teamNames("Brooklyn Nets"))

function playerNumbers(teamName){
    let game = gameObject();
    for(let teamKey in game){
        let teams = game[teamKey]
        if(teams,teamName === teamName){
            let numbers = []
            for(let player in teams.players){
                numbers.push(teams.players[player].number)
            }
            return numbers;

        }

    }
}
console.log(playerNumbers("Brooklyn Nets"));

function playerStats(playersName){
    let game = gameObject();
    for(let teamKey in game){
        let teams = game[teamKey];
        let player = teams.players;
        if(player[playersName]){
            return player[playersName]


        }

    }
}
console.log(playerStats("Ben Gordon"))

function bigShoeRebounds(playersName){
    let game = gameObject();
    for(let teamKey in game){
        let teams = game[teamKey];
        let player = teams.players;
        if(player[playersName]){
            return player[playersName].rebounds;
        }

    }
}
console.log(bigShoeRebounds("Ben Gordon"))

function mostPointsScored(){
    let game = gameObject();
    let highestPoint = 0;
    let topPlayer = "";
    for(let teamKey in game){
        let teams = game[teamKey];
        let players = teams.players;
        for(let playerName in players){
            let playerStat = players[playerName];
            if(playerStat.points > highestPoint){
             highestPoint = playerStat.points;
             topPlayer = playerName;
        }
        }

    }
    return topPlayer
}
console.log(mostPointsScored());

function mostAssits(){
    let game = gameObject();
    let highestAssits = 0;
    let topPlayers = [];
    for(let teamKey in game){
        let teams = game[teamKey];
        let players = teams.players;
        for(let playerName in players){
            let playerStats = players[playerName];
            if(playerStats.assists > highestAssits){
                highestAssits = playerStats.assists;
                topPlayers = [playerName];
            }
            else if(playerStats.assists === highestAssits){
                 topPlayers.push(playerName)
            }

        }

    }
    return topPlayers;
}
console.log(mostAssits());

function winningTeam(){
    let game =gameObject();
    let highestPoint = 0;
    let topTeam = "";
    for(let teamKey in game){
        let teams = game[teamKey];
        let teamPoints = 0;
        for(let player in teams.players){
            teamPoints+= teams.players[player].points;
        }
            // highestPoint = teamPoints;
            if(teamPoints > highestPoint){
                highestPoint = teamPoints;
                topTeam = teams.teamName;
            }





    }
    return topTeam;
}
console.log(winningTeam());

