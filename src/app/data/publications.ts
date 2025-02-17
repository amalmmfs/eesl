import { formatChemicalFormula } from "../utils/formatChemicalFormula";


export interface Publication {
    id: number;
    title: string;
    authors: string[];
    journal: string;
    year: number;
    publicationLink: string;
    formattedTitle?: string;
  }

  export const processPublications = (publications: Publication[]): Publication[] => {
    return publications.map(pub => ({
      ...pub,
      formattedTitle: formatChemicalFormula(pub.title),
      // formattedJournal: formatChemicalFormula(pub.journal)
    }));
  };


  export const publications: Publication[] = [
    {
      id: 0,
      title: "Key Anodic Interfacial Phenomena and their Control in Next-Generation Lithium and Sodium Metal Batteries",
      authors: [
        "Kingshuk Roy", "Manas K. Bhunia", "Pitchiah E. Karthik", "Ashutosh Rana", "Bidisa Das", "Abhik Banerjee", "Satishchandra Ogale"
      ],
      journal: "Wiley",
      year: 2025,
      publicationLink: "https://onlinelibrary.wiley.com/doi/10.1002/smll.202410167"
    },
    {
      id: 1,
      title:
        "Evolution of Interfacial Electro-Chemo-Mechanics between Lithium Metal and Halide Solid Electrolyte",
      authors: [
        "Lily Mandal",
        "Ripan K Biswas",
        "Susmita Bera",
        "Satishchandra B Ogale",
        "Abhik Banerjee",
      ],
      journal: "Chemistry of Materials 36 (20), 10336-10350",
      year: 2024,
      publicationLink:
        "https://pubs.acs.org/doi/abs/10.1021/acs.chemmater.4c02307",
    },
    {
      id: 2,
      title:
        "Chimie Douce Derived Novel P2‐Type Layered Oxide for Potassium‐Ion Batteries (Adv. Funct. Mater. 41/2024)",
      authors: [
        "Pawan Kumar Jha",
        "Alexander Golubnichiy",
        "Dorothy Sachdeva",
        "Abhik Banerjee",
        "Gopalakrishnan Sai Gautam",
        "Maximilian Fichtner",
        "Artem M Abakumov",
        "Prabeer Barpanda",
      ],
      journal: "Advanced Functional Materials",
      year: 2024,
      publicationLink:
        "https://advanced.onlinelibrary.wiley.com/doi/abs/10.1002/adfm.202470241",
    },
    {
        id: 3,
      title:
        "Light element (B, N) co-doped graphitic films on copper as highly robust current collectors for anode-free Li metal battery applications",
      authors: [
        "Rhushikesh Godbole",
        "Shweta Hiwase",
        "Mujaffar Hossain",
        "Supriya Kadam",
        "Minal Wable",
        "Sunit Rane",
        "Sukanta Mondal",
        "Bidisa Das",
        "Abhik Banerjee",
        "Satishchandra Ogale",
      ],
      journal: "Applied Physics Reviews 11 (3)",
      year: 2024,
      publicationLink:
        "https://pubs.aip.org/aip/apr/article-abstract/11/3/031416/3311538/Light-element-B-N-co-doped-graphitic-films-on?redirectedFrom=fulltext",
    },
    {
      id: 4,
      title:
        "Lithiophilic Dibenzamide Linkages to Impart Lithium Storage Capacity in Porous Polybenzamides",
      authors: [
        "Shayan Karak",
        "Himanshi Singh",
        "Arup Biswas",
        "Satyadip Paul",
        "Souvik Manna",
        "Yusuke Nishiyama",
        "Biswarup Pathak",
        "Abhik Banerjee",
        "Rahul Banerjee",
      ],
      journal: "Journal of the American Chemical Society 146 (29), 20183-20192",
      year: 2024,
      publicationLink: "https://pubs.acs.org/doi/abs/10.1021/jacs.4c05192",
    },
    {
      id: 5,
      title:
        "Ionocovalency of the Central Metal Halide Bond-Dependent Chemical Compatibility of Halide Solid Electrolytes with Li6PS5Cl",
      authors: [
        "Subha Samanta",
        "Susmita Bera",
        "Ripan K Biswas",
        "Sukanta Mondal",
        "Lily Mandal",
        "Abhik Banerjee",
      ],
      journal: "ACS Energy Letters 9 (8), 3683-3693",
      year: 2024,
      publicationLink:
        "https://pubs.acs.org/doi/abs/10.1021/acsenergylett.4c01084",
    },
    {
      id: 6,
      title:
        "Covalent Organic Framework Catalyzed Amide Synthesis Directly from Alcohol Under Red Light Excitation",
      authors: [
        "Debashis Adhikari",
        "Monojit Roy",
        "Bikash Mishra",
        "Shyamali Maji",
        "Archisman Sinha",
        "Supriti Dutta",
        "Sukanta Mondal",
        "Abhik Banerjee",
        "Pradip Pachfule",
      ],
      journal: "Angewandte Chemie",
      year: 2024,
      publicationLink:
        "https://onlinelibrary.wiley.com/doi/abs/10.1002/ange.202410300",
    },
    {
      id: 7,
      title:
        "Optimizing solid electrolytes with 3d transition metal doped Li3YCl6 for Li-ion batteries",
      authors: ["Tanmoy Pal", "GP Das", "Biplab Sanyal", "Abhik Banerjee"],
      journal: "Journal of Physics D: Applied Physics 57 (14), 145503",
      year: 2024,
      publicationLink:
        "https://iopscience.iop.org/article/10.1088/1361-6463/ad1b0a/meta",
    },
    {   
      id: 8,
      title:
        "Covalent Organic Framework Featuring High Iodine Uptake for Li-Ion Battery: Unlocking the Potential of Hazardous Waste",
      authors: [
        "Saurabh Satyam",
        "Samraj Mollick",
        "Yogeshwar D. More",
        "Abhik Banerjee",
        "Sahel Fajal",
        "Nikhil Kumar",
        "Mandar M. Shirolkar",
        "Satishchandra B. Ogale",
        "Sujit K. Ghosh",
      ],
      journal: "ACS Materials Letters 2422-2430",
      year: 2023,
      publicationLink:
        "https://pubs.acs.org/doi/abs/10.1021/acsmaterialslett.3c00443",
    },
    {
        id: 9,
      title:
        "Mitigating Dendrite Formation on a Zn Electrode in Aqueous Zinc Chloride by the Competitive Surface Chemistry of an Imidazole Additive",
      authors: [
        "Rana Ashutosh",
        "Anup Thakare",
        "Nikhil Kumar",
        "Buddhadev Mukherjee",
        "Arun Torris",
        "Bidisa Das",
        "Satishchandra Ogale",
        "Abhik Banerjee",
      ],
      journal: "ACS Applied Materials & Interfaces 23093-23103",
      year: 2023,
      publicationLink: "https://pubs.acs.org/doi/abs/10.1021/acsami.3c01310",
    },
    {
      id: 10,
      title:
        "CO2 Laser Direct-Write Process for Micro-Gradient-Patterned Carbon Composed of Graphene-like and Disordered Carbon Forms for a Robust Anode-Free Li–Metal Battery",
      authors: [
        "Minal Wable",
        "Mohammad Furquan",
        "Megha Paygude",
        "Anil Shetti",
        "Satishchandra Ogale",
        "Abhik Banerjee",
      ],
      journal: "ACS Applied Energy Materials",
      year: 2022,
      publicationLink: "https://pubs.acs.org/doi/abs/10.1021/acsaem.2c01621",
    },
    {
      id: 11,
      title:
        "Nanoscale Compositional Mapping of Commercial LiNi0.8Co0.15Al0.05O2 Cathodes Using Atom Probe Tomography",
      authors: [
        "Pritesh Parikh",
        "Hyeseung Chung",
        "Ethan Vo",
        "Abhik Banerjee",
        "Ying Shirley Meng",
        "Arun Devaraj",
      ],
      journal: "The Journal of Physical Chemistry C 14380-14388",
      year: 2022,
      publicationLink: "https://pubs.acs.org/doi/abs/10.1021/acs.jpcc.2c01217",
    },
    {
      id: 12,
      title:
        "Search for New Anode Materials for High Performance Li-Ion Batteries",
      authors: ["Kingshuk Roy", "Abhik Banerjee", "Satishchandra Ogale"],
      journal: "ACS Applied Materials & Interfaces 20326-20348",
      year: 2022,
      publicationLink: "https://pubs.acs.org/doi/abs/10.1021/acsami.1c25262",
    },
    {
        id: 13,
      title:
        "Moving beyond 99.9% Coulombic efficiency for lithium anodes in liquid electrolytes",
      authors: [
        "Gustavo M. Hobold",
        "Jeffrey Lopez",
        "Rui Guo",
        "Nicolav Minafra",
        "Abhik Banerjee",
        "Y. Shirley Meng",
        "Yang Shao-Horn",
        "Betar M. Gallant",
      ],
      journal: "Nature Energy 951–960",
      year: 2021,
      publicationLink: "https://www.nature.com/articles/s41560-021-00910-w",
    },
    {
        id: 14,
      title:
        "A stable cathode-solid electrolyte composite for high-voltage, long-cycle-life solid-state sodium-ion batteries",
      authors: [
        "Erik A. Wu",
        "Swastika Banerjee",
        "Hanmei Tang",
        "Peter M. Richardson",
        "Jean-Marie Doux",
        "Ji Qi",
        "Zhuoying Zhu",
        "Abhik Banerjee",
      ],
      journal: "Nature Communications 1-11",
      year: 2021,
      publicationLink: "https://www.nature.com/articles/s41467-021-21488-7",
    },
    {
        id: 15,
      title:
        "Glassy Li metal anode for high-performance rechargeable Li batteries",
      authors: [
        "Xuefeng Wang",
        "Gorakh Pawar",
        "Yejing Li",
        "Xiaodi Ren",
        "Minghao Zhang",
        "Bingyu Lu",
        "Abhik Banerjee",
      ],
      journal: "Nature Materials 1339-1345",
      year: 2020,
      publicationLink: "https://www.nature.com/articles/s41563-020-0729-1",
    },
    {
        id: 16,
      title:
        "Interfaces and interphases in all-solid-state batteries with inorganic solid electrolytes",
      authors: [
        "Abhik Banerjee",
        "Xuefeng Wang",
        "Chengcheng Fang",
        "Erik A. Wu",
        "Ying Shirley Meng",
      ],
      journal: "Chemical Reviews 6878-6933",
      year: 2020,
      publicationLink: "https://pubs.acs.org/doi/abs/10.1021/acs.chemrev.0c00101",
    },
    {
        id: 17,
      title:
        "From nanoscale interface characterization to sustainable energy storage using all-solid-state batteries",
      authors: [
        "Darren HS Tan",
        "Abhik Banerjee",
        "Zheng Chen",
        "Ying Shirley Meng",
      ],
      journal: "Nature Nanotechnology 170-180",
      year: 2020,
      publicationLink: "https://www.nature.com/articles/s41565-020-0657-x",
    },
    {
        id: 18,
      title:
        "Thin solid electrolyte layers enabled by nanoscopic polymer binding",
      authors: [
        "Yejing Li",
        "Xuefeng Wang",
        "Hongyao Zhou",
        "Xing Xing",
        "Abhik Banerjee",
        "John Holoubek",
        "Haodong Liu",
        "Ying Shirley Meng",
        "Ping Liu",
      ],
      journal: "ACS Energy Letters 955-961",
      year: 2020,
      publicationLink:
        "https://pubs.acs.org/doi/abs/10.1021/acsenergylett.0c00040",
    },
    {
        id: 19,
      title: "Sustainable design of fully recyclable all-solid-state batteries",
      authors: [
        "Darren HS Tan",
        "Panpan Xu",
        "Hedi Yang",
        "Min-cheol Kim",
        "Han Nguyen",
        "Erik A. Wu",
        "Jean-Marie Doux",
        "Abhik Banerjee",
        "Ying Shirley Meng",
        "Zheng Chen",
      ],
      journal: "MRS Energy & Sustainability",
      year: 2020,
      publicationLink:
        "https://www.cambridge.org/core/journals/mrs-energy-and-sustainability/article/sustainable-design-of-fully-recyclable-all-solidstate-batteries/7E4290DA3D98BEDE605B5D8C499B11C3",
    },
    {
        id: 20,
      title:
        "Pressure effects on sulfide electrolytes for all solid-state batteries",
      authors: [
        "Jean-Marie Doux",
        "Yangyuchen Yang",
        "Darren HS Tan",
        "Han Nguyen",
        "Erik A. Wu",
        "Xuefeng Wang",
        "Abhik Banerjee",
        "Ying Shirley Meng",
      ],
      journal: "Journal of Materials Chemistry A 5049-5055",
      year: 2020,
      publicationLink:
        "https://pubs.rsc.org/en/content/articlelanding/2020/ta/c9ta12889a/unauth",
    },
    {
        id: 21,
      title:
        "Stack pressure considerations for room‐temperature all‐solid‐state lithium metal batteries",
      authors: [
        "Jean‐Marie Doux",
        "Han Nguyen",
        "Darren HS Tan",
        "Abhik Banerjee",
        "Xuefeng Wang",
        "Erik A. Wu",
        "Chiho Jo",
        "Hedi Yang",
        "Ying Shirley Meng",
      ],
      journal: "Advanced Energy Materials",
      year: 2020,
      publicationLink:
        "https://onlinelibrary.wiley.com/doi/abs/10.1002/aenm.201903253",
    },
    {
        id: 22,
      title:
        "Revealing nanoscale solid–solid interfacial phenomena for long-life and high-energy all-solid-state batteries",
      authors: [
        "Abhik Banerjee",
        "Hanmei Tang",
        "Xuefeng Wang",
        "Ju-Hsiang Cheng",
        "Han Nguyen",
        "Minghao Zhang",
        "Darren HS Tan",
      ],
      journal: "ACS Applied Materials & Interfaces 43138-43145",
      year: 2019,
      publicationLink: "https://pubs.acs.org/doi/abs/10.1021/acsami.9b13955",
    },
    {
        id: 23,
      title:
        "Single-step synthesis of highly conductive Na3PS4 solid electrolyte for sodium all solid-state batteries",
      authors: [
        "Han Nguyen",
        "Abhik Banerjee",
        "Xuefeng Wang",
        "Darren Tan",
        "Erik A. Wu",
        "Jean-Marie Doux",
        "Ryan Stephens",
        "Guy Verbist",
        "Ying Shirley Meng",
      ],
      journal: "Journal of Power Sources",
      year: 2019,
      publicationLink:
        "https://www.sciencedirect.com/science/article/abs/pii/S0378775319305804",
    },
    {
        id: 24,
      title:
        "Elucidating reversible electrochemical redox of Li6PS5Cl solid electrolyte",
      authors: [
        "Darren HS Tan",
        "Erik A. Wu",
        "Han Nguyen",
        "Zheng Chen",
        "Maxwell AT Marple",
        "Jean-Marie Doux",
        "Xuefeng Wang",
        "Hedi Yang",
        "Abhik Banerjee",
        "Ying Shirley Meng",
      ],
      journal: "ACS Energy Letters",
      year: 2019,
      publicationLink:
        "https://pubs.acs.org/doi/abs/10.1021/acsenergylett.9b01693",
    },
    {
        id: 25,
      title:
        "Role of polyacrylic acid (PAA) binder on the solid electrolyte interphase in silicon anodes",
      authors: [
        "Pritesh Parikh",
        "Mahsa Sina",
        "Abhik Banerjee",
        "Xuefeng Wang",
        "Macwin Savio D’Souza",
        "Jean-Marie Doux",
        "Erik A. Wu",
      ],
      journal: "Chemistry of Materials",
      year: 2019,
      publicationLink:
        "https://pubs.acs.org/doi/abs/10.1021/acs.chemmater.8b05020",
    },
    {
        id: 26,
      title:
        "Hybrid Li-Ion and Li-O2 Battery Enabled by Oxyhalogen-Sulfur Electrochemistry",
      authors: [
        "Xuefeng Wang",
        "Yejing Li",
        "Xuanxuan Bi",
        "Lu Ma",
        "Tianpin Wu",
        "Mahsa Sina",
        "Shen Wang",
      ],
      journal: "Joule",
      year: 2018,
      publicationLink:
        "https://www.sciencedirect.com/science/article/pii/S2542435118303301",
    },
    {
        id: 27,
      title:
        "In situ and operando probing of solid–solid interfaces in electrochemical devices",
      authors: ["T. A. Wynn", "J. Z. Lee", "A. Banerjee", "Y. S. Meng"],
      journal: "MRS Bulletin",
      year: 2018,
      publicationLink:
        "https://www.cambridge.org/core/journals/mrs-bulletin/article/abs/in-situ-and-operando-probing-of-solidsolid-interfaces-in-electrochemical-devices/23E0D0675A316EB295503FA7AC57E89A",
    },
    {
        id: 28,
      title:
        "New Na‐ion solid electrolytes Na4−xSn1−xSbxS4 (0.02≤ x≤ 0.33) for all‐solid‐state Na‐ion batteries",
      authors: [
        "Jongwook W. Heo",
        "Abhik Banerjee",
        "Kern Ho Park",
        "Yoon Seok Jung",
        "Seung‐Tae Hong",
      ],
      journal: "Advanced Energy Materials",
      year: 2018,
      publicationLink:
        "https://onlinelibrary.wiley.com/doi/abs/10.1002/aenm.201702716",
    },
    {
        id: 29,
      title:
        "Enabling thin and flexible solid-state composite electrolytes by the scalable solution process",
      authors: [
        "Darren HS Tan",
        "Abhik Banerjee",
        "Zhi Deng",
        "Erik A. Wu",
        "Han Nguyen",
        "Jean-Marie Doux",
        "Xuefeng Wang",
      ],
      journal: "ACS Applied Energy Materials",
      year: 2019,
      publicationLink: "https://pubs.acs.org/doi/abs/10.1021/acsaem.9b01111",
    },
    {
        id: 30,
      title:
        "New insights into the interphase between the Na metal anode and sulfide solid-state electrolytes: a joint experimental and computational study",
      authors: [
        "Erik A. Wu",
        "Christopher S. Kompella",
        "Zhuoying Zhu",
        "Jungwoo Z. Lee",
        "Steven C. Lee",
        "Iek-Heng Chu",
        "Han Nguyen",
        "Shyue Ping Ong",
        "Abhik Banerjee",
        "Ying Shirley Meng",
      ],
      journal: "ACS Applied Materials & Interfaces",
      year: 2018,
      publicationLink: "https://pubs.acs.org/doi/abs/10.1021/acsami.7b19037",
    },
    {
        id: 31,
      title:
        "Solution-derived glass-ceramic NaI·Na3SbS4 superionic conductors for all-solid-state Na-ion batteries",
      authors: [
        "Kern Ho Park",
        "Dong Hyeon Kim",
        "Hiram Kwak",
        "Sung Hoo Jung",
        "Hyun-Jae Lee",
        "Abhik Banerjee",
        "Jun Hee Lee",
        "Yoon Seok Jung",
      ],
      journal: "Journal of Materials Chemistry A",
      year: 2018,
      publicationLink:
        "https://pubs.rsc.org/en/content/articlelanding/2018/ta/c8ta05537h/unauth",
    },
    {
        id: 32,
      title:
        "CuCo2O4 nanowall morphology as Li-ion battery anode: Enhancing electrochemical performance through stoichiometry control",
      authors: [
        "Monika Bhardwaj",
        "Anil Suryawanshi",
        "Rohan Fernandes",
        "Surendar Tonda",
        "Abhik Banerjee",
        "Dushyant Kothari",
        "Satishchandra Ogale",
      ],
      journal: "Materials Research Bulletin",
      year: 2017,
      publicationLink:
        "https://www.sciencedirect.com/science/article/abs/pii/S0025540816306523",
    },
    {
        id: 33,
      title:
        "Na3SbS4: a solution processable sodium superionic conductor for all‐solid‐state sodium‐ion batteries",
      authors: [
        "Abhik Banerjee",
        "Kern Ho Park",
        "Jongwook W. Heo",
        "Young Jin Nam",
        "Chang Ki Moon",
        "Seung M. Oh",
        "Seung‐Tae Hong",
        "Yoon Seok Jung",
      ],
      journal: "Angewandte Chemie",
      year: 2016,
      publicationLink:
        "https://onlinelibrary.wiley.com/doi/abs/10.1002/ange.201604158",
    },
    {
        id: 34,
      title:
        "A comparative evaluation of differently synthesized high surface area carbons for Li-ion hybrid electrochemical supercapacitor application: Pore size distribution holds the key",
      authors: [
        "Anil Suryawanshi",
        "Mandakini Biswal",
        "Dattakumar Mhamane",
        "Prasad Yadav",
        "Abhik Banerjee",
        "Poonam Yadav",
        "Shankar Patil",
        "Vanchiappan Aravindan",
        "Srinivasan Madhavi",
        "Satishchandra Ogale",
      ],
      journal: "Applied Materials Today",
      year: 2016,
      publicationLink:
        "https://www.sciencedirect.com/science/article/abs/pii/S2352940715300111",
    },
    {
        id: 35,
      title:
        "3D polyaniline architecture by concurrent inorganic and organic acid doping for superior and robust high rate supercapacitor performance",
      authors: [
        "Yogesh Gawli",
        "Abhik Banerjee",
        "Dipti Dhakras",
        "Meenal Deo",
        "Dinesh Bulani",
        "Prakash Wadgaonkar",
        "Manjusha Shelke",
        "Satishchandra Ogale",
      ],
      journal: "Scientific Reports",
      year: 2016,
      publicationLink: "https://www.nature.com/articles/srep21002",
    },
    {
        id: 36,
      title:
        "High surface area porous carbon for ultracapacitor application by pyrolysis of polystyrene containing pendant carboxylic acid groups prepared via click chemistry",
      authors: [
        "Shraddha Chhatre",
        "Vanchiappan Aravindan",
        "Dhanya Puthusseri",
        "Abhik Banerjee",
        "Srinivasan Madhavi",
        "Prakash P. Wadgaonkar",
        "Satishchandra Ogale",
      ],
      journal: "Materials Today Communications",
      year: 2015,
      publicationLink:
        "https://www.sciencedirect.com/science/article/abs/pii/S235249281530012X",
    },
    {
        id: 37,
      title:
        "Hollow Co0.85Se nanowire array on carbon fiber paper for high rate pseudocapacitor",
      authors: [
        "Abhik Banerjee",
        "Sumit Bhatnagar",
        "Kush Kumar Upadhyay",
        "Prasad Yadav",
        "Satishchandra Ogale",
      ],
      journal: "ACS Applied Materials & Interfaces",
      year: 2014,
      publicationLink: "https://pubs.acs.org/doi/abs/10.1021/am504333z",
    },
    {
        id: 38,
      title:
        "Surfactant free gram scale synthesis of mesoporous Ni (OH) 2–r-GO nanocomposite for high rate pseudocapacitor application",
      authors: [
        "Upendra Singh",
        "Abhik Banerjee",
        "Dattakumar Mhamane",
        "Anil Suryawanshi",
        "Kush Kumar Upadhyay",
        "Satishchandra Ogale",
      ],
      journal: "RSC Advances",
      year: 2014,
      publicationLink:
        "https://pubs.rsc.org/en/content/articlelanding/2014/ra/c4ra06601d/unauth",
    },
    {
        id: 39,
      title:
        "MOF-derived crumpled-sheet-assembled perforated carbon cuboids as highly effective cathode active materials for ultra-high energy density Li-ion hybrid electrochemical capacitors (Li-HECs)",
      authors: [
        "Abhik Banerjee",
        "Kush Kumar Upadhyay",
        "Dhanya Puthusseri",
        "Vanchiappan Aravindan",
        "Srinivasan Madhavi",
        "Satishchandra Ogale",
      ],
      journal: "Nanoscale",
      year: 2014,
      publicationLink:
        "https://pubs.rsc.org/en/content/articlelanding/2014/nr/c4nr00025k/unauth",
    },
    {
        id: 40,
      title:
        "Nickel cobalt sulfide nanoneedle array as an effective alternative to Pt as a counter electrode in dye sensitized solar cells",
      authors: [
        "Abhik Banerjee",
        "Kush Kumar Upadhyay",
        "Sumit Bhatnagar",
        "Mukta Tathavadekar",
        "Umesh Bansode",
        "Shruti Agarkar",
        "Satishchandra B. Ogale",
      ],
      journal: "RSC Advances",
      year: 2014,
      publicationLink:
        "https://pubs.rsc.org/en/content/articlelanding/2013/ra/c3ra45981k/unauth",
    },
    {
        id: 41,
      title:
        "Synthesis of CuO nanostructures from Cu-based metal organic framework (MOF-199) for application as anode for Li-ion batteries",
      authors: [
        "Abhik Banerjee",
        "Upendra Singh",
        "Vanchiappan Aravindan",
        "Madhavi Srinivasan",
        "Satishchandra Ogale",
      ],
      journal: "Nano Energy",
      year: 2013,
      publicationLink:
        "https://www.sciencedirect.com/science/article/abs/pii/S2211285513000797",
    },
    {
        id: 42,
      title:
        "Superior lithium storage properties of α-Fe2O3 nano-assembled spindles",
      authors: [
        "Abhik Banerjee",
        "Vanchiappan Aravindan",
        "Sumit Bhatnagar",
        "Dattakumar Mhamane",
        "Srinivasan Madhavi",
        "Satishchandra Ogale",
      ],
      journal: "Nano Energy",
      year: 2013,
      publicationLink:
        "https://www.sciencedirect.com/science/article/abs/pii/S2211285513000414",
    },
    {
        id: 43,
      title:
        "Non-aqueous energy storage devices using graphene nanosheets synthesized by green route",
      authors: [
        "Dattakumar Mhamane",
        "Anil Suryawanshi",
        "Abhik Banerjee",
        "Vanchiappan Aravindan",
        "Satishchandra Ogale",
        "Madhavi Srinivasan",
      ],
      journal: "AIP Advances",
      year: 2013,
      publicationLink: "https://aip.scitation.org/doi/full/10.1063/1.4802243",
    },
    {
        id: 44,
      title:
        "Citrate milling of oxides: from poly-dispersed micron scale to nearly mono-dispersed nanoscale",
      authors: [
        "Parvez A. Shaikh",
        "Abhik Banerjee",
        "Onkar Game",
        "Yesappa Kolekar",
        "Sangeeta Kale",
        "Satishchandra Ogale",
      ],
      journal: "Physical Chemistry Chemical Physics",
      year: 2013,
      publicationLink:
        "https://pubs.rsc.org/en/content/articlelanding/2013/cp/c3cp43425g/unauth",
    },
    {
        id: 45,
      title:
        "Fluorescent sophorolipid molecular assembly and its magnetic nanoparticle loading: a pulsed laser process",
      authors: [
        "Pradeep Kumar Singh",
        "Ruchira Mukherji",
        "Kasturi Joshi-Navare",
        "Abhik Banerjee",
        "Rohan Gokhale",
        "Satyawan Nagane",
        "Asmita Prabhune",
        "Satishchandra Ogale",
      ],
      journal: "Green Chemistry",
      year: 2013,
      publicationLink:
        "https://pubs.rsc.org/en/content/articlelanding/2013/gc/c3gc40108a/unauth",
    },
    {
        id: 46,
      title: "From dead leaves to high energy density supercapacitors",
      authors: [
        "Mandakini Biswal",
        "Abhik Banerjee",
        "Meenal Deo",
        "Satishchandra Ogale",
      ],
      journal: "Energy & Environmental Science",
      year: 2013,
      publicationLink:
        "https://pubs.rsc.org/en/content/articlelanding/2013/ee/c3ee22325f/unauth",
    },
    {
        id: 47,
      title:
        "A 3D Hexaporous Carbon Assembled from Single‐Layer Graphene as High Performance Supercapacitor",
      authors: [
        "Prasad Yadav",
        "Abhik Banerjee",
        "Sreekuttan Unni",
        "Jyoti Jog",
        "Sreekumar Kurungot",
        "Satishchandra Ogale",
      ],
      journal: "ChemSusChem",
      year: 2012,
      publicationLink:
        "https://chemistry-europe.onlinelibrary.wiley.com/doi/abs/10.1002/cssc.201200421",
    },
    {
        id: 48,
      title:
        "Laser synthesized super-hydrophobic conducting carbon with broccoli-type morphology as a counter-electrode for dye sensitized solar cells",
      authors: [
        "Rohan Gokhale",
        "Shruti Agarkar",
        "Joyashish Debgupta",
        "Deodatta Shinde",
        "Benoit Lefez",
        "Abhik Banerjee",
        "Jyoti Jog",
        "Mahendra More",
        "Beatrice Hannoyer",
        "Satishchandra Ogale",
      ],
      journal: "Nanoscale",
      year: 2012,
      publicationLink:
        "https://pubs.rsc.org/en/content/articlelanding/2012/nr/c2nr32082g/unauth",
    },
    {
        id: 49,
      title:
        "MOF derived porous carbon–Fe3O4 nanocomposite as a high performance, recyclable environmental superadsorbent",
      authors: [
        "Abhik Banerjee",
        "Rohan Gokhale",
        "Sumit Bhatnagar",
        "Jyoti Jog",
        "Monika Bhardwaj",
        "Benoit Lefez",
        "Beatrice Hannoyer",
        "Satishchandra Ogale",
      ],
      journal: "Journal of Materials Chemistry",
      year: 2012,
      publicationLink:
        "https://pubs.rsc.org/en/content/articlelanding/2012/jm/c2jm33798c/unauth",
    },
    {
        id: 50,
      title:
        "Selectivity tailoring in liquid phase oxidation over MWNT-Mn3O4 nanocomposite catalysts",
      authors: [
        "Mandakini Biswal",
        "Vivek V. Dhas",
        "Vivek R. Mate",
        "Abhik Banerjee",
        "Pradip Pachfule",
        "Kanika L. Agrawal",
        "Satishchandra B. Ogale",
        "Chandrashekhar V. Rode",
      ],
      journal: "The Journal of Physical Chemistry C",
      year: 2011,
      publicationLink: "https://pubs.acs.org/doi/abs/10.1021/jp203318n",
    },
  ].map(pub => ({
    ...pub,
    formattedTitle: formatChemicalFormula(pub.title),
    formattedJournal: formatChemicalFormula(pub.journal)
  }));
