---
title: 'Best practices for secure user management'
id: 15YDwC9jGgqWi3rvcDaiGM
status: PUBLISHED
createdAt: 2019-09-13T18:00:13.670Z
updatedAt: 2021-12-10T02:40:08.930Z
publishedAt: 2021-12-10T02:40:08.930Z
firstPublishedAt: 2019-09-14T02:54:29.210Z
contentType: frequentlyAskedQuestion
productTeam: Identity
author: 1E4UkWguFZAXjkguvNHPIv
slug: best-practices-for-secure-user-management
legacySlug: metodos-de-seguranca-para-criacao-de-perfis-de-usuarios-em-uma-loja
---

Granting store access to various users can have several benefits. It is extremely important, however, to carefully manage user permissions. Poorly managing store access permissions can have deleterious consequences for your operation.

Untrained or malicious users with permission to access critical services can cause irreparable loss of data, upheaval in business rules, integrations disruption, template breakdowns and other harmful effects that will ultimately impact your sales.

To avoid this, we're put together several suggestions and best practices for managing users, aimed at helping you protect your store. By following these tips your store is kept even safer.

## Frequently review all user permissions

It's recommended to periodically review platform [roles](https://help.vtex.com/en/tutorial/access-profiles--7HKK5Uau2H6wxE1rH5oRbc). Market practices suggest __at least one annual review__. Nevertheless, it can be done more often. Some companies, for example, review internal users on a semi-annual basis. 

## Use corporate login to simplify user management

Using [corporate login (SSO)](https://developers.vtex.com/docs/login-integration-guide) for authentication purposes tends to make it easier to commission and decommission users in processes related to employee hiring and dismissal.

## Restrict use of the Super Admin role

Do not grant the [Super Admin role](https://help.vtex.com/en/tutorial/access-profiles--7HKK5Uau2H6wxE1rH5oRbc#creating-an-access-profile) to a large number of users. This role can make critical changes to the store. It is important to restrict the number of users who can grant or withdraw authorizations. 

For each user, adopt the principle of “lowest permission required”, avoiding a large number of users with too many privileges.

## Use corporate e-mail addresses whenever possible

Do not register personal emails from generic domains on the store (@gmail or @hotmail, for example). Opt for corporate emails. There is more control over these domains, and they are subject to company authentication policies, therefore are more secure.

## Keep the Sponsor user assigned to your security officer

Assign the [Sponsor user](https://help.vtex.com/en/tutorial/what-is-the-master-user--3oPr7YuIkEYqUGmEqIMSEy) only to someone whose real role is to constantly check user changes and creation. In addition,  make sure this check actually gets done.

## Activate 2FA when using Google to sign-in

Offering the option of Google sign-in will be much more secure if two-factor authentication is required. Avoid allowing this type of access without 2FA. See the documentation for instructions on [enabling two-factor authentication (2FA)](https://help.vtex.com/en/tracks/accounts-and-permissions--5PxyAgZrtiYlaYZBTlhJ2A/1ccQYubR9DvRJ08RgO8JW8).

