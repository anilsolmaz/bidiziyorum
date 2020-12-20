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
  constructor(private navCtrl: NavController, private getService: GetService) { }

  ngOnInit() {
  }

  doLogin(){
    console.log(this.username);
    console.log(this.password);
    this.getService.getData().subscribe(data => {
      console.log(data);
    });


  }

}
