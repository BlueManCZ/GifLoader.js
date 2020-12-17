class Loader {
  constructor(imageSource, autohide) {
      document.body.classList.add('preload')

      let loader = document.createElement('div');
      loader.id = 'loader';

      let gif = document.createElement('img');
      gif.src = imageSource;
      gif.alt = 'Loading...';

      loader.appendChild(gif);
      document.body.appendChild(loader);

      if (autohide) {
          window.addEventListener('load', this.hide);
      }
  }
  hide() {
    document.body.classList.remove('preload');
    document.getElementById('loader').classList.add('loader_hidden');
  }
}