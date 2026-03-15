const https = require('https');
const fs = require('fs');
const file = fs.createWriteStream("audio.mp3");
https.get("https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3", function(response) {
  response.pipe(file);
  file.on("finish", () => {
    file.close();
    console.log("Download completed");
  });
}).on('error', (err) => {
  console.error("Error: " + err.message);
});
