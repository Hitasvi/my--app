import { Component, AfterViewInit, ViewChild} from '@angular/core';
import {ChildComponent} from "../child/child.component"

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterViewInit {
 parentMessage="Message from parent"
 message:string;
 @ViewChild(ChildComponent) child;

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(){
this.message=this.child.message;
  }
  receiveMessage($event) {
    this.message = $event
  }
}
