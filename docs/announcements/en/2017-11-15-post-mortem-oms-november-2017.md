---
title: 'Post Mortem OMS - November 2017'
id: dCyxZuPKPC2ckccoMKqk4
status: PUBLISHED
createdAt: 2017-11-15T03:34:25.106Z
updatedAt: 2019-12-31T15:13:52.527Z
publishedAt: 2019-12-31T15:13:52.527Z
contentType: updates
productTeam: Post-purchase
author: authors_59
slug: post-mortem-oms-november-2017
locale: en
legacySlug: post-mortem-oms-november-2017
announcementImageID: ''
announcementSynopsisEN: 'This post has the purpose of explaining the incident that occurred last Friday'
---

Dear customers,

This post has the purpose of explaining the incident that occurred last Friday, November 10, with the OMS module. This incident caused the **interruption of integration services and the interruption of order visualizations on VTEX control panel**, our Admin. Fortunately, **sales were not affected** and checkout was perfectly functional, and it worked normally during the entire incident. We experienced no reports of any customer sales interruptions during the occurrence.

VTEX has always made a conscious effort - which speaks clearly of our commitment to always being well above market standards - to ensure that mission-critical systems have high availability, elasticity and security. We consider our “mission critical systems” those that are responsible for order closure and workflow throughout the fulfillment process.

Examples of mission-critical systems are the Portal, the Payment Gateway, the Promotions System, Pricing and Checkout.

When any of these systems fails, it automatically recovers within 10 minutes or is able to recover after a few manual interventions from our engineers. To achieve this level of reliability, elasticity and durability, our infrastructure uses NOSQL-type storage solutions, the so-called *Key-Value stores*.

In the case of non-mission-critical systems, we allow longer recovery times and more manual processes for recovery. For these cases, our recovery target is up to 4 hours.

In the case of non-mission-critical systems, we allow for longer recovery times and more manual processes for recovery. For these cases, our recovery target is up to 4 hours.
This potentially lower availability comes with several benefits for these systems. It allows us to build more sophisticated and elaborated features. As a result,  our development cycle is much faster. Examples of non-mission-critical systems are our Admin, the OMS Search API, and VTEX Insights.

Last Friday, an incident occurred in which two major accidents were the result: one hit an API that we did not classify as mission-critical, and another hit a mission-critical service.
Below, we detail the accidents and our action plan to mitigate them.


## Accident 1 - Interruption of the OMS Search API

- Non critical __rating API__.
- Expected recovery time in case of disruption: __4 hours__.
- Time it took for partial recovery on Friday: __20 hours__.

Like any accident, this one happened due to a series of incidents that were not properly resolved at the time they had occurred.

The servers responsible for orders search had, during much of the year, minor operation interruptions. These interruptions were quickly recovered through simple maneuvers, such as slight optimizations, restarts, vertical escalation of servers, etc.

Although these maneuvers had a recovery effect in place at the time of the interruptions, in retrospect, we realized that we were not sufficiently rigorous in identifying the root cause of these small incidents.

On Friday, this lack of rigor took its turn: though all the small maneuvers were executed, in addition to more radical measures, none of them was sufficient enough to recover the infrastructure of the orders search.

After a few hours of unsuccessful attempts, we decided to take even more radical measures, such as simulating a disaster, rebuilding the entire infrastructure from scratch, and then repopulating with original request data. Again, none of these solutions had the desired result; the loads on the servers were larger than normal, as well as the level of CPUs and memory.

In parallel, another team of engineers was building a more modern infrastructure equipped with more recent practices. It was only with this attempt that we began to succeed in the recovery process.

Disaster recovery for all of our search environments follows a three-wave pattern that we always try to follow. First, we retrieve all items changed in the last 24 hours; then all items that have changed in the current year; and, finally, all items in the domain that should remain searchable.

The first wave began around 1:00 am (UTC), and lasted for approximately 3 hours. The second ended around 6:00 pm (UTC) on Saturday. We decided not to perform the third wave in full until after Black Friday, with the sole justification of mitigating a potential risk (if you are affected by this decision, please contact us).

The order export feature was reactivated on November 14, and is limited to orders placed on our search infrastructure (currently 2017; and until the end of the week, from the beginning of 2016).

All of your orders are stored in our NOSQL repository. __There was no loss or corruption of original data__. For now, you can only access them via the API, through the order IDs. As stated before, this is a situation that will only last until after Black Friday.

