import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName:string, serverContent:string}>();
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{serverName:string, serverContent:string}>();
 // newServerName = '';
  //newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput : ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement) {
    //console.log(this.serverContentInput);
    console.log(nameInput.value);
    this.serverCreated.emit({
        // serverName: this.newServerName,
        serverName: nameInput.value,
        serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBluePrint(nameInput: HTMLInputElement) {
    // this.serverContentInput.nativeElement.value ="Somthing"
    this.bluePrintCreated.emit({
       serverName: nameInput.value,
       serverContent: this.serverContentInput.nativeElement.value
    });
  }
}
