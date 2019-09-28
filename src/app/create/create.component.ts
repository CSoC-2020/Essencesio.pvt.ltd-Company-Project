import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css',
]
})
export class CreateComponent implements OnInit {

  public imagesUrl = [];
  public isImage = false;
  public url;
  public title: string;
  public body: string;

  constructor(private blogservice: BlogService) { }

  ngOnInit() {
  }

  onSelectFile(event) { // called each time file input changes
      if (event.target.files && event.target.files[0]) {
        const reader = new FileReader();

        reader.readAsDataURL(event.target.files[0]); // read file as data url

        reader.onload = (event: any) => {
           // called once readAsDataURL is completed
            this.imagesUrl.push(reader.result);
            this.isImage = true;

        };
      }
  }
  onSubmit() {
    this.blogservice.saveBlog(this.title, this.body, this.imagesUrl);
  }

}
