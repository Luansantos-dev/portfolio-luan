import { Component } from '@angular/core';
import { SERVICES } from '../../core/data/services.data';

@Component({
  selector: 'app-services',
  standalone: true,
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  readonly services = SERVICES;
}
