import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'app/pages/rbs-service/api.service';

@Component({
  selector: 'rbs-form',
  templateUrl: './rbs-form.component.html',
  styleUrls: ['./rbs-form.component.scss']
})
export class RbsFormComponent {
  users: any = [];
  email: string = ""
  error: string
  constructor(private readonly service: ApiService,
    private router: Router) { }

  login() {
    this.service.getAllUsers().subscribe(
      value => {
        this.users = value.data
        let user = this.users.find(user => user.email === this.email)
        if (user == null) {
          this.error = "Please enter a valid email address"
        } else {
          localStorage.setItem("user", user.name)
          localStorage.setItem("email", user.email)
          this.router.navigate(["/pages/dashboard"])
        }
      },
      err => {
        console.log(err)
      }
    )
  }
}
