import { animate, style, transition, trigger } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-animation',
  templateUrl: './todo-animation.component.html',
  styleUrl: './todo-animation.component.css',
  animations:[
    trigger('fade',[
      transition('void => *',[
        style({backgroundColor:'yellow',opacity:0}),  // start style
        animate(2000, style({backgroundColor:'transparent',opacity:1,transform: 'translateX(20px)'})) // end style
      ]),
      transition('* => void',[
        style({backgroundColor:'transparent',opacity:1}),  // start style
        animate(2000, style({backgroundColor:'lightpink',opacity:0,transform: 'translateX(-20px)'})) // end style
      ])
    ]) 
  ]
})
export class TodoAnimationComponent implements OnInit{

  todoItem: string = '';

  allTodo: string[] = ["Fill Gas", "Purchase Grocery", "Call Accountant"];

constructor(){}

  ngOnInit(): void {
   
  }
  addTodoItem(){
    this.allTodo.push(this.todoItem);
    this.todoItem = '';
  }

  removeTodo(todo: string){
    this.allTodo.splice(this.allTodo.indexOf(todo), 1);
  }
}





