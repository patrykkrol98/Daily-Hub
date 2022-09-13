import { Component, OnInit } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { WeatherService } from './weather.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  data$!: Observable<any>;

  today: Date = new Date();
  coordinates = [0, 0];
  loading = false;
  wrongCityError = false;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.getPosition().then((position) => {
      this.getWeatherData(position.coords.latitude, position.coords.longitude)
    })
    .catch((err) => {
      console.error(err.message);
    });
  
  }

  getPosition(): Promise<any> {
    return new Promise((resolve, reject) =>
      navigator.geolocation.getCurrentPosition(resolve, reject)
    );
  }

  getWeatherData(lat: number, lon: number) {
    this.wrongCityError = false
    this.data$ = this.weatherService.getWeatherForCoordinates(lat, lon).pipe(
      catchError(err => {
        this.wrongCityError = true;
        throw 'error in Api. Details: ' + err;
      })
    )
  }
}
