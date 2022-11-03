import { render, screen} from '@testing-library/react';
import ResultBox from './ResultBox';
import '@testing-library/jest-dom/extend-expect';


  describe('Component ResultBox', () => {
    it('shoul render without crashing', () => {
        render(<ResultBox from="PLN" to="USD" amount={100} />)
    });
    const testCasesPLNtoUSD = [
        { amount: 100, expected: 'PLN 100.00 = $28.57' },
        { amount: 20, expected: 'PLN 20.00 = $5.71' },
        { amount: 200, expected: 'PLN 200.00 = $57.14' },
        { amount: 345, expected: 'PLN 345.00 = $98.57' },
    ];
    const testCasesUSDTOPLN = [
        { amount: 100, expected: '$100.00 = PLN 350.00' },
        { amount: 400, expected: '$400.00 = PLN 1,400.00' },
        { amount: 50, expected: '$50.00 = PLN 175.00' },
        { amount: 2, expected: '$2.00 = PLN 7.00' },
    ];
    const testCases = [
        { amount: 100, fromAndTo: 'USD', expected: '$100.00 = $100.00' },
        { amount: 200, fromAndTo: 'PLN', expected: 'PLN 200.00 = PLN 200.00' },
      ];

    const testCasesMinusAmount = [
        { amount: -100, from: 'USD', to: 'PLN', expected: 'Wrong value…' },
        { amount: -200, from: 'USD', to: 'PLN', expected: 'Wrong value…' },
        { amount: -10, from: 'PLN', to: 'USD', expected: 'Wrong value…' },
        { amount: -20, from: 'PLN', to: 'USD', expected: 'Wrong value…' },
    ];


    for(const testObj of testCasesPLNtoUSD) {
        it('should render proper info about conversion when PLN -> USD', () => {
            render(<ResultBox from="PLN" to="USD" amount={testObj.amount} />)
            const convert = screen.getByTestId('convert');
            expect(convert).toHaveTextContent(testObj.expected);
        })
    }
    for(const testObj of testCasesUSDTOPLN) {
        it('should render proper info about conversion when USD -> PLN', () => {
            render(<ResultBox from="USD" to="PLN" amount={testObj.amount} />)
            const convert = screen.getByTestId('convert');
            expect(convert).toHaveTextContent(testObj.expected);
        })
    }
    for(const testObj of testCases) {
        it('should render proper info about conversion when PLN -> PLN and vice versa', () => {
            render(<ResultBox from={testObj.fromAndTo} to={testObj.fromAndTo} amount={testObj.amount} />)
            const convert = screen.getByTestId('convert');
            expect(convert).toHaveTextContent(testObj.expected);
        })
    }
    for(const testObj of testCasesMinusAmount) {
        it('should render proper info about conversion when amount < 0', () => {
            render(<ResultBox from={testObj.from} to={testObj.to} amount={testObj.amount} />)
            const convert = screen.getByTestId('convert');
            expect(convert).toHaveTextContent(testObj.expected);
        })
    }



});