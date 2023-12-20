/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(todo=[]){
    this.todo=todo;
  }
  add(_new){
    this.todo.push(_new);
  }
  remove(index){
    this.todo.splice(index,1);
  }
  update(index, updateTodo){
    if(index<this.todo.length)
    this.todo.splice(index,1,updateTodo);
    else return null;
  }
  getAll(){
    return this.todo;
  }
  get(index){
    if(index<this.todo.length)
    return this.todo[index];
    else return null;
  }
  clear(){
    this.todo=[];
  }
}

module.exports = Todo;
