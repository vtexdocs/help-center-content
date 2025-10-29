---
title: 'Configurar Adaptador'
id: 5ICnxFovDDDGPWmt8aj9yy
status: PUBLISHED
createdAt: 2021-10-05T21:54:27.970Z
updatedAt: 2021-10-06T16:21:21.766Z
publishedAt: 2021-10-06T16:21:21.766Z
firstPublishedAt: 2021-10-06T16:13:39.161Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: configurar-adaptador
locale: pt
trackId: 132YFN170Jvs6ZUBGh8w2e
trackSlugEN: adaptador-vtex
order: 3
---

Abaixo você encontrar informações sobre como você efetua a configuração do ambiente do adaptador para que ele possa se comunicar com a plataforma de e-commerce VTEX.

## Obter a chave e o token de acesso na VTEX para cadastrar no adaptador

1. Para executar este procedimento você deve abrir o administrador da sua loja VTEX e a tela de configuração do adaptador. Sugerimos fazer isto em duas abas separadas do seu navegador preferido.
2. No administrador da VTEX (`https://{suaconta}.myvtex.com.br/admin`), clique em **Gerenciamento de contas** e, em seguida, em **Contas**.
![imagem-adaptador3](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/erp/adaptador-vtex/configurar-adaptador_1.png)
3. Digite o nome da sua conta na barra de pesquisa e pressione o botão `Enter`.
4. Clique no nome da sua conta. Você será redirecionado para a página **Editar conta**.
5. Na seção **Segurança**, clique em `Gerar appKey e appToken`.
6. Digite um rótulo para o par appKey e appToken que você está criando.
7. Clique em `Gerar novos tokens`.
8. Por uma questão de segurança, é mostrado apenas uma vez. Copie esse token e salve-o em um local seguro para usá-los na tela de configuração do adaptador.
9. Na tela do adaptador, você deve colocar os valores copiados nos respectivos campos.
![imagem-adaptador-4](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/erp/adaptador-vtex/configurar-adaptador_2.png)
10. Preencha o email para receber notificações do adapter. Este email será utilizado para lembrete de senha.
11. Preencha o campo app-Key com o valor configurado no ambiente VTEX.
12. Preencha o campo appToken com o valor gerado no ambiente VTEX.
13. Por fim, clique no botão `SALVAR`. Aguarde o adaptador fazer a validação das configurações junto ao ambiente da VTEX. 
> ℹ️ Em caso de falha, você deve revisar as configurações inseridas em cada um dos campos. é importante garantir que não existem espaços (Antes e depois) dos valores contidos nas caixas.
14. Após a confirmação de sucesso na autenticação, você já pode fechar a tela.

## Procedimento para configurar campos de controle da integração com ERP

Você deve criar os campos da tabela abaixo dentro do MasterData.

![imagem-adaptador-5](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/erp/adaptador-vtex/configurar-adaptador_3.png)

> ⚠️ Você deve criar estes campos antes de executar as operações de migração de dados da Ciashop para VTEX.

Você deve criar os campos acima individualmente, para isso siga os passos a seguir:

1. Acesse o administrador da loja VTEX e Clique em **Master Data**.
2. Clique em **Create applications**.
3. Abaixo de **Configurações**, clique em **Estrutura de dados**.
4. Na página clique na aba **Data Entities**.
5. Encontre a entidade **CL**.
6. Clique sobre o ícone <i class="fas fa-pencil-alt"></i> para editar.
7. Clique em um dos botões `Novo campo`.
8. Preencha as colunas de **Name**, **Display Name** e **Type** com as informações da tabela acima.
9. Clique no botão <i class="fas fa-cog"></i> e, sem seguida, marque os campos contidos nas seções: **General Settings**, **Search And Filter Settings**, **Default Value** e **Field Description** de acordo com as informações da tabela acima.
10. Clique no botão `Salvar`.
11. Desse modo, você retornará para a página de principal da aba **Entidade de Dados**. Para finalizar, você precisa publicar o campo. Basta localizar a linha da entidade em que o campo foi adicionado e clicar no ícone <i class="fas fa-save"></i>.
12. Em seguida, será exibida na tela a seguinte mensagem: “Publicação realizada com sucesso. Se há campos configurados como Filtro ou Buscável é preciso clicar no botão de reindexação”. Se esse for o caso, na linha da entidade alterada, clique no ícone setas para reindexar a entidade. Assim, a criação do campo será concluída.

