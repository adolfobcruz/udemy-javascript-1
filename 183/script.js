// 20/01/2022

var data = new Date();
document.write(data.toString());
document.write('<br><br><hr>');

// adicionar / remover dias
data.setDate(data.getDate() + 365);
document.write(data.toString());
document.write('<hr>');

// adicionar / remover meses
data.setMonth(data.getMonth() + 9);
document.write(data.toString());
document.write('<hr>');

// adicionar / remover anos
data.setFullYear(data.getFullYear() - 100);
document.write(data.toString());
document.write('<hr>');

document.write('<br><br><hr>');

// 20/01/2022
var data1 = new Date(2022, 0, 20);

// 01/02/2022
var data2 = new Date(2022, 1, 1);

document.write(data1.toString());
document.write('<hr>');
document.write(data2.toString());
document.write('<hr>');

// converter as datas para algo que possamos calcular
document.write(data1.getTime());
document.write('<hr>');
document.write(data2.getTime());
document.write('<hr>');

// encontrar a quantidade de ms entre 'data1' e 'data2'
var msBetweenDates = Math.abs(data1.getTime() - data2.getTime());
document.write(msBetweenDates);
document.write('<hr>');

// descobrir quantos dias os ms representam
// 1d tem 24h, 1h tem 60m, 1m tem 60s e 1s tem 1000ms
var msPerDay = (1 * 24 * 60 * 60 * 1000);
document.write('1d tem: ' + msPerDay + ' ms');
document.write('<hr>');

document.write('A diferença entre data1 e data2 é de '  +
                Math.ceil(msBetweenDates / msPerDay)    +
                ' dia(s).');
