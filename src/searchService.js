import SearchResultList from './searchResultList';
import SearchResult from './searchResult';

export default class SearchService{
	constructor(wait){
		this.timer=null;
	}

	getSearchResult(value, callback){
		console.log(value);
		let service = this;
		let promise = new Promise(function(resolve, reject) {
			service.timer = setTimeout(resolve, 5000);
		});
		promise.then(function(){
			callback(service._getData());
		});
	}

	reset(){
		clearInterval(this.timer);
	}

	_getData(){
		let result = [];
		result.push(new SearchResult('Hi hello1'));
		return new SearchResultList(result);
	}
}