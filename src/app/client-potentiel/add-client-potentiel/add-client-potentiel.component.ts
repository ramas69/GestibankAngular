import { ClientPotentiel } from './../../models/client-potentiel.model';
import { ClientService } from './../../services/client.service';
import { Client } from './../../models/client.model';
import { ClientpotentielService } from './../../services/clientpotentiel.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-client-potentiel',
  templateUrl: './add-client-potentiel.component.html',
  styleUrls: ['./add-client-potentiel.component.css']
})
export class AddClientPotentielComponent implements OnInit {
  clientpotentiel: ClientPotentiel; 

  constructor(private clientPotentielservice: ClientpotentielService, private _route : ActivatedRoute ) {
    this.clientpotentiel = new ClientPotentiel(0, "", "", "", "", "", 0, "" );
   }

  ngOnInit() {}
addclientpotentielForm(){
  this.clientPotentielservice.createClientsPotentiel(this.clientpotentiel).subscribe
    ( data => {
      alert("Client created successfully.");
    });
}

}
