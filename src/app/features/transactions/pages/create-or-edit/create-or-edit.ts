import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { NgxMaskDirective } from 'ngx-mask';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';
import { TransactionsService } from '@shared/transaction/services/transactions';
import { TransactionType } from '@shared/transaction/enums/transaction-type';
import { FeedbackService } from '@shared/feedback/services/feedback';
import { Transaction, TransactionPayload } from '@shared/transaction/interfaces/transaction';
import { FullWidth } from '@shared/material/form-field/directives/full-width';
import { MarginBottom } from '@shared/material/form-field/directives/margin-bottom';
import { CustomFormField } from '@shared/material/form-field/directives/custom-form-field';

@Component({
  selector: 'app-create',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatButtonToggleModule,
    NgxMaskDirective,
   CustomFormField
  ],
  templateUrl: './create-or-edit.html',
  styleUrl: './create-or-edit.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateOrEdit {
  private transactionsService = inject(TransactionsService);
  private router = inject(Router);
  private feedbackService = inject(FeedbackService);
  private activatedRoute = inject(ActivatedRoute);

  transaction = input<Transaction>();

  readonly transactionType = TransactionType;

  isEdit = computed(() => Boolean(this.transaction()));

  form = computed(
    () =>
      new FormGroup({
        type: new FormControl(this.transaction()?.type ?? '', {
          validators: [Validators.required],
        }),
        title: new FormControl(this.transaction()?.title ?? '', {
          validators: [Validators.required],
        }),
        value: new FormControl(this.transaction()?.value ?? 0, {
          validators: [Validators.required],
        }),
      })
  );

  submit() {
    if (this.form().invalid) {
      return;
    }

    const payload: TransactionPayload = {
      title: this.form().value.title as string,
      type: this.form().value.type as TransactionType,
      value: this.form().value.value as number,
    };

    this.createOrEdit(payload).subscribe({
      next: () => {
        this.router.navigate(['../../'], { relativeTo: this.activatedRoute });
      },
    });
  }

  private createOrEdit(payload: TransactionPayload) {
    if (this.isEdit()) {
      return this.transactionsService
        .put(this.transaction()!.id, payload)
        .pipe(
          tap(() =>
            this.feedbackService.sucess('Transação alterada com sucesso!')
          )
        );
    } else {
      return this.transactionsService
        .post(payload)
        .pipe(
          tap(() =>
            this.feedbackService.sucess('Transação criada com sucesso!')
          )
        );
    }
  }
}
