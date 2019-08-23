
import Task from "../Models/List.js";

//Private
let _state = {
    lists: []
}


//Public
export default class ValuesService {
    deleteName(index) {
        if (confirm("Are you sure you want to delete this item?") == true) {
            _state.lists.splice(index, 1)
        }
        this.saveLists()
    }
    deleteList(taskIndex, listIndex) {
        if (confirm("Are you sure you want to delete this item?") == true) {
            _state.lists[taskIndex].list.splice(listIndex, 1)
        }
        this.saveLists()
    }
    addList(newList, index) {
        _state.lists[index].list.push(newList)
        this.saveLists()
    }
    addName(newName) {
        _state.lists.push(new Task(newName))
        this.saveLists()
    }
    //TODO  Here is where we handle all of our data manipulation, 
    //given the information you need in the controller, 
    //what methods will be required to support that functionality?


    get List() {
        return _state.lists.map(list => new Task(list))
    }


    //NOTE You will need this code to persist your data into local storage, these methods should not require changing
    //NOTE call saved list everytime you change the list collection in any way
    saveLists() {
        localStorage.setItem('lists', JSON.stringify(_state.lists))
    }
    //NOTE this method will get the lists from local storage at the start of the app
    getLists() {
        let saved = JSON.parse(localStorage.getItem('lists'))
        if (saved) {
            _state.lists = saved;
        }
    }
}
