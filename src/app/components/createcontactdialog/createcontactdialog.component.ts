import { Component, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogData } from 'src/app/dialog/dialogcreate';
import { Contact } from 'src/app/models/contact';
import { AppService } from 'src/app/services/app.service';
import { DatasourceService } from 'src/app/services/datasource.service';

@Component({
  selector: 'app-createcontactdialog',
  templateUrl: './createcontactdialog.component.html',
  styleUrls: ['./createcontactdialog.component.scss']
})
export class CreatecontactdialogComponent {

  constructor(
    public dialogRef: MatDialogRef<CreatecontactdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private appService: AppService,private _snackBar: MatSnackBar, private dataSourceService: DatasourceService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  createContact() {
    const body = { num_tel : this.data.num_tel, prenom: this.data.prenom, nom: this.data.nom};
    console.log('le body est'+body)
    this.appService.createContact(body).subscribe(res => {
        if(res == 'Contact Created successfully') {
          this._snackBar.open('Contact successfully added','', {
            duration: 2000,
        }
    );
    this.dataSourceService.dataSource.data.splice(this.dataSourceService.dataSource.data.length,0,body);
    this.dataSourceService.dataSource._updateChangeSubscription();
  } else {
    this._snackBar.open('Contact failed addition','', {
      duration: 2000,
  }
);
  }
 })
 this.dialogRef.close();
}
}
