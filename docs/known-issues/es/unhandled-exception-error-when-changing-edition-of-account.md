---
title: 'Error "Unhandled exception" al cambiar la edición de la cuenta'
id: 1NVjCrlRkadscl8fW9rOdA
status: PUBLISHED
createdAt: 2023-09-26T12:45:44.999Z
updatedAt: 2024-02-26T17:22:29.322Z
publishedAt: 2024-02-26T17:22:29.322Z
firstPublishedAt: 2023-09-26T12:45:45.927Z
contentType: knownIssue
productTeam: Apps
author: 2mXZkbi0oi061KicTExNjo
tag: Apps
slug: error-unhandled-exception-al-cambiar-la-edicion-de-la-cuenta
locale: es
kiStatus: Backlog
internalReference: 907294
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


A veces cuando cambiamos la edición de una cuenta o espacio de trabajo nos podemos encontrar con el siguiente error:


    - error: Unhandled exception - error: Por favor, informe del problema en https://github.com/vtex/toolbelt/issues


El error no es consistente, no ocurre todo el tiempo.

Si el maestro de la tienda está utilizando la `edición-negocio` y quieren cambiar la edición a `edición-tienda` en un espacio de trabajo, este error es más probable que suceda.


##

## Simulación


Intente cambiar la edición de cualquier cuenta de prueba o espacio de trabajo, este error ocurrirá eventualmente en el proceso.



## Workaround



- Ejecute el comando `vtex edition get` para asegurarse de que la edición no ha cambiado. A veces la edición cambia incluso cuando aparece el error;
- Si las aplicaciones no se actualizaron también intente ejecutar el comando `vtex update`;
- Espera un poco e inténtalo de nuevo;
- También puede ocurrir que el error de excepción no manejada no aparezca, la edición cambiará pero las aplicaciones no se actualizarán. En este caso simplemente sun `vtex update`.



