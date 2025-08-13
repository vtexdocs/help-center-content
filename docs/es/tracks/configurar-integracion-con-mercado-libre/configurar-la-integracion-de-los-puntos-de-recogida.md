---
title: 'Configurar la integración de los puntos de recogida '
id: 52C1lm8gMovN8v68s6v89d
status: DRAFT
createdAt: 2021-08-12T18:12:20.076Z
updatedAt: 2024-03-11T22:19:05.610Z
publishedAt: 
firstPublishedAt: 2021-08-19T15:16:01.224Z
contentType: trackArticle
productTeam: Channels
slugEN: configure-integration-of-pick-up-points
locale: es
trackId: 
trackSlugEN: configurar-integracion-con-mercado-libre
---

Poner a disposición de los consumidores [puntos de recogida](https://help.vtex.com/es/tutorial/configurar-pontos-de-retirada-pickup-points--2R5ClQiwe4KoSQgsuiOw4E) forma parte del alcance de las [estrategias de comercio unificado](https://help.vtex.com/es/tracks/estrategias-de-comercio-unificado--3WGDRRhc3vf1MJb9zGncnv) de una tienda y se presenta como una importante evolución en la logística de entregas y gestión de stock.

En este artículo, explicaremos cómo crear puntos de recogida en Mercado Libre, a partir de los que ya están registrados en las [cuentas franquicia](https://help.vtex.com/pt/tutorial/definicoes-de-conta-franquia-e-seller-white-label--5orlGHyDHGAYciQ64oEgKa) en VTEX. 

Cuando los pedidos que utilizan la opción de recogida en la tienda llegan a VTEX, se asignan a la cuenta franquicia que posee el punto de recogida elegido por el cliente y se modifica el stock del punto de recogida.

![configurar pontosderetirada01 ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/configurar-integracion-con-mercado-libre/configurar-la-integracion-de-los-puntos-de-recogida_1.JPG)

<div class="alert alert-info">
Antes de crear los puntos de recogida, debe solicitar a Mercado Livre la activación de la modalidad “Recogida en la tienda”. Para eso, contacte a su asesor comercial de Mercado Libre o abra un ticket para el equipo de <a href="https://developers.mercadolivre.com.br/en_us/support/">Soporte.</a>
</div>

Para criar os pontos de retirada, você vai precisar:

- [Registrar el punto de recogida ](#registrar-el-punto-de-recogida) 
- [Configurar el punto de recogida](#configurar-el-punto-de-recogida)
- [Activar el punto de recogida de las cuentas franquicia](#activar-los-puntos-de-recogida-de-las-cuentas-franquicia)
- [Confirmar el envío del punto de recogida](#confirmar-el-envio-del-punto-de-recogida)
- [Confirmar la asociación del punto de recogida con el anuncio](#confirmar-la-asociacion-del-punto-de-recogida-y-el-anuncio)

## Registrar el punto de recogida 

En primer lugar, [registre](https://help.vtex.com/es/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx/6Mk0PK5AwSVzEufC3FmtAO) un punto de recogida. Durante el registro, obligatoriamente debe completar la información de los siguientes campos: 

- **Instrucciones de recogida:** cregistre un número de teléfono de contacto con el formato `(XX) XXXX-XXXX`.
- **Dirección:** registre el código postal correctamente para que el cliente pueda seleccionar el punto de recogida según el código postal que prefiera.

## Configurar el punto de recogida

Una vez que el punto de recogida esté registrado, hay que configurarlo. Lea el artículo [Configurar puntos de recogida](https://help.vtex.com/es/tutorial/configurar-pontos-de-retirada-pickup-points) para más información. 

El punto de recogida debe estar asociado a una [política de envío](https://help.vtex.com/es/tutorial/gerenciar-transportadora--tutorials_140), que es un conjunto de reglas que definen las opciones y condiciones de flete que se ofrecerán en el momento de finalización de la compra.

Su política de envío debe estar vinculada al [muelle](https://help.vtex.com/es/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx/4Rr5XpzAzUPv2Eo9Mh7cEj) el cual está asociado a la [política comercial](https://help.vtex.com/es/tutorial/o-que-e-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE) utilizada en la integración de Mercado Libre.

Cuando la configuración se activa, los puntos de recogida que pertenecen a la política comercial configurada se enviarán automáticamente a Mercado Libre.

## Activar los puntos de recogida de las cuentas franquicia 

Para ativar os pontos de retirada nas contas franquias:

1. Acceda al Admin VTEX.
2. En el módulo MARKETPLACE, seleccione **Integraciones**.
3. Luego, haga clic en `Configuración`.
4. En la integración de Mercado Libre, haga clic en el ícono de engranaje <img class="shadow-4" src="https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/configurar-integracion-con-mercado-libre/configurar-la-integracion-de-los-puntos-de-recogida_6.JPG" />.
5. Elija la opción `Editar configuración`.
6. En el campo **Activar integración de los puntos de recogida de las cuentas franquicia**, haga clic en la opción `Sí`.
7. Haga clic en `Guardar configuración`.

![Home (3)](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/configurar-integracion-con-mercado-libre/configurar-la-integracion-de-los-puntos-de-recogida_2.gif)

## Confirmar el envío del punto de recogida  

Para comprobar si el punto de recogida se envió a Mercado Libre:

1. Acceda al Admin VTEX.
2. En el módulo MARKETPLACE, seleccione **Integraciones**. 
3. Haga clic en `Puntos de recogida`.

En la lista de puntos de recogida enviados, podrá ver cuáles se enviaron con éxito y cuáles tienen un error de configuración.

![Home (4)](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/configurar-integracion-con-mercado-libre/configurar-la-integracion-de-los-puntos-de-recogida_3.gif)

En Mercado Libre no hay una pantalla para visualizar si un determinado punto de recogida ha sido vinculado. Recomendamos que elija un anuncio en Mercado Libre que esté asociado al punto de recogida y que realice una compra de prueba, eligiendo la opción «Punto de recogida» en el checkout. A continuación, compruebe si el punto de recogida realmente está disponible en la lista que Mercado Libre muestra en el checkout.

## Confirmar la asociación del punto de recogida y el anuncio  

![configurar pontosderetirada02 ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/configurar-integracion-con-mercado-libre/configurar-la-integracion-de-los-puntos-de-recogida_4.JPG)

Para confirmar si el punto de recogida se asoció correctamente con el anuncio de Mercado Libre, debe verificar qué puntos de recogida están sincronizados con cada SKU y sus respectivos stocks. Realice los siguientes pasos:

1. Acceda al Admin VTEX.
2. En el módulo MARKETPLACE, seleccione **Integraciones**.
3. Haga clic en `Valores`.
4. Filtre la lista a través de la opción `Mercado Libre`.
5. Encuentre el SKU deseado escribiendo el nombre del mismo en la barra de búsqueda.

Si no se produjo ningún error, el SKU encontrado se sincronizará con los puntos de recogida, y sus respectivos stocks se mostrarán en la lista.

![Home (5)](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/configurar-integracion-con-mercado-libre/configurar-la-integracion-de-los-puntos-de-recogida_5.gif)
