import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { KRCardDetail } from 'src/app/models/card-detail.model';
import { StateEnum } from 'src/app/models/enums.model';
import { cardCleared } from 'src/app/state/kr-page.action';

@Component({
  selector: 'app-kr-detail',
  templateUrl: './kr-detail.component.html',
  styleUrls: ['./kr-detail.component.scss']
})
export class KrDetailComponent implements OnInit {

  @Input()
  selectedKR!: KRCardDetail | null | undefined;

  @Output() clearSelectedCard: EventEmitter<any> = new EventEmitter<any>();

  panelOpenState: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  clearCard() {
    this.clearSelectedCard.emit();
  }

  getClass() {
    return {
      'qa': this.selectedKR?.card?.state === StateEnum.QA,
      'stage': this.selectedKR?.card?.state === StateEnum.STAGE,
      'prod': this.selectedKR?.card?.state === StateEnum.PROD
    }
  }

}
