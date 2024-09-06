---
title: 'Configurar a afiliação de gateway Stripe'
id: fwF2wk2FQKrODrWWkvSLO
status: PUBLISHED
createdAt: 2021-10-25T16:01:40.789Z
updatedAt: 2024-04-25T12:58:35.923Z
publishedAt: 2024-04-25T12:58:35.923Z
firstPublishedAt: 2021-10-25T17:34:52.274Z
contentType: tutorial
productTeam: Financial
author: 4ubliktPJIsvyl1hq91RdK
slug: configurar-a-afiliacao-de-gateway-stripe
locale: pt
legacySlug: configurar-a-afiliacao-de-gateway-stripe
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

A [Stripe](https://stripe.com/br) é uma plataforma de pagamentos que oferece um sistema integrado com foco no recebimento de pagamentos online e qualquer tipo de transação financeira comum a ecommerces e outros sites da web.

>⚠️ A integração da sua loja com a Stripe é feita por meio de uma **Application Key** e **Application Token**. Para obter esses dados, primeiramente [crie sua conta na plataforma](https://dashboard.stripe.com/register" target="_blank) e, ao finalizar, acesse [ esta documentação da Stripe](https://stripe.com/docs/keys" target="_blank) para ter acesso à sua **Chave publicável** e **Chave secreta**. Elas são mandatórias para as configurações no ambiente VTEX.

A Stripe suporta pagamentos em mais de 40 países. A lista de países disponíveis pode ser acessada no [site da Stripe](https://stripe.com/br/enterprise).

Para processar seus pagamentos com a Stripe, você precisa:

1. [Configurar a Stripe](#configurar-a-stripe)
2. [Configurar condições de pagamento](#configurar-condicao-de-pagamento)

## Configurar a Stripe

Siga os passos abaixo para a configuração no ambiente VTEX.

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __StripeConnector__ na barra de busca e clique sobre o nome do provedor.
4. Preencha os campos abaixo com as seguintes informações:
<br>
<ul>
<br>
    	<li><b>Chave de aplicação</b>: Chave publicável que você obteve no <a href="https://dashboard.stripe.com">dashboard da sua conta na Stripe</a>.</li>
    	<li><b>Token de aplicação</b>: Chave secreta que você obteve no <a href="https://dashboard.stripe.com">dashboard da sua conta na Stripe</a>.</li>
</ul>
5. Clique em __Salvar__.

Após a configuração no ambiente VTEX, você também precisa configurar o Webhook na sua conta da Stripe.

1. Acesse o [dashboard da sua conta na Stripe](https://dashboard.stripe.com/).
2. Clique no botão __Desenvolvedores__.
3. Clique na aba __Webhooks__.
4. Clique no botão __Adicione um endpoint__.
5. No campo __URL do endpoint__, adicione a URL de endpoint da sua loja VTEX no formato `https://{nome-da-conta}.myvtex.com/_v/notifications` substituindo `{nome-da-conta}` pelo nome da sua conta VTEX.
6. Clique em __+ Selecionar eventos__.
7. Clique nas categorias e selecione os eventos desejados. Caso não tenha certeza sobre quais eventos devem ser adicionados, entre em contato com o suporte da Stripe para que possam ajudá-lo neste tipo de configuração.
8. Clique em __Adicionar eventos__.
9. Clique em __Adicionar endpoint__.

>ℹ️ Caso você deseje realizar transações com cartão de crédito na Stripe, é necessário abrir um ticket na própria Stripe da seguinte maneira:
>
> - Solicitar a liberação da função "raw card data", indicando que a VTEX e a Stripe são parceiros de pagamento.
>
> - Encaminhar em anexo o AOC (Attestation of Compliance for Onsite Assessments – Service Providers) da VTEX. Para verificar a versão mais recente do AOC VTEX, acesse a página de [certificações da VTEX](https://vtex.com/br-pt/compliance/certifications) e baixe o arquivo na seção PCI.
>
> As ações acima evitarão que erros relacionados a transmissão de dados sensíveis ocorram na integração entre a Stripe e a VTEX.

## Configurar condição de pagamento

Ao concluir as etapas indicadas, a Stripe estará configurada na sua loja. Assim, ao cadastrar uma condição de pagamento, ela vai estar disponível no campo __Processar com a afiliação__ (desde que o meio de pagamento seja compatível com a Stripe). 

Para definir condições de pagamento, acesse o artigo [Configurar condições de pagamento](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento--tutorials_455).

## Configurar Google Pay

O conector Stripe permite adicionar o Google Pay como método de pagamento no checkout da sua loja.Com o conector Stripe configurado, você pode adicionar o Google Pay com os seguintes passos:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Configurações__, ou digite __Configurações__ na barra de busca no topo da página.
2. Em __Condições de pagamento__, clique no ícone `+`
3. Clique sobre a opção __Google Pay__.
4. Ative a condição no campo __Status__.
5. Em __Processar com a afiliação__, selecione a opção __StripeConnector__.
6. Clique em __Salvar__.

Após esse procedimento, o Google Pay aparecerá no checkout da loja como um dos métodos de pagamento disponíveis.

## Configurar Apple Pay

O conector Stripe permite adicionar o Apple Pay como método de pagamento no checkout da sua loja. 

>⚠️ O Apple Pay funciona atualmente somente nos sistemas operacionais MacOs e IOS, e no navegador Safari. Para maiores informações, acesse [Dispositivos compatíveis com o Apple Pay](https://support.apple.com/pt-br/HT208531).

Com o conector Stripe configurado, você pode adicionar o Apple Pay com os seguintes passos:

1. Acesse o [dashboard da sua conta na Stripe](https://dashboard.stripe.com/settings/payments) na seção de configuração de pagamentos.
2. Em __Settings__, clique em __Payment Methods__.
3. Clique em __Apple Pay > Configure__ e depois em __Add to new domain__.
4. Insira o domínio público do website da sua loja.
5. Clique em __Baixar arquivo de verificação__ para salvá-lo em seu dispositivo.
6. Crie as credenciais [appkey e apptoken](https://help.vtex.com/pt/tutorial/application-keys--2iffYzlvvz4BDMr6WGUtet#).
7. Faça uma chamada ao endpoint para enviar o arquivo de verificação baixado anteriormente, adicionando no header as credenciais criadas e o endereço do seu domínio público (https://{{dominioPublicodoSite}}/well-known/raw/apple-developer-merchantid-domain-association).
8. Clique em __Add__.
9. Acesse o __Admin VTEX__.
10. Clique em __Pagamentos__.
11. Em seguida, clique em __Configurações__.
12. Na aba __Condições de pagamento__, clique no botão `+`.
13. Clique em __Apple Pay__.
14. Preencha o campo __Nome da regra__ com um nome de sua preferência para identificação.
15. Clique no botão __Status__ para ativar essa condição de pagamento.
16. No campo __Processar com a afiliação__, selecione a opção Stripe.
17. Se houver um antifraude configurado na sua loja, você pode ativá-lo para essa condição de pagamento marcando a caixa __Usar Antifraude__.
18. Escolha se os pagamentos serão à vista ou parcelados.
19. Se desejar, você também pode [configurar condições especiais de pagamento](https://help.vtex.com/pt/tutorial/condicoes-especiais).
20. Clique em __Salvar__.

Após esse procedimento, o Apple Pay aparecerá no checkout da loja como um dos métodos de pagamento disponíveis.
