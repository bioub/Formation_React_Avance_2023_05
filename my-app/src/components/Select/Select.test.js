import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Select from './Select'

test('Select show selected by default', async () => {
  // ARRANGE
  render(<Select items={['Toto', 'Titi', 'Tata']} selected="Tutu"  />)

  // ACT
  // await userEvent.click(screen.getByText('Load Greeting'))
  // await screen.findByRole('heading')

  // ASSERT
  expect(screen.getByText('TUTU')).toBeInTheDocument();
  expect(screen.queryByText('Toto')).not.toBeInTheDocument();
})

test('Select opens menu', async () => {
  // ARRANGE
  render(<Select items={['Toto', 'Titi', 'Tata']} selected="Tutu"  />)

  // ACT
  await userEvent.click(screen.getByText('TUTU'))
  // await screen.findByRole('heading')

  // ASSERT
  expect(screen.queryByText('Toto')).toBeInTheDocument();
})


test('Select should call onSelected on item click', async () => {
  // ARRANGE
  const onSelected = jest.fn();
  render(<Select items={['Toto', 'Titi', 'Tata']} selected="Tutu" onSelected={onSelected} />)

  // ACT
  await userEvent.click(screen.getByText('TUTU'))
  await userEvent.click(screen.getByText('Tata'))

  // ASSERT
  expect(screen.queryByText('Toto')).not.toBeInTheDocument();
  expect(onSelected).toHaveBeenCalledWith('Tata');
})
