# Reglas permanentes del proyecto Anukapah

## Objetivo del producto

Anukapah es el sitio y la plataforma privada de una terapeuta online. El alcance previsto incluye:

- Sitio publico con Home y Contacto.
- Formulario de contacto que entregue la consulta a la terapeuta de forma segura.
- Registro e inicio de sesion.
- Plataforma privada para pacientes con acceso a videos pregrabados y mensajes.
- Panel privado para la terapeuta con gestion de usuarios, contenido y mensajes.

## Fuente de verdad y forma de trabajo

- El diseno proporcionado por el usuario es la fuente de verdad visual.
- Implementar el sitio por partes, en el orden solicitado. No inventar ni adelantar pantallas que aun no fueron entregadas.
- Antes de modificar una pantalla, revisar sus referencias, assets, textos, estados e interacciones.
- Conservar Angular, el package manager, el lockfile, SSR y la arquitectura que ya funciona. No hacer reescrituras amplias sin una necesidad concreta.
- Crear componentes reutilizables cuando exista repeticion real; evitar abstracciones prematuras.

## Responsive y experiencia de uso

- Implementar mobile-first y adaptar el contenido, no solo reducirlo.
- Evitar anchos y alturas rigidos para contenedores de contenido. Usar medidas fluidas, `min()`, `max()`, `clamp()`, Grid y Flexbox cuando correspondan.
- Elegir breakpoints segun el momento en que el contenido lo necesite. Verificar como minimo 360 px, 768 px, 1024 px y 1440 px de ancho.
- Prevenir overflow horizontal, texto ilegible, controles superpuestos y saltos visuales por imagenes sin dimensiones.
- Mantener objetivos tactiles de al menos 44 x 44 px y estados visibles de hover, focus, active, disabled, loading, success y error cuando correspondan.
- Respetar `prefers-reduced-motion` y no depender del hover para acceder a informacion o acciones.

## Accesibilidad

- Apuntar a WCAG 2.2 AA: HTML semantico, orden logico, contraste suficiente y navegacion completa con teclado.
- Cada formulario debe tener labels asociados, instrucciones claras, validacion comprensible y resumen de errores util.
- Conservar foco visible, administrar el foco al navegar o abrir overlays y anunciar cambios asincronicos relevantes.
- Usar texto alternativo que explique la funcion de imagenes informativas; las decorativas deben tener `alt=""`.

## SEO y contenido publico

- Las paginas publicas de captacion deben usar SSR o prerender y entregar contenido significativo en el HTML inicial.
- Declarar el idioma real del contenido y crear por ruta: title unico, meta description util, canonical y metadatos sociales.
- Mantener URLs descriptivas, enlaces internos rastreables, una jerarquia clara de contenido y encabezados que representen la pagina.
- Generar y mantener `sitemap.xml`, `robots.txt`, pagina 404 y reglas de indexacion coherentes al preparar el lanzamiento.
- Usar datos estructurados solo con informacion verdadera y visible. Elegir `Person`, `ProfessionalService` o `LocalBusiness` segun las credenciales, ubicacion y modalidad finalmente confirmadas.
- Optimizar imagenes con formatos modernos, dimensiones declaradas, variantes responsive y carga diferida fuera del primer viewport.
- Objetivos de Core Web Vitals en el percentil 75: LCP <= 2.5 s, INP <= 200 ms y CLS <= 0.1.
- Login, registro, panel de paciente, panel de administracion y contenido privado no deben indexarse.
- No usar meta keywords, keyword stuffing, paginas duplicadas por ciudad ni afirmaciones SEO enganosas. Ninguna implementacion puede garantizar la primera posicion.
- El posicionamiento local tambien requerira, fuera del codigo, contenido original, datos profesionales consistentes, Google Business Profile cuando corresponda y seguimiento con Search Console.

## Seguridad y privacidad

- Tratar datos de contacto, terapia, mensajes y actividad como sensibles. Pedir solamente la informacion necesaria y mostrar consentimiento y politica de privacidad antes del lanzamiento.
- La autorizacion por rol debe validarse siempre en el servidor. Los guards del cliente son solo una capa de experiencia de usuario.
- No guardar sesiones ni datos sensibles en `localStorage`. Preferir cookies `HttpOnly`, `Secure` y `SameSite` con proteccion CSRF cuando se defina el backend.
- Nunca guardar contrasenas en texto plano. Aplicar hashing robusto, verificacion de email, recuperacion segura, rate limiting y registro de eventos relevantes.
- Validar y normalizar toda entrada en servidor, limitar archivos por tipo y tamano, y escapar o sanear contenido segun el contexto de salida.
- Los videos privados deben almacenarse fuera del bundle publico y entregarse mediante autorizacion y URLs temporales. Ocultar una URL en la interfaz no es proteccion.
- No incluir secretos, credenciales ni datos personales reales en el repositorio, logs, pruebas o fixtures.

## Arquitectura y calidad

- Mantener TypeScript estricto y componentes Angular standalone.
- Separar UI, acceso a datos, autenticacion/autorizacion y reglas de negocio.
- Usar formularios reactivos para flujos no triviales y modelos tipados para los contratos de API.
- Cargar de forma diferida las areas privadas y pesadas cuando aporte rendimiento.
- Todo acceso a APIs del navegador debe ser compatible con SSR o estar protegido para ejecutarse solo en cliente.
- Implementar estados vacio, carga, error y reintento para toda operacion remota.

## Definicion de terminado por entrega

Una pantalla se considera terminada cuando:

- Coincide con el diseno y los assets proporcionados.
- Funciona en los anchos responsive acordados y con teclado.
- No presenta errores de consola, overflow inesperado ni enlaces rotos.
- Incluye semantica, labels, foco y contraste adecuados.
- Mantiene SEO correcto si es publica y `noindex`/autorizacion si es privada.
- Tiene pruebas proporcionales al riesgo y supera build y tests existentes.
- No expone secretos ni datos sensibles.
