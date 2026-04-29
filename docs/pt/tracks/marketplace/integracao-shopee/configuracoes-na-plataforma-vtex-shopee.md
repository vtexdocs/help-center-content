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

Na integração com a Shopee, a forma de entrega pode seguir a modalidade [FOB](/pt/docs/tutorials/como-funciona-o-frete-quando-o-marketplace-faz-a-entrega) (Free on Board), a **Logística do vendedor** ou o modelo **Shopee full logistics**. Veja a seguir como é o funcionamento de cada uma.

- **FOB (Free on Board):** Nessa modalidade o marketplace é responsável pela entrega e toda cotação de frete é feita do lado da Shopee.

Para definir a estratégia de envio como FOB(Free on board), você precisa executar os seguintes passos:

1. [Cadastrar Doca](/pt/docs/tutorials/gerenciar-doca), associada à Política Comercial usada na integração.  
2. [Cadastrar Estoque](/pt/docs/tutorials/gerenciar-estoque), associado à Doca criada no passo anterior.  
3. Associar a Política Comercial à Doca.  

- **[Logística do vendedor](https://seller.br.shopee.cn/edu/article/25782/Configuracao-da-logistica-do-vendedor):** Nessa modalidade o seller utiliza sua própria logística para cotação e envio de pedidos que contenham produtos maiores do que o atendido pelas entregas da Shopee. Para cadastrar este tipo de logística acese a documentação [Estratégia de envio: Logística do vendedor Shopee](/pt/tracks/marketplace/integracao-shopee/logistica-do-vendedor-shopee)

- **Shopee full logistics:** Nessa modalidade a Shopee **armazena, embala e envia** os produtos a partir de seus centros de distribuição do programa. Para utilizar este tipo de logística acese a documentação [Estratégia de envio: Shopee full logistics](/pt/tracks/marketplace/integracao-shopee/shopee-full-logistics).

