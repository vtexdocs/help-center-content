---
title: 'Gerar arquivo HAR para debugar problemas na loja'
id: 15xVlw8nuakk2k6Cao4k2Q
status: PUBLISHED
createdAt: 2018-02-23T13:16:02.404Z
updatedAt: 2019-12-31T15:25:44.314Z
publishedAt: 2019-12-31T15:25:44.314Z
firstPublishedAt: 2018-02-23T14:02:06.722Z
contentType: tutorial
productTeam: Others
author: authors_24
slugEN: generating-a-har-file
locale: pt
legacySlug: gerar-arquivo-har-para-debugar-problemas-na-loja
subcategoryId: 1VvCpaa8NCA6a0MK6W6oWg
---

Ao buscar soluções para um problema complexo, pode ser que nosso time de suporte precise receber informações adicionais sobre os requests web gerados em seu browser enquanto o problema ocorre.

Um recurso útil para isso é o log de requests gerado pela ferramenta de desenvolvedor do browser (o dev tools). 

Por meio dele você pode gerar um __arquivo HAR__, que contém informações detalhadas sobre cada request. Depois, basta enviá-lo ao nosso time de suporte.

>⚠️ O arquivo HAR contém informações sensíveis sobre sua loja. Compartilhe-o somente com o time de suporte VTEX.

>⚠️ Abaixo temos o passo a passo para gerar o arquivo HAR pelo **Google Chrome**, que é o modo mais recomendado por nós. Caso você deseje fazer o processo por meio de outros navegadores, como o Mozilla Firefox ou o Microsoft Edge, confira o procedimento correto [neste link](https://support.zendesk.com/hc/pt-br/articles/204410413-Gera%25C3%25A7%25C3%25A3o-de-um-arquivo-HAR-para-resolu%25C3%25A7%25C3%25B5es-de-problemas#h_51858a69-ed0e-45a6-a25d-c9b8ba32ae32).

### Como gerar o arquivo HAR no Google Chrome

Usando o Google Chrome, siga os passos abaixo para gerar o arquivo HAR.

1. Navegue até a URL onde o problema está ocorrendo.
2. Clique com o botão direito em qualquer lugar da tela e então em __Inspecionar__.![HARfile1](https://images.contentful.com/alneenqid6w5/3BZmZ6hkXuueWCMuM4Ykke/e58e1a4fb669de93808ceee862847f56/HARfile1.png)
3. O Dev Tools será aberto, então clique na aba __Network__.![HARfile2](//images.contentful.com/alneenqid6w5/7vSYRmkjduq6iCaiGgyIo/fd3f3eb23fa57582f8c8f5cd1ac725b5/HARfile2.png)
4. O botão de gravação deve estar vermelho, o que indica que está ativado. Se não estiver, clique nele.![HARfile3](//images.contentful.com/alneenqid6w5/6YnW3ebd1mq2kQsm8uKG2q/97000a534abfabc66931d27ff9cd28b8/HARfile3.png)
5. Marque a flag __Preserve log__.![HARfile5](//images.contentful.com/alneenqid6w5/xQAIiEuHIsaoSCUkSsOEE/e6dc32f580a2f50a5789ae39babfb540/HARfile5.png)
6. Recarregue a página e reproduza a navegação na qual ocorre o problema.
7. Clique com o botão direito em qualquer lugar dentro da área do Network e depois clique na opção __Save as HAR with content__.![HARfile4](//images.contentful.com/alneenqid6w5/hR0VTzzNFmyQc4A4KS02G/b1f15e2131e21b80f5f2c97023cd0a5b/HARfile4.png)

Será gerado um arquivo com extensão HAR, cujo nome é o endereço da página.

Você pode enviar este arquivo para o time de suporte da VTEX, o que tornará o atendimento mais rápido e eficaz.

---

OBS: em outros navegadores, como o Mozilla Firefox e o Microsoft Edge, o procedimento para gerar arquivos HAR é similar. Entretanto, recomendamos usar o Chrome para isso, por conta da facilidade do processo.
