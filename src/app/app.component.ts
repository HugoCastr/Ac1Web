import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuSuperiorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ac1';
}
