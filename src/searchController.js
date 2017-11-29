export default class SearchController{
	constructor(searchService, searchView){
		this.searchService = searchService;
		this.searchView = searchView;
		this.searchView.addEventListenerForKeyUp(this.handleKeyup.bind(this));
		this.searchView.addEventListenerForKeyDown(this.handleKeyDown.bind(this))
	}

	handleKeyup = function(){
		let result = this.searchService.getSearchResult();
		if(result)
		{
			this.searchView.updateView(result);
		}
	}
}