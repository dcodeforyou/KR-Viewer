import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, exhaustMap, map, mergeMap } from "rxjs/operators";
import { KrService } from "../services/kr.service";
import * as KRPageActions from "./kr-page.action";
import * as KRAPIActions from "./kr-api.action";
import { KRCardDetail } from "../models/card-detail.model";
import { KRCard, KRDetailsList } from "../models/card.model";
@Injectable()
export class KREffects {
    constructor(private actions$: Actions, private krService: KrService){}
   
    // loadKRList$ = createEffect(() => this.actions$.pipe(
    //         ofType(KRPageActions.enter),
    //         exhaustMap(() => this.krService.getKRList().pipe(
    //                 map((list: KRCard[]) => this.krService.updateKrStatus(list).pipe(
    //                     map((list: any[]) => KRAPIActions.krListLoaded({list}))
    //                 ))
    //             ))
    //     ));

    // loadKRDetailsList$ = createEffect(() => this.actions$.pipe(
    //     ofType(KRPageActions.enter),
    //     mergeMap(() => this.krService.getKRDetailsList().pipe(
    //         map((data: any) => {
    //             console.log('API DATA: ', data);
    //             this.krService.updateKRDetailsList(data.data).pipe(
    //                 map((data) => {
    //                     return KRAPIActions.krDetailsListLoaded({detailsList: data})
    //                 })
    //             )
    //             return KRAPIActions.krDetailsListLoaded({detailsList: data.data})
    //         })
    //     ))
    // ))

    loadKRDetailsList = createEffect(() => this.actions$.pipe(
        ofType(KRPageActions.enter),
        mergeMap(() => this.krService.getKRDetailsList()),
        mergeMap((data: any) => {
            console.log('INITIAL DATA: ', data);
            return this.krService.updateKRDetailsList(data.data).pipe(
                map((detailsList) => KRAPIActions.krDetailsListLoaded({detailsList}))
            )
        })
    ))

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