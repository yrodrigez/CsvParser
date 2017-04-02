function handleFileSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    var progressBar = new ProgressBar('accis-file-load-progress-bar');
    progressBar.updateProgress(0);

    function showMessage(msj) {
        jQuery('#accis-file-drop-area').html(msj);
    }

    var file = (evt.type === 'drop') ?  evt.dataTransfer.files[0] : evt.target.files[0];

    var reader = new FileReader();
    reader.onprogress = function (event) {
        if(event.lengthComputable)
            progressBar.updateProgress(Math.round((event.loaded / event.total) * 100))
    };

    reader.onload = function () {
        try{
            var csvObject = new CSVStringToObject(reader.result);
        } catch (ex){
            alert(ex);
        }
        console.log(csvObject);
    };

    reader.onloadstart = function () {
        showMessage('Uploading '+ file.name +' please wait...' );
        progressBar.activate();
        progressBar.updateProgress(0);
    };

    reader.onloadend = function () {
        showMessage('Done');
        progressBar.deactivate();
        progressBar.updateProgress(100);
    };
    reader.readAsText(file)
}

function handleDragOver(evt) {
    if(evt.type !== 'dragover') return;
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
}
