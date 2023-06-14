---
title: "New events available in the Audit module"
id: 36HT3LaI5wORvV9uaDKCwy
status: PUBLISHED
createdAt: 2023-04-18T20:01:44.458Z
updatedAt: 2023-04-18T20:46:27.347Z
publishedAt: 2023-04-18T20:46:27.347Z
contentType: updates
productTeam: Master Data
author: 2Gy429C47ie3tL9XUEjeFL
slug: new-events-available-in-the-audit-module
legacySlug: new-events-available-in-the-audit-module
announcementImageID: ""
announcementSynopsisEN: Audit is making available new events related to the VTEX ID, License manager, and Pricing modules.
---

[Audit](https://help.vtex.com/en/tutorial/searching-for-events-on-audit--5RXf9WJ5YLFBcS8q8KcxTA) is a module that tracks events happening in your VTEX store, enabling future auditing. VTEX has improved Audit, which now tracks a broader range of events.

## What has changed?

VTEX has added the following events to the [list of events available in Audit](https://help.vtex.com/en/tutorial/eventos-disponiveis-no-audit--6r1Mzcu5NmkmmDLJlz9CCZ):

### VTEX ID

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Action</strong>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Event description</strong>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Event details</strong>
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">PasswordCreated
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Creation of a first-time password in the store or the VTEX Admin
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">User ID.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">PasswordUpdated
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Change of store or VTEX Admin password by the user.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">User ID.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">IdentityProviderChanged
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Identity provider configuration change. For example: Creating a customized OAuth integration and changing information in an existing OAuth configuration.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Identity provider.
   </td>
  </tr>
</table>

### License Manager

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Action</strong>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Event description</strong>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Event details</strong>
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Block AppToken
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Application key blocking.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Application key blocked.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Accept Sponsor Invite
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Accept the invitation to become the sponsor user.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">ID of the user who accepted the invitation.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Save User
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Create a user or change user information.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">User ID.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Save Account
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Create an account or edit account information.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Created or changed account.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Change Role
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Access role editing.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Role edited.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Delete Role
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Deletion of a role.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Role deleted.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Unblock AppToken
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Application key unlocking.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Unblocked application key.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Resource Access Allowed
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Resource access allowed.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Resource key and user ID to which access has been allowed.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Cancel Sponsor Invite
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Cancellation of sponsor user invitation.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">ID of invited user.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Delete User
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Deletion of a user.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">ID of deleted user.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Update Binding
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Binding update.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Binding updated.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Resource Access Denied
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Resource access denied.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Resource key and user ID to which access was denied.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Create New AppToken
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Creation of application key.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Application key created.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Create Sponsor Invite
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Creation of a sponsor user invitation.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">ID of invited user.
   </td>
  </tr>
</table>

### Pricing

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Action</strong>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Event description</strong>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><strong>Event details</strong>
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Fixed Price Modified
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Change of fixed price.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Identification of the fixed price changed.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Put Catalog Step
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Creation or change of a price rule.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Price rule created or changed.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Deleted Fixed Prices From Table
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Deletion of fixed price from the related price table.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Identification of the table and the deleted price.
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Compatibility Post Prices
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Change of price using the compatibility API with the PricingV1 contract
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Identification of the changed price.
   </td>
  </tr>
</table>

<div class = "alert alert-info">
See the <a href="https://help.vtex.com/pt/tutorial/eventos-disponiveis-no-audit--6r1Mzcu5NmkmmDLJlz9CCZ">full list of events available in Audit</a>.
</div>

## What needs to be done?

The Audit change is already active for all accounts, recording the event list mentioned above. No action is required.

