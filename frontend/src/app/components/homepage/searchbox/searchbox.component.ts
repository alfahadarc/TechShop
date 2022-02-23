import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Subject, switchMap } from 'rxjs';
import { ClientPublicService } from 'src/app/services/client/client-public.service';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css'],
})
export class SearchboxComponent implements OnInit {
  searchKey: any = '';
  constructor(
    private router: Router,
    private clientpublicservice: ClientPublicService
  ) {}

  ngOnInit(): void {}
  private searchKeySubject = new Subject<string>();

  readonly results$ = this.searchKeySubject.pipe(
    debounceTime(250),
    distinctUntilChanged(),
    switchMap((key) => this.clientpublicservice.serch(key))
  );

  search() {
    this.router.navigate(['search/' + this.searchKey]);
  }
  searchPosts(event: any) {
    this.searchKeySubject.next((event.target as HTMLInputElement).value);
  }
  goProduct(i: any) {
    if (i.TYPE == 'PRODUCT') {
      this.router.navigate(['product/' + i.ITEM_ID]);
    } else if (i.TYPE == 'OFFER') {
      this.router.navigate(['offer/' + i.ITEM_ID]);
    }
  }
}
