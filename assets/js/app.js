'use strict';

const render = (root)=>{
	root.empty();

	const wrapper = $("<div class='wrapper'></div>");
	wrapper.append(Header());
	wrapper.append(Todo());

	root.append(wrapper);
};

const status = {
	todos: []
}

$( _ =>{
	const root = $(".root");
	render(root);
});