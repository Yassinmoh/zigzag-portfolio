import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import lenis_1 from 'lenis';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'zigzag-portfolio';

  ngAfterViewInit(): void {
    this.smoothScroll()
  }

  /**
   * Makes scrolling on a webpage smooth and nice using Lenis and GSAP ScrollTrigger.
   * 
   * What it does:
   * - Connects Lenis to GSAP ScrollTrigger for animations.
   * - Updates scrolling on every animation frame for a fluid experience.
   * Note: Needs GSAP, ScrollTrigger, and Lenis libraries to work.
  */
  smoothScroll(): void {
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new lenis_1()
    lenis.on('scroll', (e: any) => {
      console.log(e)
    })
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)
  }
}
