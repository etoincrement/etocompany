export enum ELEMENT_TYPE {
    NONE = -1,
    ITEM = 0,
    EXP = 1,
    CHARACTER = 2,
    PERSONALITY = 3,
    EGO = 4,
    STAMINA = 5,
    BATTLEPASS_POINT = 6,
    VENDING_MACHINE = 7,
    ANNOUNCER = 8,
    EGO_GIFT = 9,
    GACHA = 10,
    USERBANNER = 11,
    VENDING_MACHINE_PERSONALITY = 12,
    VENDING_MACHINE_CHARACTER = 13,
    SEASONAL_R_BOX = 14,
    SEASONAL_O_BOX = 15,
    SEASONAL_PIECE = 16,
    EVENT_ITEM = 17,
    USER_TICKET_DECO_LEFT = 18,
    USER_TICKET_DECO_RIGHT = 19,
    USER_TICKET_DECO_EGOBG = 20,
    USER_TICKET_DECO_FOR_UI = 21,
    MIRRORDUNGEON_COST = 22,
    UNLOCK_CODE = 23,
    CHANCE = 24
}

export interface Element {
    _type: ELEMENT_TYPE;
    type: string;
    id: number;
    num: number;
}