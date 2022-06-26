import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SelectOption } from 'src/app/models/data.model';
import { RepoEnum } from 'src/app/models/enums.model';
import { sortBySelected, repoSelected } from 'src/app/state/kr-page.action';
import { selectSortByOptions, selectRepoOptions } from 'src/app/state/kr.selectors';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input() appName: string = '';
  sortOptions$: Observable<SelectOption[]>;
  sortBySelect = 1;

  repoOptions$: Observable<SelectOption[]>;
  repoValue = 1;
  
  constructor(private store: Store) { 
    this.sortOptions$ = this.store.pipe(select(selectSortByOptions));
    this.repoOptions$ = this.store.pipe(select(selectRepoOptions));
  }

  ngOnInit(): void {
  }

  sortBySelected(option: SelectOption) {
    this.store.dispatch(sortBySelected({value: option.value}));
  }

  repoSelected(option: SelectOption) {
    this.store.dispatch(repoSelected({selectedRepo: option.label.toLocaleLowerCase() as RepoEnum}))
  }

}
