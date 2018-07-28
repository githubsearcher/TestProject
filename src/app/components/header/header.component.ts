import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/localStorage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _storage: StorageService, private router: Router) { }
  currentUser: any;
  ngOnInit() {
      this.currentUser =  JSON.parse(localStorage.getItem('current_users'));
  }

  logout() {
      this._storage.removeItem('current_users');
      location.reload();
      this.router.navigate(['/']);
  }

}
