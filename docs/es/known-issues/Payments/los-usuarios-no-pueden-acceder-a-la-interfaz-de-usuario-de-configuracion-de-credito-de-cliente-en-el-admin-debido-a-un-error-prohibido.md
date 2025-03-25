---
title: 'Los usuarios no pueden acceder a la interfaz de usuario de configuración de crédito de cliente en el Admin debido a un error prohibido'
id: 3RBofop7gS1VlKEDHozclF
status: PUBLISHED
createdAt: 2022-02-24T13:19:29.719Z
updatedAt: 2023-02-24T13:28:28.626Z
publishedAt: 2023-02-24T13:28:28.626Z
firstPublishedAt: 2022-02-24T13:19:30.032Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: users-are-unable-to-access-customer-credit-settings-ui-on-the-admin-due-to-a-forbidden-error
locale: es
kiStatus: Backlog
internalReference: 380931
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Los usuarios no pueden acceder a la interfaz de usuario de configuración de crédito de cliente en el Admin y hemos observado el siguiente error "Prohibido" en la operación SettingQueries.

Este comportamiento se debe a la forma en que la aplicación de crédito de cliente utiliza graphQL para recuperar esta información. Hace una petición a esta ruta `/billing/company`, que utiliza el token del usuario admin. Esta llamada a la API se utiliza para mostrar información trivial de identificación en la página. Por lo tanto, el usuario que intenta abrir la configuración de CC debe tener habilitado el recurso get_company en el Recurso del Gestor de Licencias.

Aunque esto no debería impedir que el usuario acceda a los ajustes de crédito del cliente, por lo tanto, la aplicación debe cambiar cómo maneja este flujo.


##

## Simulación


Intente abrir la página de configuración de crédito de cliente con un usuario sin el recurso `get_company` en el módulo LM.



## Workaround


Asegúrese de que el usuario tiene el recurso `get_company` habilitado en su rol. Además, hay una caché en esta operación.





