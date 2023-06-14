---
title: Por que o Mercado Livre retorna erros de atributo após o mapeamento?
id: frequentlyAskedQuestions_3800
status: PUBLISHED
createdAt: 2017-04-27T22:24:49.012Z
updatedAt: 2019-12-31T14:25:05.554Z
publishedAt: 2019-12-31T14:25:05.554Z
firstPublishedAt: 2017-04-27T23:02:38.024Z
contentType: frequentlyAskedQuestion
productTeam: Channels
author: authors_24
slug: por-que-o-mercado-livre-retorna-erros-de-atributo-apos-o-mapeamento
legacySlug: por-que-o-mercado-livre-retorna-erros-de-atributo-apos-o-mapeamento
---

Cada categoria de produto no Mercado Livre exige atributos diferentes. Por exemplo, para um calçado de adulto, pode ser necessário indicar na planilha de mapeamento os códigos dos atributos **Cor principal** e **Tamanho de calçado para adulto**.

Por outro lado, para cada uma dessas categorias de produto, alguns atributos não são aceitos. Para o mesmo calçado de adulto, por exemplo, não pode ser atribuído um código referente a **Tamanho de cinto**.

A VTEX não consegue indicar exatamente quais atributos têm que ser preenchidos para cada categoria, uma vez que esse é um critério interno ao Mercado Livre. 

No entanto, esses atributos são bastante claros (Cor principal, Cor secundária, Tamanho de calçado para adulto, Tamanho de cinto, Tamanho de roupa para bebês etc.) Devem ser escolhidos os atributos pertinentes a cada produto.

Se algum desses atributos for preenchido incorretamente (por exemplo, se você atribuiu um código referente a Tamanho de cinto para um calçado), o Integrações vai retornar um erro com o seguinte formato:

![Shot1](//images.contentful.com/alneenqid6w5/7A7DwGFr0cw8Q2qek0EqMU/9cad02c847f5dc7be7df68ad14bba39e/Shot1.jpg)

Neste caso, temos dois exemplos de erros na mesma mensagem.

O primeiro deles indica que o atributo cujo código se inicia com o número `113000` é necessário para a categoria escolhida e não foi inserido na planilha de mapeamento. Veja a planilha abaixo:

![Shot2](//images.contentful.com/alneenqid6w5/4Nue6IMwP6YEKiweMIe0s4/e835e5ab80f6db2b7a13ee4ed6a4f1e4/Shot2.png)

O segundo erro indica que o atributo cujo código se inicia com o número `63000`, inserido na última coluna da planilha acima, é inválido para a categoria escolhida.

## Como identificar o atributo que está faltando ou que é inválido

Os códigos de cada variação de atributo se iniciam com o mesmo número. Por exemplo, todos os códigos referentes a **Cor principal** começam com 33000 e correspondem ao seguinte formato: 33000_Amarelo_52007. Já os códigos referentes a **Cor secundária** se iniciam com 43000. Exemplos: `43000_Azul claro_52093` e `43000_Rosa_52058`.

Para identificar o atributo indicado na mensagem de erro, consulte o número inicial dos códigos determinados pelo Mercado Livre. Clique no nome do seu país para fazer o download da planilha de referência:

- [Brasil](//assets.contentful.com/alneenqid6w5/22NlNdUIBK8qWic8cYw2sg/11c88bb0b439c7c7f8ce5909923af3d6/Brasil.zip)
- [Argentina](//assets.contentful.com/alneenqid6w5/3c61gJrH7GWOywMCGMECg4/dc7a2ce73a99d41345dde2092eb1fec6/Argentina.rar)
- [Colômbia](//assets.contentful.com/alneenqid6w5/5RePTJoKrYi4qA66WCCYKw/33910300057806b554d566210aa2310a/Colombia.rar)
- [México](//assets.contentful.com/alneenqid6w5/3Z3xgpPyvuYEAIO2me4GSG/e4f4198463d8a3ba05124a30031302fa/Mexico.rar)
