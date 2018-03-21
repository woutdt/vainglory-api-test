import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  player: any;

  headers = {
    "authorization": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI5OWY3NWIwMC0wZWExLTAxMzYtNzgyNi0wYTU4NjQ2MDBlZGUiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTIxNTczNTk3LCJwdWIiOiJzZW1jIiwidGl0bGUiOiJ2YWluZ2xvcnkiLCJhcHAiOiJ2Zy1hcGktcHJvamVjdCIsInNjb3BlIjoiY29tbXVuaXR5IiwibGltaXQiOjEwfQ.cQaPQgYexRgzRJm1_oc2ndSMN9fyJRUE-xtQlqiWAbI",
    "Accept": "application/vnd.api+json"
  };

  url = "https://api.dc01.gamelockerapp.com/shards/";

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {

  }

  getPlayer(name: string, shard: string) {
    this.http.get(this.url + shard + '/players?filter[playerNames]=' + name)
      .subscribe(data => this.player);
    console.log(this.player);
  }

}
