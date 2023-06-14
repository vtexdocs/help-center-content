---
title: 'Setup inicial'
id: 3l6F07zCA0eyc2Ki2um8C8
status: DRAFT
createdAt: 2018-04-26T19:26:16.134Z
updatedAt: 2020-02-13T20:06:01.944Z
publishedAt: 
firstPublishedAt: 2018-04-26T21:15:32.167Z
contentType: trackArticle
productTeam: VTEX IO
slug: setup-inicial
trackId: 
trackSlugES: 
---

Antes de comenzar a desarrollar, asegúrese de que se han cumplido los pasos siguientes. Son requisitos previos para crear aplicaciones con VTEX IO.

## Instalar npm o yarn

Es necesario tener npm o yarn instalado en su máquina. Ambos son gestores de paquetes. Y uno de los dos es necesario para instalar la CLI de VTEX IO.

<div class="alert alert-info">
Si no está acostumbrado a trabajar con gestores de paquetes, entienda más sobre estas herramientas:<br>
<ul>
  <li>
    <a href="https://www.npmjs.com/">npm</a>
  </li>
  <li>
    <a href="https://yarnpkg.com/">yarn</a>
  </li>
</ul>
</div>

## Instalar la CLI de VTEX IO

La CLI es una interfaz de línea de comandos. Es por medio de ella, usando comandos simples, que usted podrá utilizar su cuenta, sus workspaces y sus aplicaciones.

Piense en la CLI como cualquier otro programa que usted necesita instalar en su computadora. La única diferencia es que, en lugar de utilizar una interfaz gráfica, se utilizan líneas de comandos.

Para instalar la CLI a través de __npm__, entre en el terminal e introduzca `npm i -g vtex`.

Para instalarla a través de __yarn__, entre en el terminal y escriba `yarn global add vtex`.

Con eso, usted tendrá instalado la CLI de VTEX IO de manera global y podrá entrar en su account.

## Login

Con acceso a un account y después de instalar la CLI de VTEX IO, usted ya puede iniciar sesión.

Para ello, siga estos pasos:
1. Abra el terminal de su preferencia.
2. Acceda a la carpeta de su computadora donde quedarán los archivos de la aplicación.
3. Utilice el comando `vtex login`.

El sistema de VTEX IO le pedirá que usted informe el account name, es decir, el nombre de la cuenta. Hecho esto, se abrirá una nueva pestaña de su navegador, con una ventana para autenticación en la cuenta de la tienda.

Una vez autenticado, usted ya puede cerrar esta pestaña y volver al terminal. El sistema debe entonces informar que usted está conectado, con un mensaje como esto abajo:

__info: Logged into `{AccountName}` as `{userEmail}` at workspace `master`__
