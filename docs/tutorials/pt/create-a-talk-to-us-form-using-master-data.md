---
title: 'Criar formulário de Fale Conosco usando Master Data'
id: frequentlyAskedQuestions_614
status: DRAFT
createdAt: 2019-01-24T20:45:56.562Z
updatedAt: 2021-06-10T20:28:29.450Z
publishedAt: 
firstPublishedAt: 2019-01-24T22:13:16.176Z
contentType: tutorial
productTeam: Master Data
author: authors_31
slug: criar-formulario-de-fale-conosco-usando-master-data
locale: pt
legacySlug: criar-formulario-de-fale-conosco-usando-master-data
subcategory: 5tSNDlvmik8gGuKw2goW4q
---

EsTe artigo tem como objetivo pontuar todos os detalhes necessários para criação de formulário de Fale Conosco utilizando o Master Data.

### Ajustes necessários no Master Data (Dynamic Storage)

**Criar entidade de dados CONTATO**

Cada contato será armazenado em uma nova entidade (relacionada ao Cliente) no Master Data. Segue, abaixo, as definições dessa entidade.

Sigla: _CO_
Nome: _Contato_
Tipo de chave primária: _Gerar um sequencial numérico (Default)_
Campos:

- _client | Cliente | Relationship | &#8220;Público Para Escrita&#8221; / &#8220;É buscável&#8221; / &#8220;É filtro&#8221; / &#8220;Entidade de Dados para relacionar = Cliente&#8221; / &#8220;Campo relacionado para visualização = email&#8221;_
- _description | Descrição | Text | &#8220;Público Para Escrita&#8221;_
- _type | Tipo | Varchar 100 | &#8220;Público Para Escrita&#8221; / &#8220;É buscável&#8221; / &#8220;É filtro&#8221;_

Após a criação, não esqueça de publicar a entidade na listagem.

**Alterar entidade de dados CLIENTE**

Como o formulário de Fale Conosco também manipula informações do Cliente, alguns campos precisam ser alterados nessa entidade. Segue, abaixo, as alterações necessárias.

Campos:

- firstName | Nome | Varchar 50 | &#8220;Permitir Nulo&#8221; / &#8220;Público Para Escrita&#8221; / &#8220;É buscável&#8221;
- lastName | Sobrenome | Varchar 100 | &#8220;Permitir Nulo&#8221; / &#8220;Público Para Escrita&#8221; / &#8220;É buscável&#8221;
- email | Email | Email | &#8220;Publico Para Leitura&#8221; / &#8220;Público Para Escrita&#8221; / &#8220;Público Para Filtrar&#8221; / &#8220;É buscável&#8221;
- homePhone | Telefone Residencial | Telephone | &#8220;Permitir Nulo&#8221; / &#8220;Público Para Escrita&#8221;
- phone | Telefone | Telephone | &#8220;Permitir Nulo&#8221; / &#8220;Público Para Escrita&#8221;

Após as alterações, não esqueça de publicar a entidade na listagem.

**Criar trigger Fale Conosco**

Quando um cliente entra em contato com a loja através do formulário de Fale Conosco, o sistema deve disparar e-mails através de trigger. Segue, abaixo, a definição da trigger para essa função.

- Nome: _Fale Conosco_
- Entidade de dados: _Contato_
- Condição de trigger: _Um registro for inserido_
- Agendamento: _Executar o mais rápido possível_
- Ações em caso positivo: _Enviar e-mail (Sugiro enviar um para o cliente e outro pro lojista)_

**Sugestão e template de e-mail para lojista:**

_Olá, Lojista,&lt;br /&gt;&lt;br /&gt;_

_A Loja do Suporte acaba de receber um novo contato pelo formulário de Fale Conosco.&lt;br /&gt;&lt;br /&gt;_

- _&lt;b&gt;Informações do Contato:&lt;/b&gt;&lt;br /&gt;_
- _Nome: {!client.CL.firstName}&lt;br /&gt;_
- _Sobrenome: {!client.CL.lastName}&lt;br /&gt;_
- _Email: {!client.CL.email}&lt;br /&gt;_
- _Telefone: {!client.CL.homePhone}&lt;br /&gt;_
- _Celular: {!client.CL.phone}&lt;br /&gt;_
- _Tipo: {!type}&lt;br /&gt;_
- _Descrição: &lt;br /&gt;{!description}&lt;br /&gt;&lt;br /&gt;_

_Para responder ao cliente, basta responder esse e-mail.&lt;br /&gt;&lt;br /&gt;_

_&lt;b&gt;Equipe Loja do Suporte&lt;/b&gt;_

**Sugestão de template de e-mail para cliente:**

_Olá, {!client.CL.firstName},&lt;br /&gt;&lt;br /&gt;_

_Obrigado por entrar em contato conosco. Em breve nossa equipe entrará em contato com você.&lt;br /&gt;&lt;br /&gt;_

- _&lt;b&gt;Informações do Contato:&lt;/b&gt;&lt;br /&gt;_
- _Nome: {!client.CL.firstName}&lt;br /&gt;_
- _Sobrenome: {!client.CL.lastName}&lt;br /&gt;_
- _Email: {!client.CL.email}&lt;br /&gt;_
- _Telefone: {!client.CL.homePhone}&lt;br /&gt;_
- _Celular: {!client.CL.phone}&lt;br /&gt;_
- _Tipo: {!type}&lt;br /&gt;_
- _Descrição: &lt;br /&gt;{!description}&lt;br /&gt;&lt;br /&gt;_

_&lt;b&gt;Equipe Loja do Suporte&lt;/b&gt;_

**Criação de template de Fale Conosco no CMS**

Após concluir as configurações indicadas acima, será necessário criar um template no CMS com o formulário, que será responsável por submeter as informações para a API do Master Data. Sugerimos a criação de uma landing-page para essa função (ex.: /faleconosco).

Para carregar o formulário no template criado, utilize o plugin anexado neste artigo e siga as instruções abaixo.

O plugin foi desenvolvido para facilitar a instalação do formulário no template. Para utiliza-lo, não é necessário definir qualquer estrutura HTML, apenas o elemento que receberá o formulário. Além disso, será necessário indicar nas configurações, o nome da loja e a sigla da entidade de dados, informações essenciais para a integração por API com o Master Data.

**Atributos de Configuração:**

- storeName: _Indica o nome da conta utilizada na API do MasterData_
- dataEntity: _Indica a sigla da entidade de dados utilizada na API do MasterData_
- htmlElementId: _Indica o ID do elemento HTML que receberá o formulário_
- messageLoading: _Mensagem de carregamento do formulário (ao salvar)_
- messageValidation: _Mensagem de validação de formulário_
- messageSuccess: _Mensagem de sucesso_
- messageError: _Mensagem de erro_

**Dependências do Plugin:**

- jQuery
- Bootstrap

[Para maiores detalhes, acesse o exemplo em anexo](//assets.ctfassets.net/alneenqid6w5/6vHFk9dnVeUoqICKGiSqqC/70f380832091ceaae3576a82f56a87d5/contactMasterData.zip "Para maiores detalhes, acesse o exemplo em anexo").

**Importante**: esse plugin foi desenvolvido para auxiliar o desenvolvimento do formulário de Fale Conosco utilizando Master Data. A VTEX **NÃO** oferece suporte a essa extensão e seu código é aberto, podendo sofrer alterações e adaptações.
