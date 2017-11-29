export default class SearchController{
	constructor(searchService, searchView){
		this.searchService = searchService;
		this.searchView = searchView;
		this.searchView.addEventListenerForKeyUp(this.handleKeyup.bind(this));
		this.searchView.addEventListenerForKeyDown(this.handleKeyDown.bind(this))
	}

	handleKeyup(){
		this.searchService.getSearchResult(this.searchView.updateView.bind(this.searchView));
	};

	handleKeyDown(){
		this.searchService.reset();
		this.searchView.updateView([]);
	}

}