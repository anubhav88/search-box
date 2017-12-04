export default class View {
	constructor(templateHtml){
		this.template = templateHtml;
		this.ul = document.getElementsByClassName("search-result")[0];
		this.textbox=document.getElementsByClassName("new-search")[0];
	}

	updateView(searchResultArr){
		this.ul.innerHTML = this.template.getTemplate(searchResultArr);	
	}
	
	addEventListenerForKeyDown(callback){
		var textbox =this.textbox;
		textbox.addEventListener("keydown",function(){
			callback(textbox.value);
		});
	}

	addEventListenerForKeyUp(callback){
		var textbox =this.textbox;
		textbox.addEventListener("keyup",function(){
			callback(textbox.value);
		});
	}		
}
