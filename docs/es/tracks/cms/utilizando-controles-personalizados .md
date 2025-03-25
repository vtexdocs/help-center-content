---
title: 'Utilizando controles personalizados '
id: 1G2MTHr1fAMCi7t2ZXoa9k
status: ARCHIVED
createdAt: 2020-01-09T22:10:24.741Z
updatedAt: 2022-01-10T22:46:01.216Z
publishedAt: 
firstPublishedAt: 2020-01-13T14:29:53.371Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: using-custom-controls
locale: es
trackId: 2YcpgIljVaLVQYMzxQbc3z
trackSlugES: cms
---

Además de los controles nativos de VTEX, puede crear sus propios controles.

Al igual que los controles nativos, los controles personalizados deben agregarse a los templates y sub-templates y pueden replicarse en diversos lugares de una misma página y en diversas páginas.

También como los controles nativos, estos renderizan elementos de los siguientes tipos:
- Banner
- Banner DHTML
- Colección
- HTML
### Crear un control personalizado

Para crear un control personalizado, siga el procedimiento a continuación:
1. Acceda al módulo CMS
2. Haga clic en __Layout__
3. Haga clic en la carpeta __CMS__
4. A continuación, haga clic en la carpeta __Custom Elements__
5. Haga clic en el botón __Add__![8 1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/cms/utilizando-controles-personalizados%20_1.png)
6. Complete el campo __Name__ con el nombre del control personalizado
7. Complete el campo __Tag name__. Este es el nombre que se usará en el control al agregarlo al template
8. Seleccione el tipo de control en __Type__
9. En la parte derecha de la página, haga clic en el botón __Save Content__

Ahora, cuando vaya a la sección  Custom Elements, verá el nuevo control listado junto a los demás.

Puede configurarlo y agregar contenido como en un control nativo de VTEX .

### Aplicar un control personalizado a un template de página

La aplicación de un control personalizado es semejante a la de un control nativo.

La diferencia está en la sintaxis de control.

Para identificar el control personalizado a utilizar, ingresamos el nombre del tag registrado en el momento de la creación del control.

A continuación, se muestran las sintaxis para cada tipo de control:
- __Tipo Banner__: `<vtex:nombredetag />`
- __Tipo HTML__: `<vtex.cmc:nombredetag />`
- __Tipo Coleção__: `<vtex.cmc:nombredetag />`

En los tres casos, `nombredetag` debe reemplazarse con el nombre de tag registrado en el paso 8 de la creación del control.
