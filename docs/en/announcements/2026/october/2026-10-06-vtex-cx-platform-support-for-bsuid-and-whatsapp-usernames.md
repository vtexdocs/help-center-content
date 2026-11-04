---
title: 'VTEX CX Platform: BSUID and WhatsApp username support'
createdAt: 2026-10-06T12:00:00.000Z
updatedAt: 2026-10-06T12:00:00.000Z
contentType: updates
productTeam: VTEX CX Platform
slugEN: 2026-10-06-vtex-cx-platform-support-for-bsuid-and-whatsapp-usernames
locale: en
announcementSynopsisEN: 'VTEX CX Platform now identifies WhatsApp contacts by BSUID, keeping conversations and automations active even without a phone number.'
tags:
  - New feature
  - Admin
  - VTEX CX Platform
---

VTEX CX Platform now identifies WhatsApp contacts by their Business Scoped User ID (BSUID), WhatsApp identifier unique to each user within a business. This means your conversations and automations keep working even when a contact hasn't shared their phone number.

## What has changed?

Previously, the phone number was the only identifier for a WhatsApp contact in the VTEX CX Platform. If the contact didn't share their number, you couldn't receive their messages or send templates to them.

Now, the platform automatically resolves the available identifier in each conversation:

- **If the contact has a phone number:** Everything works as before.
- **If the contact only has a BSUID:** You'll keep receiving their messages and can send templates normally, without any additional configuration.

The contact's BSUID is displayed on the contact details page, alongside the other profile information. You can also:

- **Request phone number:** Agents can invite the contact to voluntarily share their phone number through a native WhatsApp component. The contact can choose whether to share their number.
- **Segment contacts without a phone number:** When creating a group in **Contacts**, select the **WhatsApp contacts without a phone number** option to generate a smart group with all contacts that have a BSUID and don't have a phone number. This way, you can track this audience specifically.

## Why did we make this change?

WhatsApp is evolving its privacy model, and users will be able to interact with businesses using a username without exposing their phone number. This means the number is no longer a reliable identifier. To keep your notifications running smoothly when this model takes effect, we've developed BSUID support in VTEX CX Platform. The main benefits are:

- **Uninterrupted communication:** Incoming conversations and template messaging continue to work for all contacts, regardless of which identifier is available.
- **Early preparation:** Your store is already ready for WhatsApp identity changes, without having to wait for a future platform update.
- **Compliant profile enrichment:** You can request the contact's phone number via a native WhatsApp component, respecting their choice.
- **Preserved automations:** BSUID support is integrated into the same identification layer used by native WhatsApp automations, such as abandoned cart, Pix recovery (Brazil), and order status.

## What needs to be done?

No action is needed. VTEX CX Platform identifies contacts automatically, so you don't need to choose between phone number and BSUID.

If you use external systems that rely exclusively on the phone number as the contact identifier, such as CRMs, custom integrations, BI pipelines, or segmentation rules, we recommend planning to update these systems to also accept the BSUID.

> ⚠️ Interaction using only the BSUID depends on Meta making usernames available to WhatsApp end users. Meta hasn't announced a timeline for this release yet. So far, the behavior has been validated in simulated scenarios, and no changes to the current WhatsApp channel experience are expected.

To learn more about the WhatsApp channel, see the article [WhatsApp: Integration with VTEX CX Platform](https://help.vtex.com/docs/tutorials/whatsapp-vtex-cx-platform-integration).
