import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Header } from '.';
import { describe, expect, test } from 'vitest';

describe('Header component', () => {
	test('Renderizar o componente header', () => {
		const { getByText } = render(<Header />);

		expect(getByText('To-Do List App')).toBe;
	});
});
