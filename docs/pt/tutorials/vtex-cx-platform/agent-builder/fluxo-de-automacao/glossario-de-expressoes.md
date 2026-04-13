---
title: "Glossário de expressões"
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
locale: pt
subcategoryId: hXGU8pFfABVFIg724zWBN
---

Expressões são fórmulas utilizadas na plataforma de forma muito semelhante às usadas em programas de planilha, como a do Microsoft Excel. Embora tenham evoluído com o tempo e essas semelhanças sejam muito menores agora. É uma linguagem de modelagem baseada em expressões que visa facilitar a geração de texto a partir de um contexto de valores.

Nesse artigo trataremos um pouco sobre:

  * Modelos
  * Tipos
  * Operadores
  * Funções

## Modelos

Expressões podem ser chamadas usando o seguinte modelo: `@(...)`.

Por exemplo, o modelo `Hi @(""Dr "" & upper(foo))`pega o valor da variável `@foo`, converte para maiúsculas e o prefixa com outra palavra. Observe que dentro de uma expressão complexa você não precisa colocar `@` antes de todas as variáveis.

## Tipos

Temos os seguintes tipos de expressões aceitos na plataforma:
Array: usado para a criação de um array de itens:

    @(array(1, ""x"", true)) → [1, x, true]
    @(array(1, ""x"", true)[1]) → x
    @(count(array(1, ""x"", true))) → 3
    @(json(array(1, ""x"", true))) → [1,""x"",true]
Booleano: é um booleano `verdadeiro`ou `falso`

    @(true) → true
    @(1 = 1) → true
    @(1 = 2) → false
    @(json(true)) → true
Data: é um valor de data do calendário gregoriano

    @(date_from_parts(2019, 4, 11)) → 2019-04-11@(format_date(date_from_parts(2019, 4, 11))) → 11-04-2019@(json(date_from_parts(2019, 4, 11))) → ""2019-04-11""
Data e Hora: é um valor de data e hora

    @(datetime(""1979-07-18T10:30:45.123456Z"")) → 1979-07-18T10:30:45.123456Z
    @(format_datetime(datetime(""1979-07-18T10:30:45.123456Z""))) → 18-07-1979 05:30@(json(datetime(""1979-07-18T10:30:45.123456Z""))) → ""1979-07-18T10:30:45.123456Z""
Função: é uma função que pode ser chamada

    @(upper) → function
    @(array(upper)[0](""abc"")) → ABC
    @(json(upper)) → null
Número: é um número inteiro ou fracionado

    @(1234) → 1234
    @(1234.5678) → 1234.5678
    @(format_number(1234.5670)) → 1,234.567
    @(json(1234.5678)) → 1234.5678
Objeto: é um objeto com propriedades nomeadas

    @(object(""foo"", 1, ""bar"", ""x"")) → {bar: x, foo: 1}
    @(object(""foo"", 1, ""bar"", ""x"").bar) → x
    @(object(""foo"", 1, ""bar"", ""x"")[""bar""]) → x
    @(count(object(""foo"", 1, ""bar"", ""x""))) → 2
    @(json(object(""foo"", 1, ""bar"", ""x""))) → {""bar"":""x"",""foo"":1}
Texto: é uma sequência de caracteres

    @(""abc"") → abc
    @(text_length(""abc"")) → 3
    @(upper(""abc"")) → ABC
    @(json(""abc"")) → ""abc""
Tempo: é uma hora do dia

    @(time_from_parts(16, 30, 45)) → 16:30:45.000000@(format_time(time_from_parts(16, 30, 45))) → 16:30@(json(time_from_parts(16, 30, 45))) → ""16:30:45.000000""

## Operadores

Abaixo, segue a lista de todos os operadores que podem ser utilizados na construção de expressões na plataforma:
**+** : soma dois números

    @(2 + 3) → 5
    @(fields.age + 10) → 33
**&** : une dois valores de texto

    @(""hello"" & "" "" & ""bar"") → hello bar
    @(""hello"" & null) → hello
