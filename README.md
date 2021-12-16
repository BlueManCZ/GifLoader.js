# GifLoader.js

Simple library in pure JavaScript to display an automatic loader component while the HTML page is loading.

![Loader](src/images/hex-loader.gif)

### Usage

Include `GifLoader.css` and `GifLoader.js` files into your HTML:

```html
<head>
    <link rel="stylesheet" href="src/css/GifLoader.css">
</head>

<body></body>

<script src="src/js/GifLoader.js"></script>
```

Everything is automatic, just show the GifLoader. It will automatically hide
when the page is loaded by default. Check [example.html](example.html)

```html
<script>
    gifLoader.show();
</script>
```

You can choose your own gif:

```html
<script>
    gifLoader.gifSrc = "src/images/sun-loader.gif";
    gifLoader.show();
</script>
```

And you can disable automatic hiding on page load and hide loader manually:

```html
<script>
    // disable autoHide
    gifLoader.autoHide = false;
    
    // show loader
    gifLoader.show();

    // do some work here
    
    // hide loader
    loader.hide();
</script>
```
