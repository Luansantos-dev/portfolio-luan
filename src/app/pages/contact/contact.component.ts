import { Component } from '@angular/core';
import { profile } from '../../core/data/profile.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  readonly profile = profile;

  readonly tiles = [
    {
      title: 'LinkedIn',
      value: 'luansantosdev',
      href: 'https://linkedin.com/in/luansantosdev',
      external: true,
    },
    {
      title: 'GitHub',
      value: 'Luansantos-dev',
      href: 'https://github.com/Luansantos-dev',
      external: true,
    },
    {
      title: 'Localização',
      value: profile.location,
      href: null as string | null,
      external: false,
    },
    {
      title: 'Deploy',
      value: 'anubisink.vercel.app',
      href: 'https://anubisink.vercel.app',
      external: true,
    },
  ] as const;
}