**/** : divide um número por outro

    @(4 / 2) → 2@(3 / 2) → 1.5
    @(46 / fields.age) → 2
    @(3 / 0) → ERROR
**=** : retorna ""true"" se dois valores são textualmente iguais

    @(""hello"" = ""hello"") → true
    @(""hello"" = ""bar"") → false
    @(1 = 1) → true
**^** : ele um número à potência de outro

    @(2 ^ 8) → 256
**>** : retorna ""true"" se o primeiro número for maior que o segundo

    @(2 > 3) → false@(3 > 3) → false@(4 > 3) → true
**> =** : retorna ""true"" se o primeiro número for maior que ou igual ao segundo

    @(2 >= 3) → false
    @(3 >= 3) → true
    @(4 >= 3) → true
**<** : retorna ""true"" se o primeiro número for menor que o segundo

    @(2 < 3) → true
    @(3 < 3) → false
    @(4 < 3) → false
**< =** : retorna ""true"" se o primeiro número for menor que ou igual ao segundo

    @(2 <= 3) → true
    @(3 <= 3) → true
    @(4 <= 3) → false
***** : multiplica dois números

    @(3 * 2) → 6
    @(fields.age * 3) → 69
**- (unário)** : nega um número

    @(-fields.age) → -23
**!** : retorna ""true"" se dois valores não são textualmente iguais

    @(""hello"" != ""hello"") → false
    @(""hello"" != ""bar"") → true
    @(1 != 2) → true
**- (binário)** : subtrai dois números

    @(3 - 2) → 1
    @(2 - 3) → -1

## Funções

As expressões têm acesso a um conjunto de funções internas que podem ser usadas para executar tarefas mais complexas. As funções são chamadas usando a sintaxe `@(function_name(args..))` e podem assumir como argumentos valores literais `@(length(split(""1 2 3"", "" ""))`ou variáveis no contexto`@(title(contact.name)`.

`abs(número)`: retorna o valor absoluto de `number`.

    @(abs(-10)) → 10
    @(abs(10.5)) → 10.5
    @(abs(""foo"")) → ERROR
`and(valores...)`: retorna se todos os dados de `values`são verdadeiros

    @(and(true)) → true
    @(and(true, false, true)) → false
`array(valores...)`: toma vários `values`e os retorna como uma matriz.

    @(array(""a"", ""b"", 356)[1]) → b
    @(join(array(""a"", ""b"", ""c""), ""|"")) → a|b|c
    @(count(array())) → 0
    @(count(array(""a"", ""b""))) → 2
`attachment_parts(anexo)`: analisa um anexo em suas diferentes partes

    @(attachment_parts(""image/jpeg:https://example.com/test.jpg"")) → {content_type: image/jpeg, url: https://example.com/test.jpg}
`boolean(valor)`: tenta converter `value`para um booleano. Um erro será retornado se o valor não puder ser convertido.

    @(boolean(array(1, 2))) → true
    @(boolean(""FALSE"")) → false
    @(boolean(1 / 0)) → ERROR
`char(código)`: retorna o caractere para UNICODE fornecido `code`. É o inverso do código.

    @(char(33)) → !

    @(char(128512)) → 😀
    @(char(""foo"")) → ERROR
`clean(texto)`: remove todos os caracteres não imprimíveis de `text`. É o inverso de `char`.

    @(clean(""😃 Hello \nwo\tr\rld"")) → 😃 Hello world
    @(clean(123)) → 123
`code(texto)`: retorna o código UNICODE para o primeiro caractere de `text`. É o inverso do `char`.

    @(code(""a"")) → 97
    @(code(""abc"")) → 97
    @(code(""😀"")) → 128512
    @(code(""15"")) → 49
    @(code(15)) → 49
    @(code("""")) → ERROR
`count(valor)`: retorna o número de itens na matriz ou propriedades especificadas em um objeto. Ele retornará um erro se for passado um item que não é contável.

    @(count(contact.fields)) → 5
    @(count(array())) → 0
    @(count(array(""a"", ""b"", ""c""))) → 3
    @(count(1234)) → ERROR
`date(valor)`: tenta converter `(valor)`para uma data. Se for texto, ele será analisado em uma data usando o formato de data padrão. Um erro será retornado se o valor não puder ser convertido.

    @(date(""1979-07-18"")) → 1979-07-18
    @(date(""1979-07-18T10:30:45.123456Z"")) → 1979-07-18@(date(""10/05/2010"")) → 2010-05-10
    @(date(""NOT DATE"")) → ERROR
`date_from_parts(ano, mês, dia)`: cria uma data a partir dos argumentos ano, mês e dia.

    @(date_from_parts(2017, 1, 15)) → 2017-01-15
    @(date_from_parts(2017, 2, 31)) → 2017-03-03
    @(date_from_parts(2017, 13, 15)) → ERROR
`datetime(valor)`: tenta converter `value`para um datatime. Se for texto, ele será analisado em uma data e hora usando os formatos padrão de data e hora. Um erro será retornado se o valor não puder ser convertido.

    @(datetime(""1979-07-18"")) → 1979-07-18T00:00:00.000000-05:00@(datetime(""1979-07-18T10:30:45.123456Z"")) → 1979-07-18T10:30:45.123456Z
    @(datetime(""10/05/2010"")) → 2010-05-10T00:00:00.000000-05:00
    @(datetime(""NOT DATE"")) → ERROR
`datetime_add (datetime, offset, unit)`: Calcula o valor da data alcançada adicionando o `offset`número de `unit`ao `datetime`. As durações válidas são ""Y"" para anos, ""M"" para meses, ""W"" para semanas, ""D"" para dias, ""h"" para horas, ""m"" para minutos e ""s"" para segundos.

    @(datetime_add(""2017-01-15"", 5, ""D"")) → 2017-01-20T00:00:00.000000-05:00
    @(datetime_add(""2017-01-15 10:45"", 30, ""m"")) → 2017-01-15T11:15:00.000000-05:00
`datetime_diff(date1, date2, unidade)`: retorna a duração entre `date1`e `date2`no `unit`especificado. As durações válidas são ""Y"" para anos, ""M"" para meses, ""W"" para semanas, ""D"" para dias, ""h"" para horas, ""m"" para minutos e ""s"" para segundos.

    @(datetime_diff(""2017-01-15"", ""2017-01-17"", ""D"")) → 2@(datetime_diff(""2017-01-15"", ""2017-05-15"", ""W"")) → 17@(datetime_diff(""2017-01-15"", ""2017-05-15"", ""M"")) → 4
    @(datetime_diff(""2017-01-17 10:50"", ""2017-01-17 12:30"", ""h"")) → 1@(datetime_diff(""2017-01-17"", ""2015-12-17"", ""Y"")) → -2
`datetime_from_epoch(segundos)`: converte o horário da época UNIX `seconds`em uma nova data.

    @(datetime_from_epoch(1497286619)) → 2017-06-12T11:56:59.000000-05:00@(datetime_from_epoch(1497286619.123456)) → 2017-06-12T11:56:59.123456-05:00
`default(valor, padrão)`: retorna `value`se não estiver vazio ou com erro, caso contrário ele retornará`default`.

    @(default(undeclared.var, ""default_value"")) → default_value@(default(""10"", ""20"")) → 10
    @(default("""", ""value"")) → value
    @(default(""  "", ""value"")) → \x20\x20
    @(default(datetime(""invalid-date""), ""today"")) → today@(default(format_urn(""invalid-urn""), ""ok"")) → ok
`epoch(data)`: converte `date`em um horário de época UNIX. O número retornado pode conter segundos fracionários.

    @(epoch(""2017-06-12T16:56:59.000000Z"")) → 1497286619
    @(epoch(""2017-06-12T18:56:59.000000+02:00"")) → 1497286619@(epoch(""2017-06-12T16:56:59.123456Z"")) → 1497286619.123456@(round_down(epoch(""2017-06-12T16:56:59.123456Z""))) → 1497286619
`extract(objeto, propriedades)`: pega um objeto e extrai a propriedade nomeada.

    @(extract(contact, ""name"")) → Ryan Lewis
    @(extract(contact.groups[0], ""name"")) → Testers
`extract_object(objeto, propriedades...)`: pega um objeto e retorna um novo objeto extraindo apenas as propriedades nomeadas.

    @(extract_object(contact.groups[0], ""name"")) → {name: Testers}
`field(texto, índice, delimitador)`: divide `text`usando o dado`delimiter`e retorna o campo `index`. O índice começa em zero. Ao dividir com um espaço, o delimitador é considerado como todo o espaço em branco.

    @(field(""a,b,c"", 1, "","")) → b
    @(field(""a,,b,c"", 1, "","")) →
    @(field(""a   b c"", 1, "" "")) → b
    @(field(""a      b   c   d"", 1, ""    "")) →
    @(field(""a\t\tb\tc\td"", 1, "" "")) →
    @(field(""a,b,c"", ""foo"", "","")) → ERROR
`foreach(valores, func, [argumentos...])`: cria uma nova matriz aplicando `func`a cada valor em`values`. Se a função fornecida receber mais de um argumento, você poderá passar argumentos adicionais após a função.

    @(foreach(array(""a"", ""b"", ""c""), upper)) → [A, B, C]@(foreach(array(""the man"", ""fox"", ""jumped up""), word, 0)) → [the, fox, jumped]
`foreach_value(objeto, func, [args...])`: cria um novo objeto aplicando `func`a cada valor de propriedade `object`. Se a função fornecida receber mais de um argumento, você poderá passar argumentos adicionais após a função.

    @(foreach_value(object(""a"", ""x"", ""b"", ""y""), upper)) → {a: X, b: Y}@(foreach_value(object(""a"", ""hi there"", ""b"", ""good bye""), word, 1)) → {a: there, b: bye}
`format(valor)`: formatos de `value`de acordo com seu tipo.

    @(format(1234.5670)) → 1,234.567
    @(format(now())) → 11-04-2018 13:24
    @(format(today())) → 11-04-2018
`format_date(data, [, formato])`: formata`date`como texto de acordo com o dado`format`. Se`format`não for especificado, o formato padrão do ambiente será usado. A cadeia de formato pode consistir nos seguintes caractere. Os caracteres '', ':', ',', 'T', '-' e '_' são ignorados. Qualquer outro caractere é um erro.

  * `YY`\- últimos dois dígitos do ano 0-99
  * `YYYY`\- quatro dígitos do ano 0000-9999
  * `M`\- retorna o mês, sem o zero 1-12
  * `MM`\- retorna o mês com o zero preenchido 01-12
  * `D`\- dia do mês 1-31
  * `DD`\- dia do mês, zero preenchido 01-31

    @(format_date(""1979-07-18T15:00:00.000000Z"")) → 18-07-1979@(format_date(""1979-07-18T15:00:00.000000Z"", ""YYYY-MM-DD"")) → 1979-07-18@(format_date(""2010-05-10T19:50:00.000000Z"", ""YYYY M DD"")) → 2010 5 10@(format_date(""1979-07-18T15:00:00.000000Z"", ""YYYY"")) → 1979
    @(format_date(""1979-07-18T15:00:00.000000Z"", ""M"")) → 7
    @(format_date(""NOT DATE"", ""YYYY-MM-DD"")) → ERROR
`format_datetime (data e hora [, formato [, fuso horário]])`
Formata datetime como texto de acordo com o dado `format`. Se `format`não for especificado, o formato padrão do ambiente será usado. A cadeia de formato pode consistir nos seguintes caracteres. Os caracteres '', ':', ',', 'T', '-' e '_' são ignorados. Qualquer outro caractere é um erro.

  * `YY`\- últimos dois dígitos do ano 0-99
  * `YYYY`\- quatro dígitos do ano 0000-9999
  * `M`\- retorna o mês, sem o zero 1-12
  * `MM`\- retorna o mês com o zero preenchido 01-12
  * `D`\- dia do mês 1-31
  * `DD`\- dia do mês, zero preenchido 01-31
  * `h`\- hora do dia 1-12
  * `hh`\- hora do dia 01-12
  * `tt`\- hora do dia em formato 24 h (00-23)
  * `m`\- minuto sem o zero preenchido 0-59
  * `mm`\- minuto com o zero preenchido 00-59
  * `s`\- segundo sem o zero preenchido 0-59
  * `ss`\- segundo sem o zero preenchido 00-59
  * `fff`\- milissegundos
  * `ffffff`\- microssegundos
  * `fffffffff`\- nanosegundos
  * `aa`\- AM ou PM
  * `AA`\- AM ou PM
  * `Z`\- deslocamento de hora e minuto do UTC ou Z do UTC
  * `ZZZ`\- deslocamento de hora e minuto do UTC

O fuso horário deve ser o nome de local, conforme especificado no banco de dados do fuso horário da IANA, como """"America / Guayaquil"" ou ""America / Los_Angeles"". Se não especificado, o fuso horário atual será usado. Um erro será retornado se o fuso horário não for reconhecido.

    @(format_datetime(""1979-07-18T15:00:00.000000Z"")) → 18-07-1979 10:00@(format_datetime(""1979-07-18T15:00:00.000000Z"", ""YYYY-MM-DD"")) → 1979-07-18
    @(format_datetime(""2010-05-10T19:50:00.000000Z"", ""YYYY M DD tt:mm"")) → 2010 5 10 14:50
    @(format_datetime(""2010-05-10T19:50:00.000000Z"", ""YYYY-MM-DD hh:mm AA"", ""America/Los_Angeles"")) → 2010-05-10 12:50 PM
    @(format_datetime(""1979-07-18T15:00:00.000000Z"", ""YYYY"")) → 1979@(format_datetime(""1979-07-18T15:00:00.000000Z"", ""M"")) → 7
    @(format_datetime(""NOT DATE"", ""YYYY-MM-DD"")) → ERROR
`format_location(local)`: formata o dado`location`como seu nome.

    @(format_location(""Rwanda"")) → Rwanda
    @(format_location(""Rwanda > Kigali"")) → Kigali
`format_number(número, lugares [, humanizar])`: formata `number`o número decimal especificado `places`. Um terceiro argumento opcional `humanize`pode ser falso para desativar o uso de mil separadores.

    @(format_number(1234)) → 1,234@(format_number(1234.5670)) → 1,234.567@(format_number(1234.5670, 2, true)) → 1,234.57@(format_number(1234.5678, 0, false)) → 1235@(format_number(""foo"", 2, false)) → ERROR
`format_time (hora, [, formato])`: formata `time`como texto de acordo com o dato `format`
. Se `format`não for especificado, o formato padrão do ambiente será usado. A cadeia de formato pode consistir nos seguintes caracteres. Os caracteres '', ':', ',', 'T', '-' e '_' são ignorados. Qualquer outro caractere é um erro.

  * `h`\- hora do dia 1-12
  * `hh`\- hora do dia 01-12
  * `tt`\- hora do dia em formato 24 h (00-23)
  * `m`\- minuto sem o zero preenchido 0-59
  * `mm`\- minuto com zero preenchido 00-59
  * `s`\- segundo sem o zero preenchido 0-59
  * `ss`\- segundo com o zero preenchido 00-59
  * `fff`\- milissegundos
  * `ffffff`\- microssegundos
  * `fffffffff`\- nanosegundos
  * `aa`\- AM ou PM
  * `AA`\- AM ou PM

    @(format_time(""14:50:30.000000"")) → 14:50@(format_time(""14:50:30.000000"", ""h:mm aa"")) → 2:50 pm@(format_time(""15:00:27.000000"", ""s"")) → 27
    @(format_time(""NOT TIME"", ""hh:mm"")) → ERROR
`format_urn(urn)`: formata`urn`em texto amigável para humanos.

    @(format_urn(""tel:+250781234567"")) → 0781 234 567@(format_urn(""twitter:134252511151#billy_bob"")) → billy_bob@(format_urn(contact.urn)) → (202) 456-1111
    @(format_urn(urns.tel)) → (202) 456-1111
    @(format_urn(urns.mailto)) → <foo@bar.com>
    @(format_urn(""NOT URN"")) → ERROR
`html_decode(texto)`: decodificações HTML`text`

    @(html_decode(""Red &amp; Blue"")) → Red & Blue
    @(html_decode(""5 + 10"")) → 5 + 10
`if (teste, valor1, valor2)`: retorna `value1`se `test`é verdade e `value2`se não. Se o primeiro argumento for um erro, esse erro será retornado.

    @(if(1 = 1, ""foo"", ""bar"")) → foo
    @(if(""foo"" > ""bar"", ""foo"", ""bar"")) → ERROR
`is_error(valor)`: retorna se `value`tiver um erro.

    @(is_error(datetime(""foo""))) → true
    @(is_error(run.not.existing)) → true
    @(is_error(""hello"")) → false
`join(matriz, separador)`: associa o dado`array`de strings com`separator`para citar texto.

    @(join(array(""a"", ""b"", ""c""), ""|"")) → a|b|c
    @(join(split(""a.b.c"", "".""), "" "")) → a b c
`json(valor)`: retorna a representação JSON de `value`.

    @(json(""string"")) → ""string""
    @(json(10)) → 10
    @(json(null)) → null
    @(json(contact.uuid)) → ""5d76d86b-3bb9-4d5a-b822-c9d86f5d8e4f""
`lower(texto)`: converte `text`para minúsculas.

    @(lower(""HellO"")) → hello
    @(lower(""hello"")) → hello
    @(lower(""123"")) → 123
    @(lower(""😀"")) → 😀
`max (números...)`: retorna o valor máximo em`numbers`.

    @(max(1, 2)) → 2
    @(max(1, -1, 10)) → 10
    @(max(1, 10, ""foo"")) → ERROR
`mean(números...)`: retorna a média aritmética de`numbers`.

    @(mean(1, 2)) → 1.5
    @(mean(1, 2, 6)) → 3
    @(mean(1, ""foo"")) → ERROR
`min(números...)`: retorna o valor mínimo em `numbers`.

    @(min(1, 2)) → 1
    @(min(2, 2, -10)) → -10
    @(min(1, 2, ""foo"")) → ERROR
`mod(dividendo, divisor)`: retorna o restante da divisão de `dividend`por `divisor`.

    @(mod(5, 2)) → 1
    @(mod(4, 2)) → 0
    @(mod(5, ""foo"")) → ERROR
`now()`: retorna a data e a hora atuais no fuso horário atual.

    @(now()) → 2018-04-11T13:24:30.123456-05:00
`number(valores)`: tenta converter `value`para um número. Um erro será retornado se o valor não puder ser convertido.

    @(number(10)) → 10
    @(number(""123.45000"")) → 123.45
    @(number(""what?"")) → ERROR
`object(pares...)`: pega os pares de valores do nome da propriedade e os retorna como um novo objeto.

    @(object()) → {}
    @(object(""a"", 123, ""b"", ""hello"")) → {a: 123, b: hello}
    @(object(""a"")) → ERROR
`or(valores...)`: retorna se algum dos dados `values`é verdadeiro.

    @(or(true)) → true
    @(or(true, false, true)) → true
`parse_datetime(texto, formato [, fuso horário])`: analisa `text`em uma data usando o dado`format`. A cadeia de formato pode consistir nos seguintes caracteres. Os caracteres '', ':', ',', 'T', '-' e '_' são ignorados. Qualquer outro caractere é um erro.

  * `YY`\- últimos dois dígitos do ano 0-99
  * `YYYY`\- quatro dígitos do ano 0000-9999
  * `M`\- mês 1-12
  * `MM`\- mês 01-12
  * `D`\- dia do mês sem o zero preenchido 1-31
  * `DD`\- dia do mês, zero preenchido 01-31
  * `h`\- hora do dia sem o zero preenchido 1-12
  * `hh`\- hora do dia com o zero preenchido 01-12
  * `tt`\- hora do dia em formato 24 h (00-23)
  * `m`\- minuto sem o zero preenchido 0-59
  * `mm`\- minuto com o zero preenchido 00-59
  * `s`\- segundo sem o zero preenchido 0-59
  * `ss`\- segundo com o zero preenchido 00-59
  * `fff`\- milissegundos
  * `ffffff`\- microssegundos
  * `fffffffff`\- nanosegundos
  * `aa`\- AM ou PM
  * `AA`\- AM ou PM
  * `Z`\- deslocamento de hora e minuto do UTC ou Z do UTC
  * `ZZZ`\- deslocamento de hora e minuto do UTC

O fuso horário deve ser o nome de local, conforme especificado no banco de dados do fuso horário da IANA, como """"America / Guayaquil"" ou ""America / Los_Angeles"". Se não especificado, o fuso horário atual será usado. Um erro será retornado se o fuso horário não for reconhecido.

Observe que os segundos fracionários serão analisados mesmo sem um identificador de formato explícito. Você deve especificar apenas segundos fracionários quando desejar afirmar o número de lugares no formato de entrada.

parse_datetime retornará um erro se não conseguir converter o texto em uma datetime.

    @(parse_datetime(""1979-07-18"", ""YYYY-MM-DD"")) → 1979-07-18T00:00:00.000000-05:00
    @(parse_datetime(""2010 5 10"", ""YYYY M DD"")) → 2010-05-10T00:00:00.000000-05:00@(parse_datetime(""2010 5 10 12:50"", ""YYYY M DD tt:mm"", ""America/Los_Angeles"")) → 2010-05-10T12:50:00.000000-07:00
    @(parse_datetime(""NOT DATE"", ""YYYY-MM-DD"")) → ERROR
`parse_json(texto)`: tenta analisar `text`como JSON. Se o `text`JSON fornecido não for válido, será retornado um erro.

    @(parse_json(""{\""foo\"": \""bar\""}"").foo) → bar
    @(parse_json(""[1,2,3,4]"")[2]) → 3
    @(parse_json(""invalid json"")) → ERROR
`parse_time(texto, formato)`: analisa `text`em um tempo usando o dado`format`. A cadeia de formato pode consistir nos seguintes caracteres. Os caracteres '', ':', ',', 'T', '-' e '_' são ignorados. Qualquer outro caractere é um erro.

  * `h`\- hora do dia 1-12
  * `hh`\- hora do dia 01-12
  * `tt`\- hora do dia em formato 24 h (00-23)
  * `m`\- minuto sem o zero preenchido 0-59
  * `mm`\- minuto com o zero preenchido 00-59
  * `s`\- segundo sem o zero preenchido 0-59
  * `ss`\- segundo com o zero preenchido 00-59
  * `fff`\- milissegundos
  * `ffffff`\- microssegundos
  * `fffffffff`\- nanosegundos
  * `aa`\- AM ou PM
  * `AA`\- AM ou PM

Observe que os segundos fracionários serão analisados mesmo sem um identificador de formato explícito. Você deve especificar apenas segundos fracionários quando desejar afirmar o número de lugares no formato de entrada.

parse_time retornará um erro se não conseguir converter o texto em uma datetime.

    @(parse_time(""15:28"", ""tt:mm"")) → 15:28:00.000000
    @(parse_time(""2:40 pm"", ""h:mm aa"")) → 14:40:00.000000
    @(parse_time(""NOT TIME"", ""tt:mm"")) → ERROR
`percent(número)`: formatos`number`como uma porcentagem.

    @(percent(0.54234)) → 54%
    @(percent(1.2)) → 120%
    @(percent(""foo"")) → ERROR
`rand()`: retorna um único número aleatório entre [0,0-1,0).

    @(rand()) → 0.607552015674623913099594574305228888988494873046875@(rand()) → 0.484677570947340263796121462291921488940715789794921875
`rand_between()`: um único inteiro aleatório no intervalo inclusivo fornecido.

    @(rand_between(1, 10)) → 10
    @(rand_between(1, 10)) → 2
`read_chars(texto)`: converte `text`em algo que pode ser lido pelos sistemas de URA. O ReadChars dividirá os números como eles são mais fáceis de entender. Isso inclui a divisão em 3s ou 4s, se apropriado.

    @(read_chars(""1234"")) → 1 2 3 4
    @(read_chars(""abc"")) → a b c
    @(read_chars(""abcdef"")) → a b c , d e f
`regex_match(texto, padrão [, grupo])`: retorna a primeira correspondência da expressão regular`pattern`em`text`. Um terceiro parâmetro opcional `group`determina qual grupo correspondente será retornado.

    @(regex_match(""sda34dfddg67"", ""\d+"")) → 34
    @(regex_match(""Bob Smith"", ""(\w+) (\w+)"", 1)) → Bob
    @(regex_match(""Bob Smith"", ""(\w+) (\w+)"", 2)) → Smith
    @(regex_match(""Bob Smith"", ""(\w+) (\w+)"", 5)) → ERROR
    @(regex_match(""abc"", ""[\."")) → ERROR
`remove_first_word(texto)`: remove a primeira palavra de `text`.

    @(remove_first_word(""foo bar"")) → bar
    @(remove_first_word(""Hi there. I'm a flow!"")) → there. I'm a flow!

`repeat(texto, contagem)`: retorna o número `text`repetido `count`de vezes.

    @(repeat(""*"", 8)) → ********
    @(repeat(""*"", ""foo"")) → ERROR
`replace(texto, agulha, substituição [, contagem])`: substitui até as `count`ocorrências de `needle`com `replacement`em `text`. Se`count`for omitido ou for menor que 0, todas as ocorrências serão substituídas.

    @(replace(""foo bar foo"", ""foo"", ""zap"")) → zap bar zap
    @(replace(""foo bar foo"", ""foo"", ""zap"", 1)) → zap bar foo
    @(replace(""foo bar"", ""baz"", ""zap"")) → foo bar
`replace_time(datetime)`: retorna um novo datetime com a parte do tempo substituída por`time`.

    @(replace_time(now(), ""10:30"")) → 2018-04-11T10:30:00.000000-05:00@(replace_time(""2017-01-15"", ""10:30"")) → 2017-01-15T10:30:00.000000-05:00@(replace_time(""foo"", ""10:30"")) → ERROR
`round(número [, lugares])`: arredonda `number`para o valor mais próximo. Opcionalmente, você pode passar o número de casas decimais para arredondar para as`places`. Se `places`<0, arredondará a parte inteira para os 10^ mais próximos (- lugares).

    @(round(12)) → 12
    @(round(12.141)) → 12
    @(round(12.6)) → 13
    @(round(12.141, 2)) → 12.14
    @(round(12.146, 2)) → 12.15
    @(round(12.146, -1)) → 10
    @(round(""notnum"", 2)) → ERROR
`round_down(número [, lugares])`: arredonda `number`para baixo até o valor inteiro mais próximo. Opcionalmente, você pode passar o número de casas decimais para arredondar para as `places`.

    @(round_down(12)) → 12
    @(round_down(12.141)) → 12
    @(round_down(12.6)) → 12
    @(round_down(12.141, 2)) → 12.14
    @(round_down(12.146, 2)) → 12.14
    @(round_down(""foo"")) → ERROR
`round_up(número [, lugares])`: arredonda `number`para o valor inteiro mais próximo. Opcionalmente, você pode passar o número de casas decimais para arredondar para as `places`.

    @(round_up(12)) → 12
    @(round_up(12.141)) → 13
    @(round_up(12.6)) → 13
    @(round_up(12.141, 2)) → 12.15
    @(round_up(12.146, 2)) → 12.15
    @(round_up(""foo"")) → ERROR
`split(texto, [, delimitadores])`: divide `text`em uma matriz de palavras separadas. Valores vazios são removidos da lista retornada. Há um parâmetro final opcional, `delimiters` que é uma sequência de caracteres usada para dividir o texto em palavras.

    @(split(""a b c"")) → [a, b, c]
    @(split(""a"", "" "")) → [a]
    @(split(""abc..d"", ""."")) → [abc, d]
    @(split(""a.b.c."", ""."")) → [a, b, c]
    @(split(""a|b,c  d"", "" .|,"")) → [a, b, c, d]
`text(valor)`: tenta converter `value`em texto. Um erro será retornado se o valor não puder ser convertido.

    @(text(3 = 3)) → true
    @(json(text(123.45))) → ""123.45""
    @(text(1 / 0)) → ERROR
`text_compare(texto1, texto2)`: retorna a ordem do dicionário de `text1`e `text2`. O valor retornado será -1 se `text1`vier antes de `text2`, 0 se eles forem iguais e 1 se `text1`vier depois de `text2`.

    @(text_compare(""abc"", ""abc"")) → 0
    @(text_compare(""abc"", ""def"")) → -1
    @(text_compare(""zzz"", ""aaa"")) → 1
`text_length(valor)`: retorna o comprimento (numero de caracteres) de `value`quando convertido em texto.

    @(text_length(""abc"")) → 3
    @(text_length(array(2, 3))) → 6
`text_slice(texto, início [, fim])`: retorna a parte`text`entre `start`(inclusive) e `end`(exclusivo). Se `end`não for especificado, todo o restante `text`será incluído. Valores negativos para `start`ou `end`começam no final de `text`.

    @(text_slice(""hello"", 2)) → llo
    @(text_slice(""hello"", 1, 3)) → el
    @(text_slice(""hello😁"", -3, -1)) → lo
    @(text_slice(""hello"", 7)) →
`time(valor do tempo)`: tenta converter `value`para um horário. Se for um texto, ele será analisado em um horário usando o formato de horário padrão. Um erro será retornado se o valor não puder ser convertido.

    @(time(""10:30"")) → 10:30:00.000000
    @(time(""10:30:45 PM"")) → 22:30:45.000000
    @(time(datetime(""1979-07-18T10:30:45.123456Z""))) → 10:30:45.123456
    @(time(""what?"")) → ERROR
`time_from_parts(hora, minuto, segundo)`: cria um tempo de `hour`, `minute`e `second`.

    @(time_from_parts(14, 40, 15)) → 14:40:15.000000
    @(time_from_parts(8, 10, 0)) → 08:10:00.000000
    @(time_from_parts(25, 0, 0)) → ERROR
`title(texto)`: coloca em maiúscula cada palavra em `text`

    @(title(""foo"")) → Foo
    @(title(""ryan lewis"")) → Ryan Lewis
    @(title(""RYAN LEWIS"")) → Ryan Lewis
    @(title(123)) → 123
`today()`: retorna a data atual no fuso horário do ambiente.

    @(today()) → 2018-04-11
`trim(texto, [, caracteres])`: remove o espaço em branco de qualquer extremidade de `text`. Há um parâmetro opcional, `chars`que é uma sequência de caracteres a serem removidas em vez do espaço em branco.

    @(trim("" hello world    "")) → hello world
    @(trim(""+123157568"", ""+"")) → 123157568
`trim_left(texto, [, caracteres])`: remove o espaço em branco desde o início do `text`. Há um parâmetro opcional, `chars`que é uma sequência de caracteres a serem removidas em vez do espaço em branco.

    @(""*"" & trim_left("" hello world   "") & ""*"") → *hello world   *@(trim_left(""+12345+"", ""+"")) → 12345+
`trim_right(texto, [, caracteres])`: remove o espaço em branco do final de `text`. Há um parâmetro opcional, `chars`que é uma sequência de caracteres a serem removidas em vez do espaço em branco.

    @(""*"" & trim_right("" hello world   "") & ""*"") → * hello world*@(trim_right(""+12345+"", ""+"")) → +12345
`tz(data)`: retorna o nome do fuso horário de `date`. Se nenhuma informação de fuso horário estiver presente na data, o fuso horário atual será retornado.

    @(tz(""2017-01-15T02:15:18.123456Z"")) → UTC
    @(tz(""2017-01-15 02:15:18PM"")) → America/Guayaquil
    @(tz(""2017-01-15"")) → America/Guayaquil
    @(tz(""foo"")) → ERROR
`tz_offset(data)`: retorna o deslocamento do fuso horário de `date`. O deslocamento é retornado no formato `[+/-]HH:MM`. Se nenhuma informação de fuso horário estiver presente na data, o fuso horário atual será retornado.

    @(tz_offset(""2017-01-15T02:15:18.123456Z"")) → +0000
    @(tz_offset(""2017-01-15 02:15:18PM"")) → -0500
    @(tz_offset(""2017-01-15"")) → -0500
    @(tz_offset(""foo"")) → ERROR
`upper(texto)`: converte `text`em maiúsculas.

    @(upper(""Asdf"")) → ASDF
    @(upper(123)) → 123
`url_encode(texto)`: codifica `text` para uso como um parâmetro de URL.

    @(url_encode(""two & words"")) → two%20%26%20words
    @(url_encode(10)) → 10
`url_parts(urn)`: analisa uma URL em suas diferentes partes.

    @(urn_parts(""tel:+593979012345"")) → {display: , path: +593979012345, scheme: tel}
    @(urn_parts(""twitterid:3263621177#bobby"")) → {display: bobby, path: 3263621177, scheme: twitterid}@(urn_parts(""not a urn"")) → ERROR
`week_number(data)`: retorna o número da semana (1-54) de `date`.

    @(week_number(""2019-01-01"")) → 1
    @(week_number(""2019-07-23T16:56:59.000000Z"")) → 30
    @(week_number(""xx"")) → ERROR
`weekday(data)`: retorna o dia da semana para `date`. Considera-se que a semana começa no domingo; portanto, um domingo retorna 0, uma segunda-feira retorna 1, etc.

    @(weekday(""2017-01-15"")) → 0
    @(weekday(""foo"")) → ERROR
`word(texto, índice [, delimitadores])`: retorna a palavra `index`em `text`. Os índices começam em zero. Há um parâmetro opcional, `delimiters`que é uma sequência de caracteres usada para dividir o texto em palavras.

    @(word(""bee cat dog"", 0)) → bee
    @(word(""bee.cat,dog"", 0)) → bee
    @(word(""bee.cat,dog"", 1)) → cat
    @(word(""bee.cat,dog"", 2)) → dog
    @(word(""bee.cat,dog"", -1)) → dog
    @(word(""bee.cat,dog"", -2)) → cat
    @(word(""bee.*cat,dog"", 1, "".*=|"")) → cat,dog
    @(word(""O'Grady O'Flaggerty"", 1, "" "")) → O'Flaggerty
`word_count(texto, [, delimitadores])`: retorna o número de palavras em `text`. Há um parâmetro opcional, `delimiters`que é uma sequência de caracteres usada para dividir o texto em palavras.

    @(word_count(""foo bar"")) → 2
    @(word_count(10)) → 1
    @(word_count("""")) → 0
    @(word_count(""😀😃😄😁"")) → 4
    @(word_count(""bee.*cat,dog"", "".*=|"")) → 2
    @(word_count(""O'Grady O'Flaggerty"", "" "")) → 2
`word_slice(texto, início, fim [, delimitadores])`: extrai uma sub-sequência de palavras de `text`. As palavras retornadas são aquelas que até incluem `start`, mas não incluem `end`
. Os índices começam em zero e um valor final negativo significa que todas as palavras após o início devem ser retornadas. Há um parâmetro opcional, `delimiters`que é uma sequência de caracteres usada para dividir o texto em palavras.

    @(word_slice(""bee cat dog"", 0, 1)) → bee
    @(word_slice(""bee cat dog"", 0, 2)) → bee cat
    @(word_slice(""bee cat dog"", 1, -1)) → cat dog
    @(word_slice(""bee cat dog"", 1)) → cat dog
    @(word_slice(""bee cat dog"", 2, 3)) → dog
    @(word_slice(""bee cat dog"", 3, 10)) →
    @(word_slice(""bee.*cat,dog"", 1, -1, "".*=|,"")) → cat dog
    @(word_slice(""O'Grady O'Flaggerty"", 1, 2, "" "")) → O'Flaggerty
