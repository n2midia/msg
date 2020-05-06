import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { MenuController } from '@ionic/angular';
import { UsersListPage } from '../users-list/users-list.page';
import { ModalService } from '../services/modal.service';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  user: any;

  constructor(
    private menuCtrl: MenuController,
    private auth: AuthService,
    private modalSrv: ModalService,
    private app: AppComponent
  ) {

  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  ngOnInit() {
    this.app.loadAll();
    this.auth.getUser().then(user => {
      this.user = user;
    });
  }

  openUsersList() {
    this.modalSrv.presentModal(UsersListPage, {user: this.user});
  }

}
