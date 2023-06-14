---
title: "The SAML solution doesn't allow sending the SAMLRequest as query string in the CRM login"
id: 55LggncuX9oIB0PNS6q7jY
status: PUBLISHED
createdAt: 2023-04-13T14:23:33.505Z
updatedAt: 2023-04-13T14:23:34.141Z
publishedAt: 2023-04-13T14:23:34.141Z
firstPublishedAt: 2023-04-13T14:23:34.141Z
contentType: knownIssue
productTeam: Identity
author: 2mXZkbi0oi061KicTExNjo
tag: Identity
slug: the-saml-solution-doesnt-allow-sending-the-samlrequest-as-query-string-in-the-crm-login
kiStatus: Backlog
internalReference: 789146
---

## Summary


Some SAML providers need to receive parameters as query string, but our SAML solution doesn't allow sending these parameters (as SAMLRequest and SAMLResponse parameters) as query string in the CRM login because the CRM system uses a version of the login system, which does not support this feature.


##

## Simulation


Click on Master Data/CRM in the menu option.
The system will show the login option again.
The user selects SAML login as SSO AZURE.
An error message is shown informing the SAMLRequest parameter is necessary.


##

## Workaround


The user needs to select another kind of authentication, such as login and password or access code.





