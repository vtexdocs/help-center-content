---
title: 'Glosario de expresiones'
id: 2E6mLfj9JEizAWTgfQCCED
status: PUBLISHED
createdAt: 2025-09-16T16:24:13.021Z
updatedAt: 2025-10-03T14:20:04.224Z
publishedAt: 2025-10-03T14:20:04.224Z
firstPublishedAt: 2025-10-03T14:20:04.224Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: expressions-glossary
legacySlug: glossario-de-expressoes
locale: es
subcategoryId: hXGU8pFfABVFIg724zWBN
---

#### Visión general

Las expresiones son fórmulas utilizadas en la plataforma de manera muy similar a las usadas en programas de hojas de cálculo, como Microsoft Excel. Aunque han evolucionado con el tiempo y estas similitudes son ahora menores, siguen siendo una herramienta poderosa. Es un lenguaje de modelado basado en expresiones que facilita la generación de texto a partir de un contexto de valores.

En este artículo abordaremos:
  * Modelos
  * Tipos
  * Operadores
  * Funciones

#### Modelos

Las expresiones pueden invocarse usando el siguiente modelo: `@(...)`.

Por ejemplo, el modelo `Hi `@(""Dr "" & upper(foo))`` toma el valor de la variable `@foo`, lo convierte a mayúsculas y lo prefija con otra palabra. Observa que dentro de una expresión compleja no es necesario poner `@` antes de todas las variables.

#### Tipos

Tenemos los siguientes tipos de expresiones aceptados en la plataforma:
Array: usado para la creación de un array de elementos.

@(array(1, ""x"", true)) → [1, x, true]
@(array(1, ""x"", true)[1]) → x
@(count(array(1, ""x"", true))) → 3
@(json(array(1, ""x"", true))) → [1,""x"",true]
Booleano: es un valor booleano que puede ser verdadero o falso.

@(true) → true
@(1 = 1) → true
@(1 = 2) → false
@(json(true)) → true
Fecha: es un valor de fecha del calendario gregoriano.

@(date_from_parts(2019, 4, 11)) → 2019-04-11@(format_date(date_from_parts(2019, 4, 11))) → 11-04-2019@(json(date_from_parts(2019, 4, 11))) → ""2019-04-11""
Fecha y Hora: es un valor que incluye tanto la fecha como la hora.

@(datetime(""1979-07-18T10:30:45.123456Z"")) → 1979-07-18T10:30:45.123456Z
@(format_datetime(datetime(""1979-07-18T10:30:45.123456Z""))) → 18-07-1979 05:30@(json(datetime(""1979-07-18T10:30:45.123456Z""))) → ""1979-07-18T10:30:45.123456Z""
Función: es una operación o procedimiento que puede ser llamada para realizar una tarea específica o calcular un valor.

@(upper) → function
@(array(upper)[0](""abc"")) → ABC
@(json(upper)) → null
Número: es un valor numérico que puede ser entero o fraccionado.

@(1234) → 1234
@(1234.5678) → 1234.5678
@(format_number(1234.5670)) → 1,234.567
@(json(1234.5678)) → 1234.5678
Objeto: es una estructura que contiene propiedades nombradas.

@(object(""foo"", 1, ""bar"", ""x"")) → {bar: x, foo: 1}
@(object(""foo"", 1, ""bar"", ""x"").bar) → x
@(object(""foo"", 1, ""bar"", ""x"")[""bar""]) → x
@(count(object(""foo"", 1, ""bar"", ""x""))) → 2
@(json(object(""foo"", 1, ""bar"", ""x""))) → {""bar"":""x"",""foo"":1}
Texto: es una secuencia de caracteres.

@(""abc"") → abc
@(text_length(""abc"")) → 3
@(upper(""abc"")) → ABC
@(json(""abc"")) → ""abc""
Tiempo: es una hora del día.

@(time_from_parts(16, 30, 45)) → 16:30:45.000000@(format_time(time_from_parts(16, 30, 45))) → 16:30@(json(time_from_parts(16, 30, 45))) → ""16:30:45.000000""

#### Operadores

A continuación, se muestra la lista de todos los operadores que pueden utilizarse en la construcción de expresiones en la plataforma:
\+ : suma dos números

@(2 + 3) → 5
@(fields.age + 10) → 33
& : une dos valores de texto

@(""hello"" & "" "" & ""bar"") → hello bar
@(""hello"" & null) → hello
/ : divide un número por otro

@(4 / 2) → 2@(3 / 2) → 1.5
@(46 / fields.age) → 2
@(3 / 0) → ERROR
= : retorna ""true"" si dos valores son textualmente iguales

@(""hello"" = ""hello"") → true
@(""hello"" = ""bar"") → false
@(1 = 1) → true
^ : eleva un número a la potencia de otro

@(2 ^ 8) → 256
**>** : retorna ""true"" si el primer número es mayor que el segundo

@(2 > 3) → false@(3 > 3) → false@(4 > 3) → true
**> =** : retorna ""true"" si el primer número es mayor o igual que el segundo

