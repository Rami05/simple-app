import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'rbs-header',
  templateUrl: './rbs-header.component.html',
  styleUrls: ['./rbs-header.component.scss']
})
export class RbsHeaderComponent implements OnInit {
  user: any
  userMenu = [{ title: 'Some action' }, { title: '...' }, { title: 'Log out', link: '/pages/login' }];
  u = localStorage.getItem('user')
  e = localStorage.getItem('email')
  constructor(private readonly router: Router) {
  }

  ngOnInit() {

    this.user = { name: 'User', picture: 'assets/images/user.png' }

  }
  logout() {
    localStorage.removeItem('user')
    localStorage.removeItem('email')
    this.router.navigate(["/pages/login"])
  }
}
