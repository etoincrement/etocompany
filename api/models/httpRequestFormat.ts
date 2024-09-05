import { ServerInfo } from './serverInfo.ts';
import { UpdatedFormat } from './updatedFormat.ts';
import { SynchronizedFormat } from './synchronizedFormat.ts';
import { ServerUserAuth } from './serverUserAuth.ts';

export interface HttpRequestFormat<T> {
    userAuth: ServerUserAuth;   
    parameters: T;               
}

export interface HttpResponseFormat<T> {
    serverInfo: ServerInfo;     
    state: string;              
    updated: UpdatedFormat;           
    result: T;                  
    synchronized: SynchronizedFormat; 
}


