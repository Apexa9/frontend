import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-facilitator',
  templateUrl: './facilitator.component.html',
  styleUrls: ['./facilitator.component.css']
})
export class FacilitatorComponent implements OnInit {

  constructor(public _authservice:RegisterService) { }

  ngOnInit(): void {
  }

}