@(2 >= 3) → false
@(3 >= 3) → true
@(4 >= 3) → true
**<** : retorna ""true"" si el primer número es menor que el segundo

@(2 < 3) → true
@(3 < 3) → false
@(4 < 3) → false
**< =** : retorna ""true"" si el primer número es menor o igual que el segundo

@(2 <= 3) → true
@(3 <= 3) → true
@(4 <= 3) → false
***** : multiplica dos números

@(3 * 2) → 6
@(fields.age * 3) → 69
**-** (unario) : niega un número

@(-fields.age) → -23
**!** : retorna ""true"" si dos valores no son textualmente iguales

@(""hello"" != ""hello"") → false
@(""hello"" != ""bar"") → true
@(1 != 2) → true
**\- (binario) :** resta dos números

@(3 - 2) → 1
@(2 - 3) → -1

#### Funciones

Las expresiones tienen acceso a un conjunto de funciones internas que pueden utilizarse para ejecutar tareas más complejas. Las funciones se llaman utilizando la sintaxis `@(function_name(args..))` y pueden recibir como argumentos valores literales `@(length(split(""1 2 3"", "" "")))` o variables en el contexto `@(title(contact.name))`.

`abs(número)`: devuelve el valor absoluto de un `number`.

@(abs(-10)) → 10
@(abs(10.5)) → 10.5
@(abs(""foo"")) → ERROR
`and(valores...)`: devuelve ""`true`"" si todos los datos de `values` son verdaderos.

@(and(true)) → true
@(and(true, false, true)) → false
`array(valores...)`: toma varios `values` y los devuelve como una matriz.

@(array(""a"", ""b"", 356)[1]) → b
@(join(array(""a"", ""b"", ""c""), ""|"")) → a|b|c
@(count(array())) → 0
@(count(array(""a"", ""b""))) → 2
`attachment_parts(anexo)`: analiza un anexo en sus diferentes partes.

