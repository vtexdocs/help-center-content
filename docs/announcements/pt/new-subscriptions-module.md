---
title: 'Novo módulo de Assinaturas'
id: 6PfEmqovkZF97AZUp1owdf
status: PUBLISHED
createdAt: 2021-02-02T15:31:07.376Z
updatedAt: 2022-01-03T16:06:38.858Z
publishedAt: 2022-01-03T16:06:38.858Z
contentType: updates
productTeam: Post-purchase
author: 0QBQws7rk0t5Mnu8fgfUv
slug: novo-modulo-assinaturas
locale: pt
legacySlug: novo-modulo-de-assinaturas
announcementImageID: ''
announcementSynopsisPT: 'O módulo de Assinaturas é a solução da VTEX para pedidos recorrentes na sua loja, e está em constante evolução.'
---

<div class="alert alert-info">
  <p>A atualização só afetará lojas que possuem o módulo Assinaturas. Para lojas que não possuíam essa funcionalidade, nada mudará.</p>
</div>

O módulo de Assinaturas é a solução da VTEX para pedidos recorrentes na sua loja, e está em constante evolução. Aprimoramos o módulo para agilizar o desempenho do sistema e entregar funcionalidades novas que melhoram a experiência do consumidor da sua loja. Este artigo detalha todas as mudanças do módulo e o que precisa ser feito na sua loja.

## O que mudou?

As evoluções no módulo incluem:
-   Melhorias na visualização e no gerenciamento de assinaturas na conta de seu consumidor.
-   Mudanças no cálculo da data de ciclo do pedido de assinatura.
-   Mudanças nas rotas de API utilizadas nas integrações externas da sua loja.

Para lojistas que não utilizam as nossas APIs em suas integrações, não é preciso fazer nenhuma configuração do zero ou adaptação, o nosso sistema implementará o novo módulo automaticamente. 

