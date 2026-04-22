---
title: 'Configurações na plataforma VTEX'
id: 70xqC5uNOggv51Lb3su45w
status: PUBLISHED
createdAt: 2025-03-17T15:05:24.376Z
updatedAt: 2025-08-25T16:49:58.194Z
publishedAt: 2025-08-25T16:49:58.194Z
firstPublishedAt: 2025-03-17T15:36:00.320Z
contentType: trackArticle
productTeam: Channels
slugEN: settings-on-the-vtex-platform-shopee
locale: pt
trackId: 4CaZCzU9ZO1CByH0haZ9hA
trackSlugEN: integracao-shopee
order: 2
---

Realizadas as configurações na Shopee, você deve começar as configurações no admin VTEX. 

## Definir Política comercial para a Shopee

Na VTEX, uma [política comercial](/pt/docs/tutorials/como-funciona-uma-politica-comercial) é o que determina o sortimento de produtos, preços e estratégia de envio em um canal de venda. Ou seja, é por meio da política comercial que você define as configurações que serão aplicadas aos seus produtos na Shopee.  

Se as mesmas configurações de catálogo, preço e estratégia de envio da sua loja VTEX forem utilizadas na Shopee, não é preciso [criar uma política comercial](/pt/docs/tutorials/criar-uma-politica-comercial) nova, porque uma mesma política comercial pode ser usada para diferentes canais de venda.

Só será necessário [configurar uma nova política comercial](/pt/docs/tutorials/configurando-a-politica-comercial-para-marketplace) para um marketplace específico, se você tiver algum dos seguintes objetivos:

- Oferecer na Shopee uma seleção diferente de produtos.  
- Disponibilizar uma quantidade de estoque diferente.  
- Enviar preços diferentes para a Shopee.  
- Enviar promoções diferentes para a Shopee.  
- Configurar outras condições de pagamento.  
- Definir uma estratégia de envio diferente.  

Para [contratar políticas comerciais adicionais](/pt/docs/tutorials/contratacao-de-politica-comercial-adicional), basta preencher o [Formulário de Liberação de Política Comercial](https://docs.google.com/forms/d/e/1FAIpQLSe9qCGB_KM_xsV5e9uNe06JE8tMZrWcv6EuHUOmqTiM8oRW7w/viewform). Em caso de dúvidas, entre em contato com o nosso time de [Suporte](https://supporticket.vtex.com/support) selecionando a opção **Comercial** e o tipo de solicitação **Criação de Política Comercial.**

> ℹ️ Para cada política comercial adicional, é cobrado um valor mensal, seja ela utilizada para integração com marketplaces certificados, parceiros, externos ou VTEX.

## Definir Estratégia de envio para a Shopee

Na integração com a Shopee, a forma de entrega pode seguir a modalidade [FOB](/pt/docs/tutorials/como-funciona-o-frete-quando-o-marketplace-faz-a-entrega) (Free on Board), a **logística do vendedor** ou o modelo **Full Shopee**, operado por meio da **Shopee FULL logistics**.  

Veja a seguir como é o funcionamento de cada uma.

- **FOB (Free on Board):** Nessa modalidade o marketplace é responsável pela entrega e toda cotação de frete é feita do lado da Shopee.

- **[Logística do vendedor](https://seller.br.shopee.cn/edu/article/25782/Configuracao-da-logistica-do-vendedor):** Nessa modalidade o seller utiliza sua própria logística para cotação e envio de pedidos que contenham produtos maiores do que o atendido pelas entregas da Shopee.

- **Shopee full logistics:** Nessa modalidade a Shopee realiza **armazenagem, embalagem e envio** dos produtos a partir dos centros de distribuição do programa Full Shopee. A integração com a VTEX permite que **os pedidos** realizados nesse modelo **sejam integrados ao seu Admin VTEX**, junto com os demais canais. Requisitos de elegibilidade da loja, dos SKUs e o passo a passo no painel Full são definidos e atualizados pela Shopee. Para uma visão geral do programa, consulte o material oficial [Fulfillment da Shopee](https://seller.br.shopee.cn/edu/article/23197/Fulfillment-da-Shopee).

Para definir a estratégia de envio, você precisa executar os seguintes passos:

1. [Cadastrar Doca](/pt/docs/tutorials/gerenciar-doca), associada à Política Comercial usada na integração.  
2. [Cadastrar Estoque](/pt/docs/tutorials/gerenciar-estoque), associado à Doca criada no passo anterior.  
3. Associar a Política Comercial à Doca.  

Se a estratégia escolhida é **FOB,** o seller concluiu essa etapa. Se você utiliza **Shopee full logistics,** conclua também as etapas descritas em [Shopee full logistics](#shopee-full-logistics). Caso a estratégia escolhida seja **Logística do vendedor,** o seller precisa [cadastrar sua logística](#cadastrando-logistica-do-vendedor-na-shopee) na Shopee.

### Shopee full logistics

O modelo **Shopee full logistics** é indicado para sellers que já possui o nodelo configurado na Central do Vendedor da Shopee e desejam que os pedidos desse fluxo **integrem na VTEX**.

**Etapa na Shopee**

- Cumpra os **pré-requisitos** do programa para loja e produtos, conforme a documentação [Fulfillment da Shopee](https://seller.br.shopee.cn/edu/article/23197/Fulfillment-da-Shopee) disponível na Central do vendedor da Shopee.
- Realize as configurações na Central do vendedor Shopee.

**Etapa na VTEX**

- Garanta que a **Doca**, o **Estoque** e a **Política comercial** usados na integração com a Shopee estejam configurados conforme os passos descritos [acima](#definir-estrategia-de-envio-para-a-shopee).  
-  No **Admin VTEX**, acesse **Aplicativos > Shopee** e configure a integração com **Shopee full logistics** conforme as opções exibidas.

> A funcionalidade está disponível somente na versão 3.X, para utilizá-la mantenha o aplicativo atualizado pela [VTEX App Store](https://apps.vtex.com/). Em caso de dúvida sobre elegibilidade ou operação no Full Shopee, consulte o suporte ou a central de ajuda da Shopee.

### Cadastrando Logística do vendedor na Shopee

Para utilizar o sistema de **Logística do vendedor,** o seller precisa executar os seguintes passos:

**Etapa na Shopee**

1. Preencha o [formulário](https://docs.google.com/forms/d/e/1FAIpQLSeuTu387lsBtah_tEqoz_L49egBabrZGhcSUddsw_Hip-KTeQ/viewform) de autorização da Shopee.  
2. Após autorizado pela Shopee, preencha a **Tabela contingência.**
3. Ative o **Modelo logístico.**

**Etapa na VTEX**

Com a configuração na Shopee devidamente realizada, siga os passos seguintes:

1. Vá em **Admin VTEX > Apps > Shopee** 
2. Clique no botão `Conectar Logística do vendedor Shopee`.
3. Clique no botão `Autorizar logística na VTEX`.

