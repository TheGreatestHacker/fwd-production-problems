## ITMD 361, Production Problem 03: CSS Flexbox

Using CSS Flexbox (refer to https://css-tricks.com/snippets/css/a-guide-to-flexbox/ as well as the
flexbox documentation at Mozilla Developer Network, MDN) in the `screen.css` file in the `pp-03/`
directory to style the `index.html` file according to the following prompts:

1. At mobile scale (outside of any media query), use flexbox to reorder the `<section>` elements
to read One, Two, Three in the browser.

2. Still at mobile scale, use the vw (viewport width) unit to size the `<section>` elements as
squares that resize with the viewport. (Hint: you need to set `height` to accomplish this.)

3. At the 600px break point, inside the media query change the flex box so that One and Two each
take up half the viewport but remain as squares sitting side-by-side, while Three sits below them
and takes up the entire viewport. An arrangement like this:

    | One | Two |
    | Three     |

4. Finally, at the 800px break point, have all three boxes display as squares in One, Two, Three
order, spread equally across the entire viewport.

5. Bragging rights if you can accomplish all of these without setting special flex item properties
on any individual list item.
