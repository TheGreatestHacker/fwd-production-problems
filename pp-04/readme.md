## ITMD 361, Production Problem 04: Unobtrusive JavaScript

This production problem asks you to take the accompanying `index.html` and `site.js` files and
correct them so that all users, whether or not they have JavaScript, can access the doorbell sound.

* Task One: Your first task, then, is to improve the semantics and text content of the page for users
without JavaScript. What HTML do you need to write so that JavaScript-less users receive a player to
hear the doorbell sound? What inaccessible, deprecated attribute needs to go away?

* Task Two: Your second task is, via the DOM, to swap out that HTML with a simpler structure that
presents a `Ring the Doorbell` control to users with JavaScript--much like the original contents of
the `index.html`. The swap should happen as soon as the DOM has loaded. Use CSS to style the control
so that it's obvious it can be clicked or tapped. Add additional CSS styles, if necessary, so that a
finger-pointer appears when hovering over the element with a mouse cursor. Hint: `<p>` is not the
best semantic choice for that control.

* Task Three: Your third task is to add in your JavaScript an event listener to your control so that
when the control is clicked or tapped, the doorbell rings. This event listener will complete the
replacement of the problem’s original HTML and its ugly, unfortunate `onclick` attribute.

When complete, your HTML and JavaScript files should produce no errors or warnings in their
respective linters.

* Bonus Task One: Design your control so it can be reached via the keyboard `Tab` key. The control
should give some visual indication that it is active. And while it is active, when the `Return` key
is pressed, the doorbell should ring.

* Bonus Task Two: Make the doorbell ring whenever someone presses the `d` key on their keyboard.

* Bonus Task Three: Prevent users from ringing the doorbell multiple times in a row. Once the sound
has started playing, in other words, it should play to completion before it can be played again.

* Bonus Task Four: Display an indicator in the browser viewport that the doorbell is ringing, both
for hearing-impaired users and for users in noisy environments who might not hear the sound.
