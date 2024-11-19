import { createLazyFileRoute } from '@tanstack/react-router';
import pinboardLogo from '@/assets/pinboard.png';

export const Route = createLazyFileRoute('/')({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="flex h-screen flex-col items-center justify-center font-sans">
			<h1 className="mb-12 text-4xl font-bold">Coming Soon...</h1>
			<div className="flex items-center justify-center gap-6">
				<img
					src={pinboardLogo}
					alt="The Pinboard Company Logo"
					className="m-0 size-32 rounded-xl"
					title="The Pinboard Company"
				/>
				<div className="border-l border-black pl-6 dark:border-white">
					<h1 className="m-0 mb-2 max-w-lg text-4xl font-extrabold">
						Scribbly - Scribble your mind in realtime
					</h1>
					<p className="m-0 max-w-lg">
						A collaborative online whiteboard designed to brainstorm, plan, and
						visualize ideas in real-time.
					</p>
				</div>
			</div>
		</div>
	);
}
