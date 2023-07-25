import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-clipslist',
  templateUrl: './clipslist.component.html',
  styleUrls: ['./clipslist.component.css']
})
export class ClipslistComponent implements OnInit, OnDestroy {
  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.handleScroll)
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const { scrollTop, offsetHeight } = document.documentElement
    const { innerHeight } = window

    const bottomOfWindow = Math.round(scrollTop) + innerHeight === offsetHeight

    if (bottomOfWindow) {
      console.log('bottom of window');
    }
  }
}
