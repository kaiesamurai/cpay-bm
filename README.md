# CPay: Simplifying Multi-Blockchain Transactions

CPay is designed to revolutionize the way users interact with multiple blockchains, offering a seamless, user-friendly wallet that supports cross-chain transactions at the click of a button. Aimed at drastically simplifying the cryptocurrency management process, it allows users to execute transactions across different chains without needing to understand the underlying complexities.

## Key Features

### Single-Click Cross-Chain Payments
With CPay, users can effortlessly manage tokens across multiple blockchains using just one wallet. This simplicity is achieved through advanced chain abstraction, which masks the complexity of blockchain interactions.

### User-Friendly Interface
Designed with ease of use in mind, CPay ensures that anyone, even those with minimal technical knowledge, can easily manage their crypto assets. This approach is so straightforward that even someone unfamiliar with blockchain technology would feel confident using it.

### No More Bridging Hassles
Users no longer need to learn complex bridging processes or sign multiple transactions. CPay handles all these operations in the background, providing a smooth, hassle-free experience.

## Challenges and Solutions

### Infrastructure Limitations
Initial challenges with chainlink functions led to a redesign of our transaction verification process. By moving certain operations off-chain, we enhanced the performance and reliability of CPay.

### Cross-Chain Messaging
We adapted our approach to cross-chain messaging to overcome the limitations of CCIP, ensuring that transactions remain fast and user-friendly.

### Authentication Experience
Facing hurdles with the Safe Auth Kit, we optimized our integration strategies to improve the authentication process, striving to maintain a seamless user experience despite technical constraints.

CPay is not just a tool but a gateway to a more interconnected and accessible world of decentralized finance. By reducing the technical barriers associated with managing diverse blockchain assets, CPay opens up new possibilities for users of all levels of expertise.


## Inspiration
The inspiration for CPay came from the need to simplify the complex process of managing and transacting with cryptocurrencies across multiple blockchains. We saw a gap in the market for a user-friendly solution that could handle cross-chain transactions seamlessly, making decentralized finance accessible to everyone.

## What it does
CPay is a revolutionary wallet that allows users to manage and execute transactions across multiple blockchains with a single click. It abstracts the complexities of blockchain interactions, providing a smooth, hassle-free experience for users of all technical levels.

## How we built it
We built CPay using advanced blockchain technologies and integrated various APIs to facilitate cross-chain messaging and transactions. Our development process involved:
- Designing a user-friendly interface.
- Implementing chain abstraction to hide underlying complexities.
- Enhancing transaction verification processes by moving some operations off-chain.
- Optimizing authentication using the Safe Auth Kit.

## Challenges we ran into
During the development of CPay, we encountered several challenges:
- Initial limitations with chainlink functions necessitated a redesign of our transaction verification process.
- Overcoming the constraints of CCIP for efficient cross-chain messaging.
- Integrating Safe Auth Kit to maintain a seamless authentication experience.

## Accomplishments that we're proud of
We are proud of:
- Creating a truly user-friendly interface that simplifies cross-chain transactions.
- Successfully abstracting the complexities of blockchain interactions, making decentralized finance more accessible.
- Developing a robust and reliable wallet that enhances the user experience by handling all bridging processes in the background.

## What we learned
Throughout the development of CPay, we learned the importance of user experience in decentralized finance applications. We also gained valuable insights into optimizing cross-chain messaging and transaction verification processes.

## What's next for CPay
Moving forward, we plan to:
- Expand support for additional blockchains.
- Continue improving the user interface based on feedback.
- Enhance security features to further protect users' assets.
- Explore partnerships to integrate more decentralized finance services within CPay.

## EVM Example File

To facilitate the deployment and interaction with smart contracts, here is an example of an EVM configuration file.

```plaintext
PRIVATE_KEY=

ETHERSCAN_API_KEY=
GOERLI_RPC_URL=

POLYGON_ZKEVM_SCAN_API_KEY=
POLYGON_ZKEVM_TESTNET_RPC_URL=
```

### Contract Addresses

```plaintext
BasicUSDC: 0xf80E7ce8166b91b110FE022326AAdDf7085Bf0B9
Treasury: 0x39d2220958054404bebDca40bAE70b6e16d615C1
Utils: 0x98A266860D7AE38B41C5834BE62EC195CceAC119

CCIP Contract: 0x7746B5e3232C514be10e7D47De9b579Df65BB23d
Hyperlane API: 0x8b2e48150d4db6b3af67740e89d26cc488eac2ff

MainContractDeployer: 0x90fE2D28BA67E77Cb336D40dE6B36578A5D943fb
MainContract: 0x383D4c9B2e819509ECe3DDac09824a121A21c16E
```

### Wallet Creation (Mumbai -> Sepolia)

You can create a wallet and initiate cross-chain transactions using the following link:

[Wallet Creation](https://ccip.chain.link/msg/0xf13e93aa3fc4f80d16c078e14d2160c859ce74964c9ba6847c7f953d6e7d4ea0)

## Conclusion

CPay is set to transform how users engage with decentralized finance by making multi-blockchain transactions simple and accessible. By addressing key challenges and focusing on user experience, CPay provides a robust solution for managing crypto assets across different chains.