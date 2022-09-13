import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { News } from './news';
import { NewsService } from './news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newsList: News[] = [];
  currentCategory = "general";
  currentCountry = "pl";
  countries = [
    { value: 'pl', viewValue: 'Poland' },
    { value: 'gb', viewValue: 'Great Britain' },
    { value: 'us', viewValue: 'USA' },
  ];
  categoryList: string[] = [
    "general",
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology"
  ];

  constructor(private news: NewsService) { }

  ngOnInit() {
    this.getNews();
  }

  isSelected(selection: string){
    return (this.currentCountry == selection || this.currentCategory == selection)
  }

  getNews() {
    this.news.getNewsByCountryAndCategory(this.currentCountry, this.currentCategory).subscribe(news => { this.newsList = news });
  }

  onChangeCategory(category: string) {
    this.currentCategory = category;
    this.getNews()
  }

  onChangeCountry(country: string) {
    this.currentCountry = country;
    this.getNews()
  }
}
