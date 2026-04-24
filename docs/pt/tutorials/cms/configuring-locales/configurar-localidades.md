---
title: "Configurar localidades"
createdAt: 2026-03-27T17:08:52.219Z
updatedAt: 2026-04-01T17:08:52.219Z
contentType: tutorial
productTeam: CMS
slugEN: configuring-locales
locale: pt
order: 1
---

Uma localidade define o idioma e as configurações regionais para o conteúdo da loja. As localidades possibilitam experiências de compra em múltiplos idiomas ao permitirem a configuração de idiomas e de regras de fallback.  

Com as localidades, você pode gerenciar o conteúdo do storefront para vários mercados em uma única loja. Em vez de duplicar páginas ou manter lojas separadas para cada região, você pode definir as localidades da loja (por exemplo, `en-US` ou `pt-BR`) e criar versões localizadas da mesma entrada de conteúdo.  

Neste guia, confira como configurar as localidades da sua loja.

## Antes de começar

* Antes de configurar as localidades, é importante entender dois conceitos-chave que determinam como o conteúdo aparece no storefront. Compreender esses conceitos ajuda você a desenvolver uma estratégia de localização eficaz e a evitar a duplicação desnecessária de conteúdo.

| Conceito | Descrição |
| :---- | :---- |
| **[Estratégias de fallback de localidade](/pt/docs/tutorials/understanding-locale-fallback-rules):** | Define qual conteúdo o sistema exibe quando uma localidade não tem seu próprio conteúdo localizado. |
| [**Conexão de localidade com bindings:**](#como-as-localidades-se-conectam-aos-bindings)| Explica como o storefront escolhe a localidade correta com base na configuração do binding. |

<!-- * Para storefronts [FastStore](https://developers.vtex.com/docs/guides/faststore): Você deve implementar o recurso de Localização no projeto da loja. Para isso, siga as instruções em Gerenciando a internacionalização com o recurso de Localização. -->

* Certifique-se de que o seguinte [recurso](https://help.vtex.com/pt/docs/tutorials/license-manager-resources) esteja associado ao seu [perfil de acesso](https://help.vtex.com/pt/docs/tutorials/roles):

| Produto | Categoria | Recurso |
| :---- | :---- | :---- |
| Commerce Content | Stores | Create Store |

## Acessar a página de Localidades

Para acessar a página de **Localidades**, abra o Admin VTEX e vá para **Conteúdo > Lojas**. Selecione a loja que deseja configurar clicando em seu card e, em seguida, clique em **Localidades**.

![configuring-locales-overview](https://vtexhelp.vtexassets.com/assets/docs/src/locales-overview-pt___12fcb33f9d43ff4c9f9569a64bf04ca6.png)

A tabela a seguir mostra as opções disponíveis na página:

| Opção | Descrição |
| :---- | :---- |
| **Pesquisar** | Filtra a lista de localidades existentes. |
| **Criar localidade** | Abre um painel lateral para adicionar uma nova configuração de idioma e região à sua loja. |
| **Localidade** | Exibe o nome e o código da localidade (por exemplo, `Inglês (EUA)` e `en-US`), representando a combinação específica de idioma e região configurada para a loja. |
| **Idioma** | Especifica o idioma base atribuído à localidade (por exemplo, inglês ou português). |
| **Região** | Especifica a região ou o país associado ao idioma (por exemplo, Estados Unidos ou Brasil). |
| **Localidade padrão** | Define a localidade padrão que o sistema selecionará se nenhuma localidade for fornecida. |
| **Fallback** | Define a localidade que o sistema exibe quando o conteúdo não está disponível na localidade selecionada. |
| **Status** | Indica se uma localidade está **Ativa** ou **Inativa**. Quando uma localidade está inativa, o conteúdo não pode ser publicado ou exibido no storefront para essa localidade específica. |
| **Opções (`⋮`)** | Abre um menu com as opções: **Editar:** Editar a configuração específica da localidade. **Desativar:** Alterar o status da localidade para **Inativo**. |

## Criar uma nova localidade

Para criar uma nova localidade para sua loja, siga estas etapas:

1. Na página de **Localidades**, clique em `Criar localidade`. Um painel lateral aparecerá para criar a localidade com os seguintes campos:

    ![creating-a-new-locale](https://vtexhelp.vtexassets.com/assets/docs/src/creating-locale-pt___fc77a9b9a66ae8441fa28e7c2a63ab93.png)

    | Nome do campo | Descrição | Exemplo de valor |
    | :---- | :---- | :---- |
    | **Nome** | Adicione o nome da localidade. | `Inglês (EUA)` |
    | **Ativo** | Selecione esta caixa para tornar a localidade disponível na sua loja após criá-la. | - |
    | **Tornar esta a localidade padrão** | Selecione esta opção para definir a localidade como padrão. A localidade padrão serve como fonte principal de conteúdo e como fallback para outras localidades. Ao criar sua primeira localidade, você deve selecionar esta opção. É possível alterar a localidade padrão posteriormente. | - |
    | **Idioma** | Selecione os idiomas disponíveis. Para mais informações, consulte a lista de [Idiomas compatíveis](/pt/docs/tutorials/supported-languages-and-regions#idiomas-compativeis). | `Inglês (en)` |
    | **Região** | Selecione a região disponível. Para mais informações, consulte a lista de [Regiões compatíveis](/pt/docs/tutorials/supported-languages-and-regions#regioes-compativeis). | `Canadá (CA)` |
    | **Localidade de fallback** | Selecione a localidade exibida quando o conteúdo não está disponível na localidade. Para criar uma localidade de fallback, siga as instruções em [Definir uma localidade de fallback](#definir-uma-localidade-de-fallback). | `en-US` |

2. Após preencher os campos acima, clique em `Criar`.

## Criar a localidade padrão

A localidade padrão define o idioma e a região padrões para criar conteúdo para a loja. Se uma solicitação não especificar uma localidade, o sistema retorna automaticamente o conteúdo da localidade padrão para garantir que sempre haja uma resposta.

### Definir uma localidade de fallback

Ao [criar uma localidade](#criar-uma-nova-localidade), você pode designar uma **localidade de fallback** como fonte de conteúdo quando nenhum conteúdo estiver definido na localidade. Isso ajuda a reduzir a duplicação de conteúdo ao gerenciar múltiplas localidades, definindo conteúdo localizado apenas para os campos que diferem. Isso significa que você não precisa traduzir ou duplicar cada campo para cada localidade, apenas os que requerem alterações.

## Como as localidades se conectam aos bindings

As localidades são associadas aos bindings do storefront usando os códigos ISO de [idioma](https://www.iso.org/iso-639-language-code) e [país](https://www.iso.org/iso-3166-country-codes.html) (por exemplo, `en-US`). Cada binding é configurado com um código ISO específico. Quando o storefront solicita conteúdo, ele envia esse código ao CMS. O sistema então procura uma localidade com um código ISO correspondente e retorna o conteúdo correspondente.

Por exemplo:

* Se um binding estiver configurado com `en-US`, o CMS retorna o conteúdo da localidade Inglês-EUA.
* Se um binding estiver configurado com `pt-BR`, o CMS retorna o conteúdo da localidade Português-BR.
* Se nenhuma localidade corresponder ao código ISO do binding, o sistema retorna o conteúdo da localidade padrão.
