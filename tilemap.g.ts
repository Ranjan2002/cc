// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`0a0008000202020202020202020204010205010101010502020102010101010101020201020102020202020202010205020101010102020302020203010103020201010101010101010202020202020202020202`, img`
2 2 2 2 2 2 2 2 2 2 
. . 2 . . . . . . 2 
2 . 2 . . . . . . 2 
2 . 2 . 2 2 2 2 . 2 
2 . 2 . 2 . . . . 2 
2 . 2 2 2 . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.builtin.forestTiles8,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.stairWest,sprites.dungeon.collectibleBlueCrystal], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`0a0008000202020202020202020201010203010101010302020102010101020101020201020101030201010202010202020202020202020401010101010101020201040101010101010202020202020202020202`, img`
2 2 2 2 2 2 2 2 2 2 
. . 2 . . . . . . 2 
2 . 2 . . . 2 . . 2 
2 . 2 . . . 2 . . 2 
2 . 2 2 2 2 2 2 . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.builtin.forestTiles8,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.collectibleRedCrystal], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
