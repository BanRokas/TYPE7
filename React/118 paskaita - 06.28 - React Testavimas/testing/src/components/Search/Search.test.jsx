import { render, fireEvent } from '@testing-library/react';
import Search from './Search';

it('searchRenderCheck', () => {
  const { queryByTitle } = render(<Search />);
  const input = queryByTitle('dummySearch');
  expect(input).toBeTruthy();
});

describe('changInInput', () => {
  it('onChange', () => {
    const { queryByTitle } = render(<Search />);
    const input = queryByTitle('dummySearch');
    expect(input.value).toBe('');
    fireEvent.change(input, {target: {value: "testValue"}});
    expect(input.value).toBe('testValue');
  });
});