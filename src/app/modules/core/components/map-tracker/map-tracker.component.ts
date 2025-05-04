import { AfterViewInit, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';


@Component({
  selector: 'app-map-tracker',
  standalone: true,
  imports: [],
  templateUrl: './map-tracker.component.html',
  styleUrl: './map-tracker.component.scss'
})
export class MapTrackerComponent implements AfterViewInit {
  @ViewChild('tracker') tracker!: ElementRef<SVGCircleElement>;
  @ViewChild('path') path!: ElementRef<SVGPathElement>;

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

    if (!this.tracker?.nativeElement || !this.path?.nativeElement) {
      console.error('tracker or path not found in DOM');
      return;
    }

    console.log("tracker",this.tracker?.nativeElement);
    const pagesCount = 9;

    gsap.to(this.tracker.nativeElement, {
      motionPath: {
        path: this.path.nativeElement,
        align: this.path.nativeElement,
        autoRotate: false,
        alignOrigin: [0.5, 0.5],
      },
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: `+=${window.innerHeight * pagesCount}`,
        scrub: 2,
        invalidateOnRefresh: true,
      },
    });
  }
}
