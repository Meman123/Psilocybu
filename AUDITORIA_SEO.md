# Auditoría SEO Completa - Psilocybu v1

## 1. Resumen Ejecutivo

El sitio web de Psilocybu, construido con Astro, tiene una base técnica sólida y un diseño moderno. Sin embargo, presenta varias oportunidades de mejora críticas y de "quick wins" para optimizar su rendimiento en motores de búsqueda.

**Puntos Fuertes:**
*   **Tecnología Moderna:** Astro es excelente para la velocidad (Core Web Vitals).
*   **Diseño Atractivo:** La web es visualmente agradable y la navegación es clara.
*   **Contenido Relevante:** El contenido está enfocado en un nicho específico (kits de cultivo de hongos).

**Principales Problemas y Oportunidades:**
*   **SEO Técnico Básico Incompleto:** Faltan meta descripciones únicas, la estructura de encabezados es incorrecta en varias páginas y no hay sitemap.xml ni robots.txt.
*   **Optimización de Contenido:** El contenido es bueno pero puede ser optimizado para palabras clave específicas y para responder mejor a la intención de búsqueda del usuario.
*   **SEO Off-Page Inexistente:** No hay una estrategia visible para construir autoridad de dominio.

---

## 2. Checklist Detallado de Auditoría SEO

A continuación se detalla el estado de cada punto de la auditoría.

### SEO Técnico

| Punto de Verificación | Estado | Acciones Requeridas | Prioridad |
| :--- | :--- | :--- | :--- |
| **Títulos únicos y descriptivos** | ⚠️ **Parcial** | La página de `growkit.astro` tiene el mismo título que la de inicio. Cada página debe tener un título único. | **Crítica** |
| **Meta descripciones relevantes** | ❌ **No Cumplido** | Todas las páginas comparten la misma meta descripción genérica. | **Crítica** |
| **Estructura de HTML (H1, etc.)** | ❌ **No Cumplido** | La página de inicio no tiene un `<h1>`. El componente `features.astro` usa un `<h2>` como encabezado principal. | **Crítica** |
| **URLs amigables** | ✅ **Cumplido** | Las URLs son limpias y legibles (ej. `/growkit`). | - |
| **Archivo `sitemap.xml`** | ❌ **No Cumplido** | No se ha encontrado un `sitemap.xml`. | **Alta** |
| **Archivo `robots.txt`** | ❌ **No Cumplido** | No se ha encontrado un `robots.txt`. | **Alta** |
| **Etiquetas canónicas** | ❌ **No Cumplido** | No se están utilizando etiquetas canónicas. | **Media** |
| **Optimización de velocidad** | ✅ **Cumplido** | Astro por defecto genera un sitio muy rápido. Las imágenes usan formatos modernos (`webp`) y lazy loading. | - |
| **Accesibilidad (atributos `alt`)** | ⚠️ **Parcial** | Algunas imágenes importantes en `checkout.astro` no tienen `alt` text. | **Media** |
| **Schema.org (Datos Estructurados)** | ❌ **No Cumplido** | No se está utilizando Schema.org para marcar productos, la organización, etc. | **Media** |

### SEO de Contenido

| Punto de Verificación | Estado | Acciones Requeridas | Prioridad |
| :--- | :--- | :--- | :--- |
| **Densidad y selección de palabras clave** | ⚠️ **Parcial** | El contenido es relevante, pero se puede optimizar para términos como "grow kit colombia", "cultivo de hongos mágicos", etc. | **Alta** |
| **Contenido original y relevante** | ✅ **Cumplido** | El contenido es original y específico para el producto. | - |
| **Mejoras en encabezados y estructura** | ❌ **No Cumplido** | La jerarquía de encabezados debe corregirse para mejorar la legibilidad para los motores de búsqueda. | **Crítica** |
| **Textos alternativos (alt) en imágenes** | ⚠️ **Parcial** | Faltan algunos atributos `alt` importantes. | **Media** |
| **Enlaces internos** | ✅ **Cumplido** | Existen enlaces internos entre las páginas y secciones. | - |
| **Enlaces rotos o redirecciones** | ✅ **Cumplido** | No se han detectado enlaces rotos en el código. | - |

### SEO Off-Page y Extras

| Punto de Verificación | Estado | Acciones Requeridas | Prioridad |
| :--- | :--- | :--- | :--- |
| **Estrategias de backlinks** | ❌ **No Cumplido** | Se necesita una estrategia para adquirir enlaces de calidad. | **Alta** |
| **Google Search Console y Google My Business**| ❌ **No Cumplido** | No hay indicios de configuración. Es fundamental para monitorizar el rendimiento. | **Alta** |
| **Implementación de Analytics** | ❌ **No Cumplido** | No se ha detectado un sistema de analítica web. | **Alta** |
| **Duplicidad de contenido** | ⚠️ **Parcial** | Las meta descripciones y títulos duplicados pueden ser un problema. | **Crítica** |

---

## 3. Instrucciones y Fragmentos de Código para Mejoras

### Prioridad Crítica: Quick Wins

#### 1. Corregir Títulos y Meta Descripciones

**Problema:** Títulos y descripciones duplicadas y poco optimizadas.

**Solución:** Modificar los archivos de las páginas para que cada una tenga un título y descripción únicos y ricos en palabras clave.

**`src/pages/index.astro`**
```astro
---
// ... imports
---
<Layout
  title="Psilocybu - Grow Kits de Hongos en Colombia"
  description="Compra tu Grow Kit de hongos Psilocybe cubensis en Colombia. Cosecha en 2 semanas fácil y rápido. Envío gratis a todo el país."
>
  <Hero />
  <Features />
  <Tutorials />
  <Dosificador />
</Layout>
```

