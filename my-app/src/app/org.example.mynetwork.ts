// export namespace org.example.mynetwork{
   export class Commodity {
      tradingSymbol: string;
      description: string;
      mainExchange: string;
      quantity: number;
      owner: Trader;
   }
   export class Trader {
      tradeId: string;
      firstName: string;
      lastName: string;
   }
   export class Trade {
      transactionId: string;
      commodity: Commodity;
      newOwner: Trader;
      timestamp: Date;
   }
// }
