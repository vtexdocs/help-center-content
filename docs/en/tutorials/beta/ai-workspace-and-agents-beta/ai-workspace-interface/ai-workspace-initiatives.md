---
title: 'AI Workspace - Initiatives'
createdAt: 2026-11-24T12:00:00.000Z
updatedAt: 2026-11-24T12:00:00.000Z
contentType: tutorial
productTeam: AI Workspace
slugEN: ai-workspace-initiatives
locale: en
---

> ⚠️ AI Workspace is only available for selected accounts.

In AI Workspace, an **initiative** is the starting point for executing tasks. Each initiative has a broader goal and groups multiple tasks, each with a narrower scope, that contribute to achieving it.

Every initiative is identified by a code that starts with `IN` followed by numbers (for example, `IN6270`). Initiatives can be created **from interactions with AI agents**, which identify problems and improvement opportunities in the store and propose actions to address them.

You can access the **My initiatives** page through the **My initiatives** item in the side [navigation menu](https://help.vtex.com/en/docs/tutorials/ai-workspace-navigation-menu). This page gathers all the initiatives of your operation, allowing you to track and manage them.

## Initiatives table

![AI Workspace initiatives table EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/beta/ai-workspace-and-agents-beta/ai-workspace-interface/ai-workspace-initiatives-table.png)

The initiatives table shows the details of each initiative in the following columns:

- **Initiative:** Initiative code (for example, `IN6270`), title, and description.
- **Severity:** Initiative priority level (Low, Medium, or High).
- **Date:** Initiative creation date.
- **Leader:** Person responsible for the initiative.

### Sorting by column

You can sort the list by clicking a column header. Each click switches the sorting criterion for that column, following this cycle:

1. **Ascending**.
2. **Descending**.
3. **No sorting** (removes the applied sorting).

### Expanding initiatives

When you click the arrow to the left of an initiative, it expands and displays its tasks right below it. Each task has an icon that indicates its current status, allowing you to track the initiative's progress directly in the list. To collapse the initiative, click the arrow again.

## Initiative details (canvas)

When you click an initiative, in any view mode, the [**canvas**](https://help.vtex.com/en/docs/tutorials/ai-workspace-glossary#canvas) opens on the right with the full initiative details.

![AI Workspace initiative canvas EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/beta/ai-workspace-and-agents-beta/ai-workspace-interface/ai-workspace-initiative-canvas.png)

At the top of the canvas, the **Open chat** button allows you to open a [chat](https://help.vtex.com/en/docs/tutorials/ai-workspace-chat) related to the initiative.

The canvas is organized into the following sections:

- **Title:** Initiative name.
- **Header:** General information about the initiative:
  - **Status:** Current state of the initiative. The possible statuses are **Triage**, **Active**, **Archived**, and **Completed**.
  - **Severity:** Initiative priority level.
  - **Initiative leader:** Person responsible for leading the initiative.
  - **Participants:** Other people involved in the initiative.
  - **Reported by:** Agent that reported the initiative, with date and time.
- **Diagnosis:** Analysis of the situation that originated the initiative, detailing the problem or opportunity identified.
- **Tasks:** List of tasks that make up the initiative. Each task displays:
  - **Execution status:** An icon or button that represents the current state of the task. The possible statuses are:
    - **Open:** Displays the 🔼 button to start the task.
    - **Running:** Displays the 🔁 loading spinner icon, indicating that the task is being processed by an agent.
    - **Awaiting action:** Displays the 🔵 icon, indicating that the task is waiting for a user interaction to proceed.
    - **Completed:** Displays the ✔️ icon, indicating that the task has been completed.
  - **Title:** Task name.
  - **"↳ View chat" button:** Available when the task requires interaction. The button opens the task chat.
  - **Assignee:** Displayed as a dropdown before execution, allowing you to define who will perform the task (user or agent). After the task starts, only the assignee's image is displayed.
- **Activity:** History of the actions taken in the initiative, recording who performed the action, the action performed, the recipient (if any), and the date and time.
