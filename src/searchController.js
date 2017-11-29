export default class SearchController{
	constructor(searchService, searchView){
		this.searchService = searchService;
		this.searchView = searchView;
		this.searchView.addEventListenerForKeyUp(this.handleKeyup.bind(this));
		this.searchView.addEventListenerForKeyDown(this.handleKeyDown.bind(this))
	}

	handleKeyup = ()=>{
		let result = this.searchService.getSearchResult();
		if(result)
		{
			this.searchView.updateView(result);
		}
	};

	handleKeyDown = ()=>{
		this.searchService.reset();
		this.searchView.updateView([]);
	}

}