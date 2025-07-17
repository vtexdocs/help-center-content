---
title: 'Configurações na plataforma VTEX'
id: 70xqC5uNOggv51Lb3su45w
status: PUBLISHED
createdAt: 2025-03-17T15:05:24.376Z
updatedAt: 2025-07-01T18:35:23.962Z
publishedAt: 2025-07-01T18:35:23.962Z
firstPublishedAt: 2025-03-17T15:36:00.320Z
contentType: trackArticle
productTeam: Channels
slugEN: settings-on-the-vtex-platform-shopee
locale: pt
trackId: 4CaZCzU9ZO1CByH0haZ9hA
trackSlugPT: integracao-shopee
---

Realizado as configurações na Shopee, você deve começar as configurações no admin VTEX. 

## Definir Política comercial para a Shopee

Na VTEX, uma [política comercial](/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) é o que determina o sortimento de produtos, preços e estratégia de envio em um canal de venda. Ou seja, é por meio da política comercial que você define as configurações que serão aplicadas aos seus produtos na Shopee.  

Se as mesmas configurações de catálogo, preço e estratégia de envio da sua loja VTEX forem utilizadas na Shopee, não é preciso [criar uma política comercial](/pt/tutorial/o-que-e-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE) nova, porque uma mesma política comercial pode ser usada para diferentes canais de venda.

Só será necessário [configurar uma nova política comercial](/pt/tutorial/configurando-a-politica-comercial-para-marketplace--tutorials_404) para um marketplace específico, se você tiver algum dos seguintes objetivos:

- Oferecer na Shopee uma seleção diferente de produtos.  
- Disponibilizar uma quantidade de estoque diferente.  
- Enviar preços diferentes para a Shopee.  
- Enviar promoções diferentes para a Shopee.  
- Configurar outras condições de pagamento.  
- Definir uma estratégia de envio diferente.  

Para [contratar políticas comerciais adicionais](/pt/tutorial/contratacao-de-politica-comercial-adicional--61vuFOw4yGh6nwSmkLJL1X), basta preencher o [Formulário de Liberação de Política Comercial](https://docs.google.com/forms/d/e/1FAIpQLSe9qCGB_KM_xsV5e9uNe06JE8tMZrWcv6EuHUOmqTiM8oRW7w/viewform). Em caso de dúvidas, entre em contato com o nosso time de [Suporte](/support?/cultureInfo=pt-br) selecionando a opção **Comercial** e o tipo de solicitação **Criação de Política Comercial.**

<div class="alert alert-info">
Para cada política comercial adicional, é cobrado um valor mensal, seja ela utilizada para integração com marketplaces certificados, parceiros, externos ou VTEX.
</div>

## Definir Estratégia de envio para a Shopee

Na integração com a Shopee, o envio dos produtos é de responsabilidade do próprio marketplace. Todos os pedidos provenientes da Shopee seguem a modalidade [FOB](/pt/tutorial/como-funciona-o-frete-quando-o-marketplace-faz-a-entrega--EY1l6tYW3IUquwwwcQqwQ) (Free on Board), ou seja, a VTEX nãocontrola o valor do frete nem os prazos de entrega.  

Entretanto, você precisa executar os seguintes passos nesta etapa:

1. [Cadastrar Doca](/pt/tutorial/como-cadastrar-doca--7K3FultD8I2cuuA6iyGEiW), associada à Política Comercial usada na integração.  
2. [Cadastrar Estoque](/pt/tutorial/gerenciar-estoque--tutorials_137), associado à Doca criada no passo anterior.  
3. Associar a Política Comercial à Doca.  
