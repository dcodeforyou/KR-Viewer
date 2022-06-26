import { createAction, props } from "@ngrx/store";
import { KRCardDetail } from "../models/card-detail.model";
import { KRCard, KRDetailsList } from "../models/card.model";
import { SelectOption } from "../models/data.model";

export const krDetailsListLoaded = createAction(
    '[KR API] KR Details List Success',
    props<{ detailsList: KRDetailsList }>()
);

export const krListLoaded = createAction(
    '[KR API] KR List Success',
    props<{ list: KRCard[] }>()
);

export const getSelectedKR = createAction(
    '[KR API] Get Slected KR Success',
    props<{ krCardDetailsId: String }>()
);