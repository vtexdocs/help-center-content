---
title: 'Audit: Improvement backlog'
createdAt: 2026-08-12T16:25:21.244Z
updatedAt: 2026-08-12T16:25:21.244Z
contentType: tutorial
productTeam: Post-purchase
slugEN: audit-improvements-backlog
locale: en
---

**Improvement backlog** is a VTEX CX Platform feature that analyzes a sample of conversations from your artificial intelligence (AI) agent to identify recurring failure patterns, such as behavioral deviations, knowledge gaps, and technical issues.

Instead of manually reviewing every conversation, you can run an analysis and get an organized list of issues, each with a diagnosis, a suggested solution, and the affected conversations. Based on this report, you can adjust your agent, add information to the knowledge base, and perform other actions.

> ℹ️ The analysis uses a representative sample of conversations, not all conversations.

## Running an analysis

>❗ You can only run **one** analysis per day.

>❗ Running a new analysis replaces items that weren't resolved or ignored from the previous one. That's why we recommend addressing the improvements identified in the previous analysis before running a new one.

To run an analysis, follow the steps below:

1. Go to VTEX CX Platform.
2. Go to **Audit**.
3. Select the **Improvement backlog** tab.
4. Click `Run analysis`. The analysis will start running in the background.

> ℹ️ The analysis may take a few hours to complete. While the analysis processes the data, you can start viewing some of the identified improvements.

## Viewing the analysis results

The results will appear in a list with three columns:

- **Improvement:** Indicates the topic that can be improved or the issue identified.
- **Type:** Identifies the type of issue. Read the type and description of each one below:

| Type of issue | Description |
| --- | --- |
| **Behavior** | The agent deviated from the brand's expected tone of voice, asked too many questions before helping, or didn't follow the configured instructions. |
| **Knowledge** | The agent needed information to respond to the customer, but couldn't find it in the knowledge base. |
| **Technical issue** | Technical failure, such as an external integration issue. |
| **Custom analysis** | Issue found based on a monitor you configured. |

- **Affected conversations:** Indicates the number of conversations affected by each issue.

> ℹ️ The list has no entry limit. The same conversation can appear in more than one entry if it presents more than one type of issue.

## Investigating an improvement

Click any improvement to open the detail panel. The panel provides the following information:

- **Diagnosis:** Explanation of what's happening and why.
- **Suggested solution:** Recommendation on how to fix the problem.
  - For a **Technical issue**, the suggested solution contains the `Contact technical support` button. This solution sends an email with the error information to our Support team for analysis.
- **Affected conversations:** List of conversations where the problem appeared. When there are many conversations, they're paginated, and each row can be expanded to display the relevant excerpts.

> ℹ️ If the suggested solution refers to an instruction that was changed or removed since the analysis was run, a notification is displayed. The suggestion remains in the list; the notification only signals that the scenario has changed since the analysis.

At the end of each item, you can select one of the two actions below:

- **`Mark as resolved`:** When an entry is resolved, it leaves the pending list. We recommend marking it as resolved only after the fix is applied. Resolved items don't reappear in the list or in new analyses.

> ⚠️ Marking an entry as resolved doesn't automatically change the agent. You must implement the improvement in the instructions or the knowledge base.

- **`Ignore improvement`:** When an entry is ignored, it's removed from the list immediately. We recommend using this when it isn't relevant or won't be addressed. Ignored items don't reappear in the list or in new analyses.

## Creating custom analyses

You can also define your own behaviors to track, specific to your business or operation.

To create a custom analysis, follow the steps below:

1. On the **Improvement backlog** tab, click `Custom analysis`.
2. Complete the two fields:

- **Title:** Name of the improvement identified.
- **Definition:** Description of the behavior you want to track.

3. Click `Add`.

After that, this criterion will be evaluated in future analyses, along with the other improvements. The results appear in the backlog under the title you selected in **Improvements**, with the **Custom analysis** tag.

> ℹ️ You can create up to 10 custom analyses per project.

## Viewing and deleting custom analyses

To view the analyses you've already created, follow the steps below:

1. On the **Improvement backlog** tab, click `Custom analysis`.
2. The list of custom analyses will appear, showing the number of conversations affected by each one
3. To view the affected conversations, click the desired analysis.

To delete a custom analysis, follow the steps below:

1. On the **Improvement backlog** tab, click `Custom analysis`.
2. Click the <i class="far fa-trash-alt" aria-hidden="true"></i> trash icon next to the analysis you want to delete.
3. Then, click `Delete` to confirm the deletion.
