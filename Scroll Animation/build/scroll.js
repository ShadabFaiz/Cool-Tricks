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
//     else 
//     {
//         childElement.classList.replace('top', 'hide');
//         console.log('heiging')
//     }
// }
// For Multiple Elements
const lowerBound = -20;
const upperBound = 10;
const viewport = document.documentElement;
const childrenElements = document.getElementsByTagName("section");
let childElement;
let VisibleElements;
window.onscroll = (ev) => {
    for (const key in childrenElements) {
        if (isHTMLElement(childrenElements[key])) {
            childElement = childrenElements[key];
            animate(childElement);
        }
    }
};
const isHTMLElement = (element) => {
    return typeof element === 'object' ? true : false;
};
const animate = (el) => {
    console.log(el);
    let positionFromTop = (el.getBoundingClientRect().top / viewport.clientHeight) * 100;
    if (positionFromTop < 40 && positionFromTop > lowerBound) {
        el.classList.replace('hide', 'top');
        VisibleElements.set(el, 'showing');
    }
    else {
        el.classList.replace('top', 'hide');
        VisibleElements.delete(el);
    }
    console.log(VisibleElements.entries);
};
//# sourceMappingURL=scroll.js.map