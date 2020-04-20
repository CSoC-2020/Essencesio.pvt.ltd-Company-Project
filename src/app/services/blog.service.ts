import { Injectable } from '@angular/core';
import { Blog } from '../models/blog.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { UserDataService } from './user-data.service';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient,
              private router: Router, private userService: UserDataService, private authService: AuthenticationService) { }

   saveBlog(title: string, body: string, image: any[]) {
     const Blog: Blog = ({
       title: title,
       body: body,
       image: image,
       author: this.userService.User.Name,
       authorId: this.authService.id
     });

     console.log(Blog);
     this.http.post('http://localhost:3000/api/blog/createBlog', Blog).subscribe(
    responce => {
    console.log(responce);
    this.router.navigate(['/']);
      }
    );

  }
  getBlogs() {
    this.http.get('http://localhost:3000/api/blog/allBlog').subscribe (
      responce => {
        console.log(responce);
      }
    );
  }
}
