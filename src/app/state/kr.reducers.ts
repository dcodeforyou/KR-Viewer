import { Action, createReducer, on } from "@ngrx/store";
import { KRCardDetail } from "../models/card-detail.model";
import { KRCard, KRDetailsList } from "../models/card.model";
import { SelectOption } from "../models/data.model";
import { RepoEnum, StateEnum } from "../models/enums.model";
import * as KRActions from './kr-page.action';
import * as KRAPIActions from './kr-api.action';

export interface State {
    krDetailsList: KRDetailsList | null;
    list: KRCard[];
    sortByOptions: SelectOption[];
    sortBySelectedOption: number;
    activeStates: StateEnum[];
    loading: boolean;
    repoOptions: SelectOption[];
    activeRepo: RepoEnum;
    activeKRId: String;
    contentLoaded: boolean;
}

export const initialState: State = {
    krDetailsList: null,
    list: [],
    sortByOptions: [],
    sortBySelectedOption: 1,
    activeStates: [StateEnum.ALL],
    loading: false,
    repoOptions: [],
    activeRepo: RepoEnum.CORE_UI,
    activeKRId: '',
    contentLoaded: false
}

export const KRReducers = createReducer(
    initialState,
    on(KRActions.enter, (state: State) => ({...state, loading: true})),
    on(KRAPIActions.krDetailsListLoaded, (state: State, action) => ({...state, krDetailsList: action.detailsList, contentLoaded: true})),
    on(KRActions.getSortByOptionsSuccess, (state: State, action) => ({...state, sortByOptions: action.options})),
    on(KRActions.getRepoOptionsSuccess, (state: State, action) => ({...state, repoOptions: action.options})),
    on(KRActions.cardCleared, (state:State) => ({...state, activeKRId: '', loading: true})),
    on(KRActions.sortBySelected, (state: State, action) => 
    ({...state, sortBySelectedOption: action.value})),
    on(KRActions.repoSelected, (state: State, action) => 
    ({...state, activeRepo: action.selectedRepo, activeKRId: ''})),
    on(KRActions.repoSelected, (state: State, action) => ({...state, activeRepo: action.selectedRepo, activeKRId: ''})),
    on(KRActions.cardSelectedId, (state: State, action) => ({...state, activeKRId: action.id})),
    on(KRActions.stateSelected, (state: State, action) => {
        // at least one state should be selected
        if(state.activeStates.length == 1 && state.activeStates[0] == action.selectedState) {
            return ({...state})
        }

        // is it active state
        const isItActiveState = state.activeStates.some(state => state === action.selectedState);

        // if yes, remove from store
        if(isItActiveState) {
            const idx = state.activeStates.indexOf(action.selectedState);
            const newStates = [...state.activeStates];
            newStates.splice(idx, 1);
            return ({...state, activeStates: [...newStates]});
        }

        // if not selected
        if(!isItActiveState) {
            // if selected category is All then we need to remove all items and add only all category
            // if selected category not All remove all if it's active or just add a new item
            if (action.selectedState === StateEnum.ALL) {
                return ({...state, activeStates: [StateEnum.ALL]});
            } else {
                const isAllActive = state.activeStates.some(state => state === StateEnum.ALL);
                if (isAllActive) {
                return ({...state, activeStates: [action.selectedState]});
                }
                return ({...state, activeStates: [...state.activeStates, action.selectedState]});
            }
        }
        return ({...state});
    })
);

export function reducer(state: State | undefined, action: Action) {
    return KRReducers(state, action);
}

