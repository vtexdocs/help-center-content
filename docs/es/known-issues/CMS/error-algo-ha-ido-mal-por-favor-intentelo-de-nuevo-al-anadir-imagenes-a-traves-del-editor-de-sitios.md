---
title: "Error 'Algo ha ido mal. Por favor, inténtelo de nuevo' al añadir imágenes a través del Editor de Sitios."
id: r3QVP1kp8HApP83bOi6t9
status: PUBLISHED
createdAt: 2023-11-07T22:33:02.296Z
updatedAt: 2023-11-07T22:34:52.005Z
publishedAt: 2023-11-07T22:34:52.005Z
firstPublishedAt: 2023-11-07T22:33:03.046Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: error-something-went-wrong-please-try-again-when-adding-images-via-site-editor
locale: es
kiStatus: Backlog
internalReference: 932126
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Al añadir imágenes a través del Editor de Sitios, el mensaje "`Algo salió mal. Por favor inténtelo de nuevo.`" puede ocurrir ocasionalmente.
Esto se debe al número de imágenes por bloque. Por el momento, no tenemos un número exacto de imágenes que cause este problema, pero hemos notado este comportamiento por encima de 20 imágenes en el mismo bloque.


##

## Simulación



- Acceda al Editor de Sitios CMS (por ejemplo https://my-account-here.myvtex.com/admin/cms/site-editor);
- Seleccione el bloque con las nuevas imágenes a añadir;
- Cuando la adición se guarda, el mensaje "`Algo salió mal. Por favor, inténtelo de nuevo.`" aparecerá en la esquina inferior derecha:
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/CMS/error-algo-ha-ido-mal-por-favor-intentelo-de-nuevo-al-anadir-imagenes-a-traves-del-editor-de-sitios_1.png)



## Workaround


Puedes añadir las imágenes directamente al tema, o dividirlas en bloques con flex layout (ref https://developers.vtex.com/docs/apps/vtex.flex-layout).




