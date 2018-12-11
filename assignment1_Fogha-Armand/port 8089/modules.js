module.exports = fs.stat(lesson1.txt, function(err, stats) {
    if (err) {
    console.error(err);
    } else {
    if (stats.size < 1024) {
    fs.readFile(lesson1.txt, 'utf8', function(err, fileContent)
    {
    if (err) {
    console.error(err);
    } else {
    console.log('Got file content:', fileContent);
    }
    });
    } else {
    console.log('Didn\'t read the file, it was too long.');
    }
    }
    });