**`src/pages/growkit.astro`**
```astro
---
import Layout from '@/layouts/Layout.astro';
import Checkout from '@/components/checkout/checkout.astro';
---
<Layout
  title="Comprar Grow Kit Psilocybu - Envío Gratis Colombia"
  description="Adquiere tu Grow Kit de Psilocybe cubensis (Villa de Leyva). Incluye todo lo necesario para tu cultivo. Pago seguro y envío rápido."
>
  <Checkout />
</Layout>
```

Y actualizar `src/layouts/Layout.astro` para usar la nueva prop `description`:

```astro
---
interface Props {
  title: string;
  description: string;
}

const { title, description } = Astro.props;
---
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="description" content={description} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{title}</title>
    ...
  </head>
  ...
</html>
```

#### 2. Corregir Jerarquía de Encabezados

**Problema:** La página principal carece de un `<h1>`.

**Solución:** Añadir un `<h1>` con la palabra clave principal en `src/components/hero/hero.astro` y ajustar los encabezados existentes.

**`src/components/hero/hero.astro`** (Añadir un `<h1>` visualmente oculto si no se quiere mostrar)
```html
<div class="video-container">
  <h1 class="visually-hidden">Grow Kits de Hongos Psilocybe en Colombia</h1>
  <video ...>
  </video>
</div>

<style>
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
</style>
```

**`src/components/features/features.astro`** (Cambiar `<h2>` por `<h3>` si el `<h2>` principal de la sección está en otro sitio, o mantenerlo si es el primer encabezado de la sección)
```html
<section class="features" id="features">
  <div class="features__container">
    <div class="features__text">
      <h2 class="headline">
        ¡Cosecha tus honguitos en solo <span class="highlight">2&nbsp;semanas!</span>
      </h2>
      ...
```
*Nota: Idealmente, el `<h1>` debería ser el texto más prominente y visible. Una alternativa es hacer que el texto del Hero sea el `<h1>`.*

### Prioridad Alta

#### 3. Crear `robots.txt`

**Problema:** Ausencia de `robots.txt`.

**Solución:** Crear el archivo `public/robots.txt` para guiar a los crawlers.

**`public/robots.txt`**
```
User-agent: *
Allow: /

Sitemap: https://www.psilocybu.com/sitemap-0.xml
```
*(Reemplazar `https://www.psilocybu.com` con el dominio final)*

#### 4. Generar `sitemap.xml`

**Problema:** Ausencia de `sitemap.xml`.

**Solución:** Instalar y configurar la integración oficial de sitemap de Astro.

**En la terminal:**
```bash
npx astro add sitemap
```
Esto configurará automáticamente el sitemap en `astro.config.mjs`.

#### 5. Añadir Datos Estructurados (Schema.org)

**Problema:** No se aprovechan los datos estructurados para el producto.

**Solución:** Añadir un script de JSON-LD en `src/pages/growkit.astro`.

**`src/pages/growkit.astro`**
```astro
<Layout ...>
  <script type="application/ld+json" slot="head">
    {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "Psilocybu Grow Kit Premium",
      "image": "URL_A_LA_IMAGEN_PRINCIPAL_DEL_PRODUCTO",
      "description": "Grow kit completo para el cultivo de hongos Psilocybe cubensis variedad Villa de Leyva. Incluye micelio, bolsa de fructificación y todo lo necesario.",
      "brand": {
        "@type": "Brand",
        "name": "Psilocybu"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://www.psilocybu.com/growkit",
        "priceCurrency": "COP",
        "price": "70000",
        "availability": "https://schema.org/InStock",
        "shippingDetails": {
          "@type": "OfferShippingDetails",
          "shippingDestination": {
            "@type": "DefinedRegion",
            "addressCountry": "CO"
          },
          "shippingRate": {
            "@type": "MonetaryAmount",
            "currency": "COP",
            "value": "0"
          }
        }
      }
    }
  </script>
  <Checkout />
</Layout>
```
*Nota: Se debe añadir un `slot="head"` en `src/layouts/Layout.astro` dentro del `<head>`.*

### Prioridad Media

#### 6. Atributos `alt` en Imágenes

**Problema:** Imágenes sin texto alternativo en el checkout.

**Solución:** Añadir `alt` descriptivos en `src/components/checkout/checkout.astro`.

```html
<div class="security-logos">
  <img src={mpLogo.src} alt="Logo de Mercado Pago" />
  <img src={cardLogos.src} alt="Logos de tarjetas Visa, Mastercard, Amex" />
</div>
```

### 4. Propuestas de SEO Off-Page y Estrategia

*   **Google Search Console:** Dar de alta el dominio y enviar el `sitemap.xml`. Esto es **esencial** para monitorizar la indexación y recibir alertas de Google.
*   **Google My Business:** Si existe una ubicación física o se quiere potenciar el SEO local, crear un perfil de Google My Business.
*   **Link Building (Construcción de Enlaces):**
    *   **Blogs y Foros:** Participar en comunidades online sobre micología, cultivo en casa y psicodélicos en Colombia, aportando valor y enlazando al sitio cuando sea relevante.
    *   **Contenido de Valor:** Crear artículos en un futuro blog sobre "cómo cultivar psilocybe en Colombia", "guía de dosificación", etc., para atraer enlaces de forma natural.
*   **Analítica Web:**
    *   Instalar una herramienta de analítica como Google Analytics 4 o una alternativa más privada como Plausible o Fathom para entender el comportamiento del usuario.

---
Este informe sienta las bases para una optimización SEO integral. Recomiendo empezar por los puntos críticos para ver resultados a corto plazo.
