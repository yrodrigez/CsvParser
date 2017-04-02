var ProgressBar = function (id) {
  this.id = ((id === undefined) ? 'accis-file-load-progress-bar' : id);
  this.cssId = '#'+this.id;
  this.skin = '<div id="'+ this.id +'" class="finished"></div>';
  this.element = document.getElementById(this.id);

  var mElement = this.element;
  this.updateProgress = function (progress) {
      if(progress === 0) mElement.style.marginTop = '0';
      else {
          mElement.style.width = progress + '%';
          mElement.style.marginTop = '.5em';
      }
  };

  this.isActive = function () {
      return mElement.className.match(/(\\s*|^)active(\\s*|$)/);
  };

  this.activate = function () {
    mElement.className = mElement.className.replace(/(\\s*|^)inactive(\\s*|$)/, 'active');
  };

  this.deactivate =  function () {
      mElement.className = mElement.className.replace(/(\\s*|^)active(\\s*|$)/, 'inactive');
  };
};
