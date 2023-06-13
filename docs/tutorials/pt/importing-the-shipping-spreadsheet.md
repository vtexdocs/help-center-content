---
title: Importar planilha de frete
id: 45I9m2rknucSmYigA2AE0G
status: DRAFT
createdAt: 2018-02-28T19:46:49.085Z
updatedAt: 2021-07-12T13:41:11.689Z
publishedAt: 
firstPublishedAt: 2018-02-28T21:32:16.417Z
contentType: tutorial
productTeam: Post-purchase
author: 7FpKZ0rc6k4WqeymES80cw
slug: importar-planilha-de-frete
legacySlug: importar-planilha-de-frete
subcategory: 7fTH6bP0C4IaM8qWi0kkQC
---

<div class="alert alert-info">
Aviso: Esta documentação está em processo de atualização para refletir a mudança do conceito de Painéis para 
<a href="https://help.vtex.com/pt/announcements/estoque-e-entrega-entenda-o-que-mudou-na-aba-paineis--1YNfaeNG206XKI2UbGBRSl">estratégia de envio</a>.
</div> 


Antes de fazer a importação, é importante ter a planilha no modelo VTEX, ou seja, __idêntica à nossa Planilha Modelo__, inclusive na formatação das células, com o cabeçalho e formato _.xls_ (Excel 97-2003). Para obter o modelo, clique no link __Download da Planilha Modelo__, que fica dentro de configurações da transportadora.

1. Acesse o módulo __Estoque & Entrega__
2. Clique em __Painéis__
3. Depois, clique na transportadora que deseja importar os valores de frete
4. Clique em __Atualizar tabela__ e, então, em __Escolher um arquivo__
5. Selecione o arquivo previamente salvo em sua máquina
6. Para finalizar, clique no botão __Salvar__

Depois disso, será possível visualizar uma tarja laranja sobre a transportadora que teve a inclusão da tabela de frete, com a informação __Em processamento__. O tempo para a planilha ser consumida dependerá da quantidade de linhas contidas nela.

<div class="alert alert-warning">
Lembre-se que cada nova importação sobrescreve as informações que foram importadas anteriormente.
</div>

<div class="alert alert-warning">
<strong>OBS:</strong> caso as 65.536 linhas da versão <em>.xls</em> não sejam suficiente para o cadastro de todos os valores de frete da transportadora, será necessário criar uma nova aba dentro do arquivo, com o mesmo cabeçalho para continuar preenchendo as informações.
</div>

<div class="alert alert-warning">
<strong>OBS2:</strong>Caso a planilha tenha mais de 10 MB, será necessário compactá-la no formato <strong>.zip</strong>. Esse arquivo .zip também deve ter menos de 10 MB para o upload funcionar. Se, ainda assim, o arquivo exceder o limite, recomendamos dividir em mais transportadoras.
</div>

## Gerar planilha automaticamente para os Correios

Caso queira disponibilizar a entrega pelos Correios, mas não tenha a planilha no padrão VTEX, acesse o [integrador correios](http://clientes.xpagencia.com.br/ferramentas/logistics/transportadoras/planilha), ferramenta oferecida pela XP Agência.

### Artigos relacionados

- [Montar a planilha de frete](/pt/tutorial/como-montar-a-planilha-de-frete)
- [Cadastrando transportadora](http://help.vtex.com/tutorial/gerenciar-transportadora)
