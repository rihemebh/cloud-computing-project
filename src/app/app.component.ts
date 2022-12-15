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
    this.http.get('api/getName')
      .subscribe((resp: any) => this.message = resp.text);

      
  console.log(this.message);
  }

}
