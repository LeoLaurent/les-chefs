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
    tab_projectile.unshift(projectile)
    pause(250)
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.startEffect(effects.ashes)
    mySprite.sayText("+1")
    sprite.destroy()
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.startEffect(effects.ashes)
    otherSprite.destroy()
    sprite.sayText("OOF")
})
let piece: Sprite = null
let diceroll = 0
let projectile: Sprite = null
let mySprite: Sprite = null
let tab_projectile: Sprite[] = []
class ActionKind {
    static Walking = 0
    static Idle = 1
    static Jumping = 2
}
tab_projectile = []
let tab_piece: Sprite[] = []
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
    diceroll = randint(0, 150)
    if (diceroll == 0) {
        piece = sprites.create(img`
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
            `, SpriteKind.Enemy)
        piece.setPosition(eoliennex + 150, randint(10, 100))
        animation.runImageAnimation(
        piece,
        assets.animation`myAnim2`,
        300,
        true
        )
        tab_piece.unshift(piece)
    } else {
        if (diceroll == 1) {
            piece = sprites.create(img`
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
                `, SpriteKind.Enemy)
            piece.setPosition(eoliennex + 150, randint(10, 100))
            animation.runImageAnimation(
            piece,
            assets.animation`myAnim1`,
            200,
            true
            )
            tab_piece.unshift(piece)
        } else {
            if (diceroll == 2) {
                piece = sprites.create(img`
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
                    `, SpriteKind.Enemy)
                piece.setPosition(eoliennex + 150, randint(10, 100))
                animation.runImageAnimation(
                piece,
                assets.animation`myAnim3`,
                200,
                true
                )
                tab_piece.unshift(piece)
            }
        }
    }
})
