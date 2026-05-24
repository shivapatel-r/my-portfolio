import { Component } from '@angular/core';
;
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Contact } from '../contact/contact';
import { Portfolio } from '../portfolio/portfolio';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  isMenuOpen = false;
}
