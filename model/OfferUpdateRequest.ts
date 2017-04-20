'use strict';
import * as models from './models';

export interface OfferUpdateRequest {
    

    /**
     * An alias you own.
     */
    alias?: string;

    /**
     * GUID of offer to update.
     */
    guid?: string;

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
     * set to 1 if this offer should be private not be searchable. Defaults to 0.
     */
    private?: boolean;

    /**
     * Set this to the guid of a certificate you wish to sell
     */
    certguid?: string;

    /**
     * set to your geolocation. Defaults to empty.
     */
    geolocation?: string;

    /**
     * set to No if this offer should only show in the search when safe search is not selected. Defaults to Yes (offer shows with or without safe search selected in search lists).
     */
    safesearch?: string;

    /**
     * For resold offers.
     */
    comission?: number;

    /**
     * 'SYS' to accept SYS only, 'BTC' for BTC only, 'ZEC' for zcash only, or a |-delimited string to accept multiple currencies (e.g. 'BTC|SYS' to accept BTC or SYS). Leave empty for default. Defaults to 'SYS'.
     */
    paymentoptions?: string;
}
