---
title: 'Cubagem, Fator de Cubagem e como calcular Peso Cubado'
id: 2fgz8EKgM42BZP5C2KgC2v
status: ARCHIVED
createdAt: 2019-10-23T13:43:41.025Z
updatedAt: 2022-03-08T18:43:28.221Z
publishedAt: 
firstPublishedAt: 2019-10-23T14:42:24.088Z
contentType: trackArticle
productTeam: Post-purchase
slugEN: cubic-size-shipping-factor-and-dimensional-weight-calculations
locale: pt
trackId: 13TFDwDttPl9ki9OXQhyjx
trackSlugPT: logistica-101
---

## Cubagem

A cubagem é a relação entre o __volume__ e o __peso__ da mercadoria a ser enviada pela loja.

Ela é importante no contexto da logística porque influencia na capacidade de transporte por parte das transportadoras. Quanto maior o volume e/ou o peso, maior a cubagem, e provavelmente mais restritas serão as condições de transporte.

A função da cubagem no transporte é evitar que se ocupe todo o espaço físico do veículo sem usar toda a sua capacidade em peso. E também o contrário: evitar que se ultrapasse o peso máximo sem ocupar todo o espaço disponível.

## Peso Cubado

O Peso Cubado é o peso de uma mercadoria levando em conta a cubagem, ou seja, a relação entre volume e peso mais adequada e comercialmente justa para o transporte.

Pode ser maior ou menor que o peso real da mercadoria.

## Fator de Cubagem

O Fator de Cubagem, ou Fator Cúbico, é o __coeficiente fornecido pela transportadora__ e usado no cálculo do peso cubado.

Ele entra assim no cálculo do peso cubado:
> Comprimento x Largura X Altura X Fator de Cubagem

Exemplo:

- Dimensões do pacote: 50cm x 60cm x 15cm
- Peso real do pacote: 9kg
- Fator de cubagem: 0,167
- Peso cubado = `50cm * 60cm * 15cm * 0,167` = __7,5kg__

Neste caso, ao comparar o peso real com o peso cubado do pacote, a transportadora fará a cobrança pelo peso real, pois ele é maior que o peso cubado.

>⚠️ Verifique com sua transportadora se a unidade de medidas está em **gramas**, que é a unidade utilizada na VTEX.

Ao realizar o cadastro da sua transportadora, esse é o valor que você deve preencher no campo Fator Cúbico de Peso.

![PesoCubado](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)
