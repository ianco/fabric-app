import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { TraderService } from './trader.service';
import 'rxjs/add/operator/toPromise';
@Component({
  selector: 'app-trader',
  templateUrl: './trader.component.html',
  styleUrls: ['./trader.component.css'],
  providers: [TraderService]
})
export class TraderComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

      tradeId = new FormControl("", Validators.required);
      firstName = new FormControl("", Validators.required);
      lastName = new FormControl("", Validators.required);

  constructor(private serviceTrader:TraderService, fb: FormBuilder) {
    this.myForm = fb.group({
          tradeId:this.tradeId,
          firstName:this.firstName,
          lastName:this.lastName
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceTrader.getAll()
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      result.forEach(asset => {
        tempList.push(asset);
      });
      this.allAssets = tempList;
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });
  }

  addAsset(form: any): Promise<any> {

    this.asset = {
      $class: "org.example.mynetwork.Trader",
          "tradeId":this.tradeId.value,
          "firstName":this.firstName.value,
          "lastName":this.lastName.value
    };

    this.myForm.setValue({
          "tradeId":null,
          "firstName":null,
          "lastName":null
    });

    return this.serviceTrader.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
          "tradeId":null,
          "firstName":null,
          "lastName":null
      });
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else{
            this.errorMessage = error;
        }
    });
  }


   updateAsset(form: any): Promise<any> {
    this.asset = {
      $class: "org.example.mynetwork.Trader",
            "firstName":this.firstName.value,
            "lastName":this.lastName.value
    };

    return this.serviceTrader.updateAsset(form.get("tradingSymbol").value,this.asset)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
            else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }


  deleteAsset(): Promise<any> {

    return this.serviceTrader.deleteAsset(this.currentId)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
			else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }

  setId(id: any): void{
    this.currentId = id;
  }

  getForm(id: any): Promise<any>{

    return this.serviceTrader.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
            "tradeId":null,
            "firstName":null,
            "lastName":null
      };
      
        if(result.tradeId){
          formObject.tradeId = result.tradeId;
        }else{
          formObject.tradeId = null;
        }
      
        if(result.firstName){
          formObject.firstName = result.firstName;
        }else{
          formObject.firstName = null;
        }
      
        if(result.lastName){
          formObject.lastName = result.lastName;
        }else{
          formObject.lastName = null;
        }

      this.myForm.setValue(formObject);

    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });

  }

  resetForm(): void{
    this.myForm.setValue({
          "tradeId":null,
          "firstName":null,
          "lastName":null
      });
  }
}
