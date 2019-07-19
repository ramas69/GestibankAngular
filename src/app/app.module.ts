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
import { AddCompteComponent } from './comptes/add-compte/add-compte.component';
import { UpdateCompteComponent } from './comptes/update-compte/update-compte.component';
import { DetailCompteComponent } from './comptes/detail-compte/detail-compte.component';
import { DeleteCompteComponent } from './comptes/delete-compte/delete-compte.component';
import { AddTransactionComponent } from './transactions/add-transaction/add-transaction.component';
import { UpdateTransactionComponent } from './transactions/update-transaction/update-transaction.component';
import { DetailTransactionComponent } from './transactions/detail-transaction/detail-transaction.component';
import { DeleteTransactionComponent } from './transactions/delete-transaction/delete-transaction.component';
import { AddNotificationComponent } from './notifications/add-notification/add-notification.component';
import { UpdateNotificationComponent } from './notifications/update-notification/update-notification.component';
import { AddClientPotentielComponent } from './client-potentiel/add-client-potentiel/add-client-potentiel.component';
import { UpdateClientPotentielComponent } from './client-potentiel/update-client-potentiel/update-client-potentiel.component';
import { DetailClientPotentielComponent } from './client-potentiel/detail-client-potentiel/detail-client-potentiel.component';
import { DeleteClientPotentielComponent } from './client-potentiel/delete-client-potentiel/delete-client-potentiel.component';
import { DetailNotificationComponent } from './notifications/detail-notification/detail-notification.component';
import { DeleteNotificationComponent } from './notifications/delete-notification/delete-notification.component';
import { AddRequeteComponent } from './requetes/add-requete/add-requete.component';
import { UpdateRequeteComponent } from './requetes/update-requete/update-requete.component';
import { DetailRequeteComponent } from './requetes/detail-requete/detail-requete.component';
import { DeleteRequeteComponent } from './requetes/delete-requete/delete-requete.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListClientsComponent } from './User/client/list-clients/list-clients.component';
import { ListClientspotentielsComponent } from './client-potentiel/list-clientspotentiels/list-clientspotentiels.component';
import { NotificationsListComponent } from './notifications/notifications-list/notifications-list.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  { path:'', component: HomeComponent},
  { path:'home', component: HomeComponent},
  { path:'comptes', component: ComptesComponent},
  { path:'comptes/:id', component: DetailCompteComponent},
  { path:'admin', component: AdminComponent},
  { path:'clients', component: AdminComponent},
  { path:'clients/:id', component: DetailClientComponent},
  { path:'conseillers', component: ConseillerComponent},
  { path:'conseillers/:id', component: DetailConseillerComponent},
  { path:'login', component: LoginComponent
},
];
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
    HeaderComponent,
    AddCompteComponent,
    UpdateCompteComponent,
    DetailCompteComponent,
    DeleteCompteComponent,
    AddTransactionComponent,
    UpdateTransactionComponent,
    DetailTransactionComponent,
    DeleteTransactionComponent,
    AddNotificationComponent,
    UpdateNotificationComponent,
    AddClientPotentielComponent,
    UpdateClientPotentielComponent,
    DetailClientPotentielComponent,
    DeleteClientPotentielComponent,
    DetailNotificationComponent,
    DeleteNotificationComponent,
    AddRequeteComponent,
    UpdateRequeteComponent,
    DetailRequeteComponent,
    DeleteRequeteComponent,
    HomeComponent,
    ListClientsComponent,
    ListClientspotentielsComponent,
    NotificationsListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
