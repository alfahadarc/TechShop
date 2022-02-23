import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientPublicService } from 'src/app/services/client/client-public.service';
import { NotificationService } from 'src/app/services/utill/notification.service';

@Component({
  selector: 'app-category-all-products',
  templateUrl: './category-all-products.component.html',
  styleUrls: ['./category-all-products.component.css'],
})
export class CategoryAllProductsComponent implements OnInit {
  public products: any;
  public category: any;
  categoryId: any;
  categoryName: any;
  //sorting
  sortValue: any;
  //filter manu
  manufacturer: any = [];
  filteredProduct: any;
  constructor(
    private clientPublicService: ClientPublicService,
    private router: Router,
    private notify: NotificationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (!window.sessionStorage.getItem('COMPARE')) {
      window.sessionStorage.setItem('COMPARE', '0');
    }
    this.route.params.subscribe((params) => {
      this.categoryId = params['id'];
      this.clientPublicService.getAllCategories().subscribe({
        next: (success) => {
          //console.log(success);
          this.category = success;
          //this.categoryId = this.route.snapshot.paramMap.get('id');
          this.clientPublicService
            .getCategoryProduct(this.categoryId)
            .subscribe({
              next: (data) => {
                this.products = data;
                this.filteredProduct = this.products;
                var category = this.category.find((cat: any) => {
                  if (cat.CATEGORY_ID.toString() === this.categoryId) {
                    return true;
                  }
                  return false;
                });
                this.categoryName = category.CATEGORY_NAME;
                //get all manufacturer of this product
                this.getManufacturer();
              },
              error: (err) => {
                console.log(err);
              },
            });
        },
        error: (err) => {
          this.notify.showError(err.error.message, 'Error');
        },
      });
    });
  }

  getCategory(id: any, name: any) {
    this.router.navigate(['products/' + id]);
    this.categoryName = name;
    window.location.reload();
    // this.clientPublicService.getCategoryProduct(id).subscribe({
    //   next: (data) => {
    //     this.products = data;
    //     this.filteredProduct = this.products;
    //     this.getManufacturer();
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   },
    // });
  }

  getManufacturer() {
    this.manufacturer = [];
    for (var i = 0; i < this.products.length; i++) {
      if (!this.manufacturer.includes(this.products[i].MANUFACTURER_NAME)) {
        this.manufacturer.push(this.products[i].MANUFACTURER_NAME);
      }
    }
  }
  filterManufacturer(i: any) {
    this.filteredProduct = this.products.filter((element: any) => {
      if (element.MANUFACTURER_NAME === i) return true;
      else return false;
    });
  }
  showAll() {
    this.filteredProduct = this.products;
  }

  sort(event: any) {
    if (event.value === 'low') {
      this.filteredProduct = this.filteredProduct.sort(
        (low: any, high: any) => low.PRICE - high.PRICE
      );
    }
    if (event.value === 'high') {
      this.filteredProduct = this.filteredProduct.sort(
        (low: any, high: any) => high.PRICE - low.PRICE
      );
    }
  }
}
