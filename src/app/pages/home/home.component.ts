import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { profile } from '../../core/data/profile.data';

gsap.registerPlugin(TextPlugin);

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  readonly profile = profile;
  readonly statLines = ['3+ anos', '10+ projetos', '2 especialidades'] as const;

  @ViewChild('tag') tag!: ElementRef<HTMLElement>;
  @ViewChild('name') name!: ElementRef<HTMLElement>;
  @ViewChild('typeEl') typeEl!: ElementRef<HTMLElement>;
  @ViewChild('subtitle') subtitle!: ElementRef<HTMLElement>;
  @ViewChild('actions') actions!: ElementRef<HTMLElement>;
  @ViewChild('avatar') avatar!: ElementRef<HTMLElement>;
  @ViewChild('stats') statsEl!: ElementRef<HTMLElement>;

  private tl!: gsap.core.Timeline;

  ngAfterViewInit(): void {
    this.tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    this.tl
      .from(this.avatar.nativeElement, {
        opacity: 0,
        x: 40,
        duration: 0.7,
      }, 0)
      .from(this.tag.nativeElement, {
        opacity: 0,
        y: 16,
        duration: 0.5,
      }, 0.2)
      .from(this.name.nativeElement, {
        opacity: 0,
        y: 24,
        duration: 0.6,
      }, 0.4)
      .to(this.typeEl.nativeElement, {
        duration: 1.4,
        text: {
          value: 'builds systems that scale.',
          delimiter: '',
        },
        ease: 'none',
      }, 0.9)
      .from(this.subtitle.nativeElement, {
        opacity: 0,
        y: 16,
        duration: 0.5,
      }, 1.6)
      .from(this.actions.nativeElement, {
        opacity: 0,
        y: 12,
        duration: 0.5,
      }, 1.9)
      .from(
        this.statsEl.nativeElement.querySelectorAll('.home__stat'),
        {
          opacity: 0,
          y: 20,
          duration: 0.4,
          stagger: 0.12,
        },
        2.1,
      );
  }

  ngOnDestroy(): void {
    this.tl?.kill();
  }
}
