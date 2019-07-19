import { Conseiller } from './../../../models/conseiller.model';
import { AdminService } from './../../../services/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-conseiller',
  templateUrl: './list-conseiller.component.html',
  styleUrls: ['./list-conseiller.component.css']
})
export class ListConseillerComponent implements OnInit {

  constructor(private adminHttpService: AdminService) { }
 
  listeconseillier : Conseiller[]
  ngOnInit() {
    this.adminHttpService.getConseiller().subscribe(
      response =>this.handleSuccessfulResponse(response),
      );
    }
  
    handleSuccessfulResponse(response)
  {
      this.listeconseillier=response;
  }
  
  }