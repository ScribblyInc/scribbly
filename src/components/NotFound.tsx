export default function NotFound() {
	return (
		<div className="prose mx-auto grid h-screen place-items-center text-center font-sans">
			<div className="flex items-center justify-center gap-6">
				<h1 className="mb-0 border-r border-black pr-6 dark:border-white">
					404
				</h1>
				<p className="m-0">This page could not be found.</p>
			</div>
		</div>
	);
}
