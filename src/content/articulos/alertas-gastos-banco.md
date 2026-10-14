---
title: "Alertas de gastos: cómo configurar avisos del banco para controlar tu dinero"
description: "Qué alertas activar en la app de tu banco (cargos, saldo bajo, recibos) y cómo crear un aviso de presupuesto en Google Sheets para no pasarte cada mes."
pubDate: 2026-10-14
category: ia-y-automatizacion
draft: false
disclaimer: false
sources:
  - name: "Google, Ayuda de Hojas de cálculo: formato condicional"
    url: "https://support.google.com/docs/answer/78413?hl=es"
  - name: "Banco de España, Portal del Cliente Bancario"
    url: "https://clientebancario.bde.es"
---

Las alertas del banco son la herramienta de control más sencilla y más infravalorada: te avisan **en el momento** de cada cargo, de un saldo bajo o de un recibo inesperado. Sirven a la vez para **ahorrar** (ves en tiempo real cuánto gastas) y para **detectar fraudes** en segundos. Se activan en cinco minutos desde la app.

## Las 5 alertas que recomiendo activar

1. **Cada pago con tarjeta**, incluidas las compras online y las del móvil. Es la que más fraudes detecta.
2. **Cada transferencia o Bizum enviado.**
3. **Saldo por debajo de una cantidad** (por ejemplo, 200 €), para evitar descubiertos y comisiones.
4. **Recibos domiciliados**: te avisa antes o cuando se carga un recibo, útil para pillar [suscripciones olvidadas](/cancelar-suscripciones/).
5. **Inicio de sesión en un dispositivo nuevo**, si tu banco lo ofrece.

Busca estas opciones en la app en apartados como "Notificaciones", "Alertas", "Avisos" o en los ajustes de cada tarjeta. Pueden llegar como notificación de la app (gratuita) o por SMS (algunos bancos lo cobran).

## Ajusta bien las notificaciones del móvil

- Permite que la app del banco **muestre notificaciones** en los ajustes del móvil.
- Si no quieres que se vean importes con el móvil bloqueado, configura que el contenido se oculte en la pantalla de bloqueo.
- Revisa que el modo "No molestar" no silencie la app del banco.

## Un aviso de presupuesto en Google Sheets

Si llevas tu presupuesto en una hoja de cálculo (por ejemplo, con nuestra [plantilla de presupuesto](/plantilla-presupuesto-mensual/)), puedes hacer que se ponga en rojo cuando te pases:

1. Selecciona la columna de gasto **Real**.
2. Menú **Formato > Formato condicional**.
3. En "Regla de formato", elige **La fórmula personalizada es** y escribe, por ejemplo, `=C7>B7` (gasto real mayor que el previsto, ajustando las celdas a tu hoja).
4. Elige el color rojo y pulsa **Hecho**.

Así, al apuntar tus gastos, verás de un vistazo en qué categorías te has pasado.

## Rutina de 5 minutos a la semana

- **Domingo:** abre la app del banco, repasa los movimientos de la semana y apunta los gastos variables en tu hoja.
- **Si ves un cargo que no reconoces:** consulta primero [qué hacer con un cargo desconocido en la tarjeta](/cargos-desconocidos-tarjeta/) y, si no es tuyo, llama al banco.

## Qué no hacer

- No reenvíes las alertas del banco a otras apps o servicios que no conoces.
- No respondas nunca a un SMS de "alerta" que te pida pulsar un enlace: las alertas reales informan, no te piden datos. Repasa [cómo detectar un SMS falso](/sms-falso-banco/).

**Relacionado:** [Plantilla de presupuesto mensual](/plantilla-presupuesto-mensual/) · [Cómo cancelar suscripciones](/cancelar-suscripciones/)
