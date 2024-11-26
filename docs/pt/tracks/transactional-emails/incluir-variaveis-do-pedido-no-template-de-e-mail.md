---
title: 'Incluir variáveis do pedido no template de e-mail'
id: fLMUCPArCYB9vcTZEZ6bi
status: PUBLISHED
createdAt: 2020-01-10T13:43:21.220Z
updatedAt: 2020-11-25T01:12:13.540Z
publishedAt: 2020-11-25T01:12:13.540Z
firstPublishedAt: 2020-01-13T14:38:37.451Z
contentType: trackArticle
productTeam: Post-purchase
slugEN: including-order-variables-in-email-template
locale: pt
trackId: 6IkJwttMw5T84mlY9RifRP
trackSlugPT: e-mails-transacionais
---

Como explicamos antes, na **Central de Mensagens**, dentro da aba __Templates__, você encontra os templates de e-mails transacionais enviados para seus clientes.

Você pode customizar todos os templates da Central de Mensagens, e tem à sua disposição uma série de variáveis que permitem adicionar dados dinamicamente ao e-mail.

Essas variáveis são propriedades do JSON que consta no campo __JSON Data__ e podem ser usadas no HTML do e-mail. Basta inseri-las dentro de chaves duplas, usando o seguinte formato: `{{variável}}` 

### Exemplo

>⚠️ Os exemplos de JSON Data apenas aparecerão nos templates quando você concluir a ação desejada em sua loja. Caso não tenha transacionado um pedido, uma recorrência ou qualquer outra ação, o JSON Data aparecerá em branco.

Digamos que você queira inserir o nome da transportadora no e-mail de pedido enviado.

Para fazer isso, entre no template de pedido enviado e, no campo __JSON Data__, busque a propriedade `courier`.

![courier](https://images.contentful.com/alneenqid6w5/2AKyoHdoQ8c40SsQa2uSKS/b4c2b0c460d0f31bec40148f5bba6006/courier.png)

O valor preenchido para essa propriedade é apenas um exemplo, mas você pode usá-la no campo __HTML__ para que, quando o e-mail for enviado, o cliente veja a transportadora de fato responsável pela entrega do pedido.

Note que a propriedade `courier` está dentro do objeto `package`. Portanto, você precisa inseri-la da seguinte maneira:

`{{package.courier}}`

![courier3](//images.contentful.com/alneenqid6w5/2yzopAVuU46I2UICEQ0y2S/69e4a43fa202c90cb9996f4a3eea19aa/courier3.png)

Veja que o valor de exemplo ("Transportadora Teste Courier S.A.") foi inserido na tela de preview, abaixo dos campos __HTML__ e __JSON Data__.
