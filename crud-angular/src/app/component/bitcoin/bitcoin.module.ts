// bitcoin.module.ts
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BitcoinComponent } from './bitcoin.component';
import { BitcoinService } from './bitcoin.service';

@NgModule({
  declarations: [BitcoinComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule // Importe quaisquer módulos do Angular Material necessários
  ],
  exports: [BitcoinComponent],
  providers: [BitcoinService] // Se o serviço for fornecido no nível do módulo
})
export class BitcoinModule {}
