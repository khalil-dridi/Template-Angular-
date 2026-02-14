import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit {
  /** Uniquement pour l’animation d’entrée de la card (fade + translateY). Aucune logique métier. */
  cardVisible = false;

  ngAfterViewInit(): void {
    requestAnimationFrame(() => {
      this.cardVisible = true;
    });
  }
}
