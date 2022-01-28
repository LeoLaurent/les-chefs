class ActionKind {
    static Walking = 0
    static Idle = 1
    static Jumping = 2
}

controller.A.onEvent(ControllerButtonEvent.Pressed, function on_a_pressed() {
    
    projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . .
        `, mySprite, 50, 0)
    animation.runImageAnimation(mySprite, assets.animation`
        myAnim0
    `, 100, true)
    animation.runImageAnimation(projectile, assets.animation`
        myAnim
    `, 1000, true)
    pause(250)
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
})
let projectile : Sprite = null
let mySprite : Sprite = null
let camx = 80
let playerx = 20
tiles.setTilemap(tilemap`
    niveau1
`)
scene.centerCameraAt(camx, 0)
mySprite = sprites.create(assets.image`
    myImage
`, SpriteKind.Player)
mySprite.setPosition(playerx, 50)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
forever(function on_forever() {
    
    playerx += 1
    camx += 1
    mySprite.x = playerx
    scene.centerCameraAt(camx, 0)
})
