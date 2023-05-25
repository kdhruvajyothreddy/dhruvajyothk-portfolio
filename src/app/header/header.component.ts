import { Component, OnInit } from '@angular/core';
import { HeaderItem } from './model/header.model';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  headerItems: HeaderItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.headerItems = [
      {
        itemIcon: 'person',
        itemLabelText: 'About',
      },
      {
        itemIcon: 'work',
        itemLabelText: 'Skills',
      },
      {
        itemIcon: 'insert_drive_file',
        itemLabelText: 'CV',
      },
      {
        itemIcon: 'wallet_travel',
        itemLabelText: 'Portfolio',
      },
      {
        itemIcon: 'mail',
        itemLabelText: 'Contact Me',
      },
    ];
  }
}
