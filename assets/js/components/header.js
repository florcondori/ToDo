'use strict';
const Header = (update)=>{
	const header = $("<header></header>");
	const container = $("<div class='container'></div>");
	const h1 = $("<h1>To do App</h1>");

	container.append(h1);
	header.append(container);

	return header;
};