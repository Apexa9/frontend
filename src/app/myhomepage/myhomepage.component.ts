import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-myhomepage',
  templateUrl: './myhomepage.component.html',
  styleUrls: ['./myhomepage.component.css']
})
export class MyhomepageComponent implements OnInit {

  constructor(public _authservice:RegisterService) { }

  ngOnInit(): void {
  }

}
