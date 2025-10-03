---
title: 'How to Create an SMS Channel - For Developers (RapidPro)'
id: 3vQxJJOAjRC2eizkGZ4mix
status: PUBLISHED
createdAt: 2025-09-15T14:10:36.156Z
updatedAt: 2025-10-03T14:20:33.769Z
publishedAt: 2025-10-03T14:20:33.769Z
firstPublishedAt: 2025-10-03T14:20:33.769Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: how-to-create-an-sms-channel-for-developers-rapidpro
legacySlug: how-to-create-an-sms-channel-for-developers-rapidpro
locale: en
subcategoryId: 7e9LaCixVcvflzgWkxlftd
---

The RapidPro platform allows organizations to visually build scalable interactive messaging applications and is a hosted service for setting up SMS channel configurations.

To learn more, visit the project site at <http://rapidpro.github.io/rapidpro>. Dozens of channels are supported in collaboration with SMS companies and social networks that communicate in different ways within the platform. SMS integration can be done in three main ways:

- Using the RapidPro Integrated Channel
- Using a REST API (External API)
- Using SMSC Connection (Kannel)

1. **RapidPro Integrated Channel**

This is the fastest way to integrate the SMS channel into the platform, as it has built\-in functionality to send and receive messages to external services available to all workspaces. There are two parts to this integration:

**Outgoing Messages**

When an outgoing message needs to be sent, it will make a POST to this URL with the parameters 'text', 'to', 'from', 'channel', and 'id'. Example:

POST <https://google.com.br> Content\-Type: application/json Body: {""id"": 1241244, ""text"": ""Love is patient. Love is kind."", ""to"": ""\+250788123123"", ""to\_no\_plus"": ""250788123123"", ""from"": ""\+5582999489287"", ""from\_no\_plus"": ""5582999489287"", ""channel"": 346}

**Incoming Messages**

When a new message is received by your service, it should notify us with a POST to the following URL, passing the following parameters: 'from' and 'text'. Optionally, callers can also send a 'date' parameter in ISO\-8601 format (e.g., 2012\-04\-23T18:25:43\.511Z) to specify the time the message was received. Example:

POST [https://rapidpro.ilhasoft.mobi/c/ex/a86f686f\-9168\-4dd9\-a03e\-77f11b265b56/receive](https://rapidpro.ilhasoft.mobi/c/ex/a86f686f-9168-4dd9-a03e-77f11b265b56/receive) from\=%2B250788123123\&text\=Love\+is\+patient.\+Love\+is\+kind.\&date\=2012\-04\-23T18:25:43\.511Z

1. **REST API (External API)**

The platform easily connects to many channels using an HTTP API, which is available to all workspaces to add channels of the same aggregator. The SMS Aggregator needs to provide the following information for integration:

- Full documentation of its Public API, including authentication methods, input parameters, and output format for each endpoint;
- A test phone number provided by the aggregator;
- Access to a test account in the aggregator console to allow developers to validate the integration during development;
- Contact details of the SMS Aggregator's support team to resolve any integration issues.

1. **SMSC Connection (Kannel)**

In the case of an SMSC connection, it is necessary to connect to a Virtual Private Network (VPN) due to security concerns, and Weni guides this process to help clients make these connections securely. Many protocols can be integrated, such as SMPP, UCP/EMI, and CIMD3, depending on what the SMS aggregator provides for third\-party integration. The first step to integrate depends on the SMS aggregator, so the following items are required:

- Documentation: the necessary documentation to connect to the aggregator VPN, send and receive messages through its services;
- Virtual Private Network (VPN) form: typically, the SMS aggregator has a form that requires information from the company that wants to communicate with its services via a VPN connection.
- SMSC Credentials: Weni needs a username, password, port, and any other information necessary to send and receive messages for the aggregator.

Once the above items are completed, Weni connects to the VPN and notifies the aggregator to route incoming messages to Weni's server, and the testing phase begins. During these phases, it is necessary to directly contact Weni team members, so the following contacts can be used:

Email: suporte@weni.ai
