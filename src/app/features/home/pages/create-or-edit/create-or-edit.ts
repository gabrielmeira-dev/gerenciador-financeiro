import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { TransactionType } from '../../../../shared/transaction/enums/transaction-type';
import { NgxMaskDirective } from 'ngx-mask';
import { TransactionsService } from '../../../../shared/transaction/services/transactions';
import { TransactionPayload } from '../../../../shared/transaction/interfaces/transaction';
import { ActivatedRoute, Router } from '@angular/router';
import { FeedbackService } from '../../../../shared/feedback/services/feedback';



@Component({
  selector: 'app-create',
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatButtonModule, MatButtonToggleModule, NgxMaskDirective],
  templateUrl: './create-or-edit.html',
  styleUrl: './create-or-edit.scss'
})
export class CreateOrEdit {
  private activatedRoute = inject(ActivatedRoute);
  private transactionsService = inject(TransactionsService);
  private router = inject(Router);
  private feedbackService = inject(FeedbackService)
 

  readonly transactionType = TransactionType;

  ngOnInit(): void{
    console.log(this.activatedRoute.snapshot.data)
  }

    form = new FormGroup({
      type: new FormControl('', {
        validators: [Validators.required]
      }),
      title: new FormControl('', {
        validators: [Validators.required]
      }),
      value: new FormControl(0, {
        validators: [Validators.required]
      }),
    });

    submit(){
      if(this.form.invalid){
        return;
      }
  
      const payload: TransactionPayload = {
        title: this.form.value.title as string,
        type: this.form.value.type as TransactionType,
        value: this.form.value.value as number
      }

      this.transactionsService.post(payload).subscribe({
        next: () => {
        this.feedbackService.sucess('Transação criada com sucesso!')
          this.router.navigate(['/'])
        }
      })
    }
}
