const fs = require('fs');
let outputJSON = [];

fs.readFile('data.json', 'utf8', (err, data) => {
 
    const dataJSON = JSON.parse(data);

    let arrayJSON = dataJSON.filter(item => item.ku == 13 && item.value > 5).map(item => item.value);

    const outputText = arrayJSON.join('\n');

    fs.writeFile('output.txt', outputText, 'utf8', (writeErr) => {
    });
  
});
