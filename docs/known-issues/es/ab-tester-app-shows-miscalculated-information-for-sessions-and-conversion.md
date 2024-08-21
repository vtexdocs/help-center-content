---
title: 'La aplicación AB Tester muestra información errónea sobre sesiones y conversión'
id: 2Sgvlldl0kyDcWBVi4KMzg
status: PUBLISHED
createdAt: 2023-07-20T12:42:25.435Z
updatedAt: 2024-07-01T18:49:08.433Z
publishedAt: 2024-07-01T18:49:08.433Z
firstPublishedAt: 2023-07-20T12:42:26.335Z
contentType: knownIssue
productTeam: Cloud Services
author: 2mXZkbi0oi061KicTExNjo
tag: Cloud Services
slug: la-aplicacion-ab-tester-muestra-informacion-erronea-sobre-sesiones-y-conversion
locale: es
kiStatus: No Fix
internalReference: 865727
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


La aplicación AB Tester muestra información mal calculada para las sesiones y la conversión al ejecutar las pruebas, lo que provoca una interpretación no deseada de los resultados. La funcionalidad de división del espacio de trabajo sigue funcionando como se esperaba.


##

## Simulación



- Cree una prueba A/B;
- Deje que la prueba se ejecute durante algún tiempo;
- Compruebe los valores de sesiones y conversiones; mostrará información mal calculada.



## Workaround


Utilice una herramienta de análisis externa para analizar los datos.




