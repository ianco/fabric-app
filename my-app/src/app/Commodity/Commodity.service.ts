import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Commodity } from '../org.example.mynetwork';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class CommodityService {

	
		private NAMESPACE: string = 'Commodity';
		private TRADE_NAMESPACE: string = 'Trade';


    constructor(private dataService: DataService<Commodity>) {
    };

    public getAll(): Observable<Commodity[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<Commodity> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<Commodity> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<Commodity> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public tradeAsset(id: any, itemToUpdate: any): Observable<Commodity> {
      return this.dataService.trade(this.TRADE_NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<Commodity> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
