import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { navigateRoot } from 'src/app/constants/constants';
import { KRCard } from 'src/app/models/card.model';
import { KrService } from 'src/app/services/kr.service';
import { StateEnum } from '../../models/enums.model';

@Component({
  selector: 'app-kr-card',
  templateUrl: './kr-card.component.html',
  styleUrls: ['./kr-card.component.scss']
})
export class KrCardComponent implements OnInit {

  @Input() kr: KRCard | undefined;
  navigateRootUrl = navigateRoot;

  constructor(private krService: KrService) {
    
  }

  ngOnInit(): void {
    this.navigateRootUrl += this.kr?.krCardNumber;
  }

  getClass() {
    return {
      'qa': this.kr?.state === StateEnum.QA,
      'stage': this.kr?.state === StateEnum.STAGE,
      'prod': this.kr?.state === StateEnum.PROD
    }
  }

  getButtonClass() {
    return {
      'success': this.kr?.status,
      'failure': !this.kr?.status
    }
  }

}
