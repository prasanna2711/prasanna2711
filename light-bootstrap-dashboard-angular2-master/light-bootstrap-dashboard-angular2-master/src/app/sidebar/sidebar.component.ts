import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboardCards', title: 'Current_Excecution',  icon: 'pe-7s-graph', class: '' },
    { path: '/baseLineTestServer', title: 'Baseline',  icon:'pe-7s-user', class: '' },
    { path: '/testServer', title: 'TestServer_Full_Details',  icon:'pe-7s-news-paper', class: '' },
    { path: '/liveServer', title: 'LiveServer_Full_Details',  icon:'pe-7s-science', class: '' },
    { path: '/dailyData', title: 'Daily Data',  icon:'pe-7s-map-marker', class: '' },
    { path: '/dashboard', title: 'Daily_Data Statistics',  icon:'pe-7s-note2', class: '' },
    { path: '/serverStatus', title: 'Server Status',  icon:'pe-7s-bell', class: '' },

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
