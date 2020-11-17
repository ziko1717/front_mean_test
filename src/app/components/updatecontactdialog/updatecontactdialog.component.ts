import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar, MatTableDataSource, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from 'src/app/dialog/dialogcreate';
import { Contact } from 'src/app/models/contact';
import { AppService } from 'src/app/services/app.service';
import { DatasourceService } from 'src/app/services/datasource.service';

@Component({
  selector: 'app-updatecontactdialog',
  templateUrl: './updatecontactdialog.component.html',
  styleUrls: ['./updatecontactdialog.component.scss']
})
export class UpdatecontactdialogComponent {

  constructor(
    public dialogRef: MatDialogRef<UpdatecontactdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private appService: AppService,private _snackBar: MatSnackBar, private dataSourceService: DatasourceService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  updateContactRow() {
    const body = { num_tel : this.data.num_tel, prenom: this.data.prenom, nom: this.data.nom};
    console.log('le body est'+body)
    this.appService.updateContact(this.data.element.num_tel, body).subscribe(res => {
        if(res == 'Contact udpated.') {
          this._snackBar.open('Contact successfully updated','', {
            duration: 2000,
        }
    );
    this.appService.getAllContact().subscribe(res => {
      this.dataSourceService.dataSource = new MatTableDataSource<Contact>(res);
      this.dataSourceService.dataSource._updateChangeSubscription();
    })
  } else {
    this._snackBar.open('Contact update failed','', {
      duration: 2000,
  }
);
  }
 })
 this.dialogRef.close();
}

}
