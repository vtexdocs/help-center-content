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
slugEN: managing-shipping-policies
legacySlug: gestionar-politicas-de-envio
locale: es
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---

La [política de envío](/es/tutorial/politica-de-envio--tutorials_140) es un conjunto de reglas y ajustes que definen las opciones de envío que se mostrarán a los clientes en el checkout. La relación entre la política de envío, [almacén](/es/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb) y [muelle](/es/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj) es lo que conforma la [estrategia de envío](/es/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3) en VTEX, como se muestra en la siguiente imagen:

![shipping_strategy_ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/env%C3%ADo/estrat%C3%A9gia-de-env%C3%ADo/gestionar-politicas-de-envio_1.png)

Este artículo describe cómo monitorear y gestionar las políticas de envío. La pestaña **Políticas de envío** en el Admin VTEX, accesible en **Envío > Estrategia de envío**, te permite realizar las siguientes acciones:

* [Ver lista de políticas de envío](#ver-lista-de-politicas-de-envio)
* [Buscar políticas de envío](#buscar-politicas-de-envio)
* [Filtrar políticas de envío](#filtrar-politicas-de-envio)
* [Ver dashboard de transportadoras (opcional)](#ver-dashboard-de-transportadoras-solo-brasil)
* [Editar políticas de envío](#editar-politicas-de-envio)
* [Activar o desactivar políticas de envío](#activar-o-desactivar-politicas-de-envio)
* [Eliminar políticas de envío](#eliminar-politicas-de-envio)

También puedes crear políticas de envío. Consulta [Crear una política de envío](/es/tutorial/criar-uma-politica-de-envio--66rJO4LKBdyMJOH6Z3dsaT) para más información.

## Ver lista de políticas de envío

La pestaña **Políticas de envío** del Admin VTEX, accesible a través de **Envío > Estrategia de envío**, muestra una lista como se ilustra a continuación:

![shipping_policy_ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/env%C3%ADo/estrat%C3%A9gia-de-env%C3%ADo/gestionar-politicas-de-envio_2.png)

La información de la lista se describe en la siguiente tabla:

| **Columna** | **Descripción** |
| :---: | :--- |
| Política de envío | Nombre que identifica tu [política de envío](/es/tutorial/politica-de-envio--tutorials_140) para los usuarios que tienen acceso al Admin VTEX. Para más información, consulta [Crear una política de envío](/es/tutorial/criar-uma-politica-de-envio--66rJO4LKBdyMJOH6Z3dsaT). |
| Método de envío | [Método de envío](/es/tutorial/como-funciona-o-tipo-de-envio--tutorials_126) es el nombre que configuras en la política de envío que se mostrará a los clientes en el checkout. Por lo tanto, es importante utilizar nombres intuitivos al crear una política de envío.Ejemplo: `Envío express` e `Envío estándar`. |
| Muelles | Identifica los [muelles](/es/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj) asociados a la [política de envío](/es/tutorial/politica-de-envio--tutorials_140). Al pasar el mouse sobre el número de esta columna, se muestran los nombres de todos los muelles asociados a la política de envío. |
| Status | Status de activación de la política de envío, que puede ser:<ul><li>**Activa:** la política de envío está activada y se considera válida en el [cálculo](/es/tutorial/como-funciona-o-calculo-de-envio--tutorials_116) de envío de pedidos.</li><li>**Inactiva:** la política de envío está desactivada y no es válida para envíos.</li></ul> |
| Transportadora (solo Brasil) | Este campo solo se muestra en el Admin VTEX de tiendas que activaron la funcionalidad [VTEX Shipping Network Correio](/es/tutorial/vtex-shipping-network-correios-ativacao--57opHihFbRAwrjQjCTymTa) o que contrataron [VTEX Shipping Network](/es/tutorial/pronto-para-envio--5YOZV7Aotv3pap0fGNESDs) y solamente identifica a Correios. |
| Contrato (solo Brasil) | Este campo solo se muestra en el Admin VTEX de tiendas que hayan activado [VTEX Shipping Network Correios](/es/tutorial/vtex-shipping-network-correios-ativacao--57opHihFbRAwrjQjCTymTa).Los valores pueden ser:<ul><li>**VTEX:** la tienda contrató una tabla de Correios mediada por VTEX.</li><li>**Propio:** la tienda contrató una tabla por cuenta propia antes de activar VTEX Shipping Network Correios.</li></ul> |

## Buscar políticas de envío

La caja de búsqueda que tiene el ícono de lupa <i class="fas fa-search"></i> te permite buscar políticas de envío por nombre. Ingresar un carácter en la barra de búsqueda activa la búsqueda inmediatamente. Para limpiar la búsqueda, haz clic en el ícono de cerrar <i class="far fa-times-circle"></i>.

> ℹ️ Si la búsqueda no devuelve ningún resultado, comprueba la ortografía del término o si hay algún filtro seleccionado.

## Filtrar políticas de envío

Puedes filtrar políticas por status, ya sea `Activa` o `Inactiva`, según se describe a continuación:

1. En el Admin VTEX, accede a **Envío > Estrategia de envío** o ingresa **Estrategia de envío** en la barra de búsqueda en la parte superior de la página.
2. En la pestaña **Políticas de envío**, haz clic en `Status`.
3. Selecciona una de las opciones de status:
    * **Activa:** la política de envío está activada y se considera válida en el [cálculo](/es/tutorial/como-funciona-o-calculo-de-envio--tutorials_116) de envío de pedidos.
    * **Inactiva:** la política de envío está desactivada y no es válida para envíos. 
4. Haz clic en `Aplicar`.

Para remover el filtro aplicado, haz clic en `Status` y después en `Limpiar`.

### Filtro para tipos de contrato (solo Brasil)

Las tiendas que hayan contratado [VTEX Shipping Network](/es/tutorial/pronto-para-envio--5YOZV7Aotv3pap0fGNESDs) o hayan activado [VTEX Shipping Network Correios](/es/tutorial/vtex-shipping-network-correios-ativacao--57opHihFbRAwrjQjCTymTa) pueden buscar por tipo de contrato:

* `VTEX`: la contratación de la tabla de Correios fue mediada por VTEX.
* `Propio`: la propia tienda realizó la contratación de la tabla de Correios.

## Ver dashboard de transportadoras (solo Brasil)

Las tiendas que hayan contratado [VTEX Shipping Network](/es/tutorial/pronto-para-envio--5YOZV7Aotv3pap0fGNESDs) o hayan activado [VTEX Shipping Network Correios](/es/tutorial/vtex-shipping-network-correios-ativacao--57opHihFbRAwrjQjCTymTa) verán el botón `Dashboard de transportadoras` en la página **Políticas de envío**. El botón redirige al usuario al [dashboard de VTEX Shipping Network](/es/tutorial/painel-vtex-shipping-network--51e8tx1IehiN4ZtURRWU92), donde puede gestionar la operación de transportadoras utilizadas en esos productos.

## Editar políticas de envío

Para editar una política de envío, sigue estos pasos:

1. En el Admin VTEX, accede a **Envío > Estrategia de envío** o ingresa **Estrategia de envío** en la barra de búsqueda en la parte superior de la página.
2. En la pestaña **Políticas de envío**, en la fila correspondiente al política deseada, haz clic en el ícono de menú <i class="fas fa-ellipsis-v"></i>. Puedes [buscar](#buscar-politicas-de-envio) o [filtrar](#filtrar-politicas-de-envio) políticas.
3. Haz clic en `Editar`.
4. Realiza los cambios deseados. Para más información sobre los campos, consulta el artículo [Crear una política de envío](/es/tutorial/criar-uma-politica-de-envio--66rJO4LKBdyMJOH6Z3dsaT).
5. Haz clic en `Guardar cambios`.

## Activar o desactivar políticas de envío

Para activar o desactivar una política de envío, sigue estos pasos:

1. En el Admin VTEX, accede a **Envío > Estrategia de envío** o ingresa **Estrategia de envío** en la barra de búsqueda en la parte superior de la página.
2. En la pestaña **Políticas de envío**, en la fila correspondiente al política deseada, haz clic en el ícono de menú <i class="fas fa-ellipsis-v"></i>. Puedes [buscar](#buscar-politicas-de-envio) o [filtrar](#filtrar-politicas-de-envio) políticas.
3. Haz clic en `Activar` o `Desactivar`, según la acción deseada.
4. En la ventana modal que se abre, haz clic en `Activar` o `Desactivar` nuevamente.

## Eliminar políticas de envío

Para eliminar una política de envío, sigue estos pasos:

> ❗ La acción de eliminar una política de envío es permanente y no se puede deshacer.

1. En el Admin VTEX, accede a **Envío > Estrategia de envío** o ingresa **Estrategia de envío** en la barra de búsqueda en la parte superior de la página.
2. En la pestaña **Políticas de envío**, en la fila correspondiente al política deseada, haz clic en el ícono de menú <i class="fas fa-ellipsis-v"></i>. Puedes [buscar](#buscar-politicas-de-envio) o [filtrar](#filtrar-politicas-de-envio) políticas.
3. Haz clic en `Eliminar`.
4. En la ventana modal que se abre, vuelve a hacer clic en `Eliminar`.

