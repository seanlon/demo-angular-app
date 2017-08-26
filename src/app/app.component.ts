import { Component } from '@angular/core';
import { ClassAbcDescriptor } from './decorator/class/ClassAbcDescriptor';
import { MethodAbcDescriptor } from './decorator/method/MethodAbcDescriptor';
import { PropertyAbcDescriptor } from './decorator/property/PropertyAbcDescriptor';

//class-level
@ClassAbcDescriptor({
  anyProperty:"anyValue"
})
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  //property-level
  @PropertyAbcDescriptor
  title ;

  constructor() { }

  ngOnInit() { 
    this.doNothing();
  }

  //method-level
  @MethodAbcDescriptor('abc')
  doNothing() { }

}
