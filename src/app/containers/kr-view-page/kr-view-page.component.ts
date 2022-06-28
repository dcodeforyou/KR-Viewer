import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { delay, Observable } from 'rxjs';
import { KRCardDetail } from 'src/app/models/card-detail.model';
import { KRCard } from 'src/app/models/card.model';
import { selectedKR, selectFilteredKRList, selectKRList, selectSortedKRList, isKRSelected, selectContentLoading } from 'src/app/state/kr.selectors';
import { ThemeService } from 'src/app/styles/service/theme.service';
import * as KRPageActions from '../../state/kr-page.action';

@Component({
  selector: 'app-kr-view-page',
  templateUrl: './kr-view-page.component.html',
  styleUrls: ['./kr-view-page.component.scss']
})
export class KrViewPageComponent implements OnInit, AfterViewInit {

  krList$: Observable<KRCard[]>;
  selectedKR$: Observable<KRCardDetail | null | undefined>;
  isKRSelected$: Observable<boolean>;
  appName: string = 'KR-Viewer';
  loadingContent$: Observable<boolean>;
  repoValue: number = 1;
  sortBySelect: number = 0;
  @ViewChild('themeCheckbox') themeCheckbox: ElementRef | undefined;

  constructor(private store: Store, private themeService: ThemeService) {
    this.krList$ = this.store.pipe(select(selectSortedKRList));
    this.selectedKR$ = this.store.pipe(select(selectedKR));
    this.isKRSelected$ = this.store.pipe(select(isKRSelected));
    this.loadingContent$ = this.store.pipe(select(selectContentLoading));
  }

  ngOnInit(): void {
    this.store.dispatch(KRPageActions.enter());
    this.store.dispatch(KRPageActions.getSortByOptions());
    this.store.dispatch(KRPageActions.getRepoOptions());

    if(localStorage.getItem("theme")) {
      const currTheme: any = localStorage.getItem("theme");
      this.themeService.setTheme(currTheme);
    }
  }

  ngAfterViewInit(): void {
    const toggleCheckbox = this.themeCheckbox?.nativeElement;
    toggleCheckbox.checked = localStorage.getItem(toggleCheckbox.value) === 'true' ? true : false;
  }

  onSelectKR(card: KRCard) {
    this.store.dispatch(KRPageActions.cardSelectedId({id: card.id}));
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

  onClearKR() {
    this.store.dispatch(KRPageActions.cardCleared());
  }

  setRepoValue(value: number) {
    this.repoValue = value;
  }

  setSortByValue(value: number) {
    this.sortBySelect = value;
  }

  changeTheme(name?: any) {
    debugger;
    name = (localStorage.getItem("theme") == "default") || (localStorage.getItem("theme") == null) ? "light" : "default";
    this.themeService.setTheme(name);
    localStorage.setItem("theme", name);
    localStorage.setItem(this.themeCheckbox?.nativeElement.value,this.themeCheckbox?.nativeElement.checked);
  }

}
