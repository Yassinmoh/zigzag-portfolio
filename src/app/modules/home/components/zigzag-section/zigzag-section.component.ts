import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-zigzag-section',
  standalone: true,
  imports: [],
  templateUrl: './zigzag-section.component.html',
  styleUrls: ['./zigzag-section.component.scss'],
})
export class ZigzagSectionComponent implements AfterViewInit {
  @ViewChild('introSection') introSection!: ElementRef;
  @ViewChild('portfolioSection') portfolioSection!: ElementRef;
  @ViewChild('footerSection') footerSection!: ElementRef;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    // Intro Section (Horizontal: 2 halves)
    const introContent = this.introSection.nativeElement.querySelector('.horizontal-content');
    if (introContent) {
      const introWidth = introContent.offsetWidth - window.innerWidth;
      gsap.to(introContent, {
        x: -introWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: this.introSection.nativeElement,
          start: 'top top',
          end: '+=150%', // Longer duration for smooth transition
          scrub: 0.5,
          pin: true,
          snap: 1 / 1, // Snap to each halve
          invalidateOnRefresh: true,
        },
      });
    }

    // Portfolio Section (Horizontal: 4 pages)
    const portfolioContent = this.portfolioSection.nativeElement.querySelector('.horizontal-content');
    if (portfolioContent) {
      const portfolioWidth = portfolioContent.offsetWidth - window.innerWidth;
      gsap.to(portfolioContent, {
        x: -portfolioWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: this.portfolioSection.nativeElement,
          start: 'top top',
          end: '+=300%', // Longer duration for 4 pages
          scrub: 0.5,
          pin: true,
          snap: 1 / 3, // Snap to each page
          invalidateOnRefresh: true,
        },
      });
    }

    // Footer Section (Horizontal: Text animation)
    const footerText = this.footerSection.nativeElement.querySelector('#footer .content h1');
    if (footerText) {
      const footerWidth = footerText.offsetWidth - window.innerWidth;
      gsap.to(footerText, {
        x: -footerWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: this.footerSection.nativeElement,
          start: 'top top',
          end: '+=100%',
          scrub: 0.5,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    }

    // Refresh ScrollTrigger to handle pinning overlaps
    ScrollTrigger.refresh();
  }
}