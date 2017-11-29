export default class View {
	constructor(templateHtml){
		this.template = templateHtml;
		this.ul = document.getElementsByClassName("search-result")[0];
		this.textbox=document.getElementsByClassName("search-box")[0];
	}

	updateView(searchResultArr){
		this.ul.innerHTML = this.template.getTemplate(searchResultArr);	
	}
	
	addEventListenerForKeyDown(callback){
		document.addEventListener("keydown",function(){
			callback(textbox);
		});
	}

	addEventListenerForKeyUp(callback){
		document.addEventListener("keyup",function(){
			callback(textbox);
		});
	}		
}
