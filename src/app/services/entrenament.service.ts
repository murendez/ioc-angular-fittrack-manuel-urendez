import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Service()
export class EntrenamentService {

  // Client per comunicar-nos amb l'API
  private readonly http = inject(HttpClient);

}