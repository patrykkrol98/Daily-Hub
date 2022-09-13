import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) { }
  getWeatherForCoordinates(lat: number, lon: number) {
    const params = {
      params: new HttpParams()
        .set('lat', lat)
        .set('lon', lon)
        .set('units', 'metric')
        .set('APPID', environment.WEATHER_API_KEY)
    };
    return this.getWeatherByParams(params)
  }
  getWeatherForCity(city: string): Observable<any> {
    const params = {
      params: new HttpParams()
        .set('q', city)
        .set('units', 'metric')
        .set('APPID', environment.WEATHER_API_KEY)
    };
    return this.getWeatherByParams(params)
  }

  private getWeatherByParams(params: { params: HttpParams }): Observable<any> {
    return this.http.get<any>(environment.WEATHER_API_URL, params).pipe(
      map(data => ({
        ...data,
        image: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
      }))
    );
  }

}