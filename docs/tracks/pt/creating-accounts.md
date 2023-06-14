---
title: 'Criar contas no Customer Credit'
id: 7FHLd0cmxqqGeEUuc8uioU
status: PUBLISHED
createdAt: 2018-11-06T20:24:28.924Z
updatedAt: 2023-05-12T12:20:09.076Z
publishedAt: 2023-05-12T12:20:09.076Z
firstPublishedAt: 2018-11-06T21:15:02.053Z
contentType: trackArticle
productTeam: Financial
slug: criando-contas
locale: pt
trackId: 1hCRg21lXYy2seOKgqQ2CC
trackSlugPT: customer-credit-como-comecar
---

O próximo passo é criar as contas dos clientes que você deseja oferecer crédito na sua loja. 

Há três formas de criá-las:

- Via Admin; 
- Pelo recurso importação em massa;  
- Via API.

<div class="alert alert-info">
<strong>Atenção</strong>: as contas do Customer Credit não são integradas à base de clientes cadastradas nas entidades do Master Data. As contas devem ser criadas na própria app antes ou depois do usuário ter fechado compras na loja.
</div>

## Criar contas individualmente

Caso o usuário prefira, é possível criar várias contas manualmente por meio do Admin.

Confira o passo a passo:

1. Acesse o __Admin__;
2. Clique no módulo __Customer Credit__;
3. Em seguida, clique em __Contas__;
4. Do lado direito da tela, clique no botão azul __“Novo”__;
5. Selecione o __tipo de documento__ que identificará a conta;
6. Digite o número do documento no campo __Documento__;
7. Preencha o campo __Email__;
8. Defina o __limite crédito__ disponível para a conta;
9. Clique no botão azul __“Confirmar”__.

O preenchimento do campo email no formulário é obrigatório, pois por meio do email (chave de acesso único ao sistema da VTEX), é possível autenticar o acesso do cliente aos limites de crédito de uma conta. Para saber mais sobre proteção de dados, acesse [Segurança do SmartCheckout](https://help.vtex.com/pt/tutorial/seguranca-do-smartcheckout--3SrJuuhrqwePUg1rp1exfB). 

Desse modo, a nova conta será exibida na página inicial da seção “Contas”.

## Criar contas com a importação em massa

Para criação de contas em massa, o usuário pode usar o recurso importação de arquivo CSV (Comma Separated Value) - um formato de planilha. 

Essa funcionalidade é muito útil visto que possibilita a importação de milhares de contas para o sistema de uma só vez.

1. Acesse o __Admin__;
2. Clique no módulo __Customer Credit__;
3. Em seguida, clique em __Contas__;
4. Do lado do botão __“Novo”__, clique na opção __Importar__;
5. No box que aparecer na tela, selecione a opção __Criar__;
6. Clique no botão azul __"Continuar"__;
7. Em seguida, clique na opção __Baixar modelo__.

Desse modo, você receberá seu computador um modelo de planilha em formato CSV. Você pode encontrá-lo na pasta *Downloads*.

O próximo passo é preencher as colunas listadas no documento com as informações referentes a cada uma das contas que você deseja criar.

Ao todo, a tabela conta com 13 colunas que podem ser preenchidas. Entretanto, a única obrigatória é a de e-mail, informação utilizada pelo sistema VTEX para identificar o usuário no SmartCheckout.

Quando você terminar de preencher a tabela e salvar todas as edições feitas, prossiga com o passo a passo:

1. Retorne a seção __Contas__ no Admin;
2. Novamente, clique na opção __Importar__;
3. Dessa vez, selecione a opção __Atualizar__ no box;
4. Clique no botão azul __"Continuar"__;
5. Insira a planilha no espaço __“Solte aqui seu CSV ou escolha ou arquivo”__;
6. Clique no botão __“Importar arquivo”__.

Pronto! Assim, suas contas serão criadas e apresentadas na página inicial da seção Contas.

Em contexto de criar novas contas, você pode conferir todo o histórico de importação. Para isso, basta clicar em “Histórico de importação” na página principal da seção Contas. 

Desse modo, também é possível checar se as importações foram feitas da forma correta. Caso contrário, as correções necessárias serão indicadas na interface. 

### Atualizar Contas por meio da importação em massa

Além disso, você também pode atualizar os dados - e-mail, limite de crédito, documento, document type, status e tolerância - de todas as suas contas de uma só vez por meio do recurso de importação em massa.

O processo é semelhante ao de criar contas. Entretanto, aqui considera-se que você já tem o modelo do arquivo CSV baixado na sua máquina.

Confira o passo a passo:

1. Acesse o __Admin__;
2. Clique no módulo __Customer Credit__;
3. Em seguida, clique em __Contas__;
4. Do lado do botão “Novo”, clique na opção __Importar__;
5. No box que aparecer na tela, selecione a opção __Atualizar__;
6. Clique no botão azul __"Continuar"__;
7. Em seguida, insira o arquivo CSV atualizado na *Drop Zone*;
8. Clique no botão __“Importar Arquivo”__.

Por fim, espere o *upload* completo da planilha. 

## Criar contas por API

Outra alternativa é criar contas por meio de APIs com o [endpoint](https://developers.vtex.com/docs/api-reference/customer-credit-api#put-/api/creditcontrol/accounts/-accountId- "endpoint") `POST Open or Change Account`.

Preencha o body com as seguintes informações:

    {
      "id": "id",
      "creditLimit": "number",
      "document": "CPF or CNPJ or Other",
      "email": "email"
    }

Para mais detalhes, veja a nossa [documentação técnica sobre as APIs de Customer Credit](https://developers.vtex.com/docs/guides/customer-credit-api-overview "documentação técnica sobre as APIs de Customer Credit.").
