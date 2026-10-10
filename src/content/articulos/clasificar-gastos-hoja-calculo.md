---
title: "Automatiza tu control de gastos: clasifica los movimientos del banco en Google Sheets"
description: "Cómo exportar los movimientos de tu banco y clasificarlos automáticamente por categorías en Google Sheets con una tabla de palabras clave y dos fórmulas."
pubDate: 2026-11-04
category: ia-y-automatizacion
draft: false
disclaimer: false
sources:
  - name: "Google, Ayuda de Hojas de cálculo: función SUMAR.SI"
    url: "https://support.google.com/docs/answer/3093583?hl=es"
  - name: "Google, Ayuda de Hojas de cálculo: función REGEXMATCH"
    url: "https://support.google.com/docs/answer/3098292?hl=es"
---

Si cada mes exportas los movimientos de tu banco, puedes hacer que una hoja de cálculo **los clasifique sola** por categorías (supermercado, transporte, suscripciones…) y te dé el total de cada una. Solo necesitas una **tabla de palabras clave** y dos fórmulas. Una vez montado, el trabajo mensual es pegar los movimientos nuevos.

## Lo que vas a construir

- Una pestaña **Movimientos** donde pegas lo que exportas del banco.
- Una pestaña **Reglas** con palabras clave y su categoría.
- Una pestaña **Resumen** con el total por categoría.

Todo funciona dentro de tu cuenta de Google; no tienes que conectar tu banco a ninguna app.

## Paso 1: exporta los movimientos

Desde la banca online, descarga los movimientos del mes en **Excel o CSV**. En Google Sheets: Archivo > Importar > Subir. Deja solo las columnas de **fecha, concepto e importe** y borra el IBAN y el saldo.

Coloca los datos en la pestaña **Movimientos** así: columna A fecha, B concepto, C importe (los gastos en negativo, como suelen venir del banco).

## Paso 2: crea la tabla de reglas

En la pestaña **Reglas**, escribe en la columna A una palabra que aparezca en el concepto y en la columna B la categoría:

| A (palabra clave) | B (categoría) |
|---|---|
| MERCADONA | Supermercado |
| LIDL | Supermercado |
| RENFE | Transporte |
| REPSOL | Transporte |
| NETFLIX | Suscripciones |
| SPOTIFY | Suscripciones |
| IBERDROLA | Suministros |

Ajusta las palabras a los conceptos que aparecen en tus extractos.

## Paso 3: la fórmula que clasifica

En la pestaña **Movimientos**, en la celda **D2**, escribe:

```
=IFERROR(INDEX(FILTER(Reglas!B$2:B$100; Reglas!A$2:A$100<>""; REGEXMATCH(UPPER(B2); Reglas!A$2:A$100)); 1); "Sin clasificar")
```

Arrastra la fórmula hacia abajo. Para cada movimiento, filtra las palabras clave de tu tabla que aparecen en el concepto y devuelve la categoría de la primera. Escribe las palabras clave en mayúsculas. Si no encuentra ninguna, pone "Sin clasificar".

> Si tu hoja usa la coma como separador de argumentos, cambia los `;` por `,`. Depende de la configuración regional (Archivo > Configuración).

## Paso 4: el resumen por categoría

En la pestaña **Resumen**, pon en la columna A las categorías y en **B2**:

```
=-SUMIF(Movimientos!D:D; A2; Movimientos!C:C)
```

El signo menos convierte los gastos en números positivos. Arrastra hacia abajo y tendrás el total de cada categoría. Puedes añadir un gráfico: Insertar > Gráfico.

## Cada mes

1. Pega los movimientos nuevos debajo de los anteriores (o en una pestaña nueva por mes).
2. Revisa los "Sin clasificar" y **añade nuevas palabras clave** a la tabla de reglas.
3. Copia el resumen en tu [plantilla de presupuesto](/plantilla-presupuesto-mensual/) para compararlo con lo previsto.

Con el tiempo, casi todos los movimientos se clasificarán solos.

## ¿Y si quiero que lo haga la IA?

Puedes pedir a un asistente de IA que te sugiera palabras clave y categorías a partir de tus conceptos, siempre **sin darle datos personales**. Lo explico en [cómo usar la IA para tu presupuesto sin compartir datos sensibles](/ia-presupuesto-sin-datos-sensibles/).

**Relacionado:** [Plantilla de presupuesto mensual](/plantilla-presupuesto-mensual/) · [Alertas de gastos](/alertas-gastos-banco/)
