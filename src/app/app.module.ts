import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdminComponent } from './User/admin/admin.component';
import { ConseillerComponent } from './User/conseiller/conseiller.component';
import { ClientComponent } from './User/client/client.component';
import { AddAdminComponent } from './User/admin/add-admin/add-admin.component';
import { UpdateAdminComponent } from './User/admin/update-admin/update-admin.component';
import { DetailAdminComponent } from './User/admin/detail-admin/detail-admin.component';
import { DeleteAdminComponent } from './User/admin/delete-admin/delete-admin.component';
import { AddConseillerComponent } from './User/conseiller/add-conseiller/add-conseiller.component';
import { UpdateConseillerComponent } from './User/conseiller/update-conseiller/update-conseiller.component';
import { DetailConseillerComponent } from './User/conseiller/detail-conseiller/detail-conseiller.component';
import { DeleteConseillerComponent } from './User/conseiller/delete-conseiller/delete-conseiller.component';
import { UpdateClientComponent } from './User/client/update-client/update-client.component';
import { DetailClientComponent } from './User/client/detail-client/detail-client.component';
import { DeleteClientComponent } from './User/client/delete-client/delete-client.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { ComptesComponent } from './comptes/comptes.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { RequetesComponent } from './requetes/requetes.component';
import { DemandeOuvertureComponent } from './demande-ouverture/demande-ouverture.component';
import { ClientPotentielComponent } from './client-potentiel/client-potentiel.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ConseillerComponent,
    ClientComponent,
    AddAdminComponent,
    UpdateAdminComponent,
    DetailAdminComponent,
    DeleteAdminComponent,
    AddConseillerComponent,
    UpdateConseillerComponent,
    DetailConseillerComponent,
    DeleteConseillerComponent,
    UpdateClientComponent,
    DetailClientComponent,
    DeleteClientComponent,
    TransactionsComponent,
    ComptesComponent,
    NotificationsComponent,
    RequetesComponent,
    DemandeOuvertureComponent,
    ClientPotentielComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
