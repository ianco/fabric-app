# fabric-app
Fabric application using composer, http api and angular-js

This application is based on the Hyperledger Fabric Composer developer tutorial, which you can read here:

https://hyperledger.github.io/composer/tutorials/developer-guide.html

It's recommended that you follow the above tutorial, if you're new to Fabric or Composer.  You will also need the instructions to install your Fabric network, which you can get here:

https://hyperledger.github.io/composer/installing/development-tools.html

This repository includes the artifacts produced through this tutorial:

- The Fabric network definition
- The business network definition (a.k.a. "banana file")
- The generated web services and Angular application

Since the generated application includes support only for Commodities, the application in this repository also includes:

- Support for adding and updating Traders
- Executing Trades
- Viewing transaction history (i.e. Trade history)

This functionality is also all available through the generated web service api.
