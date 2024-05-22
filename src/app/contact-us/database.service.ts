import { Injectable, inject } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { Enquiry } from '../interface_collection';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  constructor(private db: AngularFireDatabase) {}

  // Method to read data from Firebase Realtime Database.
  getData(path: string): Observable<Enquiry | any> {
    return this.db.object<Enquiry>(path).valueChanges();
  }

  // Method to write data to enquiry in the Firebase Realtime Database.
  writeData(
    path: string,
    data: Enquiry,
  ): Promise<any> {
    return this.db
      .object<Enquiry>(path)
      .set(data);
  }
}
