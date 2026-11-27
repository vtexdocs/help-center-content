---
title: 'VTEX Copilot in the VTEX Admin'
createdAt: 2026-10-07T00:00:00.000Z
updatedAt: 2026-10-07T00:00:00.000Z
contentType: tutorial
productTeam: Others
slugEN: vtex-copilot-in-the-vtex-admin
locale: en
---

VTEX Copilot is VTEX's artificial intelligence (AI) assistant available in the VTEX Admin. You ask natural language questions about orders, payments, catalog, promotions, or any other store topic, and Copilot responds based on official VTEX documentation, queries real store data, runs automatic diagnostics, and helps you resolve issues.

In this article, you'll find:

- [What VTEX Copilot does](#what-vtex-copilot-does)
- [How to access](#how-to-access)
- [What you can ask](#what-you-can-ask)
- [Automatic diagnostics](#automatic-diagnostics)
- [How to attach files](#how-to-attach-files)
- [How to make changes to your store safely](#how-to-make-changes-to-your-store-safely)
- [Conversation history](#conversation-history)
- [Best practices](#best-practices)
- [Privacy and security](#privacy-and-security)
- [Frequently asked questions](#frequently-asked-questions)

## What VTEX Copilot does

In practice, VTEX Copilot can:

- **Answer questions** about how VTEX works using official documentation and providing links to the sources.
- **Query your store data**, such as order statuses, product configurations, and promotion rules, based on your access permissions.
- **Run automatic diagnostics** that check multiple areas of your store at once to find the cause of common issues. For example, "Why isn't this product visible in the store?".
- **Make store changes**, such as updating inventory, editing a coupon, or activating a SKU, always explaining the impact and asking for your confirmation before proceeding.
- **Open tickets with VTEX Support** that already include the details discussed in the conversation and any attached files.
- **Provide information about VTEX**, including platform status, recent incidents, and what announcements or release notes mean for your store.

Copilot understands and responds in your language: you can write in Portuguese, Spanish, or English.

## How to access

To open VTEX Copilot, follow the instructions below:

1. On any page of the VTEX Admin, click `Copilot` in the upper right corner. Copilot opens in a side panel, next to the page you're on.
2. Type your question in the **Ask VTEX Copilot...** field.
3. Click `Send`.

![VTEX Copilot home screen in the VTEX Admin](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/suporte/vtex-copilot-no-admin-vtex_1.png)

Since you're already logged in to the VTEX Admin, you don't need to log in again. Copilot uses your account and your permissions. The panel stays open as you navigate, so you can check VTEX Copilot's responses in the VTEX Admin without closing the conversation.

On the home screen, the **Try one of these** section offers ready-made suggestions to get started:

| Suggestion | What Copilot does |
| --- | --- |
| **Why is my order stuck?** | Investigates an order that isn't moving forward and identifies what's blocking it: status, payment, invoicing, and handling. |
| **Why isn't my SKU on the storefront?** | Checks everything that controls a product's visibility (product and SKU status, price, inventory, and sales channel) and indicates what's missing. |
| **Create a promotion or coupon** | Asks what you need to decide (type, discount, affected items, and validity) and shows exactly what will be created before applying it. |
| **Delete customer data (GDPR)** | Deletes a customer's personal data, with a preview for you to review before confirming. |
| **Continue with: _conversation title_** | Appears at the top of suggestions when you've used a conversation in this browser within the last 24 hours, with the date and time of your last access. Reopens this conversation with its full history so you can pick up where you left off. |

## What you can ask

Copilot brings together experts in every area of VTEX. You don't need to choose the expert. Just ask your question, and Copilot routes it to the right area.

| Topic | What Copilot covers | Example question |
| --- | --- | --- |
| **Orders and checkout** | Checking order details, invoicing, cancellation, and tracking, as well as why an order changed or got stuck. | "What is the status of order 1234567890-01?" |
| **Payments** | Transactions, payment methods, payment conditions, gateways, and anti-fraud providers. | "Why was the payment for order 1234567890-01 denied?" |
| **Catalog** | Products, SKUs, categories, brands, images, specifications, and sales channels. | "Why isn't SKU 4521 visible on the site?" |
| **Prices and promotions** | Prices by sales channel and price table, promotions, and coupons. | "Which promotions apply to product 123?" |
| **Inventory and shipping** | Inventory by warehouse, reservations, shipping policies, docks, and pickup points. | "Why isn't there a shipping option for postal code 01310-100?" |
| **Marketplace** | Sellers, active offers, SKU bindings, and affiliates. | "Which sellers offer SKU 4521?" |
| **Search** | Search results, filters, most searched terms, and spell check. | "Why doesn't my product show up when I search for 'sneakers'?" |
| **Master Data** | Search, editing, history, and structure of customer records and other entities. | "Who changed the registration details of customer x@y.com?" |
| **Users and permissions** | Admin users, roles, and permissions. | "What permissions does user x@y.com have?" |
| **Security and privacy** | Security audit, access policies, and data deletion requests (LGPD/GDPR). | "Run a security audit on my account." |
| **Gift cards** | Balance, usage history, and gift card providers. | "What's the balance of gift card X?" |
| **Subscriptions** | Recurring orders, cycles, and failed renewals. | "Why didn't the subscription of customer x@y.com renew?" |
| **B2B** | Organizations, cost centers, buyer roles, and quotes. | "What cost centers does organization X have?" |
| **Message Center** | Templates, triggers, and variables for transactional emails. | "What variables can I use in the order confirmation template?" |
| **Store development** | VTEX IO, Store Framework, FastStore, Headless CMS, and VTEX APIs. | "What endpoint do I use to update the inventory of a SKU?" |
| **Dashboards** | Explanation of the VTEX Admin dashboards, such as Sales Performance and Overview. | "How do I compare a past campaign with today in the dashboard?" |
| **VTEX updates** | Platform status, incidents, and release notes. | "Is VTEX experiencing any incidents right now?" |
| **Documentation** | How-to questions about any VTEX feature. | "How do I create a Buy 3 Pay 2 promotion?" |
| **Tickets** | Opening technical tickets with VTEX Support. | "Open a ticket about this issue." |

![VTEX Copilot responding about the status of an order](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/suporte/vtex-copilot-no-admin-vtex_2.png)

While working, Copilot shows each query it's making in your store and, at the end of the response, reports the account it worked on.

## Automatic diagnostics

In addition to answering questions, Copilot can run diagnostics across multiple areas of your store at once and provide a report that identifies the likely cause of the issue and recommends next steps. Request a diagnostic when something isn't working and you don't know where to start:

| How to ask | What's checked |
| --- | --- |
| "Analyze order 1234567890-01" or "Why is this order stuck?" | The order flow and where it got stuck: payment, invoice, handling, or ERP integration. |
| "Why isn't product 123 visible in the store?" | The full activation chain in the catalog: product, SKU, price, inventory, and indexing. |
| "Why is SKU 4521 unavailable at checkout for postal code 01310-100?" | Price, inventory, and shipping for that SKU and postal code. |
| "Check the go-live of the domain www.minhaloja.com.br" | DNS, CDN, and SSL certificate for the domain. |
| "Are my store issues coming from my customizations?" | Creates a test workspace with only VTEX native apps for you to compare. |
| "My customers are being logged out all the time" (FastStore stores) | The store's login cookie domain. |
| "What's my store's architecture?" | The store technology (Store Framework, FastStore, Legacy, or headless) and the account edition. |
| "Run a security audit" | Store security settings, such as reCAPTCHA against bots and card testing attacks, with recommended values. |

The report lists each item checked with its respective result and indicates which one is causing the problem. At the end, Copilot suggests what to change and can apply the fix for you, after your confirmation. See [How to make changes to your store safely](#how-to-make-changes-to-your-store-safely).

For diagnostics and more complex questions, Copilot may take a little longer to respond because it needs to check multiple pieces of information.

## How to attach files

You can upload images and documents for Copilot to analyze along with your question, such as an error screenshot, a spreadsheet exported as a PDF, or a transaction receipt.

To attach files, follow the instructions below:

1. Click `Attach files`, next to the message field.
2. Select the files. Supported file types are **JPG, PNG, WEBP, GIF, and PDF**, up to **4.3 MB** each.
3. Type your question and send it.

Copilot reads the files during the investigation and can attach them to a VTEX Support ticket, if needed.

![Attaching a file in VTEX Copilot](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/suporte/vtex-copilot-no-admin-vtex_3.png)

## How to make changes to your store safely

Sometimes, resolving an issue requires changes to your store, such as updating a price, activating a SKU, or adjusting a setting. For any action that modifies the store, Copilot follows these rules:

1. **Explains the impact first:** What will change and what it means for the store in production.
2. **Provides instructions for manual changes:** If you prefer, you can make the change yourself in the VTEX Admin or via API by following Copilot's instructions.
3. **Asks for your confirmation:** Before changing any value, Copilot asks for your approval unless you've already authorized the change in your message. For example: "Fix the inventory of SKU 4521 in the main warehouse to 10 units".
4. **Acts on your behalf:** The change is logged under your name, just as if you had made it in the VTEX Admin.

![VTEX Copilot asking for confirmation before changing the store](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/suporte/vtex-copilot-no-admin-vtex_4.png)

If you want to keep the confirmation step, describe the problem and ask what to do, instead of directly requesting the fix.

> ⚠️ This action can't be undone. To revert a change, ask Copilot to restore the previous value or edit the value in the VTEX Admin. So always review the account, the affected items, and the values before confirming. If you're unsure, ask Copilot for the instructions instead of applying the change.

## Conversation history

Copilot saves your conversations so you can pick up where you left off.

- To view previous conversations, click the clock icon at the top of the panel to open **Chat history**. Conversations are grouped by date, and you can search for a specific conversation in **Search conversations…**.
- To start a new topic, click the `+` icon (`New chat`) at the top of the panel.

![VTEX Copilot conversation history](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/suporte/vtex-copilot-no-admin-vtex_5.png)

Copilot retains recent context within a conversation. You can ask follow-up questions, such as "What about the second SKU?" after receiving a relevant response.

## Best practices

Specific questions get better, faster answers. Follow the recommendations below to write good questions:

- **Provide all the context in a single message.** Describe what happened, when the issue started, what you've already tried, and any relevant IDs instead of splitting the information across several short messages.
- **Focus on one topic per conversation.** An order that's stuck and a product that isn't displayed in the store are separate issues. Click `+` to open a new chat for each one.
- **Include relevant details whenever possible.** Order numbers, product or SKU IDs, promotion names, postal codes, and customer email addresses help Copilot identify the issue more quickly.
- **Describe what you expected and what actually happened.** This helps Copilot compare the expected and actual behavior.
- **Use area-specific terms.** They help Copilot route your question to the right expert. For example, say "checkout error" instead of "error when placing the order".
- **Feel free to ask "how do I..." questions.** Copilot answers based on official VTEX documentation and provides links to the relevant sources.

Below are examples of helpful and unhelpful questions:

| Avoid ❌ | Prefer ✅ |
| --- | --- |
| "The order has a problem", then "it's order 1234567890-01", and then "since yesterday", in three messages | "Order 1234567890-01 has been in 'Ready for handling' since yesterday. Payment was approved and inventory is available. What's blocking it?" |
| "The promotion isn't working" | "The promotion 'BLACKFRIDAY10' should give a 10% discount on the total cart value, but at checkout the discount shows as zero." |

> ℹ️ Like all AI, Copilot can make mistakes. Before acting on a response, check which account Copilot accessed, what exactly it's proposing, and whether the feature it mentions actually exists. If you're unsure, ask Copilot to explain its reasoning or provide the source.

## Privacy and security

Copilot follows these rules to protect your access, your conversations, and store changes:

- **Your login, your permissions.** Copilot uses your VTEX Admin session and never a shared credential. It only views and changes what you can view and change. If you don't have access to the Payments module, Copilot doesn't either. That's why two users on the same account may receive different responses to the same question.
- **No extra access.** Copilot doesn't grant access you don't already have. Asking it to bypass a permission doesn't work.
- **Private conversations.** Your conversations with Copilot in the VTEX Admin are visible only to you.
- **Confirmation before changes.** Nothing is changed in your store without your request or confirmation.
- **Traceability.** Each change is logged under the name of the user who requested it, just as in the VTEX Admin.

## Frequently asked questions

See the answers to the most common questions about using Copilot:

**Copilot said I don't have permission. What should I do?**
Copilot inherits your user permissions. Ask your account administrator to review your [role](/en/docs/tutorials/roles) in the VTEX Admin.

**Does Copilot change the store without asking me?**
No. If you only ask for information, Copilot just answers. Any change requires your confirmation, unless you've already explicitly requested the change in your message.

**What language does Copilot respond in?**
In the language you write in: Portuguese, Spanish, or English. To change the language, ask explicitly, for example: "answer in Spanish from now on".

**Copilot stopped responding halfway through. What should I do?**
Send a new message asking it to continue, such as "Continue the previous analysis". Your conversation history is preserved.

**Copilot asked me to log in again or said I don't have access to the conversation. What should I do?**
Copilot uses your VTEX Admin session. Log out of the VTEX Admin, log back in, and open Copilot again.

**Can I use Copilot on more than one account?**
Yes. Copilot works in the VTEX Admin account where you're logged in. To use Copilot in another account, go to that account's VTEX Admin. If Copilot has trouble opening a ticket from a subaccount, such as a franchise account, access the main account's VTEX Admin and open the ticket there, specifying which subaccount is experiencing the issue.
