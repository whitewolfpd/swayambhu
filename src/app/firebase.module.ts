import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { DatabaseService } from './contact-us/database.service';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
  ],
  exports: [AngularFireModule, AngularFireDatabaseModule],
  providers: [DatabaseService],
})
export class FirebaseModule {}
