// For Single Element
// const lowerBound = -20;
// const upperBound = 10;
// const viewport = document.documentElement;
// const childrenElements = document.getElementsByTagName("section")[1];
// let childElement = childrenElements.children[0];
// window.onscroll = (ev: any) => {
//     console.log(childElement);
//     let positionFromTop = (childElement.getBoundingClientRect().top / viewport.clientHeight) * 100;
//     if( positionFromTop < 40 && positionFromTop > lowerBound ) 
//    {
//     childElement.classList.replace('hide', 'top');
//     console.log('showing');
//    }
//     // else 
//     // {
//     //     childElement.classList.replace('top', 'hide');
//     //     console.log('heiging')
//     // }
// }
// For Multiple Elements
var lowerBound = -20;
var upperBound = 10;
var viewport = document.documentElement;
var childrenElements = document.getElementsByTagName("section");
var childElement;
var VisibleElements = {};
window.onscroll = function (ev) {
    for (var key in childrenElements) {
        if (isHTMLElement(childrenElements[key])) {
            childElement = childrenElements[key];
            animate(childElement.children[0]);
        }
    }
};
var isHTMLElement = function (element) {
    return typeof element === 'object' ? true : false;
};
var animate = function (el) {
    console.log(el);
    var positionFromTop = (el.getBoundingClientRect().top / viewport.clientHeight) * 100;
    if (positionFromTop < 40 && positionFromTop > lowerBound) {
        el.classList.replace('hide', 'top');
        VisibleElements[el.id] = 'showing';
    }
    //uncomment these if you want the element to hide if we move away from them.
    // else {
    //     el.classList.replace('top', 'hide');
    //     delete VisibleElements[el.id];
    // }
};
