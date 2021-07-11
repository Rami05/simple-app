import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/pages/rbs-service/api.service';

@Component({
  selector: 'table-user',
  templateUrl: './table-user.component.html',
  styleUrls: ['./table-user.component.scss']
})
export class TableUserComponent implements OnInit {

  source: any = []
  numberOfUsers: number = 0
  constructor(private service: ApiService) {
  }

  ngOnInit(): void {
    let nbrMale : number = 0
    let nbrFemale: number = 0
    let nbrActive : number = 0
    let nbrInactive : number = 0
    this.service.getAllUsers().subscribe(
      result => {
        this.source = result.data
        this.numberOfUsers = this.source.length
        this.source.forEach(user => {
          user.gender === "male" ? nbrMale++ : nbrFemale++
          user.status === "active" ? nbrActive++ : nbrInactive++
        });
        localStorage.setItem('nbrMale',nbrMale.toString())
        localStorage.setItem('nbrFemale',nbrFemale.toString())
        localStorage.setItem('nbrActive',nbrActive.toString())
        localStorage.setItem('nbrInactive',nbrInactive.toString())

      }
    )
  }

  settings = {
    actions: {
      delete: false,
      add: false,
      edit: false
    },
    pager: {
      display: true,
      perPage: 5
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
        width: '5vw'
      },
      name: {
        title: 'Name',
        type: 'string',
        width: '25vw'
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
      gender: {
        title: 'Gender',
        type: 'string',
        width: '10vw'
      },
      status: {
        title: 'status',
        width: '10vw',
        type: 'html',
        valuePrepareFunction: (data) => {
          if (data == 'active') {
            return '<p class="statut success"> ACTIVE  </p>';

          } else if (data == 'inactive') {
            return '<p class="statut danger"> INACTIVE </p>';

          }
        },
      },
    },
  };


}


