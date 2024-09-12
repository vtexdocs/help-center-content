---
title: 'Erros de integração de estoque com a Netshoes'
id: 2solm6TXBNVHboVEduYN5g
status: PUBLISHED
createdAt: 2021-12-30T20:43:17.879Z
updatedAt: 2023-03-29T14:53:26.342Z
publishedAt: 2023-03-29T14:53:26.342Z
firstPublishedAt: 2021-12-30T20:59:34.810Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slug: erros-de-integracao-de-estoque-com-a-netshoes
locale: pt
legacySlug: erros-de-integracao-de-estoque-com-a-netshoes
subcategoryId: 7lxg0kyL3TYIsrlSQlf1zP
---

Nos marketplaces para os quais a VTEX desenvolveu um [conector nativo](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-conector-nativo-vtex), por vezes ocorrem erros de integração de estoque. Este artigo reúne os erros mais comuns de integração de estoque com a Netshoes e orienta sobre como solucioná-los.

Existem mensagens que identificam quais são os erros. Você pode visualizá-las no Admin VTEX, em **MARKETPLACE > Conexões > Estoque**, clicando sobre a mensagem de processo com erro.

Após solucionar o problema, é necessário reprocessar manualmente a integração do estoque do SKU. Isso é feito no mesmo local onde o erro é visualizado, clicando no botão **Ações > Reprocessar**.

Quando é feito novo mapeamento de SKU, no entanto, não é necessário reprocessar manualmente o erro, pois a reindexação do produto é suficiente para o estoque ser atualizado na Netshoes.

Seguem as mensagens mais comuns de erros de integração de estoque com a Netshoes:

#### Mensagem de erro

`Não foi possível localizar o mapeamento deste SKU na planilha`

