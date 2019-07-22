import { RequeteService } from './../../services/requete.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Requete } from 'src/app/models/requete.modele';

@Component({
  selector: 'app-add-requete',
  templateUrl: './add-requete.component.html',
  styleUrls: ['./add-requete.component.css']
})
export class AddRequeteComponent implements OnInit {
requete: Requete;
  constructor(private requeteservice: RequeteService, private _route : ActivatedRoute ) {
    this.requete = new Requete(0, null, null, "", );
   }

  ngOnInit() {}
addrequeteForm(){
  this.requeteservice.createRequete(this.requete).subscribe
    ( data => {
      alert("Requete created successfully.");
    });
}
}
