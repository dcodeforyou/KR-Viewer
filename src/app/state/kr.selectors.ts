import { createFeatureSelector, createSelector } from "@ngrx/store";
import { KRCardDetail } from "../models/card-detail.model";
import { KRCard, KRDetailsList } from "../models/card.model";
import { RepoEnum, StateEnum } from "../models/enums.model";
import { State } from "./kr.reducers";

export const selectRoot = (state: any) => state.krs;

export const selectKRDetailsList = createSelector(
    selectRoot,
    (state: State) => state.krDetailsList
);

export const selectContentLoading = createSelector(
    selectRoot,
    (state: State) => state.contentLoaded
)

export const selectActiveRepo = createSelector(
    selectRoot,
    (state: State) => {
        console.log('SELECTED REPO: ', state.activeRepo);
        return state.activeRepo
    }
);

export const selectSortByOptions = createSelector(
    selectRoot,
    (state: State) => state.sortByOptions
);

export const selectRepoOptions = createSelector(
    selectRoot,
    (state: State) => state.repoOptions
);

export const selectKRLoading = createSelector(
    selectRoot,
    (state: State) => state.loading
);

export const selectActiveStates = createSelector(
    selectRoot,
    (state: State) => state.activeStates
);

export const selectSortBySelectedOption = createSelector(
    selectRoot,
    (state: State) => state.sortBySelectedOption
);



export const selectActiveRepoKRDetailsList = createSelector(
    selectKRDetailsList,
    selectActiveRepo,
    (data: KRDetailsList | null, activeRepo: RepoEnum) =>  data ? data[activeRepo] : []
);

export const selectKRList = createSelector(
    selectActiveRepoKRDetailsList,
    (detailsList: KRCardDetail[]) => {
        let list: KRCard[] = [];
            list = detailsList.map(detail => {
                let currKR: KRCard = {
                    id: detail.card.id,
                    krCardNumber: detail.card.krCardNumber,
                    title: detail.card.title,
                    state: detail.card.state,
                    date: detail.card.date,
                    status: detail.card.status
                };
                return currKR;
            });
        return list;
    }
);

export const selectFilteredKRList = createSelector(
    selectKRList,
    selectActiveStates,
    (list: KRCard[], activeStates: string[]) => {
        if(activeStates.length == 1 && activeStates[0] === StateEnum.ALL)
            return list;
        return list.filter(kr => activeStates.some(state => state === kr.state));
    }
);

export const selectSortedKRList = createSelector(
    selectFilteredKRList,
    selectSortBySelectedOption,
    (list: KRCard[], sortBy: number) => {
        return list.slice().sort((a, b) => {
            switch(sortBy) {
                case 1:
                    return b.krCardNumber.localeCompare(a.krCardNumber);
                case 2:
                    return a.krCardNumber.localeCompare(b.krCardNumber);;
                case 3:
                    return b.date.localeCompare(a.date);
                default:
                    return a.date.localeCompare(b.date);
            }
        })
    }
);

export const getSelectedRepo = createSelector(
    selectRoot,
    (state: State) => state.activeRepo
);

export const selectedKRId = createSelector(
    selectRoot,
    (state: State) => state.activeKRId
);

export const selectedKR = createSelector(
    selectActiveRepoKRDetailsList,
    selectedKRId,
    (detailsList: KRCardDetail[] , id: String) => detailsList.find(detail => detail.card.id === id)
);

export const isKRSelected = createSelector(
    selectedKRId,
    (id: String) => id !== '' ? true : false
)
