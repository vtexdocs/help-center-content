---
title: 'Emissão de comprovante de venda no Sales App via impressora térmica'
id: 6GIUB1fVQVGZscsMoIsN1f
status: PUBLISHED
createdAt: 2025-08-01T19:46:33.357Z
updatedAt: 2025-08-01T20:19:18.600Z
publishedAt: 2025-08-01T20:19:18.600Z
firstPublishedAt: 2025-08-01T20:14:47.926Z
contentType: tutorial
productTeam: Shopping
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: issuing-sales-receipts-in-sales-app-via-thermal-printer
legacySlug: emissao-de-comprovante-de-venda-no-sales-app-via-impressora-termica
locale: pt
subcategoryId: 4T6qfa6gNO6g4sAUIa6s2G
---

<div class = "alert alert-info">
  <p>Esta funcionalidade está disponível apenas para Android e é compatível com impressoras térmicas específicas, conforme descrito na seção <a href="#requisitos">Requisitos</a>.</p>
</div>

O [VTEX Sales App](https://help.vtex.com/pt/tracks/instore-primeiros-passos-e-configuracoes--zav76TFEZlAjnyBVL5tRc) permite que os vendedores imprimam os comprovantes de vendas utilizando uma impressora térmica. A ação é realizada a partir de um celular e utiliza conexão Bluetooth.

Esta funcionalidade dispensa o vendedor da necessidade de se deslocar ao caixa para gerar o comprovante da venda, que é rapidamente emitido pelo celular e está disponível no fluxo da venda no **Sales App**. O resultado é mais agilidade no atendimento e uma melhor experiência de compra para os clientes.

<div class="alert alert-warning">
  <p>A impressão do comprovante da venda no <b>Sales App</b> via impressora térmica não representa o faturamento do pedido. A nota fiscal ou cupom é emitido posteriormente, pois depende de integrações com conectores de pagamento e questões logísticas, como o estoque utilizado.</p>
</div>

Caso a sua loja deseje emitir comprovantes com faturamento automático para vendas de estoque local (OnHands), recomendamos entrar em contato com o parceiro Neomode. 

## Requisitos

Para a sua loja emitir comprovantes de venda no **Sales App** via impressora térmica, ela precisa atender aos seguintes critérios:

* Utilizar dispositivos Android.
* Dispor de impressora térmica que siga o protocolo ESC/POS.

O protocolo ESC/POS (Epson Standard Code for Point of Sale) é um conjunto de comandos desenvolvido pela Epson para o uso de impressoras de pontos de venda e outros dispositivos. 

Para verificar se a sua impressora térmica atende a este requisito, procure pelo termo "ESC/POS" no manual do produto ou site do fabricante.

## Imprimir comprovante via impressora térmica

Para realizar a impressão do comprovante de venda pelo **Sales App**, siga os passos abaixo:

1. Ative o Bluetooth do celular.
2. Conecte o celular à impressora térmica via Bluetooth.

  <div class = "alert alert-info">
  <p>Se a impressora não for reconhecida automaticamente, procure o driver no site do fabricante e siga as instruções de instalação.</p>
</div>

3. No aplicativo do **Sales App**, na tela final do pedido ou após selecionar um pedido na área **Pedidos**, clique em `Imprimir pedido`.

  <div class="alert alert-danger">
  <p>No primeiro uso da funcionalidade, ocorre um erro nesta etapa. Feche o aplicativo e realize o passo a passo desde o início. Caso o erro persista, entre em contato com o nosso <a href="https://help.vtex.com/pt/support">Suporte</a>.</p>
</div>

4. Selecione a impressora térmica desejada e a impressão será feita imediatamente.

O comprovante impresso vai apresentar os seguintes dados:

* Nome e dados da loja
* Identificação do cliente
* Detalhes do pedido (por pacote)
* Informações do envio do pedido
* Dados de pagamento

Para lojas com integrações feitas por parceiros como a Neomode e que faturam imediatamente as vendas do tipo OnHands, a nota fiscal aparecerá no comprovante, como na imagem abaixo:

![thermic_printer_receipt_PT](//images.ctfassets.net/alneenqid6w5/YOumGZtiUlkA1ACYOgKec/f87b6570ed59c08f9f6fed8d4f6552ad/thermic_printer_receipt_PT.png)
