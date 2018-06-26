import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'
import { ShintoService } from '../shinto.service'

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  entry;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _shinto: ShintoService
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params:Params) => {
      var id = params['id']
      this.entry = this._shinto.getTransaction(id)
    });
  }

}