//  Q no 40
function makeAlbum ( artist : string, title : string, tracks? : number) : Record<string,any> {
    const album : Record <string , any> = {
        artist : artist,
        title : title
    };
  if (tracks !== undefined){
    album.tracks = tracks;
  }
  return album;
}

const album1 = makeAlbum("Ed Sheeran", "Divide", 12);
const album2 = makeAlbum("Beyoncé", "Lemonade");
const album3 = makeAlbum("Imagine Dragons", "Evolve", 14);

console.log(album1);
console.log(album2);
console.log(album3);

//  Q no 41

function showmagicians (magicians : string[]) : void {
    console.log("Magicians :");
    for ( let magician of magicians) {
        console.log(magician);
    }
}
const magicianNames: string[] = ["David Copperfield", "Houdini", "Derren Brown", "Penn & Teller"];

showmagicians(magicianNames);

//  Q no 42

function makeGreat (magicians : string[]) : string [] {
    return magicians.map(magician => `${magician} the Great`);
}

function Showmagicians(magicians : string[]) : void {
   console.log("Magicians :");
   for (let magician of magicians){
       console.log(magician);
   }
}

const MagicianNames: string[] = ["David Copperfield", "Houdini", "Derren Brown", "Penn & Teller"];

const Greatmagicians : string[] = makeGreat(MagicianNames);

Showmagicians(MagicianNames);