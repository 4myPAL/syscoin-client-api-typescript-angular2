/**
 * Syscoin API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.3
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */



export interface TransactionListEntry {
    /**
     * DEPRECATED. The account name associated with the transaction. It will be \"\" for the default account.
     */
    account?: string;

    /**
     * The syscoin address of the transaction. Not present for move transactions (category = move).
     */
    address?: string;

    /**
     * The transaction category. 'move' is a local (off blockchain) transaction between accounts, and not associated with an address, transaction id or block. 'send' and 'receive' transactions are associated with an address, transaction id and block details
     */
    category?: string;

    /**
     * The amount in SYS. This is negative for the 'send' category, and for the 'move' category for moves outbound. It is positive for the 'receive' category, and for the 'move' category for inbound funds.
     */
    amount?: number;

    /**
     * the vout value
     */
    vout?: number;

    /**
     * The amount of the fee in SYS. This is negative and only available for the 'send' category of transactions.
     */
    fee?: number;

    /**
     * The number of confirmations for the transaction. Available for 'send' and'receive' category of transactions. Negative confirmations indicate the transation conflicts with the block chain
     */
    confirmations?: number;

    /**
     * Whether we consider the outputs of this unconfirmed transaction safe to spend.
     */
    trusted?: boolean;

    /**
     * The block hash containing the transaction. Available for 'send' and 'receive' category of transactions.
     */
    blockhash?: string;

    /**
     * The block index containing the transaction. Available for 'send' and 'receive' category of transactions.
     */
    blockindex?: string;

    /**
     * The block time in seconds since epoch (1 Jan 1970 GMT).
     */
    blocktime?: number;

    /**
     * The transaction id. Available for 'send' and 'receive' category of transactions.
     */
    txid?: string;

    /**
     * The transaction time in seconds since epoch (midnight Jan 1 1970 GMT).
     */
    time?: number;

    /**
     * The time received in seconds since epoch (midnight Jan 1 1970 GMT). Available for 'send' and 'receive' category of transactions.
     */
    timereceived?: number;

    /**
     * If a comment is associated with the transaction.
     */
    comment?: string;

    /**
     * A comment for the address/transaction, if any
     */
    label?: string;

    /**
     * For the 'move' category of transactions, the account the funds came from (for receiving funds, positive amounts), or went to (for sending funds, negative amounts).
     */
    otheraccount?: string;

}
