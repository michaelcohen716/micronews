# **Micronews: Reinventing the Online News Economy**

## **Project Summary**
Micronews is the first app built on the `Equity Curation Model` (ECM). The ECM is a new proposed revenue and discovery model for online content.

### **Problem Summary**
Online content curation and discovery are broken. This is a complex and wide-ranging topic, but Micronews and the ECM are focused on the specific challenges of:
- building an ecosystem that uses equity to incentivize **consistent and reliable participation in content curation** 
- building a sustainable revenue model for content creators that strikes the **appropriate balance between quality and popularity**

### **What is the ECM?**

#### Channels
The building blocks of the ECM are `Content Channels`: feeds of content &#8722; not unlike Subreddits &#8722; dedicated to a subject or community. For a small flat fee, users subscribe to a channel and can access all content within.

The subscription model isn't new. What's new in the ECM is the equity component. Each channel has its own capital structure defined by a `Token Bonding Curve` contract. Equity owners own the rights to 50% of the subscription revenue of the channel. The  bonding curve rewards the early believers in a channel as the equity token price increases exponentially with demand.

#### Equity Owners
Investing in equity may seem similar to staking models that some have proposed for content curation and reputation. The difference in the ECM is that equity owners are expected to be `active curators`. 

In fact, they are heavily incentivized to do so. If an equity owner doesn't vote on at least 25% of all content posted in a `fee period`, they are not eligible to collect their rewards. 

The 25% threshold could be lowered as the popularity of a channel grows (through some governance process yet to be defined). `Voting` is as simple as upvoting or downvoting. 

#### Bookmarks
Each subscribing user has five `bookmarks` to dispense per fee period (likely a week). This finite reservoir of influence is a major component for calculating payouts to content creators. Users may give bookmarks to their favorite creator or to a new creator who posted something interesting. They may give a bookmark to a creator who ran a promotion offering some offchain benefit in exchange for a bookmark. Users may not feel like giving a bookmark to anyone. This is all okay. Bookmarks are supposed to be a flexible incentive lever for creators to build value.

#### Content Payouts
Content creators own the rights to 50% of the subscription revenue in a channel. That 50% is divided into two equal parts. 

*Voting Results* 

Half of the content pot is distributed based on the voting results of the equity owners. The formula is simple. If the ratio of upvotes to downvotes for a given post is in the top 80% in the fee period, the creator is paid out for the post. If the ratio for a post is in the bottom 20%, the creator isn't paid.

In this construct, *most* creators will be paid. But the desire to be in the top 80% in a period should encourage creators to maintain and improve the quality of content.

In addition, creators are limited to one post every 12 hours, preventing them from flooding the channel with content and dominating the feed &#8722; and potentially breaking the fee model.

*Bookmarks*

Half of the content pot is distributed based on the bookmarks a creator receives in a period, calculated as a percentage of total bookmarks in the channel.

This is an incentive for quality, but also an incentive for creators to promote themselves and the platform.

#### Micronews Revenue Model
[This is a link](https://docs.google.com/spreadsheets/d/12Wq5UG3ZnsHekSdW4isp9vCAHzdatdprX4ghfyTDsdc/edit?usp=sharing) to the Micronews revenue model template. Clone it to use.

#### Extra points
- bonding curve prevents centralized accumulation because of exponential price growth
- equity owners use cash flow analysis to derive proper yield on equity. with a liquid, instant bonding curve market, price discovery isn't hard