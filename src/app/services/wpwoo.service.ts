import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WpwooService {

  url: string = "<YOUR-DOMAIN-WOOCOMMERCE-STORE>";
  key: string = "<WOO-CLIENT-KEY>";
  secret_key: string = "<WOO-CLIENT-SECRET-KEY>";

  constructor(
    private http: HttpClient
  ) { }

  getProducts(page: number){
    const params = new HttpParams().set('consumer_key', this.key)
                                   .set('consumer_secret', this.secret_key)
                                   .set('per_page', '6')
                                   .set('page', page.toString())
    return new Promise((resolve, reject) => {
      this.http.get(this.url + 'wp-json/wc/v2/products',{params, observe: 'response' }).subscribe(data => {
        // Read the result field from the JSON response.
        resolve(data);
      });
    });
  }

  getProduct(id){
    const params = new HttpParams().set('consumer_key', this.key)
                                   .set('consumer_secret', this.secret_key)
    return new Promise((resolve, reject) => {
      this.http.get(this.url + 'wp-json/wc/v2/products/' + id, {params}).subscribe(data => {
        // Read the result field from the JSON response.
        resolve(data);
      });
    });
  }

}
