export default class SearchTemplate {
    constructor() {

    }

    getTemplate(searchResultArr){
        searchResultArr.reduce((o, result) => {
            return o +
                `<li
        			 class="todo-li"> 
        			${result.text} 
        			</li>`;
        }, '');
    }
}