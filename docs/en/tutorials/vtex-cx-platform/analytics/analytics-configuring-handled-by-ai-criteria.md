---
title: "Analytics: Configuring Handled by AI criteria"
createdAt: 2026-11-27T12:00:00.000Z
updatedAt: 2026-11-27T12:00:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: analytics-configuring-handled-by-ai-criteria
locale: en
---

In the **Conversations** section of the **Conversational** dashboard, you can track how many conversations were classified as **Handled by AI** or **Not handled by AI**.

This classification is performed daily, based on criteria that evaluate the service provided by AI agents. In addition to the default criteria, you can set up custom criteria to adapt the evaluation to your operation's needs.

To view and manage the criteria, click the three-dot icon (<i class="fas fa-ellipsis-v" aria-hidden="true"></i>). The **Handled by AI criteria** side panel displays two sections:

- **Base criteria**: applied to all projects. You can't edit or remove them.
- **Your criteria**: applied only to the specific project. You can add, edit, and delete your criteria. The limit is 10 custom criteria.

## Add a criterion

To add a custom criterion, follow the steps below:

1. On the **Handled by AI criteria** screen, click `Add criterion`.
2. Write your criterion in the message field and click `Validate`. (For example: "If the customer's problem can't be resolved virtually, consider that a conversation was handled by AI when the customer has enough information about the correct procedure to follow and/or knows what to do to resolve their problem.")

    > ❗ The AI rejects criteria that are empty, offensive, out of scope, impossible to evaluate from a conversation, or that contradict a base criterion. The panel explains why the criterion was invalidated. Rewrite the criterion and try to validate it again.

3. Once your criterion is validated, click `Save`.

Once saved, this criterion will count toward the **Handled by AI** metric starting from the next daily evaluation. Previous conversations and metrics won't be changed.
