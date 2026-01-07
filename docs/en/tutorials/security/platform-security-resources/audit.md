---
title: 'Audit'
id: 5RXf9WJ5YLFBcS8q8KcxTA
status: PUBLISHED
createdAt: 2021-10-21T16:51:06.108Z
updatedAt: 2025-04-25T19:20:49.628Z
publishedAt: 2025-04-25T19:20:49.628Z
firstPublishedAt: 2021-10-21T21:55:42.939Z
contentType: tutorial
productTeam: Others
author: 1malnhMX0vPThsaJaZMYm2
slugEN: audit
legacySlug: searching-for-events-on-audit
locale: en
subcategoryId: 2TNXiKzLZOPxjMTyGiEeJu
---

To increase transparency and trust among your store admin users, VTEX records different operations, their authors and timestamps in **Audit**, a module used to query and investigate this history through filters.

To access the Audit page in the VTEX Admin, go to **Apps > Installed Apps > Audit**, or type **Audit** in the search bar. On this page, you can do the following:

* [Query events in Audit](#querying-events-in-audit)
* [View the last queries in Audit](#viewing-the-last-queries-in-audit)

> ℹ️ To view Audit events, you must have a [role](/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) associated with the *Insights Metrics*  [resource](/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3).

![audit-ui-en (1)](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/security/platform-security-resources/audit_1.png)

## Querying events in Audit

Audit allows you to query events using filters related to the following information: application, date, action, author, and event details. Below, we explain how to use Audit [filters](#filters) and how the [results](#results) are displayed. We also use practical [examples](#query-examples) to demonstrate the use of filters.

### Filters

Follow the instructions to search for an event using the filters available in Audit:

1. In the VTEX Admin, go to **Apps > Installed Apps > Audit**, or type _Audit_ in the search bar. You will be redirected to the **Audit Events** tab.
2. In the **Application** menu under **Filters**, select the application related to the query.
3. In the **Date** menu, choose a predefined date for the query. If you prefer to set the exact date range for the query, select the **Custom** option and choose the **Start** and **End** dates for the query.

   > ℹ️ Only records from the last 3 months are stored.

4. If you wish, add a filter by Action. To do this, in the field next to `Action` **must be**, type the name of the action and press `Enter`. You can enter more than one value by pressing `Enter` after each selection. Check the name of each action in [Events available in Audit](/en/tutorial/events-available-in-audit--6r1Mzcu5NmkmmDLJlz9CCZ).
5. If necessary, you can add specific filters to search for events more accurately. To do this, click the `Add Filter` button.
5. Select the filter parameter (_Author_ or _Event Details_) and enter the value to which the parameter should be compared.

    When adding filters with the same parameter (for example: `Action = Change Promotion Configuration` or `Change Coupon Configuration`), the results include events that match any of the values entered. When adding filters with different parameters (for example: `Action = Change Coupon Configuration` and `Author = email@mail.com`), the criteria are combined. Note that you can repeat steps 4 and 5 to add more filters.

    For example, the query in the image below returns results for `Change Promotion Configuration` or `Change Coupon Configuration` actions whose author is `email@mail.com`.

    ![filtros-en (1)](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/security/platform-security-resources/audit_2.png)

7. Click the `Apply` button to obtain the events found.

    Check the [Results](#results) section to see how the events are displayed.

> ⚠️ The query results correspond exactly to the content entered in the filter field. To avoid unexpected results, make sure you haven't typed extra spaces in the query terms.

If you wish, you can share a query with another user. To do this, click `Share Query` in the top right-hand corner of the page. The link to the Audit search will be copied to your clipboard.

### Results

The **Results** section lists all events found in the query and displays information about each event, as shown in the table below.

| Column | Description |
|---|---|
| __Copy__ | Button to copy the event information displayed in the table to the clipboard. |
| __Event Time__ | Date and time of the event, displayed in the browser or operating system timezone. |
| __Action__ | Action performed in the selected application for the query. Check the possible actions in the [list of events available in Audit](/en/tutorial/events-available-in-audit--6r1Mzcu5NmkmmDLJlz9CCZ). |
| __Event Details__ | Additional information about the event. Check the details displayed for each event in the [list of events available in Audit](/en/tutorial/events-available-in-audit--6r1Mzcu5NmkmmDLJlz9CCZ). |
| __Author__ | Email, ID, or token of the user who performed the event. |
| __More Details__ | Button that opens a modal with more information about the event, when applicable. The details displayed may include: <ul><li class="t-body mb5 lh-copy">**Entity name:** The ID of the entity that was changed.</li><li class="t-body mb5 lh-copy">**Entity before action:** dInformation about the entity before the event, in [JSON](http://www.json.org/) format.</li><li class="t-body mb5 lh-copy">**Entity after action:** Information about the entity after the event, in [JSON](http://www.json.org/) format.</li></ul>Depending on the event, not all the information above is displayed. For example, an event that deleted information only displays the entity before the action. In contrast, an event that added information only displays the entity after the action. <br /><br /> Some events have no additional information. In such cases, the modal is left blank. |

### Exporting results

In addition to viewing the list of events and their information, you can also export these results and share them with others. 
When performing a query, after applying the filters, the <i class="fas fa-arrow-down" aria-hidden="true"></i> `Export to CSV` button will be enabled.

Click <i class="fas fa-arrow-down" aria-hidden="true"></i> `Export to CSV` to send the file with the events. The email will be sent to the address currently being used in the VTEX Admin.

>ℹ️ The exported file may take around 20 minutes to deliver via email.

See the example of the file that will be exported: 

```csv
app,source.application,source.author,source.entityName,source.eventTime,source.workflow,table,time
checkout,checkout,john.doe@example.com,Order,2025-10-28T21:01:01.165Z,order-processing,orders,2025-10-28T21:01:01.166Z
inventory,inventory,jane.smith@example.com,Product,2025-10-28T21:01:01.166Z,inventory-management,products,2025-10-28T21:01:01.166Z
catalog,catalog,admin@example.com,Category,2025-10-28T21:01:01.166Z,catalog-update,categories,2025-10-28T21:01:01.166Z
pricing,pricing,pricing-bot@example.com,Price,2025-10-28T21:01:01.167Z,,,2025-10-28T21:01:01.167Z

```

>ℹ️ Only one event export is performed at a time. You must wait until you receive the email with the CSV file to perform a new event export.

### Query examples

Below, we've listed some common query scenarios to illustrate how filters should be arranged depending on what you want to query.

#### Product activation

To query if a product was activated in the Catalog on a given date:

1. Select the desired date.
2. In the **Application** menu, select _Catalog (Admin)_.
3. Add a filter whose **Action** must be `Product Activation`.
4. Add a filter whose **Event Details** must be equal to `activated product ID "X"`, where `X` must be replaced by the ID of the product queried.

#### Price change

To query whether the price of an SKU changed on a given date:

1. Select the desired date.
2. In the **Application** menu, select _Prices_.
3. Add a filter whose **Action** must be `Put Price`.
4. Add a filter whose **Event Details** must be the SKU ID of the item queried.

> ℹ️  To identify whether the price change was made through the import of a fixed price list, check the Author column in the search results. If the **author** is `vtex-service::pricing-wrk::Stable`, it means the price was updated through an imported spreadsheet. If the author is a user’s email address, the change was made manually. 

#### Warehouse deletion

To query whether a warehouse was deleted on a given date:

1. Select the desired date.
2. In the **Application** menu, select _Inventory & Shipping_.
3. Add a filter whose **Action** must be `Warehouse Delete`.
4. Add a filter whose **Event Details** must be the ID of the item queried.

#### Carrier deletion

To query whether a carrier was deleted on a given date:

1. Select the desired date.
2. In the **Application** menu, select _Inventory & Shipping_.
3. Add a filter whose **Action** must be `Carrier Delete`.
4. Add a filter whose **Event Details** must be the ID of the carrier queried.

## Viewing the last queries in Audit

Every query made in Audit is saved in the **Last queries** tab. To redo a query in this tab, click the  button corresponding to the query you want to redo.

See below the information available in this tab:

| Column | Description |
|---|---|
| Queried on | Date and time the query was made in Audit. |
| Application | VTEX application in which the events were queried. |
| Terms | Filters applied to the query. |
| Period | Start and end date of the period selected for the query. |
| Redo Query | Button to redo the query. |

> ⚠️ The **Last queries** tab only saves up to 50 queries. If you want to save a query beyond this limit, add it to your browser favorites.
