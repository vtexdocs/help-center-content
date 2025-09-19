---
title: 'Cadastro da integração da Centauro'
id: 4EqL0hADU1AWvP0gTr4nyq
status: PUBLISHED
createdAt: 2020-10-20T18:55:02.489Z
updatedAt: 2024-07-02T19:28:22.448Z
publishedAt: 2024-07-02T19:28:22.448Z
firstPublishedAt: 2020-10-20T19:51:24.705Z
contentType: trackArticle
productTeam: Channels
slugEN: registering-the-centauro-integration
locale: pt
trackId: D8Qnjbr5lfLkUfMRhsfbj
trackSlugEN: cadastro-da-integracao-da-centauro
order: 4
---

Nessa etapa, você realizará o cadastro da sua loja na integração da Centauro. Para isso, siga os passos abaixo:

1.    No menu do Admin, clique em Integrações.
2.    Acesse a aba Configurações.
3.    Busque pela caixa da Centauro e clique em **Integrar**.
4.    Preencha os campos exibidos na tela. Abaixo, vamos detalhar como preencher cada campo.
5.    Com tudo preenchido corretamente, clique no botão **Salvar Configuração**.

## Detalhamento dos campos 

| Campo | Definição  |
| ---------- | ---------- | 
| ID do afiliado* | Esse campo deve ser preenchido com um código identificador para criação de um [afiliado](/pt/tutorial/o-que-e-afiliado) que ainda não esteja cadastrado no seu sistema. O código deve ser composto de três consoantes, sejam elas repetidas ou não, vogais não são aceitas. Sugestão: CNT. A configuração do conector cria automaticamente o afiliado. |
| Política comercial* | ID da política comercial que será utilizada para a integração com a Centauro. São os produtos dessa política comercial que serão enviados para o marketplace.|
| CNPJ * | CNPJ da empresa que será cadastrada para integração. |
| Token da Centauro * | Chave de acesso para comunicação entre VTEX e Centauro. Este token deve ser solicitado diretamente para Centauro e preenchido neste campo.|
| Estoque mínimo | Valor mínimo de estoque de segurança. Se a quantidade de itens em estoque de um produto estiver abaixo do valor escolhido, seu anúncio é pausado para evitar que sejam feitas vendas sem estoque durante o tempo de atualização da Centauro pela VTEX. Escolha com cuidado: essa configuração é aplicada a todos produtos. Verifique se algum produto deixaria de ser anunciado devido ao seu estoque inicial.|
| Account da Centauro | Nome da loja no ambiente da Centauro. |

**Mapeamento de Campos Customizados (Nome e descrição):**  Para utilizar esse mapeamento é necessário criar um campo customizado. Para saber como criar campos customizados, acesse a documentação [Cadastrar especificações ou campos de produto](/pt/tutorial/criando-um-campo-de-produto--tutorials_106).  

> ℹ️ O mapeamento de campos customizáveis está disponível apenas para **nome do produto** e **descrição do produto**. **Exemplo de nome para o novo campo:** `CTR_ProductName` para nome do produto e `CTR_ProductDescription` para descrição do produto.  

Para o mapeamento funcionar, é necessário o seller seguir os seguintes passos:  

1. Criar um campo do tipo `Texto grande`.  
2. Desativar a opção  `Exibe especificação`.  
3. Preencher os campos criados em cada produto cadastrado.  

O preenchimento desse campo deve ser realizado da seguinte maneira:

1. Preencha o campo DE com o nome do campo de origem.   
Obrigatoriamente `ProductName` para título do produto ou Obrigatoriamente `ProductDescription` para descrição do produto.  
2. Preencha o campo PARA com o nome do novo campo.   
`CTR_ProductName` para nome do produto e `CTR_ProductDescription` para descrição do produto.    
3. Clique no botão e uma regra de mapeamento será adicionada a sua integração.   

> ℹ️ Cada regra cadastrada mapeia apenas um campo. Caso o campo mapeado não tenha um valor preenchido, será enviado o valor padrão de `Título` ou `Descrição` cadastrados no catálogo.

