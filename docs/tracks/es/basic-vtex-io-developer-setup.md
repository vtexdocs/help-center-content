---
title: Configuración básica para desarrollar en VTEX IO
id: 4XLbAUPdoJppKyG0QfoyCr
status: DRAFT
createdAt: 2019-02-19T19:29:58.171Z
updatedAt: 2020-03-13T21:24:44.619Z
publishedAt: 
firstPublishedAt: 2019-02-19T19:30:01.688Z
contentType: trackArticle
productTeam: VTEX IO
slug: configuracion-basica-para-desarrollar-en-vtex-io
trackId: 5qJr8BIQXAKec9CpBWrTNv
trackSlugES: crear-una-tienda-utilizando-vtex-io
---

Todo el desarrollo en la plataforma VTEX comienza con el [Toolbelt de VTEX IO](https://github.com/vtex/toolbelt), nuestra CLI que permite iniciar sesión, gestionar aplicaciones instaladas y desarrollar nuevas.

## Instale el Node y el Toolbelt del VTEX IO

En primer lugar, usted debe asegurarse de que su ordenador tiene instalado [Node.js v8.0.0 o una versión más reciente](https://nodejs.org/en/download/). Para eso, utilice `npm`, el gestor de paquetes node, para instalar globalmente el comando `vtex`:

```
$ npm install --global vtex
```

Para confirmar que la instalación se ha producido normalmente, ejecute el comando "vtex", que debe mostrar un texto de ayuda con todos los comandos disponibles.

## Inicie sesión en su cuenta VTEX

Ahora, usted puede entrar en su cuenta VTEX usando el comando `vtex login`.

```
$ vtex login myaccount
```

Esto abrirá una ventana del navegador que solicitará sus credenciales.

Cuando esté conectado, usted puede utilizar el comando `vtex whoami` para descubrir qué *cuenta* y *workspace* está utilizando actualmente.

![Command Line](https://images.ctfassets.net/alneenqid6w5/31AVvcWcRpL1CoKdUyARyu/9ea4d722d8955bb580a76402507e4013/Command_Line.svg)

<div class="alert alert-info">
Sugerencia: Usted puede configurar su terminal para mostrar automáticamente su cuenta y workspace. La manera más fácil de hacer esto es usar nuestros <a href="https://github.com/vtex/dotfiles">dotfiles</a>, que configuran automáticamente la <a href="https://fishshell.com/">Fish Shell</a> y añaden una <a href="https://github.com/vtex/dotfiles/blob/master/fish/functions/fish_prompt.fish">función de prompt</a> para usted.
</div>

## Workspaces: su ambiente de desarrollo aislado

Al usar VTEX IO, toda interacción con una cuenta se realiza en un __workspace__, una versión aislada de su tienda. Hay un workspace __master__, que sirve tráfico público en la tienda de forma predeterminada. Cuando se crea un nuevo workspace, se basa en el workspace master. Cualquier cambio en el workspace master se refleja automáticamente en todos los demás workspaces.

De forma predeterminada, cuando inicie sesión en una tienda, usted está en el workspace `master`. Usted puede ver las aplicaciones instaladas en ese workspace usando el comando `vtex list` (o el atajo `vtex ls`).

```
$ vtex ls
```

![Command Line vtex ls](https://images.ctfassets.net/alneenqid6w5/4AH5vzt1JfOCzIDtB0fRvR/110dda0479f9aa9891062ece2766837f/Command_Line_vtex_ls.svg)

## Creando su propio workspace

Usted puede [leer más sobre workspaces aquí](https://help.vtex.com/tutorial/workspace-vision-general--56BLo7BI6sCoz6G3N7sYTi), pero por el momento recuerde que siempre que desee probar algo o empezar a desarrollar , basta con crear su propio workspace usando el comando `use`:

```
$ vtex use sunombre
```

Esto cambia su toolbelt a un workspace llamado `sunombre`, y lo crea si no existe.

<div class="alert alert-info">
Sugerencia: Usted puede cambiar a (<em>y restablecer</em>) un workspace master con un solo comando con la flag <code>-r</code>. Esto es útil si desea empezar desde cero en el <code>master</code>.
</div>

Los workspaces pueden ser nombrados arbitrariamente, pero generalmente es conveniente asignar su propio nombre cuando usted desea desarrollar en su ambiente.

![command line workspace](https://images.ctfassets.net/alneenqid6w5/1Urbt6L0XfNEWukSvdKRdK/41e7e9c9f900fb96ddf5fc3aa6d7c2af/command_line_workspace.svg)

Ahora usted tiene su propio workspace. Usted puede ejecutar `vtex list` nuevamente y observar que las apps instaladas reflejan aquellas en `master`. Ahora, vamos a "linkar" una versión local del tema de la tienda para que usted pueda comenzar a editarla.
