import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor(private http: HttpClient) { }

  fetchTasks(): Observable<any> {
    return this.http.get(environment.TODO_URL + 'data.json')
  }

  postTask(tasks: any) {
    this.http.put(environment.TODO_URL + 'data.json', tasks).subscribe()
  }
}
