import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

const dummyPokemonData = [
  {
    name: 'bulbasaur',
    url: 'https://pokeapi.co/api/v2/pokemon/1/',
  },
  {
    name: 'ivysaur',
    url: 'https://pokeapi.co/api/v2/pokemon/2/',
  },
  {
    name: 'Venusaur',
    url: 'https://pokeapi.co/api/v2/pokemon/3/',
  },
  { name: 'Abra', url: 'https://pokeapi.co/api/v2/pokemon/63/' },
];

jest.mock('./api', () => ({
  fetchPokemon: () => Promise.resolve(dummyPokemonData),
}));

describe('Pokemon App', () => {
  it("renders 'Pokemon' as a title", () => {
    render(<App />);
    const titleElement = screen.getByText('Pokemon');
    expect(titleElement).toBeInTheDocument();
  });

  it('renders a list of Pokemon cards', async () => {
    render(<App />);
    const pokemonCards = await screen.findAllByTestId('pokemon-card');
    expect(pokemonCards).toHaveLength(dummyPokemonData.length);
  });

  it("renders the list of Pokemon cards in the order of the cards' release numbers by default", async () => {
    render(<App />);
    const pokemonCards = await screen.findAllByTestId('pokemon-card-name');
    pokemonCards.forEach((card, index) => {
      expect(card.textContent).toBe(dummyPokemonData[index].name);
    });
  });

  it('displays card numbers as 3 digits', async () => {
    render(<App />);
    const cardNumbers = await screen.findAllByTestId('pokemon-card-number');
    cardNumbers.forEach((number) => {
      expect(number.textContent).toMatch(/^\d{3}$/);
    });
  });

  it('sorts pokemon A-Z when selected', async () => {
    render(<App />);
    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'az' } });
    const pokemonNames = await screen.findAllByTestId('pokemon-card-name');
    expect(pokemonNames[0].textContent).toBe('Abra');
  });

  it('sorts pokemon Z-A when selected', async () => {
    render(<App />);
    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'za' } });
    const pokemonNames = await screen.findAllByTestId('pokemon-card-name');
    expect(pokemonNames[0].textContent).toBe('Venusaur');
  });

  it('displays pokemon types', async () => {
    render(<App />);
    await screen.findByText(/fire|water|grass/i);
  });
});
