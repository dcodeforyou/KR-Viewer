export enum StateEnum {
    ALL = 'all',
    OBSOLETE = 'obsolete',
    TODO = 'todo',
    HOLD = 'on-hold',
    ANALYSIS = 'analysis completed',
    QA = 'Deployed on QA',
    STAGE = 'Deployed on Stage',
    PROD = 'Deployed on Prod',
    DONE = 'done'
}

export enum RepoEnum {
    CORE_UI = 'core-ui',
    CORE_COMPONENTS = 'core-components',
    MY_TRIPS = 'my-trips'
}

export const stateValues = {
    'all': 0,
    'obsolete': 1,
    'todo': 0,
    'on-hold': 0,
    'analysis completed': 1,
    'Deployed on QA': 2,
    'Deployed on Stage': 3,
    'Deployed on Prod': 4,
    'done': 4
}

export const stateList = [
    { value: 'all', label: 'ALL' },
    { value: 'analysis completed', label: 'Analysis Completed' },
    { value: 'Deployed on QA', label: 'QA Deployed' },
    { value: 'Deployed on Stage', label: 'Stage Deployed' },
    { value: 'Deployed on Prod', label: 'Prod Deployed' }
]

export const cardStateList = [
    { value: 'analysis completed', label: 'Analysis Completed' },
    { value: 'Deployed on QA', label: 'QA Deployed' },
    { value: 'Deployed on Stage', label: 'Stage Deployed' },
    { value: 'Deployed on Prod', label: 'Prod Deployed' },
    { value: 'obsolete', label: 'Obsolete' },
    { value: 'todo', label: 'Todo' },
    { value: 'done', label: 'Done' },
    { value: 'on-hold', label: 'On Hold' }
]

