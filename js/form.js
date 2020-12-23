class Form {
    constructor(){
        this.input = createInput("").attribute("placeholder", "Name");

        this.button = createButton('Submit')

        this.greeting = createElement('h3')

        this.title = createElement('h2')

        this.reset = createButton('reset')

        this.toomanyerror = createElement('h2')

        this.result = createElement('h1')
    }

    display(){
        this.title.html('Car Racing Game')
        this.title.position(width/2-50,10)

        this.input.position(width/2-50,80)

        this.button.position(width/2-10,130)
        
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name  = this.input.value()

            playerCount++
            player.index = playerCount
            player.update()
            // console.log(player)
            Player.updateCount(playerCount)

            this.greeting.html('Hello ' + player.name)
            this.greeting.position(width/2-30,200)
        });
        this.reset.position(width-50,15)
        this.reset.mousePressed(()=>{
            Player.updateCount(0)
            Game.update(0)
            Game.updatecarsReached(0)
        })
    }
    displaytoomany(){
        this.toomanyerror.position(width/3,height/2)
        this.toomanyerror.html('Sorry, Racing Track is full now.')
        this.reset.position(width-50,15)
        this.reset.mousePressed(()=>{
            Player.updateCount(0)
            Game.update(0)
            Game.updatecarsReached(0)
        })
        this.input.hide()
        this.button.hide()
    }

    hide(){
        this.input.hide()
        this.button.hide()
        this.toomanyerror.hide()
        this.title.hide()
        this.greeting.hide()
    }

    showResult(){
        this.result.position(width/2-50, height/3)
        this.result.html("Game Over!! Your Position = " + player.rank)
    }
}