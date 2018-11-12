// Use javascript to modify the DOM
// use IIFE (Immediately Invoked Function Expression)
(function(){
  if (typeof(document.querySelector)==="undefined") {
    // if document.querySelector is undefined, then just
    // return and get out
    return;
  }// else below
  // being unobstrusive JavaScript Below...
  document.addEventListener('DOMContentLoaded', function() {
    // Pretty much all of our page's JavaScript that works
    // on the DOM will be written in here...
    var vElement = document.querySelector('#doorbell');
    // Add a js class on the <html> element...
    document.querySelector('html').className = 'js';

    function ringDoorbell() {
      var doorbell = new Audio('media/doorbell.mp3');
      doorbell.play();
    }

    document.querySelector('audio').className = 'hide';

    // Listen for click events on the #doorbell...
    vElement.addEventListener('click', function() {
      // When it's clicked, run ringDoorbell

      ringDoorbell();
    });// end vElement Event Listener

  });// end document event listener

})();// end IIFE
