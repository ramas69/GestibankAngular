import { ClientService } from './../services/client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-potentiel',
  templateUrl: './client-potentiel.component.html',
  styleUrls: ['./client-potentiel.component.css']
})
export class ClientPotentielComponent implements OnInit {

  constructor(private compteHttpService: ClientService) { }

  clientspotentiels: ClientPotentielComponent[]
  ngOnInit() {
  /* this.compteHttpService.getClientsPotentiels().subscribe(
    response =>this.handleSuccessfulResponse(response),
    );*/
  }

  handleSuccessfulResponse(response)
{
    this.clientspotentiels=response;
}
}


