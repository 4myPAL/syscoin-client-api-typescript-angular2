'use strict';
import * as models from './models';

export interface ByteMessageInfo {
    

    addr?: number;

    block?: number;

    getaddr?: number;

    getdata?: number;

    getheaders?: number;

    headers?: number;

    inv?: number;

    ping?: number;

    pong?: number;

    sendheaders?: number;

    tx?: number;

    verack?: number;

    version?: number;
}
