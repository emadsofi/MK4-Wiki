import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.css']
})

export class MainTableComponent implements OnInit, AfterViewInit {

  @ViewChild('dTable', {static: false}) dataTable: any;

  ngAfterViewInit(): void {
    $(this.dataTable.nativeElement).DataTable();
  }

  ngOnInit(): void {
  }

}
