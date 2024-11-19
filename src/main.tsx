import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import ThemeProvider from '@/components/theme-context';
import NotFound from './components/NotFound';
import './index.css';

const router = createRouter({
	routeTree,
	notFoundMode: 'root',
	defaultNotFoundComponent: NotFound,
});

declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router;
	}
}

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider>
			<RouterProvider router={router} />
		</ThemeProvider>
	</StrictMode>,
);
