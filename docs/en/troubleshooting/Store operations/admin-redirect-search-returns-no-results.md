---
title: 'Admin redirect search returns no results'
id: 2u5cJhUSVM6bbEAFkgUww7
status: PUBLISHED
createdAt: 2024-07-24T13:41:02.016Z
updatedAt: 2024-11-08T19:06:54.349Z
publishedAt: 2024-11-08T19:06:54.349Z
firstPublishedAt: 2024-07-24T14:13:11.586Z
contentType: tutorial
productTeam: Others
author: 4ubliktPJIsvyl1hq91RdK
slugEN: admin-redirect-search-returns-no-results
locale: en
legacySlug: admin-redirect-search-returns-no-results
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
tags:  Redirects
---

When the number of redirects is too high, the Redirects page in the Admin can't process the search. This results in no returned results when the search is run. For more details on the Redirects page, see [Managing URL redirects by binding](https://help.vtex.com/en/tutorial/managing-redirects-per-binding--67GAK2TCQgjvmtPXxAqREb).

## Solution

Follow these steps to get the redirects:

1. Access **GraphQL IDE** through the page `{account_name}.myvtex.com/admin/graphql-ide`. Replace `{account_name}` with the name of your VTEX account.
2. Select the `vtex.rewriter@x` app, where `x` is the app version. For example: `vtex.rewriter@1.62.0`.
3. Use the following GraphQL query to list the store's redirects:

  ```
  query {
    redirect{
      listRedirects{
        routes{
          from
          to
          endDate
          type
          binding
        }
      }
    }
  }
  ```

  The expected result will be displayed in the following format:

  ```json
  {
    "data": {
      "redirect": {
        "listRedirects": {
          "routes": [
            {
              "from": "/hello",
              "to": "hola",
              "endDate": null,
              "type": "PERMANENT",
              "binding": "56bc9434-7b8a-4ab1-a693-36271595a27d"
            },
            {
              "from": "/v/*",
              "to": "https://masrefacciones.backend.verbolia.com",
              "endDate": null,
              "type": "PERMANENT",
              "binding": "56bc9434-7b8a-4ab1-a693-36271595a27d"
            }
          ]
        }
      }
    }
  }
  ```

4. Alternatively, if the redirect path you want to find is known, use the following GraphQL query replacing `/hello` with the path of the desired redirect:

  ```
  query {
    redirect{
      get(path:"/hello"){
        from
        to
        endDate
        type
        binding
      }
    }
  }
  ```

  The expected result will be displayed in the following format:

  ```json
  {
    "data": {
      "redirect": {
        "get": {
          "from": "/hello",
          "to": "hola",
          "endDate": null,
          "type": "PERMANENT",
          "binding": "56bc9434-7b8a-4ab1-a693-36271595a27d"
        }
      }
    }
  }
  ```

If the current redirects are not what's expected, the Rewriter app allows you to perform other operations with redirects, such as deleting existing ones and creating new ones. For details on these operations, see the [Rewriter GraphQL API](https://developers.vtex.com/docs/apps/vtex.rewriter/rewriter-graphql-api) guide.

You can also export and import redirects with `.csv files` using the Redirects page or the VTEX IO CLI `redirects` [plugin](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-plugins). For details on importing and exporting redirects, see [Managing URL redirects by binding](https://help.vtex.com/en/tutorial/managing-redirects-per-binding--67GAK2TCQgjvmtPXxAqREb#importing-and-exporting-redirects) and the [VTEX IO CLI command reference](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-command-reference#redirects-delete).