@(attachment_parts(""image/jpeg:https://example.com/test.jpg"")) → {content_type: image/jpeg, url: https://example.com/test.jpg}
`boolean(valor)`: intenta convertir `value` en un booleano. Se devolverá un error si el valor no puede ser convertido.

@(boolean(array(1, 2))) → true
@(boolean(""FALSE"")) → false
@(boolean(1 / 0)) → ERROR
`char(código)`: devuelve el carácter para el código UNICODE proporcionado. Es el inverso de código.

@(char(33)) → !

@(char(128512)) → 😀
@(char(""foo"")) → ERROR
`clean(texto)`: elimina todos los caracteres no imprimibles del `text`. Es el inverso de `char`.

@(clean(""😃 Hello \nwo\tr\rld"")) → 😃 Hello world
@(clean(123)) → 123
`code(texto)`: devuelve el código UNICODE del primer carácter del `text`. Es el inverso de `char`.

@(code(""a"")) → 97
@(code(""abc"")) → 97
@(code(""😀"")) → 128512
@(code(""15"")) → 49
@(code(15)) → 49
@(code("""")) → ERROR
`count(valor)`: devuelve el número de elementos en la matriz o las propiedades especificadas en un objeto. Devolverá un error si se pasa un elemento que no es contable.

@(count(contact.fields)) → 5
@(count(array())) → 0
@(count(array(""a"", ""b"", ""c""))) → 3
@(count(1234)) → ERROR
`date(valor)`: intenta convertir `value` en una fecha. Si es texto, se analizará utilizando el formato de fecha predeterminado. Se devolverá un error si el valor no puede ser convertido.

@(date(""1979-07-18"")) → 1979-07-18
@(date(""1979-07-18T10:30:45.123456Z"")) → 1979-07-18@(date(""10/05/2010"")) → 2010-05-10
@(date(""NOT DATE"")) → ERROR
`date_from_parts(año, mes, día)`: crea una fecha a partir de `year``month``day`

@(date_from_parts(2017, 1, 15)) → 2017-01-15
@(date_from_parts(2017, 2, 31)) → 2017-03-03
@(date_from_parts(2017, 13, 15)) → ERROR
`datetime(valor)`: intenta convertir `_value_` en una `datatime`. Si es texto, se analizará utilizando los formatos predeterminados de fecha y hora. Se devolverá un error si el valor no puede ser convertido.

@(datetime(""1979-07-18"")) → 1979-07-18T00:00:00.000000-05:00@(datetime(""1979-07-18T10:30:45.123456Z"")) → 1979-07-18T10:30:45.123456Z
@(datetime(""10/05/2010"")) → 2010-05-10T00:00:00.000000-05:00
@(datetime(""NOT DATE"")) → ERROR
`datetime_add(datetime, offset, unit)`: Calcula el valor de la fecha sumando el `offset` número de `unit` a la `datetime`. Las unidades de duración válidas son ""Y"" para años, ""M"" para meses, ""W"" para semanas, ""D"" para días, ""h"" para horas, ""m"" para minutos y ""s"" para segundos.

@(datetime_add(""2017-01-15"", 5, ""D"")) → 2017-01-20T00:00:00.000000-05:00
@(datetime_add(""2017-01-15 10:45"", 30, ""m"")) → 2017-01-15T11:15:00.000000-05:00
`datetime_diff(date1, date2, unidade)`: devuelve la duración entre `date1` y `date2` en la `unit` especificada. Las unidades de duración válidas son ""Y"" para años, ""M"" para meses, ""W"" para semanas, ""D"" para días, ""h"" para horas, ""m"" para minutos y ""s"" para segundos.

@(datetime_diff(""2017-01-15"", ""2017-01-17"", ""D"")) → 2@(datetime_diff(""2017-01-15"", ""2017-05-15"", ""W"")) → 17@(datetime_diff(""2017-01-15"", ""2017-05-15"", ""M"")) → 4
@(datetime_diff(""2017-01-17 10:50"", ""2017-01-17 12:30"", ""h"")) → 1@(datetime_diff(""2017-01-17"", ""2015-12-17"", ""Y"")) → -2
`datetime_from_epoch(segundos)`: convierte el tiempo de la época UNIX en seconds a una nueva fecha.

@(datetime_from_epoch(1497286619)) → 2017-06-12T11:56:59.000000-05:00@(datetime_from_epoch(1497286619.123456)) → 2017-06-12T11:56:59.123456-05:00
`default(valor, padrão)`: devuelve `value` si no está vacío o con error, de lo contrario, devolverá `default`.

@(default(undeclared.var, ""default_value"")) → default_value@(default(""10"", ""20"")) → 10
@(default("""", ""value"")) → value
@(default(""  "", ""value"")) → \x20\x20
@(default(datetime(""invalid-date""), ""today"")) → today@(default(format_urn(""invalid-urn""), ""ok"")) → ok
`epoch(data)`: convierte `date` en un tiempo de época UNIX. El número devuelto puede contener segundos fraccionarios.

@(epoch(""2017-06-12T16:56:59.000000Z"")) → 1497286619
@(epoch(""2017-06-12T18:56:59.000000+02:00"")) → 1497286619@(epoch(""2017-06-12T16:56:59.123456Z"")) → 1497286619.123456@(round_down(epoch(""2017-06-12T16:56:59.123456Z""))) → 1497286619
`extract(objeto, propriedades`): toma un objeto y extrae la propiedad nombrada.

@(extract(contact, ""name"")) → Ryan Lewis
@(extract(contact.groups[0], ""name"")) → Testers
`extract_object(objeto, propriedades...)`: toma un objeto y devuelve un nuevo objeto extrayendo solo las propiedades nombradas.

@(extract_object(contact.groups[0], ""name"")) → {name: Testers}
`field(texto, índice, delimitador)`: divide el `text` utilizando el `delimiter` dado y devuelve el campo correspondiente al `index`. El índice comienza en cero. Al dividir con un espacio, el delimitador se considera como todo el espacio en blanco.

@(field(""a,b,c"", 1, "","")) → b
@(field(""a,,b,c"", 1, "","")) →
@(field(""a   b c"", 1, "" "")) → b
@(field(""a      b   c   d"", 1, ""    "")) →
@(field(""a\t\tb\tc\td"", 1, "" "")) →
@(field(""a,b,c"", ""foo"", "","")) → ERROR
`foreach(valores, func, [argumentos...])`: crea una nueva matriz aplicando `func` a cada valor en `values`. Si la función proporcionada acepta más de un argumento, puedes pasar argumentos adicionales después de la función.

@(foreach(array(""a"", ""b"", ""c""), upper)) → [A, B, C]@(foreach(array(""the man"", ""fox"", ""jumped up""), word, 0)) → [the, fox, jumped]
`foreach_value(objeto, func, [args...])`: crea un nuevo objeto aplicando `func` a cada valor de propiedad de `object`. Si la función proporcionada acepta más de un argumento, puedes pasar argumentos adicionales después de la función.

@(foreach_value(object(""a"", ""x"", ""b"", ""y""), upper)) → {a: X, b: Y}@(foreach_value(object(""a"", ""hi there"", ""b"", ""good bye""), word, 1)) → {a: there, b: bye}
`format(valor)`: formatea `value` según su tipo.

@(format(1234.5670)) → 1,234.567
@(format(now())) → 11-04-2018 13:24
@(format(today())) → 11-04-2018
`format_date(data, [, formato])`: formatea `date` como texto según el formato dado. Si no se especifica formato, se utilizará el formato predeterminado del entorno. La cadena de formato puede consistir en los siguientes caracteres. Los caracteres '', ':', ',', 'T', '-' y '_' son ignorados. Cualquier otro carácter es un error.

\- `YY`: últimos dos dígitos del año 0-99
\- `YYYY`: cuatro dígitos del año 0000-9999
\- `M`: devuelve el mes sin ceros 1-12
\- `MM`: devuelve el mes con ceros 01-12
\- `D`: día del mes 1-31
\- `DD`: día del mes con ceros 01-31

@(format_date(""1979-07-18T15:00:00.000000Z"")) → 18-07-1979@(format_date(""1979-07-18T15:00:00.000000Z"", ""YYYY-MM-DD"")) → 1979-07-18@(format_date(""2010-05-10T19:50:00.000000Z"", ""YYYY M DD"")) → 2010 5 10@(format_date(""1979-07-18T15:00:00.000000Z"", ""YYYY"")) → 1979
@(format_date(""1979-07-18T15:00:00.000000Z"", ""M"")) → 7
@(format_date(""NOT DATE"", ""YYYY-MM-DD"")) → ERROR
`format_datetime (data e hora [, formato [, fuso horário]])`
Formatea `datetime` como texto según el formato dado. Si no se especifica formato, se utilizará el formato predeterminado del entorno. La cadena de formato puede consistir en los siguientes caracteres. Los caracteres '', ':', ',', 'T', '-' y '_' son ignorados. Cualquier otro carácter es un error.

\- `YY`: últimos dos dígitos del año 0-99
\- `YYYY`: cuatro dígitos del año 0000-9999
\- `M`: devuelve el mes sin ceros 1-12
\- `MM`: devuelve el mes con ceros 01-12
\- `D`: día del mes 1-31
\- `DD`: día del mes con ceros 01-31
\- `h`: hora del día 1-12
\- `hh`: hora del día 01-12
\- `tt`: veinticuatro horas del día 00-23
\- `m`: minuto sin ceros 0-59
\- `mm`: minuto con ceros 00-59
\- `s`: segundo sin ceros 0-59
\- `ss`: segundo con ceros 00-59
\- `fff`: milisegundos
\- `ffffff`: microsegundos
\- `fffffffff`: nanosegundos
\- `aa`: AM o PM
\- `AA`: AM o PM
\- `Z`: desplazamiento de hora y minuto de UTC o Z de UTC
\- `ZZZ`: desplazamiento de hora y minuto de UTC
El huso horario debe ser el nombre de la ubicación, según lo especificado en la base de datos de husos horarios de IANA, como ""America/Guayaquil"" o ""America/Los_Angeles"". Si no se especifica, se utilizará el huso horario actual. Se devolverá un error si el huso horario no es reconocido.

@(format_datetime(""1979-07-18T15:00:00.000000Z"")) → 18-07-1979 10:00@(format_datetime(""1979-07-18T15:00:00.000000Z"", ""YYYY-MM-DD"")) → 1979-07-18
@(format_datetime(""2010-05-10T19:50:00.000000Z"", ""YYYY M DD tt:mm"")) → 2010 5 10 14:50
@(format_datetime(""2010-05-10T19:50:00.000000Z"", ""YYYY-MM-DD hh:mm AA"", ""America/Los_Angeles"")) → 2010-05-10 12:50 PM
@(format_datetime(""1979-07-18T15:00:00.000000Z"", ""YYYY"")) → 1979@(format_datetime(""1979-07-18T15:00:00.000000Z"", ""M"")) → 7
@(format_datetime(""NOT DATE"", ""YYYY-MM-DD"")) → ERROR
`format_location(local)`: formatea el `location` dado como su nombre.

@(format_location(""Rwanda"")) → Rwanda
@(format_location(""Rwanda > Kigali"")) → Kigali
`format_number(número, lugares [, humanizar])`: formatea `number` al número decimal especificado en `places`. Un tercer argumento opcional `humanize` puede ser falso para desactivar el uso de separadores de miles.

@(format_number(1234)) → 1,234@(format_number(1234.5670)) → 1,234.567@(format_number(1234.5670, 2, true)) → 1,234.57@(format_number(1234.5678, 0, false)) → 1235@(format_number(""foo"", 2, false)) → ERROR
`format_time(hora, [, formato])`: formatea `time` como texto según el formato dado. Si no se especifica formato, se utilizará el formato predeterminado del entorno. La cadena de formato puede consistir en los siguientes caracteres. Los caracteres '', ':', ',', 'T', '-' y '_' son ignorados. Cualquier otro carácter es un error.

\- `h`: hora del día 1-12
\- `hh`: hora del día 01-12
\- `tt`: veinticuatro horas del día 00-23
\- `m`: minuto sin ceros 0-59
\- `mm`: minuto con ceros 00-59
\- `s`: segundo sin ceros 0-59
\- `ss`: segundo con ceros 00-59
\- `fff`: milisegundos
\- `ffffff`: microsegundos
\- `fffffffff`: nanosegundos
\- `aa`: AM o PM
\- `AA`: AM o PM

@(format_time(""14:50:30.000000"")) → 14:50@(format_time(""14:50:30.000000"", ""h:mm aa"")) → 2:50 pm@(format_time(""15:00:27.000000"", ""s"")) → 27
@(format_time(""NOT TIME"", ""hh:mm"")) → ERROR
`format_urn(urn)`: formatea `urn` en un texto amigable para humanos.

@(format_urn(""tel:+250781234567"")) → 0781 234 567@(format_urn(""twitter:134252511151#billy_bob"")) → billy_bob@(format_urn(contact.urn)) → (202) 456-1111
@(format_urn(urns.tel)) → (202) 456-1111
@(format_urn(urns.mailto)) → foo@bar.com
@(format_urn(""NOT URN"")) → ERROR
`html_decode(texto)`: decodifica el HTML text.

@(html_decode(""Red &amp; Blue"")) → Red & Blue
@(html_decode(""5 + 10"")) → 5 + 10
`if(teste, valor1, valor2)`: devuelve `valor1` si test es verdadero y `valor2` si no lo es. Si el primer argumento es un error, ese error será devuelto.

@(if(1 = 1, ""foo"", ""bar"")) → foo
@(if(""foo"" > ""bar"", ""foo"", ""bar"")) → ERROR
`is_error(valor)`: devuelve true si value tiene un error.

@(is_error(datetime(""foo""))) → true
@(is_error(run.not.existing)) → true
@(is_error(""hello"")) → false
`join(matriz, separador)`: une el array de cadenas utilizando el separator dado para formar un texto.

@(join(array(""a"", ""b"", ""c""), ""|"")) → a|b|c
@(join(split(""a.b.c"", "".""), "" "")) → a b c
`json(valor)`: devuelve la representación JSON de value.

@(json(""string"")) → ""string""
@(json(10)) → 10
@(json(null)) → null
@(json(contact.uuid)) → ""5d76d86b-3bb9-4d5a-b822-c9d86f5d8e4f""
`lower(texto)`: convierte `text` a minúsculas.

@(lower(""HellO"")) → hello
@(lower(""hello"")) → hello
@(lower(""123"")) → 123
@(lower(""😀"")) → 😀
`max(números...)`: devuelve el valor máximo en `numbers`.

@(max(1, 2)) → 2
@(max(1, -1, 10)) → 10
@(max(1, 10, ""foo"")) → ERROR
`mean(números...)`: devuelve el promedio aritmético de `numbers`.

@(mean(1, 2)) → 1.5
@(mean(1, 2, 6)) → 3
@(mean(1, ""foo"")) → ERROR
`min(números...)`: devuelve el valor mínimo en `numbers`.

@(min(1, 2)) → 1
@(min(2, 2, -10)) → -10
@(min(1, 2, ""foo"")) → ERROR
`mod(dividendo, divisor)`: devuelve el resto de la división de dividend por divisor.

@(mod(5, 2)) → 1
@(mod(4, 2)) → 0
@(mod(5, ""foo"")) → ERROR
`now()`: devuelve la fecha y la hora actuales en la zona horaria actual.

@(now()) → 2018-04-11T13:24:30.123456-05:00
`number(valores)`: intenta convertir `value` en un número. Se devolverá un error si el valor no puede ser convertido.

@(number(10)) → 10
@(number(""123.45000"")) → 123.45
@(number(""what?"")) → ERROR
`object(pares...)`: toma los pares de valores de nombre de propiedad y los devuelve como un nuevo objeto.

@(object()) → {}
@(object(""a"", 123, ""b"", ""hello"")) → {a: 123, b: hello}
@(object(""a"")) → ERROR
`or(valores...)`: devuelve true si alguno de los values es verdadero.

@(or(true)) → true
@(or(true, false, true)) → true
`parse_datetime(texto, formato [, fuso horário])`: analiza text en una fecha usando el formato dado. La cadena de formato puede consistir en los siguientes caracteres. Los caracteres '', ':', ',', 'T', '-' y '_' son ignorados. Cualquier otro carácter es un error.

\- `YY`: últimos dos dígitos del año 0-99
\- `YYYY`: cuatro dígitos del año 0000-9999
\- `M`: mes 1-12
\- `MM`: mes 01-12
\- `D`: día del mes sin ceros 1-31
\- `DD`: día del mes con ceros 01-31
\- `h`: hora del día sin ceros 1-12
\- `hh`: hora del día con ceros 01-12
\- `tt`: veinticuatro horas del día 00-23
\- `m`: minuto sin ceros 0-59
\- `mm`: minuto con ceros 00-59
\- `s`: segundo sin ceros 0-59
\- `ss`: segundo con ceros 00-59
\- `fff`: milisegundos
\- `ffffff`: microsegundos
\- `fffffffff`: nanosegundos
\- `aa`: AM o PM
\- `AA`: AM o PM
\- `Z`: desplazamiento de hora y minuto de UTC o Z de UTC
\- `ZZZ`: desplazamiento de hora y minuto de UTC
El huso horario debe ser el nombre de la ubicación, según lo especificado en la base de datos de husos horarios de IANA, como ""America/Guayaquil"" o ""America/Los_Angeles"". Si no se especifica, se utilizará el huso horario actual. Se devolverá un error si el huso horario no es reconocido.

Ten en cuenta que los segundos fraccionarios serán analizados incluso sin un identificador de formato explícito. Solo debes especificar segundos fraccionarios cuando desees establecer el número de lugares en el formato de entrada.

`parse_datetime` devolverá un error si no puede convertir el texto en una `datetime`.

@(parse_datetime(""1979-07-18"", ""YYYY-MM-DD"")) → 1979-07-18T00:00:00.000000-05:00
@(parse_datetime(""2010 5 10"", ""YYYY M DD"")) → 2010-05-10T00:00:00.000000-05:00@(parse_datetime(""2010 5 10 12:50"", ""YYYY M DD tt:mm"", ""America/Los_Angeles"")) → 2010-05-10T12:50:00.000000-07:00
@(parse_datetime(""NOT DATE"", ""YYYY-MM-DD"")) → ERROR
`parse_json(texto)`: intenta analizar text como JSON. Si el text JSON proporcionado no es válido, se devolverá un error.

@(parse_json(""{\""foo\"": \""bar\""}"").foo) → bar
@(parse_json(""[1,2,3,4]"")[2]) → 3
@(parse_json(""invalid json"")) → ERROR
`parse_time(texto, formato)`: analiza text en un tiempo usando el formato dado. La cadena de formato puede consistir en los siguientes caracteres. Los caracteres '', ':', ',', 'T', '-' y '_' son ignorados. Cualquier otro carácter es un error.

\- `h`: hora del día 1-12
\- `hh`: hora del día 01-12
\- `tt`: veinticuatro horas del día 00-23
\- `m`: minuto sin ceros 0-59
\- `mm`: minuto con ceros 00-59
\- `s`: segundo sin ceros 0-59
\- `ss`: segundo con ceros 00-59
\- `fff`: milisegundos
\- `ffffff`: microsegundos
\- `fffffffff`: nanosegundos
\- `aa`: AM o PM
\- `AA`: AM o PM
Ten en cuenta que los segundos fraccionarios serán analizados incluso sin un identificador de formato explícito. Solo debes especificar segundos fraccionarios cuando desees establecer el número de lugares en el formato de entrada.

`parse_time` devolverá un error si no puede convertir el texto en un `datetime`.

@(parse_time(""15:28"", ""tt:mm"")) → 15:28:00.000000
@(parse_time(""2:40 pm"", ""h:mm aa"")) → 14:40:00.000000
@(parse_time(""NOT TIME"", ""tt:mm"")) → ERROR
`percent(número)`: formatea number como un porcentaje.

@(percent(0.54234)) → 54%
@(percent(1.2)) → 120%
@(percent(""foo"")) → ERROR
`rand()`: devuelve un único número aleatorio entre [0.0-1.0).

@(rand()) → 0.607552015674623913099594574305228888988494873046875@(rand()) → 0.484677570947340263796121462291921488940715789794921875
`rand_between()`: devuelve un único entero aleatorio dentro del intervalo inclusivo proporcionado.

@(rand_between(1, 10)) → 10
@(rand_between(1, 10)) → 2
`read_chars(texto)`: convierte text en algo que puede ser leído por sistemas de IVR. ReadChars dividirá los números de manera que sean más fáciles de entender, lo que incluye la división en grupos de 3 o 4, si es apropiado.

@(read_chars(""1234"")) → 1 2 3 4
@(read_chars(""abc"")) → a b c
@(read_chars(""abcdef"")) → a b c , d e f
`regex_match(texto, padrão [, grupo])`: devuelve la primera coincidencia de la expresión regular pattern en text. Un tercer parámetro opcional, grupo, determina qué grupo coincidente será devuelto.

@(regex_match(""sda34dfddg67"", ""\d+"")) → 34
@(regex_match(""Bob Smith"", ""(\w+) (\w+)"", 1)) → Bob
@(regex_match(""Bob Smith"", ""(\w+) (\w+)"", 2)) → Smith
@(regex_match(""Bob Smith"", ""(\w+) (\w+)"", 5)) → ERROR
@(regex_match(""abc"", ""[\."")) → ERROR
`remove_first_word(texto)`: elimina la primera palabra de text.

@(remove_first_word(""foo bar"")) → bar
@(remove_first_word(""Hi there. I'm a flow!"")) → there. I'm a flow!

`repeat(texto, contagem)`: devuelve el `text` repetido `count` veces.

@(repeat(""*"", 8)) → ********
@(repeat(""*"", ""foo"")) → ERROR
`replace(texto, agulha, substituição [, contagem])`: reemplaza hasta count ocurrencias de `needle` con `replacement` en `text`. Si `count` se omite o es menor que 0, se reemplazarán todas las ocurrencias.

@(replace(""foo bar foo"", ""foo"", ""zap"")) → zap bar zap
@(replace(""foo bar foo"", ""foo"", ""zap"", 1)) → zap bar foo
@(replace(""foo bar"", ""baz"", ""zap"")) → foo bar
`replace_time(datetime)`: devuelve un nuevo datetime con la parte de la hora reemplazada por time.

@(replace_time(now(), ""10:30"")) → 2018-04-11T10:30:00.000000-05:00@(replace_time(""2017-01-15"", ""10:30"")) → 2017-01-15T10:30:00.000000-05:00@(replace_time(""foo"", ""10:30"")) → ERROR
`round(número [, lugares])`: redondea number al valor más cercano. Opcionalmente, puedes pasar el número de decimales para redondear a places. Si `places < 0`, redondeará la parte entera al `10^` más cercano (- lugares).

@(round(12)) → 12
@(round(12.141)) → 12
@(round(12.6)) → 13
@(round(12.141, 2)) → 12.14
@(round(12.146, 2)) → 12.15
@(round(12.146, -1)) → 10
@(round(""notnum"", 2)) → ERROR
`round_down(número [, lugares])`: redondea number hacia abajo al valor entero más cercano. Opcionalmente, puedes pasar el número de decimales para redondear a places.

@(round_down(12)) → 12
@(round_down(12.141)) → 12
@(round_down(12.6)) → 12
@(round_down(12.141, 2)) → 12.14
@(round_down(12.146, 2)) → 12.14
@(round_down(""foo"")) → ERROR
`round_up(número [, lugares])`: redondea number hacia arriba al valor entero más cercano. Opcionalmente, puedes pasar el número de decimales para redondear a places.

@(round_up(12)) → 12
@(round_up(12.141)) → 13
@(round_up(12.6)) → 13
@(round_up(12.141, 2)) → 12.15
@(round_up(12.146, 2)) → 12.15
@(round_up(""foo"")) → ERROR
`split(texto, [, delimitadores])`: divide `text` en una matriz de palabras separadas. Los valores vacíos se eliminan de la lista devuelta. Hay un parámetro opcional final, `delimiters`, que es una secuencia de caracteres utilizada para dividir el texto en palabras.

@(split(""a b c"")) → [a, b, c]
@(split(""a"", "" "")) → [a]
@(split(""abc..d"", ""."")) → [abc, d]
@(split(""a.b.c."", ""."")) → [a, b, c]
@(split(""a|b,c  d"", "" .|,"")) → [a, b, c, d]
`text(valor)`: intenta convertir value en texto. Se devolverá un error si el valor no puede ser convertido.

@(text(3 = 3)) → true
@(json(text(123.45))) → ""123.45""
@(text(1 / 0)) → ERROR
`text_compare(texto1, texto2)`: devuelve el orden del diccionario entre `text1` y `text2`. El valor devuelto será -1 si `text1` viene antes de `text2`, 0 si son iguales, y 1 si `text1` viene después de `text2`.

@(text_compare(""abc"", ""abc"")) → 0
@(text_compare(""abc"", ""def"")) → -1
@(text_compare(""zzz"", ""aaa"")) → 1
`text_length(valor)`: devuelve la longitud (número de caracteres) de value cuando se convierte en texto.

@(text_length(""abc"")) → 3
@(text_length(array(2, 3))) → 6
`text_slice(texto, início [, fim])`: devuelve la parte de text entre start (inclusive) y end (exclusivo). Si end no está especificado, se incluirá todo el resto de text. Valores negativos para start o end comienzan desde el final de text.

@(text_slice(""hello"", 2)) → llo
@(text_slice(""hello"", 1, 3)) → el
@(text_slice(""hello😁"", -3, -1)) → lo
@(text_slice(""hello"", 7)) →
`time(valor do tempo)`: intenta convertir value en una hora. Si es un texto, se analizará en una hora usando el formato de hora estándar. Se devolverá un error si el valor no puede ser convertido.

@(time(""10:30"")) → 10:30:00.000000
@(time(""10:30:45 PM"")) → 22:30:45.000000
@(time(datetime(""1979-07-18T10:30:45.123456Z""))) → 10:30:45.123456
@(time(""what?"")) → ERROR
`time_from_parts(hora, minuto, segundo)`: crea un tiempo de hour, minute y second.

@(time_from_parts(14, 40, 15)) → 14:40:15.000000
@(time_from_parts(8, 10, 0)) → 08:10:00.000000
@(time_from_parts(25, 0, 0)) → ERROR
`title(texto)`: pone en mayúscula cada palabra en text.

@(title(""foo"")) → Foo
@(title(""ryan lewis"")) → Ryan Lewis
@(title(""RYAN LEWIS"")) → Ryan Lewis
@(title(123)) → 123
`today()`: retorna la fecha actual en la zona horaria del entorno.

@(today()) → 2018-04-11
`trim(texto, [, caracteres])`: elimina el espacio en blanco en los extremos de text. Hay un parámetro opcional, chars, que es una secuencia de caracteres a eliminar en lugar del espacio en blanco.

@(trim("" hello world    "")) → hello world
@(trim(""+123157568"", ""+"")) → 123157568
`trim_left(texto, [, caracteres])`: elimina el espacio en blanco desde el inicio de text. Hay un parámetro opcional, chars, que es una secuencia de caracteres a eliminar en lugar del espacio en blanco.

@(""*"" & trim_left("" hello world   "") & ""*"") → *hello world   *@(trim_left(""+12345+"", ""+"")) → 12345+
`trim_right(texto, [, caracteres])`: elimina el espacio en blanco del final de text. Hay un parámetro opcional, chars, que es una secuencia de caracteres a eliminar en lugar del espacio en blanco.

@(""*"" & trim_right("" hello world   "") & ""*"") → * hello world*@(trim_right(""+12345+"", ""+"")) → +12345
`tz(data)`: devuelve el nombre de la zona horaria de date. Si no hay información de zona horaria presente en la fecha, se devolverá la zona horaria actual.

@(tz(""2017-01-15T02:15:18.123456Z"")) → UTC
@(tz(""2017-01-15 02:15:18PM"")) → America/Guayaquil
@(tz(""2017-01-15"")) → America/Guayaquil
@(tz(""foo"")) → ERROR
`tz_offset(data)`: devuelve el desplazamiento de la zona horaria de date. El desplazamiento se devuelve en el formato [+/-]HH:MM. Si no hay información de zona horaria presente en la fecha, se devolverá la zona horaria actual.

@(tz_offset(""2017-01-15T02:15:18.123456Z"")) → +0000
@(tz_offset(""2017-01-15 02:15:18PM"")) → -0500
@(tz_offset(""2017-01-15"")) → -0500
@(tz_offset(""foo"")) → ERROR
`upper(texto)`: convierte text a mayúsculas.

@(upper(""Asdf"")) → ASDF
@(upper(123)) → 123
`url_encode(texto)`: codifica text para su uso como parámetro de URL.

@(url_encode(""two & words"")) → two%20%26%20words
@(url_encode(10)) → 10
`url_parts(urn)`: analiza una URL en sus diferentes partes.

@(urn_parts(""tel:+593979012345"")) → {display: , path: +593979012345, scheme: tel}
@(urn_parts(""twitterid:3263621177#bobby"")) → {display: bobby, path: 3263621177, scheme: twitterid}@(urn_parts(""not a urn"")) → ERROR
`week_number(data)`: retorna el número de la semana (1-54) de date.

@(week_number(""2019-01-01"")) → 1
@(week_number(""2019-07-23T16:56:59.000000Z"")) → 30
@(week_number(""xx"")) → ERROR
`weekday(data)`: retorna el día de la semana para date. Se considera que la semana comienza el domingo; por lo tanto, un domingo retorna 0, un lunes retorna 1, etc.

@(weekday(""2017-01-15"")) → 0
@(weekday(""foo"")) → ERROR
`word(texto, índice [, delimitadores])`: retorna la palabra index en text. Los índices comienzan en cero. Hay un parámetro opcional, delimiters, que es una secuencia de caracteres utilizada para dividir el texto en palabras.

@(word(""bee cat dog"", 0)) → bee
@(word(""bee.cat,dog"", 0)) → bee
@(word(""bee.cat,dog"", 1)) → cat
@(word(""bee.cat,dog"", 2)) → dog
@(word(""bee.cat,dog"", -1)) → dog
@(word(""bee.cat,dog"", -2)) → cat
@(word(""bee.*cat,dog"", 1, "".*=|"")) → cat,dog
@(word(""O'Grady O'Flaggerty"", 1, "" "")) → O'Flaggerty
`word_count(texto, [, delimitadores])`: retorna el número de palabras en text. Hay un parámetro opcional, delimiters, que es una secuencia de caracteres utilizada para dividir el texto en palabras.

@(word_count(""foo bar"")) → 2
@(word_count(10)) → 1
@(word_count("""")) → 0
@(word_count(""😀😃😄😁"")) → 4
@(word_count(""bee.*cat,dog"", "".*=|"")) → 2
@(word_count(""O'Grady O'Flaggerty"", "" "")) → 2
`word_slice(texto, início, fim [, delimitadores])`: extrae una sub-secuencia de palabras de text. Las palabras devueltas son aquellas que incluyen start, pero no incluyen end.

Los índices comienzan en cero y un valor final negativo significa que se deben devolver todas las palabras después del inicio. Hay un parámetro opcional, delimiters, que es una secuencia de caracteres usada para dividir el texto en palabras.

@(word_slice(""bee cat dog"", 0, 1)) → bee
@(word_slice(""bee cat dog"", 0, 2)) → bee cat
@(word_slice(""bee cat dog"", 1, -1)) → cat dog
@(word_slice(""bee cat dog"", 1)) → cat dog
@(word_slice(""bee cat dog"", 2, 3)) → dog
@(word_slice(""bee cat dog"", 3, 10)) →
@(word_slice(""bee.*cat,dog"", 1, -1, "".*=|,"")) → cat dog
@(word_slice(""O'Grady O'Flaggerty"", 1, 2, "" "")) → O'Flaggerty"
