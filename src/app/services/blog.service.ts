import { Injectable } from '@angular/core';
import { Blog } from '../models/blog.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient, private router: Router) { }

   saveBlog(title: string, body: string, image: any[]) {
    let blog: Blog;
    blog.title = title;
    blog.body = body;
    blog.image = image;
    this.http.post('http://localhost:3000/api/user/login', blog).subscribe(
      responce => {
        console.log(responce);
        this.router.navigate(['/']);
      }
    )

  }
}
