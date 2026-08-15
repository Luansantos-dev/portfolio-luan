import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { profile } from '../../core/data/profile.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
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

  form = { name: '', email: '', message: '' };
  submitted = false;

  onSubmit(): void {
    const text = encodeURIComponent(
      `Olá Luan! Me chamo ${this.form.name}.\n\n${this.form.message}\n\nEmail: ${this.form.email}`
    );
    window.open(`https://wa.me/5571992752076?text=${text}`, '_blank');
    this.submitted = true;
    setTimeout(() => {
      this.submitted = false;
      this.form = { name: '', email: '', message: '' };
    }, 4000);
  }
}
