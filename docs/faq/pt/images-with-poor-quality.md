---
title: 'Por que as imagens da minha loja estão sendo exibidas com baixa qualidade?'
id: 5LxgbF8S2cIUOCaCO00GcK
status: PUBLISHED
createdAt: 2018-02-22T19:10:35.567Z
updatedAt: 2019-12-31T14:25:33.320Z
publishedAt: 2019-12-31T14:25:33.320Z
firstPublishedAt: 2018-02-22T22:03:18.347Z
contentType: frequentlyAskedQuestion
productTeam: Marketing & Merchandising
author: 245tA425AIeioKAk2eaiwS
slug: por-que-as-imagens-da-minha-loja-estao-sendo-exibidas-com-baixa-qualidade
legacySlug: por-que-as-imagens-da-minha-loja-estao-sendo-exibidas-com-baixa-qualidade
---

Se o problema foi identificado ao acessar sua loja pelo __Google Chrome__, a resposta para isso provavelmente é o formato de compressão usado por esse navegador para exibir imagens. 

Conhecido como [__WebP__](/pt/tutorial/compactacao-automatica-de-imagens), ele foi criado pelo Google para diminuir o tempo de carregamento dos sites e evitar travamentos. Para isso, ele utiliza um processo que pode compactar a imagem de duas formas:

- __Lossy:__ comprime a imagem com redução da qualidade.
- __Lossless:__ comprime a imagem sem redução da qualidade.

Na VTEX, o sistema que renderiza as imagens na tela faz a conversão dos arquivos em __WebP__ automaticamente e em tempo real, desde que esteja sendo utilizado um navegador compatível com o formato. Para arquivos _JPG_, o processo utilizado é o __lossy__. Já para os _PNG_, aplicamos o __lossless__. Quando o navegador não reconhece __WebP__, as imagens são renderizadas em seu formato original.

Se você utiliza imagens com a extensão _.jpg_ no seu web site, é normal que elas passem por alguma perda de qualidade. No entanto, essa diferença não deveria ser muito sensível. Para corrigir isso, o melhor é subir novamente os arquivos, mas com uma resolução um pouco maior.

Agora, se for fundamental para sua loja exibir imagens com o máximo de qualidade, recomendamos que você use o formato _PNG_. Eles contam com compressão automática __lossless__, que mantém as qualidades do arquivo original.

### Artigos relacionados
- [Como funciona a compactação automática de imagens para o formato WebP](/pt/tutorial/compactacao-automatica-de-imagens)

