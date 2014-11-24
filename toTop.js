/**
 toTop 1.0.0
 Scroll to top script by yavulan
 yavulan@gmail.com
 */

// Modular system from http://codereview.stackexchange.com/questions/21105/pattern-for-creating-a-globally-accessible-custom-plugin/21147#21147
(function (ns) {
    var opts = {
        id: 'scroll-to-top',
        up: '▲',
        down: '▼',
        scrollSpeed: 120,
        // css styles
        bottom: '20px',
        right: '20px',
        left: null,
        width: '48px',
        height: '48px',
        color: '#fff',
        background: 'rgba(129,129,129,.3)',
        hoverBackground: 'rgba(129,129,129,.8)',
        br: '4px', // br is shortcut for border-radius
        transition: 'all .2s ease 0',
        z: '9999999' // z is shortcut for z-index
    };

    // Get working Object.keys in IE
    // From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
    if (!Object.keys) {
        Object.keys = (function() {
            'use strict';
            var hasOwnProperty = Object.prototype.hasOwnProperty,
                hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
                dontEnums = [
                    'toString',
                    'toLocaleString',
                    'valueOf',
                    'hasOwnProperty',
                    'isPrototypeOf',
                    'propertyIsEnumerable',
                    'constructor'
                ],
                dontEnumsLength = dontEnums.length;

            return function(obj) {
                if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
                    throw new TypeError('Object.keys called on non-object');
                }

                var result = [], prop, i;

                for (prop in obj) {
                    if (hasOwnProperty.call(obj, prop)) {
                        result.push(prop);
                    }
                }

                if (hasDontEnumBug) {
                    for (i = 0; i < dontEnumsLength; i++) {
                        if (hasOwnProperty.call(obj, dontEnums[i])) {
                            result.push(dontEnums[i]);
                        }
                    }
                }
                return result;
            };
        }());
    }

    function ScrollTo(element, to, duration) {
        if (duration < 0) return;
        var difference = to - element.scrollTop;
        var perTick = difference / duration * 10;

        setTimeout(function () {
            element.scrollTop = element.scrollTop + perTick;
            if (element.scrollTop === to) return;
            ScrollTo(element, to, duration - 10);
        }, 10);
    }

    // From http://stackoverflow.com/questions/707565/how-do-you-add-css-with-javascript
    function InsertCss(code) {
        var style = document.createElement('style');
        style.type = 'text/css';

        if (style.styleSheet) {
            style.styleSheet.cssText = code; // IE
        } else {
            style.innerHTML = code; // Other browsers
        }

        document.getElementsByTagName("head")[0].appendChild(style);
    }

    // Exposing a function
    ns.initialize = function (obj) {

        // Get & rewrite opts from call param
        if(obj){
            var keysArr = Object.keys(obj);
            for (var i = 0; i < keysArr.length; i++) {
                opts[keysArr[i]] = obj[keysArr[i]];
            }
        }

        var cssCode = '#'+opts.id+'{'
            + 'position: fixed;'
            + 'text-align: center;'
            + 'cursor: pointer;'

            + 'bottom: '+opts.bottom+';'
            + 'right: '+opts.right+';'
            + 'left: '+opts.left+';'
            + 'height: '+opts.height+';'
            + 'width: '+opts.width+';'
            + 'line-height: '+opts.height+';'
            + 'color: '+opts.color+';'
            + 'background: '+opts.background+';'
            + 'border-radius: '+opts.br+';'
            + 'z-index: '+opts.z+';'

            + '-webkit-transition:'+opts.transition+';'
            + '-moz-transition: '+opts.transition+';'
            + '-ms-transition: '+opts.transition+';'
            + '-o-transition: '+opts.transition+';'
            + 'transition: '+opts.transition+';'

            + '-webkit-touch-callout: none;'
            + '-webkit-user-select: none;'
            + '-khtml-user-select: none;'
            + '-moz-user-select: none;'
            + '-ms-user-select: none;'
            + 'user-select: none;'
            + '}'

            + '#'+opts.id+':hover {'
            + 'background: '+opts.hoverBackground+';'
            + '}';

        InsertCss(cssCode);

        document.body.innerHTML += '<div id="' + opts.id + '" style="display: none;">' + opts.up + '</div>';
        var totopDiv = document.getElementById(opts.id);

        var tempXY = 0;
        var clicked = false;

        if(typeof opts.scrollSpeed == 'string'){
            opts.scrollSpeed = opts.scrollSpeed.toLowerCase().trim();

            switch (opts.scrollSpeed) {
                case 'slow':
                    opts.scrollSpeed = 180;
                    break;
                case 'fast':
                    opts.scrollSpeed = 50;
                    break;
                default :
                    opts.scrollSpeed = 120;
            }
        }


        totopDiv.onclick = function () {
            if (clicked) {
                clicked = false;
                ScrollTo(document.documentElement, tempXY, opts.scrollSpeed);
                totopDiv.innerHTML = opts.up;
            }
            else {
                clicked = true;
                tempXY = document.documentElement.scrollTop;
                ScrollTo(document.documentElement, 0, opts.scrollSpeed);
                totopDiv.innerHTML = opts.down;
            }
        };

        window.onscroll = function () {
            if (document.documentElement.scrollTop == 0) {
                totopDiv.innerHTML = opts.down;
                if (!clicked) {
                    totopDiv.style.display = 'none';
                }
            }
            else {
                totopDiv.innerHTML = opts.up;
                totopDiv.style.display = 'block';
            }
        };
    };

}(this.toTop = this.toTop || {}));