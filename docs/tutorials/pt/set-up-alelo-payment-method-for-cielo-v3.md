---
title: Configurar meio de pagamento Alelo para Cielo V3
id: 4fpnddmyMOAD6F5ixtdmY8
status: PUBLISHED
createdAt: 2020-06-30T13:26:40.843Z
updatedAt: 2023-03-26T22:07:43.484Z
publishedAt: 2023-03-26T22:07:43.484Z
firstPublishedAt: 2020-06-30T14:57:57.023Z
contentType: tutorial
productTeam: Financial
author: 7qy2DBsUp8U5P9lqV0JHfR
slug: configurar-meio-de-pagamento-alelo-para-cielo-v3
legacySlug: configurar-meio-de-pagamento-alelo-para-cielo-v3
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Neste artigo, explicaremos como habilitar o vale alimentação Alelo como um meio de pagamento no Checkout.

<div class="alert alert-info">
<strong>Atenção</strong>: o vale alimentação Alelo é um meio de pagamento aceito apenas entre clientes brasileiros.
</div>

Atualmente, na VTEX, a Cielo é a adquirente que aceita a Alelo como meio de pagamento. Logo, o primeiro passo é habilitar essa adquirente como afiliação de gateway na sua loja. Você pode conferir o tutorial completo de como realizar essa configuração [aqui](https://help.vtex.com/pt/tutorial/configurar-adquirente-cielo--3avjZ7q65WcM02K8K0eeWu?locale=pt "aqui"). 

Em seguida, você pode configurar a condição de pagamento Alelo em si.

Como toda condição de pagamento, a configuração da Alelo também conta com a adição de condições especiais. Contudo, esses critérios são opcionais e a sua ausência não impede o bom funcionamento do vale alimentação. 

Para saber mais detalhes, você pode conferir o tutorial sobre [como configurar cada uma das condições especiais de pagamento](https://help.vtex.com/pt/tutorial/condicoes-especiais--tutorials_456?locale=pt "como configurar cada um das condições especiais de pagamento").  

Agora, acompanhe as instruções:

1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Certifique-se que você se encontra da aba __Condições de pagamento__.
3. Clique no botão verde __“+”__.
4. Na seção “Outro”, clique no botão __“Alelo”__.
5. No topo da página, escreva um __nome__ para essa regra no campo em branco.
6. Clique no botão __“Status”__ para ativar a condição de pagamento.
7. Se necessário, selecione a opção __“Usar Antifraude”__.
8. Do lado direito da tela, defina as __condições especiais__ de pagamento.
9. Clique no botão azul __“Salvar”__ para finalizar.

<div class="alert alert-info">
<strong>Atenção</strong>: lembre-se que as condições especiais de pagamento demoram cerca de 10 minutos para serem aplicadas no Checkout.
</div> 
