import { Client } from './../../models/client.model';
import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(private compteHttpService: ClientService) { }

  clients: Client[]
  ngOnInit() {
   this.compteHttpService.getClients().subscribe(
    response =>this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response)
{
    this.clients=response;
}

}
