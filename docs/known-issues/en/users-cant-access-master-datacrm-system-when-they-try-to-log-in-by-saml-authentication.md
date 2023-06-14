---
title: "Users can't access Master Data/CRM system when they try to log in by SAML authentication"
id: 152NR7uX8iEUnKWu9gFR7h
status: PUBLISHED
createdAt: 2023-04-13T14:29:02.684Z
updatedAt: 2023-04-13T14:29:03.148Z
publishedAt: 2023-04-13T14:29:03.148Z
firstPublishedAt: 2023-04-13T14:29:03.148Z
contentType: knownIssue
productTeam: Identity
author: 2mXZkbi0oi061KicTExNjo
tag: Identity
slug: users-cant-access-master-datacrm-system-when-they-try-to-log-in-by-saml-authentication
kiStatus: Backlog
internalReference: 465652
---

## Summary


The user can't access Master Data/CRM system via SAML authentication
Master Data/CRM system uses another domain (vtexcrm.com.br) and the SAML solution was projected to redirect to myvtex.com domain.



##

## Simulation


Accessing the admin using SAML authentication
Click on Master Data/CRM in the menu option.
The system will show the login option again.
The user selects the SAML login
After confirming the SAML login, the system will try to access the CRM system but
the login option is shown again


##

## Workaround


The user needs to select another authentication type, like login and password or access code.





