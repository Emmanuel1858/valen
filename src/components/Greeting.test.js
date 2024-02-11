import Greeting from './Greeting'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
describe('Greeting Compoment', () => {
    test('renders Hello world as a text', () => {
        //  Arrange
        render(<Greeting />)

        const hellorWorldElement = screen.getByText('Hello world!', { exact: false })
        expect(hellorWorldElement).toBeInTheDocument
    });
    
    test('Renders It is good to see you', () => {
        render(<Greeting />)
        const greetingTextElement = screen.getByText('It is good to see you', { exact: false })
        expect(greetingTextElement).toBeInTheDocument
    });

    test('Renders change if the button was clicked', () => {
        render(<Greeting />)

        // Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement)

        // Assert
        const outputElement = screen.getByText('Changed!', { exact: false });
        expect(outputElement).toBeInTheDocument
    });

    test('Does not render if the buton was clicked', () => {
        render(<Greeting />)

        // Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement)

        const outputElement = screen.queryByText('good to see you', { exact: false });
        expect(outputElement).toBeNull
    })
    
    })

