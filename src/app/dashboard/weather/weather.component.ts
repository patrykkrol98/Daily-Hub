import { Component, OnInit } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { WeatherService } from './weather.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  data$!: Observable<any>;

  today: Date = new Date();

  loading = false;
  wrongCityError = false;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() { 
    this.getWeatherData('Warsaw');
  }

  getWeatherData(city: string) {
    this.wrongCityError = false
    this.data$ = this.weatherService.getWeatherForCity(city).pipe(
      catchError(err => {
            this.wrongCityError = true;
            throw 'error in Api. Details: ' + err;
          })
    )
  }
}
