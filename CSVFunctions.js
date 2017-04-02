function CSVStringToObject(csvString, progressHandler) {
    var updateProgress = (progressHandler !== undefined ? progressHandler : function (progress) {});
    var lines = csvString.trim().split('\n');
    var header = lines[0].split(',');
    this.header = header;
    var counter = 1;
    updateProgress(counter / lines.length);
    var body = [];
    lines.slice(1, lines.length).forEach(function (line) {
        var lineArray = line.split(',');
        if ((lineArray.length > 0) && (lineArray.length !== header.length)) throw 'CSV malformed';
        else {
            body.push(lineArray);
            updateProgress(++counter / lines.length);
        }
    });
    this.body = body;

    return this;
}