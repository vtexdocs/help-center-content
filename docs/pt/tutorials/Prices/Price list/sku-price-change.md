---
title: 'Alterar preço de SKU'
id: tutorials_95
status: PUBLISHED
createdAt: 2017-04-27T22:19:48.759Z
updatedAt: 2024-01-05T17:59:41.793Z
publishedAt: 2024-01-05T17:59:41.793Z
firstPublishedAt: 2017-04-27T23:00:42.506Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slug: alteracao-de-preco-de-sku
locale: pt
legacySlug: alteracao-de-preco-de-sku
subcategoryId: 4id9W3RDyw02CasOm2C2iy
---

A plataforma dispõe de três possibilidades para atualização de preço, sendo: cada item manualmente pelo `admin`, via `importação de planilha` e via `integração com o ERP`. Você verá nesse artigo como fazer cada uma destas maneiras de alterar a referida informação no sistema, mas antes de alterar usando qualquer uma das opções mencionadas, é importante se atentar para a regra de alteração de preço.

## Regra para alteração de preço

Para alterar o preço na sua loja de forma segura, a plataforma que impede que o preço tenha um acréscimo de mais de 70% ou um decréscimo maior do que 30%. Ou seja, se eu tenho um produto de R$ 100,00, o máximo que consigo aumentar esse preço é para R$ 170,00 e o menor valor para o qual consigo reduzí-lo é para R$ 70,00. 

Essa trava foi desenvolvida para evitar erros humanos na digitação dos preços, no momento da alteração através de qualquer ferramenta que for usada.

Vamos supor que tenha um produto que custe R$ 10,00 e precisa atualizar para R$ 11,00. Se a trava não existisse e por um erro de digitação, atualizasse para R$ 110,00. Na melhor das hipóteses, você pararia de vender esse item enquanto não identificasse o erro e corrigisse o problema. Na pior das hipóteses, perderia a confiança do cliente e poderia ser processado por estar praticando preço muito acima da média de mercado.

A trava para diminuição de preço visa evitar prejuízo, pois o cliente poderia comprar sem problema o produto com o preço errado e, dependendo de quantas vendas ocorressem com o valor errado, poderia até falir a loja.

## Atualização manual de cada item pelo admin

Essa atualização normalmente é feita quando precisa ser feito um rápido ajuste no preço do SKU e, como é somente um item é mais fácil fazer manualmente no admin do que importar uma planilha. Quem não usa ERP talvez não precise dessa maneira de atualização, pois a integração com a ferramenta prevê esse procedimento. Para isso siga o passo a passo abaixo:

1. No Admin VTEX, acesse *Preços > Lista de preços*, ou digite *Lista de preços* na barra de busca no topo da página.
2. Insira o ID do SKU que deseja fazer a alteração no campo **Busca**.
3. Clique no **SKU** desejado.
4. Insira **Preco de custo ($)** + **Markup Inicial (% - caso tenha)** = **Preço Base (preço de venda final ao consumidor)**.
5. Clique no botão **fechar** e a informacao do novo preço será automaticamente salva. 

## Campos do formulário de alteração de preço do sku

Esses campos representam as informações que são alteradas em qualquer uma das três maneiras mencionadas. A diferença é que manualmente, quem está preenchendo enxerga esse formulário, via importação por planilha estão dispostos em colunas e via integração são campos na estrutura de request em formato JSon.

- **ID:** código do SKU que acessou.
- **Sku:** nome do SKU.
- **Parceiro (utm\_source):** Campo opcional. Trata-se de um parâmetro para condicionar uma precificação diferenciada, a partir do uso no site da utm source que for cadastrada aqui.
- **Audiência de campanha (utm\_campaign):** Campo opcional. Trata-se de um parâmetro para condicionar uma precificação diferenciada, a partir do uso no site da utm campaign que for cadastrada aqui, a qual também pode ser usada em links de mail marketing.
- **Audiência de campanha interna (utmi\_cp):** Campo opcional. Trata-se de um parâmetro para condicionar uma precificação diferenciada, a partir do uso no site da utm source que for cadastrada aqui. Normalmente usada para funcionários da loja, quando é o caso de ter condições de compra diferenciada.
- **Valor De:** Campo obrigatório. Aqui que é cadastrado o preço que no site fica taxado (ex: De: R$ 100,00).
- **Valor:** Campo obrigatório. Aqui que é cadastrado o preço de venda do produto.
- **Data inicial:** Campo obrigatório. Aqui é cadastrado o início da vigência do preço, que quando cadastrado ou alterado via integração com ERP, e a data não é definida, fica 01/01/1900.
- **Data final:** Campo obrigatório. Aqui é cadastrado o fim da vigência do preço, que quando cadastrado ou alterado via integração com ERP, e a data não é definida, fica 31/12/4000.
- **Política Comercial:** Campo obrigatório, mas já vem preenchido por padrão com a política do loja principal. Esse campo serve para definir em qual política o preço será aplicado. Se for cadastrado somente preço para a loja principal, todas as outras políticas comerciais cadastradas na loja olharão para o mesmo preço da loja principal. À medida que forem cadastrados preços para políticas específicas, essas políticas somente consultarão o próprio preço.
- **Seller:** Campo opcional. Sobrepõe o preço cadastrado no seller que selecionar, conforme mensagem que aparece no próprio campo.

