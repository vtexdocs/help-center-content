---
title: 'Configurar pagamento com Clip'
id: 2xtInjWMbY3N7bEiYdkfHO
status: PUBLISHED
createdAt: 2025-05-30T17:26:28.618Z
updatedAt: 2025-06-12T14:55:25.590Z
publishedAt: 2025-06-12T14:55:25.590Z
firstPublishedAt: 2025-05-30T17:46:56.723Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-clip
legacySlug: configurar-pagamento-com-clip
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento Clip. Por meio deste provedor, sua loja pode oferecer pagamento por meio do Clip.

Para configurar Clip, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Provedores**, ou digite **Provedores** na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome **Clip** na barra de busca e clique sobre o nome do provedor.
4. Em **Autorização do provedor**, preencha os campos **Chave de aplicação** e **Token de aplicação** com as informações da sua conta Clip.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor Clip na tela do Admin VTEX, insira a informação no campo **Nome** em **Informações básicas**.
6. Em **Controle de pagamento**, selecione se deseja ativar o provedor em ambiente de teste clicando em **Ativar modo de teste**.
7. Em **Campos do provedor**, selecione ou preencha os campos **Credencial publica**, **Credencial Privada**, **Personalizar pagos**, **Metodos de pago aceptados (debit,credit,cash,bank_transfer)**, **¿ Quieres aceptar tarjetas internacionales ?**, **Marcas de pago aceptados (visa,mastercard,amex,carnet,discover,diners)**, **¿ Aceptas 3 meses sin intereses ?**, **Monto mínimo de compra para 3 meses sin intereses**, **¿ Aceptas 6 meses sin intereses ?**, **Monto mínimo de compra para 6 meses sin intereses**, **¿ Aceptas 9 meses sin intereses ?**, **Monto mínimo de compra para 9 meses sin intereses**, **¿ Aceptas 12 meses sin intereses ?**, **Monto mínimo de compra para 12 meses sin intereses**, **¿ Aceptas 18 meses sin intereses ?**, **Monto mínimo de compra para 18 meses sin intereses**, **¿ Aceptas 24 meses sin intereses ?**, **Monto mínimo de compra para 24 meses sin intereses**, **Mostrar propinas**, e **Duración del checkout (horas)** conforme orientações do provedor.
8. Clique em `Salvar`.

## Configurar condição de pagamento

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba **Condições de Pagamentos**, clique no botão `+`.
3. Clique em **Clip**.
4. Ative a condição no campo **Status**.
5. Se desejar utilizar um sistema antifraude, selecione a opção **Usar solução antifraude**.
6. Se desejar, você também pode [configurar condições especiais de pagamento](/pt/docs/tutorials/condicoes-especiais).
7. Clique em `Salvar`.

Depois de seguir os passos indicados, o provedor Clip pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento.

