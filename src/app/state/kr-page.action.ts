import { createAction, props } from "@ngrx/store";
import { KRCard } from "../models/card.model";
import { SelectOption } from "../models/data.model";
import { RepoEnum, StateEnum } from "../models/enums.model";

export const enter = createAction('[KR-View] enter');

export const getSortByOptions = createAction('[KR-View] Get Sort By Options');

export const getRepoOptions = createAction('[KR-View] Get Repo Options');

export const getSortByOptionsSuccess = createAction(
    '[KR-View] Get Sort By Options Success', 
    props<{options: SelectOption[]}>()
);

export const getRepoOptionsSuccess = createAction(
    '[KR-View] Get Repo Options Success', 
    props<{options: SelectOption[]}>()
);

export const sortBySelected = createAction(
    '[KR-View] Select Sort By',
    props<{ value: number }>()
);

export const stateSelected = createAction(
    '[KR-View] State selected',
    props<{ selectedState: StateEnum }>()
);

export const repoSelected = createAction(
    '[KR-View] Repo Selected',
    props<{ selectedRepo: RepoEnum }>()
);

export const cardSelectedId = createAction(
    '[KR-View] Select card',
    props<{ id: String }>()
);

export const cardCleared = createAction(
    '[KR-View] Clear Card',
);

