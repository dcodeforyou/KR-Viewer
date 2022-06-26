import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { delay, Observable } from 'rxjs';
import { KRCardDetail } from 'src/app/models/card-detail.model';
import { KRCard } from 'src/app/models/card.model';
import { selectedKR, selectFilteredKRList, selectKRList, selectSortedKRList, isKRSelected, selectContentLoading } from 'src/app/state/kr.selectors';
import * as KRPageActions from '../../state/kr-page.action';

@Component({
  selector: 'app-kr-view-page',
  templateUrl: './kr-view-page.component.html',
  styleUrls: ['./kr-view-page.component.scss']
})
export class KrViewPageComponent implements OnInit {

  krList$: Observable<KRCard[]>;
  selectedKR$: Observable<KRCardDetail | null | undefined>;
  isKRSelected$: Observable<boolean>;
  appName: string = 'KR-Viewer';
  loadingContent$: Observable<boolean>;

  constructor(private store: Store) {
    this.krList$ = this.store.pipe(select(selectSortedKRList));
    this.selectedKR$ = this.store.pipe(select(selectedKR));
    this.isKRSelected$ = this.store.pipe(select(isKRSelected));
    this.loadingContent$ = this.store.pipe(select(selectContentLoading));
  }

  ngOnInit(): void {
    this.store.dispatch(KRPageActions.enter());
    this.store.dispatch(KRPageActions.getSortByOptions());
    this.store.dispatch(KRPageActions.getRepoOptions());
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

}
