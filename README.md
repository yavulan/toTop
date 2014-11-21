# toTop.js

**toTop.js** is easy to install script for scrolling page to top and back to previous reading point.

## Install
There are a few different ways you can install toTop:

* Download the zipfile from the [releases](https://github.com/yavulan/toTop/releases) page and install it. 
* Checkout the source: `git clone git://github.com/yavulan/toTop.git` and install it yourself.
   
## Getting Started
* Load script:
```HTML
    <script src="toTop.min.js"></script>
```

* Initialize script:

```HTML
    <script>
    toTop.initialize();
    </script>
```

## Passing options

```JavaScript
toTop.initialize({
        width: '40px',
        height: '40px'
    });
```


## Available options

| Option name | Default value  | Explanation |
| ------- |------------| ------------|
| id     | `'scroll-to-top'` | Id of created toTop div |
| up    | `'▲'`       |   Text for up button state |
| down | `'▼'`        |    Text for down button state  |
| scrollSpeed | `120`        |  It's inverted value, so the more it is, the slowest is animation. There also available: `'slow'` and `'fast'` |
| **Css styles:**      |
| bottom | `'20px'`        |    |
| right | `'20px'`        |    |
| left | `null`       |    |
| width | `'48px'`        |    |
| height | `'48px'`      |     |
| color | `'#fff'`       |    |
| background | `'rgba(129,129,129,.3)'`        |    |
| hoverBackground | `'rgba(129,129,129,.8)'`        |    |
| br             | `'4px'`      |   Value of border-radius |
| transition | `'all .2s ease 0'`       |    |


## Examples

Show toTop on left:

```JavaScript
toTop.initialize({
        left: '20px'
    });
```

Set animation to be slow:

```JavaScript
toTop.initialize({
        scrollSpeed: 'slow'
    });
```
