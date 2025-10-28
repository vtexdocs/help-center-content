---
title: 'No puedo ver las métricas en el dashboard de pedidos'
id: 1B5OAicmK3AvnwPzs4iq7Z
status: PUBLISHED
createdAt: 2024-06-10T11:28:08.507Z
updatedAt: 2024-11-08T18:41:59.361Z
publishedAt: 2024-11-08T18:41:59.361Z
firstPublishedAt: 2024-06-10T17:15:44.616Z
contentType: tutorial
productTeam: Others
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: metrics-are-not-displayed-in-the-order-dashboard
legacySlug: no-puedo-ver-las-metricas-en-el-dashboard-de-pedidos
locale: es
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
tags:
  - Dashboard
  - VTEX Admin
  - Vista general
  - Rol de usuario
---

Al acceder al Admin, es posible que tu tienda no cargue las métricas presentes en Dashboards > **Vista general**, mostrando íconos de advertencia y un mensaje de error. Esto puede deberse a:

- **Demora en la actualización de datos:** puede haber un retraso en la actualización de la información mostrada en el dashboard.
- **Periodo de comparación inadecuado:** es posible que el periodo seleccionado en la esquina superior derecha del dashboard no contenga suficientes datos de pedidos para realizar la comparación.
- **Permisos de acceso limitados:** es posible que no dispongas del rol necesario para ver determinada información en el dashboard.

![Visão geral - ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/troubleshooting/operaciones-de-la-tienda/no-puedo-ver-las-metricas-en-el-dashboard-de-pedidos_1.png)

## Solución
Para resolver inconsistencias en el dashboard inicial del panel administrativo, prueba a realizar las acciones que se describen a continuación:

### Ajustar periodo de comparación
Ajustar correctamente el periodo de comparación puede resolver el problema, ya que se mostrarían métricas relevantes. Para comprobar si el periodo seleccionado en Dashboard > **Vista general** contiene datos de pedido válidos, sigue los pasos a continuación:

1. En el VTEX Admin, accede a **Dashboard > Vista general**.
2. En la esquina superior derecha selecciona el periodo de comparación.

![Dashboard - ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/troubleshooting/operaciones-de-la-tienda/no-puedo-ver-las-metricas-en-el-dashboard-de-pedidos_2.png)

### Esperar a que la información se actualice
El tiempo de espera para la actualización de la información del dashboard puede variar entre 10 y 80 minutos. Este periodo es necesario para que los datos se procesen y se muestren correctamente. Para más información sobre el tiempo de espera, accede a [Comparar periodos](/es/tutorial/visao-geral-da-loja--P8ahguoRs0U3PzmXg2wuQ?&utm_source=autocomplete#comparacao-de-periodos).

### Comprobar permisos de acceso
Para ver la información en el dashboard, asegúrate de tener un rol que incluya el [recurso](/es/tutorial/recursos-do-license-manager--3q6ztrC8YynQf6rdc6euk3) **Insights metrics**. Para más información sobre roles y cómo configurarlos, consulta el artículo [Roles](/es/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc).
