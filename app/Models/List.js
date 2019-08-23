export default class Task {
    constructor(data) {
        this.name = data.name
        this.list = data.list || []
    }


    getTemplate(index) {
        let template =
            `<div class="col-3 border">
            <div class="row justify-content-center text-center">
            <div class="col-10">
                <h2>${this.name}</h2>
                </div>
                <div class="col-2 align-items-center d-flex">
                <button class="btn btn-danger" onclick="app.controllers.listController.deleteName(${index})">x
                </button></div></div>
                <ul>`
                template += this.drawLists(index)
                template += `</ul>
            <div class="row">
                <div class="col-12">
                <form onsubmit="app.controllers.listController.addList(event, ${index})"> 
              <div class="form-group">
                <label for="list"></label>
                <input type="text" class="form-control" name="list" placeholder="List Item" required>
                </div>
                <button class="btn btn-success" type="submit">Add</button>
              </form>
              <br>
              </div>
            </div>
            </div>`
        return template
    }
    drawLists(taskIndex) {
    let listTemplate = ""
    this.list.forEach((list, listIndex) => {
      listTemplate += `
      <div class="row">
        
        <li>
                <h4>${list}
                <span class="badge" onclick="app.controllers.listController.deleteList(${taskIndex}, ${listIndex})">x</span></h4>
            
        </li>
      </div>`
    })
    return listTemplate
}
    }


    //TODO You will need to create a constructor 
    //and the methods needed to create the view template for this model
