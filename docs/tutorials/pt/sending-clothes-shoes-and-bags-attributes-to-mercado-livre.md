---
title: 'Envio dos atributos de roupas, calçados e bolsas para o Mercado Livre'
id: 4UKx1bbG6sqKeYW8WmYSiq
status: DRAFT
createdAt: 2017-12-21T14:01:04.543Z
updatedAt: 2020-03-06T13:58:47.409Z
publishedAt: 
firstPublishedAt: 2017-12-26T19:26:36.713Z
contentType: tutorial
productTeam: Channels
author: authors_59
slug: envio-dos-atributos-de-roupas-calcados-e-bolsas-para-o-mercado-livre
locale: pt
legacySlug: envio-dos-atributos-de-roupas-calcados-e-bolsas-para-o-mercado-livre
subcategory: 4uqMnZjwBO04uWgCom8QiA
---

<div class="alert alert-info">
O envio dos atributos dos produtos de tipo Roupas, Calçados ou Bolsas segue um fluxo diferente dos demais. Neste processo de mapeamento, o resultado é que os SKUs serão mostrados todos no mesmo anúncio. Para os outros tipos de produto, o Mercado Livre realiza um mapeamento automático.
</div>

Para enviar os atributos dos produtos do tipo __Roupas__, __Calçados__ e __Bolsas__ para o Mercado Livre, siga os passos abaixo:

1. [Baixe](http://assets.contentful.com/alneenqid6w5/28ZfLnLpKEgU8ycqqIUGqw/da75dbcbc27f72881431c797a0d389f6/Modelo-SKUs-Mercado-Livre.xlsx) a planilha modelo.
2. Preencha a planilha modelo com os Ids dos SKUs a serem enviados para o Mercado Livre e com os valores de atributos aceitos pelo Mercado Livre. Os valores aceitos podem ser encontrados nos links abaixo.
3. Salve a planilha modelo com os valores preenchidos. 

<div class="alert alert-info">
Os valores aceitos pelo Mercado Livre podem ser encontrados nos links a seguir. Clique no nome do seu país para fazer o download. Você vai encontrar códigos referentes a <u>Cor Principal</u>, <u>Cor Secundária</u>, <u>Tamanho de calçado para adultos</u>, <u>Tamanho de calçado para crianças</u>, <u>Tamanho de roupa para adultos</u> e <u>Tamanho de roupa para crianças</u>. Estes valores deve ser preenchidos adequadamente nos campos <strong>Cor Principal</strong>, <strong>Cor Secundária</strong> e <strong>Tamanho</strong> da planilha modelo. Com exceção do atributo <em>Cor Secundária</em>, todos os outros campos são obrigatórios (SKU_ID, Cor Principal e Tamanho).
</div>

__Links com os valores aceitos pelo Mercado Livre__:

- [Brasil](//assets.contentful.com/alneenqid6w5/6BHWQLL9bGuMq2ycMye0uc/76e64b67cb7352d95d6bb977b33394d4/Brasil-2.zip)
- [Argentina](//assets.contentful.com/alneenqid6w5/3c61gJrH7GWOywMCGMECg4/dc7a2ce73a99d41345dde2092eb1fec6/Argentina.rar)
- [Colômbia](//assets.contentful.com/alneenqid6w5/5RePTJoKrYi4qA66WCCYKw/33910300057806b554d566210aa2310a/Colombia.rar)
- [México](//assets.contentful.com/alneenqid6w5/3Z3xgpPyvuYEAIO2me4GSG/e4f4198463d8a3ba05124a30031302fa/Mexico.rar)

Quando sua planilha estiver preenchida com os valores corretos, basta fazer o __upload no Bridge__ da VTEX. Para isso, siga estes passos:

1. Acesse o módulo __Bridge__.
2. Clique em __Configurações__.
3. No cartão do Mercado Livre, clique em __Upload de Mapeamento__.
4. Clique em __Escolher arquivo__ e selecione sua planilha com os dados. Esta planilha deve estar no formato `.xlsx`.

__Pronto!__ Agora os atributos dos seus produtos do tipo __Roupa__, __Calçados__ e __Bolsas__ já foram mapeados e enviados corretamente para o Mercado Livre.

## Exemplo de preenchimento da planilha

Um calçado *amarelo* com *detalhes azuis* de *tamanho 39* deve ser enviado para o Mercado Livre com o __ID do SKU__ correspondente e os códigos __33000_Amarelo_52007__, __43000_Azul_52092__ e __23000_39_22039__, relativos a *cor principal*, *cor secundária* e *tamanho*. Veja mais exemplos na imagem abaixo:

![Planilha modelo ML](//images.contentful.com/alneenqid6w5/1Z4UPfR5beG6SoMucASAm0/132e8316128421a2c98da7ee8fdb81b4/Planilha-modelo-ML.png)

## Para saber mais

1. Continue a configuração da sua integração com o [Mercado Livre](/pt/tutorial/como-integrar-com-o-mercado-livre), seguindo para a seção __Configuração do template__.
2. Caso ocorra algum problema no mapeamento, acesse nosso artigo que ensina [como corrigir erros no mapeamento dos atributos](/pt/faq/por-que-o-mercado-livre-retorna-erros-de-atributo-apos-o-mapeamento) no Mercado Livre
