import { createContext, ReactNode, useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

type ThemeContextType = {
	theme: Theme;
	toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
	theme: 'light',
	toggleTheme: () => {},
});

export default function ThemeProvider({ children }: { children: ReactNode }) {
	const [theme, setTheme] = useState<Theme>(() => {
		const savedTheme = localStorage.getItem('theme') as Theme | null;
		if (savedTheme) return savedTheme;
		const sysTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
			? 'dark'
			: 'light';
		localStorage.setItem('theme', sysTheme);
		return sysTheme;
	});

	const toggleTheme = () => {
		setTheme(prevTheme => {
			const newTheme = prevTheme === 'light' ? 'dark' : 'light';
			localStorage.setItem('theme', newTheme);
			return newTheme;
		});
	};

	useEffect(() => {
		const SystemTheme = window.matchMedia('(prefers-color-scheme: dark)');

		const handleChange = (e: MediaQueryListEvent) => {
			const newTheme = e.matches ? 'dark' : 'light';
			localStorage.setItem('theme', newTheme);
			setTheme(newTheme);
		};

		SystemTheme.addEventListener('change', handleChange);

		return () => {
			SystemTheme.removeEventListener('change', handleChange);
		};
	}, []);

	useEffect(() => {
		document.documentElement.dataset.theme = theme;
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}
