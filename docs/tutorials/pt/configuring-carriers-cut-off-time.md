---
title: Configuração de Tempo das Transportadoras
id: 3QVhjcZ74smYsmEEgAGsui
status: DRAFT
createdAt: 2018-02-07T21:25:14.224Z
updatedAt: 2021-05-26T13:45:55.753Z
publishedAt: 
firstPublishedAt: 2018-02-07T23:14:17.882Z
contentType: tutorial
productTeam: Post-purchase
author: 0QBQws7rk0t5Mnu8fgfUv
slug: configurar-o-horario-de-corte-da-transportadora
legacySlug: configurar-o-horario-de-corte-da-transportadora
subcategory: 7fTH6bP0C4IaM8qWi0kkQC
---

<div class="alert alert-warning">
Aviso: Esta documentação está em processo de atualização para refletir a mudança do conceito de Painéis para 
<a href="https://help.vtex.com/pt/announcements/estoque-e-entrega-entenda-o-que-mudou-na-aba-paineis--1YNfaeNG206XKI2UbGBRSl">estratégia de envio</a>.
</div> 


As transportadoras, que são chamadas de Política de Envio no seu Admin, são as empresas responsáveis por fazerem a distribuição dos produtos vendidos por um e-commerce. É comum que uma loja tenha diversas transportadoras associadas a ela. Isto acontece pois o perfil de operação e de frota das **transportadoras varia de acordo com a rota, prazo e tipo de produto** que ela irá entregar.

É possível manipular as configurações das transportadoras cadastradas na sua loja, para que sua rota logística esteja de acordo com a realidade do seu negócio. Para que você possa personalizar sua logística para diversos cenários de entrega, é possível configurar: 

- **Horário de corte** de transportadoras.  
- **Horário de funcionamento** de transportadoras.   


> *Por default, todas transportadoras são configuradas com todos os dias marcados e com os horários de 00:00 às 23:59 horas (de acordo com o horário local).*
 
> *Não é possível selecionar as opções `Cadastrar dias e horários de corte da transportadora` e `Cadastrar dias e horários de funcionamento da transportadora` ao mesmo tempo. Com isso, deve ser utilizado ou o horário de corte ou o horário de funcionamento.*
 
## Horário de Corte de Transportadoras
A informação de horário de corte de uma transportadora é muito importante para o cálculo da data de entrega de um pedido. A data de entrega estimada é sempre calculada após a aprovação do pagamento.
	
  > *O horário de corte default é 00:00*.



**Exemplo 1**
1. Uma transportadora tem um tempo de entrega de **2 dias úteis**.
2. O horário de corte cadastrado para a segunda-feira é **15 horas**.
3. Um pedido que será entregue por esta transportadora tem o seu **pagamento aprovado às 11 horas** de uma segunda-feira.
4. O cálculo da data de entrega do pedido irá considerar a segunda-feira como **dia 0**. Portanto, a data de entrega do pedido será calculada para quarta-feira.


**Exemplo 2**
1. Uma transportadora tem um tempo de entrega de **2 dias úteis**.
2. O horário de corte cadastrado para a segunda-feira é **15 horas**.
3. Um pedido que será entregue por esta transportadora tem o seu **pagamento aprovado às 18 horas** de uma segunda-feira.
4. O cálculo da data de entrega do pedido irá considerar a terça-feira como **dia 0**, pois o pagamento foi aprovado depois do horário de corte. Portanto, a data de entrega do pedido será calculada para quinta-feira.


### Configurar o horário de corte

 1. Acesse o módulo **Estoque & Entrega**.  
 2. Clique na aba **Estratégia de Envio**. 
 3. Clique na **Política de Envio** desejada.  
 4. Em configurações de Tempo, cadastre `Horários de corte`.  
 5. Clique nos dias desejados e preencha com os horários de corte.  

 > *Não preencha os campos de horário de corte digitando valores. Em vez disso, utilize as caixas de acordo com as opções pré-definidas para evitar erros de cadastro*.

 6. Clique no botão **salvar**.  
 
## Horário de Funcionamento das Transportadoras

Os horários de funcionamento definem a disponibilidade de uma transportadora para a operação logística da sua loja. Para configurar horários de funcionamento para uma transportadora, siga os passos abaixo:  


### Configurar o horário de funcionamento das transportadoras 

 1. Acesse o módulo **Estoque & Entrega**.  
 2. Clique na aba **Estratégia de Envio**.  
 3. Clique na **Política de Envio** desejada.  
 4. Em configurações de Tempo, cadastre `Horários de funcionamento`.  
 5. Defina os dias e horários desejados para ao funcionamento da transportadora.  

 > *A opção `Aceitar vendas fora do horário de funcionamento`, quando selecionada, possibilita a transportadora aceitar vendas fora do horário de funcionamento configurado, ou seja, ela será considerada na simulação (cálculo) de frete. Quando não selecionada, a transportadora só aceitará vendas, ou seja, só estará disponível para a operação logística da sua loja, dentro dos dias e horários definidos previamente.*  

 6. Clique no botão **salvar**.  
