
function CSVStringToObject(csv) {
    var CSVObject = function (csvString) {
        var lines = csvString.trim().split('\n');

        console.log(lines); //TODO DELETE THIS LINE
        var header = lines[0].split(',');
        this.header = header;
        var body = [];
        lines.forEach(function (line) {
            var lineArray = line.split(',');
            if( (lineArray.length > 0) && (lineArray.length !== header.length) ) throw 'CSV malformed';
            body.push(lineArray);
        });
        this.body = body;
    };

    return new CSVObject;
}