import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public currentSlide = 0;
  public slides = [
    {src : '../../../assets/Golbourne-1-1044x1566.jpg'},
    {src: '../../../assets/Uniqlo-x-J-W-Anderson-5-1044x1566.jpg'}
  ];
  blog: any;
  comment= 'I enjoyed this read, thank you for explaining so clearly. I would argue tho that the gig economy is not so different from the auto industry’s cycle of layoffs as supply and demand fluctuate. There is also evidence that building (buying) market share is a longterm strategy that yields intangable gains. Amazon took over a decade to turn a profit but what it earned in marketshare in that period is price.  ';
  constructor(public blogservice: BlogService) { }

  ngOnInit() {
    const blog = this.blogservice.getBlogs();
  }
  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }
}
