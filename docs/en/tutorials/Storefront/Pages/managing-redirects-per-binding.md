---
title: 'Managing URL redirects per binding'
id: 67GAK2TCQgjvmtPXxAqREb
status: PUBLISHED
createdAt: 2021-04-20T15:03:54.330Z
updatedAt: 2023-09-04T12:42:32.729Z
publishedAt: 2023-09-04T12:42:32.729Z
firstPublishedAt: 2021-05-05T18:11:25.521Z
contentType: tutorial
productTeam: VTEX IO
author: 6AcGyun1hSWewU8YcaQiO
slugEN: managing-redirects-per-binding
locale: en
legacySlug: managing-redirects-per-binding
subcategoryId: 1znnjA17XqaUNdNFr42PW5
---

Redirects are a tool to forward both users and search engines to a more relevant or similar live URL different from those they initially requested.

Multi-domain stores commonly ask for redirect management per [binding](https://help.vtex.com/en/tutorial/what-is-binding--4NcN3NJd0IeYccgWCI8O2W) due to the complexity presented by the several URLs available simultaneously. 

Taking this into consideration, VTEX enables you to manage your URL redirects according to the store bindings through the admin interface.

>⚠️ To create, edit, or remove redirects, the Admin user must have a role that has the [License Manager](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) **CMS Settings** resource. You can grant the user a role with the resource by following the instructions in the [How to manage users](https://help.vtex.com/en/tutorial/managing-users--tutorials_512#editing-users) article or create a new role including the resource by following the instructions in the [Roles](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) article.

In VTEX Admin:

1. Access **Storefront > Pages**.
2. Click on the `Redirects` tab.

![en-redirecttab](https://images.ctfassets.net/alneenqid6w5/7G20PhFKWBFNKmvN2T8MFo/4b88bd44abc30aa3af4e0f9ca8557e3e/new-redirect.png)

## Manually creating redirects

1. Click on the `New Redirect` button.
2. In the `Binding` field, use the dropdown menu to select the desired binding.
3. Use the `From` and `To` fields to define the former URL and the new one to which users and search engines will be redirected.
4. Check whether your redirect will be permanent or temporary — in case it is temporary, you can toggle the `This redirect has an end date` button to set an end date for it. 
5. Save your changes.

![en-novoredirect](//images.ctfassets.net/alneenqid6w5/4CdPssJV4wAfbvr0ZB2ugi/2d3efd147908ec9e1da471403cba2cf9/redirect-novo.png)

## Manually deleting redirects

1. Click on the desired redirect to be deleted.
2. Click on the `Remove` button.
3. Confirm your action. 

![en-remove-redirect](//images.ctfassets.net/alneenqid6w5/4Ki1noxgrPgStT4wZGbrCk/7de9c0c5b3a4b9c734657c96ae20cccf/remove-redirect.png)

>⚠️ A bug may be found when trying to click on redirects with query strings. The VTEX product team is already aware of this unexpected behavior and working on the fix. If you cannot click on the desired redirect to delete it, opt to do it through the spreadsheet while the issue is not resolved.

## Importing and exporting redirects

To manage your store's redirects in bulk, you can import and export a redirect spreadsheet. 

>⚠️ The spreadsheet's inputs will be mandatorily created or deleted from the store's redirect list — it is not possible to create <i>and</i> delete redirects using the same spreadsheet. Before filling out and uploading yours to the admin, keep in mind your final goal with it.

1. Click on the `Import` button and then on `Download Template`. Click on the `Export` button if you aim to download and modify the pre-saved redirect list. 
2. Open the spreadsheet template once the download is done and fill out the cells in the suitable columns according to the table below:

  | Column     | Expected value    |
| ---------- | ----------------- |
| `from`     | Former URL no longer useful to users and search engines. |
| `to`       | New URL to which users and search engines will be redirected to. |
| `type`     | Whether the redirect will be permanent or temporary, i.e., have an end date. |
| `binding`  | Binding to which the redirect will be applied. Caution: this column's cells must be filled out with the desired [binding IDs](https://developers.vtex.com/vtex-developer-docs/docs/checking-your-stores-binding-id). |
| `endDate`  | End date for the redirect following the UTC format. Notice that this column's cells should only be filled out when the redirect type is set as temporary. |

3. Save your spreadsheet once satisfied with the changes performed. 
4. Click on the `Import` button.
5. Check the `Save` or the `Delete` button according to your scenario.

  ![en-redirect-planilha](//images.ctfassets.net/alneenqid6w5/1LA0kpUcu5NhfUgWWhkjea/b83ae63b44fa2367877b00daf47467c7/redirect-planilha.png)

  >⚠️ By clicking on the `Save` button, you will create all the redirects listed in your spreadsheet, whereas clicking on the `Delete` button will remove all of them from your store's redirect database.

6. Upload the spreadsheet from your local files.
7. Click on the `Import file` button.
