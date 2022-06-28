import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, exhaustMap, map, mergeMap, switchMap, withLatestFrom } from "rxjs/operators";
import { KrService } from "../services/kr.service";
import * as KRPageActions from "./kr-page.action";
import * as KRAPIActions from "./kr-api.action";
import { KRCardDetail } from "../models/card-detail.model";
import { KRCard, KRDetailsList } from "../models/card.model";
import { Store } from "@ngrx/store";
import { selectActiveRepo, selectKRDetailsList } from "./kr.selectors";
import { Observable, of } from "rxjs";
@Injectable()
export class KREffects {
    constructor(private actions$: Actions, private krService: KrService, private store: Store){}

    //*********************IMP FOR SINGLE API CALL*/
    // loadKRDetailsList = createEffect(() => this.actions$.pipe(
    //     ofType(KRPageActions.enter),
    //     mergeMap(() => this.krService.getKRDetailsList()),
    //     mergeMap((data: any) => {
    //         console.log('INITIAL DATA: ', data);
    //         return this.krService.updateKRDetailsList(data.data).pipe(
    //             map((detailsList) => KRAPIActions.krDetailsListLoaded({detailsList}))
    //         )
    //     })
    // ))

    loadKRDetailsList = createEffect(() => this.actions$.pipe(
        ofType(KRPageActions.enter),
        withLatestFrom(this.store.select(selectActiveRepo)),
        switchMap(([_ , repo]) => of(KRPageActions.repoSelected({selectedRepo: repo})))
    ))


    // onRepoUpdate = createEffect(() => this.actions$.pipe(
    //     ofType(KRPageActions.repoSelected),
    //     withLatestFrom(this.store.select(selectKRDetailsList)),
    //     switchMap(([action, details]) => {
    //         console.log('Details from Effects: ', details);
    //         if(!details || (details && !(action.selectedRepo in details))) {
    //             console.log()
    //             return this.krService.getKRDetailsList(action.selectedRepo).pipe(
    //                 map((repoDetailsList: any) => {
    //                     console.log(repoDetailsList);
    //                         return KRAPIActions.krDetailsListLoaded({detailsList: (repoDetailsList.data as KRDetailsList), selectedRepo: action.selectedRepo})
    //                     }
    //                 )
    //             )
    //         }
    //         return of(KRAPIActions.krDetailsListLoaded({detailsList: details, selectedRepo: action.selectedRepo}));
    //     })
    // ))

    onRepoUpdate = createEffect(() => this.actions$.pipe(
        ofType(KRPageActions.repoSelected),
        withLatestFrom(this.store.select(selectKRDetailsList)),
        switchMap(([action, details]: [any, any]) => this.loadLists(action, details)),
        switchMap((data: any) => this.krService.updateKRDetailsList(data.data).pipe(
            map((detailsList) => KRAPIActions.krDetailsListLoaded({detailsList: (detailsList as KRDetailsList)}))
        ))
    ))

    loadLists(action: any, details: any) {
            console.log('Details from Effects: ', details);
            if(!details || (details && !(action.selectedRepo in details))) {
                return (this.krService.getKRDetailsList(action.selectedRepo))
            }
            console.log('OLD: ',  details);
            let oldDetails = {
                data: details
            }
            return of(oldDetails);
    }



    // loadKRList$ = createEffect(() => this.actions$.pipe(
    //   ofType(KRPageActions.enter),
    //   mergeMap(() => this.krService.getKRList()),
    //   mergeMap((list: any[]) => {

    //         return this.krService.updateKrStatus(list).pipe(
    //             map((list) => KRAPIActions.krListLoaded({list}))
    //         )
    //     }
    //   )  
    // ));

    loadSortByOptions$ = createEffect(() => this.actions$.pipe(
            ofType(KRPageActions.getSortByOptions),
            mergeMap(() => this.krService.getSortOptions().pipe(
                map(options => KRPageActions.getSortByOptionsSuccess({options}))
            ))
        ));

    loadRepoOptions$ = createEffect(() => this.actions$.pipe(
        ofType(KRPageActions.getRepoOptions),
        mergeMap(() => this.krService.getRepoOptions().pipe(
            map(options => KRPageActions.getRepoOptionsSuccess({options}))
        ))
    ))

    // loadKRCardDetails$ = createEffect(() => this.actions$.pipe(
    //     ofType(KRPageActions.cardSelected),
    //     exhaustMap((action: { card: KRCard }) => this.krService.getSelectedKR(action.card.id)
    //     .pipe(
    //         map((card: any) => KRAPIActions.getSelectedKR({krCardDetails: card.}))
    //     ))
    // ))
}