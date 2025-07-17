---
title: 'Configurar pagamentos customizados usando MercadoPago (América Latina)'
id: oqLVXpxZ4GqgosA8QQYEs
status: PUBLISHED
createdAt: 2018-03-15T13:13:15.893Z
updatedAt: 2023-03-29T01:05:12.789Z
publishedAt: 2023-03-29T01:05:12.789Z
firstPublishedAt: 2018-03-15T21:36:39.268Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slugEN: setting-up-customized-payments-using-mercadopago-latin-america
locale: pt
legacySlug: configurar-pagamentos-customizados-usando-mercadopago-latam
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

<div class="alert alert-warning">
Este artigo trata de configurações aplicáveis em lojas que atuam nos seguintes países da América Latina: <strong>Argentina</strong>, <strong>Chile</strong>, <strong>Colômbia</strong> e <strong>Uruguai</strong>.
</div>

Você pode usar o Mercado Pago para oferecer pagamentos customizados (usando cartões de crédito locais) na sua loja. Para isso, você precisa primeiro cadastrar a afiliação de gateway [MercadoPagoV1](/pt/tutorial/configurar-o-subadquirente-mercadopagov1). Depois, basta seguir as etapas abaixo:

## Configurar pagamento customizado (cartões locais da América Latina)
1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba __Pagamentos customizados__, clique em um dos botões __Configurar__ embaixo de __Cartões da Loja (Co-Branded)__.
3. Preencha os dados do formulário de acordo com o cartão escolhido (confira as informações dos cartões da [Argentina](/pt/faq/informacoes-dos-pagamentos-customizados-da-argentina), [Chile](/pt/faq/informacoes-dos-pagamentos-customizados-do-chile), [Colômbia](/pt/faq/informacoes-dos-pagamentos-customizados-da-colombia) e [Uruguai](/pt/faq/informacoes-dos-pagamentos-customizados-do-uruguai)).
4. Clique em __Salvar__.

## Configurar condição de pagamento
1. Depois de clicar em __Salvar__, você será redirecionado para a tela de configuração da condição de pagamento.
2. Clique no botão __Status__ para ativar esta condição de pagamento.
3. Em __Processar com a afiliação__, escolha __MercadoPagoV1__.
4. Se houver um antifraude configurado na sua loja, você pode ativá-lo para essa condição de pagamento marcando a caixa __Usar Antifraude__.
5. Renomeie a condição de pagamento para facilitar sua identificação. Recomendamos que você faça isso, principalmente se sua loja usar mais de uma.
6. Escolha a opção __Automático__.
7. Clique em __Salvar__.

Ao completar as duas etapas, o checkout da sua loja vai passar a oferecer o pagamento customizado que você cadastrou.

### Artigos relacionados
- [Configurar o subadquirente MercadoPagoV1](/pt/tutorial/configurar-o-subadquirente-mercadopagov1)
