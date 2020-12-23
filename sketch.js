var playerCount = 0;
var gameState = 0
var player, form, game, database
var car1, car2, car3, car4
var cars = []
var c1,c2,c3,c4, track,ground
var allPlayers, carsReached

function preload(){
c1 = loadImage("images/car1.png")
c2 = loadImage("images/car2.png")
c3 = loadImage("images/car3.png")
c4 = loadImage("images/car4.png")
track = loadImage("images/track (1).jpg")
ground = loadImage("images/ground.png")
}
function setup() {
    createCanvas(windowWidth-20,windowHeight-20)
    database = firebase.database()
    game = new Game()
    game.getState()
    game.start()
    carsReached = 0
}

function draw() {

if (playerCount === 4 && gameState === 0){
    Game.update(1)
}

if (gameState === 1 && player.rank === 0){
    game.play()
}

if(gameState === 2){
    game.end()
}

if (gameState === 1 && player.rank > 0){
    game.wait()
    
}
}