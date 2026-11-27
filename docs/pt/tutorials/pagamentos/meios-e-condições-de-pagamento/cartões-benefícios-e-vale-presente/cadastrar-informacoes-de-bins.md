---
title: 'Cadastrar informações de BINs'
createdAt: 2024-05-02T19:11:00.734Z
updatedAt: 2026-11-11T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: adding-bin-information
locale: pt
hidden: false
---

O Número de Identificação Bancária (BIN) é composto pelos primeiros seis ou oito dígitos de um cartão de crédito ou débito e identifica a [instituição emissora](/pt/docs/tutorials/agentes-financeiros-no-fluxo-de-pagamento#banco-emissor) do cartão. No exemplo a seguir, os seis primeiros dígitos, em azul e marcados acima do número, formam o BIN de seis dígitos. Com os dois dígitos seguintes, em rosa, eles formam o BIN de oito dígitos, marcado abaixo do número.

![Cartão de exemplo com o número 5502 0912 3456 7890, os seis primeiros dígitos marcados em azul acima do número e os oito primeiros dígitos marcados em rosa abaixo dele](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/meios-e-condições-de-pagamento/cartões-benefícios-e-vale-presente/cadastrar-informacoes-de-bins_1.png)

Novos BINs são criados quando a instituição emissora lança novos perfis de cartão ou emite novos cartões para um modelo já existente, e também quando uma [bandeira](/pt/docs/tutorials/agentes-financeiros-no-fluxo-de-pagamento#bandeira-de-cartao) é comprada por outra.

Quando um BIN não está cadastrado ou está desatualizado na VTEX, o checkout pode identificar o cartão com a bandeira ou a instituição emissora errada, ou não reconhecê-lo. Promoções, condições de pagamento e opções de parcelamento configuradas para a instituição emissora podem não aparecer ou ser diferentes do configurado, e o pagamento pode ser recusado ou retornar um erro genérico apenas para cartões dessa instituição. Nesses casos, notifique a VTEX para que os cartões sejam validados corretamente no pagamento.

## Solicitar a inclusão ou atualização de BINs

Para adicionar um novo BIN ou atualizar as informações de um BIN já cadastrado na VTEX, siga os passos abaixo:

1. Solicite à instituição emissora proprietária dos BINs um documento oficial em PDF que confirme explicitamente essa propriedade.

   > ⚠️ Para garantir a segurança e a legitimidade das alterações, a VTEX só atende solicitações acompanhadas desse documento. Arquivos .EML, capturas de tela e conversas por e-mail não são aceitos como comprovação, mesmo quando enviados por um funcionário da instituição emissora.

2. Preencha uma planilha com as seguintes informações:
   - __code__: novo BIN a ser adicionado ou BIN já existente que deverá ser atualizado.
   - __cardBrand__: bandeira do cartão correspondente ao BIN.
   - __cardType__: tipo de cartão, crédito ou débito.
   - __country__: país de utilização do cartão.
   - __bank__: instituição emissora do cartão.
   - __cvvSize__: quantidade de caracteres do CVV (Card Verification Value).
   - __cardLevel__: classificação do cartão (Gold, Platinum, Black, entre outros).

   A imagem a seguir mostra um exemplo de planilha preenchida:

   ![Planilha de exemplo com as colunas code, cardBrand, cardType, country, bank, cvvSize e cardLevel e uma linha preenchida com um BIN de cartão de crédito Mastercard Gold emitido no Brasil](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/meios-e-condições-de-pagamento/cartões-benefícios-e-vale-presente/cadastrar-informacoes-de-bins_2.PNG)

3. Abra um ticket no [Suporte VTEX](https://supporticket.vtex.com/support) e anexe a planilha e o documento em PDF.
