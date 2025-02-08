export const formatChemicalFormula = (formula: string): string => {
    return formula.replace(/(\d+)/g, (match: string) => {
      return `<sub>${match}</sub>`;
    });
  };