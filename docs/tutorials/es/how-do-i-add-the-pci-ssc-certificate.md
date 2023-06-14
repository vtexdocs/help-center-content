---
title: '¿Cómo añadir el certificado PCI SSC a mi tienda?'
id: frequentlyAskedQuestions_4650
status: CHANGED
createdAt: 2019-01-24T20:46:01.185Z
updatedAt: 2020-11-18T20:02:19.790Z
publishedAt: 2020-11-10T18:14:22.516Z
firstPublishedAt: 2019-01-24T22:03:53.402Z
contentType: tutorial
productTeam: Financial
author: authors_84
slug: como-anadir-el-certificado-pci-ssc-mi-tienda
legacySlug: como-anadir-el-certificado-pci-ssc-mi-tienda
subcategory: 2Xay1NOZKE2CSqKMwckOm8
---


PCI Security Standards Council es un foro abierto a nivel mundial para desarrollar, mejorar, almacenar, difundir e implementar, de forma continua, los estándares de seguridad para la protección de datos.

Fue fundado por las empresas American Express, Discover Financial Services, JCB International, MasterCard y Visa Inc.

VTEX cuenta con la certificación PCI SSC (Payment Card Industry Data Security Standard), otorgada por dicha institución, respaldando la seguridad que brinda a las tiendas y los consumidores para la protección de datos.

Para agregar el sello de la certificación a su tienda, siga los siguientes pasos:

1. Acceda a la URL [http://io.vtex.com.br/front-libs/assets/pci/index.html](http://io.vtex.com.br/front-libs/assets/pci/index.html).
2. Elija la imagen del sello que mejor se adapte al diseño de su tienda.
3. Redireccione el link de la imagen a la URL http://secure.vtex.com/?an={{AccountName}} (cambiando el {{AccountName}} por el Account de su tienda).

### Acerca de otros sellos de seguridad

Algunas tiendas virtuales que ya existen en VTEX utilizan sellos de seguridad que no son suministrados por VTEX, como Digicert, RapidSSL, Comodo CA, entre otros. No es adecuado mostrar estos al final de la página (o en otras partes del sitio web), si no se cuenta con esas certificaciones. 

Por otro lado, si también se quiere utilizar en las tiendas un sello de Let's Encrypt, emisor del certificado digital SSL que actualmente es utilizado por VTEX, recomendamos leer la [guía de uso de marca](https://letsencrypt.org/trademarks). Esta contiene casos de uso autorizado del logo de la empresa y las versiones oficiales de sus archivos. 

Cabe destacar que el anterior tipo de sello solo es informativo, no tiene el respaldo de una certificación. Por eso, recomendamos el uso del sello **PCI Certified** que mencionamos al inicio del artículo. 
