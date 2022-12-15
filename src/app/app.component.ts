import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-app';

  message = '';

  constructor(private http: HttpClient) {
    this.http.get('http://localhost:7071/api/getName')
      .subscribe((resp: any) => this.message = resp);

      
  console.log(this.message);
  }

}
