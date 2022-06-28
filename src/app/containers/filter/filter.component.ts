import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SelectOption } from 'src/app/models/data.model';
import { RepoEnum } from 'src/app/models/enums.model';
import { sortBySelected, repoSelected } from 'src/app/state/kr-page.action';
import { selectSortByOptions, selectRepoOptions } from 'src/app/state/kr.selectors';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent implements OnInit {

  @Input() appName: string = '';
  @Output() selectedRepoValue: EventEmitter<number> = new EventEmitter<number>();
  @Output() selectedSortByValue: EventEmitter<number> = new EventEmitter<number>();


  sortOptions$: Observable<SelectOption[]>;
  @Input() sortBySelect = 0;

  repoOptions$: Observable<SelectOption[]>;
  @Input() repoValue: any;
  
  constructor(private store: Store, private ref: ChangeDetectorRef) { 
    this.sortOptions$ = this.store.pipe(select(selectSortByOptions));
    this.repoOptions$ = this.store.pipe(select(selectRepoOptions));
  }

  ngOnInit(): void {
    this.ref.markForCheck();
  }

  sortBySelected(option: SelectOption) {
    this.store.dispatch(sortBySelected({value: option.value}));
    this.selectedSortByValue.emit(option.value);
  }

  repoSelected(option: SelectOption) {
    console.log('Repo Vlue: ', this.repoValue);
    console.log('Option Value: ', option.value);
    this.store.dispatch(repoSelected({selectedRepo: option.label.toLocaleLowerCase() as RepoEnum}))
    this.selectedRepoValue.emit(option.value);
  }

}
