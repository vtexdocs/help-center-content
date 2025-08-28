---
title: 'Trigger in Master Data v2 is not working'
id: 1WvpFuZUQmPrBlrlwX47Qd
status: PUBLISHED
createdAt: 2024-12-10T13:34:36.370Z
updatedAt: 2024-12-10T13:38:54.049Z
publishedAt: 2024-12-10T13:38:54.049Z
firstPublishedAt: 2024-12-10T13:38:54.049Z
contentType: tutorial
productTeam: Master Data
author: 1malnhMX0vPThsaJaZMYm2
slugEN: trigger-in-master-data-v2-is-not-working
legacySlug: trigger-in-master-data-v2-is-not-working
locale: en
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
tags:
  - Master Data v2
  - Trigger
---

When creating a trigger to notify changes to a data entity in Master Data v2, some users may notice that no requests are sent to the configured endpoint, even after configuring the trigger.

This issue may result from an incorrect trigger configuration or problems with permissions and authentication. Follow the instructions in this guide to identify and resolve the issue.

## Solution

Here are a few approaches to address the issue:

* [Double-check the trigger configuration](#double-check-the-trigger-configuration): Ensure the trigger structure and required fields are correct.  
* [Test the endpoint independently](#test-the-endpoint-independently): Check if the endpoint is working properly.  
* [Check permissions and authentication](#review-permissions-and-authentication): Make sure permissions are properly configured.

### Double-check the trigger configuration

Follow the instructions in the guide [Setting up triggers in Master Data v2](https://developers.vtex.com/docs/guides/setting-up-triggers-in-master-data-v2#trigger-example) to review the trigger configuration. Check the following details to avoid mistakes:

* Confirm that the trigger structure in `v-triggers` is accurate and includes the required fields: `name`, `active`, `action`, `type`, `uri`, `method`, `headers`, and `body`.  
* If the trigger is set to make requests to an external API, verify that the endpoint URL (`uri`) is correct and accessible. You can test the URL directly to ensure it is ready to receive POST requests.  
* Check the JSON syntax in the trigger body, as simple syntax errors can cause the trigger to fail silently.  
* If the trigger is associated with a specific entity or operation, make sure these conditions are met.  
* Verify that the data entity exists and is properly configured in Master Data v2. Data entities in Master Data v1 and v2 are independent, so documents created in Master Data v1 cannot be accessed or edited using Master Data v2 resources, and vice versa.  

  To test triggers with Master Data v1 entities, follow the [instructions for setting up triggers in Master Data v1](https://help.vtex.com/en/tutorial/criando-trigger-no-master-data--tutorials_1270).

### Test the endpoint independently

Manually send a request to the endpoint using a tool like **Postman**. This will help ensure that the endpoint is receiving requests correctly and working as expected.

* When making a manual change to the data entity, make sure it fires the trigger as expected.  
* Make sure the `id` field is correctly included in the request body. This will identify the document that initiated the trigger.

### Check permissions and authentication

* Make sure your [credentials](https://help.vtex.com/en/tutorial/chaves-de-aplicacao--2iffYzlvvz4BDMr6WGUtet) have the appropriate [permissions](https://help.vtex.com/en/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) to send requests to the specified endpoint.  
* If the trigger makes a request to an external endpoint, check if no additional authentication or security headers are required for the target endpoint.

If none of these solutions resolve the issue, please contact our [Support](https://help.vtex.com/en/faq/como-funciona-o-suporte-da-vtex--3kACEfni4m8Yxa1vnf2ebe).
