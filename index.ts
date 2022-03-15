/*let nom: string='Radu';
let prenom: string='Andrei';
let np: string=nom+prenom;
console.log(np);*/

/*let data: Date=new Date();
console.log(data.toISOString());*/

/*import * as moment from "moment-timezone";
let datParis=moment().tz("Europe/Paris").format("hh:mmA");
console.log(datParis); */

/*import * as http from "http";
http.get('http://cat-fact.herokuapp.com/facts', (res: any) =>{
    let rawData = '';
    res.on('data', (chunk: any) => { rawData += chunk;
    let data = JSON.parse(rawData);
    for(let aux of data){
        if(aux._id==="58e008780aac31001185ed05") console.log(aux.text);
    }
        console.log(data);
});
});
*/

const numbers = [1, 2, 3, 4];
let j=0;
for(let i of numbers){
var interval = setInterval(function () {
   console.log();
}, 1000);
console.log(i);}