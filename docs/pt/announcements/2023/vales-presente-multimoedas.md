---
title: 'Vales-presente multimoedas'
id: 4FUXWCaQrFHcgjir698onc
status: PUBLISHED
createdAt: 2023-07-27T15:01:02.025Z
updatedAt: 2023-07-27T16:13:02.651Z
publishedAt: 2023-07-27T16:13:02.651Z
contentType: updates
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: multi-currency-gift-card
locale: pt
legacySlug: vales-presente-multimoedas
announcementImageID: ''
announcementSynopsisPT: 'Configure os vales-presente de sua loja em múltiplas moedas'
---

A VTEX disponibiliza a nova funcionalidade de configuração de vales-presente de acordo com as moedas locais utilizadas em sua loja.

## O que mudou?

Anteriormente, todos os vales-presente eram criados sem uma moeda específica atribuída ao seu valor. No momento da compra, o cliente aplicava o vale-presente como um dos meios de pagamento no Checkout e o valor era debitado conforme a moeda configurada nos produtos do carrinho.

A partir de agora, o lojista poderá selecionar em qual moeda o vale-presente será gerado e disponibilizá-lo somente para compras efetuadas com esse mesmo tipo de moeda. 

## Por que fizemos essa mudança?

Em algumas regiões, como Europa e Estados Unidos, existem lojas atuando na venda de produtos para mais de um país e operando com tabelas de preços que utilizam moedas diferentes. Como não há operação de câmbio monetário na utilização do vale-presente, o valor de desconto poderia ser maior ou menor de acordo com a moeda aplicada no carrinho no momento da compra.

## O que precisa ser feito?

A atribuição de uma moeda específica para cada vale-presente é uma funcionalidade opcional. Caso não deseje indicar em qual moeda ele deve ser criado, o comportamento permanece o mesmo de uma loja que utiliza apenas um tipo de moeda, no qual os descontos no valor são aplicados sem conversão monetária.

Para criar um vale-presente em uma moeda específica, siga os passos abaixo:

1. No Admin VTEX, acesse **Promoções > Vales-presente**, ou digite **Vales-presente** na barra de busca no topo da página.
2. Clique em `Criar vale` ou `Criar vales em massa` (para criar um lote de vales-presente).
3. No campo **Código da moeda**, selecione a moeda desejada.
4. Preencha os demais campos de criação do vale-presente.
5. Clique em `Salvar`.

![Vales-presente multimoedas](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/announcements/2023/vales-presente-multimoedas_1.PNG)

As moedas disponíveis serão as mesmas cadastradas nas [políticas comerciais](https://help.vtex.com/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) de cada loja.

> ⚠️ A escolha da moeda deve ser realizada durante a criação de cada vale-presente ou de um lote de vales-presente. Não é possível modificar a moeda atribuída a um vale-presente após a sua criação.

