---
title: 'Gerenciar Doca'
id: 7K3FultD8I2cuuA6iyGEiW
status: PUBLISHED
createdAt: 2017-08-03T14:22:38.666Z
updatedAt: 2024-11-05T17:51:06.459Z
publishedAt: 2024-11-05T17:51:06.459Z
firstPublishedAt: 2017-08-03T14:25:42.704Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: managing-loading-docks
locale: pt
legacySlug: como-cadastrar-doca
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---

A doca é uma das etapas logísticas da sua loja. Ela é um ponto intermediário entre o estoque e a transportadora, funcionando como área de escoamento de produtos. As docas recebem itens vindos de estoques ou centros de distribuição, e entrega às transportadoras para que a entrega seja feita ao destinatário final. 

<div class="alert alert-info">
Para saber mais sobre o que é uma doca para a VTEX, consulte o artigo de <a href="https://help.vtex.com/pt/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj">Doca</a>.
</div>

Este artigo contém as informações necessárias para:

* [Cadastrar uma nova doca](#cadastrar).
* [Preencher os campos de cadastro e configurar a escolha de doca.](#campos-de-cadastro)
* [Editar uma doca existente](#editar).
* [Excluir uma doca.](#excluir)

É importante saber que para ter uma doca configurada corretamente é preciso: criar a doca, preencher os campos de cadastro (que determinaram horário de funcionamento, prioridade), e também associar a doca a [política comercial](/pt/tutorial/o-que-e-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE), ao estoque e a [política de envio](/pt/tutorial/politica-de-envio--tutorials_140?&utm_source=autocomplete). 

<div class="alert alert-warning">
A ordem de cadastro sugerida na plataforma VTEX para o funcionamento esperado do sistema logístico é:<p><ul><li><a href="https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140">Política de envio</a></li><li><a href="https://help.vtex.com/pt/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj">Doca</a></li><li><a href="https://help.vtex.com/pt/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb">Estoque</a></li></ul></p>
</div>

## Cadastrar

Para cadastrar uma nova doca, no menu esquerdo do Admin VTEX:

1. No Admin VTEX, acesse **Envio > Estratégia de Envio** ou digite *Estratégia de envio* na barra de busca no topo da página.  
2. Vá na aba **Docas** e clique no botão `Criar Doca`.  
3. Preencha os [campos de cadastro](#campos-de-cadastro) e clique em `Salvar`.  

## Campos de cadastro

Os campos necessários para criar uma nova doca são:

* **Nome**: o nome da doca.
* **ID**: campo identificador da doca. Se o campo não for preenchido, será criado automaticamente.
* **[Políticas de envio ](/pt/tutorial/politica-de-envio--tutorials_140)e [Política comercial:](/pt/tutorial/o-que-e-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE)** selecione a política de envio e política comercial que atendem a doca. É importante ressaltar que ambas políticas devem ter sido cadastradas anteriormente.
* **Prioridade e adicional de tempo:**
    * **Tempo de custo**: tempo que será considerado no cálculo do frete, é o tempo que o produto leva pra chegar na doca. Preencha com o número de dias, horas e minutos.
    * **Overhead de tempo de custo**: tempo que será usado para escolher uma doca quando duas ou mais docas apresentam o mesmo tempo de custo. Não é considerado no cálculo de frete. Preencha com o número de dias, horas e minutos.
    * **Prioridade**: valor para desempate na seleção da doca. Esse campo deve ser preenchido selecionando um valor na barra numérica.
* **Integrações**: utilizado para integrar um software externo de WMS (warehouse management system) ao fluxo de processamento de pedidos.
* **Endereço**: endereço da doca cadastrada. Preencha os campos com País, código postal, rua, número, complemento, bairro, estado e cidade.

### Desempate e escolha da doca

É possível configurar qual doca terá a preferência no envio às transportadoras, ao manipular alguns critérios no cadastro. Há três campos das configurações de doca que são utilizados pela plataforma para a escolha da doca. São os campos de:

* **Tempo de custo**: quando existe mais de uma doca, o sistema utiliza esse campo para priorizar docas com menor tempo de custo.
* **Overhead de tempo de custo**: tempo usado para escolher uma doca quando há mais de uma doca com mesmo tempo de custo. Quanto menor o valor inserido nesse campo, maior a possibilidade da doca ser escolhida. Esse campo não é utilizado no cálculo do tempo de entrega.
* **Prioridade**: valor utilizado para desempate de docas que possuem o mesmo tempo de custo e mesmo tempo de overhead. Quanto maior é o valor, maior é a chance da doca ser escolhida.

## Editar

Para editar uma doca, no menu esquerdo do Admin VTEX:

1. No Admin VTEX, acesse **Envio > Estratégia de Envio** ou digite *Estratégia de envio* na barra de busca no topo da página.  
2. Vá na aba **Docas**: todas as docas cadastradas ficarão disponíveis pelos cartões.  
3. Selecione a doca desejada e clique nos três pontos à direita.  
4. Clique em`Editar`.  

## Excluir

Para excluir doca, no menu esquerdo do Admin VTEX:

1. No Admin VTEX, acesse **Envio > Estratégia de Envio** ou digite *Estratégia de envio* na barra de busca no topo da página.    
2. Vá na aba **Docas**: todas as docas cadastradas ficarão disponíveis pelos cartões.  
3. Selecione a doca desejada e clique nos três pontos à direita.  
4. Clique em`Deletar`.  
