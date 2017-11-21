export default class View {
	constructor(templateHtml){
		this.template = templateHtml;
		this.ul = document.getElementsByClassName("search-result")[0];
		this.textbox=document.getElementsByClassName("search-box")[0];
	}

	updateView(searchResultArr){
		this.ul.innerHTML = this.template.getTemplate(searchResultArr);	
	}
	
	addEventListenerForKeyUp(callback){
		document.addEventListener("keydown",callback){
			callback(textbox);
		}
	}

	addEventListenerForKeyUp(callback){
		document.addEventListener("keyup",callback){
			callback(textbox);
		}
	}		
}
