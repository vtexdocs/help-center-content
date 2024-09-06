---
title: 'Configurar template de descrição dos anúncios no Mercado Livre'
id: 1gEoq6NDAIM2G4Y0ieMk6u
status: ARCHIVED
createdAt: 2018-08-13T12:40:11.566Z
updatedAt: 2020-02-20T00:48:22.865Z
publishedAt: 
firstPublishedAt: 2018-08-13T14:27:42.464Z
contentType: trackArticle
productTeam: Channels
slug: configurar-template-de-descricao-dos-anuncios-no-mercado-livre
locale: pt
trackId: 2YfvI3Jxe0CGIKoWIGQEIq
trackSlugPT: configurar-integracao-do-mercado-livre
---

Na integração com o Mercado Livre, você pode montar a descrição dos seus anúncios de maneira mais customizada. Através da Central de Mensagens, é possível montar um template com informações adicionais (que já estão nos campos de produto da VTEX) e enviá-las ao Mercado Livre.


## Configuração do template

>❗ O Mercado Livre **não aceita customizações de template em HTML ou CSS** (com exceção da tag &lt;br&gt; para quebras de linha). Não são permitidas as tags de Iframes, Scripts, Forms, Inputs, Meta, Object e Embed.

Para que seu produto fique disponível no Mercado Livre, é necessário configurar o template do anúncio em que ele será exibido. Para fazer isso, siga o passo a passo abaixo:

1. Na seção __Cliente__ do menu lateral do Admin, clique em __Central de Mensagens__.
2. Nas opções que se abrem, clique em __Templates__.
3. Clique no ícone de filtro e selecione apenas a opção __VTEX Bridge__. Você também pode usar a busca para pesquisar por __Mercado Livre__.
4. Insira as variáveis do produto que você deseja exibir no template (veja abaixo todas as que estão disponíveis).
5. Clique no botão __Salvar__.

Conheça as variáveis disponíveis para serem exibidas no template do seu anúncio no Mercado Livre:

``{{DESCRICAO}}``: variável que retorna a __descrição do produto__ cadastrada na VTEX.

``{{IMAGENS}}``: essa variável contém o link com a __imagem principal do produto__ cadastrada na VTEX.

``{{TITULO}}``: variável que contém o __nome do produto__. Ele será exibido de acordo com o formato escolhido no campo __Título do anúncio__, configurado na primeira etapa deste tutorial, na __configuração da integração__.

``{{NOME_ATRIBUTO_PRODUTO}}``: essa variável insere no template o __valor__ de um atributo específico do produto. Dessa forma, é preciso informar qual atributo você deseja exibir. Exemplo: para exibir o valor de um atributo chamado “Detalhe técnico”, você deve inserir a variável `{{DETALHE_TECNICO}}` no template. A variável deve ser escrita sempre em letras maiúsculas, sem acentos e substituindo os espaços do nome do atributo por underscore (\_).

Caso deseje incluir todos os atributos e valores dos atributos no template, você deve adicionar no seu template o código descrito abaixo. Esta é a estrutura que deve ser utilizada para renderizar todos os atributos do produto e seus respectivos valores no template:

``{{#each ATRIBUTOS}} {{NOME}} – {{VALOR}} <br> {{/each}}``

>ℹ️ Caso deseje omitir algum atributo no template, você pode fazer isso na **configuração da integração**. Basta preencher o campo **Atributos omitidos no template do produto**, conforme explicado na seção **Configurar o painel do Mercado Livre na VTEX** da etapa anterior.

Feito isso, você concluiu a _terceira etapa_. Agora, vamos configurar a logística para as entregas de pedidos feitos no Mercado Livre.
