import { Component, ViewChild, ElementRef } from '@angular/core';

class Todos {
  text: string;
  id: number;
  selected: boolean;
  constructor(text, id) {
    this.text = text;
    this.id = id;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('inputTodo') inputVal: ElementRef;

  title = 'todoNg';
  todos: Todos[] = []; 
  todoId: number = 1;

  addTodos() {
    // get the text from our input bar
    const input = this.inputVal.nativeElement.value;
    if (input.length == 0) {
      console.log("input is empty");
      alert('input is empty');
      return;
    }
    const list = new Todos(input, this.todoId++);
    this.todos.push(list);
    console.log(this.todos);
    this.inputVal.nativeElement.value = '';
  }

  // deleteSelectedTodos(selectedTodos: Todos[]) {
  //   console.log(selectedTodos);
  //   this.todos = this.todos.filter(todo => {
      
  //   })
  // }

  deleteTodo(todoDele: Todos) {
    console.log(todoDele);
    this.todos = this.todos.filter(todo => todo.id !== todoDele.id);
  }
  
  deleteAll() {
    this.todos = [];
  }

}
