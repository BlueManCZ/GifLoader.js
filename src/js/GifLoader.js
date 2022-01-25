export class GifLoader {
    constructor() {
        this.autoHide = true;
        this._element = document.createElement("div");
        this._element.id = "loader";
        this._element.classList.add("loader_hidden");
        this._gifElement = document.createElement("img");
        this.gifSrc = "src/images/hex-loader.gif";
        this._gifElement.alt = "Loading...";
        this._element.appendChild(this._gifElement);
        document.body.appendChild(this._element);
        document.body.classList.add("preload");
        window.addEventListener("load", () => {
            this._doAutoHide();
        });
    }
    get autoHide() {
        return this._autoHide;
    }
    set autoHide(state) {
        this._autoHide = state;
    }
    get gifSrc() {
        return this._gifElement.src;
    }
    set gifSrc(src) {
        this._gifElement.src = src;
    }
    show() {
        document.body.classList.add("preload");
        this._element.classList.remove("loader_hidden");
    }
    hide() {
        document.body.classList.remove("preload");
        this._element.classList.add("loader_hidden");
    }
    _doAutoHide() {
        if (this.autoHide) {
            this.hide();
        }
    }
}
const gifLoader = new GifLoader();
//# sourceMappingURL=GifLoader.js.map