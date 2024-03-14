import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  Data: any;
  nameList: any[] | undefined;
  userData: FormGroup;

  constructor(
    private _userDataService: UserDataService,
    private _fb: FormBuilder
  ) {
    this.userData = this._fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // this.getLoginData();
  }

  userAuth() {
    if (this.userData.valid) {
      this._userDataService
        .getUserByUsername(this.userData.value.username)
        .subscribe({
          next: (response) => {
            this.Data = response;
            console.log(this.Data);
            console.log(this.userData.value);
            if (this.Data[0].password === this.userData.value.password) {
              console.log(
                `you are successfully loggedin as ${this.Data[0].role}`
              );
            } else {
              console.log('error logging in');
            }
          },
          error: (err) => {
            console.log('error found while logging', err);
          },
        });
    }
  }
}
