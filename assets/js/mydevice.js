// --- Tabs
var tabslinks = document.querySelectorAll('.tabs-menu-link');
var tabscontents = document.querySelectorAll('.tabs-content-item');

for (index = 0; index < tabslinks.length; index++) {
    var link = tabslinks[index];
    link.addEventListener('click', function(e) {

        e.preventDefault();

        var href, current, other;

        for (var i = 0; i < tabslinks.length; i++) {
            var other = tabslinks[i];
            other.classList.remove('is-active');
        }
        this.classList.add('is-active');

        href = this.getAttribute('href');
        if (href) current = document.querySelector(href);

        for (var i = 0; i < tabscontents.length; i++) {
            var other = tabscontents[i];
            other.setAttribute('aria-hidden', 'true');
            other.classList.add('display-n');
        }

        if (current) {
            current.setAttribute('aria-hidden', 'false');
            current.classList.remove('display-n');
            current.classList.add('is-active');
        }
    });
}

/*!
 * res 0.2.0-0+201403312143
 * https://github.com/ryanve/res
 * MIT License, 2014 Ryan Van Etten
 */
! function(a, b, c) {
    "undefined" != typeof module && module.exports ? module.exports = c() : a[b] = c()
}(this, "res", function() {
    function a(a) {
        return null == a ? m : a !== a ? !1 : l ? l >= a : k([
            ["min--moz-device-pixel-ratio:", a],
            ["min-resolution:", a * d, "dpi"]
        ], j)
    }

    function b(b) {
        return null == b ? a() * d : a(b / d)
    }

    function c(b) {
        return null == b ? a() / e : a(b * e)
    }
    var d = 96,
        e = 2.54 / d,
        f = "undefined" != typeof window && window,
        g = "undefined" != typeof screen && screen,
        h = [].join,
        i = f.matchMedia,
        j = i ? function() {
            return !!i.call(f, "(" + h.call(arguments, "") + ")").matches
        } : function() {
            return !1
        },
        k = function(a, b, c) {
            for (var d = 0, e = a.length; e > d;)
                if (b.apply(c, a[d++])) return !0;
            return !1
        },
        l = +f.devicePixelRatio || Math.sqrt(g.logicalXDPI * g.logicalYDPI) / d || 0,
        m = l || !i ? l : function(a) {
            for (var b, c = 41; c-- && !a(b = c / 20););
            return b
        }(a);
    return {
        dppx: a,
        dpcm: c,
        dpi: b
    }
});
/*!
 * verge 1.9.1+201402130803
 * https://github.com/ryanve/verge
 * MIT License 2013 Ryan Van Etten
 */
! function(a, b, c) {
    "undefined" != typeof module && module.exports ? module.exports = c() : a[b] = c()
}(this, "verge", function() {
    function a() {
        return {
            width: k(),
            height: l()
        }
    }

    function b(a, b) {
        var c = {};
        return b = +b || 0, c.width = (c.right = a.right + b) - (c.left = a.left - b), c.height = (c.bottom = a.bottom + b) - (c.top = a.top - b), c
    }

    function c(a, c) {
        return a = a && !a.nodeType ? a[0] : a, a && 1 === a.nodeType ? b(a.getBoundingClientRect(), c) : !1
    }

    function d(b) {
        b = null == b ? a() : 1 === b.nodeType ? c(b) : b;
        var d = b.height,
            e = b.width;
        return d = "function" == typeof d ? d.call(b) : d, e = "function" == typeof e ? e.call(b) : e, e / d
    }
    var e = {},
        f = "undefined" != typeof window && window,
        g = "undefined" != typeof document && document,
        h = g && g.documentElement,
        i = f.matchMedia || f.msMatchMedia,
        j = i ? function(a) {
            return !!i.call(f, a).matches
        } : function() {
            return !1
        },
        k = e.viewportW = function() {
            var a = h.clientWidth,
                b = f.innerWidth;
            return b > a ? b : a
        },
        l = e.viewportH = function() {
            var a = h.clientHeight,
                b = f.innerHeight;
            return b > a ? b : a
        };
    return e.mq = j, e.matchMedia = i ? function() {
        return i.apply(f, arguments)
    } : function() {
        return {}
    }, e.viewport = a, e.scrollX = function() {
        return f.pageXOffset || h.scrollLeft
    }, e.scrollY = function() {
        return f.pageYOffset || h.scrollTop
    }, e.rectangle = c, e.aspect = d, e.inX = function(a, b) {
        var d = c(a, b);
        return !!d && d.right >= 0 && d.left <= k()
    }, e.inY = function(a, b) {
        var d = c(a, b);
        return !!d && d.bottom >= 0 && d.top <= l()
    }, e.inViewport = function(a, b) {
        var d = c(a, b);
        return !!d && d.bottom >= 0 && d.right >= 0 && d.top <= l() && d.left <= k()
    }, e
});


