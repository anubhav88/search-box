import SearchController from './searchController';
import SearchTemplate from './searchTemplate';
import SearchView from './Searchview';
import SearchService from './SearchService';
/**
 * Page initialization
 */
function init() {
    const searchTemplate = new SearchTemplate();
    const searchService = new SearchService();
    const searchView = new SearchView(searchTemplate);
    const searchController = new SearchController(searchService, searchView);
}

window.onload = function() {
    init(); 
};