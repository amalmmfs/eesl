interface ResearchPosition {
  role: string;
  title: string;
  responsibilities: string[];
}

interface PhDPosition {
  role: string;
  title: string;
  responsibilities: string[];
}

interface Fellowships {
  description: string;
  options: string[];
}

interface CareerOpportunities {
  researchAssociatePositions: ResearchPosition[];
  phdPosition: PhDPosition;
  fellowships: Fellowships;
}

export const careerOpportunities: CareerOpportunities = {
  researchAssociatePositions: [
    {
      role: "Research Associate",
      title: "Scanning Probe Microscopy of Battery Materials",
      responsibilities: [
        "Understanding the SEI formation in solid and liquid electrolytes",
        "Chemical and Physical Properties of SEI",
        "In operando analysis of battery interface using co-localized AFM-Raman.",
      ],
    },
    {
      role: "Research Associate",
      title: "Na-ion Battery Full Cell Degradation Analysis",
      responsibilities: [
        "Full cell analysis using three-electrode configuration.",
        "Gas generation analysis of NIB (collaboration with Uppsala)",
        "Electrolyte additives for Na ion batteries",
        "DFT, FEM and transmission electron microscopy analysis of battery materials",
      ],
    },
  ],
  phdPosition: {
    role: "PhD",
    title:
      "Understanding ionic and electronic transport properties of catholyte in solid-state batteries.",
    responsibilities: [
      "One PhD position is available on understanding ionic and electronic transport properties of catholyte in a solid-state battery.",
      "The person will couple electrochemical impedance spectroscopy with FIB milling-based tomography for analysis.",
    ],
  },
  fellowships: {
    description:
      "Interested candidates with relevant experience along with the following scholarships are encouraged to send their CV to the PI.",
    options: [
      "National post-doctoral fellowship: Science and Engineering",
      "UGC D.S. Kothari fellowship",
    ],
  },
};
