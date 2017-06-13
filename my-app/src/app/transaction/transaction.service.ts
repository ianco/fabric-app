import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Trade } from '../org.example.mynetwork';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class TransactionService {

		private NAMESPACE: string = 'system/transactions';

    constructor(private dataService: DataService<Trade>) {
    };

    public getAll(): Observable<Trade[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<Trade> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }
}
