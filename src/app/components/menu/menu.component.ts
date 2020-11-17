import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Contact } from 'src/app/models/contact';
import { MatDialog } from '@angular/material/dialog';
import { CreatecontactdialogComponent } from '../createcontactdialog/createcontactdialog.component';
import { MatTableDataSource } from '@angular/material';
import { DatasourceService } from 'src/app/services/datasource.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  isListContactsClicked = false;
  num_tel: string;
  nom: string;
  prenom: string;
  constructor(private appService: AppService, public dialog: MatDialog, private dataSourceService: DatasourceService) { 
    //this.source = [{"num_tel": "50012132", "nom": "amine", "prenom": "zk"}];
     
  }

  ngOnInit() {
  }

  //source;
  displayAllContacts() {
    if(this.isListContactsClicked) {
    this.isListContactsClicked = false;
  }
    else {
    this.appService.getAllContact().subscribe(response => {
      //this.source = new MatTableDataSource<Contact>(response);
      this.dataSourceService.dataSource = new MatTableDataSource<Contact>(response);
    })
    this.isListContactsClicked = true;
  }
    
  }

  openDialogCreateContact(): void {
    const dialogRef = this.dialog.open(CreatecontactdialogComponent, {
      width: '250px',
      data: {num_tel: this.num_tel, nom: this.nom, prenom: this.prenom}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

}


