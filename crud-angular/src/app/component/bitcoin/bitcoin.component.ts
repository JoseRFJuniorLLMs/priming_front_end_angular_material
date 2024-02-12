import { Component, OnInit } from '@angular/core';
import { BitcoinService } from './bitcoin.service';

@Component({
  selector: 'app-bitcoin',
  templateUrl: 'bitcoin.component.html',
  styleUrls: ['bitcoin.component.scss']
})
export class BitcoinComponent implements OnInit {
  bitcoinPrice: string = '0.00'; // Agora estamos tratando o preço como uma string

  constructor(private bitcoinService: BitcoinService) {}

  ngOnInit(): void {
    this.getBitcoinPrice();
  }

  getBitcoinPrice(): void {
    this.bitcoinService.getBitcoinPrice().subscribe(data => {
      if (this.isBitcoinData(data)) {
        this.bitcoinPrice = data.bitcoin.usd.toFixed(2); // Fixamos o preço com duas casas decimais
      } else {
        console.error('Erro ao obter o preço do Bitcoin:', data);
        // Trate o erro aqui, como atribuir um valor padrão ou exibir uma mensagem de erro para o usuário
      }
    }, error => {
      console.error('Erro ao obter o preço do Bitcoin:', error);
      // Trate o erro aqui, como atribuir um valor padrão ou exibir uma mensagem de erro para o usuário
    });
  }

  isBitcoinData(data: any): data is { bitcoin: { usd: number } } {
    return typeof data === 'object' && 'bitcoin' in data && 'usd' in data.bitcoin;
  }
}
