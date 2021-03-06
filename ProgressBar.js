const ProgressBar = function (id) {
    this.id = ((id === undefined) ? 'accis-file-load-progress-bar' : id);
    this.cssId = '#' + this.id;

    this.element = document.createElement('div');
    this.element.id = this.id;
    this.element.className = 'inactive';

    this.skin = this.element.outerHTML;

    let mElement = this.element;
    this.updateProgress = function (progress) {
        mElement.style.width = progress + '%';
    };

    this.isActive = function () {
        return mElement.className.match(/(\\s*|^)active(\\s*|$)/);
    };

    this.activate = function () {
        mElement.style.marginTop = '.5em';
        mElement.className = mElement.className.replace(/(\\s*|^)inactive(\\s*|$)/, 'active');
    };

    this.deactivate = function () {
        mElement.className = mElement.className.replace(/(\\s*|^)active(\\s*|$)/, 'inactive');
    };

    this.hide = function () {
        mElement.style.display = 'none';
    };

    this.show = function () {
        mElement.style.display = 'block';
    };

    this.toggle = function () {
        if (mElement.style.display === 'none') {
            mElement.style.display = 'block';
        } else {
            mElement.style.display = 'none';
        }
    }
};
