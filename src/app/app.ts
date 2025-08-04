import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from "./components/sidebar/sidebar";
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Sidebar,CommonModule,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})


export class App {
  protected title = 'my-store';
  sidebarOpen = window.innerWidth >= 768;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const width = (event.target as Window).innerWidth;
    this.sidebarOpen = width >= 768;
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeSidebar() {
    if (window.innerWidth < 768) {
      this.sidebarOpen = false;
    }
  }
  screenIsMobile(): boolean {
  return window.innerWidth < 768;
}
}
