import { Component, 
  OnInit, Input, 
  ViewEncapsulation, 
  OnChanges, 
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef, ContentChild
  } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck,
 AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy   {

  @Input('srvElement') element: {type: string, name: string, content: string };
  @Input() name :string;
  @ViewChild('heading') header : ElementRef;
  @ContentChild('contentParagraph')  paragragh : ElementRef;

  constructor() { 
    console.log('constructor called!!');
  }

  ngOnChanges(changes : SimpleChanges){
    console.log('ngOnchanges called!!');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called!!');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
    console.log('Text Content of Paragraph: ' + this.paragragh.nativeElement.textContent);
  }

ngDoCheck(){
  console.log('ngdocheck called!!');
}

ngAfterContentInit(){
  console.log('AfterContentInit called!!');
}
ngAfterContentChecked(){
  console.log('AfterContentChecked called!');
}

ngAfterViewInit(){
  console.log('AfterViewInit called!');
  console.log('Text Content of Paragraph: ' + this.paragragh.nativeElement.textContent);
} 
ngAfterViewChecked(){
  console.log('AfterViewChecked called!');
}

ngOnDestroy(){
  console.log('AfterViewChecked called!');
}
}
