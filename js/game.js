class Game {
    constructor(){}

    getState() {
        database.ref("gameState").on('value', function(data){
            gameState = data.val()
        })
    }
    
    static update(state){
        database.ref('/').update({
            gameState : state
        })
    }
    static getcarsReached(){
        database.ref('carsReached').on('value',(data)=>{
            carsReached = data.val()
        })
    }

    static updatecarsReached(data){
        database.ref('/').update({
            carsReached : data
        })
    }
    async start(){
        if (gameState === 0){
            var playerCountref = await database.ref("playerCount").once("value")
            if (playerCountref.exists()){
                playerCount = playerCountref.val()
            }
            if(playerCount < 4){
                player = new Player()
                player.getCount()
                //console.log(player.index)
                form = new Form()
                car1 = createSprite(100,200)
                car2 = createSprite(300,200)
                car3 = createSprite(100,200)
                car4 = createSprite(100,200)
                car1.addImage(c1)
                car2.addImage(c2)
                car3.addImage(c3)
                car4.addImage(c4)
                cars = [car1,car2,car3,car4]
                form.display()
            }
            else{
                form = new Form()
                form.displaytoomany()
            }
        }
    }

    play(){
        form.hide()
        Player.getPlayerInfo()
        Game.getcarsReached()
        console.log(allPlayers)
        if (allPlayers){
            background(ground)
            image(track,0,-height*5,width,height*6)
            var i = 0
            var x = width/7, y 
            for(var plr in allPlayers){
                i++
                x = x + width/6.8
                y = height- allPlayers[plr].distance - 400
                cars[i - 1].x = x
                cars[i - 1].y = y
                if(i === player.index){
                    camera.position.x = width/2
                    camera.position.y = y
                    fill("blue")
                    ellipse(x,y,60,60)
                }
                
            }
            if (player.distance >= 2900){
                carsReached++
                player.rank = carsReached
                Game.updatecarsReached(player.rank)
                player.update()
                if(carsReached === 20){
                    gameState = 2
                    //Game.update(gameState)
                }
            }
        }
        if (keyDown(UP_ARROW)){
            player.distance = player.distance+20
            player.update()
            console.log(player.index)
        }
        drawSprites()
    }
    end (){
        form.hide()
        form.showResult()
    }

    wait(){
        form.hide()
        form.showResult()
        Player.getPlayerInfo()
        //console.log(allPlayers)
        if (allPlayers){
            background(ground)
            image(track,0,-height*5,width,height*6)
            var i = 0
            var x = width/7, y 
            for(var plr in allPlayers){
                i++
                x = x + width/6.8
                y = height- allPlayers[plr].distance - 400
                cars[i - 1].x = x
                cars[i - 1].y = y
                if(i === player.index){
                    camera.position.x = width/2
                    camera.position.y = y
                    fill("blue")
                    ellipse(x,y,60,60)
                }
            }
        }
        drawSprites()
    }
}