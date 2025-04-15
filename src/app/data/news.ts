export interface NewsItem {
  id: number;
  date: string;
  title: string;
  description: string;
  news: string;
  image?: string;
  videoUrl?: string;
  category: string;
  newsLink?: string;
}

export const newsItems: NewsItem[] = [
  {
    id: 1,
    date: "February 24, 2025",
    title: "Recent Conference",
    description:
      "RISE@TCGCREST is organizing fully academic the largest energy storage conference in the history of India",
    news: "RISE@TCGCREST is organizing fully academic the largest energy storage conference in the history of India. The conference has received tremendous global response from academic, industry leaders and professionals from battery industry.  Record numbers of international experts working on advanced lithium-ion batteries and beyond have confirmed their participation.  It is unprecedented in the history of conferences organized in India where so many global battery leaders from top academic institutions, industry, National Labs, and government have converged at one place. In addition to keynote and invited talks from world-experts working on different topics on battery R&D, we will have invited panel discussions from key industry leaders discussing recent developments in battery manufacturing, supply chain, policy, and techno-economic analysis.",
    category: "Conference",
    image:
      "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1738049525/EESL/News/Conference-Announcement.png",
    newsLink: "https://www.icsb25.com",
  },
  {
    id: 2,
    date: "2024-01-10",
    title: "New Laboratory Equipment Installed",
    description:
      "State-of-the-art testing facilities have been added to enhance our research capabilities.",
    news: "A new Cryo Dual Ion Microscope has been installed in the RISE lab. This instrument features a unique capability for ion milling, specifically designed for beam-sensitive materials such as lithium (Li), sodium (Na), polymers, and soft glassy materials. These features are crucial for battery research. Additionally, the microscope is equipped with Energy Dispersive X-ray Spectroscopy (EDX) and Time-of-Flight Secondary Ion Mass Spectrometry (TOF-SIMS).",
    category: "Facility",
    image:
      "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739691337/Tof-sims_w4bx5y.jpg",
  },
  {
    id: 3,
    date: "2024-01-05",
    title:
      "Dr. Lily Mandal named among top Women Scientists in Energy Research.",
    description:
      "Dr. Lily Mandal of RISE, TCG-CREST (Kolkata) has been recognized by the prestigious ACS Energy Letters as one of the Women Scientists at the Forefront of Energy Research.",
    news: "Delighted to share a great news that Dr. Lily Mandal of our Research Institute for Sustainable Energy (RISE, TCG-CREST) Kolkata, India, has been chosen by ACS Energy Letters ( A top journal with Impact Factor of 20, with eminent Prof. Prashant Kamat as the Editor) as one of the Women Scientists at the Forefront of Energy Research !!! Many congratulations Lily, you make all of us at TCG very proud. Also, this is a great achievement of other young researchers Dr. Susmita Bera and Dr. Ripan Biswas!!",
    category: "Achievement",
    image:
      "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1738161379/EESL/News/emfdtkctxkdeupsmmazt.png",
    newsLink: "https://pubs.acs.org/doi/10.1021/acsenergylett.4c03437",
  },
  {
    id: 4,
    date: "2024-01-12",
    title: "Breakthrough in Research",
    description:
      "We thoroughly examined the dynamics of metastable phases at the interface of Li metal and Halide solid electrolytes (Li3YCl6, Li2ZrCl6, Li3InCl6) and their impact on interface passivation.",
    news: "We thoroughly examined the dynamics of metastable phases at the interface of Li metal and Halide solid electrolytes (Li3YCl6, Li2ZrCl6, Li3InCl6) and their impact on interface passivation. This was achieved using operando XPS analysis and virtual Li metal plating. We meticulously analyzed over 300 XPS spectra for this paper. A comprehensive analysis of this data would be invaluable for young researchers engaged in XPS studies for battery research. The research has been accepted in Chemistry of Materials.",
    category: "Research",
    // image: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1738049525/EESL/News/Conference-Announcement.png",
    newsLink: "https://pubs.acs.org/doi/abs/10.1021/acs.chemmater.4c02307",
  },
  {
    id: 5,
    date: "2024-01-08",
    title: "Ultralow temp Na ion Battery",
    description:
      "EESL lab has achieved a breakthrough in developing a novel liquid electrolyte for a sodium-ion battery pouch cell that operates at -50°C.",
    news: "EESL lab has achieved a breakthrough in developing a novel liquid electrolyte for a sodium-ion battery pouch cell that operates at -50°C. This innovation unlocks unique capabilities for sodium-ion batteries in various low-temperature applications.",
    category: "Research",
    videoUrl:
      "https://res.cloudinary.com/dmw1bwmpr/video/upload/f_auto:video,q_auto/v1/EESL/News/zizssnil8yvcxihmahjg",
  },
  {
    id: 6,
    date: "2024-02-11",
    title:
      "DRDO Awards Project to EESL Lab for Advanced Si-Graphite Li-ion Battery Development",
    description:
      "DRDO awarded EESL Lab a project to develop a silicon-graphite composite for high-energy, high-power Li-ion batteries.",
    news: "A recent DRDO project was granted to EESL lab for the development of a Si-graphite composite for high energy and power density Li ion battery application.",
    category: "Research",
    // videoUrl: "https://res.cloudinary.com/dmw1bwmpr/video/upload/f_auto:video,q_auto/v1/EESL/News/zizssnil8yvcxihmahjg"
  },
  {
    id: 7,
    date: "2025-05-15",
    title:
      "DRDO Awards Grant to Dr. Abhik Banerjee for Advanced Lithium-Ion Battery Research",
    description:
      "Dr. Abhik Banerjee received a DRDO grant to develop high-energy lithium-ion batteries using silicon-graphite anodes.",
    news: "Dr. Abhik Banerjee has received a grant from the Defense Research and Development Organisation (DRDO) to develop high-energy density lithium-ion batteries utilizing silicon-graphite anode materials.",
    category: "Grant",
  },
];
