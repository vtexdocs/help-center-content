---
title: Initial setup
id: 3l6F07zCA0eyc2Ki2um8C8
status: DRAFT
createdAt: 2018-04-26T19:26:16.134Z
updatedAt: 2020-02-13T20:06:01.944Z
publishedAt: 
firstPublishedAt: 2018-04-26T21:15:32.167Z
contentType: trackArticle
productTeam: VTEX IO
slug: initial-setup
trackId: 
trackSlugEN: 
---

Before you start developing, make sure that the steps below have been completed. They are prerequisites for creating apps with VTEX IO.

## Install npm or yarn

You need to have npm or yarn installed on your computer. Both are package managers. And one of the two is required to install VTEX IO CLI.

<div class="alert alert-info">
If you're not used to working with package managers, dig further into these tools:<br>
<ul>
  <li>
    <a href="https://www.npmjs.com/">npm</a>
  </li>
  <li>
    <a href="https://yarnpkg.com/">yarn</a>
  </li>
</ul>
</div>

## Install VTEX IO CLI

CLI stands for "command line interface". It's through the VTEX IO CLI, using simple commands, that you will handle your account, workspaces and apps.

Think of the CLI as any other program you need to install on your computer. The only difference is that instead of using a graphical interface, you will be using command lines.

To install the CLI via __npm__, enter the terminal and type `npm i -g vtex`.

To install it via __yarn__, enter the terminal and type `yarn global add vtex`.

With that you'll have VTEX IO CLI installed globally, which should allow you to log in to your account.

## Login

After gaining access to an account and installing VTEX IO CLI, you can now log in.

To do this, follow these steps:
1. Open the terminal of your choice.
2. Access the folder on your computer where the app files will be located.
3. Use the following command: `vtex login`

VTEX IO system will prompt you to inform the account name. Once this is done, a new tab will open in your browser, with a window for authentication into the store account.

Once authenticated, you may close this tab and return to the terminal. The system should now inform you that you are logged in, through a message such as the following:

__info: Logged into `{AccountName}` as `{userEmail}` at workspace `master`__
