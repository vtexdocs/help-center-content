---
title: 'Formatos de datos'
id: ui0009-es
status: PUBLISHED
createdAt: 2025-08-28T19:24:22.388Z
updatedAt: 2025-08-28T19:24:22.388Z
publishedAt: 2025-08-28T19:24:22.388Z
firstPublishedAt: 2025-08-28T19:24:22.388Z
contentType: trackArticle
productTeam: Localization
slugES: formatos-de-datos
locale: es
trackId: 5PxyAgZrtiYlaYZBTlhJ2A
trackSlugES: formatos-de-datos
---

Formatear los datos de manera consistente crea una experiencia limpia, organizada y accesible.

### Números

Usa la coma como separador de miles y el punto como separador decimal.

| Correcto ✅ | Incorrecto❌ |
| :--- | :--- |
| <ul><li>1,230</li><li>9.5</li><li>37,809,009</li><li>$0.006653</li></ul> | <ul><li>1.230</li><li>9,5</li><li>37809009</li><li>$0,006653</li></ul> |

Usa siempre un máximo de dos lugares decimales.

| Correcto ✅ | Incorrecto❌ |
| :--- | :--- |
| <ul><li>9</li><li>1.53</li></ul> | <ul><li>9.0</li><li>1.533</li></ul> |

Cuando se trate de valores vacíos, como null, 0 o campos en blanco, utiliza un guion para indicar su lugar.

| Correcto ✅ | Incorrecto❌ |
| :--- | :--- |
| <ul><li>No hay productos para mostrar</li><li>-</li><li>Total gastado del presupuesto</li><li>-</li><li>-</li></ul> | <ul><li>0 productos para mostrar</li><li>Total gastado del presupuesto</li><li>Nada</li><li>0%</li></ul> |

Al hablar de cuotas, indica solo el número. No utilices la letra "x" como abreviatura.

| Correcto ✅ | Incorrecto❌ |
| :--- | :--- |
| Pagar en 3 | Pagar en 3x |

Abrevia los números grandes solo cuando el espacio sea limitado.

| Ejemplos |
| :--- |
| <ul><li>60 mil = 60K</li><li>60 millones = 60M</li></ul> |

En contextos locales, usa el formato estándar del país, incluyendo el código de área. En contextos internacionales, usa siempre el signo +, seguido del código de país, un espacio, el código de área entre paréntesis (si aplica), y luego el número sin espacios excesivos ni símbolos.

| Correcto ✅ | Incorrecto❌ |
| :--- | :--- |
| <ul><li>Formato local México (55) 1234 5678</li><li>Formato internacional México +52 55 1234 5678</li></ul> | <ul><li>Formato local México 55 1234 5678</li><li>Formato internacional México 0052-55-1234-5678</li></ul> |

Omite el espacio entre el número y el símbolo de porcentaje. Aunque en español la norma indica que debe haber un espacio, en la industria tecnológica es común omitirlo. Usa cero o dos decimales, según lo exija el contexto.

| Correcto ✅ | Incorrecto❌ |
| :--- | :--- |
| <ul><li>85%</li><li>85.31%</li></ul> | <ul><li>85 %</li><li>85.315 %</li></ul> |

### Monedas

Al escribir valores, indica el monto, seguido de un espacio y la moneda según la norma ISO 4217 (USD, BRL, EUR, GBP). Usa el símbolo (como $, R$, €) solo cuando la usabilidad lo exija, por ejemplo, en el storefront.

| Correcto ✅ | Incorrecto❌ |
| :--- | :--- |
| <ul><li>20,000 USD</li><li>3.50 BRL</li><li>15.75 USD</li></ul> | <ul><li>USD $20,000</li><li>3.5 reales brasileños</li><li>15.75 dólares</li></ul> |

No agregues espacio entre el símbolo y el valor.

| Correcto ✅ | Incorrecto❌ |
| :--- | :--- |
| $50 | $ 50 |

### Fecha y hora

