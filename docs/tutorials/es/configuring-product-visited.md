---
title: Configurar producto visitado
id: tutorials_3136
status: PUBLISHED
createdAt: 2017-04-27T21:52:11.184Z
updatedAt: 2023-03-28T23:34:22.351Z
publishedAt: 2023-03-28T23:34:22.351Z
firstPublishedAt: 2017-04-27T23:03:54.918Z
contentType: tutorial
productTeam: Master Data
author: authors_3
slug: configurar-producto-visitado
legacySlug: configurar-producto-visitado
subcategory: 2nx7hMJmisofwqwy2P9l2i
---

El producto visitado es la funcionalidad que envía emails a los clientes que navegaron por un producto en su site pero que no finalizaron compra. Ese email tiene como objetivo la recuperación de la venta, enviando, además del producto abandonado, sugerencias de nuevos productos. Todo ello es posible a través de su Master Data.

[![ExemploProdutoVisitado](//images.contentful.com/alneenqid6w5/3S5FjnFRl6SUoqAkIY84sI/1f6913ec8cd925c89906500a923de0c2/ExemploProdutoVisitado.png)](//images.contentful.com/alneenqid6w5/3S5FjnFRl6SUoqAkIY84sI/1f6913ec8cd925c89906500a923de0c2/ExemploProdutoVisitado.png "![ExemploProdutoVisitado](//images.contentful.com/alneenqid6w5/3S5FjnFRl6SUoqAkIY84sI/1f6913ec8cd925c89906500a923de0c2/ExemploProdutoVisitado.png)")

_Para que este recurso funcione de manera adecuada es necesario que su tienda tenga un alto flujo de visitas y compras, ya que los expositores se generan relacionando datos de navegación a un producto específico._

### Defina un intervalo mínimo de disparo

Definir un intervalo de disparo significa limitar el tiempo mínimo de espera entre un disparo y otro para el mismo cliente. Esto evita que el cliente reciba varios emails durante una misma navegación en la tienda.

Para configurar ese intervalo, es necesario crear un campo en la entidad **CL.**

1. En el Admin VTEX, accede **Configuración de la tienda** > **Storefront** > **Master Data.**
2. En Master Data, haz clic en **Aplicações** > **Estrutura de dados.**
3. Acceda a la pestaña **Entidade de datos.**
4. En la entidad **Cliente**, haga clic sobre el símbolo de lápiz.
5. Haga clic en el botón **Novo campo.**

Desupés, complete los campos conforme a la indicación a continuación:
- **Nome**: lastTrigger
- **Nome de exibição**: Fecha del último trigger enviado
- **Tipo**: Date and Time

Haga clic en el botón **Salvar**.

### Exhiba los campos en el formulario

Tras crear un campo en la entidad, es necesario configurar para que el campo sea exhibido en el formulario &#8211; así, es posible ver los datos registrados en el mismo. Esto también es válido para campos que creados automáticamente por VTEX pero que no fueron marcados para ser exhibidos en el formulario. Sigue a continuación un manual sobre cómo exhibir los campos que serán importantes para el escenario de Producto Visitado.

1. Acceda al módulo **Master Data**;
2. En la aplicación **Profile System**, haga clic en el símbolo de **engrenagem**; [![aplicacaoEditar](//images.contentful.com/alneenqid6w5/5EGLrHpiY8MOcEsUCUCaqS/7edf07ca138296670b0e2b7a0455bbef/aplicacaoEditar.png)](//images.contentful.com/alneenqid6w5/5EGLrHpiY8MOcEsUCUCaqS/7edf07ca138296670b0e2b7a0455bbef/aplicacaoEditar.png "![aplicacaoEditar](//images.contentful.com/alneenqid6w5/5EGLrHpiY8MOcEsUCUCaqS/7edf07ca138296670b0e2b7a0455bbef/aplicacaoEditar.png)")
3. Haga clic en el símbolo del **lápis** sobre el formulario **Cliente**;
4. Haga clic en la pestaña **Schemas de Layout**;
5. Haga clic en el botón **Incluir Nova seção**;
6. Dele un nombre a esa sección;
7. En la columna **Campos disponíveis **, arrastre el campo deseado hasta el área **Campos da columna 1**, abajo del nombre de la sección creada; [![arrastandoCampo](//images.contentful.com/alneenqid6w5/57Ridc88Te6kIo2CO4sOEI/80f6dd2602600841e62b666e88a2bd38/arrastandoCampo.png)](//images.contentful.com/alneenqid6w5/57Ridc88Te6kIo2CO4sOEI/80f6dd2602600841e62b666e88a2bd38/arrastandoCampo.png "![arrastandoCampo](//images.contentful.com/alneenqid6w5/57Ridc88Te6kIo2CO4sOEI/80f6dd2602600841e62b666e88a2bd38/arrastandoCampo.png)") [![arrastandoCampo2](//images.contentful.com/alneenqid6w5/4TQBONq7tKoEuEqCSoAS44/967247336bbb61ca775f7dd2488ae4f0/arrastandoCampo2.png)](//images.contentful.com/alneenqid6w5/4TQBONq7tKoEuEqCSoAS44/967247336bbb61ca775f7dd2488ae4f0/arrastandoCampo2.png "![arrastandoCampo2](//images.contentful.com/alneenqid6w5/4TQBONq7tKoEuEqCSoAS44/967247336bbb61ca775f7dd2488ae4f0/arrastandoCampo2.png)") [![seçãoCriada](//images.contentful.com/alneenqid6w5/6DwxZSd692YAweEwQs64C4/ed5a48459e501cf8f57ff180ba96dc73/se_C3_A7_C3_A3oCriada.png)](//images.contentful.com/alneenqid6w5/6DwxZSd692YAweEwQs64C4/ed5a48459e501cf8f57ff180ba96dc73/se_C3_A7_C3_A3oCriada.png "![seçãoCriada](//images.contentful.com/alneenqid6w5/6DwxZSd692YAweEwQs64C4/ed5a48459e501cf8f57ff180ba96dc73/se_C3_A7_C3_A3oCriada.png)")
8. Haga clic en el botón **Salvar**.

### Cree el template de email

El template del e-mail que será enviado, al igual que en el Carrito Abandonado, se configura en el módulo CMS. Para auxiliar en la configuración, [use nuestro template de ejemplo](//assets.contentful.com/alneenqid6w5/6TloqmkC76AAauQ4e4SWmA/bf28c1d0d7d6618d5eb1231a578934f1/produtoVisitadoExemplo.html "use nuestro template de ejemplo").

1. Acceda al módulo **CMS**;
2. Haga clic en **Portal**;
3. [Haga clic aquí para descargar el template de ejemplo](//assets.contentful.com/alneenqid6w5/6TloqmkC76AAauQ4e4SWmA/bf28c1d0d7d6618d5eb1231a578934f1/produtoVisitadoExemplo.html "Clique aqui para baixar o template de exemplo");
4. Haga clic en **Templates de página**;
5. Haga clic en **novo template**;
6. Llene el nombre y pegue el código de su template. ¡Atención! Si está usted usando el template de ejemplo, recuerde modificar el código `TEMPLATE_DE_EXPOSITOR` por el id de su template de expositor y el código `NOMBRE_DE_TIENDA` por la URL de su tienda.
7. Haga clic en el botón **Salvar**.

#### Entienda los productos enviados

Observe que el control responsable de exhibir el producto visitado es el `ProductQueryStringReferenceShelf` y el control que exhibirá el(los) expositor(es) de similares es `&lt;vtex.cmc:productsCrossSelling` &#8230; `crossSellingType="1" /&gt;` con el parámetro `crossSellingType` variando de 1 a 6, siendo:

- **1**: Quien vio, vio también
- **2**: Quien comproó, compró también
- **3**: Quien comproó, compró también
- **4**: Productos similares
- **5**: Sugerencias
- **6**: Accesorios

Los tres primeros expositores los arma automáticamente el sistema y los [tres últimos se configuran manualmente en el registro de producto](http://help.vtex.com/es/tutorial/configurando-produto-similar-sugestoes-acessorios-e-genericos/).

#### Cree la estructura de carpetas

Después de crear el template, es necesario crear la estructura de carpetas necesaria para la configuración de la trigger. Siga el paso a paso a continuación.

1. Haga clic en **Websites**;
2. Haga clic sobre su tienda;
3. Haga clic en la carpeta **/**;
4. Haga clic en la carpeta **CEM**;
5. Haga clic en nueva carpeta;

Complete los campos conforme lo mostrado a continuación;

- **Nombre de la Carpeta**: Producto-visitado
- **Protocolo**: HTTP
- **Requiere Autenticación**: desmarcado

Haga clic en el botón **Salvar Pasta**.

Tras la creación de la carpeta, asocie el template de página al layout de la página.

1. Haga clic en la carpeta creada;
2. Haga clic en **novo layout**; [![novoLayout](//images.contentful.com/alneenqid6w5/7x9hPRCKsgwOgk4iQ4IAsq/2eeb7573f284daf0429c7d129a8eaf26/novoLayout.png)](//images.contentful.com/alneenqid6w5/7x9hPRCKsgwOgk4iQ4IAsq/2eeb7573f284daf0429c7d129a8eaf26/novoLayout.png "![novoLayout](//images.contentful.com/alneenqid6w5/7x9hPRCKsgwOgk4iQ4IAsq/2eeb7573f284daf0429c7d129a8eaf26/novoLayout.png)")
3. Seleccione el template creado anteriormente;
4. Haga clic en el botón **Salvar**.

### Configure la trigger de disparo del email

1. Acceda a **nomedaloja**.ds.vtexcrm.com.br;
2. Haga clic en la pestaña **Trigger**;
3. Haga clic en el botón **Novo**;
4. Inserte el nombre de la trigger;
5. En **Status**, marque **Ativo**;
6. En **Condição do trigger**, seleccione **O valor de um atributo for alterado**;
7. En Informe el atributo, seleccione Produto Visitado;

En **Filtro adicional**, configure conforme lo que sigue:
- **Checkout** Está nulo and
- **Produto Visitado** No está nulo and

Luego, haga clic en el botón **Incluir grupo**, y haga clic en **Incluir filtro** y complete como sigue:
- **Fecha del último trigger enviado** Menor o igual `FECHA ACTUAL` &#8211; `Sustraer días` &#8211; `7` or
- **Fecha del último trigger enviado** Está nulo [![CondicoesTrigger](//images.contentful.com/alneenqid6w5/2fU6mJE1asQiQ4agmCSSaG/ff6148cbe2f6f07a8e01aea1ee0a68f1/CondicoesTrigger.png)](//images.contentful.com/alneenqid6w5/2fU6mJE1asQiQ4agmCSSaG/ff6148cbe2f6f07a8e01aea1ee0a68f1/CondicoesTrigger.png "![CondicoesTrigger](//images.contentful.com/alneenqid6w5/2fU6mJE1asQiQ4agmCSSaG/ff6148cbe2f6f07a8e01aea1ee0a68f1/CondicoesTrigger.png)")

Luego, siga los pasos siguientes:

1. Haga clic en la pestaña **Agendamento**;
2. Seleccione una de las opciones de envío. Ej.: Agendar ejecución para una fecha dinámica, [DATA ATUAL] más 2 horas;
3. Haga clic en la pestaña **Ações em caso positivo**;
4. Em **Destinatário**, como prueba, digite su email y haga clic en **Incluir e-mail estático**. Cuando ya haya probado, excluya su email y seelccione **Cliente: Email** y haga clic en **Incluir e-mail dinâmico**;
5. En **Formato do corpo do e-mail**, seleccione **HTML**;
6. En **Nome do remetente**, inserte el nombre de su tienda;
7. En **E-mail de resposta**, complete con la dirección de email a la que el cliente podrá responder con dudas;
8. En **Origem do conteúdo**, seleccione **Conteúdo de uma URL**;
9. Complete el campo **Assunto**;

En **URL**, inserte la dirección de su tienda con las carpetas en las que fue configurado el layout del carrito abandonado. Ej.: **nomedaloja**.com.br/CEM/Produto-Visitado**?refp={!productVisitedTag}**;
Lembre-se! Atención ao final **?refp={!productVisitedTag}** que debe estar al final de la URL para que los productos sean exhibidos.

En **Adicionar utm\_source em todos os links com valor**, complete con “CEM”, para facilitar la identificación de compras por el producto visitado.

Finalmente, marque la opción **Sobrescrever utm\_source** y haga clic en el botón ** Salvar **.

<iframe src="https://www.youtube.com/embed/c8bLByqTTzY" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
