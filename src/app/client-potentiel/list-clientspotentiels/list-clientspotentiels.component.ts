import { ClientPotentiel } from './../../models/client-potentiel.model';
import { ClientpotentielService } from './../../services/clientpotentiel.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-clientspotentiels',
  templateUrl: './list-clientspotentiels.component.html',
  styleUrls: ['./list-clientspotentiels.component.css']
})
export class ListClientspotentielsComponent implements OnInit {

  constructor(private clientpotentielsHttpService: ClientpotentielService) { }

  clientspotentiels: ClientPotentiel[]
  ngOnInit() {
   this.clientpotentielsHttpService.getClientsPotentiels().subscribe(
    response =>this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response)
{
    this.clientspotentiels=response;

}
}
