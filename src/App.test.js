import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/factor program/i);
  expect(linkElement).toBeInTheDocument();
});

test("check the factor list for the first div1",()=>{
  render(<App />);
  const div1 = screen.getByTestId("div1");
   console.log(div1.textContent,"div1")
  expect(div1.textContent).toBe("yes");
})

test("check the factor list for the second div2",()=>{
  render(<App />);
  const div1 = screen.getByTestId("div2");
   console.log(div1.textContent,"div2")
  expect(div1.textContent).toBe("no");
})

test("check the factor list for the second div3",()=>{
  render(<App />);
  const div1 = screen.getByTestId("div3");
   console.log(div1.textContent,"div3")
  expect(div1.textContent).toBe("yes");
})