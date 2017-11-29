import SearchController from './searchController';
import SearchTemplate from './searchTemplate';
import SearchResultList from './searchResultList';
import SearchView from './Searchview';
/**
 * Page initialization
 */
function init() {
    const searchResultList = new SearchResultList([]);
    const searchTemplate = new SearchTemplate();
    const searchView = new SearchView(searchTemplate);
    const searchController = new SearchController(searchResultList, searchView);
}

window.onload = function() {
    init(); 
};