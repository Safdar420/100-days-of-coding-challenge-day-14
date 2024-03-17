//  Q no 40
function makeAlbum(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = makeAlbum("Ed Sheeran", "Divide", 12);
var album2 = makeAlbum("Beyoncé", "Lemonade");
var album3 = makeAlbum("Imagine Dragons", "Evolve", 14);
console.log(album1);
console.log(album2);
console.log(album3);
//  Q no 41
function showmagicians(magicians) {
    console.log("Magicians :");
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
var magicianNames = ["David Copperfield", "Houdini", "Derren Brown", "Penn & Teller"];
showmagicians(magicianNames);
//  Q no 42
function makeGreat(magicians) {
    return magicians.map(function (magician) { return "".concat(magician, " the Great"); });
}
function Showmagicians(magicians) {
    console.log("Magicians :");
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        console.log(magician);
    }
}
var MagicianNames = ["David Copperfield", "Houdini", "Derren Brown", "Penn & Teller"];
var Greatmagicians = makeGreat(MagicianNames);
Showmagicians(MagicianNames);
