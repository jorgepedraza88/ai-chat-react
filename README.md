# AI Chat App

![image](https://github.com/user-attachments/assets/a8890c25-9b5b-43ba-9535-7be09760f088)

Una aplicación de chat con inteligencia artificial desarrollada con Vite, React, TypeScript, Shadcn UI y Tailwind CSS.

## Características

- Interfaz de chat moderna y responsive
- Conexión a API de IA configurable
- Diseño con componentes modulares y reutilizables
- Integración completa con TypeScript
- Estilizado con Tailwind CSS y componentes de Shadcn

## Requisitos previos

- Node.js (v16 o superior)
- npm o yarn

## Instalación

1. Clona el repositorio

   ```bash
   git clone https://github.com/tuusuario/ai-chat.git
   cd ai-chat
   ```

2. Instala las dependencias

   ```bash
   npm install
   # o
   yarn install
   ```

3. Inicia el servidor de desarrollo

   ```bash
   npm run dev
   # o
   yarn dev
   ```

4. Abre tu navegador en `http://localhost:5173`

## Estructura del proyecto

```
ai-chat/
├── public/                # Archivos estáticos
├── src/                   # Código fuente
│   ├── components/        # Componentes React
│   │   ├── chat/          # Componentes específicos del chat
│   │   └── ui/            # Componentes UI reutilizables
│   ├── hooks/             # Hooks personalizados
│   ├── lib/               # Utilidades y tipos
│   ├── App.tsx            # Componente principal
│   ├── index.css          # Estilos globales
│   └── main.tsx           # Punto de entrada
├── .eslintrc.cjs          # Configuración de ESLint
├── .gitignore             # Archivos ignorados por Git
├── .prettierrc            # Configuración de Prettier
├── index.html             # HTML principal
├── package.json           # Dependencias y scripts
├── postcss.config.js      # Configuración de PostCSS
├── tailwind.config.js     # Configuración de Tailwind CSS
├── tsconfig.json          # Configuración de TypeScript
└── vite.config.ts         # Configuración de Vite
```

## Conexión con la API de IA

La aplicación está configurada para conectarse a un endpoint en `/api/chat`. Para cambiar este endpoint, modifica la variable `API_ENDPOINT` en el archivo `src/lib/api.ts`.

## Scripts disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la versión de producción
- `npm run lint` - Ejecuta ESLint
- `npm run format` - Formatea el código con Prettier

## Licencia

MIT
