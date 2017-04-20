'use strict';
import * as models from './models';

export interface OfferAccept {
    

    offer?: string;

    title?: string;

    id?: string;

    btctxid?: string;

    alias?: string;

    buyer?: string;

    height?: number;

    quantity?: number;

    currency?: string;

    linkofferaccept?: string;

    offerDiscountPercentage?: number;

    escrowlink?: string;

    systotal?: number;

    price?: number;

    total?: number;

    ismine?: boolean;

    status?: string;

    payMessage?: string;
}
