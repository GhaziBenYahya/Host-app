import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {}

  loadd() {
    this.router.navigate(['/mfe1']);
  }








}
