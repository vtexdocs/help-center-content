---
title: '¿Qué es un Builder del VTEX IO?'
id: 5ZqqfbmAuIaKcwaaA2eWoM
status: DRAFT
createdAt: 2018-12-06T12:41:20.098Z
updatedAt: 2020-03-13T21:25:28.345Z
publishedAt: 
firstPublishedAt: 2018-12-06T12:53:56.939Z
contentType: frequentlyAskedQuestion
productTeam: VTEX IO
author: 4tz85APeKIwMEk6amWS0ou
slug: que-es-un-builder-del-vtex-io
locale: es
legacySlug: que-es-un-builder-del-vtex-io
---

El __VTEX IO__ es un ambiente de desarrollo _serverless_ que permite crear fácilmente aplicaciones web listas para producción y de alta calidad.

Una de sus principales features es la capacidad de definir **builders**, que son aplicaciones responsables de transformar el código y la configuración de otras aplicaciones. Por ejemplo, el builder **react** transforma el código fuente de los componentes React de TypeScript en paquetes compilados, listos para ser importados a las aplicaciones Render.

## De cero a uno

Comenzamos con algunos builders básicos que daban acceso total a abstracciones de nivel muy bajo en la plataforma, incluyendo la ejecución de servicios node del lado del servidor y el montaje de componentes React en paths arbitrarios.

Con la evolución de la plataforma, percibimos que es importante que los builders:

- Tengan responsabilidades mínimas y muy bien definidas, en lugar de crear múltiples efectos secundarios no relacionados;
- Sean abstractos y opinativos, a diferencia de ser de bajo nivel y hacer que el usuario trate con elecciones difíciles;
- Permitan un control de permisos refinado en lugar de estar disponibles universalmente para todas las cuentas y todos los usuarios.

Como resultado, actualmente estamos trabajando en varios nuevos builders que van a simplificar drásticamente el desarrollo de apps, haciendo que cada parte de las responsabilidades de una aplicación sea clara y destacada.

Al dividir las responsabilidades en builders más pequeños, podremos desarrollarlas por separado - con más rapidez y menos cambios drásticos.