Para colocar o campo criado dentro do fórmulário de clientes, você deve seguir os passos abaixo.

1. No topo da página, clique em **Master Data**.
2. Selecione a opção **Master Data**.
3. Ao lado de **Profile System**, clique no botão <i class="fas fa-cog"></i>.
4. No formulário desejado, clique no ícone <i class="fas fa-pencil-alt"></i> para editar.
5. Na aba **Campos da Listagem**, selecione os campos que deseja exibir na listagem da aba.
6. Clique na aba **Schemas de Layout**.
7. Arraste o campo da lista **Campos disponíveis** para coluna **Campos da coluna 2**.
8. No canto inferior direito da tela, clique no botão `Salvar`.

> ⚠️ Caso estes passos não sejam executados, não será possível enviar os clientes criados na VTEX para o ERP.

## Configurar campos customizados

Para trabalhar com integração de campos customizados de produto, você deve criar o campo desejado na VTEX, seguindo os passos abaixo:

1. Acesse o administrador da loja VTEX e clique em **Master Data**.
2. Clique em **Create applications**.
3. Abaixo de **Configurações**, clique em **Estrutura de dados**.
4. Na página clique na aba **Entidade de dados**.
5. Encontre a entidade **CL**.
6. Clique sobre o ícone <i class="fas fa-pencil-alt"></i> para editar.
7. Clique em um dos botões `Novo campo`.
8. Preencha a coluna **Name** com o nome do campo enviado pelo ERP.
9. Preencha a coluna **Display Name** com o nome amigável para o campo.
10. Escolha na coluna **Type** o tipo do campo. Geralmente é utilizado o tipo String que permite caracteres alfanuméricos.
11. Clique no botão <i class="fas fa-cog"></i> e, sem seguida, marque os campos contidos nas seções: **General Settings**, **Search And Filter Settings**, **Default Value** e **Field Description** marque os campos de acordo com a necessidade do campo que você está criando.
12. Clique no botão `Salvar`.
13. Desse modo, você retornará para a página de principal da aba **Entidade de Dados**. Para finalizar, você precisa publicar o campo. Basta localizar a linha da entidade em que o campo foi adicionado e clicar no ícone <i class="fas fa-save"></i>.
14. Em seguida, será exibida na tela a seguinte mensagem: “Publicação realizada com sucesso. Se há campos configurados como Filtro ou Buscável é preciso clicar no botão de reindexação”. Se esse for o caso, na linha da entidade alterada, clique no ícone setas para reindexar a entidade. Assim, a criação do campo será concluída.

## Configurar os métodos de pagamento corretamente na VTEX

1. No administrador da loja, dentro de condições de pagamento, usada durante a criação dos métodos de pagamento no ambiente VTEX, você deve selecionar o o campo abaixo para inserir o nome do meio de pagamento.
![imagem-adaptador-6](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/erp/adaptador-vtex/configurar-adaptador_4.png)
2. Você deve escolher uma dos valores da lista abaixo, contidos na coluna **Nome da Regra** e colocá-lo no campo sinalizado acima, de acordo com o método de pagamento que está configurando. Exemplo: se você estiver configurando o Boleto Bancário Bradesco, então deve colocar o nome Bradesco Registrado.
![lista-da-regra-metodo-pagamento-adaptador](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/erp/adaptador-vtex/configurar-adaptador_5.png)
