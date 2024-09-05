export interface LobbyCgFormat {
    characterId: number;              
    lobbycgdetails: LobbyCgDetailFormat[];
    isShowProfile: boolean;
}

export interface LobbyCgDetailFormat {
    id: number;  
    g: number;   
}
