import { Conseiller } from './../../../models/conseiller.model';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from './../../../services/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-conseiller',
  templateUrl: './update-conseiller.component.html',
  styleUrls: ['./update-conseiller.component.css']
})
export class UpdateConseillerComponent implements OnInit {

  constructor(private adminHttpService: AdminService,private route:ActivatedRoute) { }
  conseiller : Conseiller;
  ngOnInit() {
    this.route.paramMap.subscribe(params =>{ 
      const id = +params.get('id');
      this.getConseillier(id);
     }
     )
    }
    private getConseillier(id : number){
      this.adminHttpService.findConseillerById(id).subscribe(
       response =>this.handleSuccessfulResponse(response),
      );
    }
    handleSuccessfulResponse(response)
    {
      this.conseiller=response;
    }
    updateConseiller(): void {
      this.adminHttpService.updateConseiller(this.conseiller)
          .subscribe( data => {
            alert("Employee updated successfully.");
          });
  
    };
  }
  