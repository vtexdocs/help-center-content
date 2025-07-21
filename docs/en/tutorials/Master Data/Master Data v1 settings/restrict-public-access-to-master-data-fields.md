---
title: 'Restrict public access to Master Data fields'
id: 5eu1N1h4Vqe8GY1yHXUsvz
status: PUBLISHED
createdAt: 2024-06-25T12:54:28.672Z
updatedAt: 2024-06-25T13:28:43.112Z
publishedAt: 2024-06-25T13:28:43.112Z
firstPublishedAt: 2024-06-25T13:28:43.112Z
contentType: tutorial
productTeam: Master Data
author: 1malnhMX0vPThsaJaZMYm2
slugEN: restrict-public-access-to-master-data-fields
locale: en
legacySlug: restrict-public-access-to-master-data-fields
subcategoryId: WpbGhubuRZaNZilJSXnqu
---

In [Master Data v1](/en/tutorial/master-data--4otjBnR27u4WUIciQsmkAw), it is possible to [create data entities](/en/tutorial/data-entity--tutorials_1265#creating-data-entities) with different access restrictions for each field:

* Make readable without credentials
* Allow editing without credentials
* Allow filtering without credentials

Depending on the data stored, public access without authentication can pose a risk to your business. To enforce authentication and restrict public access to fields containing sensitive data, follow the instructions below.

1. In the VTEX Admin, go to **Store Settings** > **Storefront** > **Master Data.**
2. In Master Data, click **Applications**.
3. Click the gear <i class="fas fa-cog"></i> next to **Profile System**:

   ![1-master-data-confidential-data-en](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Master%20Data/Master%20Data%20v1%20settings/restrict-public-access-to-master-data-fields_1.png)
4. In **Settings**, click **Data structure**.

   ![2-master-data-confidential-data-en](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Master%20Data/Master%20Data%20v1%20settings/restrict-public-access-to-master-data-fields_2.png)
5. Click the **Data Entities** tab.
6. In the data entity row, click the edit <i class="fas fa-edit"></i> button.

   ![3-master-data-confidential-data-en](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Master%20Data/Master%20Data%20v1%20settings/restrict-public-access-to-master-data-fields_3.png)
7. Click the gear icon <i class="fas fa-cog"></i> in the row of a field that contains confidential data.

   ![4-master-data-confidential-data-en](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Master%20Data/Master%20Data%20v1%20settings/restrict-public-access-to-master-data-fields_4.png)
8. Uncheck the following options:

   * **Make readable without credentials**
   * **Allow editing without credentials**
   * **Allow filtering without credentials**

   ![5-master-data-confidential-data-en](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Master%20Data/Master%20Data%20v1%20settings/restrict-public-access-to-master-data-fields_5.png)
9. Click `Save`.
10. In the row of the changed data entity, click the Publish button <i class="fas fa-save"></i> to publish the saved settings.
11. Click `OK`.

## Required permissions

After following the previous instructions, it is mandatory to have a [role](/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) with the necessary [permissions](/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) to access the following information:

* At least one resource from the **Generic resources** category in the **Master Data** product: **READONLY_USER_CRM**, **POWER_USER_CRM**, **NOREMOVE_USER_CRM**, or **ADMIN_CRM**.
* At least one resource from the **Dynamic storage generic resources** category in the **Dynamic Storage** product:** READONLY_USER_DS**, **NOREMOVE_USER_DS**, **POWER_USER_DS**, or **ADMIN_DS**.
