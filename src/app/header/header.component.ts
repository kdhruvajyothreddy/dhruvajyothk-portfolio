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
        itemOnClickPage: '',
      },
      {
        itemIcon: 'work',
        itemLabelText: 'Skills',
        itemOnClickPage: '',
      },
      {
        itemIcon: 'insert_drive_file',
        itemLabelText: 'CV',
        itemOnClickPage: '',
      },
      {
        itemIcon: 'wallet_travel',
        itemLabelText: 'Portfolio',
        itemOnClickPage: '',
      },
      {
        itemIcon: 'mail',
        itemLabelText: 'Contact Me',
        itemOnClickPage: 'contact',
      },
    ];
  }

  menuButtonClick(event: any, onClickComponent: string) {
    window.location.href = `#${onClickComponent}`;
  }
}
