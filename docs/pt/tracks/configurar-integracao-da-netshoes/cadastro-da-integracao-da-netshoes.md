---
title: 'Cadastro da integração da Netshoes'
id: 7o8Vt25LJmAUuMmSWSmWes
status: PUBLISHED
createdAt: 2018-09-24T20:27:48.984Z
updatedAt: 2024-07-02T19:19:00.338Z
publishedAt: 2024-07-02T19:19:00.338Z
firstPublishedAt: 2018-09-27T15:02:23.717Z
contentType: trackArticle
productTeam: Channels
slugEN: registering-the-netshoes-integration
locale: pt
trackId: 5Ua87lhFg4m0kEcuyqmcCm
trackSlugEN: configurar-integracao-da-netshoes
---

1.	Acesse o Admin.
2.	No módulo Marketplace, clique em `Integrações`.
3.	Clique em `Configurações`.
4.	No box da Netshoes, clique em `Integrar`.
5.	Preencha os campos exibidos, listados abaixo (o asterisco indica preenchimento obrigatório). Em seguida clique no botão `Salvar configuração`.

   * **Integração (se optar por desativar a integração, toda a configuração, incluindo afiliado, serão excluídos)*:** selecione _Ativada_ para que a integração comece a operar.

   * **Ambiente*:** escolha a opção _Produção_ para utilizar o ambiente real de vendas da Netshoes. Esta é a configuração sugerida. Caso você queira realizar algum teste na integração, marque _QA_.
<br/>
> ⚠️ **Se você optou pelo ambiente QA**, para que a integração funcione será necessário utilizar um token de teste no campo **Chave de acesso à API da Netshoes** (descrito adiante).
   * **Id do afiliado*:** código identificador para criação de um [afiliado](https://help.vtex.com/pt/tutorial/o-que-e-afiliado) que ainda não esteja cadastrado no seu sistema. O código deve ser composto de três consoantes, sejam elas repetidas ou não, vogais não são aceitas. Sugestão: NTS. A configuração do conector cria automaticamente o afiliado.

   * **Email do afiliado*:** preencha com um email para o afiliado que está sendo criado.

   * **Política Comercial*:** ID da política comercial que será utilizada para a integração com a Netshoes. São os produtos dessa política comercial que serão enviados para o marketplace.

   * **Chave de acesso à API da Netshoes*:** preencha com o _token_ de identificação da sua loja no marketplace. Esta informação é fornecida pela Netshoes após a contratação.

   * **Nome do SKU*:** neste campo você determina o formato do nome que seu produto terá na Netshoes.

   * **Mapeamento de Tipo de Entrega (SLA) - Normal:** insira o tipo de [Política de envio](https://help.vtex.com/pt/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx/55MezrFTw2limlgT7KUg6l#campos-de-cadastro-de-transportadoras) que você deseja usar para entrega normal. Exemplo: os Correios (PAC) são usados como transportadora, e sua Política de envio na Estratégia de envio da VTEX se chama _Comum_. Neste caso, você deve preencher o campo com a palavra _Comum_. O termo preenchido deve ser exatamente igual ao cadastrado no Admin, inclusive com relação a letras maiúsculas e minúsculas.

   * **Mapeamento de Tipo de Entrega (SLA) - Expressa:** insira o tipo de [Política de envio](https://help.vtex.com/pt/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx/55MezrFTw2limlgT7KUg6l#campos-de-cadastro-de-transportadoras) que você deseja usar para entrega expressa. Exemplo: a XPTO é usada como transportadora, e sua Política de envio na Estratégia de envio da VTEX se chama _Entrega Rápida_. Neste caso, você deve preencher o campo com a palavra _Entrega Rápida_. O termo preenchido deve ser exatamente igual ao cadastrado no Admin, inclusive com relação a letras maiúsculas e minúsculas.
<br/>
> ℹ️ Se os campos do Mapeamento de Entrega não são preenchidos, a integração automaticamente escolhe a Política de Envio com o menor preço no momento da realização do pedido.

   * **Estoque mínimo (se o saldo do SKU estiver igual ou abaixo do valor configurado, será enviado saldo 0 para o marketplace)*:** determina o valor mínimo de estoque de segurança. Se a quantidade de itens de um produto em estoque estiver abaixo do valor escolhido, seu anúncio é pausado para evitar que sejam feitas vendas sem estoque durante o tempo de atualização da Netshoes pela VTEX. O valor de estoque mínimo é aplicado a todos os produtos, portanto verifique se algum produto deixaria de ser anunciado devido ao seu estoque inicial.

   * **Enviar Kit*:** ao escolher _Não_, SKUs [cadastrados como kit](https://help.vtex.com/pt/tutorial/cadastrando-kit--tutorials_215) não são enviados para a Netshoes. Ao habilitar _Sim_, todos os itens da sua política comercial são enviados para o marketplace, sem filtrar SKUs cadastrados como kit. Mudanças na configuração do conector podem ser feitas a qualquer momento, sendo que isso não afeta SKUs que já tenham sido enviados. Por exemplo, se você mudasse sua configuração de _Sim_ para _Não_, SKUs enviados anteriormente para a Netshoes não seriam removidos ou sofreriam qualquer alteração.

  > ℹ️ Com a opção *Não* ativada, tentativas de envio para a Netshoes de SKUs cadastrados como kit resultarão no seguinte aviso: *O conector está configurado para não enviar SKUs do tipo Kit*. Esta mensagem pode ser visualizada no Admin, no módulo **MARKETPLACE > Integrações > Produtos,** ao se clicar sobre o SKU. 

   * **Emails de notificação de erro de pedido:** adicione os endereços eletrônicos por meio dos quais você gostaria de ser notificado em caso de erro de integração de um pedido. Não há um número limite para esses emails.
   * **Mapeamento de Campos Customizados (Nome e descrição):**  Para utilizar esse mapeamento é necessário criar um campo customizado. Para saber como criar campos customizados, acesse a documentação [Cadastrar especificações ou campos de produto](https://help.vtex.com/pt/tutorial/criando-um-campo-de-produto--tutorials_106).  

Para o mapeamento funcionar, é necessário o seller seguir os seguintes passos:  

> ℹ️ O mapeamento de campos customizáveis está disponível apenas para **nome do produto** e **descrição do produto**. **Exemplo de nome para o novo campo:** `NTS_ProductName` para nome do produto e `NTS_ProductDescription` para descrição do produto.  

Para o mapeamento funcionar, é necessário o seller seguir os seguintes passos:  

1. Criar um campo do tipo `Texto grande`.  
2. Desativar a opção  `Exibe especificação`.  
3. Preencher os campos criados em cada produto cadastrado.  

O preenchimento desse campo deve ser realizado da seguinte maneira:

1. Preencha o campo DE com o nome do campo de origem.   Obrigatoriamente `ProductName` para título do produto ou Obrigatoriamente `ProductDescription` para descrição do produto.  
2. Preencha o campo PARA com o nome do novo campo.   `NTS_ProductName` para nome do produto e `NTS_ProductDescription` para descrição do produto.  
3. Clique no botão e uma regra de mapeamento será adicionada a sua integração.  

> ℹ️ Cada regra cadastrada mapeia apenas um campo. Caso o campo mapeado não tenha um valor preenchido, será enviado o valor padrão de `Título` ou `Descrição` cadastrados no catálogo.

