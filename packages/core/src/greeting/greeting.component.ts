import {Component, Input} from '@angular/core';

@Component({
  selector: 'greeting',
  templateUrl: 'greeting.component.html'
})
export class GreetingComponent {
  @Input() public application: string;
}
