---
title: 'What is the Sponsor user'
id: 56Bd0KpwbvAji1aFs94xdA
status: PUBLISHED
createdAt: 2020-01-07T20:45:50.858Z
updatedAt: 2023-01-30T20:40:34.273Z
publishedAt: 2023-01-30T20:40:34.273Z
firstPublishedAt: 2020-01-13T14:33:19.010Z
contentType: trackArticle
productTeam: Identity
slugEN: what-is-the-master-user
locale: en
trackId: 5PxyAgZrtiYlaYZBTlhJ2A
trackSlugEN: contas-e-permissoes
---

For the VTEX platform, the **Sponsor user** is the user who is primarily responsible for the store. She or he is the user with most power to take actions, including critical actions.

By default, the Sponsor user email is the one of the person who was responsible for hiring VTEX. But after receiving the VTEX environment, it can exchanged by the Sponsor user.

<div class = "alert alert-warning">
The Sponsor user is not the same as the <b>Owner (Admin Super)</b>. The <b>Owner (Admin Super)</b> is a License Manager role that defines the permissions of a user in your store. It can even be assigned to multiple users.
</div>

If your user has role to the Account management module, you can verify who is the Sponsor user by accessing the __Accounts__ tab and searching for the name of the store.

By clicking on the desired account name, the Sponsor user's name and email are in the __Contact__ section.

![usuario-master-contato en](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tracks/contas-e-permissoes/what-is-the-master-user_1.png)

Among the actions that only the Sponsor user can take are:
- Reindex the catalog.
- Delete categories, products, SKUs and brands through the [fullcleanup feature](/en/tutorial/understanding-how-to-maintain-a-database).
- Authorize integrations with some marketplaces, such as Mercado Livre.

In addition, when VTEX needs to communicate store-sensitive information, such as changes in roles, such communication is done directly and exclusively with the Sponsor user.
