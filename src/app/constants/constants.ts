import { RepoEnum } from "../models/enums.model";

export const navigateRoot = 'https://jira.cxloyalty.com/browse/';

export const sortByOptions = [
    {
      value: 1,
      label: 'KR-Descending'
    },
    {
      value: 2,
      label: 'KR-Ascending'
    },
    {
      value: 3,
      label: 'Date Latest'
    },
    {
      value: 4,
      label: 'Date Created'
    },
]

export const repoOptions = [
    {
        value: 1,
        label: RepoEnum.CORE_UI.toLocaleUpperCase()
    },
    {
        value: 2,
        label: RepoEnum.CORE_COMPONENTS.toLocaleUpperCase()
    },
    {
        value: 3,
        label: RepoEnum.MY_TRIPS.toLocaleUpperCase()
    }
]