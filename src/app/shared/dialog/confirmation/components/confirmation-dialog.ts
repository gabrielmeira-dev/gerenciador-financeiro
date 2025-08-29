import { Component, ChangeDetectionStrategy, inject } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DialogData } from "../interfaces/dialog-data";

@Component({
    selector: 'app-confirmation-dialog',
    template: `<h2 mat-dialog-title>{{dialogData.title}}</h2>
    <mat-dialog-content>
    {{dialogData.message}}
    </mat-dialog-content>
    <mat-dialog-actions>
      <button matButton [mat-dialog-close]="false">{{dialogData.noBtnText || 'Não'}}</button>
      <button matButton [mat-dialog-close]="true" cdkFocusInitial>{{dialogData.yesBtnText || 'Sim'}}</button>
    </mat-dialog-actions> `,
    imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  export class ConfirmationDialog {
    readonly dialogRef = inject(MatDialogRef<ConfirmationDialog>);
    readonly dialogData = inject<DialogData>(MAT_DIALOG_DATA);
  }