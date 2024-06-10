import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practicetodo',
  templateUrl: './practicetodo.component.html',
  styleUrl: './practicetodo.component.css'
})
export class PracticetodoComponent implements OnInit {
  
todoItems:string='';
 
allTodo:string[]=['take a dog for a walk','jog for a while','set Alarm','practice Coding','Submit Daily AssignMent'];

item:string='';
Items:string[]=['Practice Angular Course','Submit Daily Assignments','Wake up Early in the morning','Sleep properly at night','Excercise Daily','please check yout Transactions'];

// vechiles:string[]=['car','bike','van','bus','lorry'];

constructor(){}

  ngOnInit(): void {
    
  }
  addTodoItem(){
    this.allTodo.push(this.todoItems);
     this.todoItems="";
  }
  removeTodo(todo: any){
     this.allTodo.splice(this.allTodo.indexOf(todo),1);
  }

  removeItem(item: any){
    this.Items.splice(this.Items.indexOf(item),1);
  }

  addItem(){
    this.Items.push(this.item);
    this.item="";
  }





}
