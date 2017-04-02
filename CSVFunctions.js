function CSVStringToObject(csvString, progressHandler, callBack) {
    this.updateProgress = (progressHandler !== undefined ? progressHandler : function (progress) {
    });
    this.lines = csvString.trim().split('\n');
    this.header = this.lines[0].split(',');
    this.updateProgress(Math.round(1 / this.lines.length) * 100);
    this.body = [];
    let that = this;
    analiseCSV(that).then(callBack());
    return this;
}

function analiseCSV(that) {
    return new Promise((resolve, reject) => {
        let counter = 1;
        that.lines.slice(1, that.lines.length).forEach(function (line) {
            let lineArray = line.split(',');
            if ((lineArray.length > 0) && (lineArray.length !== that.header.length)) reject('CSV malformed');
            else {
                that.body.push(lineArray);
                that.updateProgress((Math.round(++counter / that.lines.length) * 100));
            }
        });
        resolve(that);
        console.log('Promise finished!');
        console.log(that);
    });
}
