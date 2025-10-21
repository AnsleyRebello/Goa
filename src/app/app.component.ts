import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';

// kaunse tag ka ye component hai? --> <app-root>
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkWithHref],
  templateUrl: './app.component.html',  // kaunsi template change karni hai aapko
  styleUrl: './app.component.css',
})

// export = public 
export class AppComponent {

  // variable
  title = 'cwh-todo-list';

  
  // created when object created
  constructor() 
  {
  }
}

// ( without page reload ).....changes get reflected
