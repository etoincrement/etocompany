export interface DanteAbilityFormat {
    category: DANTE_ABILITY_CATEGORY;
    abilityids: number[];
    remaincount: number;
}

export enum DANTE_ABILITY_CATEGORY {
	DEFAULT = 0,
	RAILWAY_DUNGEON = 1
}