As described above, lack of rigor and a series of unsuccessful maneuvers have made the retrieval time of the order search infrastructure take an excessive amount of time - much longer than the reasonable minimum in a scenario of crisis and instability. It’s never enough to say how much we resent the failure that occurred on Friday. The only positive we are taking from the experience is in using it as a tool for learning and as an example of how to proceed from here on to avoid such circumstances in the future.

Here is a list of the actions we will take from this learning experience:

1. We will, after Black Friday, remake the search infrastructure using the best practices and knowledge available.
2. We will have a more conscious strategy to handle the many sizes of every aspect of our system.
3. We will monitor the generation of systems logs with greater attention, and try to identify anomalies as soon as possible.
4. We will monitor the latency of this service more attentively, while always analyzing the patterns of the most expensive requests, simplifying OMS search features, focusing use on the operation, and abandoning its use as a reporting tool, which is how it is often being used currently. Over time, this will strengthen the capacity of insights over the capabilities of the OMS Admin.
5. We will expand the recovery window of the first wave - from 24 hours to 7 days - so that the system can handle most cases after the first wave.
6. We will create ways for the first wave to be processed faster, enabling greater scalability, in half the time it was processed on Friday.
7. In the medium term (+1 year), we will migrate the search feature to a more homogeneous infrastructure in relation to VTEX systems, in order to have more experts available in crisis situations, should they arise.

This experience has been a lesson for us, and one we intend on gaining the most knowledge from as a result. It is our aim to solve issues as they arise, in all cases and events.

## Accident 2 - Interruption of the orders workflow processing

- __Critical__ classification service.
- Expected recovery time in case of disruption: __10 minutes__.
- Time it took for the service to recover on Friday: __6 hours__.

This accident had more impact on our customers (in general) than the first. For 6 hours, customers’ orders did not move through the workflow, which means they were not sent through the antifraud system and the ERP, and they did not move forward after receiving the shipping notification.

Contrary to what usually occurs, this accident was generated by a few very specific incidents, due to the fact that the servers that implement the orders workflow logic were the same ones that feed the search server.

During accident 1, a regularly-used maneuver caused the shutdown of our farm of servers with the goal of lightening the load in the search servers. As the two services were implemented in the same infrastructure, when one service was disconnected, the other was disconnected as well automatically, without our engineers realizing this had occurred.

All the while, many of our customers began to open tickets complaining that the orders were not reaching the ERP. And then another incident arose: a large customer group was integrating with their ERPs, using the search service instead of using the feeds, which are not dependent on the search.

The first customers to complain were part of the group that uses the search. Our Customer Care team, in order to give space for engineers to work on the problem, told every client that the integration would only work once the search service returned to normal. In a crisis environment like this, communication should be minimal and effective.

In short: throughout the problem, none of the engineers realized that the workflow service was off, and no agents from the Customer Care team asked any of the engineers to re-establish a service that, in principle, is completely decoupled from the search service.

With the connection of these two incidents, many of our customers were hampered in their operations.

In this case, the lessons learned with their respective actions are:
1. We will separate the workflow services from the orders search service and place them on separate servers.
2. We will maintain a strict understanding and dedication to the premise that critical services cannot be stopped. Period.
3. We will encourage Customer Care agents to approach the product team during moments of crisis like this, stressing that the client’s pain equals pain for the entire company. The friction between slightly different agendas, in this case, is healthy and important for balancing priorities during a crisis, and we will surely deal better with it in the future.
4. We will make it a priority to raise awareness on best integration practices for customers, encouraging them to use the integration feed, which is our recommendation for critical missions. (For more information on integration via feed, see our [Integration guide for ERPs - Orders](/en/tutorial/integration-guide-for-erps-orders).

Although Friday’s accident did not affect directly our customers’ sales, it had a negative impact on fulfillment operations. We are aware that we must treat this stage of the sales process as seriously as the acquisition, especially in a scenario where we have clients whose sales grow 100% per year. Every minute counts in fulfillment, and we must always remember this fact. In addition, we are seeing omnichannel grow rapidly among our customers, and express delivery is the great differential factor in this scenario.

Again, we are sorry that we did not reach the level of excellence in our service during this accidents. We hope to compensate for this failure by collecting information on each of the mistakes made and transforming them into significant technology and processes improvements.
