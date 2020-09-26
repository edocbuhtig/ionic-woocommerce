import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  product: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.subscribe(routeData => {

      console.log("routeData>>>" + JSON.stringify(routeData))
     let data = routeData['body'];
     if (data) {
       this.product = data;
       console.log(data)
     }
   })
  }

}
