vanilla.js
===

Simple little script I use to help with building sites using vanilla Javascript. Basically, I avoid JQuery when I can.

getEl() 
---

returns the element clicked in HTML that uses "onclick" as such:


HTML:
```
<button id="tester" onClick="clickCheck()">Click me</button>
```

JS:
```
let clickCheck = () => {
    let el = getEl();
    console.log( 'you clicked', el ); 
    console.log( element.getAttribute( 'id' ) ); // shows "tester"
} // end clicked
```

toggle( bool )
---

returns the opposite of a bool. Yeah, I know this is pretty stright forward and doesn't really need it's own funcion, but I use this enough.

filtertObjectArray( array, key, type, value )
---

returns an array of objectes that have a key thingy thing thing... I'll document this when I feel then eed to
