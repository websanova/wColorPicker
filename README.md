# wChar.js

A jQuery color picker plugin. [Check out the live demo](http://www.websanova.com/plugins/color-pickers/jquery).


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

Update settings on the fly:

```javascript
$('input').wColorPicker('mode', 'hover');
```

Retrieve settings, if more than one it will return an array otherwise just the value.

```javascript
console.log($('#elem').wColorPicker('mode'));           // 'hover'
console.log($('.hoverBox').wColorPicker('mode'));       // ['hover', 'flat', 'click']
```


## Examples


Init color picker with some settings:

```html
<div id="wColorPicker" class="hoverBox"></div>

<script type="text/javascript">
    $("#wColorPicker").wColorPicker({mode: 'click', effect: 'slide', theme: 'plum'});
</script>
```

Init color picker and set callbacks:

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

* [jQuery Plugin Development Boilerplate](http://www.websanova.com/tutorials/jquery/jquery-plugin-development-boilerplate)
* [The Ultimate Guide to Writing jQuery Plugins](http://www.websanova.com/tutorials/jquery/the-ultimate-guide-to-writing-jquery-plugins)


## License

MIT licensed

Copyright (C) 2011-2012 Websanova http://www.websanova.com