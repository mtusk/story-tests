import { Story } from '@storybook/react';
import React from 'react';
import { Button } from '.';

export const Primary: Story<{}> = () => (
  <Button primary={true} label="Primary" />
);
Primary.decorators = [
  (Story) => (
    <div style={{ padding: 16, backgroundColor: 'green' }}>
      <h4>Below is a really neat button!</h4>
      <Story />
    </div>
  ),
];

export const Secondary: Story<{}> = () => <Button label="Secondary" />;

// note how we have full syntax checking/intellisense type stuff here! (unlike mdx)
export const Large: Story<{}> = () => <Button size="large" label="Large" />;

// note how it's now possible to exclude this story from the docs page!
export const Small: Story<{}> = () => <Button size="small" label="Small" />;
