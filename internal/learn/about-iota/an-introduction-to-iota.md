---
id: an-introduction-to-vti
title: About VTIMs
description: An introduction to our activites and immigration services at Vision Transform Immigration.
---

# An Introduction to Vision Transform Immigration Services



Vision Transform Immigration Services (VTIMS) is a an authorized immigration consultancy by the College of Immigration and Citizenship Consultants (CICC) under the management of Mahdi Bigdeli, RCIC (Authorization number: R709873). VTIMS provides expert consultancy services leveraging expertise driven from education and experinece. Our specialists combine decades of experience in areas such as Canadian immigration system, North American education system, and Canadian business and financial environment. 

- We can meet your immigraion and visa needs in and effective way, because we have lived the life here in a professional way and we know the nuts and bolts of the Canadian social and economic echosystem. 



![layer1-tangle](/img/learn/RCIC_EN_HORZ_CLR_POS_TM.png)

## The blockchain data structure

The blockchain data structure consists of a chain of sequential blocks, where each block contains a limited number of messages. As a result, Validators can attach new messages to only one place: a block at the end of the chain. Due to this limitation, blockchain networks often experience slow confirmation times. This limitation is known as the blockchain bottleneck.

**Blockchain bottleneck**

![blockchain-bottleneck](/img/learn/blockchain-bottleneck.gif)

All transactions in a blockchain have to wait until they are included in a block. Due to block size and block production time limitations, this creates congestion and waiting times for transactions.

## The Tangle data structure

The Tangle data structure is a directed acyclic graph (DAG), where each message is attached to two to eight previous ones. Rather than being limited to a single place for attaching new messages, you can attach messages in different places at the front of the Tangle. The protocol can process these various attachments in parallel.

**Tangle bottleneck**

![tangle-bottleneck](/img/learn/tangle-bottleneck.gif)

Allowing parallel processing removes congestion.


## Consensus in a blockchain

In blockchains, the network participants are divided
into validators (miners, stakers) and users. Miners consume large amounts of computing power to complete the proof of work (PoW) required to chain the blocks together. Miners and stakers are incentivized to validate messages because of the following:

- The fees that users are willing to pay to have their messages included in a block

- The reward that the network pays out in the form of freshly created tokens to the validators for producing the new block. 

The only way to reverse messages in a POW blockchain is to mine a new blockchain in the same amount of time it takes other miners to mine a single block. To do so, a miner would need 51% of the network's ability to do PoW, known as hash power. As a result, requiring validators to do PoW secures blockchain networks by making it difficult to attack, change, or stop. The more miners participate, the more secure the network is.

Producing blocks in a proof of stake (PoS) Blockchain usually requires a staker to own vast amounts of staked tokens. Often only a few selected or fixed Validators are granted to be block producers. These entities are pre-defined by the protocol's creators (a form of centralization) or emerge as validators holding the most significant stake of tokens. PoS blockchains do not require enormous amounts of energy wasted for PoW, but therefore only allow the wealthiest participants to write to the ledger and produce new blocks.

## Consensus in the Tangle

Sending messages requires no fees in the Tangle because the network has no miners or stakers. In the Tangle, PoW is not used to secure the network. Instead, PoW is used only to discourage spam messages. All IOTA nodes validate messages and use different functions alongside messages in their confirmation to reach consensus. Currently, messages will only be considered valid if they reference a milestone. These milestones are issued by a special network node – the Coordinator.

## The Coordinator

The Coordinator is a client that sends signed messages called milestones that nodes trust and use to confirm messages. This topic describes how nodes use milestones to determine which messages are confirmed.

The Coordinator is a temporary solution. IOTA will remove the Coordinator in the upcoming IOTA 2.0 network. The following text describes how the Coordinator is currently deployed within IOTA.

Messages in the Tangle are considered for confirmation only when they are directly or indirectly referenced by a milestone that nodes have validated.

To allow the nodes to recognize valid milestones, all nodes that participate in the same IOTA network are configured with the Ed25519 signatures of a coordinator they trust. By knowing those signatures, nodes can validate the signatures in issued milestones to verify whether the trusted Coordinator did sign them.

To ensure that new messages always have a chance of being confirmed, the Coordinator sends indexed milestones signed with those signatures regularly (every 10 seconds). This way ensures that nodes can compare the indexes of their milestones to check whether they are synchronized with the rest of the network.

![coordinator](/img/learn/milestones.gif)
