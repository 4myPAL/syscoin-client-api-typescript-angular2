'use strict';
import * as models from './models';

export interface EscrowNewRequest {
    

    /**
     * An alias you own.
     */
    alias?: string;

    /**
     * GUID of offer that this escrow is managing.
     */
    offer?: string;

    /**
     * Quantity of items to buy of offer.
     */
    quantity?: number;

    /**
     * Delivery details to seller. 256 characters max.
     */
    message?: string;

    /**
     * Alias of Arbiter.
     */
    arbiter?: string;

    /**
     * External transaction ID if paid with another blockchain.
     */
    exttx?: string;

    /**
     * If extTx is defined, specify a valid payment option used to make payment. Default is SYS.
     */
    paymentoption?: string;

    /**
     * If paid in external chain, enter redeemScript that generateescrowmultisig returns
     */
    redeemscript?: string;

    /**
     * If paid in extneral chain, enter height that generateescrowmultisig returns
     */
    height?: number;
}
