import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { KRCard } from 'src/app/models/card.model';
import { KrService } from 'src/app/services/kr.service';
import { selectedKRId } from 'src/app/state/kr.selectors';

@Component({
  selector: 'app-kr-list',
  templateUrl: './kr-list.component.html',
  styleUrls: ['./kr-list.component.scss']
})
export class KrListComponent implements OnInit {
  @Input() krList: KRCard[] = [];
  @Output() selectedKR: EventEmitter<KRCard> = new EventEmitter<KRCard>();
  selectedKRId$: Observable<String> | undefined;

  constructor(private store: Store, private krService: KrService) { 
    this.selectedKRId$ = this.store.select(selectedKRId);
  }

  ngOnInit(): void {
  }

  onSelectKR(kr: KRCard) {
    this.selectedKR.emit(kr);
  }

}
