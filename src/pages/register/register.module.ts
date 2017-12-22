import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPage } from './register';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireDatabaseProvider } from 'angularfire2/database-deprecated';

@NgModule({
  declarations: [
    RegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterPage),
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    AngularFireDatabaseProvider
  ]
})
export class RegisterPageModule {}
