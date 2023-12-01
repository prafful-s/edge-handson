
/**
 * loads and decorates the button
 * @param {Element} block The button block element
 */

export default async function decorate(block) {
console.log(block);
const anchorElement = document.createElement('a');
const divElement = document.createElement('div');
const paraElement = document.createElement('p');
anchorElement.href= block.lastElementChild.firstElementChild.innerHTML;
anchorElement.title = block.firstElementChild.firstElementChild.innerText;
anchorElement.html = block.firstElementChild.firstElementChild.innerText;


}