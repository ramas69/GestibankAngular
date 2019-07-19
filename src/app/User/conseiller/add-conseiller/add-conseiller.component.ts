import { Conseiller } from './../../../models/conseiller.model';
import { AdminService } from './../../../services/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-conseiller',
  templateUrl: './add-conseiller.component.html',
  styleUrls: ['./add-conseiller.component.css']
})
export class AddConseillerComponent implements OnInit {
  conseillier: Conseiller = new Conseiller(0,"","","","","","","");

  constructor(private adminHttpService: AdminService) { }

  ngOnInit() {
  }

  addConseiller(): void {
    this.adminHttpService.addConseiller(this.conseillier)
        .subscribe( data => {
          alert("Employee created successfully.");
        });

  };
  
}
