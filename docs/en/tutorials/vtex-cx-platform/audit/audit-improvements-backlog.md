---
title: 'Audit: Improvements Backlog'
createdAt: 2026-08-12T16:25:21.244Z
updatedAt: 2026-08-12T16:25:21.244Z
contentType: tutorial
productTeam: Post-purchase
slugEN: audit-improvements-backlog
locale: en
---

The **Improvements Backlog** is a feature of VTEX CX Platform that analyzes a sample of your artificial intelligence (AI) agent conversations and identifies recurring failure patterns, such as behavior deviations, knowledge gaps, and technical issues.

Instead of manually reviewing all conversations, you run an analysis and receive an organized list of issues, each with a diagnosis, suggested solution, and affected conversations. From this report, you can adjust your agent, add information to the knowledge base, and more.

> ℹ️ The analysis uses a representative sample of conversations, not all conversations.

The analysis evaluates your operation's data and identifies improvement opportunities, which are displayed in the Improvements Backlog. The execution is manual, allowing you to choose the best time to update the results.

To run an analysis, follow these steps:

1. In VTEX CX Platform, go to **Audit**.
2. Click the **Improvements Backlog** tab.
3. Click the `Run analysis` button.

After clicking the button, the analysis runs in the background and may take a few hours to complete. During processing, you can track the first improvements identified directly in the Improvements Backlog tab.

>❗ You can only run one analysis per day. When you run a new analysis, unresolved or ignored items from the previous analysis are replaced. Therefore, we recommend addressing the identified improvements before starting a new run.

## View analysis results

The results will appear in a list with three columns:

- **Improvement:** Indicates the topic that can be improved or the identified issue.
- **Type:** Identifies the type of issue. Read the types and description of each one below:

| Issue types | Description |
| --- | --- |
| **Behavior** | The agent deviated from the brand's expected tone of voice, asked too many questions before helping, or didn't follow the configured instructions. |
| **Knowledge** | The agent needed information to respond to the customer but didn't find it in the knowledge base. |
| **Technical issue** | Technical failure, such as external integration failure. |
| **Custom analysis** | Issue found from a monitor you configured. |

- **Affected conversations:** Indicates the number of conversations affected by each issue.

> ℹ️ The list has no item limit. A single conversation may appear in more than one item if it has more than one type of issue.

## Investigate an improvement

Click any improvement to open the detail panel. The panel provides the following information:

- **Diagnosis:** The explanation of what's happening and why.
- **Suggested solution:** The recommendation on how to fix the issue.
  - In the case of a **Technical issue**, the suggested solution contains the `Contact technical support` button. This solution sends an email with the error information to our Support team for analysis.
- **Affected conversations:** The list of conversations where the issue appeared. When there are many conversations, they're paginated, and each row can be expanded to display relevant excerpts.

> ℹ️ If the suggested solution references an instruction that was changed or removed since the analysis was run, a warning is displayed. The suggestion remains in the list; the warning only signals that the scenario has changed since the analysis.

At the end of each item, you can select one of the following two actions:

- **`Mark as resolved`:** When an item is resolved, it's removed from the pending list. We recommend marking it as resolved only after applying the fix. Resolved items won't appear in the list or in new analyses.

> ⚠️ Marking as resolved doesn't automatically change the agent. You must implement the improvement in the instructions or knowledge base.

- **`Ignore improvement`:** When an item is ignored, it's immediately removed from the list. We recommend ignoring it when it's not relevant or won't be addressed. Ignored items won't appear in the list or in new analyses.

## Create custom analysis

You can also define your own behaviors to monitor, specific to your business or operation.

To create a custom analysis, follow these steps:

1. In the **Improvements Backlog** tab, click `Custom analysis`.
2. Fill in the two fields:
  - **Title:** Name of the identified improvement.
  - **Definition:** Description of the behavior you want to monitor.
3. Click `Add`.

From then on, this criterion will be evaluated in the next analyses, with the other improvements. The results appear in the backlog with the title you selected in **Improvements** and with the **Custom analysis** tag.

> ℹ️ You can create up to 10 custom analyses per project.

## View and delete created custom analyses

To view the analyses you've already created, follow these steps:

1. In the **Improvements Backlog** tab, click `Custom analysis`.
2. The list of custom analyses will appear, with the number of conversations affected by each one.
3. To see the affected conversations, click the desired analysis.

To delete a custom analysis, follow these steps:

1. In the **Improvements Backlog** tab, click `Custom analysis`.
2. Click the <i class="far fa-trash-alt" aria-hidden="true"></i> trash button next to the analysis you want to delete.
3. Finally, click `Delete` to confirm the deletion.