Este erro significa que o SKU não foi mapeado, ou que o mapeamento foi feito incorretamente. Para solucionar o problema, consulte o [Mapeamento de categorias, variações e atributos da Netshoes](https://help.vtex.com/pt/tracks/configurar-integracao-da-netshoes--5Ua87lhFg4m0kEcuyqmcCm/1UpQGBTJQw4wimCeYSe8yc), e realize o mapeamento do SKU.

É necessário preencher sua _Planilha de Mapeamento_ com os termos exatos da _Planilha de Consulta na Netshoes_. Adotar palavras diferentes, ou variações de letras maiúsculas e minúsculas, ocasiona erros de mapeamento, pois a planilha é _case sensitive_.

____

#### Mensagem de erro

`productGroup: Field contains invalid characters.`

Conforme a [documentação da Netshoes](https://developers.netshoes.com.br/api-portal/producao#section4), _ProductGroup_ é um código que agrupa variações  de cor e tamanho do mesmo produto. Ele permite que, ao navegar pela plataforma da Netshoes, o usuário veja as variações do produto na mesma interface.

A [necessidade de cadastrar agrupamentos de produtos da Netshoes](https://help.vtex.com/pt/tracks/configurar-integracao-da-netshoes--5Ua87lhFg4m0kEcuyqmcCm/44wi4Ib06yw3dLcqZVqTv8#como-verificar-se-agrupamento-sera-necessario) depende da arquitetura do catálogo de uma loja VTEX. A mensagem de erro no seu Admin VTEX significa que o mapeamento desse atributo é necessário e que, ou isso não foi feito, ou não foi realizado corretamente, sendo necessário [cadastrar o agrupamento](https://help.vtex.com/pt/tracks/configurar-integracao-da-netshoes--5Ua87lhFg4m0kEcuyqmcCm/44wi4Ib06yw3dLcqZVqTv8#cadastro-do-agrupamento-de-produtos).

Para mapear o atributo _ProductGroup_, [cadastre uma especificação de produto](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/4fcdmJzQ6QYA9zWf3bLWin) chamada _NetshoesProductGroup_ no ambiente VTEX, e preencha o campo com um valor no formato texto. Caracteres especiais e números não são aceitos. O valor que você definir para este campo no cadastro de especificação de produtos deve ser repetido para todas as variações de cor e tamanho de um mesmo produto, pois isso é o que vai permitir vincular variações de cor e tamanho na plataforma da Netshoes.

____

#### Mensagem de erro

`Este produto não possui descrição, que é um campo obrigatório para integrar produtos neste marketplace`

No cadastro do seu produto na VTEX, um campo considerado obrigatório pelo marketplace não foi preenchido na etapa de [Mapeamento de categorias, variações e atributos da Netshoes](https://help.vtex.com/pt/tracks/configurar-integracao-da-netshoes--5Ua87lhFg4m0kEcuyqmcCm/1UpQGBTJQw4wimCeYSe8yc). Na mensagem de erro, trata-se da _Descrição do produto_.

Para solucionar o problema, acesse seu Admin VTEX, em **Catálogo > Produtos e SKUs**, e encontre o produto em questão. Você pode **Filtrar resultados ou fazer uma busca**, clicando sobre essa opção. Após identificar o produto, clique em **ALTERAR**. Ao visualizar a página de cadastro, [preencha o campo do produto](https://help.vtex.com/pt/tutorial/campos-de-cadastro-de-produto) _Descrição do produto_, e depois clique em **Salvar**.

____

#### Mensagens de erro

`Este Sku não possui peso cadastrado ou é inferior a 1 grama, que é um campo obrigatório para integrar produtos neste marketplace`

Este erro ocorre porque o campo _Peso real_ do cadastro do SKU não foi preenchido ou isso não foi feito de forma correta, sendo que se trata de uma informação obrigatória para a Netshoes. A solução é acessar seu Admin VTEX, em **Catálogo > Produtos e SKUs**, e identificar o SKU da mensagem. Você pode **Filtrar resultados ou fazer uma busca**, clicando sobre essa opção. Uma vez na página do cadastro do SKU, [preencha o campo](https://help.vtex.com/pt/tutorial/campos-de-cadastro-de-sku?locale=pt) _Peso real_ com um valor acima de 1g, e clique **Salvar**.

____

#### Mensagens de erro

`O Departamento (XXX) cadastrado na planilha de mapeamento, não corresponde à um valor aceito pela Netshoes.`<br>
</br>`O Gênero (XXX) cadastrado na planilha de mapeamento, não corresponde à um valor aceito pela Netshoes.`

`O Tamanho (XXX) cadastrado na planilha de mapeamento, não corresponde à um valor aceito pela Netshoes.`<br>
</br>`O Tipo de Produto (XXX) cadastrado na planilha de mapeamento, não corresponde à um valor contido no departamento (XXX)`

`A Marca XXX, cadastrada na planilha de mapeamento, não corresponde à um valor aceito pela Netshoes.`

As mensagens indicam erros de mapeamento de valores. A tentativa de realizar uma correspondência entre o nome de um atributo do seu catálogo na VTEX, por exemplo, e o termo aceito pela Netshoes, não foi realizada com sucesso. Para solucionar o problema, consulte o [Mapeamento de categorias, variações e atributos da Netshoes](https://help.vtex.com/pt/tracks/configurar-integracao-da-netshoes--5Ua87lhFg4m0kEcuyqmcCm/1UpQGBTJQw4wimCeYSe8yc), e faça o mapeamento do atributo, variação ou categoria, conforme o  que aparece na mensagem.

É necessário preencher sua _Planilha de Mapeamento da Netshoes_ com os termos exatos da _Planilha de Consulta na Netshoes_. Adotar palavras diferentes, ou variações de letras maiúsculas e minúsculas dos termos aceitos pelo marketplace, ocasiona erros de mapeamento.

____

#### Mensagem de erro

`Os atributo(s) XXX é(são) obrigatório(s) e não foi(foram) encontrado(s) no Produto e nem no Sku`

A Netshoes não aceita integração de itens com atributos obrigatórios não mapeados. A mensagem indica que o mapeamento do atributo não foi realizado, ou que isso não foi feito de forma correta. Para solucionar o problema, consulte o [Mapeamento de categorias, variações e atributos da Netshoes](https://help.vtex.com/pt/tracks/configurar-integracao-da-netshoes--5Ua87lhFg4m0kEcuyqmcCm/1UpQGBTJQw4wimCeYSe8yc), e realize o mapeamento do atributo descrito na mensagem de erro.

É necessário preencher sua _Planilha de Mapeamento da Netshoes_ com os valores exatos da _Planilha de Consulta na Netshoes_. Adotar palavras diferentes, ou variações de letras maiúsculas e minúsculas, ocasiona erros de mapeamento.

<br></br>
### Saiba mais

- [Integração com a Netshoes](https://help.vtex.com/pt/tracks/configurar-integracao-da-netshoes--5Ua87lhFg4m0kEcuyqmcCm)
- [Controle de estoque mínimo para integrações](https://help.vtex.com/pt/tutorial/controle-de-estoque-minimo-para-integracoes--5hvUNIiSeJ5QCaZQYpYf1D)
- [Configurar o Alerta de Estoque Crítico](https://help.vtex.com/pt/tutorial/configurar-o-alerta-de-estoque-critico--6FD0GHeQPCsKIMgkQ88SGu)
