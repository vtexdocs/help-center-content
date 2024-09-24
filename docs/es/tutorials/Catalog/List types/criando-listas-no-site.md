---
title: 'Crear listas de regalo en el sitio'
id: tutorials_248
status: ARCHIVED
createdAt: 2017-04-27T22:12:16.638Z
updatedAt: 2022-09-08T16:44:29.667Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:11.354Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slugEN: creating-lists-on-the-site
locale: es
legacySlug: criando-listas-no-site
subcategoryId: 6aeeWirCBUwwCmeIWOgIWs
---

Esta funcionalidad le permite al consumidor crear listas de compras en la tienda online, que pueden ser asociadas a un evento como matrimonio, cumpleaños, o ser simplemente una lista de su deseo. Para que funcione correctamente, su agencia o equipo responsable por el front-end deben crear los debidos templates en el módulo de Portal. 

La definición de las opciones de tipos de listas que serán creadas y sus respectivas particularidades, la hace el dueño de la tienda a partir de la plataforma, como explica el artículo [Cómo crear tipo de lista](http://help.vtex.com/es/tutorial/criando-tipo-de-lista "Cómo crear tipo de lista").

Dependiendo del tipo de lista que el consumidor haga, cada una le servirá para algo en particular, pero el objetivo principal es que el consumidor agregue productos que desea obtener y podrá accederla para comprar los productos a partir del login de su registro en la tienda. 

Puede servir también como una lista en la que otras personas visualicen los productos y los compre, para regalarle al dueño de la lista, como en casos de eventos como matrimonios, cumpleaños, etc.

Abajo va un ejemplo de cómo aparece el link, cuando su tienda sea creada y aún no ha tenido personalización del template. Dependiendo de la personalización que haga en su sitio, ese link puede tener cualquier nombre, pero normalmente lo dirige a /giftlist.

El link “Minha Lista” hace disponibles tres opciones: Buscar uma lista, Criar uma nova lista y Gerenciar minhas listas. Entienda las particularidades de cada una de ellas:

![](//images.contentful.com/alneenqid6w5/3lEYA5uyJGSuMkMGqOmi0c/55f5091aa3eeff82db785b283518b3f3/Como_criar_lista_no_site_1.jpg)

## **Buscar una Lista**

![](//images.contentful.com/alneenqid6w5/IP0hyIHPEse28MIKKYwwQ/ee54d32cf1cefcf6c92912c2ebb007af/Como_criar_lista_no_site_2.gif)

Para buscar una lista en el sitio, haga clic en el link “Minha lista” y rellene uno de los campos disponibles para filtro, conforme a los de abajo. Esa página puede variar de acuerdo a la personalización que se haga en el sitio, la que puede, por ejemplo, limitarse a usar sólo los campos “Nome”, “Sobrenome” y “Data do Evento”.

- **Tipo de lista:** Selección del tipo de lista de acuerdo al registro hecho por el dueño de la tienda en la plataforma, como explica el artículo [Cómo crear tipo de lista](http://help.vtex.com/es/tutorial/criando-tipo-de-lista "Cómo crear tipo de lista"). Este es el único campo que necesita rellenarse en conjunto con otro campo, porque en su sitio habrá listas de diversos consumidores y si el tipo de lista desplegase todos los resultados, un cliente podría acceder la lista del otro;
- **Código da lista:** Facilitado al crear la lista. Este campo se puede usar solo para filtrar la lista;
- **Nome:** Como lo haya definido el dueño de la lista. El invitado o cualquier usuario que haga una búsqueda de listas, normalmente lo hará por el nombre del dueño de la lista. Este campo se puede usar solo para filtrar las listas referentes al nombre del dueño de la lista, pero si el dueño tiene más de una lista, se exhibirán todas;
- **Sobrenome:** Como lo haya definido el dueño de la lista. Este campo se puede usar solo para filtrar las listas referentes al apellido del dueño de la lista, pero si el dueño tiene más de una lista, se exhibirán todas. Si se usa junto con el campo nombre y tipo de lista, tendrá un resultado más específico;
- **Local do evento:** Dirección del local donde se realizará el evento. Este campo puede usarse solo para filtrar listas referentes a la dirección informada, pero por ser una información que puede ser rellenada de diversas formas, se recomienda usar junto con otros campos, para tener un resultado más específico;
- **Data do evento:** Día en que ocurrirá el evento. Así como en los demás campos, puede que haya otras listas con eventos que ocurran el mismo día. Entonces, si usa sólo este campo para filtrar, puede que lo remita a otras listas además de la que busca.

## **Crear una nueva lista**

Para crear una nueva lista en el sitio, acceda al link “Minha Lista” (que normalmente tiene el camino /giftlist), haga clic em “Criar nova Lista”, rellene los campos del formulario, conforme a los de abajo, marque la opción “Li e estou de acordo com o regulamento” y grábelo. Es necesario que el usuario tenga un registro en su tienda y haga login, ya que éste será el dueño de la lista y el hecho de estar logado asociará la lista al usuario. Cuando se crea una lista en su sitio, queda grabada en la plataforma en el módulo de E-Commerce en Relatórios &gt; Listas &gt; Todas las Listas. Sigue una lista de los detalles de cada campo disponible en el formulario para crear la lista:

## **Crear lista**

- __Tipo de lista__:Tipos registrados por el dueño de tienda en la plataforma;**
- __Nome da lista__:Lo define el usuario al crearla. Depende mucho del tipo de lista elegido, pero normalmente es el nombre del propio usuario, si estamos pensando que normalmente la lista se usa en eventos como matrimonios, cumpleaños, etc**;**
- **URL da lista:** Es el link que será usado en la divulgación de su lista. Basta con insertar en este campo, el final de la dirección de su lista después de la última barra. El estándar es** http://www.sualoja.com.br/list/ + valor que inserte en este campo.
- **Quem pode ver esta lista?:** Las opciones que aparecen aquí varían de acuerdo a las configuraciones registradas por el dueño de la tienda al crear el tipo de lista. Si está configurado para “Criador da lista decide”, aparecerán las opciones “somente os participantes desta Lista” y “qualquer pessoa”. Aparecerá sólo la primera opción si el tipo de lista tiene visibilidad definida como “Privada” y, sólo la segunda opción se está como “Pública”. La opción “Criador da lista decide” es importante para el usuario, en una lista de matrimonio, por ejemplo, porque los novios pueden querer restringir el acceso a la lista sólo para ellos mientras eligen los productos y la administran y abrirla para que cualquier persona tenga acceso cuando la lista esté completa.
- **Upload de imagem:** Este campo permite atribuir una imagen para representar el evento o para de alguna forma personalizar la lista, con la foto de los novios, por ejemplo.
- **Mensagem:** Permite que el dueño de la lista le deje un mensaje a sus convidados, conforme lo desee. Tiene límite de 1000 caracteres (contando letras, números, espacios y puntuación).

## **Miembros**

- Nombre
- Apellido
- E-mail

_Para incluir a un nuevo participante, haga clic en el link “incluir participante”. El límite de inclusión de miembros en la lista es de acuerdo a lo configurado al crear el tipo de lista, pero se recomienda que la lista tenga a lo más dos personas, ya que cuanto mayor la cantidad de miembros administrando la lista, mayor la probabilidad de que hagan mal uso de la lista._

## **Dirección de entrega**

- CP
- Calle
- Número
- Complemento
- Barrio
- Ciudad
- Estado
- Dirección comercial
- Quién lo recibirá

_En caso que el usuario ya tenga registro en la tienda, la dirección aparecerá automáticamente, pero tendrá la opción de cambiar la dirección o registrar una nueva y usar esa nueva. Para eso existen los links “Modificar endereço selecionado” y “Entregar em outro endereço”, respectivamente._

## **Regulación**

Se define de acuerdo a la necesidad de términos y condiciones de cada tienda para regular e informar cómo funciona la lista en su sitio. Se presenta como un campo de texto sólo para lectura y con barra de desplazamiento vertical. El texto que será visualizado aquí debe ser registrado en configuración de textos en el admin. Para eso siga los pasos abajo:

- Acceda al módulo de __Catalog__
- Vaya a configurações y haga clic en __Textos__
- Haga clic en __Selecione o ID do texto a Editar__
- Busque por __GifListThermsText__
- Digite el texto en el campo debajo del campo de selección y grábelo

_Para que esa información aparezca en el campo reglamento, cada vez que un cliente quiera crear una lista, su agencia o equipo responsable de la personalización del front-end deberá usar el control `<vtex.cmc:GiftListFormV2 />` adentro del elemento ```<body>``` de su plantilla._

## **Administrar mis Listas**

Para administrar sus listas, el usuario debe estar logado en el sitio, para entonces acceder al link “Minha Lista” (que normalmente tiene el camino `/giftlist`), hacer clic en “Gerenciar minhas Listas” y después en una de las acciones abajo, referente a la respectiva línea de la lista en la que desea que la acción seleccionada se tome.

##### **Visualizar**

Aquí tendrá una visión macro de su lista, que contendrá la información rellenada al crear la lista y los productos insertados en ella. Además están los links para divulgar la lista, o sea, hacerla pública, en caso que la haya configurado como privada; editar y administrar, conforme a la explicación abajo y también puede tener un resumen de cuántos productos ha agregado y cuántos han sido comprados. Puede haber otras funcionalidades como comprar todos los productos de la lista o imprimir lista, pero eso dependerá de la personalización que le haga en su front-end.

### Gestionar

Aquí la visión es muy parecida a la acción anterior, pero con la funcionalidad de agregar más unidades de los productos seleccionados o excluirlos de la lista.

### Editar

Aquí la visión es la misma que el usuario tiene cuando crea la lista. La intención es que el dueño de la lista pueda cambiar cualquier configuración que haya hecho al crearla.

### Borrar

Excluirá la lista. Al hacer clic aparece una ventana emergente para confirmar la solicitud.

## **Insertando productos a la lista**

Después de crear la lista, puede incluir los productos a una lista a través de la navegación por el sitio y haciendo clic en el botón “Adicionar produtos às suas Listas”. La funcionalidad de este botón está vinculada al uso del control `&lt;vtex.cmc:GiftListInsertSkuV2 /&gt;` adentro del ```<body>``` en su plantilla de la pagina de producto.

_Existe un límite en la cantidad de asociaciones de **300** SKUs por lista. _

##### **Particularidades en Lista vale**

Los ítems comprados a partir de su lista, generarán un crédito que se acumulará en un vale automáticamente generado en el momento de crear la lista. Este vale funcionará como una forma de pago, para que el dueño de la lista lo rescate en compras de cualquier ítem que desee en el sitio. 

Lea más sobre la forma de pago vale en el artículo [Gift Card](/es/tutorial/gift-card "Gift Card"). Recordando que los tipos de listas disponibles para crear en el sitio, deberán ser previamente creados en la plataforma por el dueño de la tienda.

**Nota importante:** Las tiendas que son de mercado (productos de vendedores vendedores, otros socios en su tienda) no son elegibles para usar el vale de la lista.

