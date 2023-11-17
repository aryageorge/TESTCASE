import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent  implements OnInit ,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
 @Input() value:  string='Arya'
 constructor(){
  console.log('constructor called!');
  //console.log(this.value);
  
  
 }

 //ngOnChanges
 ngOnChanges(change:SimpleChanges){
console.log('ngOnChanges called');
console.log(change);


 }
 //ngOnInit()
 ngOnInit(){
  console.log('ngOnInit Called');
 // console.log(this.value);
  
 }
 //ngDoCheck
 ngDoCheck(){
  console.log('ngDoCheck called!');
  
 }
 //ngAfterContentInit()
 ngAfterContentInit(){
  console.log('ngAfterContentInit() called:');
  
 }
 //ngAfterContentChecked()
 ngAfterContentChecked(){
  console.log('ngAfterContentChecked() called');
  

 }
 //ngAfterViewInit()
 ngAfterViewInit(){
console.log('ngAfterViewInit() called');

 }
 //ngAfterViewChecked()
 ngAfterViewChecked(){
console.log('ngAfterViewChecked() called');
  
 }
 //ngOnDestroy()
 ngOnDestroy(){
  console.log('ngOnDestroy() called');
  
 }
}
