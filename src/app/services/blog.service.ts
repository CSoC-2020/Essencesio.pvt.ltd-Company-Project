import { Injectable } from '@angular/core';
import { Blog } from '../models/blog.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient, private router: Router) { }

   saveBlog(title: string, body: string, image: any[]) {
     const Blog: Blog = ({
       title: title,
       body: body,
       image: image
     });

     console.log(Blog);
     this.http.post('http://localhost:3000/api/user/login', Blog).subscribe(
    responce => {
    console.log(responce);
    this.router.navigate(['/']);
      }
    );

  }
}
