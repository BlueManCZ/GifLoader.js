class Loader {
  constructor(imageSource, autohide) {
      document.body.classList.add('preload')

      this.loader = document.createElement('div');
      this.loader.id = 'loader';

      let gif = document.createElement('img');
      gif.src = imageSource;
      gif.alt = 'Loading...';

      this.loader.appendChild(gif);
      document.body.appendChild(this.loader);

      if (autohide) {
          window.addEventListener('load', this.hide);
      }
  }
  hide() {
    document.body.classList.remove('preload');
    this.loader.classList.add('loader_hidden');
  }
}