---
title: 'Configurando a recuperação de pagamento via Pix'
createdAt: 2026-11-11T12:00:00.000Z
updatedAt: 2026-11-11T12:00:00.000Z
contentType: tutorial
productTeam: VTEX CX Platform
slugEN: configuring-pix-payment-recovery
locale: pt
seeAlso:
    - /pt/docs/tutorials/introducao-ao-cx
---

A recuperação de pagamento via Pix ajuda lojas no Brasil a recuperar pedidos que estão aguardando um pagamento via Pix. Enquanto o código Pix ainda é válido, a automação envia ao comprador um lembrete via WhatsApp com um botão para copiar o código e concluir o pagamento. A mensagem também pode incluir um segundo botão. Quando o comprador clica nele, um novo carrinho com os mesmos itens fica pronto, e o comprador vai direto para a página de checkout, onde pode concluir a compra com o meio de pagamento que preferir, como cartão de crédito ou boleto.

> ❗ Cada lembrete é uma mensagem de marketing do WhatsApp, e a taxa da Meta é cobrada da loja.

## Antes de começar

Conecte um número de WhatsApp ao aplicativo VTEX CX no Admin VTEX. Para mais informações, acesse [Introdução ao CX](https://help.vtex.com/pt/docs/tutorials/introducao-ao-cx#whatsapp-store).

## Configurando o lembrete

Para acessar as configurações de recuperação de pagamento, siga estas etapas:

1. No Admin VTEX, acesse **Storefront**, ou digite **Storefront** na barra de pesquisa no topo da página.
2. Em **VTEX CX Platform**, clique em **Automations**.
3. Clique em **PIX Payment Recovery**.

Nas configurações da automação, você pode editar o template do WhatsApp e definir as regras do lembrete:

- Edite o texto do template do WhatsApp. O template inclui um botão para copiar o código Pix, e pode incluir um segundo botão que leva o comprador ao checkout com um novo carrinho contendo os mesmos itens, onde ele pode concluir a compra com o meio de pagamento que preferir.
- Defina quanto tempo a automação espera antes de enviar o lembrete. A espera padrão é de 5 minutos, e a espera mínima é de 1 minuto.
- Defina um valor mínimo de pedido. Pedidos abaixo desse valor não recebem lembrete.
- (Opcional) Em **Sales channels**, informe os IDs das políticas comerciais que podem acionar o lembrete, separados por vírgulas, como `1,2,3`. Por padrão, apenas a política comercial `1` é incluída.
- Defina a parcela de compradores que recebe o lembrete.

## Regras do lembrete

A automação envia o lembrete quando o código Pix ainda é válido e o pedido corresponde ao tempo de espera, ao valor mínimo de pedido, às políticas comerciais e à parcela de compradores definidos.

A automação também aplica estes limites:

- Envia um lembrete por pedido.
- Quando um pedido é dividido, apenas o pedido principal pode receber um lembrete.
- Não envia um lembrete quando o pedido não tem número de telefone ou código Pix copia e cola.

## Resultados da recuperação de pagamento

No Dashboard, a tela **Payment recovery** mostra os resultados desses lembretes para o período selecionado. Pagamentos feitos a partir dos dois botões contam para os resultados.

| Métrica | Descrição |
| --- | --- |
| **Total sends** | Número de lembretes enviados no período selecionado. |
| **Recovered revenue** | Valor total dos pagamentos recebidos após um lembrete. |
| **Conversion rate** | Percentual de lembretes que resultaram em um pagamento. A tela também mostra o número de vendas convertidas. |
| **Average order value** | Valor médio dos pagamentos convertidos (AOV). |

Abaixo do resumo, **Copy Pix code** e **Open payment link** mostram os pagamentos convertidos, a taxa de conversão e a receita recuperada atribuída a cada botão.
