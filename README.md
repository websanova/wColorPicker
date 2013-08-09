# wColorPicker.js

A jQuery color picker plugin with various effects for showing and hiding the color picker.  Also comes with an option to set a clickable button to trigger effects.

* [View the wColorPicker demo](http://wcolorpicker.websanova.com)
* [Download the lastest version of wColorPicker](https://github.com/websanova/wColorPicker/tags)


## Related Plugins

* [wPaint](http://wpaint.websanova.com) - Simple paint drawing plugin.
* [wScratchPad](http://wscratchpad.websanova.com) - Plugin simulating scratch card.
* [wHumanMsg](http://whumanmsg.websanova.com) - A modern alerting plugin.
* [wTooltip](http://wtooltip.websanova.com) - Simple sleek looking tooltips.


## Settings

Available options with notes, the values here are the defaults.

```javascript
$('#elem').wColorPicker({
    theme           : 'classic',  // set theme
    opacity         : 0.8,        // opacity level
    color           : '#FF0000',  // set init color
    mode            : 'flat',     // mode for palette (flat, hover, click)
    position        : 'bl',       // position of palette, (tl, tc, tr, rt, rm, rb, br, bc, bl, lb, lm, lt)
    generateButton  : true,       // if mode not flat generate button or not
    dropperButton   : false,      // optional dropper button to use in other apps
    effect          : 'slide',    // only used when not in flat mode (none, slide, fade)
    showSpeed       : 500,        // show speed for effects
    hideSpeed       : 500,        // hide speed for effects
    onMouseover     : null,       // callback for color mouseover
    onMouseout      : null,       // callback for color mouseout
    onSelect        : null,       // callback for color when selected
    onDropper       : null        // callback when dropper is clicked
});
```


## Examples

For starters you will need to include the following files:

```js
<script type="text/javascript" src="./wColorPicker.min.js"></script>
<link rel="Stylesheet" type="text/css" href="./wColorPicker.min.css" />
```

### callbacks

You can set callbacks for the color picker for each color in the palette.

```html
<div id="wColorPicker" class="hoverBox"></div>
<input id="wColorPicker_input" type="text"/>
```

```js
$("#wColorPicker").wColorPicker({
    color: '#FF00FF',
    onSelect: function(color){
        $("#wColorPicker_input").css('background', color).val(color);
    },
    onMouseover: function(color){
        $("#wColorPicker_input").css('background', color).val(color);
    },
    onMouseout: function(color){
        $("#wColorPicker_input").css('background', color).val(color);
    }
});
```

### buttons

The color picker will attach itself to whatever elements you call it on.  If set to any other mode other than `flat` it will automatically hide and need to be triggered using the mode set.  By setting the size of your element you can then use it as a button and design the button as you wish.

We also provide a `generateButton` option to use which will auto generate a button which you can style using `wColorPicker-button`.  By default this on and you will need to set it to `false` if you desire to make your own button.

Note that making your own button means there will be no target to display the color chosen once selected.  You would also need to manually setup an `onSelect` to update your selected color picker if you would like to show the color chosen within your button somewhere.

Also make sure your button element does not have `overflow:hidden;` set otherwise you will not see the palettes.


### dropper

A dropper button is available for use with other apps.  This is a small button that will be set that when clicked will trigger a callback function that can be used to trigger some code in another app.  Both the `dropperButton` and `onDropper` options must be set.

```js
$("#wColorPicker").wColorPicker({
    dropperButton: true,
    onDropper: function(){ /* code */ }
});
```


## Grunt.js

If you want to use Grunt you will need to install the required plugins locally using `npm install` in the root folder of your project.  If you need to setup Grunt on your system you can follow my [Setting up Grunt.js](http://www.websanova.com/blog/javascript/how-to-setup-grunt) guide.

## Resources

* [More jQuery plugins by Websanova](http://websanova.com/plugins)
* [Websanova JavaScript Extensions Project](http://websanova.com/extensions)
* [jQuery Plugin Development Boilerplate](http://wboiler.websanova.com)
* [The Ultimate Guide to Writing jQuery Plugins](http://www.websanova.com/blog/jquery/the-ultimate-guide-to-writing-jquery-plugins)


## License

MIT licensed

Copyright (C) 2011-2012 Websanova http://www.websanova.com
