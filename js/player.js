class Player {
    constructor(){
        this.distance = 0;
        this.index = 0;
        this.name = null;
        this.rank = 0
    }

    getCount() {
        database.ref('playerCount').on('value', function(data){
            playerCount = data.val()
        })
    }

    static updateCount(Count){
        database.ref('/').update({
            playerCount : Count
        })
    }

    update(){
        var playerIndex = "players/player" + player.index
        database.ref(playerIndex).update({
            name : this.name,
            distance : this.distance,
            rank : this.rank
        })
    }

    static getPlayerInfo(){
        database.ref("players").on('value',(data)=>{
            allPlayers = data.val()
        })
    }

}