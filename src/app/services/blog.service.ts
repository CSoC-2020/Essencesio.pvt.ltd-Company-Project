import { Injectable } from '@angular/core';
import { Blog } from '../models/blog.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class BlogService {
  blog: Blog;

  constructor(private http: HttpClient, private router: Router) { }

   saveBlog(title: string, body: string, image: any[]) {
    this.blog.title = title;
    this.blog.body = body;
    this.blog.image = image;
    console.log(this.blog);
    this.http.post('http://localhost:3000/api/user/login', blog).subscribe(
      responce => {
        console.log(responce);
        this.router.navigate(['/']);
      }
    )

  }
}
