import { Component } from '@angular/core';
import { Timeouter } from './decorator/timeout.method.decorator'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  ngOnInit() {
    this.doSomething()
  }

  @Timeouter(5000)
  doSomething() {
    alert('Method doSomething ');
  }
}
