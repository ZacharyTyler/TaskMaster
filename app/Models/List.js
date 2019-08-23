export default class Task {
    constructor(data) {
        this.name = data.name
        this.list = data.list || []
    }


    getTemplate(index) {
        let template =
            `<div class="col border">
                <h1>${this.name}</h1>
                <button onclick="app.controllers.listController.deleteName(${index})">X
                </button>
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
                <button type="submit">+</button>
              </form>
              </div>
            </div>
            </div>`
        return template
    }
    drawLists(taskIndex) {
    let listTemplate = ""
    this.list.forEach((list, listIndex) => {
      listTemplate += `<li>${list}<span onclick="app.controllers.listController.deleteList(${taskIndex}, ${listIndex})">   X</span></li>`
    })
    return listTemplate
  }

   

    }


    //TODO You will need to create a constructor 
    //and the methods needed to create the view template for this model
