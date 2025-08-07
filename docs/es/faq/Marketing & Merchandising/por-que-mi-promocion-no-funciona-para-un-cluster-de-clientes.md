---
title: '¿Por qué mi promoción no funciona para un clúster de clientes?'
id: 4I7FRBu5zj9JYs0xBwg5aR
status: PUBLISHED
createdAt: 2019-02-22T18:12:54.910Z
updatedAt: 2020-09-17T18:15:55.021Z
publishedAt: 2020-09-17T18:15:55.021Z
firstPublishedAt: 2019-02-22T18:16:10.272Z
contentType: frequentlyAskedQuestion
productTeam: Marketing & Merchandising
author: 5Bd75kMNAzARxg0DCUjwal
slugEN: why-doesnt-my-benefit-work-for-a-client-cluster
locale: es
legacySlug: 
---

En la plataforma VTEX, existe la posibilidad de aplicar una [promoción](/tutorial/creando-promociones-cluster-clientes?locale=es) a sólo un determinado [clúster](/tutorial/como-crear-un-cluster-de-cliente?locale=es). Es decir, para sólo un grupo específico de clientes.

Sin embargo, hay casos en que esta promoción no es visualizada por algunos compradores.

Separamos algunos escenarios en los que este error puede ocurrir y una resolución para cada uno de ellos. Todos están relacionados con el valor del clúster que se debe insertar en la plataforma.

## Ausencia del valor

Esto puede suceder si la promoción se aplica a más de un clúster y se olvida alguna aplicación de su valor.

Es necesario aplicar el valor de la promoción en todos los clústeres. Si, por ejemplo, el valor se aplica sólo a los clústeres A y B - y los participantes del descuento son los grupos A, B y C -, el último grupo no verá la promoción en el sitio.

Asegúrese de que el valor se ha insertado siguiendo los pasos abajo:

1. Acceda a __Tasas y Promociones__;
2. Haga clic en __Promociones__;
3. Seleccione qué __promoción__ desea editar;
4. Acceda a la sesión __"¿Cuáles son las condiciones para la promoción sea válida?"__;
5. Compruebe qué clústeres están registrados en __"Clúster de clientes"__;

![ES - 7GcSb6BuF6JKnmGAggO3uA](https://images.ctfassets.net/alneenqid6w5/5mX30OM2efHdMldl5xHS6A/9a8352287ca7193f213098189a182abe/Cluster-promo-ES.png)

6. Introduzca los __nuevos datos__;
7. Haga clic en __Guardar__.!

## Error en el registro del valor

Cada valor activa una acción diferente, por más similares que sean entre sí (case sensitive).

Digamos que el valor para un clúster es "GOLD". Si el valor insertado en la plataforma es "Gold", el sistema no interpreta el comando de acción correctamente.

Por lo tanto, el cliente no visualiza la promoción. Lo mismo vale para otras grafías similares, como "gold" o "Golds".

Para evitar este escenario, siga los mismos pasos del escenario en el que hay falta de valor y corrija posibles errores de grafía del valor.

## Uso de dos o más valores

Los valores se asocian tanto a los clientes como a las promociones.

Por ejemplo, una promoción se relacionó con los valores "Platinum" y "Platinum2". Sólo los compradores que tengan estos dos comandos tendrán acceso a la promoción.

Si María usa el valor "Platinum" y Ana, el "Platinum2", ninguna de las dos conseguirá participar en la promoción. Esto es porque sólo los clientes que están relacionados con los dos valores, al mismo tiempo, finalizan la compra con el descuento.

El procedimiento aquí es el mismo de los casos anteriores. Es necesario ir a "Clúster de Clientes" para entender qué valores se han registrado para una determinada promoción. Es responsabilidad de cada cliente decidir cuántos y qué clústeres incluirá en la promoción.

Con eso, la promoción será presentada para sus clientes correctamente.
