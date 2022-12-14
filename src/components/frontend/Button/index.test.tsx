import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Btn from './index';

describe('<Foo />', () => {
  it('render Foo with dumi', () => {
    const msg = 'dumi';

    render(<Btn title={msg} />);
    expect(screen.queryByText(msg)).toBeInTheDocument();
  });
});
