import { Component } from '@angular/core';
import { ClassDiscountDescriptor } from './decorator/class/ClassDiscountDescriptor';
import { MethodDiscountDescriptor } from './decorator/method/MethodDiscountDescriptor';
import { PropertyDiscountDescriptor } from './decorator/property/PropertyDiscountDescriptor';
import { HostListener } from '@angular/core';


//class-level
@ClassDiscountDescriptor({
  allowGroup: "BEER",
  allowRate: "25%"
})
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //property-level
  @PropertyDiscountDescriptor
  private discountItem; 

  constructor() { } 
  ngOnInit() { }

  //method-level
  @HostListener('click', ['$event'])
  @MethodDiscountDescriptor( {})
  performClickHandler() { }

}
