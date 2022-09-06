// switch
// var parametro = prompt('Digite um número: ');

// switch (parseInt(parametro)) {
//   case 1:
//     document.write('Parametro 1.');
//     break;

//   case 2:
//     document.write('Parametro 2.');
//     break;

//   case 3:
//   case 6:
//   case 9:
//     document.write('Parametro multiplo de 3.');
//     break;

//   default:
//     document.write('Default.');
// }

// MDN - Examples

// Multi-case : chained operations
// var foo = 6;
// var output = 'Output: ';

// switch (foo) {
//   case 0:
//     output += 'So ';

//   case 1:
//     output += 'What ';
//     output += 'Is ';

//   case 2:
//     output += 'Your ';

//   case 3:
//     output += 'Name';

//   case 4:
//     output += '?';
//     console.log(output);
//     break;

//   case 5:
//     output += '!';
//     console.log(output);
//     break;

//   default:
//     console.log('Please pick a number from 0 to 5!');
// }

// Block-scope variables within switch statements
const action = 'say_hi';

switch (action) {
  case 'say_hello': {
    let message = 'hello';
    console.log(message);
    break;
  }

  case 'say_hi': {
    let message = 'hi';
    console.log(message);
    break;
  }

  default: {
    console.log('Empty action received.');
    break;
  }
}
