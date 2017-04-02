function CSVStringToObject(csvString) {

    var lines = csvString.trim().split('\n');
    var header = lines[0].split(',');
    this.header = header;
    var body = [];
    lines.forEach(function (line) {
        var lineArray = line.split(',');
        if ((lineArray.length > 0) && (lineArray.length !== header.length)) throw 'CSV malformed';
        else {
            body.push(lineArray);
        }
    });
    this.body = body;

    return this;
}