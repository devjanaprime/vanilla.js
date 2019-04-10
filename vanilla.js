let getEl = () =>{
    return window.event.srcElement || window.event.target
} // end getEl

let toggle = ( bool ) => {
    return !bool;
} // end toggle

let filtertObjectArray = ( array, key, type, value ) => {
    let filtered = [];
    const checker = 'item.' + key + type + value;
    for( item of array ){
        if( eval( checker ) ){
            filtered.push( item );
        } //end match
    } //end for
    return filtered;
} // end function