Utiliza el formato de fecha día, mes, año. Escribe los días como números cardinales (1, 2, 30). Si mencionas el día de la semana, sepáralo con coma.

| Correcto ✅ | Incorrecto❌ |
| :--- | :--- |
| <ul><li>1 de enero de 2020</li><li>15 de abril de 2025</li><li>viernes, 21 de diciembre de 2029</li></ul> | <ul><li>primero de enero de 2020</li><li>15/3/2025</li><li>Viernes, 21/12/29</li></ul> |

Si necesitas abreviar los meses, usa las tres primeras letras con minúscula y sin punto.

| Correcto ✅ | Incorrecto❌ |
| :--- | :--- |
| <ul><li>ene</li><li>abr</li><li>dic</li></ul> | <ul><li>ENE</li><li>Abr</li><li>Dic</li></ul> |

Los días de la semana no suelen abreviarse en español, salvo en contextos muy restringidos, donde puede usarse la inicial en mayúscula.

| Correcto ✅ | Incorrecto❌ |
| :--- | :--- |
| <ul><li>L</li><li>M</li><li>M</li></ul> | <ul><li>Lunes</li><li>Martes</li><li>Miércoles</li></ul> |

En formularios y selectores de fecha, utiliza el formato DD/MM/AAAA o DD/MM/AA.

| Correcto ✅ | Incorrecto❌ |
| :--- | :--- |
| 30/05/2025 | 05/30/25 |

Usa el formato de 12 horas con “a. m.” y “p. m.” en minúsculas, con puntos y espacio entre la hora y la abreviatura.

| Correcto ✅ | Incorrecto❌ |
| :--- | :--- |
| La promoción comienza a las 10:30 a. m. | La promoción empieza a las 22h. |

Para mostrar tiempo restante (por ejemplo, en promociones o vencimientos), usa abreviaciones compactas en minúsculas: 00d 00h 00m 00s. Incluye tantas unidades como sea necesario para comunicar con claridad.

| Correcto ✅ | Incorrecto ❌ |
| :--- | :--- |
| <ul><li>2d 5h 30m</li><li>45m 10s</li><li>10s</li></ul> | 2:5:30 |

Para indicar fechas relativas, como la fecha de creación o la última modificación, utiliza expresiones como *Últimos \{unidad de tiempo\}*.

| Correcto ✅ | Incorrecto❌ |
| :--- | :--- |
| Últimos 2 días | 2d |

### Unidades de medida

Agrega un espacio entre el número y la unidad.

| Correcto ✅ | Incorrecto❌ |
| :--- | :--- |
| <ul><li>1.9 kg</li><li>25 cm</li></ul> | <ul><li>1,9kg</li><li>25cm</li></ul> |

Coloca el signo + o – antes del valor y del símbolo de moneda, sin espacio.

| Correcto ✅ | Incorrecto❌ |
| :--- | :--- |
| <ul><li>+$45.00 USD</li><li>-$6.99 USD</li></ul> | <ul><li>+ 45,00 USD</li><li>- $6,99 USD</li></ul> |

No uses el plural en las abreviaturas de unidades de medida.

| Correcto ✅ | Incorrecto❌ |
| :--- | :--- |
| <ul><li>7 kg</li><li>60 ml</li><li>1 kilogramo</li></ul> | <ul><li>7 kgs</li><li>60 mls</li><li>7 kilogramos</li></ul> |

Para precios por unidad de medida, nunca agregues espacios antes o después de la barra.

| Correcto ✅ | Incorrecto❌ |
| :--- | :--- |
| <ul><li>$50/m</li><li>$20/kg</li></ul> | <ul><li>$50 /m</li><li>$20 /kg</li></ul> |

Escribe siempre números con unidades al indicar cantidades.

| Correcto ✅ | Incorrecto❌ |
| :--- | :--- |
| <ul><li>5 cm</li><li>15 metros</li></ul> | <ul><li>cinco cm</li><li>quince metros</li></ul> |

