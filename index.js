import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from "fs";

inquirer
  .prompt([
    {
      type: 'input',
      name: 'URL',
      message: 'Enter the URL or Message :'
    }
  ])
  .then((answers) => {
    const url = answers.URL;
    const filePath = 'qr_code.png';
    var qr_png = qr.image(url, { type: 'png' });
    qr_png.pipe(fs.createWriteStream('qr_code.png'));
    fs.writeFile("URL.txt",url,(err)=>{
        if(err) throw err; 
        console.log('URL has been saved as URL.txt');
    });
    console.log('QR code has been saved as qr_code.png and has been deleted after 10 seconds');
    setTimeout(() => {
        fs.unlink(filePath, (err) => {
            if (err) {
                console.error('Failed to delete the file:', err);
            } else {
                console.log('QR code has been deleted after 10 seconds');
            }
        });
    }, 10000);
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error('Unable to render prompt');
    } else {
      console.error('Error:', error.message);
    }
  });