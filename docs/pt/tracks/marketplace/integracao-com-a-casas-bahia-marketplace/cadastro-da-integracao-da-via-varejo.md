---
title: 'Configurar cadastro do conector da Casas Bahia Marketplace'
id: 1okse2MybWk04AQoueu88O
status: PUBLISHED
createdAt: 2018-09-24T18:45:21.544Z
updatedAt: 2024-09-13T19:22:23.725Z
publishedAt: 2024-09-13T19:22:23.725Z
firstPublishedAt: 2018-09-27T22:12:25.372Z
contentType: trackArticle
productTeam: Channels
slugEN: registering-the-integration
locale: pt
trackId: 3E9XylGaJ2wqwISGyw4GuY
trackSlugEN: integracao-com-a-casas-bahia-marketplace
order: 6
---

O cadastro do conector é feito no Admin da VTEX. Para realizá-lo, siga as instruções abaixo.

1. No Admin VTEX, acesse **Marketplace > Conexões >Marketplace e integrações** ou digite **Marketplace e integrações** na barra de busca.  
2. Busque pelo conector da **Casas Bahia Marketplace**.  
3. Clique em `Conectar`.
5. Preencha os campos da tela descritos logo abaixo e, em seguida, clique no botão `Salvar Configuração` (campos marcados com o símbolo * são obrigatórios).

- **Id do afiliado*:** código identificador para criação de um [afiliado](/pt/tutorial/o-que-e-afiliado) qque ainda não esteja cadastrado no seu sistema. O código deve ser composto de três consoantes, sejam elas repetidas ou não, vogais não são aceitas. Sugestão: `VVJ`. A configuração do conector cria automaticamente o afiliado.
- **Afiliate Email*:** preencha com o e-mail cadastrado na etapa [**Criar conta de seller na Casas Bahia Marketplace**](/pt/tracks/configurar-integracao-da-via-varejo--3E9XylGaJ2wqwISGyw4GuY/2oxPVeYpVgA8IrhaDqKon6#criar-conta-de-seller-na-via).
- **Política comercial*:** ID da [política comercial](/pt/docs/tutorials/como-funciona-uma-politica-comercial) que será utilizada para a integração com a Casas Bahia Marketplace. São os produtos dessa política comercial que serão enviados para o marketplace.
- **Chave de acesso:** preencha com o Token enviado pela Casas Bahia Marketplace na etapa [Solicitar token na Via](/pt/tracks/configurar-integracao-da-via-varejo--3E9XylGaJ2wqwISGyw4GuY/2oxPVeYpVgA8IrhaDqKon6#solicitar-token-na-via).
- **CNPJ*:** preencha esse campo com o CNPJ da sua loja. Essa informação é obrigatória para que seja possível faturar os pedidos. Leia o artigo [Fluxo de configuração](/pt/tutorial/como-funciona-a-integracao-da-cnova-via-varejo) da Casas Bahia Marketplace para saber mais.
- **Nome do campo de Especificação de Produto que contém sua Descrição:** preencha esse campo para utilizar uma descrição diferente da que já está cadastrada no catálogo VTEX. Ao preencher esse campo, você deverá [criar um campo de produto](/pt/docs/tutorials/cadastrar-especificacoes-ou-campos-de-produto) do tipo `Texto Grande`. O conector priorizará o envio da descrição contida no campo criado.
- **Estoque mínimo*:** determina o valor mínimo de estoque de segurança. Se a quantidade de itens de um produto em estoque estiver abaixo do valor escolhido, seu anúncio é pausado para evitar que sejam feitas vendas sem estoque durante o tempo de atualização da Casas Bahia Marketplace pela VTEX. O valor de estoque mínimo é aplicado a todos os produtos, portanto verifique se algum produto deixaria de ser anunciado devido ao seu estoque inicial.
- **Enviar KIT*:** ao escolher `Não`, SKUs [cadastrados como kit](/pt/docs/tutorials/cadastrar-kit) não são enviados para a Casas Bahia Marketplace. Ao habilitar `Sim`, todos os itens da sua política comercial são enviados para o marketplace, sem filtrar SKUs cadastrados como kit. Mudanças na configuração do conector podem ser feitas a qualquer momento, sendo que isso não afeta SKUs que já tenham sido enviados. Por exemplo, se você mudasse sua configuração de `Sim` para `Não`, SKUs enviados anteriormente para a Casas Bahia Marketplace não seriam removidos ou sofreriam qualquer alteração. Se você mudar sua configuração de `Não` para `Sim`, você precisará [reindexar a base](/pt/docs/tutorials/manutencao-de-base-full-cleanup) para que a configuração seja aplicada.

> ℹ️ Com a opção *Não* ativada, tentativas de envio para a Casas Bahia Marketplace de SKUs cadastrados como kit resultarão no seguinte aviso: *O conector está configurado para não enviar SKUs do tipo Kit*. Esta mensagem pode ser visualizada no Admin, no módulo **MARKETPLACE > Integrações > Produtos**, ao se clicar sobre o SKU.

- **E-mails Para Notificação de Pedidos Não Integrados*:** preencher com o e-mail do responsável técnico. Caso ocorra algum erro na integração do pedido, será enviada uma mensagem para o e-mail cadastrado.

> ⚠️ Caso você não aperte no botão `+` para inserir o E-MAIL PARA NOTIFICAÇÃO DE PEDIDOS NÃO INTEGRADOS, aparecerá um alerta de erro ao salvar a configuração.  

**Mapeamento de Campos Customizados (Nome e descrição):**  Para utilizar esse mapeamento é necessário criar um campo customizado. Para saber como criar campos customizados, acesse a documentação [Cadastrar especificações ou campos de produto](/pt/docs/tutorials/cadastrar-especificacoes-ou-campos-de-produto).  

> ℹ️ O mapeamento de campos customizáveis está disponível apenas para **nome do produto** e **descrição do produto**. **Exemplo de nome para o novo campo:** `CBH_ProductName` para nome do produto e `CBH_ProductDescription` para descrição do produto.  

Para o mapeamento funcionar, é necessário o seller seguir os seguintes passos:  

1. Criar um campo do tipo `Texto grande`.  
2. Desativar a opção  `Exibe especificação`.  
3. Preencher os campos criados em cada produto cadastrado.  

O preenchimento desse campo deve ser realizado da seguinte maneira:

1. Preencha o campo DE com o nome do campo de origem.   
Obrigatoriamente `ProductName` para título do produto ou Obrigatoriamente `ProductDescription` para descrição do produto.  
3. Preencha o campo PARA com o nome do novo campo.   
`CBH_ProductName` para nome do produto e `CBH_ProductDescription` para descrição do produto.    
4. Clique no botão e uma regra de mapeamento será adicionada a sua integração.  

> ℹ️ Cada regra cadastrada mapeia apenas um campo. Caso o campo mapeado não tenha um valor preenchido, será enviado o valor padrão de `Título` ou `Descrição` cadastrados no catálogo.

