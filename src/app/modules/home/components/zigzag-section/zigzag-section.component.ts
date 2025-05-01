import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input } from '@angular/core';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

@Component({
  selector: 'app-zigzag-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './zigzag-section.component.html',
  styleUrl: './zigzag-section.component.scss'
})
export class ZigzagSectionComponent implements AfterViewInit {
  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger,MotionPathPlugin);

    // First horizontal scroll (pages 1-3)
    const firstSection = this.el.nativeElement.querySelector('.horizontal-section.first');
    const firstContent = firstSection.querySelector('.horizontal-content');
    const firstScrollLength = firstContent.scrollWidth - window.innerWidth;
    const tracker = this.el.nativeElement.querySelector('#tracker');
    const path = this.el.nativeElement.querySelector('#track-path');
    const totalScrollLength = document.body.scrollHeight - window.innerHeight;


    gsap.to(firstContent, {
      x: -firstScrollLength,
      duration: 2.5,
      ease: "power4.out",
      scrollTrigger: {
        markers:true,
        trigger: firstSection,
        start: 'top top',
        end: () => `+=${firstContent.scrollWidth}`,
        scrub: 2,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      }
    });

    // Second horizontal scroll (pages 10-12)
    const secondSection = this.el.nativeElement.querySelector('.horizontal-section.second');
    const secondContent = secondSection.querySelector('.horizontal-content');
    const secondScrollLength = secondContent.scrollWidth - window.innerWidth;

    gsap.to(secondContent, {
      x: -secondScrollLength,
      duration: 2.5,
      ease: "power4.out",
      scrollTrigger: {
        trigger: secondSection,
        start: 'top top',
        end: () => `+=${secondContent.scrollWidth}`,
        scrub: 2,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      }
    });

    gsap.to(tracker, {
      motionPath: {
        path: path,
        align: path,
        autoRotate: false,
        alignOrigin: [0.5, 0.5]
      },
      ease: 'none',
      scrollTrigger: {
        trigger: this.el.nativeElement.querySelector('body'),
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        invalidateOnRefresh: true,
      }
    });
  }
}
