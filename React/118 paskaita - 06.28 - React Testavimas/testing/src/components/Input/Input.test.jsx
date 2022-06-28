import { render, fireEvent } from '@testing-library/react';
import Input from './Input';

describe('Input Coponent', () => {
  it('renderedInput', () => {
    const { getByTestId } = render(<Input showDiv={true} />);
    const input = getByTestId('searchBar');
    expect(input).toBeTruthy();
  });

  it('renderDiv', () => {
    const { getByTestId } = render(<Input showDiv={true} />);
    const div = getByTestId('divWeWantToShow');
    expect(div).toBeTruthy();
  });

  it('doNotRenderDiv', () => {
    const { queryByTestId } = render(<Input showDiv={false} />);
    const div = queryByTestId('divWeWantToShow');
    expect(div).toBeFalsy();    
  });

  it('changeOnInputCausesChangeOnHeader', async () => {
    const { getByTestId } = render(<Input showDiv={true} />);
    const input = getByTestId('searchBar');
    const header = getByTestId('displaySearch');
    expect(header.innerHTML).toBe('');
    const inputWord = 'Rokas';
    await fireEvent.change(input, {target: {value: inputWord}});
    expect(header.innerHTML).toBe(inputWord);
  });
});