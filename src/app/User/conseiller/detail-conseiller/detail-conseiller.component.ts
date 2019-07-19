import { AdminService } from './../../../services/admin.service';
import { Conseiller } from './../../../models/conseiller.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouteConfigLoadEnd } from '@angular/router';

@Component({
  selector: 'app-detail-conseiller',
  templateUrl: './detail-conseiller.component.html',
  styleUrls: ['./detail-conseiller.component.css']
})
export class DetailConseillerComponent implements OnInit {

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
}
