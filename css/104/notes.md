### Css 104

## The box model 

The box sizing property sets how the total width and height of an element is calculated.

how much space is allocated to each the elements the browser is laying out.  

By default in the CSS box model, the `width`and `height`you assign to an element is applied only to the element's content box. If the element has any border or padding, this is then added to the `width`and `height`to arrive at the size of the box that's rendered on the screen. This means that when you set `width` and `height`, you have to adjust the value you give to allow for any border or padding that may be added. For example, if you have four boxes with `width: 25%;`, if any has left or right padding or a left or right border, they will not by default fit on one line within the constraints of the parent container.

The graphic shown in the dev tools under computed is the box model , which helps you see what the browser sees and to help you know how the browser is figuring how much space this box should take up. It is made up of four parts. These four things determine the width and height of every box that the browser lays out. 

The content area (blue) - corresponds to anything between the opening and closing tags(i.e divs). It is usually text. We have addition going on in the content area it adds a 1 from the left and the right sides. we get this from the border. If there is padding or border it always adds to height and width in content area. When you explicitly state a width and height and you have box sizing border box it is subtracting. The border is not taken into account when it is figuring out its size.

Padding(green)-

Border (yellowish)-

Margin(orange)-

The `box-sizing` property can be used to adjust this behavior:

- `content-box` gives you the default CSS box-sizing behavior. If you set an element's width to 100 pixels, then the element's content box will be 100 pixels wide, and the width of any border or padding will be added to the final rendered width, making the element wider than 100px.
- `border-box` tells the browser to account for any border and padding in the values you specify for an element's width and height. If you set an element's width to 100 pixels, that 100 pixels will include any border or padding you added, and the content box will shrink to absorb that extra width. This typically makes it much easier to size elements. `box-sizing: border-box` is the default styling that browsers use for the `[<table>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)`, `[<select>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)`, and `[<button>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)` elements, and for `[<input>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)` elements whose type is `[radio](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio)`, `[checkbox](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox)`, `[reset](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/reset)`, `[button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/button)`, `[submit](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/submit)`, `[color](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color)`, or `[search](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/search)`.

If you explicitly set a width and height that means you want that box to be that width and height and you set it with box sizing border box. you don’t want to think it makes your life easier. 

The box sizing border box setting does not effect width and height for  elements where the width and height has not been explicitly set. 

This becomes critical when you start lining items up and your setting width and height. 

With that the browser is setting the width and height it’s either adding or subtracting.