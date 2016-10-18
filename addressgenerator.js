var streetnum = [37,2,7,24,36,22,4,39,6,14,23,10,20,33,32,19,25,35,29,39,40,37];
var streetname = ['Orchard','White','Main','Green','Orange','Potato','Laurel','Pegs'];
var streetname2 = ['Lane','Place','Street','Court','Road'];
var cityname = ['Cambridge','Boston','Syosset','Cold Spring Harbor'];
var statename = ['NY','MA','CA','FL','AK','MT','CT'];
var zip = [02134,11791,23445,02466,13246,45170,22306,00930,11960,43506];

var streetnum = streetnum[Math.floor(Math.random()*streetnum.length)];
var streetname = streetname[Math.floor(Math.random()*streetname.length)];
var streetname2 = streetname2[Math.floor(Math.random()*streetname2.length)];
var cityname = cityname[Math.floor(Math.random()*cityname.length)];
var statename = statename[Math.floor(Math.random()*statename.length)];
var zip = zip[Math.floor(Math.random()*zip.length)];

console.log(streetnum + ' ' + streetname + ' ' + streetname2 + ',' + cityname + ' ' + statename + ', ' + zip);

