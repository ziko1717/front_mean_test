import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatSnackBar, MatTableDataSource } from '@angular/material';
import { Contact } from 'src/app/models/contact';
import { AppService } from 'src/app/services/app.service';
import { DatasourceService } from 'src/app/services/datasource.service';
import { UpdatecontactdialogComponent } from '../updatecontactdialog/updatecontactdialog.component';



@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  //@Input() source=new MatTableDataSource<Contact>();
  
  constructor(private appService: AppService, private _snackBar: MatSnackBar, public dialog: MatDialog, private dataSourceService: DatasourceService) {
  }

  ngOnInit() {
    
  }
  displayedColumns: string[] = ['num_tel', 'prenom', 'nom', 'action']; 
  num_tel: string;
  nom: string;
  prenom: string;
  
 deleteContactRow(item) {
   
const index = this.dataSourceService.dataSource.data.indexOf(item);
this.dataSourceService.dataSource.data.splice(index, 1);
console.log('index is '+index+' source is after splice '+this.dataSourceService.dataSource.data);
this.dataSourceService.dataSource._updateChangeSubscription();
this.appService.deleteContact(item.num_tel).subscribe(res => {
  if(res == 'Deleted successfully!') {
    this._snackBar.open('Contact successfully deleted','', {
      duration: 2000,
  }
);
  } else {
    this._snackBar.open('Error in deleting contact','', {
      duration: 2000,
  }
);
  }
})
 }
  
 openUpdateDialog(elm): void {
  const dialogRef = this.dialog.open(UpdatecontactdialogComponent, {
    width: '250px',
    data: {num_tel: this.num_tel, nom: this.nom, prenom: this.prenom, element: elm}
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    
  });
}
  
}
