import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {
  private readonly API_URL = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd';

  constructor(private http: HttpClient) {}

  getBitcoinPrice(): Observable<{ bitcoin: { usd: number } }> { // Tipagem do retorno da função
    return this.http.get<{ bitcoin: { usd: number } }>(this.API_URL);
  }
}
