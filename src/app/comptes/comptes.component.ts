import { Component, OnInit } from '@angular/core';
import {CompteService} from '../services/compte.service';
import {Compte} from '../models/compte.model'

@Component({
  selector: 'app-comptes',
  templateUrl: './comptes.component.html',
  styleUrls: ['./comptes.component.css']
})
export class ComptesComponent implements OnInit {

  constructor(private compteHttpService: CompteService) { }

  comptes: Compte[]
  ngOnInit() {
   this.compteHttpService.getComptes().subscribe(
    response =>this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response)
{
    this.comptes=response;
}

}
