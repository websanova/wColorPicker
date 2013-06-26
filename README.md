# wColorPicker.js

A jQuery color picker plugin with various effects for showing and hiding the color picker.  Also comes with an option to set a clickable button to trigger effects.

* [View the wColorPicker demo](http://wcolorpicker.websanova.com)
* [Download the lastest version of wColorPicker](https://github.com/websanova/wColorPicker/tags)


## Related Plugins

* [wPaint](http://wpaint.websanova.com) - Simple paint drawing plugin.
* [wScratchPad](http://wscratchpad.websanova.com) - Plugin simulating scratch card.


## Settings

Available options with notes, the values here are the defaults.

```javascript
$('#elem').wColorPicker({
    theme         : 'black',    // colors - black, white, cream, red, green, blue, yellow, orange, plum
    opacity       : 0.8,        // opacity level
    initColor     : '#FF0000',  // initial colour to set palette to
    onMouseover   : null,       // function to run when palette color is moused over
    onMouseout    : null,       // function to run when palette color is moused out
    onSelect      : null,       // function to run when palette color is selected
    mode          : 'flat',     // flat mode inserts the palette to container, other modes insert button into container - hover, click
    buttonSize    : 20,         // size of button if mode is ohter than flat
    effect        : 'slide',    // none/slide/fade
    showSpeed     : 500,        // time to run the effects on show
    hideSpeed     : 500         // time to run the effects on hide
});
```


## Examples

For starters you will need to include the following files:

```js
<script type="text/javascript" src="./wColorPicker.js"></script>
<link rel="Stylesheet" type="text/css" href="./wColorPicker.css" />
```

### callbacks

You can set callbacks for the color picker for each color in the palette.

```html
<div id="wColorPicker" class="hoverBox">
    <input id="wColorPicker_input" type="text"/><br/><br/>
</div>

<script type="text/javascript">
    $("#wColorPicker").wColorPicker({
        initColor: '#FF00FF',
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
</script>
```


## Resources

* [More jQuery plugins by Websanova](http://websanova.com/plugins)
* [jQuery Plugin Development Boilerplate](http://wboiler.websanova.com)
* [The Ultimate Guide to Writing jQuery Plugins](http://www.websanova.com/blog/jquery/the-ultimate-guide-to-writing-jquery-plugins)


## License

MIT licensed

Copyright (C) 2011-2012 Websanova http://www.websanova.com