import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { News } from './news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  
  constructor(private http: HttpClient) { }

  getNewsByCountryAndCategory(country: string, category: string): Observable<News[]> {
    return this.http.get<any>(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${environment.NEWS_API_KEY}`).pipe(
      map(data => {
        return data.articles
      })
    );
  }
}
