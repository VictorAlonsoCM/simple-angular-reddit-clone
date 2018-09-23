import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row'; // This adds an attribute to the enterer app-article tag.
  votes: number;
  title: string;
  link: string;

  constructor() {
    this.title = 'Angular 2';
    this.link = 'http://angular.io';
    this.votes = 10;
   }

   voteUp(): boolean {
     this.votes += 1;
     return false; // JavaScript, by default, propagates the click event to all the parent components.
   }

   voteDown(): boolean {
     this.votes -= 1;
     return false; // To fix that, we need to make the click event handler to return false.
   }

  ngOnInit() {
  }


}
