controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Boy = sprites.create(img`
        . . . . f f f f f f f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f d d d d d f . . . . . 
        . . . . . f d d d f . . . . . . 
        . . . . . d d f d d . . . . . . 
        . . . . . d 2 2 2 d . . . . . . 
        . . . . . . d d d . . . . . . . 
        . . . d d d d d d d d d . . . . 
        . . . d . 8 8 8 8 8 . d . . . . 
        . . . d . 8 8 8 8 8 . d . . . . 
        . . . d . 8 8 8 8 8 . d . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . . 7 7 7 7 7 . . . . . . 
        . . . . . 7 7 f 7 7 . . . . . . 
        . . . . . 7 d f 7 d . . . . . . 
        . . . . . d d f d d . . . . . . 
        `, SpriteKind.Player)
})
info.onCountdownEnd(function () {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    info.changeScoreBy(1)
})
info.onLifeZero(function () {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    info.changeLifeBy(-1)
})
let Boy: Sprite = null
let Girl: Sprite = null
tiles.setTilemap(tilemap`level2`)
Girl.setStayInScreen(true)
info.setLife(3)
info.startCountdown(20)
Girl = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f d d d d d f . . . . . 
    . . . . f f d d d f f . . . . . 
    . . . . f d d f d d f . . . . . 
    . . . . f d 2 2 2 d f . . . . . 
    . . . . . . d d d . . . . . . . 
    . . . d d d d d d d d d . . . . 
    . . . d . . 5 5 5 . . d . . . . 
    . . . d . . 2 2 2 . . d . . . . 
    . . . d . . 5 5 5 . . d . . . . 
    . . . d . . 2 2 2 . . d . . . . 
    . . . . . . 5 5 5 . . . . . . . 
    . . . . . . 5 5 5 . . . . . . . 
    . . . . . . d 5 d . . . . . . . 
    . . . . . d d d d . . . . . . . 
    `, SpriteKind.Player)
Girl.setPosition(4, 22)
controller.moveSprite(Girl)
