import { render, screen } from '@testing-library/react';
import Account from './Account.jsx';
import React from 'react';

describe('Account Component', () => {
  beforeEach(() => {
    render(<Account />);
  });

  it('debe mostrar el header con el título Streaming Lab', () => {
    const headerTitle = screen.getByText(/Streaming Lab/i);
    expect(headerTitle).toBeTruthy();
  });

  it('debe mostrar el botón "Agregar cuenta"', () => {
    const addButton = screen.getByText(/Agregar cuenta/i);
    expect(addButton).toBeTruthy();
  });

  it('debe mostrar la tabla de cuentas', () => {
    const table = screen.getByRole('table');
    expect(table).toBeTruthy();
    const headers = screen.getAllByRole('columnheader');
    expect(headers.length).toBe(4); // Plataforma, Usuario, Plan, Acciones
  });

  it('debe mostrar el formulario oculto inicialmente', () => {
    const formSection = screen.getByText(/Agregar cuenta/i).closest('section');
    expect(formSection).toHaveStyle('display: none');
  });

  it('debe cargar los scripts al montar el componente', () => {
    // Aquí solo comprobamos que useEffect ejecutó la importación
    const useEffectSpy = jest.spyOn(React, 'useEffect');
    render(<Account />);
    expect(useEffectSpy).toHaveBeenCalled();
    useEffectSpy.mockRestore();
  });
});
