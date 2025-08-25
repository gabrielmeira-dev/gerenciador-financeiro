import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  
  private snackBar = inject(MatSnackBar);

  sucess(message: string){
    this.snackBar.open(message, 'OK', {
      panelClass: 'snack-bar-sucess-feedback'
    })
  }
 
}
