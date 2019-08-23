import ListService from "../Services/ListService.js";

//Private
let _listService = new ListService()

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
    let template = ""
    let lists = _listService.List
    lists.forEach((list, index) => {
        template += list.getTemplate(index)
    })
    document.querySelector("#name").innerHTML = template
}


//Public
export default class ListController {
    constructor() {
        //NOTE: When the app first starts we want to pull any potential data out of memory
        _listService.getLists();
        //NOTE: After updating the store, we can automatically call to draw the lists.
        _drawLists();
    }
    addName(event) {
        event.preventDefault()
        let form = event.target
        let newName = {
            name: form.name.value
        }
        _listService.addName(newName)
        _drawLists()
    }
    deleteName(index) {
        _listService.deleteName(index)
        _drawLists()
    }
    addList(event, index) {
        event.preventDefault()
        let form = event.target
        let newList = form.list.value
        _listService.addList(newList, index)
        _drawLists()
    }
    deleteList(taskIndex, listIndex) {
        _listService.deleteList(taskIndex, listIndex)
        _drawLists()
    }

    //TODO: Your app will need the ability to create, and delete both lists and listItems
}