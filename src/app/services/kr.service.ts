import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
import { krDetailMockJson, krListMockJson } from '../mocks/kr-mock';
import { KRCardDetail, linkedCard } from '../models/card-detail.model';
import { KRCard, KRDetailsList } from '../models/card.model';
import { RepoEnum, StateEnum, stateValues } from '../models/enums.model';
import { HttpClient } from '@angular/common/http';
import { repoOptions, sortByOptions } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class KrService {

  constructor(private http: HttpClient) { }

  getKRDetailsList() {
    const url = 'http://localhost:4201/getKRList'; 
    return this.http.get(url).pipe(delay(2000));
  }

  getKRList() {
    return of(krListMockJson);
  }

  getSortOptions() {
    return of(sortByOptions);
  }

  getRepoOptions() {
    return of(repoOptions);
  }

  getSelectedKR(id: number, activeRepo?: RepoEnum) {
    const selectedKR = krDetailMockJson.find(kr => kr.card.id === id);
    return of(selectedKR);
  }

  getKeyName(value: string) {
    return Object.entries(StateEnum).find(([key, val]) => val === value)?.[0];
  }

  updateKRDetailsList(detailsList: KRDetailsList) {
    const listValues = Object.values(detailsList);
    for(let value of listValues) {
      this.updateKrStatus(value);
    }
    return of(detailsList);

  }

  updateKrStatus(list: KRCardDetail[]) {
    
    list.forEach(kr => {
          const krEnum = this.getKeyName(kr.card.state);
          const krStatus: StateEnum = StateEnum[krEnum as keyof typeof StateEnum];
          const isInvalid = kr?.linkedKrCards.some((card) => {
            const cardEnum = this.getKeyName(card.state);
            if(krEnum && cardEnum){
              const cardStatus: StateEnum = StateEnum[cardEnum as keyof typeof StateEnum];
              const isInvalidStatus = (stateValues[cardStatus] < stateValues[krStatus]);
              return isInvalidStatus;
            }
            return true;
              
          });
          kr.card.status = isInvalid ? false : true;
    })
    return of(list);
  }
}
