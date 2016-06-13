/**
 * Created by Amit Thakkar on 6/13/16.
 */
import {Component} from '@angular/core';
import {User} from './user'

@Component({
    selector: 'my-app',
    template: `
        <h1>Old Way(in Angular1.x)</h1>
        <div>
            User Details:
            Name: {{user && user.name}}
            Age: {{user && user.age}}
        </div>        
        <hr />
        <h1>New Way(in Angular2 - Safe Navigation Operator)</h1>
        <div>
            User Details:
            Name: {{user?.name}}
            Age: {{user?.age}}
        </div>        
    `
})
export class AppComponent {
    user:User = <User>{
        name: 'Amit Thakkar',
        age: 27
    };
}