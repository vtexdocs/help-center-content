---
title: 'Definição da política comercial'
id: 3AqbcsWrge8zLt0BC5CtGd
status: PUBLISHED
createdAt: 2021-04-14T17:58:41.545Z
updatedAt: 2022-12-08T21:04:01.815Z
publishedAt: 2022-12-08T21:04:01.815Z
firstPublishedAt: 2021-04-15T17:41:14.352Z
contentType: trackArticle
productTeam: Channels
slug: definicao-da-politica-comercial-google-shopping
trackId: 25Sl7iOqq58PGfVfTAo8Xw
trackSlugPT: configurar-integracao-com-o-google-shopping
---

Após a criação da sua conta no Google Merchant Center, o próximo passo da integração é definir a [política comercial](https://help.vtex.com/pt/tutorial/o-que-e-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE) que será usada. Ao [Configurar política comercial para marketplace](https://help.vtex.com/pt/tutorial/configurando-a-politica-comercial-para-marketplace/), você define quais produtos serão enviados ao Google Shopping e qual será o preço deles na plataforma.

Na maioria dos casos, recomendamos a escolha da política comercial principal (ID: 1), já que os resultados do Google Shopping direcionam o comprador para realizar a compra nas lojas dos anunciantes. Assim, a integração enviará para o Google todos os produtos disponíveis na sua loja, e com os mesmos preços anunciados.

Será necessário solicitar a criação de uma nova política comercial apenas se você:
- Quiser oferecer uma seleção de produtos diferente no Google Shopping.
- Precisar enviar preços diferentes para o Google Shopping.

Para [contratar políticas comerciais adicionais](https://help.vtex.com/pt/tutorial/contratacao-de-politica-comercial-adicional--61vuFOw4yGh6nwSmkLJL1X), basta solicitar via ticket em nosso [Suporte](https://help.vtex.com/pt/support) selecionando a opção **Comercial** e o tipo de solicitação `Criação de Política Comercial`.

A contratação de política comercial adicional para integrar com [conector nativo](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-conector-nativo-vtex), [conector certificado (parceiro)](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-conector-certificado-parceiro) ou outras lojas VTEX é isenta de taxas.

## Envio de preços do produto

O [preço](https://help.vtex.com/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3N9xYhnampRQOrfaTAOxNu) do seu produto no Google Shopping é determinado na escolha da política comercial. É importante ter atenção a alguns pontos.

Se na sua política comercial existirem preços de/por (que na VTEX chamamos de [preço de lista](https://help.vtex.com/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3XcXp0r5WrJvogB8KIX4Kx#preco-de-lista) e [preço computado](https://help.vtex.com/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/7GptzvlPDVM11ojEjywIQx#preco-computado)), será enviado para o Google Shopping o preço computado, ou seja, o preço “por”.

Caso exista uma promoção de desconto à vista (condicionada ao método de pagamento [boleto](https://help.vtex.com/pt/tutorial/como-configurar-boleto-bancario--tutorials_447)), esse benefício será aplicado ao valor do produto antes do envio.

<div class="alert alert-warning">
A ativação de pagamento por boleto é determinada na <a href="https://help.vtex.com/pt/tracks/configurar-integracao-com-o-google-shopping--25Sl7iOqq58PGfVfTAo8Xw/wWyl0Njxgs5KfXvxYZJrl">configuração do conector</a>, no campo de preenchimento obrigatório <i/>Considerar desconto para pagamento com boleto no preço enviado (Desconto à vista)</i>.
</div>

Além disso, quando há vários [sellers](https://help.vtex.com/pt/tutorial/o-que-e-um-seller--5FkLvhZ3Few4CWWIuYOK2w) vinculados a um produto na sua loja, para o Google Shopping a regra é anunciar a melhor oferta disponível.
