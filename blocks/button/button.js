
/**
 * loads and decorates the button
 * @param {Element} block The button block element
 */

export default async function decorate(block) {
	const anchorElement = document.createElement('a');
	anchorElement.href= block.lastElementChild.firstElementChild.innerHTML;
	anchorElement.title = block.firstElementChild.firstElementChild.innerText;
	anchorElement.text = block.firstElementChild.firstElementChild.innerText;
	anchorElement.className = 'button';
	const paraElement = document.createElement('p');
	paraElement.className='button-container';
	paraElement.append(anchorElement);
	block.firstElementChild.remove();
	block.lastElementChild.remove();
	block.append(paraElement);
}