import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() childMessage:string; 
message="Message from Child";
message1="Hello from child"
@Output() messageEvent=new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {
  }
  sendMessage(){
    this.messageEvent.emit(this.message1);
  }

}
