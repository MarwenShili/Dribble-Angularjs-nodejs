import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {}

  Key = 'CKNfNyHWncQMxlilt0R0xvNNwgmQ5js3mVdBzHgNdrM';
  page = 1;
  per_page = 30;
  getImage() {
    return this.httpClient.get(
      `https://api.unsplash.com/photos/?page=${this.page}&per_page=${this.per_page}&client_id=${this.Key}`
    );
  }
}