Já para lojistas ou parceiros que consumiam a nossa API de Assinaturas, é preciso implementar as novas rotas, para que suas integrações operem com o novo módulo. Todo o processo de migração será assistido pelo time VTEX, garantindo uma transição suave ao novo módulo. Para saber mais sobre a migração, [confira nossa documentação no Developer Portal.](https://developers.vtex.com/vtex-developer-docs/docs/subscriptions-v3-migration-guide)

### Novas funcionalidades para seu cliente

A melhoria do sistema de assinaturas também trouxe novas funcionalidades para o consumidor final da sua loja. A interface da página __Minha Conta__ que os consumidores acessam no site da sua loja também evoluiu para comportar as seguintes funcionalidades: 

#### Novo detalhamento de assinaturas 
A nossa página de detalhamento de assinatura foi remodelada pensando em melhorar a experiência do consumidor ao reduzir o tempo para localizar informações e realizar tarefas. Além disso, contamos com a nova funcionalidade de adicionar itens a uma assinatura existente.

![img1 subscriptions PT](https://images.ctfassets.net/alneenqid6w5/YTLE4SVoIbfDCdH9BK97s/0578726c45d942f7960c7e3999649627/img1_subscriptions_PT.png)

#### Barra de ações
Adicionamos uma barra de ações para melhorar a comunicação com o usuário sobre o que precisa ser feito ou comunicar eventos importantes sobre a sua assinatura.

![img2 subscriptions PT](https://images.ctfassets.net/alneenqid6w5/4SOJIaVfD2pnRqDK8oChFM/77b61a6259cf558bfa78db8c5ada1f80/img2_subscriptions_PT.png)

#### Adicionar produto à sua assinatura
Agora é possível adicionar um novo item à sua assinatura através da busca dos produtos disponíveis na loja. 

![img3 subscriptions PT](https://images.ctfassets.net/alneenqid6w5/1QLpkpJqU4GmAxG2kQl34s/64249fe1d011fc477d8760f27a783506/img3_subscriptions_PT.png)

#### Criar uma nova assinatura
Adicionamos uma funcionalidade muito aguardada que é a tela de criação de assinaturas. Ela permite configurar uma nova assinatura sem ter que passar pelo checkout e realizar um pedido na hora. Para realizar essa ação, basta clicar no botão __Nova assinatura__, na listagem de assinaturas.

![img4 subscriptions PT](https://images.ctfassets.net/alneenqid6w5/1Olba34z68eZB3VqeGLPvL/8659bfceec1f88773e5871092be90771/img4_subscriptions_PT.png)

### Novo conceito de assinaturas para o sistema
Até então, para o sistema da VTEX, uma assinatura era composta por um SKU, atrelado a uma configuração de compra. Isso permitia que o consumidor da loja assinasse SKUs com endereços de entrega e até mesmo formas de pagamento diferentes – uma evolução em comparação à primeira versão do sistema. 

#### Antes:
![img5 subscriptions PT](https://images.ctfassets.net/alneenqid6w5/36iPClYx89vn03OHhkUfho/4d469f2404f59d76b5ebe67b89e36365/img5_subscriptions_PT.png)
![img6 subscriptions PT](https://images.ctfassets.net/alneenqid6w5/3R0ImpMVwP9C81ndi5oCvg/eb2c0c259c6ffba5c7bd4e7ac0cda841/img6_subscriptions_PT.png)
![img7 subscriptions PT](https://images.ctfassets.net/alneenqid6w5/W44xbs0MAAwYxjyU8Dj4E/cab5768ff5bad6dab10ca2cd5e931c8f/img7_subscriptions_PT.png)

A assinatura para nós agora consiste em uma lista de SKUs e uma determinada configuração de compra. Isso significa que nós retiramos o conceito de Grupos de Assinatura do nosso sistema. Saiba mais no artigo [Como funciona a assinatura](https://help.vtex.com/pt/tutorial/como-funciona-a-assinatura--frequentlyAskedQuestions_4453). O diagrama abaixo demonstra o novo conceito de assinatura:

#### Agora:
![img8 subscriptions PT](https://images.ctfassets.net/alneenqid6w5/1tNo9gQza7gWuDXZPRxQRO/474f3170b2f10977be30172465ffd630/img8_subscriptions_PT.png)

### Data do ciclo da assinatura

O cálculo da próxima data do ciclo de assinatura mudou. Essa alteração permite que o usuário altere a data de realização do seu pedido com mais facilidade. Para acompanhar a mudança, nós desenvolvemos uma [API](https://developers.vtex.com/vtex-developer-docs/reference/cycles) que permite escolher exatamente qual será a próxima data, sem a necessidade de  alterar a frequência da assinatura para que se encaixe na data desejada.

## O que devo fazer?
Lembramos que se sua loja não utiliza as nossas APIs em integrações, não é preciso fazer nenhuma adaptação, a evolução será implementada automaticamente pelo próprio sistema da VTEX. 
Para lojistas ou parceiros que consumiam a nossa API de Assinaturas, vale destacar que todas as rotas anteriores da API de Assinaturas serão substituídas pelas novas, para refletir a evolução do módulo. Todo o processo de migração será assistido pelo time VTEX, garantindo uma transição suave ao novo módulo. Confira nosso [guia de integração com o novo módulo de Assinaturas](https://developers.vtex.com/vtex-developer-docs/docs/subscriptions-v3-migration-guide). 

<div class="alert alert-info">
  Solicite a nova interface de Assinaturas pelo <a href="https://help.vtex.com/pt/tutorial/abrir-chamados-para-o-suporte-vtex--16yOEqpO32UQYygSmMSSAM">suporte</a>. É preciso que a loja esteja de acordo com a instalação do Search of Biggy (<a href="https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3qgT47zY08biLP3d5os3DG">Intelligent Search</a>) para a ativação da nova interface.
  </div>
