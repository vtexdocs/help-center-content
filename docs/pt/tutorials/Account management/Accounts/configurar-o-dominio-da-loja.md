---
title: 'Configurar o domínio da loja'
id: tutorials_2450
status: PUBLISHED
createdAt: 2017-04-27T21:55:00.603Z
updatedAt: 2024-03-12T19:53:14.012Z
publishedAt: 2024-03-12T19:53:14.012Z
firstPublishedAt: 2017-04-27T23:03:51.625Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: configuring-the-store-domain
locale: pt
legacySlug: configurando-dominios-no-license-manager
subcategoryId: yMp6sKDiJEi66CGAIQ4ma
---

As configurações relacionadas ao domínio são necessárias para que um endereço web seja corretamente direcionado a uma loja VTEX. Neste guia, explicamos:

* [Estrutura do endereço da loja](#estrutura-do-endereco-da-loja)
* [Regras para o host principal](#regras-para-o-host-principal)
* [Como cadastrar um novo host](#cadastrar-um-novo-host)
* [Como mudar o host de uma loja ativa](#mudar-o-host)

## Estrutura do endereço da loja

O endereço da loja é composto pelos elementos ilustrados a seguir:

![url-diagram-pt (3)](https://images.ctfassets.net/alneenqid6w5/kg98gTuZiMlewhPiRAyaF/4d3a9763fcd76907f3587f77d8cc9947/url-diagram-pt__3_.png)

| Elemento | Descrição | Exemplo |
|---|---|---|
| Protocolo | Protocolo de comunicação utilizado na internet. | `https://` |
| Subdomínio | Prefixo adicionado ao nome de domínio. | `www` |
| Domínio | Nome exclusivo que serve para localizar e identificar sua loja na web. | `mystore` |
| Domínio de nível superior (TLD) | Sufixo após o ponto final de um nome de domínio. | `com` |
| Nome de domínio / Domínio puro / Domínio raiz | Domínio + domínio de nível superior. | `mystore.com` |
| Host | Subdomínio + domínio + domínio de nível superior. | `www.mystore.com` |

Uma vez definido o domínio da sua loja, você precisa configurar o host principal no Admin VTEX para realizar a comunicação entre o endereço e o conteúdo da loja.

## Regras para o host principal

Antes de prosseguir com a configuração dos endereços da sua loja, considere as seguintes práticas para garantir uma implementação bem-sucedida:

* **Provedores de CDN:** A VTEX usa dois provedores de CDN nas lojas: **Cloudfront** e **Azion**. É importante que o domínio da sua loja não esteja cadastrado nestes serviços no momento do apontamento. Do contrário, haverá falha no provisionamento de CDN para sua loja e, consequentemente, no go-live. Portanto, se você tem o domínio da loja registrado na plataforma da Cloudfront ou Azion, remova este registro antes de realizar o apontamento de DNS para a VTEX.
* **Endereço principal:** A loja deve ter um único host principal, que irá apontar para os servidores da VTEX. Este host **deve conter um subdomínio**, que pode ser `www` ou outros.
* **Endereços adicionais:** Qualquer endereço adicional, seja com um domínio diferente ou uma versão sem subdomínios, deve ser redirecionado para o único host principal, conforme descrito em [Redirecionamentos](#redirecionamentos).

### Exemplos de host

Confira exemplos de host abaixo e observe quais podem ser utilizados como host principal:

| Exemplo de host | Pode ser utilizado como host (✔️) ou não (❌) | Explicação |
|---|---|---|
| `www.minhaloja.com` | ✔️ | Contém o subdomínio `www`. |
| `minhaloja.com` | ❌ | Não contém subdomínio. Para configurar o acesso por esse endereço, é necessário configurar um host com subdomínio como `www.minhaloja.com` e, em seguida, criar um redirecionamento. Leia [Melhores práticas para acessar a loja sem www](https://help.vtex.com/pt/tutorial/configuring-access-without-www--tutorials_4278) para mais detalhes. |
| `loja.minhamarca.com` | ✔️ | Contém o subdomínio `loja`. |
| `www.loja.minhamarca.com` | ✔️ | Contém dois subdomínios: `www` e `loja`. |

### Redirecionamentos

Para garantir que sua loja seja acessível por meio de diferentes URLs, tais como `www.minhaloja.com` e `minhaloja.com`, deve-se [configurar um único host principal](#cadastrar-um-novo-host) e redirecionar os endereços adicionais para o endereço principal. Saiba mais sobre redirecionamentos:

* [Redirecionamento de outros endereços](https://help.vtex.com/pt/tutorial/redirecionamento-de-outros-enderecos--3Xi2AeLUx2QpJQu8DTX8KQ)
* [Melhores práticas para acessar a loja sem www](https://help.vtex.com/pt/tutorial/configurando-acesso-sem-www--tutorials_4278)

Note que é recomendável implementar um único host na sua loja.

## Cadastrar um novo host

Para cadastrar um novo host, ele deve estar de acordo com as práticas apresentadas na seção [Regras para o host principal](#regras-para-o-host-principal). Siga as instruções abaixo:

1. Na barra superior do Admin VTEX, clique no avatar do seu perfil, marcado pela inicial do seu email.
2. Clique no botão **Configurações da conta**.
3. Clique em **Conta**.
4. Clique na aba **Lojas**.
5. Clique no botão de ações correspondente à loja em que deseja cadastrar o host e clique em `Editar`.
6. Insira o host no campo **Hosts**. Por exemplo,` www.minhaloja.com`.
7. Clique no botão `Adicionar`.
8. Clique no botão `Salvar`.

Após essas etapas, será possível [configurar o apontamento de DNS para a VTEX](https://help.vtex.com/pt/tutorial/configurando-o-apontamento-de-dns-para-a-vtex--tutorials_4280).

>⚠️ Lojas [FastStore](https://www.faststore.dev/) também precisam configurar um endereço com o subdomínio `secure`. Acesse o guia [Configuring external DNS for a custom domain](https://www.faststore.dev/docs/go-live/2-configuring-external-dns) para mais detalhes.

>❗ Caso a sua operação possua mais de uma conta VTEX ou [subcontas](https://help.vtex.com/pt/tutorial/como-criar-multiloja-multidominio--tutorials_510), não troque o host de uma conta para outra. Isso provocará falhas em diversos aspectos da sua loja.

## Mudar o host

A plataforma VTEX é preparada para suportar mudanças de host sem impactos negativos. Caso seja necessário alterar o host da loja, siga o passo a passo abaixo:

1. Crie novas entradas host para a loja desejada, seguindo o passo a passo descrito em [Cadastrar um novo host](#cadastrar-um-novo-host). Nesse momento, o DNS do novo domínio ainda não deve estar apontado para a VTEX.
2. No Admin VTEX, verifique as configurações do Checkout em **Configurações da Loja > Storefront > Checkout**, conforme descrito em [Configurar template no Smartcheckout](https://help.vtex.com/pt/faq/configurar-template-no-smartcheckout/). Esse passo é fundamental para que o Checkout continue funcionando após a mudança. 

    É necessário conferir se os sites configurados estão relacionados à conta cadastrada em **Configurações da conta > Contas**. Confira [Gerenciamento da conta](https://help.vtex.com/pt/tutorial/account-details-page--2vhUVOKfCaswqLguT2F9xq) para mais detalhes.

3. Aponte o DNS do novo domínio para a VTEX. Leia mais sobre [apontamento de DNS](https://help.vtex.com/pt/tutorial/configurando-o-apontamento-de-dns-para-a-vtex/).
4. Se a sua loja utiliza [VTEX IO - Store Framework](https://developers.vtex.com/docs/guides/storefront-implementation) ou [FastStore](https://developers.vtex.com/docs/guides/faststore/docs-what-is-faststore), entre em contato com o [suporte VTEX](https://help.vtex.com/pt/support) e solicite apontamento interno, informando o novo domínio. Uma vez aberto o chamado, o time de suporte tem até três dias úteis para analisar as configurações e realizar o apontamento.
5. Após a confirmação de apontamento interno e propagação de DNS do novo host, exclua os hosts antigos, mantendo apenas o novo.
