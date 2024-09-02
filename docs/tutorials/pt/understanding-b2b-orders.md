---
title: 'Entendendo Pedidos B2B'
id: 1arpUseqasZZ45Lq7PgevO
status: PUBLISHED
createdAt: 2020-10-20T15:50:59.558Z
updatedAt: 2022-07-13T21:58:03.246Z
publishedAt: 2022-07-13T21:58:03.246Z
firstPublishedAt: 2020-11-17T17:03:21.123Z
contentType: tutorial
productTeam: Post-purchase
author: 2o8pvz6z9hvxvhSoKAiZzg
slug: entendendo-pedidos-b2b
locale: pt
legacySlug: entendendo-pedidos-b2b
subcategory: 1WkESJBcI6r61dS82PQKF9
---

Na operação de um e-commerce B2B, frequentemente é necessário informar o status de um pedido a um funcionário que não tenha efetuado a compra pela empresa. Para fazer isso, é comum que o time de atendimento precise consultar o ERP, pois não há vínculo na loja online entre os pedidos realizados por dois usuários diferentes.

O app **Pedidos B2B** simplifica este processo, permitindo que qualquer funcionário possa consultar os pedidos feitos pela sua empresa pela própria loja virtual.

![orders VTEX B2B](//images.ctfassets.net/alneenqid6w5/VNG3045dKhkQBgG1ZTxOl/d239fe8c9794fb3aa7fb29a4c0623635/Screenshot_2020-10-20_VTEX_B2B.png)

Essa experiência de autosserviço é possível graças a uma integração via API com o ERP. Com isso, o funcionário pode buscar pedidos por:

- **Web order number:** número identificador do pedido realizado por meio do site da loja.
- **ERP order number:** número identificador do pedido realizado por meio do ERP da loja.
- **My order:** número identificador associado ao cliente que efetuou a compra.

<div class = "alert alert-warning">
  <p>Esta app só está disponível para lojas desenvolvidas usando 
    <a href="https://vtex.com/br-pt/store-framework/">VTEX IO</a>.</p><p>Antes de prosseguir, é preciso <a href = "https://developers.vtex.com/vtex-developer-docs/docs/querying-b2b-order-statuses">instalar e configurar Pedidos B2B</a> na sua loja.</p>
</div>

## Contexto

O cenário B2B apresenta como maior objetivo a experiência do cliente,  já que a fidelidade é essencial para a relação entre empresas. O e-commerce B2B propõe trazer essa mesma satisfação para o ambiente digital, permitindo a integração de serviços manuais com processos digitais. 

Na prática, isso significa simplificar processos para que o cliente consuma seus produtos da maneira mais adequada e conveniente. Ele pode escolher o serviço - site ou televendas - que lhe é mais apropriado na hora de realizar uma compra. Além disso, é possível acessar os pedidos efetuados pelo site, sem depender da mediação de alguém.

No contexto anterior da VTEX, para ter acesso a pedidos feitos por uma empresa, o funcionário devia fazer login na loja com um email próprio. Não era possível ter um acesso mais amplo para os funcionários de uma mesma empresa. Para ter esse resultado, ela precisava criar sua própria aplicação para possibilitar um acesso geral.

## Benefícios

Com intuito de criar uma experiência íntegra e multicanal de serviços para esse cenário, criamos o Pedidos B2B. Ao instalar o aplicativo na sua loja, ele permite que toda a empresa tenha acesso aos pedidos realizados com um login geral. O Pedidos B2B utiliza uma API que consulta o ERP por meio da empresa, não do funcionário. Assim, não há mais um acesso individual aos pedidos, mas da empresa como um todo.

Outro benefício do Pedidos B2B é a integração de pedidos feitos por canais diferentes.  Geralmente o operador de televendas utiliza o ERP para efetuar um pedido. A partir da integração com ERP, o Pedidos B2B permite consultar pedidos feitos tanto pelo site quanto pelo televendas. Dessa forma, o gestor da loja e o cliente  podem verificar e acompanhar os pedidos realizados.

Além desse acesso aos pedidos, o Pedidos B2B permite consultar os diferentes documentos fiscais. Você pode baixar todas as vias dos boletos gerados, XML, GNRE, GARE, DANFE e outros documentos.
