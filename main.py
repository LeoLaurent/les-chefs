class ActionKind(Enum):
    Walking = 0
    Idle = 1
    Jumping = 2

def on_a_pressed():
    global projectile
    projectile = sprites.create_projectile_from_sprite(img("""
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
        """),
        mySprite,
        50,
        0)
    animation.run_image_animation(mySprite, assets.animation("""
        myAnim0
    """), 100, True)
    animation.run_image_animation(projectile, assets.animation("""
        myAnim
    """), 1000, True)
    pause(250)
    animation.stop_animation(animation.AnimationTypes.ALL, mySprite)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

projectile: Sprite = None
mySprite: Sprite = None
camx = 80
playerx = 20
tiles.set_tilemap(tilemap("""
    niveau1
"""))
scene.center_camera_at(camx, 0)
mySprite = sprites.create(assets.image("""
    myImage
"""), SpriteKind.player)
mySprite.set_position(playerx, 50)
controller.move_sprite(mySprite)
mySprite.set_stay_in_screen(True)

def on_forever():
    global playerx, camx
    playerx += 1
    camx += 1
    mySprite.x = playerx
    scene.center_camera_at(camx, 0)
forever(on_forever)
