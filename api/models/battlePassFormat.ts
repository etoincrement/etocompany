export interface BattlePassFormat {
    is_limbus: boolean;            
    level: number;                 
    exp: number;                   
    today_rand_value: number;      
    ex_reward_level: number;       
    limbus_apply_level: number;    
    rewards_state: number[];       
    missions_state: BattlePassMissionState[];  
    special_product_state: number;
    ex_reward_limbus_level: number;
}

export interface BattlePassMissionState {
    id: number;                    
    count: number;                 
    state: number;                 
}
