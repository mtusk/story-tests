import { screen, render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Button.stories';
import { JSXElementConstructor } from 'react';
import { StoriesWithPartialProps, StoryFile } from '@storybook/testing-react/dist/types';

describe('Button', () => {
  // TODO the typing for composeStories(...) is mad because our Button.stories.tsx file
  // doesn't have a default export, because we chose to move that to our Button.stories.mdx file
  // so not sure how to make the typing happy here... it seems to work with the hack below... 🤷
  const { Primary, Secondary } = composeStories(stories as any) as StoriesWithPartialProps<typeof stories>;

  it('renders primary button', () => {
    render(<Primary />);

    expect(screen.getByRole('heading')).toHaveTextContent('Below is a really neat button!'); // note how this demonstrates that our story is composed and we have access to the decorator!
    expect(screen.getByRole('button')).toHaveTextContent('Primary');
  });

  it('renders secondary button', () => {
    render(<Secondary />);

    expect(screen.getByRole('button')).toHaveTextContent('Secondary');
  });
})
