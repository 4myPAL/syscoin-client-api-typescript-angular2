'use strict';
import * as models from './models';

export interface OfferNewRequest {
    

    /**
     * An alias you own.
     */
    alias?: string;

    /**
     * category, 255 chars max.
     */
    category?: string;

    /**
     * title, 255 chars max.
     */
    title?: string;

    /**
     * quantity, > 0 or -1 for infinite
     */
    quantity?: number;

    /**
     * price in <currency>, > 0
     */
    price?: number;

    /**
     * description, 1 KB max.
     */
    description?: string;

    /**
     * The currency code that you want your offer to be in ie USD.
     */
    currency?: string;

    /**
     * Set this to the guid of a certificate you wish to sell
     */
    certguid?: string;

    /**
     * 'SYS' to accept SYS only, 'BTC' for BTC only, 'ZEC' for zcash only, or a |-delimited string to accept multiple currencies (e.g. 'BTC|SYS' to accept BTC or SYS). Leave empty for default. Defaults to 'SYS'.
     */
    paymentoptions?: string;

    /**
     * set to your geolocation. Defaults to empty.
     */
    geolocation?: string;

    /**
     * set to No if this offer should only show in the search when safe search is not selected. Defaults to Yes (offer shows with or without safe search selected in search lists).
     */
    safesearch?: string;

    /**
     * set to 1 if this offer should be private not be searchable. Defaults to 0.
     */
    private?: boolean;
}
