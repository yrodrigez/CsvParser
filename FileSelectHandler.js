function handleFileSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    console.log(evt);
    updateProgress(0);

    function showMessage(msj) {
        jQuery('#accis-file-drop-area').html(msj);
    }

    var file = (evt.type === 'drop') ?  evt.dataTransfer.files[0] : evt.target.files[0];

    var reader = new FileReader();
    reader.onprogress = function (event) {
        if(event.lengthComputable)
            updateProgress(Math.round((event.loaded / event.total) * 100))
    };

    reader.onload = function () {
        updateProgress(0);
    };

    reader.onloadstart = function () {
        showMessage('Uploading '+ file.name +' please wait...' );
        document.getElementById('accis-file-load-progress-bar').className  = document.getElementById('accis-file-load-progress-bar').className.replace(/(\\s*|^)finished(\\s*|$)/, 'progressing');
    };

    reader.onloadend = function () {
        showMessage('Done');
        document.getElementById('accis-file-load-progress-bar').className = document.getElementById('accis-file-load-progress-bar').className.replace(/(\\s*|^)progressing(\\s*|$)/, 'finished');
    };
    reader.readAsText(file)
}

function handleDragOver(evt) {
    if(evt.type !== 'dragover') return;
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
}

function updateProgress(progress) {
    var mProgressBar = document.getElementById('accis-file-load-progress-bar');
    mProgressBar.style.width = progress + '%';
    mProgressBar.style.marginTop = '.5em';
    if(progress === 0) mProgressBar.style.marginTop = '0';
}
