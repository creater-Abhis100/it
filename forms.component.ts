import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  supportOrg: string = ''
  supportGrp: string = ''
  launchInfo: string = ''

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(value: any) {
    let { supportorg,supportgrp,launchinfo} = value;
    console.log(value)
    }

}
