import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  data: any[] | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>('./assets/Livros.json').subscribe(data => {
      this.data = data;
    });
  }
}
