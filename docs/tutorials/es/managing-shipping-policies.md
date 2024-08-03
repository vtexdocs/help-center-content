---
title: 'Gestionar políticas de envío'
id: 30nynylgbWieimhaMtGTIE
status: PUBLISHED
createdAt: 2024-01-30T16:15:33.582Z
updatedAt: 2024-01-31T13:48:35.723Z
publishedAt: 2024-01-31T13:48:35.723Z
firstPublishedAt: 2024-01-31T00:54:58.302Z
contentType: tutorial
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slug: gestionar-politicas-de-envio
locale: es
legacySlug: gestionar-politicas-de-envio
subcategory: 7fTH6bP0C4IaM8qWi0kkQC
---

La [política de envío](https://help.vtex.com/es/tutorial/politica-de-envio--tutorials_140) es un conjunto de reglas y ajustes que definen las opciones de envío que se mostrarán a los clientes en el checkout. La relación entre la política de envío, [almacén](https://help.vtex.com/es/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb) y [muelle](https://help.vtex.com/es/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj) es lo que conforma la [estrategia de envío](https://help.vtex.com/es/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3) en VTEX, como se muestra en la siguiente imagen:

![shipping_strategy_ES](https://images.ctfassets.net/alneenqid6w5/1LdEuL3gjF12uwFj4ya6OL/ebc72f36e25bc9e6000d7d0b275bd1be/shipping_strategy_ES.png)

Este artículo describe cómo monitorear y gestionar las políticas de envío. La pestaña **Políticas de envío** en el Admin VTEX, accesible en **Envío > Estrategia de envío**, te permite realizar las siguientes acciones:

* [Ver lista de políticas de envío](#ver-lista-de-politicas-de-envio)
* [Buscar políticas de envío](#buscar-politicas-de-envio)
* [Filtrar políticas de envío](#filtrar-politicas-de-envio)
* [Ver dashboard de transportadoras (opcional)](#ver-dashboard-de-transportadoras-solo-brasil)
* [Editar políticas de envío](#editar-politicas-de-envio)
* [Activar o desactivar políticas de envío](#activar-o-desactivar-politicas-de-envio)
* [Eliminar políticas de envío](#eliminar-politicas-de-envio)

También puedes crear políticas de envío. Consulta [Crear una política de envío](https://help.vtex.com/es/tutorial/criar-uma-politica-de-envio--66rJO4LKBdyMJOH6Z3dsaT) para más información.

## Ver lista de políticas de envío

La pestaña **Políticas de envío** del Admin VTEX, accesible a través de **Envío > Estrategia de envío**, muestra una lista como se ilustra a continuación:

![shipping_policy_ES](https://images.ctfassets.net/alneenqid6w5/uiwwWTGlS60kPjMDLNfzY/04e7831e6af05ee2312eb51720c4e7f1/shipping_policy_ES.png)

La información de la lista se describe en la siguiente tabla:

| **Columna** | **Descripción** |
| :---: | :--- |
| Política de envío | Nombre que identifica tu [política de envío](https://help.vtex.com/es/tutorial/politica-de-envio--tutorials_140) para los usuarios que tienen acceso al Admin VTEX. Para más información, consulta [Crear una política de envío](https://help.vtex.com/es/tutorial/criar-uma-politica-de-envio--66rJO4LKBdyMJOH6Z3dsaT). |
| Método de envío | <p><a href="https://help.vtex.com/es/tutorial/como-funciona-o-tipo-de-envio--tutorials_126">Método de envío</a> es el nombre que configuras en la política de envío que se mostrará a los clientes en el checkout. Por lo tanto, es importante utilizar nombres intuitivos al crear una política de envío.</p><p>Ejemplo: <code>Envío express</code> e <code>Envío estándar</code>.</p> |
| Muelles | Identifica los [muelles](https://help.vtex.com/es/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj) asociados a la [política de envío](https://help.vtex.com/es/tutorial/politica-de-envio--tutorials_140). Al pasar el mouse sobre el número de esta columna, se muestran los nombres de todos los muelles asociados a la política de envío. |
| Status | <p>Status de activación de la política de envío, que puede ser:</p><p><ul><li><b>Activa:</b> la política de envío está activada y se considera válida en el <a href="https://help.vtex.com/es/tutorial/como-funciona-o-calculo-de-envio--tutorials_116">cálculo</a> de envío de pedidos.</li><li><b>Inactiva:</b> la política de envío está desactivada y no es válida para envíos.</li></ul></p> |
| Transportadora (solo Brasil) | Este campo solo se muestra en el Admin VTEX de tiendas que activaron la funcionalidad [VTEX Shipping Network Correio](https://help.vtex.com/pt/tutorial/vtex-shipping-network-correios-ativacao--57opHihFbRAwrjQjCTymTa) o que contrataron [VTEX Shipping Network](https://help.vtex.com/pt/tutorial/pronto-para-envio--5YOZV7Aotv3pap0fGNESDs) y solamente identifica a Correios. |
| Contrato (solo Brasil) | <p>Este campo solo se muestra en el Admin VTEX de tiendas que hayan activado <a href="https://help.vtex.com/pt/tutorial/vtex-shipping-network-correios-ativacao--57opHihFbRAwrjQjCTymTa">VTEX Shipping Network Correios</a>.</p><p>Los valores pueden ser:</p><p><ul><li><b>VTEX:</b> la tienda contrató una tabla de Correios mediada por VTEX.</li><li><b>Propio:</b> la tienda contrató una tabla por cuenta propia antes de activar VTEX Shipping Network Correios.</li></ul></p> |

## Buscar políticas de envío

La caja de búsqueda que tiene el ícono de lupa <i class="fas fa-search"></i> te permite buscar políticas de envío por nombre. Ingresar un carácter en la barra de búsqueda activa la búsqueda inmediatamente. Para limpiar la búsqueda, haz clic en el ícono de cerrar <i class="far fa-times-circle"></i>.

<div class = "alert alert-info">
Si la búsqueda no devuelve ningún resultado, comprueba la ortografía del término o si hay algún filtro seleccionado.
</div>

## Filtrar políticas de envío

Puedes filtrar políticas por status, ya sea `Activa` o `Inactiva`, según se describe a continuación:

1. En el Admin VTEX, accede a **Envío > Estrategia de envío** o ingresa **Estrategia de envío** en la barra de búsqueda en la parte superior de la página.
2. En la pestaña **Políticas de envío**, haz clic en `Status`.
3. Selecciona una de las opciones de status:
    * **Activa:** la política de envío está activada y se considera válida en el [cálculo](https://help.vtex.com/es/tutorial/como-funciona-o-calculo-de-envio--tutorials_116) de envío de pedidos.
    * **Inactiva:** la política de envío está desactivada y no es válida para envíos. 
4. Haz clic en `Aplicar`.

Para remover el filtro aplicado, haz clic en `Status` y después en `Limpiar`.

### Filtro para tipos de contrato (solo Brasil)

Las tiendas que hayan contratado [VTEX Shipping Network](https://help.vtex.com/pt/tutorial/pronto-para-envio--5YOZV7Aotv3pap0fGNESDs) o hayan activado [VTEX Shipping Network Correios](https://help.vtex.com/pt/tutorial/vtex-shipping-network-correios-ativacao--57opHihFbRAwrjQjCTymTa) pueden buscar por tipo de contrato:

* `VTEX`: la contratación de la tabla de Correios fue mediada por VTEX.
* `Propio`: la propia tienda realizó la contratación de la tabla de Correios.

## Ver dashboard de transportadoras (solo Brasil)

Las tiendas que hayan contratado [VTEX Shipping Network](https://help.vtex.com/pt/tutorial/pronto-para-envio--5YOZV7Aotv3pap0fGNESDs) o hayan activado [VTEX Shipping Network Correios](https://help.vtex.com/pt/tutorial/vtex-shipping-network-correios-ativacao--57opHihFbRAwrjQjCTymTa) verán el botón `Dashboard de transportadoras` en la página **Políticas de envío**. El botón redirige al usuario al [dashboard de VTEX Shipping Network](https://help.vtex.com/pt/tutorial/painel-vtex-shipping-network--51e8tx1IehiN4ZtURRWU92), donde puede gestionar la operación de transportadoras utilizadas en esos productos.

## Editar políticas de envío

Para editar una política de envío, sigue estos pasos:

1. En el Admin VTEX, accede a **Envío > Estrategia de envío** o ingresa **Estrategia de envío** en la barra de búsqueda en la parte superior de la página.
2. En la pestaña **Políticas de envío**, en la fila correspondiente al política deseada, haz clic en el ícono de menú <i class="fas fa-ellipsis-v"></i>. Puedes [buscar](#buscar-politicas-de-envio) o [filtrar](#filtrar-politicas-de-envio) políticas.
3. Haz clic en `Editar`.
4. Realiza los cambios deseados. Para más información sobre los campos, consulta el artículo [Crear una política de envío](https://help.vtex.com/es/tutorial/criar-uma-politica-de-envio--66rJO4LKBdyMJOH6Z3dsaT).
5. Haz clic en `Guardar cambios`.

## Activar o desactivar políticas de envío

Para activar o desactivar una política de envío, sigue estos pasos:

1. En el Admin VTEX, accede a **Envío > Estrategia de envío** o ingresa **Estrategia de envío** en la barra de búsqueda en la parte superior de la página.
2. En la pestaña **Políticas de envío**, en la fila correspondiente al política deseada, haz clic en el ícono de menú <i class="fas fa-ellipsis-v"></i>. Puedes [buscar](#buscar-politicas-de-envio) o [filtrar](#filtrar-politicas-de-envio) políticas.
3. Haz clic en `Activar` o `Desactivar`, según la acción deseada.
4. En la ventana modal que se abre, haz clic en `Activar` o `Desactivar` nuevamente.

## Eliminar políticas de envío

Para eliminar una política de envío, sigue estos pasos:

<div class="alert alert-danger">
La acción de eliminar una política de envío es permanente y no se puede deshacer.
</div>

1. En el Admin VTEX, accede a **Envío > Estrategia de envío** o ingresa **Estrategia de envío** en la barra de búsqueda en la parte superior de la página.
2. En la pestaña **Políticas de envío**, en la fila correspondiente al política deseada, haz clic en el ícono de menú <i class="fas fa-ellipsis-v"></i>. Puedes [buscar](#buscar-politicas-de-envio) o [filtrar](#filtrar-politicas-de-envio) políticas.
3. Haz clic en `Eliminar`.
4. En la ventana modal que se abre, vuelve a hacer clic en `Eliminar`.

