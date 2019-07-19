import { ClientService } from './../../../services/client.service';
import { Client } from './../../../models/client.model';
Client

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css']
})
export class ListClientsComponent implements OnInit {

  constructor(private clientHttpService: ClientService) { }

  clients: Client[]
  ngOnInit() {
   this.clientHttpService.getClients().subscribe(
    response =>this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response)
{
    this.clients=response;
}
}
