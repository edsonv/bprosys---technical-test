# Desplegando el proyecto localmente.

Clona este repositorio usando el siguiente comando en tu terminal:

```bash
git clone git@github.com:edsonv/bprosys---technical-test.git
```

Ubícate dentro de la nueva carpeta creada, usando:

```bash
 cd bprosys---technical-test
```

Abre el proyecto usando VSCode si lo tienes instalado, usando:

```bash
code .
```

Ahora instala las dependencias del proyecto, usando:

```bash
npm run install
```

Por último, corre el proyecto en modo desarrollo, usando:

```bash
npm run dev
```

El proyecto estará disponible en la ruta:
[https://localhost:3000](http://localhost:3000)

También puedes ver el proyecto desplegado en Vercel en [https://bprosys-technical-test.vercel.app/](https://bprosys-technical-test.vercel.app/)

# Preguntas complementarias

## ¿Qué criterios seguiste para diseñar la UI de productos financieros?

Se consideró lo mínimo básico para demostrar el uso de Tailwind y Next.js. No se abordaron temas de diseño propiamente.Sin embargo, se aplica diseño responsivo al prototipo.

## ¿Cómo decidiste cuándo usar Tailwind y cuándo Styled Components?

La magnitud de esta prueba no requirió el uso de mayor esfuerzo en la utilización de Styled Components por lo que se decidió trabajar directamente con Tailwind.

Para efectos de la evaluación, usaría Styled Components en las tarjetas de los productos y en los botones.

## ¿Qué harías para escalar este proyecto en una aplicación real de banca digital?

Contrataría a diseñadores para que me mejorasen la interfaz y la experiecnia de usuario.
Los datos deberían estar almacenados en una base de datos, por lo que implementaría una base de datos sencilla para almacenar datos de los productos.
Propondría una interfaz para administradores que permita crear más productos facilmente.

## ¿Qué herramientas usarías para mejorar el rendimiento y monitoreo en producción?

Desconozco sobre herramientas de monitoreo de rendimiento en producción, pero en etapa de pruebas utilizaría Google Lighthouse y las herramientas dispuestas en la pestaña de redes de la consola de desarrollador en los navegadores para buscar maneras de mejorar la carga de recursos en la página.

**Nota**: En un ambiente real, se usarían commits semánticos, que incluyan detalles de los features trabajados en el commit, así como la tarea asignada, si es el caso de manejar un sistema de administración de tareas.
