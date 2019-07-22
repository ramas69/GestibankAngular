import { ClientpotentielService } from './../services/clientpotentiel.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-client-potentiel',
  templateUrl: './client-potentiel.component.html',
  styleUrls: ['./client-potentiel.component.css']
})
export class ClientPotentielComponent implements OnInit {

  constructor(private clientpotentielHttpService: ClientpotentielService) { }

  clientspotentiels: ClientPotentielComponent[]
  ngOnInit() {

  //  this.clientpotentielHttpService.getClientsPotentiels().subscribe(
  //   response =>this.handleSuccessfulResponse(response),
  //   );

  /* this.compteHttpService.getClientsPotentiels().subscribe(
    response =>this.handleSuccessfulResponse(response),
    );*/

  }

//   handleSuccessfulResponse(response)
// {
//     this.clientspotentiels=response;
//     console.log("client potenciel",response);

// }
}


