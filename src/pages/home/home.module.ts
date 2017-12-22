import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireDatabaseProvider } from 'angularfire2/database-deprecated';
import { HomePage } from './home';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabaseProvider,
    AngularFireDatabase
  ]
})
export class HomePageModule {}
