import { NodeStateFormat } from './nodeStateFormat.ts';  

export interface MainChapterStateFormat {
    id: number;            
    subcss: SubChapterStateFormat[]; 
}

export interface SubChapterStateFormat {
    id: number;           
    nss: NodeStateFormat[];     
    rss: number[];        
}
