const allBox = document.querySelectorAll('.box')

document.querySelector('nav').addEventListener('click', (event)=>{

	if(event.target.tagName !== 'LI') return false
	let filterColor = event.target.dataset['f']
	console.log(filterColor);
	console.log(allBox);
	allBox.forEach(elem=>{
		elem.classList.remove('hide');
		if(!elem.classList.contains(filterColor) && filterColor !== 'all'){
			elem.classList.add('hide');
		}
	})
});