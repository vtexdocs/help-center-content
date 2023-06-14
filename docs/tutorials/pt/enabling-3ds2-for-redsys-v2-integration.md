---
title: 'Adicionar suporte a 3DS2 na integração com a Redsýs V2'
id: 1ixji2XORg9p0UoW8gBtUG
status: PUBLISHED
createdAt: 2021-03-08T14:53:08.780Z
updatedAt: 2023-03-23T15:42:17.139Z
publishedAt: 2023-03-23T15:42:17.139Z
firstPublishedAt: 2021-03-08T16:29:32.443Z
contentType: tutorial
productTeam: Financial
author: 13Ue4MX9WNiX9f3SVCUZZW
slug: adicionar-suporte-a-3ds2-na-integracao-com-a-redsys-v2
legacySlug: adicionar-suporte-a-3ds2-na-integracao-com-a-redsys-v2
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Agora, a funcionalidade 3DS2 também está disponível para pagamentos realizados via cartão de crédito e processados pelo gateway de pagamentos [Redsýs](https://help.vtex.com/pt/tutorial/configurar-gateway-redsys--7xRnMyzZS0kQoIG2ISagY8).

3DS2 é uma solução de segurança que permite ao comprador ser autenticado no banco emissor, garantindo ainda mais segurança para suas transações on-line. 

Para mais detalhes, acesse o artigo [Fluxo de autenticação 3DS2: aceite pagamentos on-line de forma mais segura](https://help.vtex.com/pt/announcements/fluxo-de-autenticacao-3ds2-aceite-pagamentos-on-line-de-forma-mais-segura--6UdTjjVU1AcEQ2aE3Ftxsl).

<div class="alert alert-danger">
Antes de configurar o 3DS2, é importante garantir que a Redsýs já esteja configurada em sua loja e que a parceria comercial firmada esteja habilitada para a utilização do 3DS2.
  </div>

Neste tutorial, explicaremos como realizar essa integração por meio do Admin da VTEX via painel administrativo. 

1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Acesse a aba __Afiliações de Gateways__, e clique na aba verde, com sinal “__+__”.
3. Clique no card de afiliação da __Redsýs V2__.
4. Desça a tela e habilite a opção __3DS Enabled__.  
5. Clique em __Salvar__.

![RedsysV2 PT](//images.ctfassets.net/alneenqid6w5/9Ee9cJHkCY2NQy6AAwsr5/803dff2f8664c2fef47143f6261a4463/Redsys_3DS2_-_PT.png)

Feito isso, a solução estará habilitada para as transações da Redsýs com cartão de crédito.
