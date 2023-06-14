---
title: 'Criar uma política comercial'
id: 563tbcL0TYKEKeOY4IAgAE
status: PUBLISHED
createdAt: 2019-01-24T20:45:49.369Z
updatedAt: 2022-12-08T14:40:14.268Z
publishedAt: 2022-12-08T14:40:14.268Z
firstPublishedAt: 2019-01-24T22:14:00.848Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slug: criar-uma-politica-comercial
locale: pt
legacySlug: o-que-e-uma-politica-comercial
subcategory: 6J3wx7KM4oysymsWuUACyY
---

[Políticas comerciais](https://help.vtex.com/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) são usadas na VTEX para agrupar configurações de catálogo, preços, promoções, inventário, logística, segmentação de clientes e pagamentos para diferentes canais de venda. Canais de venda podem incluir marketplaces, ecommerce próprio, lojas físicas, ou lojas B2B, por exemplo. 

A seção Políticas Comerciais do seu admin apresenta uma tabela com todas as políticas comerciais já cadastradas. Também é possível filtrar os resultados, fazer uma busca por palavra chave, e ordenar na tabela as políticas comerciais já cadastradas. O ID da política comercial é determinado automaticamente pelo sistema, a partir da ordem cronológica de criação de novas políticas. 

Para [contratar políticas comerciais adicionais](https://help.vtex.com/pt/tutorial/contratacao-de-politica-comercial-adicional--61vuFOw4yGh6nwSmkLJL1X), basta solicitar via ticket em *[Suporte](https://help.vtex.com/pt/support)* selecionando a opção **Comercial** e o tipo de solicitação `Criação de Política Comercial`.

A contratação de política comercial adicional para integrar com [conector nativo](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-conector-nativo-vtex), [conector certificado (parceiro)](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-conector-certificado-parceiro) ou outras lojas VTEX é isenta de taxas.

1. Na seção *Configurações da Loja*, clique em **Políticas comerciais**.    
2. Clique em **Nova Política Comercial**.    
3. Preencha os campos.    
4. Clique em **Salvar**.     

<div class="alert alert-info">
Para definir as configurações de logística aplicadas a essa política comercial, é preciso <a href="https://help.vtex.com/pt/tutorial/how-to-register-a-dock--7K3FultD8I2cuuA6iyGEiW">criar ou editar uma doca</a>, relacionada às transportadoras desejadas, inserindo o ID da política comercial no formulário de cadastro.
</div>

## Campos de preenchimento
- **Nome:** nome que identifica sua política comercial em outros módulos do admin da VTEX.  
- **Coleção**: coleção de produtos cadastrada no catálogo, válida para a política comercial.  
- **Sellers:** caixa de seleção que associa sellers às regras da política comercial.    
- **Código da moeda**: moeda que será aplicada no canal de vendas que segue essa política comercial.   
- **Símbolo da moeda:** símbolo da moeda escolhida, que aparecerá nos preços de produtos no canal de vendas que segue essa política comercial. Este campo é opcional e se for deixado em branco assumirá o símbolo padrão da moeda escolhida.   
- **Casas decimais da moeda:** quantidade de casas decimais que os preços dos produtos podem assumir. Este campo é opcional e se for deixado em branco assumirá o valor padrão da moeda escolhida.   
- **Código do país:** código do país onde o canal de vendas se situa.    
- **Culture info:** idioma selecionado para a política comercial, entre as opções disponíveis para o país selecionado.   
- **TimeZone:** fuso horário aplicado à política comercial seguindo o padrão Tempo Universal Coordenado (UTC).   
- **Ativo:** caixa de seleção para ativar ou inativar a política comercial no seu ambiente VTEX.   
- **Regra condicional:** campo customizável onde é possível definir um critério adicional para a política comercial. Exemplos de regras condicionais incluem limitar o acesso à loja pela política comercial através de um [cluster de clientes](https://help.vtex.com/pt/tutorial/como-criar-um-cluster-de-clientes).  
- **Herdar Catálogo da política comercial:** catálogo de uma política comercial já criada, que será aplicado na política comercial que está sendo cadastrada. Caso as políticas só se diferenciem nos outros campos, mas o catálogo seja o mesmo, sempre que possível marque esse campo para otimizar a performance do sistema.   

## Saiba mais

- [Como funciona uma política comercial](https://help.vtex.com/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV)    
- [Política comercial para marketplace](https://help.vtex.com/pt/tutorial/configurando-a-politica-comercial-para-marketplace--tutorials_404)
- [Cadastrar doca](https://help.vtex.com/pt/tutorial/how-to-register-a-dock--7K3FultD8I2cuuA6iyGEiW)

