import { ClientPotentiel } from './../../models/client-potentiel.model';
import { ClientpotentielService } from './../../services/clientpotentiel.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-client-potentiel',
  templateUrl: './update-client-potentiel.component.html',
  styleUrls: ['./update-client-potentiel.component.css']
})
export class UpdateClientPotentielComponent implements OnInit {

  constructor(
     private clientPotentielservice: ClientpotentielService,
    private _route : ActivatedRoute ) { }
    clientpotentiel: ClientPotentiel; 
  ngOnInit() {
    this._route.paramMap.subscribe(parameterMap =>{
      const id = +parameterMap.get('id');
      //this.getClientPotentiel(id);
    });
  }
  /* private getClientPotentiel(id : number){
    this.clientPotentielservice.findClientpotentielById(id).subscribe(
     response =>this.handleSuccessfulResponse(response),
    );
  } */
  handleSuccessfulResponse(response)
  {
    this.clientpotentiel=response;
  }


  updateclientpotentielForm(): void {
    this.clientPotentielservice. updateclientpotentiel(this.clientpotentiel)
        .subscribe( data => {
          alert("Employee updated successfully.");
        });

  };
}
