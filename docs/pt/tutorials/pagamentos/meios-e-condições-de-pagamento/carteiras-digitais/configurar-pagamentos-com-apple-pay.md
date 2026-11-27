---
title: 'Configurar pagamentos com Apple Pay'
createdAt: 2018-04-12T20:38:42.521Z
updatedAt: 2026-11-11T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: setting-up-payments-with-apple-pay
locale: pt
hidden: false
---

Seus clientes podem fazer compras usando o Apple Pay, a [carteira digital](/pt/docs/tutorials/o-que-e-uma-carteira-digital-e-wallet) da Apple. Para oferecer esse meio de pagamento na sua loja, você precisa cumprir os seguintes requisitos:

- Ter uma conta em `developer.apple.com`.
- Ter contrato com um provedor que processe pagamentos com o Apple Pay.
- Ter registrado o Merchant ID, que é o identificador da sua loja no sistema da Apple, na conta Apple Developer. Esse registro inclui criar os certificados do Apple Pay e validar cada domínio da loja que exibe o botão do Apple Pay, conforme descrito em [Configurar o Merchant ID no Apple Pay](https://developers.vtex.com/docs/guides/setting-up-merchant-id-in-apple-pay). Alguns provedores, como a Stripe, têm um fluxo próprio para registrar os domínios, descrito no artigo de configuração do provedor.

> ⚠️ O Apple Pay está disponível apenas em dispositivos e navegadores compatíveis, como o Safari em dispositivos com macOS ou iOS. Para conferir a lista completa, acesse [Dispositivos compatíveis com o Apple Pay](https://support.apple.com/pt-br/HT208531).

Com os requisitos cumpridos, configure primeiro o provedor de pagamento e depois a condição de pagamento do Apple Pay, conforme as seções a seguir.

## Configurar provedor de pagamento

Configure no Admin da sua loja um provedor que processe transações com o Apple Pay. Para saber se um provedor oferece suporte ao Apple Pay, consulte a documentação desse provedor.

## Configurar pagamento com Apple Pay

1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Clique na aba __Condições de pagamento__ e, em seguida, em `+`.
3. Selecione o meio de pagamento __Apple Pay__.
4. Clique no botão `Status` para ativar essa condição de pagamento.
5. No campo __Processar com o provedor__, selecione o provedor que será utilizado para processar os pagamentos.
6. Se desejar utilizar um sistema antifraude, selecione a opção **Usar solução antifraude**.
7. No campo __À vista ou parcelado?__, selecione se os pagamentos serão à vista ou parcelados.
8. Se desejar, você também pode [condições especiais de pagamento](/pt/docs/tutorials/condicoes-especiais).
9. Clique em `Salvar`.

Depois de salvar a condição de pagamento, o Apple Pay pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento. Passado esse tempo, abra o checkout da loja no Safari, em um dispositivo compatível com um cartão cadastrado no app Carteira, e confirme que o Apple Pay aparece entre as opções de pagamento.

### Artigos relacionados

- [Configurar o Merchant ID no Apple Pay](https://developers.vtex.com/docs/guides/setting-up-merchant-id-in-apple-pay)
- [Configurar condições especiais de pagamento](/pt/docs/tutorials/condicoes-especiais)
- [Carteira digital (ewallet)](/pt/docs/tutorials/o-que-e-uma-carteira-digital-e-wallet)
