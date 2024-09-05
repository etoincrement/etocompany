import { UserAuthFormat } from '../models/userAuthFormat.ts';
import { AccountInfoFormat } from '../models/accountInfoFormat.ts';

export interface ResPacket_SignInAsSteam {
    userAuth: UserAuthFormat;
    accountInfo: AccountInfoFormat;
    walletCurrency: string;
}