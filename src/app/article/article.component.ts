import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row'; // This adds an attribute to the enterer app-article tag.
  @Input() article: Article;

  constructor() {
  }

  voteUp(): boolean {
    this.article.voteUp();
    return false; // JavaScript, by default, propagates the click event to all the parent components.
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false; // To fix that, we need to make the click event handler to return false.
  }

  ngOnInit() {
  }


}
