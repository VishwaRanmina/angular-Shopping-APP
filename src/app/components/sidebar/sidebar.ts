import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule,RouterLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
  @Input() sidebarOpen = true;
  @Output() toggle = new EventEmitter<void>();

  handleToggle() {
    this.toggle.emit();
  }

  screenIsMobile(): boolean {
    return window.innerWidth < 768;
  }
}
