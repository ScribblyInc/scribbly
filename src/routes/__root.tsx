import { lazy, Suspense } from 'react';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import NotFound from '@/components/NotFound';

export const Route = createRootRoute({
	component: RootComponent,
	notFoundComponent: NotFound,
});

const TanStackRouterDevtools =
	import.meta.env.MODE === 'production'
		? () => null
		: lazy(() =>
				import('@tanstack/router-devtools').then(res => ({
					default: res.TanStackRouterDevtools,
				})),
			);

function RootComponent() {
	return (
		<>
			<Outlet />
			<Suspense fallback={<div>Loading Devtools...</div>}>
				<TanStackRouterDevtools />
			</Suspense>
		</>
	);
}
