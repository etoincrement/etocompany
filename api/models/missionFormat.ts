export interface MissionFormat {
    category: MISSION_CATEGORY;
    id: number;
    state: MISSION_STATE;
}

export enum MISSION_CATEGORY {
    NONE = 0,
    EVENT_NEWYEAR_2024_NORMAL = 1,
    EVENT_NEWYEAR_2024_HARD = 2,
    EVENT_NEWYEAR_2024_COMMON = 3,
    EVENT_WALPU3_NORMAL = 4,
    EVENT_WALPU3_HARD = 5,
    EVENT_WALPU3_COMMON = 6
}

export enum MISSION_STATE {
    NONE = 0,
    ACHIEVED = 1,
    REWARDED = 2
}