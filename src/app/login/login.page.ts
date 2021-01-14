import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GetService } from '../Service/get.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {

   username: string;
   password: any;
   gelenData: any[];
   loginObject: any[];
  constructor(private getService: GetService, private navCtrl: NavController) { }


  ngOnInit() {
  }

  doLogin(){

    console.log(this.username);
    console.log(this.password);
    this.getService.postData(this.username, this.password).subscribe(data => {
    if(data.login_status === true){
      this.navCtrl.navigateForward('/tabs/tab1');
    }
    });

  }

}
