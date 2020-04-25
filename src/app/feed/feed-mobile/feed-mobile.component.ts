import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed-mobile',
  templateUrl: './feed-mobile.component.html',
  styleUrls: ['./feed-mobile.component.css']
})
export class FeedMobileComponent implements OnInit {

  blogBody = 'If you guys have been following me for a while, you know jeans are one of my favorite things to wear. I’m always on the search for the perfect-fitting pair of jeans, and I’ve got a few go-to trust-worthy brands. Additional Text to be truncated. If you guys have been following me for a while, you know jeans are one of my favorite things to wear. I’m always on the search for the perfect-fitting pair of jeans, and I’ve got a few go-to trust-worthy brands. Additional Text to be truncated'

  constructor() { }

  ngOnInit() {
  }

}
