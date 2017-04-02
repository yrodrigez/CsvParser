var ProgressBar = {
  id: 'accis-file-load-progress-bar',
  cssId: '#'+this.id,
  skin: '<div id="'+ this.id +'" class="finished"></div>',

  updateProgress : function (progress) {
      var mProgressBar = document.getElementById(this.id);
      mProgressBar.style.width = progress + '%';
      mProgressBar.style.marginTop = '.5em';
      if(progress === 0) mProgressBar.style.marginTop = '0';
  },

  isActive: function () {
      return document.getElementById(this.id).className.match(/(\\s*|^)active(\\s*|$)/);
  },

  activate: function () {
    var className = document.getElementById('accis-file-load-progress-bar').className;
    document.getElementById('accis-file-load-progress-bar').className = className.replace(/(\\s*|^)inactive(\\s*|$)/, 'active');
  },

  deactivate: function () {
      var className = document.getElementById('accis-file-load-progress-bar').className;
      document.getElementById('accis-file-load-progress-bar').className = className.replace(/(\\s*|^)active(\\s*|$)/, 'inactive');
  }
};
