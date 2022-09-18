import {
  Component, Input, OnInit, OnChanges, DoCheck,
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, 
  OnDestroy ,EventEmitter, Output, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked, 
AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy {

  @Input('img') postImgURL = ''
  @Output() imgSelected = new EventEmitter<string>()

  constructor() {
    console.log('constructor is Called')
  }

  ngOnInit(): void {
    console.log('ngOnInit is Called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges is Called');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck is Called');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit is Called')
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked is Called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit is Called')
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked is Called')
  }

  ngOnDestroy(): void {
      console.log("ngOnDestroy is Called")
  }

}
