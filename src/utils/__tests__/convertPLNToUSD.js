import { convertPLNToUSD } from './../convertPLNtoUSD';


describe('ConvertPLNtoUSD', () => {
  it('should return proper value when good input', () => {
    expect(convertPLNToUSD(1)).toBe('$0.29');
    expect(convertPLNToUSD(2)).toBe('$0.57');
    expect(convertPLNToUSD(20)).toBe('$5.71');
    expect(convertPLNToUSD(12)).toBe('$3.43');
  });
  it('should return NaN when input is text', () => {
    expect(convertPLNToUSD('4')).toBeNaN();
    expect(convertPLNToUSD('-2')).toBeNaN();
    expect(convertPLNToUSD('2a')).toBeNaN();
    expect(convertPLNToUSD('b')).toBeNaN();
  });
  it('should return NaN when input is empty', () => {
    expect(convertPLNToUSD()).toBeNaN();
  });
  it('should return Error when value is not a number and text', () => {
    expect(convertPLNToUSD(null)).toBe('Error');
    expect(convertPLNToUSD([])).toBe('Error');
    expect(convertPLNToUSD({})).toBe('Error');
  });
  it('should return 0 when value is <= 0', () => {
    expect(convertPLNToUSD(0)).toBe('$0.00');
    expect(convertPLNToUSD(-1)).toBe('$0.00');
    expect(convertPLNToUSD(-4)).toBe('$0.00');
    expect(convertPLNToUSD(-10)).toBe('$0.00');

  });



});