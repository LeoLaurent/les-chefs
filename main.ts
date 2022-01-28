namespace SpriteKind {
    export const eolienne = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
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
        `, mySprite, 100, 0)
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim0`,
    100,
    true
    )
    animation.runImageAnimation(
    projectile,
    assets.animation`myAnim`,
    1000,
    true
    )
    pause(250)
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
})
let projectile: Sprite = null
let mySprite: Sprite = null
class ActionKind {
    static Walking = 0
    static Idle = 1
    static Jumping = 2
}
let camx = 80
let playerx = 40
let eoliennex = 20
let eolienne = sprites.create(assets.image`myImage1`, SpriteKind.eolienne)
eolienne.setPosition(eoliennex, 65)
tiles.setTilemap(tilemap`niveau1`)
scene.centerCameraAt(camx, 0)
mySprite = sprites.create(assets.image`myImage`, SpriteKind.Player)
mySprite.setPosition(playerx, 110)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
forever(function () {
    playerx += 1
    eoliennex += 1
    camx += 1
    mySprite.x = playerx
    eolienne.x = eoliennex
    scene.centerCameraAt(camx, 0)
})
