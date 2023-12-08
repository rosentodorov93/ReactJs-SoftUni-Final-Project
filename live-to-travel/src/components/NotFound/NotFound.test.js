import { render, screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import NotFound from './NotFound';

it("Should render NotFound title", async () => {
    render(<MemoryRouter>
        <NotFound/>
    </MemoryRouter>);
    const linkElement = await screen.findByText(/404 - Not Found/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("Should render NotFound pararaph", async () => {
    render(<MemoryRouter>
        <NotFound/>
    </MemoryRouter>);
    const linkElement = await screen.findByText(/Sorry, the page you are looking for does not exist./i);
    expect(linkElement).toBeInTheDocument();
  });

  it("Should render Link to Home", async () => {
    render(<MemoryRouter>
        <NotFound/>
    </MemoryRouter>);
    const linkElement = await screen.getByTestId('link');
    expect(linkElement).toBeInTheDocument();
  });
