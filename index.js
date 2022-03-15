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
var numbers = [1, 2, 3, 4];
var interval = setInterval(function () {
    console.log();
}, 1000);
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var i = numbers_1[_i];
    console.log(i);
}
