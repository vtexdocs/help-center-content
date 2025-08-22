---
title: 'Renovar token de API'
id: 7r4AzptYjXErGHadg9LnJ3
status: PUBLISHED
createdAt: 2024-09-30T18:40:04.374Z
updatedAt: 2025-08-13T14:19:22.951Z
publishedAt: 2025-08-13T14:19:22.951Z
firstPublishedAt: 2024-10-08T19:47:39.925Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: renewing-api-tokens
legacySlug: renovar-token-de-api-beta
locale: pt
subcategoryId: 3OlaStejO5MSzvDSU3VCH3
---

Quanto mais antigo o token, maior o risco de exposição e de potenciais danos à operação. O procedimento de renovação do token garante a continuidade da segurança da sua loja e minimiza possíveis vulnerabilidades.

Renove o token de API regularmente, se possível antes do alerta para renovação, para preservar a segurança da sua loja.

Siga o passo a passo abaixo para renovar o token de uma chave de API:

1. Na barra superior do Admin VTEX, clique no **avatar do seu perfil**, marcado pela inicial do seu email, e depois em *Configurações da conta > Chaves de API*.  
2. Certifique-se de que você está na aba **Geradas**.  
3. Na linha de uma chave de API, clique no menu ⋮ e depois em <i class="fas fa-sync"></i> `Renovar token`.

    Você poderá visualizar o novo token a partir de um link de acesso único, com duração de 24 horas se não houver acesso.

4. Clique em `Copiar` para copiar o link de acesso único ao novo token para a área de transferência. Este link será exibido apenas uma vez.
5. Na seção **Excluir token antigo**, marque uma das opções a seguir:

   * **Depois:** será necessário [excluir manualmente](#excluir-token-antigo) o token antigo assim que o novo token estiver em uso nas integrações. Os dois tokens estarão válidos e funcionais até a exclusão do antigo. Na listagem da aba **Geradas**, na coluna **Duração do token**, vão aparecer os prazos de duração dos dois tokens, até o antigo ser excluído.

   * **Agora:** o token antigo será excluído do sistema ao finalizar o processo de renovação e apenas o novo token será válido.

   > ℹ️ Caso a página seja fechada antes de selecionar uma forma de exclusão neste passo, a opção **Depois** será aplicada, ou seja, você precisará excluir o token antigo manualmente.

6. Clique em `Finalizar`.
7. Acesse o link copiado ou compartilhe-o com a pessoa que vai utilizar o novo token. O link pode ser acessado apenas uma vez e tem duração de 24 horas se não houver acesso.
8. Clique em `Copiar` para copiar o token da API para a área de transferência. Esse segredo será exibido apenas uma vez. Salve-o em um local seguro.

![one-time-link-pt](//images.ctfassets.net/alneenqid6w5/6EPIyJw435gQ2QkLoBBi9G/91c4436bbbdb34617b93d9b3c85b7f19/one-time-link-pt.png)

Ao finalizar a renovação, não será possível renovar o token novamente antes do link de acesso único ser acessado ou expirar no prazo de 24 horas. Se necessário, você pode [desfazer a renovação do token](#desfazer-renovacao-de-token) enquanto o link ainda for válido.

Se o link de acesso único expirar antes de ser utilizado, repita o passo a passo para renovar o token e gerar um novo link.

> ⚠️ A URL oficial para acessar o token segue sempre o formato `share.vtex.com/credentials/{token}`. O `{token}` é um identificador aleatório gerado no momento da criação ou renovação da chave. Verifique o formato do link antes de acessá-lo para evitar riscos de phishing ou acesso a páginas maliciosas.

## Excluir token antigo

> ℹ️ Certifique-se de que o token antigo não está mais em uso por nenhuma integração antes de excluí-lo. Este procedimento não pode ser desfeito.

Siga as instruções abaixo para excluir manualmente um token antigo, após a renovação. Este procedimento é possível apenas quando a opção de excluir o token antigo **Depois** for selecionada ao renovar um token.

1. Na barra superior do Admin VTEX, clique no **avatar do seu perfil**, marcado pela inicial do seu email, e depois em *Configurações da conta > Chaves de API*.  
2. Certifique-se de que você está na aba **Geradas**.  
3. Na linha de uma chave de API com o alerta `Exclusão pendente - Token antigo`, clique no menu ⋮ e depois em <i class="far fa-trash-alt"></i> `Excluir token antigo`.

   ![delete-pending-pt](//images.ctfassets.net/alneenqid6w5/2v3HtEXyMaNMI7rgu9bcx2/a6203039cb23902cafe71cdb270acdc5/delete-pending-pt.png)

4. Para confirmar, clique em `Excluir`.

## Desfazer renovação de token

> ℹ️ Este procedimento é possível apenas enquanto o token antigo não tiver sido [excluído](#excluir-token-antigo). Se o token antigo tiver sido excluído, será necessário renovar o token novamente ou [excluir a chave de API](https://help.vtex.com/pt/tutorial/chaves-geradas--7fnU4iZdvZKbxCaT3Ymdjc#excluir-chave).

Se você renovou o token por engano ou esqueceu de copiar o novo token gerado, siga os passos abaixo para desfazer a renovação.

1. Na barra superior do Admin VTEX, clique no **avatar do seu perfil**, marcado pela inicial do seu email, e depois em *Configurações da conta > Chaves de API*.  
2. Certifique-se de que você está na aba **Geradas**.  
3. Na linha de uma chave de API, clique no menu ⋮ e depois em <i class="fas fa-undo"></i> `Desfazer renovação`.  
4. Para confirmar, clique em `Desfazer`.

## Saiba mais

* [Chaves de API](https://help.vtex.com/pt/tutorial/chaves-de-api--4bFEmcHXgpNksoePchZyy6)
* [Configurar alerta para renovar tokens de API](https://help.vtex.com/pt/tutorial/configurar-a-duracao-de-chaves-de-api--kcGIFysFt02FDuhsfjQwZ)
* [Chaves geradas](https://help.vtex.com/pt/tutorial/chaves-geradas--7fnU4iZdvZKbxCaT3Ymdjc)
