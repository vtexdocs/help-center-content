---
title: "Expressions glossary"
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
legacySlug: expressions-glossary
locale: en
subcategoryId: hXGU8pFfABVFIg724zWBN
---

Excellent gets its name from borrowing some of the syntax and function names of formulas in Microsoft Excel™, though it has evolved over time and similarities are now much fewer. It is an expression based templating language which aims to make it easy to generate text from a context of values.

## Templates

Templates can contain single variables or more complex expressions. A single variable is embedded using the @ character. For example the template Hi @foo contains a single variable which at runtime will be replaced with the value of foo in the context.

More complex expressions can be embedded using the @(...) syntax. For example the template Hi @(""Dr "" & upper(foo)) takes the value of foo, converts it to uppercase, and the prefixes it with another string. Note than within a complex expression you don’t prefix variables with @.

The @ symbol can be escaped in templates by repeating it, e.g, Hi @@twitter will output Hi @twitter.

## Types

Excellent has the following types[: Array](), [Boolea]()[n, Dat]()[e, DateTime](), [Function](), [Number](), [Object](https://app.rapidpro.io/mr/docs/expressions.html#type:object), [Text](), [Time]().

### [array]()

Is an array of items.

    ```
    @(array(1, ""x"", true)) → [1, x, true]

    @(array(1, ""x"", true)[1]) → x

    @(count(array(1, ""x"", true))) → 3

    @(json(array(1, ""x"", true))) → [1,""x"",true]
    ```

### [boolean]()

Is a boolean true or false.

    ```
    @(true) → true

    @(1 = 1) → true

    @(1 = 2) → false

    @(json(true)) → true
    ```

### [date]()

Is a Gregorian calendar date value.

    ```
    @(date_from_parts(2019, 4, 11)) → 2019-04-11

    @(format_date(date_from_parts(2019, 4, 11))) → 11-04-2019

    @(json(date_from_parts(2019, 4, 11))) → ""2019-04-11""
    ```

### [datetime]()

Is a datetime value.

    ```
    @(datetime(""1979-07-18T10:30:45.123456Z"")) → 1979-07-18T10:30:45.123456Z

    @(format_datetime(datetime(""1979-07-18T10:30:45.123456Z""))) → 18-07-1979 05:30

    @(json(datetime(""1979-07-18T10:30:45.123456Z""))) → ""1979-07-18T10:30:45.123456Z""
    ```

### [function]()

Is a callable function.

    ```
    @(upper) → upper

    @(array(upper)[0](""abc"")) → ABC

    @(json(upper)) → null
    ```

### [number]()

Is a whole or fractional number.

    ```
    @(1234) → 1234

    @(1234.5678) → 1234.5678

    @(format_number(1234.5670)) → 1,234.567

    @(json(1234.5678)) → 1234.5678
    ```

### [object]()

Is an object with named properties.

    ```
    @(object(""foo"", 1, ""bar"", ""x"")) → {bar: x, foo: 1}

    @(object(""foo"", 1, ""bar"", ""x"").bar) → x

    @(object(""foo"", 1, ""bar"", ""x"")[""bar""]) → x

    @(count(object(""foo"", 1, ""bar"", ""x""))) → 2

    @(json(object(""foo"", 1, ""bar"", ""x""))) → {""bar"":""x"",""foo"":1}
    ```

### [text]()

Is a string of characters.

    ```
    @(""abc"") → abc

    @(text_length(""abc"")) → 3

    @(upper(""abc"")) → ABC

    @(json(""abc"")) → ""abc""
    ```

### [time]()

Is a time of day.

    ```
    @(time_from_parts(16, 30, 45)) → 16:30:45.000000

    @(format_time(time_from_parts(16, 30, 45))) → 16:30

    @(json(time_from_parts(16, 30, 45))) → ""16:30:45.000000""
    ```

## Operators

### [+](https://app.rapidpro.io/mr/docs/expressions.html#operator:add)

Adds two numbers.

    ```
    @(2 + 3) → 5

    @(fields.age + 10) → 33
    ```

### [&](https://app.rapidpro.io/mr/docs/expressions.html#operator:concatenate)

Joins two text values together.

    ```
    @(""hello"" & "" "" & ""bar"") → hello bar

    @(""hello"" & null) → hello
    ```

### [/](https://app.rapidpro.io/mr/docs/expressions.html#operator:divide)

Divides a number by another.

    ```
    @(4 / 2) → 2

    @(3 / 2) → 1.5

    @(46 / fields.age) → 2

    @(3 / 0) → ERROR
    ```

### [=](https://app.rapidpro.io/mr/docs/expressions.html#operator:equal)

Returns true if two values are textually equal.

    ```
    @(""hello"" = ""hello"") → true

    @(""hello"" = ""bar"") → false

    @(1 = ""1"") → true
    ```

### [^](https://app.rapidpro.io/mr/docs/expressions.html#operator:exponent)

Raises a number to the power of a another number.

    ```
    @(2 ^ 8) → 256
    ```

### [>](https://app.rapidpro.io/mr/docs/expressions.html#operator:greaterthan)

Returns true if the first number is greater than the second.

    ```
    @(2 > 3) → false

    @(3 > 3) → false

    @(4 > 3) → true
    ```

### [>=]()

Returns true if the first number is greater than or equal to the second.

    ```
    @(2 >= 3) → false

    @(3 >= 3) → true

    @(4 >= 3) → true
    ```

### [<](https://app.rapidpro.io/mr/docs/expressions.html#operator:lessthan)

Returns true if the first number is less than the second.

    ```
    @(2 < 3) → true

    @(3 < 3) → false

    @(4 < 3) → false
    ```

### [<=]()

Returns true if the first number is less than or equal to the second.

    ```
    @(2 <= 3) → true

    @(3 <= 3) → true

    @(4 <= 3) → false
    ```

### [\*](https://app.rapidpro.io/mr/docs/expressions.html#operator:multiply)

Multiplies two numbers.

    ```
    @(3 * 2) → 6

    @(fields.age * 3) → 69
    ```

### [\- (unary)]()

Negates a number

    ```
    @(-fields.age) → -23
    ```

### [!=]()

Returns true if two values are textually not equal.

    ```
    @(""hello"" != ""hello"") → false

    @(""hello"" != ""bar"") → true

    @(1 != 2) → true
    ```

### [\- (binary)]()

Subtracts two numbers.

    ```
    @(3 - 2) → 1

    @(2 - 3) → -1
    ```

## Functions

Expressions have access to a set of built-in functions which can be used to perform more complex tasks. Functions are called using the @(function_name(args..)) syntax, and can take as arguments either literal values @(length(split(""1 2 3"", "" "")) or variables in the context @(title(contact.name)).

### [abs(number)]()

Returns the absolute value of number.

    ```
    @(abs(-10)) → 10

    @(abs(10.5)) → 10.5

    @(abs(""foo"")) → ERROR
    ```

### [and(values…)]()

Returns whether all the given values are truthy.

    ```
    @(and(true)) → true

    @(and(true, false, true)) → false
    ```

### [array(values…)]()

Takes multiple values and returns them as an array.

    ```
    @(array(""a"", ""b"", 356)[1]) → b

    @(join(array(""a"", ""b"", ""c""), ""|"")) → a|b|c

    @(count(array())) → 0

    @(count(array(""a"", ""b""))) → 2
    ```

### [attachment_parts(attachment)]()

Parses an attachment into its different parts

    ```
    @(attachment_parts(""image/jpeg:https://example.com/test.jpg"")) → {content_type: image/jpeg, url: https://example.com/test.jpg}
    ```

### [boolean(value)]()

Tries to convert value to a boolean. An error is returned if the value can’t be converted.

    ```
    @(boolean(array(1, 2))) → true

    @(boolean(""FALSE"")) → false

    @(boolean(1 / 0)) → ERROR
    ```

### [char(code)]()

Returns the character for the given UNICODE code. It is the inverse of [code]().

    ```
    @(char(33)) → !

    @(char(128512)) → 😀

    @(char(""foo"")) → ERROR
    ```

### [clean(text)]()

Removes any non-printable characters from text.

    ```
    @(clean(""😃 Hello \nwo\tr\rld"")) → 😃 Hello world

    @(clean(123)) → 123
    ```

### [code(text)]()

Returns the UNICODE code for the first character of text. It is the inverse of [char](https://app.rapidpro.io/mr/docs/expressions.html#function:char).

    ```
    @(code(""a"")) → 97

    @(code(""abc"")) → 97

    @(code(""😀"")) → 128512

    @(code(""15"")) → 49

    @(code(15)) → 49

    @(code("""")) → ERROR
    ```

### [concat(array1, array2)]()

Returns the result of concatenating two arrays.

    ```
    @(concat(array(""a"", ""b""), array(""c"", ""d""))) → [a, b, c, d]

    @(unique(concat(array(1, 2, 3), array(3, 4)))) → [1, 2, 3, 4]
    ```

### [contains(array, value)]()

Returns whether array contains value.

    ```
    @(contains(array(""a"", ""b"", ""c""), ""a"")) → true

    @(contains(array(1, 2, 3), 4)) → false
    ```

### [count(value)]()

Returns the number of items in the given array or properties on an object. It will return an error if it is passed an item which isn’t countable.

    ```
    @(count(contact.fields)) → 6

    @(count(array())) → 0

    @(count(array(""a"", ""b"", ""c""))) → 3

    @(count(1234)) → ERROR
    ```

### [date(value)]()

Tries to convert value to a date. If it is text then it will be parsed into a date using the default date format. An error is returned if the value can’t be converted.

    ```
    @(date(""1979-07-18"")) → 1979-07-18

    @(date(""1979-07-18T10:30:45.123456Z"")) → 1979-07-18

    @(date(""10/05/2010"")) → 2010-05-10

    @(date(""NOT DATE"")) → ERROR
    ```

### [date_from_parts(year, month, day)]()

Creates a date from year, month and day.

    ```
    @(date_from_parts(2017, 1, 15)) → 2017-01-15

    @(date_from_parts(2017, 2, 31)) → 2017-03-03

    @(date_from_parts(2017, 13, 15)) → ERROR
    ```

### [datetime(value)]()

Tries to convert value to a datetime. If it is text then it will be parsed into a datetime using the default date and time formats. An error is returned if the value can’t be converted.

    ```
    @(datetime(""1979-07-18"")) → 1979-07-18T00:00:00.000000-05:00

    @(datetime(""1979-07-18T10:30:45.123456Z"")) → 1979-07-18T10:30:45.123456Z

    @(datetime(""10/05/2010"")) → 2010-05-10T00:00:00.000000-05:00

    @(datetime(""NOT DATE"")) → ERROR
    ```

### [datetime_add(datetime, offset, unit)]()

Calculates the date value arrived at by adding offset number of unit to the datetime
Valid durations are “Y” for years, “M” for months, “W” for weeks, “D” for days, “h” for hour, “m” for minutes, “s” for seconds

    ```
    @(datetime_add(""2017-01-15"", 5, ""D"")) → 2017-01-20T00:00:00.000000-05:00

    @(datetime_add(""2017-01-15 10:45"", 30, ""m"")) → 2017-01-15T11:15:00.000000-05:00
    ```

### [datetime_diff(date1, date2, unit)]()

Returns the duration between date1 and date2 in the unit specified.

Valid durations are “Y” for years, “M” for months, “W” for weeks, “D” for days, “h” for hour, “m” for minutes, “s” for seconds.

    ```
    @(datetime_diff(""2017-01-15"", ""2017-01-17"", ""D"")) → 2

    @(datetime_diff(""2017-01-15"", ""2017-05-15"", ""W"")) → 17

    @(datetime_diff(""2017-01-15"", ""2017-05-15"", ""M"")) → 4

    @(datetime_diff(""2017-01-17 10:50"", ""2017-01-17 12:30"", ""h"")) → 1

    @(datetime_diff(""2017-01-17"", ""2015-12-17"", ""Y"")) → -2
    ```

### [datetime_from_epoch(seconds)]()

Converts the UNIX epoch time seconds into a new date.

    ```
    @(datetime_from_epoch(1497286619)) → 2017-06-12T11:56:59.000000-05:00

    @(datetime_from_epoch(1497286619.123456)) → 2017-06-12T11:56:59.123456-05:00
    ```

### [default(value, default)]()

Returns value if is not empty or an error, otherwise it returns default.

    ```
    @(default(undeclared.var, ""default_value"")) → default_value

    @(default(""10"", ""20"")) → 10

    @(default("""", ""value"")) → value

    @(default(""  "", ""value"")) → \x20\x20

    @(default(datetime(""invalid-date""), ""today"")) → today

    @(default(format_urn(""invalid-urn""), ""ok"")) → ok
    ```

### [epoch(date)]()

Converts date to a UNIX epoch time.

The returned number can contain fractional seconds.

    ```
    @(epoch(""2017-06-12T16:56:59.000000Z"")) → 1497286619

    @(epoch(""2017-06-12T18:56:59.000000+02:00"")) → 1497286619

    @(epoch(""2017-06-12T16:56:59.123456Z"")) → 1497286619.123456

    @(round_down(epoch(""2017-06-12T16:56:59.123456Z""))) → 1497286619
    ```

### [extract(object, properties)]()

Takes an object and extracts the named property.

    ```
    @(extract(contact, ""name"")) → Ryan Lewis

    @(extract(contact.groups[0], ""name"")) → Testers
    ```

### [extract_object(object, properties…)]()

Takes an object and returns a new object by extracting only the named properties.

    ```
    @(extract_object(contact.groups[0], ""name"")) → {name: Testers}
    ```

### [field(text, index, delimiter)]()

Splits text using the given delimiter and returns the field at index.

The index starts at zero. When splitting with a space, the delimiter is considered to be all whitespace.

    ```
    @(field(""a,b,c"", 1, "","")) → b

    @(field(""a,,b,c"", 1, "","")) →

    @(field(""a   b c"", 1, "" "")) → b

    @(field(""a      b   c   d"", 1, ""    "")) →

    @(field(""a\t\tb\tc\td"", 1, "" "")) →

    @(field(""a,b,c"", ""foo"", "","")) → ERROR
    ```

### [foreach(values, func, [args…])]()

Creates a new array by applying func to each value in values.

If the given function takes more than one argument, you can pass additional arguments after the function.

    ```
    @(foreach(array(""a"", ""b"", ""c""), upper)) → [A, B, C]

    @(foreach(array(""a"", ""b"", ""c""), (x) => x & ""1"")) → [a1, b1, c1]

    @(foreach(array(""a"", ""b"", ""c""), (x) => object(""v"", x))) → [{v: a}, {v: b}, {v: c}]

    @(foreach(array(""the man"", ""fox"", ""jumped up""), word, 0)) → [the, fox, jumped]
    ```

### [foreach_value(object, func, [args…])]()

Creates a new object by applying func to each property value of object.

If the given function takes more than one argument, you can pass additional arguments after the function.

    ```
    @(foreach_value(object(""a"", ""x"", ""b"", ""y""), upper)) → {a: X, b: Y}

    @(foreach_value(object(""a"", ""hi there"", ""b"", ""good bye""), word, 1)) → {a: there, b: bye}
    ```

### [format(value)]()

Formats value according to its type.

    ```
    @(format(1234.5670)) → 1,234.567

    @(format(now())) → 11-04-2018 13:24

    @(format(today())) → 11-04-2018
    ```

### [format_date(date, [,format])]()

Formats date as text according to the given format.

If format is not specified then the environment’s default format is used. The format string can consist of the following characters. The characters ’ ‘,’:‘,’,‘, ’T’, ‘-’ and ’\_’ are ignored. Any other character is an error.

- YY - last two digits of year 0-99
- YYYY - four digits of year 0000-9999
- M - month 1-12
- MM - month, zero padded 01-12
- MMM - month Jan-Dec (localized)
- MMMM - month January-December (localized)
- D - day of month, 1-31
- DD - day of month, zero padded 01-31
- EEE - day of week Mon-Sun (localized)
- EEEE - day of week Monday-Sunday (localized)

  ```
  @(format_date(""1979-07-18T15:00:00.000000Z"")) → 18-07-1979

  @(format_date(""1979-07-18T15:00:00.000000Z"", ""YYYY-MM-DD"")) → 1979-07-18

  @(format_date(""2010-05-10T19:50:00.000000Z"", ""YYYY M DD"")) → 2010 5 10

  @(format_date(""1979-07-18T15:00:00.000000Z"", ""YYYY"")) → 1979

  @(format_date(""1979-07-18T15:00:00.000000Z"", ""M"")) → 7

  @(format_date(""NOT DATE"", ""YYYY-MM-DD"")) → ERROR
  ```

### [format_datetime(datetime [,format [,timezone]])]()

Formats datetime as text according to the given format.

If format is not specified then the environment’s default format is used. The format string can consist of the following characters. The characters ’ ‘,’:‘,’,‘, ’T’, ‘-’ and ’\_’ are ignored. Any other character is an error.

- YY - last two digits of year 0-99
- YYYY - four digits of year 0000-9999
- M - month 1-12
- MM - month, zero padded 01-12
- MMM - month Jan-Dec (localized)
- MMMM - month January-December (localized)
- D - day of month, 1-31
- DD - day of month, zero padded 01-31
- EEE - day of week Mon-Sun (localized)
- EEEE - day of week Monday-Sunday (localized)
- h - hour of the day 1-12
- hh - hour of the day, zero padded 01-12
- t - twenty four hour of the day 0-23
- tt - twenty four hour of the day, zero padded 00-23
- m - minute 0-59
- mm - minute, zero padded 00-59
- s - second 0-59
- ss - second, zero padded 00-59
- fff - milliseconds
- ffffff - microseconds
- fffffffff - nanoseconds
- aa - am or pm (localized)
- AA - AM or PM (localized)
- Z - hour and minute offset from UTC, or Z for UTC
- ZZZ - hour and minute offset from UTC

Timezone should be a location name as specified in the IANA Time Zone database, such as “America/Guayaquil” or “America/Los_Angeles”. If not specified, the current timezone will be used. An error will be returned if the timezone is not recognized.

    ```
    @(format_datetime(""1979-07-18T15:00:00.000000Z"")) → 18-07-1979 10:00

    @(format_datetime(""1979-07-18T15:00:00.000000Z"", ""YYYY-MM-DD"")) → 1979-07-18

    @(format_datetime(""2010-05-10T19:50:00.000000Z"", ""YYYY M DD tt:mm"")) → 2010 5 10 14:50

    @(format_datetime(""2010-05-10T19:50:00.000000Z"", ""YYYY-MM-DD hh:mm AA"", ""America/Los_Angeles"")) → 2010-05-10 12:50 PM

    @(format_datetime(""1979-07-18T15:00:00.000000Z"", ""YYYY"")) → 1979

    @(format_datetime(""1979-07-18T15:00:00.000000Z"", ""M"")) → 7

    @(format_datetime(""NOT DATE"", ""YYYY-MM-DD"")) → ERROR
    ```

### [format_location(location)]()

Formats the given location as its name.

    ```
    @(format_location(""Rwanda"")) → Rwanda

    @(format_location(""Rwanda > Kigali"")) → Kigali
    ```

### [format_number(number, places [, humanize])]()

Formats number to the given number of decimal places.

An optional third argument humanize can be false to disable the use of thousand separators.

    ```
    @(format_number(1234)) → 1,234

    @(format_number(1234.5670)) → 1,234.567

    @(format_number(1234.5670, 2, true)) → 1,234.57

    @(format_number(1234.5678, 0, false)) → 1235

    @(format_number(""foo"", 2, false)) → ERROR
    ```

### [format_time(time [,format])]()

Formats time as text according to the given format.

If format is not specified then the environment’s default format is used. The format string can consist of the following characters. The characters ’ ‘,’:‘,’,‘, ’T’, ‘-’ and ’\_’ are ignored. Any other character is an error.

- h - hour of the day 1-12
- hh - hour of the day, zero padded 01-12
- t - twenty four hour of the day 0-23
- tt - twenty four hour of the day, zero padded 00-23
- m - minute 0-59
- mm - minute, zero padded 00-59
- s - second 0-59
- ss - second, zero padded 00-59
- fff - milliseconds
- ffffff - microseconds
- fffffffff - nanoseconds
- aa - am or pm (localized)
- AA - AM or PM (localized)

  ```
  @(format_time(""14:50:30.000000"")) → 14:50

  @(format_time(""14:50:30.000000"", ""h:mm aa"")) → 2:50 pm

  @(format_time(""15:00:27.000000"", ""s"")) → 27

  @(format_time(""NOT TIME"", ""hh:mm"")) → ERROR
  ```

### [format_urn(urn)]()

Formats urn into human friendly text.

    ```
    @(format_urn(""tel:+250781234567"")) → 0781 234 567

    @(format_urn(""twitter:134252511151#billy_bob"")) → billy_bob

    @(format_urn(contact.urn)) → (202) 456-1111

    @(format_urn(urns.tel)) → (202) 456-1111

    @(format_urn(urns.mailto)) → foo@bar.com

    @(format_urn(""NOT URN"")) → ERROR
    ```

### [html_decode(text)]()

HTML decodes text

    ```
    @(html_decode(""Red &amp; Blue"")) → Red & Blue

    @(html_decode(""5 + 10"")) → 5 + 10
    ```

### [if(test, value1, value2)]()

Returns value1 if test is truthy or value2 if not.

If the first argument is an error that error is returned.

    ```
    @(if(1 = 1, ""foo"", ""bar"")) → foo

    @(if(""foo"" > ""bar"", ""foo"", ""bar"")) → ERROR
    ```

### [is_error(value)]()

Returns whether value is an error

    ```
    @(is_error(datetime(""foo""))) → true

    @(is_error(run.not.existing)) → true

    @(is_error(""hello"")) → false
    ```

### [join(array, separator)]()

Joins the given array of strings with separator to make text.

    ```
    @(join(array(""a"", ""b"", ""c""), ""|"")) → a|b|c

    @(join(split(""a.b.c"", "".""), "" "")) → a b c
    ```

### [json(value)]()

Returns the JSON representation of value.

    ```
    @(json(""string"")) → ""string""

    @(json(10)) → 10

    @(json(null)) → null

    @(json(contact.uuid)) → ""5d76d86b-3bb9-4d5a-b822-c9d86f5d8e4f""
    ```

### [keys(object)]()

Returns an array containing the property keys of object.

    ```
    @(keys(object(""a"", 123, ""b"", ""hello"", ""c"", ""world""))) → [a, b, c]

    @(keys(null)) → []

    @(keys(""string"")) → ERROR

    @(keys(10)) → ERROR
    ```

### [lower(text)]()

Converts text to lowercase.

    ```
    @(lower(""HellO"")) → hello

    @(lower(""hello"")) → hello

    @(lower(""123"")) → 123

    @(lower(""😀"")) → 😀
    ```

### [max(numbers…)]()

Returns the maximum value in numbers.

    ```
    @(max(1, 2)) → 2

    @(max(1, -1, 10)) → 10

    @(max(1, 10, ""foo"")) → ERROR
    ```

### [mean(numbers…)]()

Returns the arithmetic mean of numbers.

    ```
    @(mean(1, 2)) → 1.5

    @(mean(1, 2, 6)) → 3

    @(mean(1, ""foo"")) → ERROR
    ```

### [min(numbers…)]()

Returns the minimum value in numbers.

    ```
    @(min(1, 2)) → 1

    @(min(2, 2, -10)) → -10

    @(min(1, 2, ""foo"")) → ERROR
    ```

### [mod(dividend, divisor)]()

Returns the remainder of the division of dividend by divisor.

    ```
    @(mod(5, 2)) → 1

    @(mod(4, 2)) → 0

    @(mod(5, ""foo"")) → ERROR
    ```

### [now()]()

Returns the current date and time in the current timezone.

    ```
    @(now()) → 2018-04-11T13:24:30.123456-05:00
    ```

### [number(value)]()

Tries to convert value to a number.

An error is returned if the value can’t be converted.

    ```
    @(number(10)) → 10

    @(number(""123.45000"")) → 123.45

    @(number(""what?"")) → ERROR
    ```

### [object(pairs…)]()

Takes property name value pairs and returns them as a new object.

    ```
    @(object()) → {}

    @(object(""a"", 123, ""b"", ""hello"")) → {a: 123, b: hello}

    @(object(""a"")) → ERROR
    ```

### [or(values…)]()

Returns whether if any of the given values are truthy.

    ```
    @(or(true)) → true

    @(or(true, false, true)) → true
    ```

### [parse_datetime(text, format [,timezone])]()

Parses text into a date using the given format.

The format string can consist of the following characters. The characters ’ ‘,’:‘,’,‘, ’T’, ‘-’ and ’\_’ are ignored. Any other character is an error.

- YY - last two digits of year 0-99
- YYYY - four digits of year 0000-9999
- M - month 1-12
- MM - month, zero padded 01-12
- D - day of month, 1-31
- DD - day of month, zero padded 01-31
- h - hour of the day 1-12
- hh - hour of the day 01-12
- t - twenty four hour of the day 1-23
- tt - twenty four hour of the day, zero padded 01-23
- m - minute 0-59
- mm - minute, zero padded 00-59
- s - second 0-59
- ss - second, zero padded 00-59
- fff - milliseconds
- ffffff - microseconds
- fffffffff - nanoseconds
- aa - am or pm
- AA - AM or PM
- Z - hour and minute offset from UTC, or Z for UTC
- ZZZ - hour and minute offset from UTC

Timezone should be a location name as specified in the IANA Time Zone database, such as “America/Guayaquil” or “America/Los_Angeles”. If not specified, the current timezone will be used. An error will be returned if the timezone is not recognized.

Note that fractional seconds will be parsed even without an explicit format identifier. You should only specify fractional seconds when you want to assert the number of places in the input format.

parse_datetime will return an error if it is unable to convert the text to a datetime.

    ```
    @(parse_datetime(""1979-07-18"", ""YYYY-MM-DD"")) → 1979-07-18T00:00:00.000000-05:00

    @(parse_datetime(""2010 5 10"", ""YYYY M DD"")) → 2010-05-10T00:00:00.000000-05:00

    @(parse_datetime(""2010 5 10 12:50"", ""YYYY M DD tt:mm"", ""America/Los_Angeles"")) → 2010-05-10T12:50:00.000000-07:00

    @(parse_datetime(""NOT DATE"", ""YYYY-MM-DD"")) → ERROR
    ```

### [parse_json(text)]()

Tries to parse text as JSON.

If the given text is not valid JSON, then an error is returned

    ```
    @(parse_json(""{\""foo\"": \""bar\""}"").foo) → bar

    @(parse_json(""[1,2,3,4]"")[2]) → 3

    @(parse_json(""invalid json"")) → ERROR
    ```

### [parse_time(text, format)]()

Parses text into a time using the given format.

The format string can consist of the following characters. The characters ’ ‘,’:‘,’,‘, ’T’, ‘-’ and ’\_’ are ignored. Any other character is an error.

- h - hour of the day 1-12
- hh - hour of the day, zero padded 01-12
- t - twenty four hour of the day 1-23
- tt - twenty four hour of the day, zero padded 01-23
- m - minute 0-59
- mm - minute, zero padded 00-59
- s - second 0-59
- ss - second, zero padded 00-59
- fff - milliseconds
- ffffff - microseconds
- fffffffff - nanoseconds
- aa - am or pm
- AA - AM or PM

Note that fractional seconds will be parsed even without an explicit format identifier. You should only specify fractional seconds when you want to assert the number of places in the input format.

parse_time will return an error if it is unable to convert the text to a time.

    ```
    @(parse_time(""15:28"", ""tt:mm"")) → 15:28:00.000000

    @(parse_time(""2:40 pm"", ""h:mm aa"")) → 14:40:00.000000

    @(parse_time(""NOT TIME"", ""tt:mm"")) → ERROR
    ```

### [percent(number)]()

Formats number as a percentage.

    ```
    @(percent(0.54234)) → 54%

    @(percent(1.2)) → 120%

    @(percent(""foo"")) → ERROR
    ```

### [rand()]()

Returns a single random number between [0.0-1.0).

    ```
    @(rand()) → 0.6075520156746239

    @(rand()) → 0.48467757094734026
    ```

### [rand_between()]()

A single random integer in the given inclusive range.

    ```
    @(rand_between(1, 10)) → 10

    @(rand_between(1, 10)) → 2
    ```

### [read_chars(text)]()

Converts text into something that can be read by IVR systems.

ReadChars will split the numbers such as they are easier to understand. This includes splitting in 3s or 4s if appropriate.

    ```
    @(read_chars(""1234"")) → 1 2 3 4

    @(read_chars(""abc"")) → a b c

    @(read_chars(""abcdef"")) → a b c , d e f
    ```

### [regex_match(text, pattern [,group])]()

Returns the first match of the regular expression pattern in text.

An optional third parameter group determines which matching group will be returned.

    ```
    @(regex_match(""sda34dfddg67"", ""\d+"")) → 34

    @(regex_match(""Bob Smith"", ""(\w+) (\w+)"", 1)) → Bob

    @(regex_match(""Bob Smith"", ""(\w+) (\w+)"", 2)) → Smith

    @(regex_match(""Bob Smith"", ""(\w+) (\w+)"", 5)) → ERROR

    @(regex_match(""abc"", ""[\."")) → ERROR
    ```

### [remove_first_word(text)]()

Removes the first word of text.

    ```
    @(remove_first_word(""foo bar"")) → bar

    @(remove_first_word(""Hi there. I'm a flow!"")) → there. I'm a flow!
    ```

### [repeat(text, count)]()

Returns text repeated count number of times.

    ```
    @(repeat(""*"", 8)) → ********

    @(repeat(""*"", ""foo"")) → ERROR
    ```

### [replace(text, needle, replacement [, count])]()

Replaces up to count occurrences of needle with replacement in text.

If count is omitted or is less than 0 then all occurrences are replaced.

    ```
    @(replace(""foo bar foo"", ""foo"", ""zap"")) → zap bar zap

    @(replace(""foo bar foo"", ""foo"", ""zap"", 1)) → zap bar foo

    @(replace(""foo bar"", ""baz"", ""zap"")) → foo bar
    ```

### [replace_time(datetime)]()

Returns a new datetime with the time part replaced by the time.

    ```
    @(replace_time(now(), ""10:30"")) → 2018-04-11T10:30:00.000000-05:00

    @(replace_time(""2017-01-15"", ""10:30"")) → 2017-01-15T10:30:00.000000-05:00

    @(replace_time(""foo"", ""10:30"")) → ERROR
    ```

### [reverse(array)]()

Returns a new array with the values of array reversed.

    ```
    @(reverse(array(3, 1, 2))) → [2, 1, 3]

    @(reverse(array(""C"", ""A"", ""B""))) → [B, A, C]
    ```

### [round(number [,places])]()

Rounds number to the nearest value.

You can optionally pass in the number of decimal places to round to as places. If places < 0, it will round the integer part to the nearest 10^(-places).

    ```
    @(round(12)) → 12

    @(round(12.141)) → 12

    @(round(12.6)) → 13

    @(round(12.141, 2)) → 12.14

    @(round(12.146, 2)) → 12.15

    @(round(12.146, -1)) → 10

    @(round(""notnum"", 2)) → ERROR
    ```

### [round_down(number [,places])]()

Rounds number down to the nearest integer value.

You can optionally pass in the number of decimal places to round to as places.

    ```
    @(round_down(12)) → 12

    @(round_down(12.141)) → 12

    @(round_down(12.6)) → 12

    @(round_down(12.141, 2)) → 12.14

    @(round_down(12.146, 2)) → 12.14

    @(round_down(""foo"")) → ERROR
    ```

### [round_up(number [,places])]()

Rounds number up to the nearest integer value.

You can optionally pass in the number of decimal places to round to as places.

    ```
    @(round_up(12)) → 12

    @(round_up(12.141)) → 13

    @(round_up(12.6)) → 13

    @(round_up(12.141, 2)) → 12.15

    @(round_up(12.146, 2)) → 12.15

    @(round_up(""foo"")) → ERROR
    ```

### [sort(array)]()

Returns a new array with the values of array sorted.

Values in array must be a sortable type and be of the same type.

    ```
    @(sort(array(3, 1, 2))) → [1, 2, 3]

    @(sort(array(""C"", ""A"", ""B""))) → [A, B, C]
    ```

### [split(text, [,delimiters])]()

Splits text into an array of separated words.

Empty values are removed from the returned list. There is an optional final parameter delimiters which is string of characters used to split the text into words.

    ```
    @(split(""a b c"")) → [a, b, c]

    @(split(""a"", "" "")) → [a]

    @(split(""abc..d"", ""."")) → [abc, d]

    @(split(""a.b.c."", ""."")) → [a, b, c]

    @(split(""a|b,c  d"", "" .|,"")) → [a, b, c, d]
    ```

### [sum(array)]()

Sums the items in the given array.

    ```
    @(sum(array(1, 2, ""3""))) → 6
    ```

### [text(value)]()

Tries to convert value to text.

An error is returned if the value can’t be converted.

    ```
    @(text(3 = 3)) → true

    @(json(text(123.45))) → ""123.45""

    @(text(1 / 0)) → ERROR
    ```

### [text_compare(text1, text2)]()

Returns the dictionary order of text1 and text2.

The return value will be -1 if text1 comes before text2, 0 if they are equal and 1 if text1 comes after text2.

    ```
    @(text_compare(""abc"", ""abc"")) → 0

    @(text_compare(""abc"", ""def"")) → -1

    @(text_compare(""zzz"", ""aaa"")) → 1
    ```

### [text_length(value)]()

Returns the length (number of characters) of value when converted to text.

    ```
    @(text_length(""abc"")) → 3

    @(text_length(array(2, 3))) → 6
    ```

### [text_slice(text, start [, end])]()

Returns the portion of text between start (inclusive) and end (exclusive).

If end is not specified then the entire rest of text will be included. Negative values for start or end start at the end of text.

    ```
    @(text_slice(""hello"", 2)) → llo

    @(text_slice(""hello"", 1, 3)) → el

    @(text_slice(""hello😁"", -3, -1)) → lo

    @(text_slice(""hello"", 7)) →
    ```

### [time(value)]()

Tries to convert value to a time.

If it is text then it will be parsed into a time using the default time format. An error is returned if the value can’t be converted.

    ```
    @(time(""10:30"")) → 10:30:00.000000

    @(time(""10:30:45 PM"")) → 22:30:45.000000

    @(time(datetime(""1979-07-18T10:30:45.123456Z""))) → 10:30:45.123456

    @(time(""what?"")) → ERROR
    ```

### [time_from_parts(hour, minute, second)]()

Creates a time from hour, minute and second

    ```
    @(time_from_parts(14, 40, 15)) → 14:40:15.000000

    @(time_from_parts(8, 10, 0)) → 08:10:00.000000

    @(time_from_parts(25, 0, 0)) → ERROR
    ```

### [title(text)]()

Capitalizes each word in text.

    ```
    @(title(""foo"")) → Foo

    @(title(""ryan lewis"")) → Ryan Lewis

    @(title(""RYAN LEWIS"")) → Ryan Lewis

    @(title(123)) → 123
    ```

### [today()]()

Returns the current date in the environment timezone.

    ```
    @(today()) → 2018-04-11
    ```

### [trim(text, [,chars])]()

Removes whitespace from either end of text.

There is an optional final parameter chars which is string of characters to be removed instead of whitespace.

    ```
    @(trim("" hello world    "")) → hello world

    @(trim(""+123157568"", ""+"")) → 123157568
    ```

### [trim_left(text, [,chars])]()

Removes whitespace from the start of text.

There is an optional final parameter chars which is string of characters to be removed instead of whitespace.

    ```
    @(""*"" & trim_left("" hello world   "") & ""*"") → *hello world   *

    @(trim_left(""+12345+"", ""+"")) → 12345+
    ```

### [trim_right(text, [,chars])]()

Removes whitespace from the end of text.

There is an optional final parameter chars which is string of characters to be removed instead of whitespace.

    ```
    @(""*"" & trim_right("" hello world   "") & ""*"") → * hello world*

    @(trim_right(""+12345+"", ""+"")) → +12345
    ```

### [tz(date)]()

Returns the name of the timezone of date.

If no timezone information is present in the date, then the current timezone will be returned.

    ```
    @(tz(""2017-01-15T02:15:18.123456Z"")) → UTC

    @(tz(""2017-01-15 02:15:18PM"")) → America/Guayaquil

    @(tz(""2017-01-15"")) → America/Guayaquil

    @(tz(""foo"")) → ERROR
    ```

### [tz_offset(date)]()

Returns the offset of the timezone of date.

The offset is returned in the format [+/-]HH:MM. If no timezone information is present in the date, then the current timezone offset will be returned.

    ```
    @(tz_offset(""2017-01-15T02:15:18.123456Z"")) → +0000

    @(tz_offset(""2017-01-15 02:15:18PM"")) → -0500

    @(tz_offset(""2017-01-15"")) → -0500

    @(tz_offset(""foo"")) → ERROR
    ```

### [unique(array)]()

Returns the unique values in array.

    ```
    @(unique(array(1, 3, 2, 3))) → [1, 3, 2]

    @(unique(array(""hi"", ""there"", ""hi""))) → [hi, there]
    ```

### [upper(text)]()

Converts text to uppercase.

    ```
    @(upper(""Asdf"")) → ASDF

    @(upper(123)) → 123
    ```

### [url_encode(text)]()

Encodes text for use as a URL parameter.

    ```
    @(url_encode(""two & words"")) → two%20%26%20words

    @(url_encode(10)) → 10
    ```

### [urn_parts(urn)]()

Parses a URN into its different parts

    ```
    @(urn_parts(""tel:+593979012345"")) → {display: , path: +593979012345, scheme: tel}

    @(urn_parts(""twitterid:3263621177#bobby"")) → {display: bobby, path: 3263621177, scheme: twitterid}

    @(urn_parts(""not a urn"")) → ERROR
    ```

### [week_number(date)]()

Returns the week number (1-54) of date.

The week is considered to start on Sunday and week containing Jan 1st is week number 1.

    ```
    @(week_number(""2019-01-01"")) → 1

    @(week_number(""2019-07-23T16:56:59.000000Z"")) → 30

    @(week_number(""xx"")) → ERROR
    ```

### [weekday(date)]()

Returns the day of the week for date.

The week is considered to start on Sunday so a Sunday returns 0, a Monday returns 1 etc.

    ```
    @(weekday(""2017-01-15"")) → 0

    @(weekday(""foo"")) → ERROR
    ```

### [word(text, index [,delimiters])]()

Returns the word at index in text.

Indexes start at zero. There is an optional final parameter delimiters which is string of characters used to split the text into words.

    ```
    @(word(""bee cat dog"", 0)) → bee

    @(word(""bee.cat,dog"", 0)) → bee

    @(word(""bee.cat,dog"", 1)) → cat

    @(word(""bee.cat,dog"", 2)) → dog

    @(word(""bee.cat,dog"", -1)) → dog

    @(word(""bee.cat,dog"", -2)) → cat

    @(word(""bee.*cat,dog"", 1, "".*=|"")) → cat,dog

    @(word(""O'Grady O'Flaggerty"", 1, "" "")) → O'Flaggerty
    ```

### [word_count(text [,delimiters])]()

Returns the number of words in text.

There is an optional final parameter delimiters which is string of characters used to split the text into words.

    ```
    @(word_count(""foo bar"")) → 2

    @(word_count(10)) → 1

    @(word_count("""")) → 0

    @(word_count(""😀😃😄😁"")) → 4

    @(word_count(""bee.*cat,dog"", "".*=|"")) → 2

    @(word_count(""O'Grady O'Flaggerty"", "" "")) → 2
    ```

### [word_slice(text, start, end [,delimiters])]()

Extracts a sub-sequence of words from text.

The returned words are those from start up to but not-including end. Indexes start at zero and a negative end value means that all words after the start should be returned. There is an optional final parameter delimiters which is string of characters used to split the text into words.

    ```
    @(word_slice(""bee cat dog"", 0, 1)) → bee

    @(word_slice(""bee cat dog"", 0, 2)) → bee cat

    @(word_slice(""bee cat dog"", 1, -1)) → cat dog

    @(word_slice(""bee cat dog"", 1)) → cat dog

    @(word_slice(""bee cat dog"", 2, 3)) → dog

    @(word_slice(""bee cat dog"", 3, 10)) →

    @(word_slice(""bee.*cat,dog"", 1, -1, "".*=|,"")) → cat dog

    @(word_slice(""O'Grady O'Flaggerty"", 1, 2, "" "")) → O'Flaggerty
    ```
