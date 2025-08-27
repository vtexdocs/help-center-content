---
title: 'Apple Pay'
id: STKWiXJSR9ImPt5EEC2aL
status: PUBLISHED
createdAt: 2023-06-28T14:04:58.979Z
updatedAt: 2024-06-25T21:02:43.540Z
publishedAt: 2024-06-25T21:02:43.540Z
firstPublishedAt: 2023-06-28T14:13:24.803Z
contentType: trackArticle
productTeam: Shopping
slugEN: apple-pay
locale: pt
trackId: 6X8YyZBoVJpz5R8oXciTyu
trackSlugEN: carteira-digital-e-wallet
order: 3
---

Seus clientes podem fazer compras usando o Apple Pay, a [carteira digital](https://help.vtex.com/pt/tracks/digital-wallet-e-wallet--6X8YyZBoVJpz5R8oXciTyu/7jLbdfch9Oe2yYbQa9zwE1) da Apple. Para isso, você precisa cumprir alguns requisitos:

- Ter uma conta em `developer.apple.com`.
- Ter contrato com um provedor que processe pagamentos com Apple Pay.

> ⚠️ O Apple Pay funciona atualmente somente nos sistemas operacionais MacOs e IOS, e no navegador Safari. Para maiores informações, acesse [Dispositivos compatíveis com o Apple Pay](https://support.apple.com/pt-br/HT208531).

## Configurar provedor de pagamento

Primeiramente é necessário configurar no Admin de sua loja um provedor que processe transações com o Apple Pay, tais como, [Adyen](https://help.vtex.com/pt/tutorial/configurar-pagamento-com-adyenv3) e [Stripe](https://help.vtex.com/pt/tutorial/configurar-a-afiliacao-de-gateway-stripe--fwF2wk2FQKrODrWWkvSLO).

Para conferir todas as opções de provedores disponíveis para este meio de pagamento, acesse a lista conforme descrito no Passo 5 da seção [Configurar pagamento com Apple Pay](#configurar-pagamento-com-apple-pay).

> ⚠️ Antes de iniciar a configuração do provedor é necessário [registrar o Merchant ID no Apple Pay](registrar o Merchant ID no Apple Pay).

## Configurar pagamento com Apple Pay

1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Clique na aba __Condições de pagamento__ e, em seguida, no botão `+`.
3. Selecione o meio de pagamento __Apple Pay__.
4. Clique no botão `Status` para ativar essa condição de pagamento.
5. No campo __Processar com o provedor__, selecione o provedor que será utilizado para processar os pagamentos.
6. Se houver um antifraude configurado na sua loja, você pode ativá-lo para essa condição de pagamento marcando a caixa __Usar solução antifraude__.
7. Escolha se deseja que os pagamentos sejam feitos à vista ou parcelados.
8. Se desejar, você também pode optar por uma [condição especial de pagamento](https://help.vtex.com/pt/tutorial/condicoes-especiais--tutorials_456).
9. Clique em `Salvar`.

Depois de seguir os passos indicados, Apple Pay pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento.

### Artigos relacionados

- [Configurando Merchant ID no Apple Pay](https://developers.vtex.com/vtex-rest-api/docs/setting-up-merchant-id-in-apple-pay)
- [Configurar condições especiais de pagamento](https://help.vtex.com/pt/tutorial/condicoes-especiais--tutorials_456)
