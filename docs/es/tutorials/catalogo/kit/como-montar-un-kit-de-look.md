---
title: 'Montar un Kit de look'
id: tutorials_266
status: PUBLISHED
createdAt: 2017-04-27T22:11:08.863Z
updatedAt: 2025-09-16T14:45:58.909Z
publishedAt: 2025-09-16T14:45:58.909Z
firstPublishedAt: 2017-04-27T23:03:12.436Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slugEN: how-to-assemble-an-outfit
legacySlug: como-montar-um-kit-look
locale: es
subcategoryId: 17Lkzo2rGBE1Bt7dXjE0tV
---

> ⚠️ Tutorial válido solo para tiendas CMS Portal Legado.

Aprenda cómo configurar en VTEX un kit de look o Lookbook.

Antes de hablar sobre el Kit de look es importante recordarle que debe crear un Kit. Para eso, acceda al artículo [Registrar kit](/es/tutorial/cadastrando-kit/).

Las diferencias entre el KIT y el KIT DE LOOK:

**KIT:** En un kit, los productos componentes sólo se pueden vender en el kit, o sea, no se pueden vender por separado. Esto significa que si el producto “Blusa” está en el kit “Praia”, aunque se busque el producto Blusa en el sitio, éste no se podrá vender fuera del kit – con sus demás componentes.

**KIT DE LOOK:** En un kit de look, todos los productos componentes se pueden encontrar en el sitio y se pueden vender fuera del kit, o sea, incluso en la página de producto del kit de look se pueden comprar los productos por separado, o todos juntos. Vea nuestra documentación de personalización del kit de look.

### ¿Qué es el Kit de look?

Este término es muy conocido en el rubro de la Moda. Un Kit de look es un modo en el que se puede comprar varios productos visualizando solamente la pantalla de un solo producto.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/catalogo/kit/como-montar-un-kit-de-look_1.gif)

En el layout arriba se pueden seleccionar los ítems del kit de look que el cliente quisiera comprar y luego hacer clic en “Comprar Produtos Selecionados”.

O si prefiere, puede comprar el kit de look completo manteniendo todos los ítems seleccionados.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/catalogo/kit/como-montar-un-kit-de-look_2.gif)

En este layout cada ítem tiene un botón de “Comprar Separadamente”.

Si prefiere comprar el kit de look completo, sólo tiene que hacer clic en “Comprar Look”.

Al hacer clic en comprar, independientemente del layout, todos los componentes del kit de look se agregarán al carrito automáticamente e individualmente, o sea, si el kit de look tiene 4 ítems, los 4 ítems serán agregados.

### Implantación de las páginas de los kits

```
<div id="top-right">
                        <span id="selecione-kit">SELECIONE AS PEÇAS DO LOOK</span>
                        <!-- ITEM KIT -->
                        <div class="kit clearfix">
                            <div class="kit-info">
                                <div class="kit-image">
                                    <vtex.cmc:ProductImage productIndex="1" />
                                </div>
                                <div class="tpl-right">
                                    <div class="nome-kit"><h2><vtex.cmc:productName productIndex="1" /></h2></div>
                                    <div class="skuSelection">
                                        <vtex.cmc:skuSelection changeImage="1" productIndex="1" />
                                    </div>
                                    <div class="dv-buy-button clearfix">
                                        <vtex.cmc:BuyInPage productIndex="1" />
                                    </div>
                                    <div class="preco-kit">
                                        <vtex.cmc:skuPrice productIndex="1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- // ITEM KIT -->
                        <!-- ITEM KIT -->
                        <div class="kit clearfix">
                            <div class="kit-info">
                                <div class="kit-image">
                                    <vtex.cmc:ProductImage productIndex="2" />
                                </div>
                                <div class="tpl-right">
                                    <div class="nome-kit"><h2><vtex.cmc:productName productIndex="2" /></h2></div>
                                    <div class="skuSelection">
                                        <vtex.cmc:skuSelection changeImage="1" productIndex="2" />
                                    </div>
                                    <div class="dv-buy-button clearfix">
                                        <vtex.cmc:BuyInPage productIndex="2" />
                                    </div>
                                    <div class="preco-kit">
                                        <vtex.cmc:skuPrice productIndex="2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- // ITEM KIT -->
                        <!-- ITEM KIT -->
                        <div class="kit clearfix">
                            <div class="kit-info">
                                <div class="kit-image">
                                    <vtex.cmc:ProductImage productIndex="3" />
                                </div>
                                <div class="tpl-right">
                                    <div class="nome-kit"><h2><vtex.cmc:productName productIndex="3" /></h2></div>
                                    <div class="skuSelection">
                                        <vtex.cmc:skuSelection changeImage="1" productIndex="3" />
                                    </div>
                                    <div class="dv-buy-button clearfix">
                                        <vtex.cmc:BuyInPage productIndex="3" />
                                    </div>
                                    <div class="preco-kit">
                                        <vtex.cmc:skuPrice productIndex="3" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- // ITEM KIT -->
</div>

```

El control **_BuyInPage_**, descrito en el código arriba, sólo funcionará con la utilización del control **_AmountItemsInCart_** (en el propio template o en cualquier subtemplate relacionado).

Entienda la relación entre esos controles en [Lista Completa de Controles](/es/tutorial/lista-de-controles-para-templates/).

`changeImage=”1″`: indica cuál campo va a cambiar la imagen del sku al ser seleccionado.

Este template se debe asociar a un nuevo Layout de Página de Produto que se aplicará sólo en la categoría en la que los Kits están registrados. Para no crear varios templates, simplemente inserte el mismo código con más frecuencia, cambiando el valor de _**productIndex**_.

**Ejemplo 1:** Si tiene un producto kit con 3 componentes y otro producto kit con 5 componentes y desea usar esta funcionalidad del Kit Look para los dos productos kits, no es necesario crear un template para cada cantidad. Usted puede crear un template con 5 o grupos de controles de los componentes (**productIndex=numeroMaximo**). Entendiendo que _numeroMaximo_ es el valor del kit con mayor número de componentes.

**Ejemplo 2:** Cuando se usa el **productIndex=0**, se exhibe la información del kit en sí. En la página del producto que tenga un kit con 2 componentes, mostrará sólo los 2 componentes. Si tiene un kit con 4 componentes, exhibirá los 4.

Resumiendo, la tienda puede crear un template con la cantidad de _product index_ que desee. En la página del producto sólo aparecerá la cantidad de componentes de cada kit.
