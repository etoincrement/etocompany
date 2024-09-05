export interface FormationFormat {
    id: number;
    formationDetails: FormationDetailFormat[];
    formationNameFormat: FormationNameElement[];
}

export interface FormationDetailFormat {
    personalityId: number;         
    egos: number[];                
    isParticipated: boolean;       
    participationOrder: number;    
}

export interface FormationNameElement {
    k: number;
    v: number;
}