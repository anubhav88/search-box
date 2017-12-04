import SearchResultList from './searchResultList';
export default class SearchController{
	constructor(searchService, searchView){
		this.searchService = searchService;
		this.searchView = searchView;
		this.searchView.addEventListenerForKeyUp(this.handleKeyup.bind(this));
		this.searchView.addEventListenerForKeyDown(this.handleKeyDown.bind(this))
	}

	handleKeyup(textboxvalue){
		this.searchService.getSearchResult(textboxvalue,this.searchView.updateView.bind(this.searchView));
	};

	handleKeyDown(textboxvalue){
		this.searchService.reset();
		this.searchView.updateView(new SearchResultList([]));
	}

}