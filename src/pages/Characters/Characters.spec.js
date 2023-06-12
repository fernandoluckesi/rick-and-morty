import { Characters } from '.';
import { render, screen } from '../../utils/test';

describe('Test content Characters', () => {
  it('should test main template content', async () => {
    render(<Characters />);

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
});
