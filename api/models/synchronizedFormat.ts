import { NoticeFormat } from './noticeFormat.ts';
import { MailContentFormat } from './mailFormat.ts';

export interface SynchronizedFormat {
    version: number;                 
    noticeList: NoticeFormat[];            
    mailContentList: MailContentFormat[];  
}
