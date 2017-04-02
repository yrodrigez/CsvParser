function handleFileSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    const progressBar = new ProgressBar('accis-file-load-progress-bar');
    try{
        document.getElementById('accis-file-drop-container').removeChild(
            document.getElementById(progressBar.id)
        );
    }catch (ex){
        // do nothing
    }
    document.getElementById('accis-file-drop-container').appendChild(progressBar.element);

    function showMessage(msj) {
        jQuery('#accis-file-drop-area').html(msj);
    }

    let file = (evt.type === 'drop') ?  evt.dataTransfer.files[0] : evt.target.files[0];

    let reader = new FileReader();
    reader.onprogress = function (event) {
        if(event.lengthComputable)
            progressBar.updateProgress(Math.round((event.loaded / event.total) * 100))
    };



    reader.onloadstart = function () {
        showMessage('Uploading '+ file.name +' please wait...' );
        progressBar.activate();
        progressBar.updateProgress(0);
    };

    reader.onloadend = function () {
        showMessage('Parsing the file...');
        progressBar.activate();
        progressBar.updateProgress(10);
        function callBack() {
            progressBar.deactivate();
            //progressBar.updateProgress(100);
            showMessage('file parsed!');
        }
        function progressHandler(progress) {
            progressBar.updateProgress(progress);
        }

        function onErr(err) {
            alert(err)
        }
           let csv = new CSVStringToObject(reader.result, progressHandler, callBack, onErr);
           console.log(csv);



    };
    reader.readAsText(file)
}

function handleDragOver(evt) {
    if(evt.type !== 'dragover') return;
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
}
