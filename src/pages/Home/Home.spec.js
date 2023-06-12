import { render, screen, waitFor } from '../../utils/test';
import { getAllItemsByCategory } from '../../services/apis';
import userEvent from '@testing-library/user-event';
import { Home } from '../Home';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

jest.mock('../../services/apis', () => ({
  getAllItemsByCategory: jest.fn(),
}));

describe('Test content Home', () => {
  it('should test titles', async () => {
    render(<Home />);

    const characters = await screen.findAllByText(/characters/i);
    expect(characters).toHaveLength(3);

    const locations = await screen.findAllByText(/locations/i);
    expect(locations).toHaveLength(3);

    const episodes = await screen.findAllByText(/episodes/i);
    expect(episodes).toHaveLength(3);

    const resume = await screen.findAllByText(/resume/i);
    expect(resume).toHaveLength(1);
  });

  it('should test texts', async () => {
    render(<Home />);

    const resumeText = await screen.getByText(
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
    );
    expect(resumeText).toBeInTheDocument();

    const headerText = await screen.getByText(
      'Does this site exist or not? Are you alive or dead? Are you unsure of that, Heisenberg?'
    );
    expect(headerText).toBeInTheDocument();
  });

  it('exibe os dados da API', async () => {
    // Defina os dados fictícios que você deseja retornar da API
    const dadosAPI = [
      {
        id: 1,
        name: 'Rick Sanchez',
        status: 'Alive',
        species: 'Human',
        type: '',
        gender: 'Male',
        origin: {
          name: 'Earth (C-137)',
          url: 'https://rickandmortyapi.com/api/location/1',
        },
        location: {
          name: 'Citadel of Ricks',
          url: 'https://rickandmortyapi.com/api/location/3',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        episode: [
          'https://rickandmortyapi.com/api/episode/1',
          'https://rickandmortyapi.com/api/episode/2',
          'https://rickandmortyapi.com/api/episode/3',
          'https://rickandmortyapi.com/api/episode/4',
          'https://rickandmortyapi.com/api/episode/5',
          'https://rickandmortyapi.com/api/episode/6',
          'https://rickandmortyapi.com/api/episode/7',
          'https://rickandmortyapi.com/api/episode/8',
          'https://rickandmortyapi.com/api/episode/9',
          'https://rickandmortyapi.com/api/episode/10',
          'https://rickandmortyapi.com/api/episode/11',
          'https://rickandmortyapi.com/api/episode/12',
          'https://rickandmortyapi.com/api/episode/13',
          'https://rickandmortyapi.com/api/episode/14',
          'https://rickandmortyapi.com/api/episode/15',
          'https://rickandmortyapi.com/api/episode/16',
          'https://rickandmortyapi.com/api/episode/17',
          'https://rickandmortyapi.com/api/episode/18',
          'https://rickandmortyapi.com/api/episode/19',
          'https://rickandmortyapi.com/api/episode/20',
          'https://rickandmortyapi.com/api/episode/21',
          'https://rickandmortyapi.com/api/episode/22',
          'https://rickandmortyapi.com/api/episode/23',
          'https://rickandmortyapi.com/api/episode/24',
          'https://rickandmortyapi.com/api/episode/25',
          'https://rickandmortyapi.com/api/episode/26',
          'https://rickandmortyapi.com/api/episode/27',
          'https://rickandmortyapi.com/api/episode/28',
          'https://rickandmortyapi.com/api/episode/29',
          'https://rickandmortyapi.com/api/episode/30',
          'https://rickandmortyapi.com/api/episode/31',
          'https://rickandmortyapi.com/api/episode/32',
          'https://rickandmortyapi.com/api/episode/33',
          'https://rickandmortyapi.com/api/episode/34',
          'https://rickandmortyapi.com/api/episode/35',
          'https://rickandmortyapi.com/api/episode/36',
          'https://rickandmortyapi.com/api/episode/37',
          'https://rickandmortyapi.com/api/episode/38',
          'https://rickandmortyapi.com/api/episode/39',
          'https://rickandmortyapi.com/api/episode/40',
          'https://rickandmortyapi.com/api/episode/41',
          'https://rickandmortyapi.com/api/episode/42',
          'https://rickandmortyapi.com/api/episode/43',
          'https://rickandmortyapi.com/api/episode/44',
          'https://rickandmortyapi.com/api/episode/45',
          'https://rickandmortyapi.com/api/episode/46',
          'https://rickandmortyapi.com/api/episode/47',
          'https://rickandmortyapi.com/api/episode/48',
          'https://rickandmortyapi.com/api/episode/49',
          'https://rickandmortyapi.com/api/episode/50',
          'https://rickandmortyapi.com/api/episode/51',
        ],
        url: 'https://rickandmortyapi.com/api/character/1',
        created: '2017-11-04T18:48:46.250Z',
      },
      {
        id: 2,
        name: 'Morty Smith',
        status: 'Alive',
        species: 'Human',
        type: '',
        gender: 'Male',
        origin: {
          name: 'unknown',
          url: '',
        },
        location: {
          name: 'Citadel of Ricks',
          url: 'https://rickandmortyapi.com/api/location/3',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
        episode: [
          'https://rickandmortyapi.com/api/episode/1',
          'https://rickandmortyapi.com/api/episode/2',
          'https://rickandmortyapi.com/api/episode/3',
          'https://rickandmortyapi.com/api/episode/4',
          'https://rickandmortyapi.com/api/episode/5',
          'https://rickandmortyapi.com/api/episode/6',
          'https://rickandmortyapi.com/api/episode/7',
          'https://rickandmortyapi.com/api/episode/8',
          'https://rickandmortyapi.com/api/episode/9',
          'https://rickandmortyapi.com/api/episode/10',
          'https://rickandmortyapi.com/api/episode/11',
          'https://rickandmortyapi.com/api/episode/12',
          'https://rickandmortyapi.com/api/episode/13',
          'https://rickandmortyapi.com/api/episode/14',
          'https://rickandmortyapi.com/api/episode/15',
          'https://rickandmortyapi.com/api/episode/16',
          'https://rickandmortyapi.com/api/episode/17',
          'https://rickandmortyapi.com/api/episode/18',
          'https://rickandmortyapi.com/api/episode/19',
          'https://rickandmortyapi.com/api/episode/20',
          'https://rickandmortyapi.com/api/episode/21',
          'https://rickandmortyapi.com/api/episode/22',
          'https://rickandmortyapi.com/api/episode/23',
          'https://rickandmortyapi.com/api/episode/24',
          'https://rickandmortyapi.com/api/episode/25',
          'https://rickandmortyapi.com/api/episode/26',
          'https://rickandmortyapi.com/api/episode/27',
          'https://rickandmortyapi.com/api/episode/28',
          'https://rickandmortyapi.com/api/episode/29',
          'https://rickandmortyapi.com/api/episode/30',
          'https://rickandmortyapi.com/api/episode/31',
          'https://rickandmortyapi.com/api/episode/32',
          'https://rickandmortyapi.com/api/episode/33',
          'https://rickandmortyapi.com/api/episode/34',
          'https://rickandmortyapi.com/api/episode/35',
          'https://rickandmortyapi.com/api/episode/36',
          'https://rickandmortyapi.com/api/episode/37',
          'https://rickandmortyapi.com/api/episode/38',
          'https://rickandmortyapi.com/api/episode/39',
          'https://rickandmortyapi.com/api/episode/40',
          'https://rickandmortyapi.com/api/episode/41',
          'https://rickandmortyapi.com/api/episode/42',
          'https://rickandmortyapi.com/api/episode/43',
          'https://rickandmortyapi.com/api/episode/44',
          'https://rickandmortyapi.com/api/episode/45',
          'https://rickandmortyapi.com/api/episode/46',
          'https://rickandmortyapi.com/api/episode/47',
          'https://rickandmortyapi.com/api/episode/48',
          'https://rickandmortyapi.com/api/episode/49',
          'https://rickandmortyapi.com/api/episode/50',
          'https://rickandmortyapi.com/api/episode/51',
        ],
        url: 'https://rickandmortyapi.com/api/character/2',
        created: '2017-11-04T18:50:21.651Z',
      },
      {
        id: 3,
        name: 'Summer Smith',
        status: 'Alive',
        species: 'Human',
        type: '',
        gender: 'Female',
        origin: {
          name: 'Earth (Replacement Dimension)',
          url: 'https://rickandmortyapi.com/api/location/20',
        },
        location: {
          name: 'Earth (Replacement Dimension)',
          url: 'https://rickandmortyapi.com/api/location/20',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
        episode: [
          'https://rickandmortyapi.com/api/episode/6',
          'https://rickandmortyapi.com/api/episode/7',
          'https://rickandmortyapi.com/api/episode/8',
          'https://rickandmortyapi.com/api/episode/9',
          'https://rickandmortyapi.com/api/episode/10',
          'https://rickandmortyapi.com/api/episode/11',
          'https://rickandmortyapi.com/api/episode/12',
          'https://rickandmortyapi.com/api/episode/14',
          'https://rickandmortyapi.com/api/episode/15',
          'https://rickandmortyapi.com/api/episode/16',
          'https://rickandmortyapi.com/api/episode/17',
          'https://rickandmortyapi.com/api/episode/18',
          'https://rickandmortyapi.com/api/episode/19',
          'https://rickandmortyapi.com/api/episode/20',
          'https://rickandmortyapi.com/api/episode/21',
          'https://rickandmortyapi.com/api/episode/22',
          'https://rickandmortyapi.com/api/episode/23',
          'https://rickandmortyapi.com/api/episode/24',
          'https://rickandmortyapi.com/api/episode/25',
          'https://rickandmortyapi.com/api/episode/26',
          'https://rickandmortyapi.com/api/episode/27',
          'https://rickandmortyapi.com/api/episode/29',
          'https://rickandmortyapi.com/api/episode/30',
          'https://rickandmortyapi.com/api/episode/31',
          'https://rickandmortyapi.com/api/episode/32',
          'https://rickandmortyapi.com/api/episode/33',
          'https://rickandmortyapi.com/api/episode/34',
          'https://rickandmortyapi.com/api/episode/35',
          'https://rickandmortyapi.com/api/episode/36',
          'https://rickandmortyapi.com/api/episode/38',
          'https://rickandmortyapi.com/api/episode/39',
          'https://rickandmortyapi.com/api/episode/40',
          'https://rickandmortyapi.com/api/episode/41',
          'https://rickandmortyapi.com/api/episode/42',
          'https://rickandmortyapi.com/api/episode/43',
          'https://rickandmortyapi.com/api/episode/44',
          'https://rickandmortyapi.com/api/episode/45',
          'https://rickandmortyapi.com/api/episode/46',
          'https://rickandmortyapi.com/api/episode/47',
          'https://rickandmortyapi.com/api/episode/48',
          'https://rickandmortyapi.com/api/episode/49',
          'https://rickandmortyapi.com/api/episode/51',
        ],
        url: 'https://rickandmortyapi.com/api/character/3',
        created: '2017-11-04T19:09:56.428Z',
      },
    ];

    // Simule a chamada à API e defina o comportamento esperado

    getAllItemsByCategory.mockResolvedValueOnce(dadosAPI);

    // Renderize o componente
    render(<Home />);

    // Aguarde a resolução da chamada à API
    await waitFor(() => expect(getAllItemsByCategory).toHaveBeenCalled());

    // Verifique se os dados da API são exibidos corretamente no componente
    /* expect(screen.getByText(`Nome: ${dadosAPI.nome}`)).toBeInTheDocument();
    expect(screen.getByText(`Idade: ${dadosAPI.idade}`)).toBeInTheDocument(); */

    // Restaure a implementação original da função getDadosDaAPI
    jest.restoreAllMocks();
  });
});
