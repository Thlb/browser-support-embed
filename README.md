# browser-support-embed

A tool made for developers to show each browser compatibility with their projects.

# Demo

[Demo here!](http://lab.while-true.io/browser-support-embed/)

![Browser support Preview](https://thlb.github.io/img/browser-support-embed-showcase.png)

# Usage

Insert the code below tocreate the embed iframes for you.

```html
<div class="browser-sup" data-ie="no" data-firefox="yes" data-chrome="yes" data-safari="unk" data-opera="unk" data-width="300" data-height="120"></div>
<script src="//cdn.jsdelivr.net/browser-support-embed/latest/widget.js"></script>
```

This will show :

![Browser support Preview](https://thlb.github.io/img/browser-support-embed-01.png)

## Browsers support parameters

Specify if the browser is supported (```yes```), not supported (```no```), unknown (```unk```). 

For each data parameter not set, the default value is ```unk```

| Parameter    | Values                         | Default   |
|--------------|--------------------------------|-----------|
| data-ie      | ```yes```, ```no```, ```unk``` | ```unk``` |
| data-firefox | ```yes```, ```no```, ```unk``` | ```unk``` |
| data-chrome  | ```yes```, ```no```, ```unk``` | ```unk``` |
| data-safari  | ```yes```, ```no```, ```unk``` | ```unk``` |
| data-opera   | ```yes```, ```no```, ```unk``` | ```unk``` |

The parameter value (```yes```, ```no```, ```unk```) will set the color of the small dot in the right/bottom corner

| Value       | Color            |
|-------------|------------------|
| ```yes```   | ```green```      |
| ```no```    | ```red```        |
| ```unk```   | ```grey```       |

## Themes parameters & colors

You can specify the theme of the frame with the parameter ```data-theme```. Possibles values are :
* ```light``` (default if ```data-theme``` not set)
* ```dark```

_Note: The background of the frame is transparent for a better integration with your design._

You can display colorized icons with the parameter ```data-colors```. Possibles values are :
* ```yes``` 
* ```no``` (default if ```data-colors``` not set)

## Frame size and customisation

The frame's size can be set with :

| Parameter         | Value         | Default   |
|-------------------|---------------|-----------|
| ```data-width```  | ```numeric``` | ```300``` |
| ```data-height``` | ```numeric``` | ```120``` |

For a better customisation, you can create a parent div to set borders, backgrounds, shadow...

```html
<div style="background:#F6F7FA; border:solid 1px #AAAAAA; border-radius:5px; display:inline-block; width:300px; margin:0 auto;">
  <div class="browser-sup" data-ie="9+" data-firefox="yes" data-chrome="no" data-safari="unk" data-opera="" data-theme="light" data-width="300" data-height="120"></div>
</div>
<script src="//cdn.jsdelivr.net/browser-support-embed/latest/widget.js"></script>
```

