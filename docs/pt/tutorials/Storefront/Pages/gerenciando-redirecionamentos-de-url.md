---
title: 'Gerenciando redirecionamentos de URL'
id: 3UJuFrU8imSVWg134mkvJV
status: PUBLISHED
createdAt: 2022-02-03T13:17:46.873Z
updatedAt: 2023-11-14T18:03:08.019Z
publishedAt: 2023-11-14T18:03:08.019Z
firstPublishedAt: 2022-02-03T14:42:10.000Z
contentType: tutorial
productTeam: VTEX IO
author: 1DedyaVUPp5wLAvjY7wKKv
slugEN: managing-url-redirects
locale: pt
legacySlug: gerenciando-redirecionamentos-de-url
subcategoryId: 1znnjA17XqaUNdNFr42PW5
---

**Redirecionamentos** é uma funcionalidade que direciona o cliente para qualquer outra página, seja interna, seja externa ao seu site. Esse redirecionamento é feito na área de busca, utilizando termos ou filtros selecionados. 

>⚠️ Para criar, editar ou apagar redirecionamentos, o usuário do Admin precisa ter um perfil de acesso com o [recurso do License Manager](https://help.vtex.com/pt/tutorial/recursos-do-license-manager--3q6ztrC8YynQf6rdc6euk3) **CMS Settings**. Você pode atribuir um perfil de acesso com o recurso ao usuário seguindo as instruções do artigo [Gerenciando usuários](https://help.vtex.com/pt/tutorial/gerenciando-usuarios--tutorials_512#editar-usuarios), ou criar um novo perfil de acesso que inclui o recurso seguindo as instruções do artigo [Perfis de acesso](https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc#criando-um-perfil-de-acesso).

É possível vários redirecionamentos em uma única URL. Para criar um redirecionamento, siga o tutorial abaixo. 

1. No Admin VTEX, clique em **Storefront** >  **Redirecionamentos**.
2. Clique em `Novo redirecionamento`.
3. Preencha os campos a seguir: 
**De**: insira a URL da página a partir da qual você deseja redirecionar os visitantes. A URL não deve conter o domínio, por exemplo: `/-máscara-regeneradora-algas-marinhas/p`.
**Para**: insira a URL da página a qual você deseja redirecionar os visitantes. A URL não deve conter o domínio, por exemplo: `/condicionador-de-leite-ultra-hidratante/p`. 
4. Na caixa de seleção, indique se esse redirecionamento é temporário ou permanente. Caso seja temporário, é preciso definir a data final.
5. Clique em `Salvar` para finalizar.

![gerenciando redirecionamentos pt 1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)
## Importar redirecionamento

Para importar um redirecionamento, siga os passos abaixo.

1. Clique em <i class="fas fa-upload"></i> `Importar`.
2. Selecione o arquivo CSV do seu computador, garantindo que ele utilize ponto e vírgula (`;`) como separador.
3. Clique em `Importar arquivo`.
4. Clique em `Salvar` para finalizar.

>⚠️ Observe que alguns editores podem modificar automaticamente o separador. Portanto, antes de importar um arquivo, verifique se ele está formatado corretamente em CSV, utilizando o ponto e vírgula (`;`) como separador de valores. Não serão aceitos arquivos utilizando outros separadores como vírgula (`,`) e espaço de tabulação (`&nbsp;&nbsp;`).
>
> 
>
> 
> Alguns editores, como o Google Sheets, exportam arquivos CSV utilizando vírgula (`,`) como separador por padrão, e podem não permitir o uso de ponto e vírgula (`;`). Para esses casos, é recomendado recorrer a outros editores que permitam substituir os separadores ou salvar o arquivo utilizando ponto e vírgula (`;`) como separador.

## Exportar redirecionamento 

Se deseja exportar seus redirecionamentos, clique em <i class="fas fa-download"></i> `Exportar` e eles serão baixados no seu computador. 

>ℹ️ Não é possível criar redirecionamentos por meio de rotas pré-definidas como “home” "/", "login", "account", etc.). É recomendada a criação manual seguindo as instruções mencionadas acima.

