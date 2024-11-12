---
title: 'Generar archivo HAR para solucionar problemas en la tienda'
id: 15xVlw8nuakk2k6Cao4k2Q
status: PUBLISHED
createdAt: 2018-02-23T13:16:02.404Z
updatedAt: 2019-12-31T15:25:44.314Z
publishedAt: 2019-12-31T15:25:44.314Z
firstPublishedAt: 2018-02-23T14:02:06.722Z
contentType: tutorial
productTeam: Others
author: authors_24
slugEN: generating-a-har-file
locale: es
legacySlug: generar-archivo-har
subcategoryId: 1VvCpaa8NCA6a0MK6W6oWg
---

Al buscar soluciones para un problema complejo, puede ser que nuestro equipo de soporte necesite recibir información adicional sobre los requests web generados en su navegador mientras el problema ocurre.

Una feature útil para esto es el log de requests generado por la herramienta de desarrollador del navegador (el _Dev Tools_).

A través de él usted puede generar un __archivo HAR__, que contiene información detallada sobre cada request. Después, basta con enviarlo a nuestro equipo de soporte.

>⚠️ El archivo HAR contiene información sensible sobre su tienda. Compartalo sólo con el equipo de soporte VTEX.

>⚠️ Abajo tenemos el procedimiento para generar el  archivo HAR por **Google Chrome**, que es el modo que nosotros más recomendamos. Si desea hacer el proceso por medio de otros navegadores, como Mozilla Firefox o Microsoft Edge, verifique el procedimiento correcto <a href="https://support.zendesk.com/hc/pt-br/articles/204410413-Gera%25C3%25A7%25C3%25A3o-de-um-arquivo-HAR-para-resolu%25C3%25A7%25C3%25B5es-de-problemas#h_51858a69-ed0e-45a6-a25d-c9b8ba32ae32"> en este enlace /a>.

### Cómo generar el archivo HAR en Google Chrome

Usando Google Chrome, siga estos pasos para generar el archivo HAR.

1. Vaya a la dirección URL donde se produce el problema.
2. Haga clic con el botón derecho en cualquier lugar de la pantalla y luego en __Inspect__.
3. El Dev Tools será abierto, entonces haga clic en la pestaña __Network__.![HARfile2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)
4. El botón de grabación debe estar rojo, lo que indica que está activado. Si no está, haga clic en él.![HARfile3](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.png)
5. Marque la flag __Preserve log__.![HARfile5](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_3.png)
6. Vuelva a cargar la página y reproduzca la navegación en la que se produce el problema.
7. Haga clic con el botón derecho en cualquier lugar dentro del área del Network y, a continuación, haga clic en la opción __Save as HAR with content__.![HARfile4](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_4.png)

Se generará un archivo con extensión HAR, cuyo nombre es la dirección de la página.

Usted puede enviar este archivo al equipo de soporte de VTEX, lo que hará sl soporte más rápido y eficaz.

---

En otros navegadores, como Mozilla Firefox y Microsoft Edge, el procedimiento para generar archivos HAR es similar pero recomendamos usar Chrome para ello, debido a la facilidad del proceso.