// --- Root font size from @nhoizey
var root = document.getElementById('body');
var rfsstyle = window.getComputedStyle(root, null).getPropertyValue('font-size');
var rfsstyle = parseInt(rfsstyle);
document.getElementById('rfs').innerHTML = 'Root font size : <em>' + rfsstyle + 'px</em>';


// Pointer events
if (window.navigator.pointerEnabled) {
    document.getElementById('pointerevents').className = 'supported';
}

for (var index = 0; index < document.querySelector('html').classList.length; index++) {
    var item = document.querySelector('html').classList[index];
    if (item.length > 0) {
        var target = null;
        target = document.querySelector('.js-modernizr li.' + item);
        if (target) {
            target.classList.add('supported');
        }
    }
}

// screen.width
var sw = screen.width;
var sh = screen.height;
document.getElementById('screenwidth').innerHTML = 'JS screen.width : <em>' + sw + 'px</em>';

// screen.height
document.getElementById('screenheight').innerHTML = 'JS screen.height : <em>' + sh + 'px</em>';


// resolution
var jsdpi = res.dpi();
jsdpi = jsdpi.toFixed(2);
document.getElementById('jsdpi').innerHTML = 'Resolution (dpi) : <em>' + jsdpi + 'dpi</em>';
var jsdppx = res.dppx();
jsdppx = jsdppx.toFixed(2);
document.getElementById('jsdppx').innerHTML = 'Resolution (dppx) : <em>' + jsdppx + 'dppx</em>';
var jsdpcm = res.dpcm();
jsdpcm = jsdpcm.toFixed(2);
document.getElementById('jsdpcm').innerHTML = 'Resolution (dpcm) : <em>' + jsdpcm + 'dpcm</em>';

// aspect ratio
var deviceaspectratio = verge.aspect(screen);
deviceaspectratio = deviceaspectratio.toFixed(2);
document.getElementById('deviceaspectratio').innerHTML = 'Device Aspect-Ratio : <em>' + deviceaspectratio + '</em>';

// viewport width
var viewportwidth = verge.viewportW();
document.getElementById('viewportwidth').innerHTML = '<em>' + viewportwidth + 'px</em>';

// viewport width em
var viewportwidthem = viewportwidth / rfsstyle;
viewportwidthem = viewportwidthem.toFixed(0);
document.getElementById('viewportwidthem').innerHTML = '<em>' + viewportwidthem + 'em</em>';

// addEventlistener on resize
window.addEventListener('resize', function() {
    // viewport width
    var viewportwidth = verge.viewportW();
    document.getElementById('viewportwidth').innerHTML = '<em>' + viewportwidth + 'px</em>';
    // viewport width em
    var viewportwidthem = viewportwidth / rfsstyle;
    viewportwidthem = viewportwidthem.toFixed(0);
    document.getElementById('viewportwidthem').innerHTML = '<em>' + viewportwidthem + 'em</em>';

    /*
    // window.innerWidth
    var dw = window.innerWidth;
    var dh = window.innerHeight;
    document.getElementById('devicewidth').innerHTML = 'JS window.innerWidth : <em>' + dw + 'px</em>';
    // document.body.clientWidth
    var bw = document.body.clientWidth;
    var bh = document.body.clientHeight;
    document.getElementById('clientwidth').innerHTML = 'JS body.clientWidth : <em>' + bw + 'px</em>';
    // screen.availWidth
    var aw = screen.availWidth;
    var ah = screen.availHeight;
    document.getElementById('availwidth').innerHTML = 'JS screen.availWidth : <em>' + aw + 'px</em>';
    */
});