Utiliza siempre kilómetros como unidad de distancia.

| Correcto ✅ | Incorrecto❌ |
| :--- | :--- |
| <ul><li>10 kilómetros</li><li>0.55 kilómetros</li></ul> | <ul><li>10 millas</li><li>0,55 millas</li></ul> |

### Rangos

Utiliza siempre un guion entre los rangos.

| Correcto ✅ | Incorrecto ❌ |
| :--- | :--- |
| <ul><li>1 – 30 resultados de búsqueda</li><li>1 kg – 4 kg</li><li>4 de abril – 6 de junio de 2026</li><li>71601 – 72999</li></ul> | <ul><li>1 - 30 resultados de búsqueda</li><li>1 kg - 4 kg</li><li>4 de abril - 6 de junio de 2026</li><li>71601-72999</li></ul> |

### Direcciones

Consulta y adapta las direcciones según las normas del servicio postal de cada país.

VTEX  
Calle Montes Urales No. 424  
Colonia Lomas - Virreyes, Lomas de Chapultepec III Sección  
11000 Ciudad de México, Miguel Hidalgo, CDMX  
México

### Nombres de países

Para los nombres de países, siempre utiliza los nombres oficiales o de uso común en español. No emplees nombres en inglés ni abreviaturas poco claras.

Sigue la [lista de nombres oficiales de la RAE](https://www.rae.es/dpd/ayuda/paises-y-capitales-con-sus-gentilicios) y el [código ISO](https://www.sanidad.gob.es/ciudadanos/saludAmbLaboral/docs/codigoIsoPai.pdf) de dos letras para abreviaciones. Otro recurso confiable es el [Anexo A5](https://style-guide.europa.eu/es/content/-/isg/topic?identifier=annex-a5-list-countries-territories-currencies) del Libro de estilo interinstitucional de la Unión Europea.

| Correcto ✅ | Incorrecto❌ |
| :--- | :--- |
| <ul><li>México</li><li>Chequia</li></ul> | <ul><li>Mexico</li><li>República Checa</li></ul> |

### Nombres de ciudades

Utiliza la forma más ampliamente en uso en español, ya sea la traducción literal o la forma en el idioma local.

| Correcto ✅ | Incorrecto❌ |
| :--- | :--- |
| <ul><li>São Paulo</li><li>Nueva York</li></ul> | <ul><li>San Pablo</li><li>New York</li></ul> |

### Regiones

Para identificar configuraciones regionales, utiliza una subetiqueta de idioma de dos letras minúsculas seguida de un guion y una subetiqueta de país de dos letras mayúsculas, según la norma [IETF BCP 47](https://www.rfc-editor.org/rfc/rfc5646#ref-ISO639-3), que combina normas ISO.

| Correcto ✅ | Incorrecto❌ |
| :--- | :--- |
| <ul><li>es-MX</li><li>es-AR</li></ul> | <ul><li>Es-MX</li><li>ES</li></ul> |

### Documentación

Si un número es menor de 10, se escribe con letras (uno, dos, tres, etc.). Si es 10 o mayor, se escribe con dígitos (por ejemplo: 10, 43, 775), excepto cuando el número no se refiere a un valor específico.

| Correcto ✅ | Incorrecto❌ |
| :--- | :--- |
| <ul><li>Este filtro supera el rango máximo de seis meses.</li><li>Si las búsquedas de un índice frecuentemente devuelven más de mil documentos...</li></ul> | <ul><li>Este filtro supera el rango máximo de 6 meses.</li><li>Si las búsquedas de un índice frecuentemente devuelven más de 1 000 documentos…</li></ul> |

Cuando un evento o acción ocurre en una hora local específica, indica la ciudad y la zona horaria UTC.

| Correcto ✅ | Incorrecto❌ |
| :--- | :--- |
| 10:30 a. m. São Paulo (UTC-3) | 10:30 AM São Paulo (GMT-3) |
