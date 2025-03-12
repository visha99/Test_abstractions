import { inject, Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  doc,
  Firestore,
  setDoc
} from '@angular/fire/firestore';
import { RegisterService } from '../domain/services/register.service';

@Injectable({ providedIn: 'root' })
export class RegisterFirebaseService extends RegisterService {
  readonly REGISTER = 'Register';
  readonly #firestore = inject(Firestore);

  async create(id: string, data:any): Promise<void> {
    try {
      const collRef = doc(this.#firestore, this.REGISTER, id);
      await setDoc(collRef, { ...data });
    }
    catch (error) {
      throw error;
    }
  }

}


