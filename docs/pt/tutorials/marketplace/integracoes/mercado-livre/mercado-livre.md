---
title: 'Mercado Livre'
id: 3cKjnItfjyqauWWcMkOqC0
status: PUBLISHED
createdAt: 2018-09-06T15:36:57.140Z
updatedAt: 2026-11-12T18:47:00.000Z
publishedAt: 2022-06-07T22:58:01.177Z
firstPublishedAt: 2018-09-17T15:45:39.870Z
contentType: tutorial
productTeam: Channels
author: 1nsS1IgG3WWQ4cA8e2qsw6
slugEN: mercado-libre
legacySlug: como-funciona-a-integracao-do-mercado-livre
locale: pt
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
categoryCover: true
---

O [Mercado Livre](https://www.mercadolivre.com.br/) é um dos líderes do e-commerce na América Latina, oferecendo soluções de comércio eletrônico para que pessoas e empresas possam comprar, vender, pagar, anunciar e enviar produtos por meio da internet.

Sua operação está presente nos seguintes países: Argentina, Brasil, Chile, Colômbia, México, Uruguai e Venezuela.

Antes de começar, [crie uma conta no Mercado Livre](https://vendedores.mercadolivre.com.br/como-criar-uma-conta-no-mercado-livre/) na [Central de Vendedores](https://vendedores.mercadolivre.com.br/). Com a conta criada, siga os passos de **Configure a integração** para conectar a loja.

> ⚠️ Confira a [arquitetura da conta](/pt/docs/tutorials/erro-de-configuracao-de-lojas-guarda-chuva) antes de integrar. A configuração de loja guarda-chuva, com várias lojas oficiais no mesmo usuário do Mercado Livre, impede a importação dos pedidos.

## O que a integração oferece

Além de sincronizar produtos, preços, estoque e pedidos, a integração oferece estas funcionalidades:

| Funcionalidade | Descrição |
|---|---|
| [Migrar anúncios no Mercado Livre](/pt/docs/tutorials/migrar-anuncios-no-mercado-livre) | Para sellers que estão migrando de plataforma de ecommerce: como levar os anúncios já cadastrados no Mercado Livre para a VTEX. |
| [Notas fiscais no Mercado Livre](/pt/docs/tutorials/notas-fiscais-do-mercado-livre) | Consultar e fazer download das notas fiscais geradas na plataforma do Mercado Livre. |
| [Publicação de produtos Mercado Livre](/pt/docs/tutorials/match-de-anuncios-mercado-livre) | Avalia os anúncios do seller e sugere oportunidades de vínculo com o catálogo do Mercado Livre. |
| [Central de Promoções Mercado Livre](/pt/docs/tutorials/central-de-promocoes-mercado-livre) | Lista as promoções que o Mercado Livre oferece para os produtos do catálogo. |
| [Como configurar loja guarda-chuva na integração com o Mercado Livre?](/pt/docs/tutorials/como-configurar-loja-guarda-chuva-na-integracao-com-o-mercado-livre) | Cadastrar produtos em lojas oficiais do Mercado Livre, segmentando por categoria, marca ou outro critério. |
| [Como configurar múltiplas contas na integração com o Mercado Livre?](/pt/docs/tutorials/como-configurar-multiplas-contas-na-integracao-com-o-mercado-livre) | Usar o mesmo catálogo em duas lojas do Mercado Livre e gerenciar os pedidos em um só lugar, o [OMS](/pt/category/gerenciamento-de-pedidos--2663q96EyQuYc20y0yYAEE). |
| [Erros de integração de estoque com o Mercado Livre](/pt/troubleshooting/erros-de-integracao-de-estoque-com-o-mercado-livre) | Erros mais comuns de integração de estoque e como resolvê-los. |
| [Erros de integração de pedidos do Mercado Livre](/pt/troubleshooting/erros-de-integracao-de-pedidos-do-mercado-livre) | Erros mais comuns de integração de pedidos e como resolvê-los. |
| [Como funciona o carrinho com múltiplos itens no Mercado Livre?](/pt/docs/tutorials/como-funciona-o-carrinho-com-multiplos-itens-no-mercado-livre) | Por que alguns pedidos com vários produtos aparecem com dois IDs no Admin VTEX e outros com um ID. |
| [Mercado Livre: Compatibilidade automobilística](/pt/docs/tutorials/mercado-livre-compatibilidade-automobilistica) | Como corrigir erros de integração de produtos da categoria de autopeças. |
| [Campos customizáveis de produto para Mercado Livre](/pt/docs/tutorials/campos-customizaveis-de-produto) | Customizar título, modelo de envio, loja oficial, descrição e frete grátis. |

As dúvidas mais frequentes estão em [Mercado Livre: FAQ](/pt/docs/tutorials/mercado-livre-faq).

## Como a integração mantém as informações atualizadas

Depois de conectar a loja, a integração mantém pedidos, produtos, preços, estoque e pontos de retirada atualizados no Mercado Livre. O fluxo está dividido em:

1. [Pedidos](#1-pedidos)
2. [Produtos](#2-produtos)
3. [Preços](#3-precos)
4. [Estoque](#4-estoque)
5. [Pontos de Retirada](#5-pontos-de-retirada)
6. [Navegue pela documentação do Mercado Livre](#navegue-pela-documentacao-do-mercado-livre)

## 1. Pedidos

Todos os [pedidos](/pt/docs/tracks/o-que-e-um-pedido-na-vtex) realizados no Mercado Livre serão enviados para a plataforma VTEX, cada pedido com um status próprio conforme tabela abaixo. Para saber mais sobre os status dos pedidos na VTEX, leia o artigo [Fluxo e status de pedido](/pt/docs/tutorials/fluxo-e-status-de-pedidos).

| Status na plataforma VTEX | Resposta do Mercado Livre | Descrição da resposta do Mercado Livre |
| ---------- | ---------- | ---------- |
| Pronto para manuseio | Ready-for-handing | Status que indica que é preciso iniciar o manuseio, preparar a nota fiscal e rastreamento do pedido. Nesse status é esperada a confirmação baixa na reserva do item. Em geral, é nesse momento que a integração com o [ERP](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-guide) é feita, mas é possível realizar a ação manualmente pelo gerenciamento de pedidos. O pedido só seguirá o fluxo quando essa confirmação for realizada |
| Preparando entrega | Handling | Itens são reservados para evitar vendas de itens indisponíveis. O pedido ficar em manuseio, aguardando notificações de fatura (invoice ou nota fiscal), geralmente vindas do ERP |
| Faturado | Invoiced | Fluxo do pedido finalizado com sucesso e o pedido foi enviado |
| Enviado | Shipped | Pedidos que já foram despachados para entrega |
| Entregue | Delivered | Pedidos entregues ao seu destinatário final |
| Cancelado | Cancelled | Pedidos que foram cancelados |
| Carência para cancelamento | Window-to-cancel | Status do tempo de cancelamento do cliente. Após a aprovação do pagamento, o cliente tem 30 minutos (definido como padrão nas [Configurações Gerais](/pt/docs/tutorials/configuracoes-gerais/) do módulo de Gerenciamento de Pedidos) para realizar seu cancelamento. Nesse período, o estorno do pedido é realizado automaticamente |

Você deve possuir um [perfil de acesso](/pt/docs/tutorials/perfis-de-acesso) *OMS - Full Access* para poder realizar ações no fluxo dos pedidos. Em cada status do fluxo de pedidos na VTEX, você receberá uma resposta diferente do Mercado Livre. Só quando os pedidos com o status `Paid` são identificados no Mercado Livre, eles são integrados na VTEX.

O ID do pedido usado no Mercado Livre é diferente do que você vai encontrar na VTEX. Para entender a lógica por trás da correspondência desses IDs, leia o artigo [Como funciona o carrinho com múltiplos itens no Mercado Livre](/pt/docs/tutorials/como-funciona-o-carrinho-com-multiplos-itens-no-mercado-livre).

### Faturando o pedido

De acordo com a  [configuração logística](/pt/docs/tutorials/configurar-logistica-para-o-mercado-livre), você poderá emitir a nota diretamente no marketplace, ou através do seu [ERP](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-guide) integrado com a VTEX. Existem dois tipos de configurações logísticas:

- [Pedidos ME1](#pedidos-me1)
- [Pedidos ME2](#pedidos-me2)

#### Pedidos ME1

Nos pedidos da [modalidade ME1](/pt/docs/tutorials/configurar-logistica-para-o-mercado-livre#mercado-envios-1-me1), quando um pedido novo chega à plataforma VTEX, o seller precisa cuidar de todas as mudanças de status na plataforma VTEX para que sejam refletidas automaticamente no Mercado Livre. Para isso, deve utilizar a rota de API [POST Order Invoice Notification](https://developers.vtex.com/vtex-rest-api/reference/invoicenotification), a VTEX carregará a nota fiscal do Mercado Livre e enviará para o ERP.

Os pedidos na modalidade ME1 não passam pelo status de `Invoiced`. O status do pedido será alterado para `Shipped` quando o seller informar o `trackingNumber`, atualizando no OMS.

Para isso, utilize a rota de API [POST Order invoice notification](https://developers.vtex.com/vtex-rest-api/reference/invoice#invoicenotification) e preencha todos os campos obrigatórios e o campo `embeddedInvoice`.

A única ação na interação que não se reflete na plataforma do Mercado Livre é o cancelamento de pedido na VTEX, dado que porque a integração não consegue cancelar no Mercado Livre.

#### Pedidos ME2

Nos pedidos na [modalidade ME2](/pt/docs/tutorials/configurar-logistica-para-o-mercado-livre#mercado-envios-2-me2), o ERP enviará as informações do pedido para a VTEX, que por sua vez enviará para o Mercado Livre. Porém, há diferença na emissão de nota entre os tipos logísticos do ME2, são eles:

- Nos tipos logísticos [Coletas](/pt/docs/tutorials/configurar-logistica-para-o-mercado-livre#crossdocking-coletas) ou [Places](/pt/docs/tutorials/configurar-logistica-para-o-mercado-livre#places), você precisará emitir a nota obrigatoriamente ou no Mercado Livre, ou no seu ERP.
- No tipo logístico [Mercado Envios Full](/pt/docs/tutorials/configurar-logistica-para-o-mercado-livre#mercado-envios-full), você deverá emitir a nota no faturador do Mercado Livre.
- No tipo logístico [Flex](/pt/docs/tutorials/configurar-logistica-para-o-mercado-livre#flex) ou [Drop Off](/pt/docs/tutorials/configurar-logistica-para-o-mercado-livre#drop-off), você poderá emitir a nota no faturador do ML ou no seu ERP. A nota não é obrigatória.

Nos pedidos da modalidade ME2, a plataforma do Mercado Livre é responsável por alterar o status do pedido para `Shipped` e `Delivered`.

Se o seller utilizar o [faturador do Mercado Livre](https://www.mercadolivre.com.br/emitir-nota-fiscal/) configurado para emitir notas fiscais dos anúncios, quando ocorrer uma venda, a integração irá importar o pedido junto com a nota fiscal emitida no Mercado Livre para a VTEX. Nesses casos, será possível também imprimir a etiqueta de envio na VTEX.

No tipo logístico Mercado Envios Full, sempre será necessário configurar o faturador no Mercado Livre porque é o próprio [marketplace quem fatura o pedido](/pt/docs/tutorials/configurar-logistica-para-o-mercado-livre#consultar-as-notas-fiscais-do-mercado-livre-por-api). Para os demais tipos logísticos do modo ME2, é opcional.

Caso o seller não tenha o faturador configurado no Mercado Livre para imprimir a etiqueta, será necessário [faturar no ERP](https://developers.vtex.com/docs/erp-integration-set-up-order-processing) e enviar a nota fiscal para VTEX para que a integração a envie para Mercado Livre. Utilize a rota de API [POST Order invoice notification](https://developers.vtex.com/vtex-rest-api/reference/invoice#invoicenotification) e preencha o campo `embeddedInvoice`, dessa forma o Mercado Livre liberará a etiqueta de envio.

Entretanto, para alterar o status dos pedidos para `Invoiced`, você deve preencher os campos obrigatórios dos ERPs e o campo `embeddedInvoice` levando em consideração o tipo de logística configurada.

Em pedidos com o tipo logístico Coleta e Places, você deve preencher os campos os campos `invoiceKey` e `cfop`.

## 2. Produtos

Os [produtos](/pt/docs/tracks/produtos-definicao-de-conceito) são os itens vendidos na sua loja, que fazem parte de uma [categoria](/pt/docs/tracks/categorias-definicao-de-conceito) cadastrada no seu [Catálogo VTEX](/pt/docs/tracks/catalogo-definicao-de-conceito). Para enviar os produtos cadastrados no seu catálogo para o Mercado Livre, você precisará fazer o [mapeamento de categorias, atributos e variações](/pt/docs/tutorials/mapear-categorias-e-atributos-dos-produtos-para-o-mercado-livre-mapper).

Qualquer mudança feita em seus produtos pelo admin VTEX em *PRODUTO > Catálogo > Produtos e SKUs* ou pela integração com o [ERP](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-import-products) da sua loja será atualizada automaticamente no Mercado Livre.

Cada categoria de produtos anunciados no Mercado Livre possui atributos que podem ser obrigatórios ou não. Quanto mais atributos preenchidos no Mercado Livre seu produto tiver, melhor rankeado ele será no marketplace.

Os produtos precisam ter os seguintes campos na plataforma VTEX marcados para serem integrados:

- **Exibir no site**
- **Mostrar produto esgotado**
- **Política comercial**

No campo **Política comercial**, você deverá marcar a opção correspondente à [política comercial](/pt/docs/tutorials/configurar-politica-comercial-para-o-mercado-livre) vinculada ao Mercado Livre.

> ℹ️ Para acrescentar novas imagens em um anúncio que já existe no Mercado Livre, você precisará fazer todas as mudanças direto no painel do próprio marketplace. O Mercado Livre só aceita 12 imagens por produto sem variação, e até 10 imagens por variação.

## 3. Preços

Os preços são enviados pela primeira vez junto com o primeiro envio de produtos durante a integração. A partir disso, os preços dos anúncios no Mercado Livre são atualizados automaticamente, sempre que há alguma alteração de preço na plataforma VTEX.

Para cada SKU, a integração envia o [preço fixo](/pt/docs/tracks/preco-fixo-definicao-de-conceito) que foi configurado na [política comercial](/pt/docs/tutorials/configurar-politica-comercial-para-o-mercado-livre) associada à integração. 

### Promoções

O Mercado Livre não permite promoções customizadas e a VTEX não repassa promoções customizadas. Para acessar uma promoção disponível, acessar a [Promoções do Mercado Livre](/pt/docs/tutorials/central-de-promocoes-mercado-livre).

Diminuir o preço não vai aparecer como promoção no Mercado Livre e não vai trazer o valor de uma promoção.

## 4. Estoque

O nível de  estoque de um produto é enviado pela primeira vez junto com o primeiro envio de produtos durante a integração. A partir disso, os estoques dos anúncios no Mercado Livre são atualizados automaticamente, sempre que há alguma alteração de estoque na plataforma VTEX. 

Para visualizar o estoque dos produtos enviados, acesse no Admin *MARKETPLACE > Integrações > Estoque*. Utilize o campo de busca e procure pelo código do SKU, caso queira encontrar por um produto específico. 

Em caso de dúvida, veja nossa documentação sobre [Erros de falta de estoque na integração com o Mercado Livre](/pt/troubleshooting/erros-de-integracao-de-estoque-com-o-mercado-livre) caso tenha alguma dúvida.

## 5. Pontos de Retirada

A etapa de Pontos de Retirada está disponível somente para clientes que [ativaram e configuraram seus pontos de retirada com a integração do Mercado Livre](/pt/docs/tutorials/configurar-logistica-para-o-mercado-livre). No Mercado Livre, o cliente terá a opção de selecionar os pontos de retirada cadastrados para retirar o pedido.

## Navegue pela documentação do Mercado Livre

A documentação da integração está organizada pelas etapas da jornada do seller: entender a integração, configurá-la, operar no dia a dia e resolver problemas.

1. **Entenda a integração:** esta página é a capa do Mercado Livre. Ela explica o que a integração sincroniza e lista [o que a integração oferece](#o-que-a-integracao-oferece).
2. **Configure a integração:** vá do zero ao go-live seguindo os passos na ordem em que aparecem, do [Tipos de anúncio: Clássico e Premium](/pt/docs/tutorials/tipos-de-anuncio-classico-e-premium) até a [publicação de produtos](/pt/docs/tutorials/match-de-anuncios-mercado-livre). Se você já vende no Mercado Livre por outra plataforma, veja também [Migrar anúncios no Mercado Livre](/pt/docs/tutorials/migrar-anuncios-no-mercado-livre).
3. **Envie e gerencie produtos e anúncios:** publique produtos, melhore a qualidade dos anúncios e mantenha o catálogo atualizado. Comece por [Gerenciamento de Anúncios: moderação e qualidade dos anúncios do Mercado Livre](/pt/docs/tutorials/gerenciamento-de-anuncios-moderacao-e-qualidade-dos-anuncios-do-mercado) e [Campos customizáveis de produto para Mercado Livre](/pt/docs/tutorials/campos-customizaveis-de-produto).
4. **Estoque, preço e frete:** acompanhe estoque, preços, promoções e modalidades de envio no dia a dia. Veja [Precificação inteligente do Mercado Livre](/pt/docs/tutorials/precificacao-inteligente-mercado-livre), [Central de Promoções Mercado Livre](/pt/docs/tutorials/central-de-promocoes-mercado-livre) e [Mercado Livre Envios](/pt/docs/tutorials/mercado-livre-envios).
5. **Pedidos e operação:** entenda o fluxo dos pedidos e das notas fiscais depois da venda. Veja [Como funciona o carrinho com múltiplos itens no Mercado Livre?](/pt/docs/tutorials/como-funciona-o-carrinho-com-multiplos-itens-no-mercado-livre) e [Notas fiscais do Mercado Livre](/pt/docs/tutorials/notas-fiscais-do-mercado-livre).
6. **Recursos avançados:** configure cenários de escala, como múltiplos estoques e múltiplas lojas oficiais. Veja [Alocação de estoque no Mercado Livre](/pt/docs/tutorials/alocacao-de-estoque-no-mercado-livre) e [Erro de configuração de lojas guarda chuva](/pt/docs/tutorials/erro-de-configuracao-de-lojas-guarda-chuva).
7. **Problemas e suporte:** resolva falhas a partir do sintoma. Consulte [Mercado Livre: FAQ](/pt/docs/tutorials/mercado-livre-faq), [Erros de integração de pedidos do Mercado Livre](/pt/troubleshooting/erros-de-integracao-de-pedidos-do-mercado-livre), [Erros de integração de estoque com o Mercado Livre](/pt/troubleshooting/erros-de-integracao-de-estoque-com-o-mercado-livre) e [Meu anúncio não é exibido no Mercado Livre](/pt/troubleshooting/meu-anuncio-nao-e-exibido-no-mercado-livre).