// pixel ratio
var pxr = window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth;
pxr = pxr.toFixed(4);
document.getElementById('jsratio').innerHTML = 'JS pixel-ratio : <em>' + pxr + '</em>';

// user agent
if (navigator.userAgent) document.getElementById('ua').innerHTML = navigator.userAgent;

// --- table sorting
/*!
 * tablesort v5.0.2 (2017-11-12)
 * http://tristen.ca/tablesort/demo/
 * Copyright (c) 2017 ; Licensed MIT
 */
;
(function() {
    function Tablesort(el, options) {
        if (!(this instanceof Tablesort)) return new Tablesort(el, options);

        if (!el || el.tagName !== 'TABLE') {
            throw new Error('Element must be a table');
        }
        this.init(el, options || {});
    }

    var sortOptions = [];

    var createEvent = function(name) {
        var evt;

        if (!window.CustomEvent || typeof window.CustomEvent !== 'function') {
            evt = document.createEvent('CustomEvent');
            evt.initCustomEvent(name, false, false, undefined);
        } else {
            evt = new CustomEvent(name);
        }

        return evt;
    };

    var getInnerText = function(el) {
        return el.getAttribute('data-sort') || el.textContent || el.innerText || '';
    };

    // Default sort method if no better sort method is found
    var caseInsensitiveSort = function(a, b) {
        a = a.trim().toLowerCase();
        b = b.trim().toLowerCase();

        if (a === b) return 0;
        if (a < b) return 1;

        return -1;
    };

    // Stable sort function
    // If two elements are equal under the original sort function,
    // then there relative order is reversed
    var stabilize = function(sort, antiStabilize) {
        return function(a, b) {
            var unstableResult = sort(a.td, b.td);

            if (unstableResult === 0) {
                if (antiStabilize) return b.index - a.index;
                return a.index - b.index;
            }

            return unstableResult;
        };
    };

    Tablesort.extend = function(name, pattern, sort) {
        if (typeof pattern !== 'function' || typeof sort !== 'function') {
            throw new Error('Pattern and sort must be a function');
        }

        sortOptions.push({
            name: name,
            pattern: pattern,
            sort: sort
        });
    };

    Tablesort.prototype = {

        init: function(el, options) {
            var that = this,
                firstRow,
                defaultSort,
                i,
                cell;

            that.table = el;
            that.thead = false;
            that.options = options;

            if (el.rows && el.rows.length > 0) {
                if (el.tHead && el.tHead.rows.length > 0) {
                    for (i = 0; i < el.tHead.rows.length; i++) {
                        if (el.tHead.rows[i].getAttribute('data-sort-method') === 'thead') {
                            firstRow = el.tHead.rows[i];
                            break;
                        }
                    }
                    if (!firstRow) {
                        firstRow = el.tHead.rows[el.tHead.rows.length - 1];
                    }
                    that.thead = true;
                } else {
                    firstRow = el.rows[0];
                }
            }

            if (!firstRow) return;

            var onClick = function() {
                if (that.current && that.current !== this) {
                    that.current.removeAttribute('aria-sort');
                }

                that.current = this;
                that.sortTable(this);
            };

            // Assume first row is the header and attach a click handler to each.
            for (i = 0; i < firstRow.cells.length; i++) {
                cell = firstRow.cells[i];
                cell.setAttribute('role', 'columnheader');
                if (cell.getAttribute('data-sort-method') !== 'none') {
                    cell.tabindex = 0;
                    cell.addEventListener('click', onClick, false);

                    if (cell.getAttribute('data-sort-default') !== null) {
                        defaultSort = cell;
                    }
                }
            }

            if (defaultSort) {
                that.current = defaultSort;
                that.sortTable(defaultSort);
            }
        },

        sortTable: function(header, update) {
            var that = this,
                column = header.cellIndex,
                sortFunction = caseInsensitiveSort,
                item = '',
                items = [],
                i = that.thead ? 0 : 1,
                sortMethod = header.getAttribute('data-sort-method'),
                sortOrder = header.getAttribute('aria-sort');

            that.table.dispatchEvent(createEvent('beforeSort'));

            // If updating an existing sort, direction should remain unchanged.
            if (!update) {
                if (sortOrder === 'ascending') {
                    sortOrder = 'descending';
                } else if (sortOrder === 'descending') {
                    sortOrder = 'ascending';
                } else {
                    sortOrder = that.options.descending ? 'descending' : 'ascending';
                }

                header.setAttribute('aria-sort', sortOrder);
            }

            if (that.table.rows.length < 2) return;

            // If we force a sort method, it is not necessary to check rows
            if (!sortMethod) {
                while (items.length < 3 && i < that.table.tBodies[0].rows.length) {
                    item = getInnerText(that.table.tBodies[0].rows[i].cells[column]);
                    item = item.trim();

                    if (item.length > 0) {
                        items.push(item);
                    }

                    i++;
                }

                if (!items) return;
            }

            for (i = 0; i < sortOptions.length; i++) {
                item = sortOptions[i];

                if (sortMethod) {
                    if (item.name === sortMethod) {
                        sortFunction = item.sort;
                        break;
                    }
                } else if (items.every(item.pattern)) {
                    sortFunction = item.sort;
                    break;
                }
            }

            that.col = column;

            for (i = 0; i < that.table.tBodies.length; i++) {
                var newRows = [],
                    noSorts = {},
                    j,
                    totalRows = 0,
                    noSortsSoFar = 0;

                if (that.table.tBodies[i].rows.length < 2) continue;

                for (j = 0; j < that.table.tBodies[i].rows.length; j++) {
                    item = that.table.tBodies[i].rows[j];
                    if (item.getAttribute('data-sort-method') === 'none') {
                        // keep no-sorts in separate list to be able to insert
                        // them back at their original position later
                        noSorts[totalRows] = item;
                    } else {
                        // Save the index for stable sorting
                        newRows.push({
                            tr: item,
                            td: getInnerText(item.cells[that.col]),
                            index: totalRows
                        });
                    }
                    totalRows++;
                }
                // Before we append should we reverse the new array or not?
                // If we reverse, the sort needs to be `anti-stable` so that
                // the double negatives cancel out
                if (sortOrder === 'descending') {
                    newRows.sort(stabilize(sortFunction, true));
                } else {
                    newRows.sort(stabilize(sortFunction, false));
                    newRows.reverse();
                }

                // append rows that already exist rather than creating new ones
                for (j = 0; j < totalRows; j++) {
                    if (noSorts[j]) {
                        // We have a no-sort row for this position, insert it here.
                        item = noSorts[j];
                        noSortsSoFar++;
                    } else {
                        item = newRows[j - noSortsSoFar].tr;
                    }

                    // appendChild(x) moves x if already present somewhere else in the DOM
                    that.table.tBodies[i].appendChild(item);
                }
            }

            that.table.dispatchEvent(createEvent('afterSort'));
        },

        refresh: function() {
            if (this.current !== undefined) {
                this.sortTable(this.current, true);
            }
        }
    };

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Tablesort;
    } else {
        window.Tablesort = Tablesort;
    }
})();

// --- table sorting by number
(function() {
    var cleanNumber = function(i) {
            return i.replace(/[^\-?0-9.]/g, '');
        },

        compareNumber = function(a, b) {
            a = parseFloat(a);
            b = parseFloat(b);

            a = isNaN(a) ? 0 : a;
            b = isNaN(b) ? 0 : b;

            return a - b;
        };

    Tablesort.extend('number', function(item) {
        return item.match(/^[-+]?[£\x24Û¢´€]?\d+\s*([,\.]\d{0,2})/) || // Prefixed currency
            item.match(/^[-+]?\d+\s*([,\.]\d{0,2})?[£\x24Û¢´€]/) || // Suffixed currency
            item.match(/^[-+]?(\d)*-?([,\.]){0,1}-?(\d)+([E,e][\-+][\d]+)?%?$/); // Number
    }, function(a, b) {
        a = cleanNumber(a);
        b = cleanNumber(b);

        return compareNumber(b, a);
    });
}());


// ---  Tris de tableau
var sorts = document.querySelectorAll('.tablesort');
for (var index = 0; index < sorts.length; index++) {
    var sort = sorts[index];
    new Tablesort(sort);
}


// --- Analytics
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-9345479-4']);
_gaq.push(['_trackPageview']);

(function() {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();