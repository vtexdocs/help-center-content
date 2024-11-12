---
title: 'Gerenciar tarifas de envio'
id: 2Pj1gKR80QIuUhc0orMraD
status: ARCHIVED
createdAt: 2019-10-23T14:48:44.609Z
updatedAt: 2022-03-08T18:43:48.534Z
publishedAt: 
firstPublishedAt: 2019-10-23T15:03:37.365Z
contentType: trackArticle
productTeam: Post-purchase
slugEN: managing-shipping-rates
locale: pt
trackId: 13TFDwDttPl9ki9OXQhyjx
trackSlugPT: logistica-101
---

Para a correta configuração de uma nova transportadora, é importante detalharmos um dos pontos da etapa anterior: o cadastro da __planilha de frete__.

Ela é usada para registrar os CEPs atendidos, os valores cobrados, as faixas de peso consideradas e os valores adicionais de cada transportadora.

![planilha-frete-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

## Como montar a planilha

Depois que a loja fecha o contrato com uma transportadora, normalmente ela informa os intervalos de código postal e peso que estão incluídos no contrato, relacionados aos preços e adicionais de frete. Com essas informações já definidas, basta preencher cada um dos campos da planilha, explicados abaixo.

- **ZipCodeStart**: Início do intervalo da faixa de CEP.
- **ZipCodeEnd**: Final do intervalo da faixa de CEP.
- **PolygonName**: Identificação do polígono definido na função de [geolocalização](/pt/tutorial/gerenciar-geolocalizacao).
- **WeightStart**: Início do intervalo de peso. Considere que a unidade de peso é a mesma do preenchimento de [campos de cadastro de SKU](https://help.vtex.com/pt/tutorial/campos-de-cadastro-de-sku--21DDItuEQc6mseiW8EakcY).
- **WeightEnd**: Final do intervalo de peso. Considere que a unidade de peso é a mesma do preenchimento de [campos de cadastro de SKU](https://help.vtex.com/pt/tutorial/campos-de-cadastro-de-sku--21DDItuEQc6mseiW8EakcY).
- **AbsoluteMoneyCost**: Preço absoluto de frete a ser cobrado, ou seja, sempre será cobrado ao menos esse valor.
- **PricePercent**: [Valor adicional de frete](https://help.vtex.com/pt/tutorial/como-funciona-o-adicional-de-frete), de acordo com o preço do carrinho. [Entenda como são configurados os adicionais de frete](https://help.vtex.com/pt/tutorial/como-configurar-o-adicional-no-frete).
- **PriceByExtraWeight**: [Valor adicional de frete](https://help.vtex.com/pt/tutorial/como-funciona-o-adicional-de-frete), de acordo com o peso **em gramas** do carrinho. [Entenda como são configurados os adicionais de frete](https://help.vtex.com/pt/tutorial/como-configurar-o-adicional-no-frete).
- **MaxVolume**: Volume de peso máximo **em centímetros** a ser transportado pela transportadora.
- **TimeCost**: Tempo de entrega do pedido pela transportadora, no formato __DD.HH:MM:SS__.
- **Country**: País onde a entrega será realizada. Deve ser preenchido com o [código ISO de 3 dígitos do país](https://countrycode.org/).
- **MinimumValueInsurance**: É um adicional de frete com valor absoluto, que será comparado ao valor cadastrado em PricePercent e multiplicado pelo valor do carrinho. O valor que for maior será o adicionado ao frete. Sempre será adicionado ao frete apenas um dos dois. Veja mais em [Para que serve o campo Minimum Value Insurance?](/pt/faq/para-que-serve-o-campo-na-tabela-de-frete-minimum-value-insurance).

>⚠️ **OBS:** Caso a planilha tenha mais de 10 MB, será necessário compactá-la no formato **.zip**. Esse arquivo .zip também deve ter menos de 10 MB para o upload funcionar. Se, ainda assim, o arquivo exceder o limite, recomendamos dividir a planilha entre mais de uma transportadora.

## Gerenciar as tarifas de envio por fora da planilha

Embora o cadastro das tarifas de envio de uma transportadora seja feito por planilha, você pode manipulá-las pela seção __Tarifas de Envio__, dentro de Estoque & Entrega, no menu do Admin.

### Como buscar

1. Preencha o campo **Código Postal**.
2. Selecione uma transportadora.
3. Clique no botão **Pesquisar**.

### Como editar

1. Preencha o campo **Código Postal**.
2. Selecione uma transportadora.
3. Clique no botão **Pesquisar**.
4. Clique no ícone de editar.
5. Altere os valores desejados.
6. Clique no botão **Salvar**.

### Como excluir

1. Preencha o campo **Código Postal**.
2. Selecione uma transportadora.
3. Clique no botão **Pesquisar**.
4. Clique no botão com ícone **x**.

### Como cadastrar

1. Clique no botão **Novo Valor de Frete**.
2. Preencha os campos. Eles são os mesmos campos presentes na planilha cadastrada na transportadora.
3. Clique no botão **Salvar**.
