import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  public rockets: any;
  constructor(
    private http: HttpClient
  )
  {}

  ngOnInit()
  {
    this.http.get('https://api.spacexdata.com/v4/rockets').subscribe( resp => {
      this.rockets = resp;
    })
  }
}
