import { Directive, ElementRef ,Renderer2, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {

  @Input() defaultColor:string='transparent';
  @Input() highlightColor:string='lightblue';
  
  @HostBinding('style.backgroundColor') backgroundColor:string=this.defaultColor;
  constructor(private eleRef:ElementRef,private rendered:Renderer2) { }

  ngOnInit(){
    // this.rendered.setStyle(this.eleRef.nativeElement,'background-color','blue');
  }

  @HostListener('mouseenter') mouseover(eventData:Event){
   // this.rendered.setStyle(this.eleRef.nativeElement,'background-color','lightblue');
   this.backgroundColor=this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData:Event){
    //this.rendered.setStyle(this.eleRef.nativeElement,'background-color','transparent');
    this.backgroundColor=this.defaultColor;

  }
}
