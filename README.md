# toTop.js

**toTop.js** is easy to install script for scrolling html page to top and back to previous reading point by clicking a button. Works without jQuery.

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

| Option name | Default value  | Type | Explanation |
| ------- |------------|-------|------------|
| id     | `'scroll-to-top'` |String| Id of created toTop div |
| up    | `'▲'`       |String|   Text for up button state |
| down | `'▼'`        |String|    Text for down button state  |
| speed | `3`        |Integer or String|  Optimal range is between 1 and 10. There also available: `'slow'` and `'fast'` |
| **Css styles:**      |
| bottom | `'20px'`        |String|    |
| right | `'20px'`        |String|    |
| left | `null`       |String|    |
| width | `'48px'`        |String|    |
| height | `'48px'`      |String|     |
| color | `'#fff'`       |String|    |
| background | `'rgba(129,129,129,.3)'`        |String|    |
| hoverBackground | `'rgba(129,129,129,.8)'`        |String|    |
| br             | `'4px'`      |String|   Value of border-radius |
| z             | `'9999999'`      |String|   Value of z-index |
| transition | `'all .2s ease 0'`       |String|    |


## Examples

Show toTop on left:

```JavaScript
toTop.initialize({
        left: '20px'
    });
```

Set scrolling to be fast:

```JavaScript
toTop.initialize({
        speed: 'fast'
    });
```

## With [RequireJS](https://github.com/jrburke/requirejs)

* Set the path to `toTop.js` file:
```JavaScript
paths: {
        toTop: 'some/path/toTop'
    }
```

* Config the shim:

```JavaScript
shim: {
        toTop:{
            exports:'toTop'
        }
    }
```

* Initialize script:

```JavaScript
requirejs(['toTop'], function(toTop){
    toTop.initialize();
});
```
