---
title: 'AI Workspace - Tasks'
createdAt: 2026-11-24T12:00:00.000Z
updatedAt: 2026-11-24T12:00:00.000Z
contentType: tutorial
productTeam: AI Workspace
slugEN: ai-workspace-tasks
locale: en
---

> ⚠️ AI Workspace is only available for selected accounts.

In AI Workspace, a **task** is a unit of work within an [initiative](https://help.vtex.com/en/docs/tutorials/ai-workspace-initiatives) and has a specific goal. For example: *Improve the titles of the 500 most visited products*.

Each task has an **assignee** who performs it, which can be a human or an AI agent. The assignee is chosen by the [**Initiative leader**](https://help.vtex.com/en/docs/tutorials/ai-workspace-glossary#initiative-leader).

Tasks only exist within initiatives and can be created in two ways:

- When an initiative is created.
- By interacting with an AI agent in a [chat](https://help.vtex.com/en/docs/tutorials/ai-workspace-chat).

## Tasks page

You can access the **Tasks** page through the **Tasks** item in the side [navigation menu](https://help.vtex.com/en/docs/tutorials/ai-workspace-navigation-menu). This page gathers all the tasks of your operation, grouped by status.

![AI Workspace tasks page EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/beta/ai-workspace-and-agents-beta/ai-workspace-interface/ai-workspace-tasks.png)

The page has a board that organizes tasks into columns according to their status:

- **Open:** Tasks not started yet.
- **Running:** Tasks in progress.
- **Awaiting action:** Tasks that require interaction to move forward.
- **Completed:** Finished tasks.

The columns contain cards that represent the tasks, each displaying the following details:

- **Title:** Task name.
- **Initiative:** Initiative to which the task belongs.
- **Assignee icon:** Visual identification of the human or AI agent responsible for the task.
- **Status icon:** Visual indication of the current status, displayed only on tasks with the **Working** and **Awaiting action** statuses.

## Task details (canvas)

The [initiative details in the canvas](https://help.vtex.com/en/docs/tutorials/ai-workspace-initiatives#initiative-details-canvas) display the list of all its tasks. When you click a task, its details are displayed in the [**canvas**](https://help.vtex.com/en/docs/tutorials/ai-workspace-glossary#canvas).

![AI Workspace task details in the canvas EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/beta/ai-workspace-and-agents-beta/ai-workspace-interface/ai-workspace-task-canvas.png)

The task canvas has the following sections:

- **Title:** Task name.
- **Header:** General information about the task:
  - **Assigned to:** User or AI agent responsible for performing the task.
  - **Status:** Current state of the task. The status display varies according to the stage:
    - **Open:** Displays the **Run task** button.
    - **Working:** Displays a loading animation along with **Planning...**, **Exploring...**, or **Analyzing...**.
    - **Awaiting action:** Displays **🔵 Needs attention**.
    - **Complete:** Displays **✔️ Completed**.
- **Description:** Explanation of what the task does.
- **Scope:** Set of items the task acts on.
- **Manual process:** Actions that a user must perform in the task. This section doesn't appear on tasks assigned to AI agents.

## Task chat

Every task has a **chat**, where you can interact with AI agents to get information and perform actions related to the task. To learn more about how interaction with agents works, see [AI Workspace - Chat](https://help.vtex.com/en/docs/tutorials/ai-workspace-chat).

![AI Workspace task chat EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/beta/ai-workspace-and-agents-beta/ai-workspace-interface/ai-workspace-task-chat.png)