## Por importação de planilha

Essa ferramenta normalmente é usada para atualização de preços em massa, que pode ser de todos os produtos da loja ou de acordo com o filtro que fizer antes da exportação. Quem não usa ERP talvez não precise dessa maneira de atualização, pois a integração com a ferramenta prevê esse procedimento. Para isso siga os passos abaixo:

1. No Admin VTEX, acesse *Preços > Lista de preços*, ou digite *Lista de preços* na barra de busca no topo da página.
2. Clique no ícone __Exportar Planilha__.
3. Escolha o tipo de importacao que será efetuada **Tabela de Preços-Base** , **Tabela de Preços fixo** ou **Tabela de preços computados**.
4. Clique em **Exportar Tabela**.
5. O sistema processará a solicitação internamente e, quando tiver pronto enviará para o e-mail que digitar no campo **E-mail para notificação**. 
6. Por padrão vem preenchido com o e-mail do usuário que acessou o Admin. Este passo é importante, pois garante que o formato da sua planilha será o correto e minimiza problemas no momento da importação.

Depois que o e-mail chegar e fizer o download, altere somente aqueles SKUs que realmente precisarão serem atualizados, os demais pode excluir da planilha, assim a importação levará menos tempo e evitará reindexação desnecessária dos produtos que não foram alterados. É importante ressaltar que o formato aceito pela plataforma para importar a planilha é o .xls. Levando em consideração que não fechou a página do Admin, continue com os passos abaixo:

1. Selecione a aba **Importar**.
2. Clique em **Selecionar arquivo**.
3. Busque pelo arquivo que salvou em sua máquina com os preços alterados.
4. Selecione o arquivo e clique em **Abrir**.
5. Preencha em **Email para notificação** o seu e-mail, para ser notificado quanto a possíveis erros na importação (preenchimento, formato da planilha, etc).
6. Clique no botão **Importar**.
7. Colunas da planilha de importação.

Essas são as colunas da planilha que chega no e-mail do usuário, quando faz a exportação conforme mencionado no passo a passo acima. Abaixo está escrito exatamente como está na planilha. A obrigatoriedade de preenchimento de cada coluna, segue o mesmo padrão dos campos do formulário descrito no referido tópico acima.

- **StockKeepingUnitId:** ID do SKU.
- **Source: **utm\_source.
- **Price:** preço de venda do produto.
- **Id:** ID do preço. Não altere esse valor, caso contrário o sistema criará uma nova linha na tabela de preço e ficarão dois preços cadastrados para o SKU.
- **StoreId:** ID da política comercial onde o preço será aplicado. Caso tenha dúvida de qual é o código de identificação de alguma política, acesse o módulo Catalog > Marketplace > Política Comercial. Verifique o número que aparece na coluna **Id - Nome**. Esse é o código que deverá ser usado aqui.
- **Medium (Desconsiderar):** Campo descontinuado.
- **Campaign:** utm\_campaign.
- **InternalCampaign:** utmi\_cp.
- **DateFrom: **data do início da vigência do preço. Preencher no formato dd/mm/aaaa.
- **DateTo: **data do fim da vigência do preço. Preencher no formato dd/mm/aaaa.
- **ListPrice: **preço de, também conhecido como preço de lista. É aquele que aparece tachado (ex: `De: R$ 10,00`) no site.
- **RefId (Não alterável): **código de referência de produto, conforme cadastro do produto. Não alterar esse valor.
- **Ean13Default (Não alterável):** EAN do produto, conforme cadastro do produto. Não alterar esse valor.
- **BrandName (Não alterável):** marca do produto, conforme cadastro do produto. Não alterar esse valor.
- **StockKeepingUnitName (Não alterável):** nome do SKU, conforme cadastro do produto. Não alterar esse valor.
- **SellerId:** ID do seller dono do produto. Somente virá preenchido caso sua loja seja marketplace de outra loja.

## Por integração com ERP

Normalmente é configurada no momento que a sua loja está sendo implantada e, deve ser seguido o manual de integração junto à sua equipe técnica, para evitar integrações inconsistentes ou qualquer problema que possa prejudicar a informação que alimentará a plataforma. A atualização de preço é feito via API, para obter informações, acesse [Pricing API](https://developers.vtex.com/docs/api-reference/pricing-api#overview).
