import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/localStorage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userModel: any = {};
  getUser: any;
  invalid: boolean = false;
  errorMsg: any;
  constructor(private _storage: StorageService, private router: Router) { }

  ngOnInit() {
    const ListOfUser = [{
        id: '1',
        name:"Archana Gupta",
        email:"archana@gmail.com",
        password: '12345'
      },
      {
        id: '2',
        name:"Rahul Kumar",
        email:"rahul@gmail.com",
        password: '12345'
      }
    ]
    this._storage.setItem('current_users', JSON.stringify(ListOfUser));
  }

  checkLoginUser(userData) {
    this.getUser = JSON.parse(localStorage.getItem('current_users'));
    this.getUser.map(obj => {
      if(obj.email == userData.email && obj.password == userData.password) {
        this._storage.setItem('loginUser', JSON.stringify(obj));
        location.reload();
        this.router.navigate(['/home']);
        return;
      } else {
        this.invalid = true;
        this.errorMsg = 'Unauthorized User'
        return;
      }
   });
}

}
