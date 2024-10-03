---
title: 'Basic VTEX IO Developer setup'
id: 4XLbAUPdoJppKyG0QfoyCr
status: ARCHIVED
createdAt: 2019-02-19T19:29:58.171Z
updatedAt: 2020-03-13T21:24:44.619Z
publishedAt: 
firstPublishedAt: 2019-02-19T19:30:01.688Z
contentType: trackArticle
productTeam: VTEX IO
slugEN: basic-vtex-io-developer-setup
locale: en
trackId: 5qJr8BIQXAKec9CpBWrTNv
trackSlugEN: build-a-store-using-vtex-io
---

All development in the VTEX platform starts with the [VTEX IO Toolbelt](https://github.com/vtex/toolbelt), our CLI that allows you to log in, manage installed apps and develop new ones.

## Install Node and the VTEX IO Toolbelt

First, you need to ensure your computer has [Node.js v8.0.0 or a newer version](https://nodejs.org/en/download/) installed. Then, use `npm`, the node package manager, to globally install the `vtex` command:

```
$ npm install --global vtex
```

You can test if everything works by calling `vtex`, which will show you a help text with all available commands.

## Login to your VTEX account

Now, you can log into your VTEX account by using the `vtex login` command.

```
$ vtex login myaccount
```

This will open a browser window and ask for your credentials.

When you are logged in, you can use the `vtex whoami` command to find out which *account* and *workspace* you are currently using.

![Command Line](https://images.ctfassets.net/alneenqid6w5/31AVvcWcRpL1CoKdUyARyu/9ea4d722d8955bb580a76402507e4013/Command_Line.svg)

>ℹ️ PROTIP: You can configure your terminal to display your current account and workspace automatically. The easiest way to do it is to use our [dotfiles](https://github.com/vtex/dotfiles), which automatically configure [Fish Shell](https://fishshell.com/) and add a [prompt function](https://github.com/vtex/dotfiles/blob/master/fish/functions/fish_prompt.fish) for you.

## Workspaces: your isolated development environment

When using VTEX IO, every interaction with an account happens in a __workspace__, an isolated version of your store. There is a __master__ workspace, which serves public traffic on the store by default. __Whenever a new workspace is created, it is based on the master workspace. Any changes in the master workspace are automatically reflected in all other workspaces__.

By default, when you log in to a store you are in the `master` workspace. You can take a look at the installed apps in this workspace by using the command `vtex list` (or the shorthand `vtex ls`).

```
$ vtex ls
```

![Command Line vtex ls](//images.ctfassets.net/alneenqid6w5/4AH5vzt1JfOCzIDtB0fRvR/110dda0479f9aa9891062ece2766837f/Command_Line_vtex_ls.svg)

## Creating your own workspace

You can [read more about workspaces](https://help.vtex.com/tutorial/workspace-overview--56BLo7BI6sCoz6G3N7sYTi), but for now just remember that whenever you want to test something or start developing, simply create your own workspace by using the `use` command:

```
$ vtex use yourname
```

This switches your toolbelt to a workspace called `yourname`, and creates it if it doesn’t exist. 

>ℹ️ TIP: You can switch to *and reset* a workspace to master in a single command with the `-r` flag. This is useful if you want to start fresh from `master`.

Workspaces can be named arbitrarily, but we find it’s usually convenient to name it after yourself when you want to develop something in your own environment.

![command line workspace](//images.ctfassets.net/alneenqid6w5/1Urbt6L0XfNEWukSvdKRdK/41e7e9c9f900fb96ddf5fc3aa6d7c2af/command_line_workspace.svg)

Now you have your own workspace. You can call `vtex list` again and notice that the installed apps mirror those in `master`. Now, let’s `link` a local version of the store theme so you can start editing it.
