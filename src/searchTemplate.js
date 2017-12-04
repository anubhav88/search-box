export default class SearchTemplate {
    constructor() {

    }

    getTemplate(searchResultArr){
        return searchResultArr.list.reduce((o, result) => {
            return o +
                `<li
        			 class="todo-li"> 
        			${result.text} 
        			</li>`;
        }, '');
    }
}