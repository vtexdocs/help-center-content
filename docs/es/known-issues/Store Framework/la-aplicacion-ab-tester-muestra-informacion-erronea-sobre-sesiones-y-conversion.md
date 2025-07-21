---
title: "La aplicación AB Tester muestra información errónea sobre sesiones y conversión"
id: 2Sgvlldl0kyDcWBVi4KMzg
status: PUBLISHED
createdAt: 2023-07-20T12:42:25.435Z
updatedAt: 2025-01-17T17:30:46.285Z
publishedAt: 2025-01-17T17:30:46.285Z
firstPublishedAt: 2023-07-20T12:42:26.335Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: la-aplicacion-ab-tester-muestra-informacion-erronea-sobre-sesiones-y-conversion
locale: es
kiStatus: Fixed
internalReference: 865727
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


La aplicación AB Tester muestra información mal calculada para las sesiones y la conversión al ejecutar las pruebas, lo que provoca una interpretación no deseada de los resultados. La funcionalidad de división del espacio de trabajo sigue funcionando como se esperaba.


##

## Simulación



- Cree una prueba A/B;
- Deje que la prueba se ejecute durante algún tiempo;
- Compruebe los valores de sesiones y conversiones; mostrará información mal calculada.



## Workaround


Utilice una herramienta de análisis externa para analizar los datos.




