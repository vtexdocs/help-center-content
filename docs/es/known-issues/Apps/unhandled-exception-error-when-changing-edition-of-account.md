---
title: "'Unhandled exception' error when changing edition of account"
id: 1NVjCrlRkadscl8fW9rOdA
status: PUBLISHED
createdAt: 2023-09-26T12:45:44.999Z
updatedAt: 2024-02-26T17:22:29.322Z
publishedAt: 2024-02-26T17:22:29.322Z
firstPublishedAt: 2023-09-26T12:45:45.927Z
contentType: knownIssue
productTeam: Apps
author: 2mXZkbi0oi061KicTExNjo
tag: Apps
slugEN: unhandled-exception-error-when-changing-edition-of-account
locale: en
kiStatus: Backlog
internalReference: 907294
---

## Summary


Sometimes when we change the edition of an account or workspace we can find the following error:


    - error: Unhandled exception - error: Please report the issue in https://github.com/vtex/toolbelt/issues


The error is not consistent, it doesn't happen all the time.

If the master of the store is using the `edition-business` and they want to change the edition to `edition-store` on a workspace, this error is more likely to happen.


##

## Simulation


Try to change the edition of any test account or workspace, this error will eventually happen in the process.


##

## Workaround



- Run the command `vtex edition get` to be sure that the edition didn't change. Sometimes the edition changes even when the error shows;
- If the apps didn't update as well try running the `vtex update` command;
- Wait a while and try again;
- It can also happen that the Unhandled exception error will not appear, the edition will change but the apps will not update. In this case just sun `vtex update`



