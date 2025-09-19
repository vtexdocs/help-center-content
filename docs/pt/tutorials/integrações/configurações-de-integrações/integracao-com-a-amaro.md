---
title: 'Integração com a AMARO'
id: 7615C3U8EHbxbVw82D9pH8
status: PUBLISHED
createdAt: 2023-09-20T21:43:42.533Z
updatedAt: 2024-01-05T19:46:36.030Z
publishedAt: 2024-01-05T19:46:36.030Z
firstPublishedAt: 2023-09-20T22:13:13.268Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: amaro-integration
legacySlug: integracao-com-a-amaro
locale: pt
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

Fundada em 2012, a [AMARO](https://amaro.com/br/pt/) é uma marca brasileira de varejo digital especializada em moda feminina. Desde 2020, a empresa atua como marketplace por meio de uma curadoria de marcas da própria empresa.

![Integração AMARO](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/integra%C3%A7%C3%B5es/configura%C3%A7%C3%B5es-de-integra%C3%A7%C3%B5es/integracao-com-a-amaro_1.png)

A Amaro é agora [conector certificado](/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-conector-certificado-parceiro), disponível para parceria com clientes VTEX. Este guia orienta o seller a configurar a integração, sendo parte do processo no Admin VTEX e parte da AMARO. Para isso, as etapas são as seguintes:

- Configurações de conta na AMARO  
- Configurações no Admin VTEX   
- Envio de informações para AMARO  

## Configurações de conta na AMARO

Para vender seus produtos na AMARO, o seller deve cumprir os seguintes pré-requisitos:  

- Ter uma empresa legalmente constituída.  
- Ter todos os funcionários registrados.  
- Ter capacidade produtiva interna ou por meio de contratação de terceiros identificados.  
- Atender aos requisitos do Código de Conduta da AMARO.  

Cumprindo os requisitos citados, o seller deverá entrar em contato com o time de Marcas Parcerias AMARO cadastrando-se no [formulário](https://nocodb.amaro.pro/dashboard/?utm_source=vtex&utm_medium=logo&utm_campaign=hunting#/nc/form/a54bc346-95a0-4497-aceb-5137df1b09c8), ou através do email [sellers@amaro.com](sellers@amaro.com). Com isso, os departamentos de Marcas Parceiras e Compliance avaliarão a solicitação.  

Uma vez aprovada a parceria, o time AMARO disponibilizará a URL do Seller Center AMARO.  

## Configurações no Admin VTEX  

No Admin VTEX, é necessário realizar as seguintes etapas:  

- Definir política comercial  
- Criar novo AppKey e AppToken  
- Criar ID do afiliado  

### Definir política comercial  

A [política comercial](/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) é o que determina o sortimento de produtos, preços e estratégia de envio da sua loja VTEX em um canal de venda. Para vender na AMARO, o seller deverá [configurar uma política comercial](/pt/tutorial/configurando-a-politica-comercial-para-marketplace/) para marketplace com um sortimento inicial de produtos, contendo o mínimo de cinco itens com fotografia, preços e estoque disponíveis. 
Não existe cobrança para a contratação de [políticas comerciais adicionais](/pt/tutorial/contratacao-de-politica-comercial-adicional--61vuFOw4yGh6nwSmkLJL1X) para integrar sua loja VTEX com conectores nativos, conectores certificados, tais como a AMARO, ou outras lojas VTEX.  

### Criar novo AppKey e AppToken  

A chave de integração, chamada de AppKey, é o que possibilita o fluxo de envio e atualização de informações entre sua loja VTEX e a AMARO. Somente o [usuário Titular da conta (owner)](/pt/tracks/contas-e-permissoes--5PxyAgZrtiYlaYZBTlhJ2A/56Bd0KpwbvAji1aFs94xdA?&utm_source=autocomplete) tem permissão para [criar um AppKey e AppToken](https://developers.vtex.com/vtex-rest-api/docs/getting-started-authentication), e a opção só é visível no Admin VTEX para este usuário.  

Para configurar uma nova chave, siga os passos abaixo:  

1. No Admin VTEX, em Configurações da conta, clique em Chaves de aplicação.  
2. Clique em Gerenciar minhas chaves.  
3. Clique em Gerar chave.  
4. Preencha o campo Rótulo com um nome para o novo AppKey.  
5. Clique em Adicionar perfis e selecione os perfis desejados.  
6. Clique em Gerar.  

> ❗ O *AppToken*, só aparece para o usuário esta única vez, não é possível recuperar a informação pelo sistema posteriormente. Portanto, tenha a certeza de guardá-lo em local seguro.

### Criar ID do afiliado  

O [afiliado](/pt/tutorial/o-que-e-afiliado--4bN3e1YarSEammk2yOeMc0) é o identificador de um seller VTEX em um marketplace, sendo necessário que o seller tenha um ID do afiliado diferente para cada marketplace onde venda seus produtos. Isso significa que, para integrar com a AMARO, é preciso [configurar um afiliado](/pt/tutorial/como-configurar-afiliado--tutorials_187) exclusivo.   

Para criar um novo ID do afiliado, siga os passos abaixo:  

1. No Admin VTEX, acesse __Configurações da loja > Pedidos > Configurações__, ou digite __Pedidos__ na barra de busca no topo da página e selecione *Configurações da loja / Pedidos*.  
2. Na aba Afiliados, clique em +Novo afiliado.
3. Preencha os campos da tela, descritos abaixo, e em seguida clique em Salvar.
  - __Nome:__ designação do novo afiliado.  
  - __ID:__ código identificador do afiliado, deve ser composto de três consoantes, sejam elas repetidas ou não. Vogais não são aceitas. A sugestão é usar MRR para a AMARO.  
  -__Política Comercial:__ número da política comercial que definirá o sortimento de catálogo, preço e estratégia de envio dos itens utilizados na integração com a AMARO.  
  - __E-mail de Follow Up:__ endereço eletrônico que receberá notificações sobre a integração.  
  - __Endpoint de Search:__ URL da aplicação que receberá notificações de produtos, preço, estoque, dentre outras. O seller será informado sobre este dado pela AMARO.  
  - __Versão do Endpoint de Search:__ só existe a opção padrão 1.x.x.
Deixe desmarcada a flag Usar meu meio de pagamento.  

## Envio de informações para AMARO  

Uma vez concluídas as configurações na plataforma VTEX, para dar continuidade à integração é necessário enviar os dados de Informações do Admin VTEX para a AMARO. O contato para onde essas informações devem ser enviadas é fornecido pelos próprios parceiros.  

### Informações do Admin VTEX  

Alguns dos dados a serem enviados são encontrados no seu Admin VTEX, são eles:  

-__Nome da conta:__ identificador da sua empresa no sistema da VTEX. Para encontrá-lo, acesse o Admin VTEX em Configurações da conta > Conta > Geral.
-__Dados de autenticação do sistema:__ *appToken e appKey* definidos na etapa [Criar novo *AppKey e AppToken*](#criar-novo-appkey-e-apptoken).
-__ID do afiliado:__ identificador configurado na etapa [Criar ID do afiliado](#criar-id-do-afiliado).
__- Política comercial:__ número da política comercial determinada na etapa [Definir política comercial](#definir-politica-comercial).
-__ID do Seller:__ o valor a ser informado é o número 1. Para encontrá-lo, acesse o Admin no módulo *Marketplace > Sellers > Gerenciamento > ID do Seller*.  

Uma vez que o seller tenha reunido esses dados, deverá enviá-los para o contato informado pelo time de Marcas Parceiras da AMARO. Desta forma,a integração será concluída pelo marketplace.  

> ℹ️ Após a primeira conexão com o seller center AMARO e verificação inicial do sucesso da integração, o time de Marcas Parceiras AMARO irá orientar o seller a adicionar os demais produtos na política comercial para a etapa final de curadoria e exibição dos itens no amaro.com e aplicativos AMARO.

