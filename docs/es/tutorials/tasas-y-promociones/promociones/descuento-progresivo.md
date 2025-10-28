---
title: 'Cómo funciona la promoción Descuento progresivo'
id: tutorials_324
status: PUBLISHED
createdAt: 2017-04-27T22:08:26.447Z
updatedAt: 2025-09-30T13:50:03.053Z
publishedAt: 2025-09-30T13:50:03.053Z
firstPublishedAt: 2017-04-27T23:03:15.195Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: progressive-discount
legacySlug: descuento-progresivo
locale: es
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

El descuento progresivo es una funcionalidad que permite configurar promociones con porcentajes de descuento crecientes a medida que se agregan más productos al carrito. Esta estrategia resulta útil para estimular compras en mayores cantidades, recompensando al cliente con beneficios proporcionales al volumen adquirido.

![Desconto Progressivo gift-ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/tasas-y-promociones/promociones/descuento-progresivo_1.gif)

- [Crear promoción Descuento progresivo](#crear-promocion-descuento-progresivo)
- [Configurar condiciones del Descuento progresivo](#configurar-condiciones-del-descuento-progresivo)
- [Configurar condiciones de aplicación de la promoción](#configurar-condiciones-de-aplicacion-de-la-promocion)
- [Configurar restricciones de uso de la promoción](#configurar-restricciones-de-uso-de-la-promocion)
- [Configurar acumulación y competencia](#configurar-acumulacion-y-competencia)
- [Mostrar la promoción en la página de producto](#mostrar-la-promocion-en-la-pagina-de-producto)

## Crear promoción Descuento progresivo

1. En el Admin VTEX, accede a **Promociones > Promociones** o ingresa **Promociones** en la barra de búsqueda en la parte superior de la página.
2. Haz clic en `Crear promoción`.
3. Selecciona la opción **Descuento progresivo**. 
4. Rellena los campos de la página. Consulta en la tabla a continuación información detallada para rellenar el formulario.
5. Haz clic en `Guardar`.

Aqui está a tabela convertida para o formato Markdown, substituindo as células vazias por "IMAGEMAQUI":  

| Campo                             | Descripción                                                                                                                                                                                                                                                                                                                                                                            | Ejemplo                                                      |
|-----------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------|
| **Nombre**                        | Asigna un nombre claro y objetivo que refleje la finalidad de la promoción, para que los clientes puedan identificarla fácilmente (hasta 150 caracteres).                                                                                                                                                                                                                               | Rebajas de verano.                                           |
| **Status**                        | Define si la promoción estará **Activa** o **Inactiva**. La opción `<i class="fas fa-toggle-on" aria-hidden="true"></i>` aplicará la promoción según la fecha y horas configuradas. La opción `<i class="fas fa-toggle-off" aria-hidden="true"></i>` pausa la promoción, aunque esté dentro del periodo definido.                                                                         | ![Habilitar Promociones-ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/tasas-y-promociones/promociones/descuento-progresivo_2.png) ![Desabilitar Promociones-ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/tasas-y-promociones/promociones/descuento-progresivo_3.png)                                                   |
| **Descripción**                   | La descripción interna de la promoción debe utilizarse para registrar información destinada a la comunicación interna de la tienda (Hasta 10.000 caracteres). Este campo se utiliza para especificar el motivo de la promoción, como una campaña concreta o liquidación de stock.                                                                                                       | Promoción destinada a las rebajas de ítems de la colección Verano. |
| **Fecha y hora de inicio**        | Selecciona la fecha y hora exactas de inicio de la promoción, para que se active en el momento deseado. Implementa los ajustes a medida que planificas la campaña para maximizar su eficacia.                                                                                                                                                                                          | ![Data e horario de inicio da Promociones-ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/tasas-y-promociones/promociones/descuento-progresivo_4.png)                                                  |
| **Fecha y hora de fin**           | Define el periodo de validez de la promoción configurando la fecha y hora exactas para su desactivación automática.                                                                                                                                                                                                                                                                    | ![Data de termino e horario da Promociones-ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/tasas-y-promociones/promociones/descuento-progresivo_5.png)                                                   |
| **Utilizar configuración de recurrencia** | Selecciona esta opción para programar la repetición automática de la promoción en días y horas determinados. Configura los intervalos deseados para garantizar la recurrencia según lo planificado.                                                                                                                                                                                   | ![Usar recorrencia Promociones-ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/tasas-y-promociones/promociones/descuento-progresivo_6.png)                                                   |

### Sellers 
En esta sección, en la esquina derecha de la página, se definen los **Sellers** a los que debe aplicarse la promoción. 

![Seller-ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/tasas-y-promociones/promociones/descuento-progresivo_7.png)

Selecciona una de las siguientes opciones para aplicar la promoción.

- **Todos:** la promoción se aplicará a todos los sellers registrados. Utiliza esta opción cuando desees que todos los productos de todos los sellers formen parte de la campaña.
- **Iguales a:** en esta opción la promoción solo se aplicará a sellers específicos. Tras seleccionar esta opción, rellena el campo con los nombres de los sellers deseados. 
- **Diferentes de:** en esta opción se definen los sellers a los que no se aplicará esta promoción. Después de escoger "Diferentes de", tendrás la opción de seleccionar los sellers que no deseas incluir en la campaña. Se incluirán todos los demás sellers.
- **Participantes**: con esta configuración, la promoción funciona en modo opt-in, lo que significa que la participación de los sellers se gestiona a través del endpoint [Seller opt-in or opt-out](https://developers.vtex.com/docs/api-reference/promotions-and-taxes-api#post-/api/rnb/pvt/calculatorconfiguration/-promotionId-/seller-opt). En esta API, puedes definir qué sellers deben ser incluidos o excluidos de la promoción.

Para obtener más información, consulta [Seller Opt-in for Promotions](https://developers.vtex.com/docs/guides/seller-opt-in-promotions).

### Seleccionar políticas comerciales 
En la esquina derecha de la página, en la sección **Políticas comerciales**, selecciona las políticas comerciales válidas para el descuento. Puedes ofrecer descuentos para políticas comerciales en las que [tu tienda opera como marketplace](/es/tutorial/o-que-e-um-marketplace) (**Mi tienda**) o como seller (**Tiendas de terceros - Fulfillment**).

Puedes elegir entre las siguientes opciones:

- **Todas:** esta opción aplica la promoción a todas las políticas comerciales registradas, sin ninguna restricción. Se incluirán todos los productos en la promoción independientemente de la política comercial asociada.
- **Iguales a:** esta opción te permite especificar las políticas que se aplican a los productos que recibirán el descuento.
- **Diferentes de:** esta opción remueve determinadas políticas para garantizar que el descuento no se aplique a productos que sigan esas reglas comerciales.

![Politica comercial-ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/tasas-y-promociones/promociones/descuento-progresivo_8.png)

## Configurar condiciones del Descuento progresivo
Determina las condiciones y los porcentajes de descuento que deben aplicarse. Consulta a continuación las condiciones disponibles:

- **SKUs:** selecciona los SKUs a los que se aplicará el descuento progresivo. Esta opción restringe la promoción a los productos asociados a los SKUs elegidos.
- **Colecciones:** selecciona las [colecciones](/es/tutorial/criando-colecao-de-produtos--tutorials_244) de productos donde se aplicará el descuento progresivo. Esta opción permite aplicar la promoción a un grupo de productos predefinidos.
- **Debe ser el mismo ítem:** esta opción aplica el descuento solo a productos idénticos. Por ejemplo, si agregas diferentes SKUs pertenecientes a la misma colección, la promoción no se aplicará. La regla considera únicamente la cantidad de unidades de un mismo SKU en el carrito.
- **Descuento:** esta opción permite configurar el porcentaje de descuento que se aplica cuando se alcanza la cantidad mínima de ítems especificada. Puedes crear hasta 10 rangos de descuento progresivo. 
- **Agregar rango:** en esta opción puedes configurar niveles de descuento progresivo adicionales. Por ejemplo, puedes configurar que al alcanzar 10 unidades, el descuento sea del 5 %, y que al llegar a 20 unidades, aumente al 10 %. El número máximo de rangos configurables es 10.

![Desconto Promociones-ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/tasas-y-promociones/promociones/descuento-progresivo_9.png)

## Configurar condiciones de aplicación de la promoción
Las condiciones permiten activar la promoción en circunstancias específicas según los criterios seleccionados. Para agregar una condición, sigue las instrucciones a continuación:

- **Número BIN de la tarjeta:** la promoción solo se aplicará cuando se utilicen tarjetas de redes, bancos o categorías específicas identificadas por su número BIN. Importa una lista de BIN con un archivo de texto (.txt) o un archivo CSV (.csv) que describa cada BIN en una fila diferente.
- **Clúster de clientes:** selecciona un [clúster de clientes](/es/tutorial/como-criar-um-cluster-de-clientes) previamente creado en Master Data, siguiendo el formato `field=value` o `field contains value`. Selecciona una de las siguientes opciones:

    - **Todos los siguientes:** la promoción se aplicará solo si se cumplen todos los criterios del clúster.
    - **Al menos uno de los siguientes:** la promoción se aplicará si se cumple al menos uno de los criterios del clúster.
- **Ubicación del envío:** aplica la promoción en función de la dirección de entrega asociada al pedido. Las condiciones pueden configurarse utilizando los siguientes criterios:

    - **Países:** especifica los países en los que será válida la promoción. Puedes seleccionar hasta 50 países de la lista. La promoción solo se aplicará a los pedidos cuyo envío esté vinculado a los países configurados.
    - **Código postal de entrega:** permite configurar rangos de códigos postales para limitar la aplicación de la promoción a regiones específicas.
        - **Selecciona Incluir o Eliminar:** define si la promoción aplicará a los rangos configurados (Incluir) o no (Excluir).
        - **Configura los rangos de códigos postales:** rellena los campos "de" y "hasta" con los códigos postales que desees.
        - **Agrega rangos:** utiliza la opción + Agregar rango para incluir otros rangos según sea necesario.

![CEP Promociones-ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/tasas-y-promociones/promociones/descuento-progresivo_10.png)

- **Parámetro UTM:** permite configurar la promoción para que se aplique cuando se acceda al sitio web mediante una URL con parámetros UTM o cuando se utilice un cupón asociado a esos parámetros. Define los parámetros UTM siguiendo las reglas de formato, utilizando solo letras, números, guiones y guiones bajos.

> ℹ️ Utilizar parámetros UTM es opcional y permite configurar descuentos en campañas específicas.

Define los siguientes parámetros si es necesario:

    - **Fuente UTM**: el descuento se aplica al navegar utilizando el parámetro utm_source configurado.
    - **Campaña UTM:** el descuento se aplica cuando al navegar utilizando el parámetro utm_campaign configurado.
    - **Crear cupón a partir de los parámetros UTM anteriores:** permite generar un cupón con los parámetros UTM ingresados en los campos `Fuente UTM` y `Campaña UTM`.
    - **Ver cupones vinculados:** permite ver los cupones que ya se vincularon a los parámetros UTM definidos.
- **Medio de pago:** la promoción solo se aplicará cuando el cliente utilice uno de los medios de pago previamente configurados. Entre las opciones disponibles, pueden seleccionarse:

    - Boleto Bancário.
    - Tarjetas de crédito de las redes Visa, Mastercard, entre otras.
    - Otros medios de pago, como Diners o Hipercard.

## Configurar restricciones de uso de la promoción
En esta sección puedes definir la opción de combinar la promoción con otras promociones. Las opciones disponibles son:

- **Limitar el uso de las promociones en la tienda:** restringe la cantidad de veces que se puede utilizar la promoción en la tienda.
- **Limitar uso de la promoción por cliente:** permite restringir el número de veces que cada cliente puede utilizar la promoción.
- **Limitar el número de ítems elegibles por carrito:** restringe el número máximo de ítems por pedido que pueden recibir el descuento de la promoción.

## Configurar acumulación y competencia
Define cómo se aplicará la promoción en conjunto con otras condiciones comerciales de la tienda.

- **Permitir acumular con precios manuales:** selecciona esta configuración para que la promoción se aplique a los productos cuyo precio se haya ajustado manualmente.

## Mostrar la promoción en la página de producto
Destaca la promoción en la página de producto y agrega datos personalizados para personalizar esta sección de la tienda.

- **Destacar promociones en los productos:** marca esta opción para mostrar la promoción directamente en las páginas de producto. 

> ⚠️ Recuerda [configurar la visualización en el módulo CMS](/es/tutorial/configurando-promocao-com-destaque-flag--tutorials_2295).

- **Información adicional:** haz clic en `Crear` para agregar campos personalizados con nombre y valor, que puedes utilizar para personalizar la tienda.

