import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-ola',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ola.component.html',
  styleUrl: './ola.component.css',
})
export class OlaComponent {
  constructor() {
    console.log('ola');
  }
}
