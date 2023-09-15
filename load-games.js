const PS2 = require('./data/PS2.json');
const GBA = require('./data/GBA.json');
const N64 = require('./data/N64.json');
/*OSCAR MILLALONCO SARABIA
pd: los console.log comentados son para probar el codigo funcionan c:*/
const videoGames = {
  PS2,
  GBA,
  N64,
};

const consoleForTwoGamesPerConsoleRecommender = 'PS2'
//console.log(twoGamesPerConsole(consoleForTwoGamesPerConsoleRecommender));

//ITEM 1
function twoGamesPerConsole(console) {
  const juegos =videoGames[console];
const dosjuegos=[];
while(dosjuegos.length<2){
  dosjuegos.push(juegoRandom(juegos));
}
return dosjuegos.map(element => {
  return`${element.name}-${element.video_console}-${element.genres}`
    });
}
//ITEM 2
function tresJuegos(genero) {
  const lista = [];//juntar jsons en un solo array
  for (const console in videoGames) {
    const juegosConsola = videoGames[console];
    lista.push(...juegosConsola);
  }
  
  const filtroGenero = lista.filter(juego => juego.genres.includes(genero));
const tresJuegos=[];
while (tresJuegos.length<3) {
  tresJuegos.push(juegoRandom(filtroGenero));
}
  return tresJuegos;
}
//console.log(tresJuegos('Sports'))

//ITEM 3
function juegoParaConsolaGenero(consola, genero){
  const juegos=videoGames[consola];
const filtrogenero=juegos.filter(juegos=>juegos.genres==genero).map(juego=>{
  return `${juego.video_console}-${juego.genres}-${juego.name}`;
});
const indice=juegoRandom(filtrogenero);
return indice;
}
//console.log(juegoParaConsolaGenero('PS2',"RPG"));
//ITEM 4
function buscarNombre(nombre) {
  const lista = [];
  for (const console in videoGames) {
    const juegosConsola = videoGames[console];
    lista.push(...juegosConsola);
  }
  
  const filtroNombre = lista.filter(juego => juego.name.toLowerCase()===nombre.toLowerCase());
  if (!nombre) {
    console.log('Juego no encontrado en nuestra base de datos')
    return filtroNombre;
  }

  return filtroNombre.map(juego=>{return `${juego.video_console}-${juego.genres}-${juego.name}`});//posi acaso agregue el nombre xd
}
console.log(buscarNombre('bulLy'));//probar
//ITEM 5
function todoGenero(genero){
  const lista = [];
  for (const console in videoGames) {
    const juegosConsola = videoGames[console];
    lista.push(...juegosConsola);
  }
  
  const filtroGenero = lista.filter(juego => juego.genres.includes(genero));
const multigenero=Boolean;
lista.forEach(juego => {
  if (juego.genres.length>0) {
    juego.multigenero=false;
  }
  else{
    juego.multigenero=true;
  }
});
  return filtroGenero.map(juego=>{return `${juego.name}
  -${juego.video_console}
  -${juego.genres}-${juego.multigenero}`});
}
//console.log(todoGenero('Sports'));


//auxiliar de index Alta Utilidad ojito 
function juegoRandom(juegos) {
  const index=Math.floor(Math.random()*juegos.length);
 return juegos[index];
}


module.exports = videoGames;