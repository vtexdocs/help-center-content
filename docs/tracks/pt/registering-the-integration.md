---
title: 'Configurar cadastro do conector da Via'
id: 1okse2MybWk04AQoueu88O
status: PUBLISHED
createdAt: 2018-09-24T18:45:21.544Z
updatedAt: 2022-02-07T21:16:28.792Z
publishedAt: 2022-02-07T21:16:28.792Z
firstPublishedAt: 2018-09-27T22:12:25.372Z
contentType: trackArticle
productTeam: Channels
slug: cadastro-da-integracao-da-via-varejo
locale: pt
trackId: 3E9XylGaJ2wqwISGyw4GuY
trackSlugPT: configurar-integracao-da-via-varejo
---

O cadastro do conector é feito no Admin da VTEX. Para realizá-lo, siga as instruções abaixo.

1. No Admin VTEX, acesse **MARKETPLACE > Integrações**.
2. Selecione a opção `Configuração`.
3. Busque pelo box da Via e clique em `Integrar`.
4. Preencha os campos da tela descritos logo abaixo e, em seguida, clique no botão `Salvar Configuração` (campos marcados com o símbolo * são obrigatórios).

- **Id do afiliado*:** código identificador para criação de um [afiliado](https://help.vtex.com/pt/tutorial/o-que-e-afiliado) qque ainda não esteja cadastrado no seu sistema. O código deve ser composto de três consoantes, sejam elas repetidas ou não, vogais não são aceitas. Sugestão: `VVJ`. A configuração do conector cria automaticamente o afiliado.
- **Afiliate Email*:** preencha com o e-mail cadastrado na etapa [**Criar conta de seller na Via**](https://help.vtex.com/pt/tracks/configurar-integracao-da-via-varejo--3E9XylGaJ2wqwISGyw4GuY/2oxPVeYpVgA8IrhaDqKon6#criar-conta-de-seller-na-via).
- **Política comercial*:** ID da [política comercial](https://help.vtex.com/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) que será utilizada para a integração com a Via. São os produtos dessa política comercial que serão enviados para o marketplace.
- **Chave de acesso:** preencha com o Token enviado pela Via na etapa [Solicitar token na Via](https://help.vtex.com/pt/tracks/configurar-integracao-da-via-varejo--3E9XylGaJ2wqwISGyw4GuY/2oxPVeYpVgA8IrhaDqKon6#solicitar-token-na-via).
- **CNPJ*:** preencha esse campo com o CNPJ da sua loja. Essa informação é obrigatória para que seja possível faturar os pedidos. Leia o artigo [Fluxo de configuração](https://help.vtex.com/pt/tutorial/como-funciona-a-integracao-da-cnova-via-varejo) da Via para saber mais.
- **Nome do campo de Especificação de Produto que contém sua Descrição:** preencha esse campo para utilizar uma descrição diferente da que já está cadastrada no catálogo VTEX. Ao preencher esse campo, você deverá [criar um campo de produto](https://help.vtex.com/pt/tutorial/criando-um-campo-de-produto--tutorials_106) do tipo `Texto Grande`. O conector priorizará o envio da descrição contida no campo criado.
- **Estoque mínimo*:** determina o valor mínimo de estoque de segurança. Se a quantidade de itens de um produto em estoque estiver abaixo do valor escolhido, seu anúncio é pausado para evitar que sejam feitas vendas sem estoque durante o tempo de atualização da Via pela VTEX. O valor de estoque mínimo é aplicado a todos os produtos, portanto verifique se algum produto deixaria de ser anunciado devido ao seu estoque inicial.
- **Enviar KIT*:** ao escolher `Não`, SKUs [cadastrados como kit](https://help.vtex.com/pt/tutorial/cadastrando-kit--tutorials_215) não são enviados para a Via. Ao habilitar `Sim`, todos os itens da sua política comercial são enviados para o marketplace, sem filtrar SKUs cadastrados como kit. Mudanças na configuração do conector podem ser feitas a qualquer momento, sendo que isso não afeta SKUs que já tenham sido enviados. Por exemplo, se você mudasse sua configuração de `Sim` para `Não`, SKUs enviados anteriormente para a Via não seriam removidos ou sofreriam qualquer alteração. Se você mudar sua configuração de `Não` para `Sim`, você precisará [reindexar a base](https://help.vtex.com/pt/tutorial/manutencao-de-base-full-cleanup--34P9LGs7BCIQK6acQom802) para que a configuração seja aplicada.

<div class="alert alert-info">
Com a opção <i>Não</i> ativada, tentativas de envio para a Via de SKUs cadastrados como kit resultarão no seguinte aviso: <i>O conector está configurado para não enviar SKUs do tipo Kit</i>. Esta mensagem pode ser visualizada no Admin, no módulo <b>MARKETPLACE > Integrações > Produtos</b>, ao se clicar sobre o SKU.</div>

- **E-mails Para Notificação de Pedidos Não Integrados*:** preencher com o e-mail do responsável técnico. Caso ocorra algum erro na integração do pedido, será enviada uma mensagem para o e-mail cadastrado.

<div class="alert alert-warning">Caso você não aperte no botão <code>+</code> para inserir o E-MAIL PARA NOTIFICAÇÃO DE PEDIDOS NÃO INTEGRADOS, aparecerá um alerta de erro ao salvar a configuração.</div>
