---
title: '¿Por qué la fecha prometida diverge con la fecha de entrega?'
id: 2ykKClT2FWgEKQ6Y0s4iMS
status: PUBLISHED
createdAt: 2018-03-05T15:42:17.800Z
updatedAt: 2023-03-22T20:52:10.588Z
publishedAt: 2023-03-22T20:52:10.588Z
firstPublishedAt: 2018-03-05T16:16:16.312Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: 7FpKZ0rc6k4WqeymES80cw
slugEN: why-does-the-promised-date-differ-from-the-delivery-date
locale: es
legacySlug: por-que-la-fecha-prometida-diverge-con-la-fecha-de-entrega
---

Cuando hay un error asociado a la cantidad de días de un [feriado](/es/tutorial/cadastrar-feriados--2ItOthSEAoyAmcwsuiO6Yk), por cuestiones de seguridad, el sistema define un rango que puede estar afectando la fecha de entrega del pedido.

Si al registrar un feriado, usted rellena el campo __Fecha de inicio__ de forma correcta, pero se equivoca en el campo __Fecha de fin__, y el feriado termina quedando con 1 año, 6 meses o cualquier período indebido, el sistema entiende que hubo un error de registro y define uno rango menor para liberar la entrega del pedido.

En este caso, es posible que su pedido esté con la fecha estimada de entrega para el primer día laborable disponible fijado por el sistema.

Por lo tanto, si tiene problemas relacionados con plazos incoherentes o divergencia entre la fecha prometida y la fecha de entrega, compruebe la feature de __Feriados__, cómo indicado abajo:

1. En el Admin VTEX, accede a __Configuración de la tienda > Envío > Feriados__, o escribe __Feriados__ en la barra de búsqueda en la parte superior de la página.
2. Compruebe si los campos `Fecha de inicio` y `Fecha de fin` se rellenen correctamente.
4. Ajuste, si es necesario.
5. Haz clic en `Guardar`.

Para saper más, consulte el artículo [Registrar Feriados](/es/tutorial/cadastrar-feriados--2ItOthSEAoyAmcwsuiO6Yk).
