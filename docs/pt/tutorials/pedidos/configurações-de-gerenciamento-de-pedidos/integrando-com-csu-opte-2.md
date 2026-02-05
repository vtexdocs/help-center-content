---
title: 'Integrar com CSU (Opte+)'
id: tutorials_4258
status: PUBLISHED
createdAt: 2017-04-27T21:51:31.608Z
updatedAt: 2023-03-29T23:06:21.223Z
publishedAt: 2023-03-29T23:06:21.223Z
firstPublishedAt: 2017-04-27T23:11:15.330Z
contentType: tutorial
productTeam: Channels
author: authors_84
slugEN: integrating-with-csu-opte-2
legacySlug: integrando-com-csu-opte-2
locale: pt
subcategoryId: 1qvm3kIrt6KA6IeGc4EQ6k
---

Este artigo explica o passo-a-passo necessário para configurar a integração da sua loja com o marketplace CSU (Opte+).

A CSU trabalha apenas com um modelo de Marketplace: **Checkout na CSU**. Por meio dele, todo o processamento do pagamento é feito na CSU, e o Seller só recebe o pedido e a autorização para despachar o pedido.

## Primeiros passos

1. Configure a [política comercial](/pt/tutorial/configurando-a-politica-comercial-para-marketplace/) (a indicação da CSU é que você utilize a mesma política do seu próprio site).
2. Configure a [logística](/pt/tutorial/configurando-logistica-para-marketplace/) para essa política comercial.

## Cadastrar afiliado

Depois de configuradas a política comercial e a logística, é preciso cadastrar o afiliado. Para isso, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Pedidos > Configurações**, ou digite *Pedidos* na barra de busca no topo da página e e selecione *Configurações da loja / Pedidos*.
2. Na aba **Afiliados**, Clique em `+ Novo afiliado`.
3. Preencha os campos da tela, descritos abaixo, e em seguida clique em `Salvar`.
    - **Nome:** nome do afiliado/marketplace. Procure escolher nomes significativos do modelo que vai configurar.
    - **ID:** código de identificação do afiliado com três caracteres. Neste campo só são permitidas consoantes. A CSU solicita que seja criado um afiliado para cada canal, ou seja, um para o Marketplace da CSU, um para o programa de fidelidade de cada um dos clientes da CSU e um para cada shopping corporativo. Vamos criar primeiro o do Marketplace. A CSU lhe envia, juntamente com um manual, um arquivo em Excel com todos os sites da CSU para que você possa criar os afiliados conforme indicado pela CSU.
        - **PTM**: Marketplace Optemais (para o Marketplace).
        - **PSS**: Passaporte (para o programa de fidelidade do Marketplace);
    - **Política comercial:** ID da política comercial onde está definido o sortimento de produtos que serão trabalhados no Marketplace. A indicação da CSU é que você utilize a mesma política do seu próprio site. Normalmente os Sellers usam a política comercial 1.
    - **Email para notificações:** endereço de e-mail que receberá quaisquer notificações de conflito nas integrações de pedidos.
    - **Endpoint de busca:** será o mesmo para os diversos marketplaces da CSU: http://stage.optemais.com.br/Notificacao/Vtex/Sku.
    - **Versão do endpoint de busca:** 1.x.x;
    - **Usar meu meio de pagamento:** nunca marcar esta flag.

## Criar acesso

Uma vez criado o afiliado, é preciso criar e dar permissão para a chave da CSU. Esse procedimento só precisa ser feito uma vez, independentemente do número de afiliados da CSU.

É necessário criar o usuário associando a chave, e depois disso associar a um perfil de acesso. Os dois modelos usam o mesmo perfil de acesso. Veja abaixo o passo-a-passo:

1. No Admin VTEX, acesse **Configurações da conta > Usuários**, ou digite **Usuários** na barra de busca no topo da página.
2. Busque pelo valor `vtexappkey-parceirocsu-ERUXDY`.
3. Selecione o usuário encontrado e associe a ele o perfil de acesso `IntegrationProfile-Fulfillment_Gateway_GetOrder`.
4. Clique em `Salvar`.

Após esse procedimento, a integração com a CSU está configurada, e o [usuário titular](/pt/docs/tutorials/o-que-e-o-usuario-titular) do Seller deve solicitar uma reindexação do seu cátalogo para agilizar o envio dos SKUs para a CSU.

É necessário ter permissão de usuário titular para realizar este passo: acesse seu admin (http://_nomedaloja_/admin/site/fullcleanup.aspx) e clique no botão **Reindexar Base** (este procedimento deve ser feito com muito cuidado e não deve ser repetido sempre, pois pode afetar a performance do site).

Pronto, agora você está prestes a ser um parceiro Opte+. Entre em contato com a CSU para eles confirmarem se deu está correto.

### Saiba mais

- [Estratégias de marketplace na VTEX](/pt/docs/tutorials/estrategias-de-marketplace-na-vtex).
