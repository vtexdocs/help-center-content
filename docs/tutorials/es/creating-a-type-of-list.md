---
title: 'Crear tipo de lista'
id: tutorials_254
status: PUBLISHED
createdAt: 2017-04-27T22:11:52.502Z
updatedAt: 2023-03-29T19:44:52.284Z
publishedAt: 2023-03-29T19:44:52.284Z
firstPublishedAt: 2017-04-27T23:03:11.198Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slug: criando-tipo-de-lista
locale: es
legacySlug: criando-tipo-de-lista
subcategory: 6aeeWirCBUwwCmeIWOgIWs
---

La creación de un tipo de lista es la configuración de qué listas tendrá el sitio. Ejemplo: Lista de Casamento y Lista de Aniversário. Cada una de estas es un tipo de lista diferente, con configuraciones propias. Este artículo tiene el objetivo de ilustrar el proceso de creación de un tipo de lista.

1. En el Admin VTEX, accede a __Catálogo__, o escribe __Catálogo__ en la barra de búsqueda en la parte superior de la página.
2. Haga clic en la opción __Tipos de lista__.
   Serán listados todos los tipos de lista configurados.
4. Haga clic en el botón `Nuevo tipo de lista`.
5. Llene los campos conforme a la orientación en [Campos del formulario](#campos-del-formulario).
6. Haga clic en `Salvar`.

Después de crear los tipos de listas, será posible que los clientes efectivamente creen sus listas en el sitio.

>⚠️ No se puede eliminar una lista después de que se ha generado.

## Campos del formulario

- **Nombre**: Nombre del tipo de lista.
- **Descripción**: Descrição do tipo de lista. Exemplo: Descripción del tipo de lista. Ejemplo: destinada a novios, a lista de casamentoes la más común entre las listas.
- **Activo**: Activar para que esta opción esté disponible en el sitio.

### Configuración

**Visibilidad**

- **Pública**: Permite que cualquier usuario visualice la lista, además de exhibirla en una búsqueda.
- **Privada**:Permite que sólo los participantes visualicen la lista, no se exhibe en una búsqueda por usuarios no participantes.
- **El creador de la lista decide**: Permite que la decisión de visibilidad la tome el cliente que crea una lista de tipo determinado.
- **Participación única** : Define la posibilidad de que el usuario participe solamente en una única lista de determinado tipo, en caso que la opción Sim esté marcada, o la posibilidad de participar en más de una lista de determinado tipo, en caso que la opción Não esté marcada.

**Entrega**

- **Productos comprados se entregarán al comprador de la lista**: En este modelo de lista los productos comprados se envían físicamente al propio comprador, habiendo así impacto en el stock de la tienda. Al seleccionar este tipo de lista para su creación, el dueño de la lista no necesita elegir la dirección de entrega, ya que ésta será elegida por el comprador de la lista. Ejemplos: Lista de compras, Lista de deseos.
- **Productos comprados se entregarán al creador de la lista**: En este modelo de lista los productos comprados se envían físicamente al dueño de la lista, habiendo así impacto en el stock de la tienda. Al seleccionar este tipo de lista para su creación, el dueño de la lista necesita elegir la dirección de entrega entre sus direcciones registradas para que se le envíen los productos a esta dirección. Ejemplos: Lista de matrimonio, Lista de Cumpleaños.
- **Valor de los productos comprados será convertido en un vale de compras**: En este modelo de lista los productos comprados no se envían físicamente al dueño, en vez de eso, el crédito se genera a un Vale Compra, por el total del valor de la compra, para el dueño de la lista. Éste puede usar el vale en sus compras en la tienda. Cada vale es asociado a una lista de este tipo y recibe el valor del total de las compras realizadas en la lista. En caso que el dueño de la lista tenga dos tipos de la misma lista, serán creados dos vales, para recibir el valor referente a cada una de las listas de este mismo tipo.

### Registro obligatorio

Usado cuando el usuario debe entregar algún documento de identificación para conseguir crear la lista. Ejemplo: situaciones en las que el vale compras debe ser expedido para el documento del cliente.

### Evento

El dueño de la tienda decide si la lista tendrá o no evento. Una vez grabado el tipo de lista esta información no puede ser editada.

Al seleccionar **Posee evento**, el formulario hace disponibles otras opciones de configuración para el evento, donde será posible configurar todas las fechas límites para la creación de ese tipo de lista, conforme a la imagen abajo.

![eventos.es](https://images.ctfassets.net/alneenqid6w5/Q48lA7Ybjz6mQ8wH27hms/85a9a1f23758f6e1fdc3a016dadeb68b/eventos.es.png)

El área de evento es responsable de definir si la lista creada tiene o no un período preestablecido para la fecha del evento. Listas de desejo o listas de compras no necesitan un período determinado para ocurrencia del evento. En cambio, listas de casamento o de chá de bebe, deben tener en cuenta la fecha del evento, para que así, todos los productos comprados se entreguen al dueño en período hábil según la fecha del evento.

### Participantes

- **Mínimo de participantes**: número de participantes para que la creación de lista sea posible. Ejemplo: 2 para listas de casamento.
- **Máximo de participantes**: Número máximo para la creación de lista. Ejemplo 1 para chá de bebê.
- **Opciones de títulos para los participantes**: Cuáles serán los nombres de los campos en el registro de la lista. Ejemplo: Aniversariante, Bebê, Noiva.
- **Campo livre 1**: Campo adicional para creación de la lista. (opcional)
- **Campo livre 2**: Campo adicional para creación de la lista. (opcional)

### El listado

Después de crear el tipo de lista, usted será dirigido a la pantalla donde aparecen los tipos de listas ya registrados en la tienda. Esa pantalla ofrece las siguientes informaciones y funciones:

![listagem.es](https://images.ctfassets.net/alneenqid6w5/3BTiBXCbQovhe3duPewHZx/410066a38327a8a69a3ffc1ed7bd2029/listagem.es.png)

- **Exportar a Excel**: Permite exportar los datos de tipos de listas para Excel.
- **Versión**:Identificación de listas creadas en la versión antigua de la funcionalidad, con limitaciones. La versión más actual es la “v2”.
- **Entrega**: Identifica dónde se entregará el producto: Al dueño de la lista, al comprador o [si el valor de la compra será revertido en Vale para el dueño de la lista](/es/tutorial/configurando-lista-vale).
- **Visibilidad**:Identifica la visibilidad configurada.
- **Única**: Indica se es posible crear más de una lista del mismo tipo.
- **Participantes**: Exhibe los límites máximo y mínimo configurados para la lista.
- **Status**: Indica si la lista está activa o inactiva.
- **Listas**:Exhibe la cantidad de listas de aquel tipo creadas por los usuarios en el sitio.
- **Ver detalles**: Permite la edición de los campos editables.
- **"Flecha"**: Permite la exhibición de las listas creadas de aquel tipo, de las compras realizadas en las listas de aquel tipo y la exclusión de aquel tipo de lista.
