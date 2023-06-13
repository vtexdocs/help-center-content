---
title: Incluir variáveis do pedido no template de e-mail transacional
id: 694Bn8eOeAWYQeaWGaOISe
status: DRAFT
createdAt: 2017-12-19T14:09:17.388Z
updatedAt: 2022-09-20T15:42:07.435Z
publishedAt: 
firstPublishedAt: 2017-12-19T17:49:00.650Z
contentType: tutorial
productTeam: Post-purchase
author: authors_24
slug: incluir-variaveis-do-pedido-no-template-de-e-mail-transacional
legacySlug: incluir-variaveis-do-pedido-no-template-de-e-mail-transacional
subcategory: 4D5LrWwlHGmOWMomOaaGee
---

Na Central de Mensagens, dentro da aba __Templates__, você encontra os templates de e-mails transacionais enviados para seus clientes.

Alguns deles são disparados quando o status de um pedido é alterado. Por exemplo:
- __Confirmação de pedido__: e-mail enviado quando o pedido é realizado com sucesso.
- __Pedido faturado__: e-mail enviado quando o pedido é faturado.
- __Pedido cancelado__: e-mail enviado quando o pedido é cancelado.

Você pode customizar todos os templates do Message Center, e tem à sua disposição uma série de variáveis que permitem adicionar dados dinamicamente ao e-mail.

Estas variáveis são propriedades do JSON que consta no campo __JSON Data__ e podem ser usadas no HTML do e-mail. Basta inseri-las dentro de chaves duplas, usando o seguinte formato: `{{variável}}` 

### Exemplo

<div class="alert alert-warning">
Os exemplos de JSON Data apenas aparecerão nos templates quando você concluir a ação desejada em sua loja. Caso não tenha transacionado um pedido, uma recorrência ou qualquer outra ação, o JSON Data aparecerá em branco.
</div>

Digamos que você queira inserir o nome da transportadora no e-mail de pedido enviado.

Para fazer isso, entre no template de pedido enviado e, no campo __JSON Data__, busque a propriedade `courier`.

![courier](//images.contentful.com/alneenqid6w5/2AKyoHdoQ8c40SsQa2uSKS/b4c2b0c460d0f31bec40148f5bba6006/courier.png)

O valor preenchido para essa propriedade é apenas um exemplo, mas você pode usá-la no campo __HTML__ para que, quando o e-mail for enviado, o cliente veja a transportadora de fato responsável pela entrega do pedido.

Note que a propriedade `courier` está dentro do objeto `package`. Portanto, você precisa inseri-la da seguinte maneira:

`{{package.courier}}`

![courier3](//images.contentful.com/alneenqid6w5/2yzopAVuU46I2UICEQ0y2S/69e4a43fa202c90cb9996f4a3eea19aa/courier3.png)

Veja que o valor de exemplo ("Transportadora Teste Courier S.A.") foi inserido na tela de preview, abaixo dos campos __HTML__ e __JSON Data__.

### Outras variáveis de e-mails de pedido

Entre as propriedades dos JSONs de pedido que podem ser usadas como variáveis nos templates de e-mails transacionais, estão:

- `courier`: transportadora
- `invoiceNumber`: número da nota fiscal
- `invoiceValue`: valor da nota fiscal
- `invoiceUrl`: URL da nota fiscal
- `issuanceDate`: data de emissão
- `trackingNumber`: número de rastreio do pedido
- `invoiceKey`: chave de acesso da nota fiscal
- `trackingUrl`: URL de rastreio do pedido (informada pela transportadora)
