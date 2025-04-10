import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [FormsModule, RouterModule, CommonModule],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  showBanner: boolean = false;

  ngOnInit(): void {
    // Verifica se o código está sendo executado no navegador
    if (typeof window !== 'undefined' && window.localStorage) {
      const showBannerFromLocalStorage = localStorage.getItem('showBanner');
      if (showBannerFromLocalStorage !== null) {
        this.showBanner = JSON.parse(showBannerFromLocalStorage);
      }
    }
  }

  toggleBanner(): void {
    this.showBanner = !this.showBanner;

    // Verifica novamente antes de manipular o localStorage
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('showBanner', JSON.stringify(this.showBanner));
    }
  }
}
