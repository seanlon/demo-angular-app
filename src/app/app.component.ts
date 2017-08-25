import { Component } from '@angular/core';
import { Timeouter } from './decorator/timeout.method.decorator'
import { Logger } from './class/log.class'
import { LogHelper } from './decorator/log.class.decorator'
import { ReadOnly } from './decorator/readonly.property.decorator'

@LogHelper("Yoo")
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ReadOnly
  title = 'app works!';
  log: Logger;

  constructor() {
    // this.log = new Logger();
  }

  ngOnInit() {
    this.doSomething()
    this.doSomethingElse('yes')
  }

  @Timeouter(5000)
  doSomething() {
    alert('Method doSomething ');
  }
  doSomethingElse(paramString: string) {
    alert('Method doSomethingElse ');
    this.title = paramString
  }
}
