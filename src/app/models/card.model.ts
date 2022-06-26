import { KRCardDetail } from "./card-detail.model";
import { IComment } from "./comment.model";
import { RepoEnum, StateEnum } from "./enums.model";

export interface KRCard {
    //  id, KRNumber, title, state, comments
    id: String;
    krCardNumber: string;
    title: string;
    state: StateEnum;
    comments?: IComment[];
    date: string;
    status?: boolean | undefined;
}

export type KRDetailsList = {
    [value in RepoEnum]: KRCardDetail[];
}