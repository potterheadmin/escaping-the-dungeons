namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
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
`
    //% blockIdentity=images._tile
    export const tile1 = img`
e e f e e e e e e e f e e e e e 
f f f f f f f f f f f f f f f f 
e d d e e e f e e e e d e d d f 
e e e d d e f e e e e e e e d f 
f f f f f f f f f f f f f f f f 
e e f e e e e e e e e f e e d e 
e d f e e e d d e e e f e e e d 
e e f e e e e e d d e f e e e e 
f f f f f f f f f f f f f f f f 
e e d e e d e e f e e e d e e e 
e e e e e e d e f e e e e d d e 
e e e e e e e e f e e e e e e e 
f f f f f f f f f f f f f f f f 
e e d e e f e e d e d d e e f e 
e e e d e f e e e e e e d d f e 
f f f f f f f f f f f f f f f f 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
c d d d d d d d d d d d d d d d 
d c b b c b b c d c b b c d c c 
d c b b c b b c d c b b c d c c 
d c b b c b b c d c b b c d c c 
d c b b c b b c d c b b c d c c 
d c b b c b b c d c b b c d c c 
d c b b c b b c d c b b c d c c 
d c b b c b b c d c b b c d c c 
d c b b c b b c d c b b c d c c 
d c b b c b b c d c b b c d c c 
d c b b c b b c d c b b c d c c 
d c b b c b b c d c b b c d c c 
d c b b c b b c d c b b c d c c 
d c b b c b b c d c b b c d c c 
d c b b c b b c d c b b c d c c 
c d d d d d d d d d d d d d d d 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
b b b b b b b b b b b b b b b f 
b c c c c c c c c c c c c c c f 
b c c c c c c c c c c c c c c f 
b c c c c c c c c c c c c c c f 
b c c c c c c c c c c c c c c f 
b c c c c c c c c c c c c c c f 
b c c c c c b f f c c c c c c f 
b c c c c b b f c c c c c c c f 
b c b b b b f c c c c c c c c f 
b c b f f f f c c c c c c c c f 
b b f f c c c c c c c c c c c f 
b f f c c c c c c c c c c c c f 
b c c c c c c b b b c c c c c f 
b c c c c c c b f f c c c c c f 
b c c c c c b f f c c c c c c f 
f f f f f f f f f f f f f f f f 
`
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile2, function (sprite, location) {
    game.over(true)
})
let mySprite = sprites.create(img`
. f f f f f f f f f f f . 
f f f f f f f f f f f f f 
f f f 4 2 4 f f f f f f f 
f f f 4 2 2 4 4 f f f f f 
f f 4 4 4 2 4 4 4 4 f f f 
f f f f f f 4 f f f f f f 
f f 4 4 7 f f f 4 4 7 f f 
f f 4 4 7 f 4 f 4 4 7 f f 
f f f f f f 4 f f f f f f 
f 4 4 4 4 4 4 4 4 4 4 4 f 
. 4 4 4 2 2 2 2 2 4 4 4 . 
. . 4 4 2 2 2 2 2 4 4 . . 
. . . 4 4 4 4 4 4 4 . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
tiles.setTilemap(tiles.createTilemap(
            hex`1000100002020202020202020202020202020202030102010102010201020101020101020201020101020102010201010201010202010201010101020102010102010102020101010101010201020101020101020201010102010102020202010101010202010101020101020101020101010102020102010201010201010201010101020201020102010102010202020202010202020202020101010102010101010102020101010101010101020102010101020201010102020202010201020101010202020201020101020101010201010102020101010201010201010102020202020201010101010102010101010101010202020202020202020202020202020402`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . 2 . . 2 . 2 . 2 . . 2 . . 2 
2 . 2 . . 2 . 2 . 2 . . 2 . . 2 
2 . 2 . . . . 2 . 2 . . 2 . . 2 
2 . . . . . . 2 . 2 . . 2 . . 2 
2 . . . 2 . . 2 2 2 2 . . . . 2 
2 . . . 2 . . 2 . . 2 . . . . 2 
2 . 2 . 2 . . 2 . . 2 . . . . 2 
2 . 2 . 2 . . 2 . 2 2 2 2 2 . 2 
2 2 2 2 2 . . . . 2 . . . . . 2 
2 . . . . . . . . 2 . 2 . . . 2 
2 . . . 2 2 2 2 . 2 . 2 . . . 2 
2 2 2 . 2 . . 2 . . . 2 . . . 2 
2 . . . 2 . . 2 . . . 2 2 2 2 2 
2 . . . . . . 2 . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
`,
            [myTiles.tile0,sprites.dungeon.darkGroundNorthWest0,myTiles.tile1,myTiles.tile2,sprites.dungeon.collectibleInsignia,myTiles.tile3],
            TileScale.Sixteen
        ))
tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleInsignia)
scene.cameraFollowSprite(mySprite)
info.startCountdown(10)
