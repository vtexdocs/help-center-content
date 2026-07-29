---
title: 'Intelligent Search: cómo funciona la relevancia de los resultados de búsqueda'
createdAt: 2026-07-07T00:00:00.000Z
updatedAt: 2026-07-07T00:00:00.000Z
contentType: tutorial
productTeam: Marketing & Merchandising
slugEN: intelligent-search-how-search-result-relevance-works
locale: es
---
La relevancia es el mecanismo central de [Intelligent Search](https://help.vtex.com/es/docs/tutorials/intelligent-search-vision-general), responsable de definir qué productos se muestran en los resultados de una búsqueda y en qué orden. El objetivo es garantizar que los productos más pertinentes para cada consulta se muestren primero, considerando una serie de factores automáticos y configurables.

El proceso ocurre en dos etapas principales:

1. Encontrar los productos que corresponden a la búsqueda.
2. Ordenar los productos por relevancia.

## Etapa 1: cómo encuentra Intelligent Search los resultados

Intelligent Search intenta buscar productos que correspondan a la búsqueda en grupos secuenciales. Una vez que un grupo devuelve resultados, los grupos siguientes ya no se evalúan.

| Grupo | Lógica | Descripción | Prioridad |
| :---- | :---- | :---- | :---- |
| Grupo 1 | [AND sin fuzzy](#operadores-y-fuzzy) | Busca productos que contengan **todas** las palabras buscadas exactamente como se escribieron, sin tolerancia a variaciones o errores de escritura. | Mayor prioridad |
| Grupo 2 | [AND con fuzzy](#operadores-y-fuzzy) | Busca productos con **todas** las palabras, pero acepta pequeñas variaciones (por ejemplo, errores de escritura, diferencias de acentuación). |  |
| Grupo 3 | [OR sin fuzzy](#operadores-y-fuzzy) | Acepta productos que contengan **cualquiera** de las palabras buscadas, pero exige coincidencia exacta. |  |
| Grupo 4 | [OR con fuzzy](#operadores-y-fuzzy) | Último recurso: acepta productos con **cualquiera** de las palabras, con tolerancia a variaciones. | Menor prioridad |

### Operadores y fuzzy

* **Operadores AND y OR:** el operador define si el producto necesita contener todas las palabras de la búsqueda o solo una de ellas. Con AND, una búsqueda de "tenis nike" solo devuelve productos que tengan ambos términos. Con OR, devuelve cualquier producto que contenga "tenis" o "nike", lo que puede ampliar significativamente los resultados.

* **Fuzzy:** define la tolerancia a errores de digitación. Intelligent Search intenta corregir lo que escribió el usuario en función de los ítems registrados en el catálogo. De forma predeterminada, los términos de tres a cinco caracteres admiten un error, mientras que los de seis o más admiten dos.

  Los errores considerados con fuzzy = 1 son: insertar un carácter de más, remover un carácter, cambiar un carácter o intercambiar dos caracteres adyacentes. Los espacios en blanco no se toman en cuenta en el fuzzy. Para esos casos, se recomienda el uso de [sinónimos](https://help.vtex.com/es/docs/tutorials/sinonimos).

> ℹ️ Intelligent Search elige el operador y el nivel de fuzzy automáticamente. El retailer no controla ese comportamiento. El sistema empieza por el grupo más restringido (AND sin fuzzy) y avanza hacia grupos más permisivos solo si el anterior no devuelve resultados. Para más detalles, consulta [Comportamiento de la búsqueda](https://help.vtex.com/es/docs/tutorials/comportamiento-de-busqueda).

### Flujo de decisión

- Si el Grupo 1 devuelve resultados → se muestran y se detiene.
- Si el Grupo 1 no devuelve resultados → intenta con el Grupo 2.
- Si el Grupo 2 no devuelve resultados → intenta con el Grupo 3.
- Si el Grupo 3 no devuelve resultados → intenta con el Grupo 4.
- Si ningún grupo devuelve resultados → búsqueda sin resultados.

**Ejemplo práctico:** para una búsqueda de "paracetamol 1 g" primero intenta encontrar productos con exactamente esas palabras (grupo 1). Si no encuentra nada, lo intenta con fuzzy (grupo 2) y puede devolver "paracetamol 1 g efervescente" o variaciones con grafía similar. Si aún no hay resultado, pasa a OR y puede devolver productos con solo "paracetamol" o solo "1 g".

## Paso 2: cómo Intelligent Search ordena los resultados

Después de identificar los productos correspondientes, Intelligent Search aplica un algoritmo de puntuación para definir el orden de visualización. La siguiente tabla muestra los factores en orden de prioridad, de mayor a menor:

| # | Factor | Descripción | Ejemplo |
| :---- | :---- | :---- | :---- |
| 1 | Producto promovido por regla de merchandising | Producto priorizado explícitamente por el retailer mediante una regla de merchandising. | Regla que promueve "Always Nocturna" → se muestra en la parte superior aunque otra toalla femenina se ajuste mejor a la búsqueda. |
| 2 | Producto agregado por regla de merchandising | Producto forzado a aparecer en los resultados aunque no coincida directamente con el término buscado. | Búsqueda de "vitamina C" → "kit inmunidad con vitamina C y zinc" aparece por regla, aunque no coincida directamente con la consulta. |
| 3 | Coincidencia de ID completo | El consumidor buscó exactamente el ID del producto. | Búsqueda de "123456" → el producto con ese ID se muestra con alta prioridad. |
| 4 | Coincidencia parcial de ID | El consumidor escribió parte del ID del producto. | Búsqueda de "123" → aparecen productos como "123456" o "123789". |
| 5 | Todas las palabras + keyword (palabra clave) | El producto contiene todas las palabras buscadas y coincide con la palabra clave del producto. | Búsqueda de "protector solar facial FPS 50" → el producto con la palabra clave "protector" coincide totalmente. |
| 6 | Todas las palabras (sin palabra clave) | El producto contiene todas las palabras, pero no hay coincidencia con la palabra clave. | Búsqueda de "solar protector FPS 50" → "protector solar corporal FPS 50" coincide con las palabras, pero sin coincidencia con la palabra clave. |
| 7 | Producto con prioridad reducida por una regla de merchandising | Producto con visibilidad reducida por el retailer mediante una regla de merchandising. Todavía aparece, pero con menos visibilidad. | Regla que reduce la prioridad de los productos para la gripe fuera de temporada → aparecen debajo de los demás en las búsquedas de “antigripal”. |
| 8 | Producto no disponible (sin stock) | Producto sin stock, configurado para que se muestre de todas formas. Se muestra al final de los resultados. | Búsqueda de “paracetamol 1 g” → el producto sin stock aparece al final, con un aviso de falta de disponibilidad. |

> ℹ️ Las puntuaciones exactas asignadas a cada factor no se divulgan públicamente, ya que forman parte de la propiedad intelectual del algoritmo de relevancia de Intelligent Search.

## Conceptos importantes

### Palabra clave

Una palabra clave es el término principal que define el producto. Intelligent Search la identifica automáticamente según el idioma de la tienda:

- **Español y portugués:** primera palabra del nombre del producto.
- **Inglés:** última palabra del nombre del producto.
- La marca siempre se trata como palabra clave, sin importar su posición en el nombre ni el idioma.

**Ejemplos:**

| Idioma | Nombre del producto | Palabra clave | Regla |
| :---- | :---- | :---- | :---- |
| Portugués | Protetor solar facial FPS 50 | protetor | 1ª palabra |
| Español | Protector solar facial FPS 50 | protector | 1ª palabra |
| Inglés | Facial SPF 50 sunscreen | sunscreen | última palabra |
|  |  |  |  |
| Portugués | Shampoo anticaspa Head and Shoulders | shampoo | 1ª palabra |
| Español | Champú anticaspa Head and Shoulders | champú | 1ª palabra |
| Inglés | Head and Shoulders anti-dandruff shampoo | shampoo | última palabra |
|  |  |  |  |
| Portugués | Paracetamol 1 g genérico | paracetamol | 1ª palabra |
| Español | Paracetamol 1 g genérico | paracetamol | 1ª palabra |
| Inglés | Generic paracetamol 1 g. | paracetamol | última palabra |
|  |  |  |  |
| Portugués | Vitamina C 1000mg efervescente | vitamina | 1ª palabra |
| Español | Vitamina C 1000mg efervescente | vitamina | 1ª palabra |
| Inglés | Effervescent 1000mg vitamin C | vitamin C | última palabra |

La coincidencia de palabra clave del nombre del producto y la coincidencia de marca son acumulativas: un producto que coincide con ambos al mismo tiempo recibe la mayor puntuación posible. Tener solo una de las dos ya garantiza una ventaja sobre productos sin ninguna coincidencia de palabra clave.

### Reglas de merchandising

Las [reglas de merchandising](https://help.vtex.com/es/docs/tutorials/reglas-de-merchandising) son configuraciones manuales que hace el retailer para ajustar los resultados de búsqueda. Tienen la máxima prioridad en el algoritmo y permiten realizar tres acciones:

- **Promover:** llevar un producto a la parte superior de los resultados.
- **Agregar:** incluir un producto en los resultados aunque no corresponda a la búsqueda.
- **Degradar:** reducir la visibilidad de un producto, manteniéndolo al final del listado.

### Sinónimos

Intelligent Search permite configurar [sinónimos](https://help.vtex.com/es/docs/tutorials/sinonimos) para ampliar el alcance de la búsqueda. Por ejemplo, mapear "rímel" a "máscara de pestañas".

#### Sinónimos de baja relevancia

> ⚠️ Esta funcionalidad está disponible solo para un número restringido de cuentas. Ponte en contacto con el [Soporte VTEX](https://supporticket.vtex.com/support) para verificar la disponibilidad para tu tienda.

La funcionalidad de sinónimos de baja relevancia reduce la prioridad de los productos incluidos en los resultados mediante un sinónimo frente a aquellos que coinciden directamente con el término buscado.

La penalización no es absoluta. Con la funcionalidad activa, el peso de la palabra clave es mayor que el peso del sinónimo, lo que define la siguiente jerarquía de relevancia:

1. Coincidencia natural + palabra clave: mayor puntuación.
2. Coincidencia mediante sinónimo + palabra clave: supera a la coincidencia natural sin palabra clave.
3. Coincidencia natural sin palabra clave.
4. Coincidencia mediante sinónimo sin palabra clave: menor puntuación.

Un producto incluido en los resultados mediante un sinónimo, pero que coincide con la palabra clave, será más relevante que un producto con coincidencia natural que no coincide con la palabra clave.

## Criterios de desempate

Cuando dos o más productos tienen una puntuación de relevancia similar, Intelligent Search utiliza los criterios de las [reglas de relevancia](https://help.vtex.com/es/docs/tutorials/reglas-de-relevancia) configurados por el retailer para desempatar. Los criterios disponibles son:

| Criterio | Descripción |
| :---- | :---- |
| Descuento | Los productos con mayor porcentaje de descuento tienen prioridad. |
| Fecha de lanzamiento | Se priorizan los productos más recientes. |
| Más vendidos | Ordenados por volumen de pedidos. |
| Más vendidos por ingresos | Ordenados según el valor total generado en ventas. |
| Popularidad | Basado en interacciones y vistas de los productos. |
| Promoción | Los productos con promoción activa reciben mayor puntuación. |
| Puntuación de catálogo | Puntuación definida directamente en el catálogo de la tienda. |
| Variedad de matriz disponible | Se priorizan los productos con más variaciones en stock. |

El impacto de cada criterio se determina por el peso configurado por el retailer. Si se define un criterio prioritario (por ejemplo, "Más vendidos"), este prevalece en el desempate. De lo contrario, el sistema utiliza la suma ponderada normalizada de todos los criterios activos.

## Ejemplos prácticos

### Búsqueda: “tylenol”

| Producto (marca) | Relevancia | Justificación |
| :---- | :---- | :---- |
| Tylenol 500 mg, 20 tabletas (Tylenol) | Alta | Palabra clave del nombre “Tylenol” + marca “Tylenol”: doble coincidencia acumulativa, mayor puntuación. |
| Analgésico Tylenol 36 tabletas (Tylenol) | Empate\* | Solo coincidencia de marca “Tylenol”: una coincidencia de palabra clave. |
| Tylenol 36 tabletas (Kenvue) | Empate\* | Solo coincidencia con la palabra clave del nombre “Tylenol”: una coincidencia de palabra clave. Desempate según los criterios de relevancia configurados. |

\* Empate en la puntuación de relevancia. Ambos tienen exactamente una coincidencia de palabra clave. El orden final entre ambos se determina según los criterios de relevancia configurados (por ejemplo, productos más vendidos, descuento o fecha de lanzamiento).

### Búsqueda: "minoxidil"

| Producto (marca) | Relevancia | Justificación |
| :---- | :---- | :---- |
| Minoxidil 5 % solución 60 ml (Minoxidil) | Alta | Palabra clave del nombre “Minoxidil” + marca “Minoxidil”: doble coincidencia acumulativa. |
| Folcress Minoxidil 5 %, solución de 60 ml (Minoxidil) | Empate\* | Solo coincidencia de marca “Minoxidil”: una coincidencia de palabra clave. |
| Minoxidil Kirkland 5 %, solución de 60 ml (Kirkland) | Empate\* | Solo coincidencia con la palabra clave del nombre “Minoxidil”: una coincidencia de palabra clave. Desempate por los criterios de relevancia configurados. |
| Sistema GB solución para la alopecia, 60 ml (Sistema GB) | Baja | La palabra clave del nombre es “Sistema GB” y la marca es “Sistema GB”: no hay coincidencia con “minoxidil” ni en la palabra clave ni en la marca. |

\* Empate en la puntuación de relevancia. Ambos tienen exactamente una coincidencia de palabra clave. El orden final se determina según los criterios de relevancia configurados (por ejemplo, productos más vendidos, descuento o fecha de release).
