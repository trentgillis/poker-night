import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';

const appName = 'PokerNight';

createInertiaApp({
  title: (title) => `${appName}`,
  resolve: (name) =>
    resolvePageComponent(
      `./pages/${name}/index.ts`,
      import.meta.glob('./pages/**/*.ts'),
    ),
  setup({ el, App, props }) {
    const root = createRoot(el);

    root.render(<App {...props} />);
  },
  progress: {
    color: '#4B5563',
  },
});
