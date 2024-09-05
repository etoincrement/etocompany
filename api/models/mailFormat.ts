import { Element } from './element.ts';  

export interface MailFormat {
    mail_id: number;          
    sent_date: string;        
    expiry_date: string;      
    content_id: number;       
    attachments: Element[];   
    parameters: string[];     
}

export interface MailContentFormat {
    id: number;               
    version: number;          
    senderSprName: string;    
    content_KR: string;       
    sender_KR: string;        
    content_EN: string;       
    sender_EN: string;        
    content_JP: string;       
    sender_JP: string;        
}

export interface MailLog {
    maillog_id: number;       
    sent_date: string;        
    content_id: number;       
    attachments: Element[];   
    unsealed_date: string;    
    parameters: string[];     
}
