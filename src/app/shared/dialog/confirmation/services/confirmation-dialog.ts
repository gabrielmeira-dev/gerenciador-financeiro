import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter } from 'rxjs';
import { ConfirmationDialog } from '../components/confirmation-dialog';
import { DialogData } from '../interfaces/dialog-data';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationDialogService {

  private dialog = inject(MatDialog);

  open(data: DialogData){
   return this.dialog.open(ConfirmationDialog, {
      data,
   }).afterClosed().pipe(
            filter((res: boolean) => res === true )
          )
  }
  
}
