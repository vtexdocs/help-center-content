---
title: 'Adding vendors'
id: 6C7mb1lDhueimseg6yIAki
status: DRAFT
createdAt: 2018-06-22T14:03:43.026Z
updatedAt: 2020-08-03T19:54:34.416Z
publishedAt: 
firstPublishedAt: 2018-06-22T14:25:56.326Z
contentType: trackArticle
productTeam: Shopping
slug: adding-vendors
locale: en
trackId: t3DOYAJjWgqAMeAKq2MWS
trackSlugEN: instore-setup
---

If you have set up your store using the __Easy Setup__ flow you may have already created a vendor to access inStore, but when you want to add new vendors, you will need to do this through the VTable module in VTEX admin.

When you enter VTable (https://{{AccountName}}.myvtex.com/admin/vtable) you will see two applications, __Stores Admin__ and __Vendors Admin__:

![inStore aplicacoes vtable](https://images.ctfassets.net/alneenqid6w5/6BRkoPO2cMOQkYkuSOeCO6/641c901771af479df13a487c123aff23/inStore_aplicacoes_vtable.png)

Click __Vendors Admin__ to open the table where we will add a new vendor.

If you have already registered a seller through __Easy Setup__, just click on __New line__, enter the data of the new vendor, copy the ID of the Store from the line above and click on __Save__, as shown in the video below (click the image below to view):

> __IMPORTANT__: the email of each vendor __CAN'T__ be the same used in VTEX platform, because your admin email has permissions that a salesperson should not have, so it is necessary to use some other email without privileges on the platform.

![inStore adicionando vendedor](https://images.ctfassets.net/alneenqid6w5/3WGuWnOeY8emcmuIqcE0uE/74586856739dcee97163835710a85780/inStore_adicionando_vendedor.png)

If you skipped the vendor creation step in __Easy Setup__ and you don't have any vendors created, you will need to get the __Store__ ID in the __Stores Admin__ in VTable.

After registering the vendor in VTEX admin, he or she will need to log in to your e-commerce to create a password before they can access inStore.

To create a password for this vendor, enter your account's __admin__: https://{{AccountName}}.myvtex.com/admin and then follow this article: https://help.vtex.com/en/faq/how-to-retrieve-the-access-password
__If you try to create the password in the e-commerce website rather than in the admin, inStore login won't work.__

>⚠️ **Important**: besides setting up the vendor in VTable, you must create the user in the Admin, linking him or her to the **inStore Sales Person** access profile.
