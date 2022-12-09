import '@testing-library/jest-dom';
import calculate from '../logic/calculate';

describe('Calculator tests', () => {
  test('should return an object', () => {
    // Arrange
    const object = { total: 10, next: null, operation: '-' };
    // Act
    const result = calculate(object, 'AC');
    // Assert
    expect(typeof result).toBe('object');
  });

  test('10-6 should return a total of 4 and the next and operation values should become Null', () => {
    // Arrange
    const object = { total: 10, next: 6, operation: '-' };
    // Act
    const result = calculate(object, '=');
    // Assert
    expect(result.total).toBe('4');
    expect(result.next).toBeNull();
    expect(result.operation).toBeNull();
  });

  test('10 +/- should return -10', () => {
    // Arrange
    const object = { total: 10, next: null, operation: null };
    // Act
    const result = calculate(object, '+/-');
    // Assert
    expect(result.total).toBe('-10');
  });
});
