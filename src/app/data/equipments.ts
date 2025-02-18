export interface Equipment {
  title?: string;
  description?: string;
  imageUrl: string;
}


export const equipments = [
  {
    category: "Synthesis",
    items: [
      {
        title: "Bath Sonicator",
        // description: "It applies sound energy or high-frequency sound waves to break particles and create dispersions",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739793487/Bath_Sonicator_p4nr7j.jpg"
      },
      {
        title: "Probe Sonicator",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739793491/Probe_Sonicator_jcqota.jpg",
      },
      {
        title: "Coprecipitation set up with Peristaltic Pump and pH Feedback Controller",
        description: "Used for synthesizing layered Na- and Li-based cathode materials under controlled pH, temperature, stirring speed, and argon gas flow",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739793523/pH_Temp_controlled_Co-precipation_setup_s5bped.jpg"
      },
      {
        title: "High-temperature Muffle Furnaces",
        description: "Furnaces can go up to 1200 C to synthesize materials under air",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739793532/Box_Furnace1200_C_w0bcct.jpg"
      },
      {
        title: "High-temperature Tube Furnaces",
        description: "Furnaces can go up to 1200 C to synthesize materials under passing desired gas",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739793513/Tube_Furnace1200_C_kbnmst.jpg"
      },
      {
        title: "Mili-Q Deionized Water System",
        description: "Produces Type 1 ion-free ultrapure water with low organic carbon content for sensitive laboratory applications",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739793517/Mili-Q_deionized_water_fiawk2.jpg"
      },
      {
        title: "Rotary Evaporator",
        description: "Primarily used to remove solvent from a sample through evaporation under reduced pressure",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739793511/Rota_Vapour_vgh8o7.jpg"
      },
      {
        title: "Fritsch Planetary Ball Mills",
        description: "Provides centrifugal acceleration up to 1100 rpm with a 45 mL ZrO₂-based jar. Sample transfer and milling can be performed under inert conditions for atmosphere-sensitive samples",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739793526/Planetary_Micro_Mill1000_rpm_b4id3q.jpg"
      },
      {
        title: "Fume Hood",
        description: "Compression gas line, water and gas flow are installed inside the hood for wet chemical synthesis",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739793538/Fume_Hood_i7ntuc.jpg"
      },
      {
        title: "Plasma Cleaner",
        description: "Suitable for surface activation, cleaning, and modification of a wide range of materials, including polymers, metals, glass, and ceramics, with a power range of up to 100W under different atmospheric conditions",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739793528/Plasma_Cleaner_n0nktt.jpg"
      },
      {
        title: "LNT Storage Unit",
        description: "Put content here",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739793546/LNT_Storage_Tank_arw9ob.jpg"
      },
      {
        title: "Centrifuge",
        description: "Put content here",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739793536/Centrifuge_ceidbu.jpg"
      }
    ]
  },
  {
    category: "Fabrication",
    items: [
      {
        title: "Neware Battery Cycler",
        description: "BCS-805 battery cycler with 24 channels, supporting current ranges from ±150 mA to ±15 A and voltage up to ±10V, with a current and voltage resolution of 800 pA and 150 µV, respectively. It also includes an EIS facility with a frequency range of 0 kHz to 10 MHz",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739795634/Neware_Battery_Cycler_retlpz.jpg"
      },
      {
        title: "Potentiostat (Biologic VSP 300)",
        description: "The VSP-300 multichannel potentiostat is a versatile electrochemical workstation with current ranges from 500 mA to 1 pA, a current resolution of 760 fA, and a voltage range of ±12 V with a resolution of 1 µV",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739794986/Potentiostat_Biologic_VSP_300_hej3oi.jpg"
      },
      {
        title: "Liquid Electrolyte Glove Box",
        description: "Used for conducting experiments or battery cell fabrication under controlled atmospheric conditions",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739796033/Liquid_Electrolyte_Glove_box_se86mu.jpg"
      },
      {
        title: "Vacuum Drying Oven",
        description: "Used for drying glassware and other related materials up to 120 C under ambient pressure",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739794407/Vaccum_Drying_Oven_bte4xw.jpg"
      },
      {
        title: "Solid State Glove Box",
        description: "Primarily used for drying battery electrodes and materials under heating (up to 250°C) and reduced pressure",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739796036/Solid_State_Glove_box_rox3mn.jpg"
      },
      {
        title: "Crimping Machine (Automatic pressure control & manual)",
        description: "The crimper is suitable for sealing/decrimping various types of coin cells such as CR2032 and CR2016",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739796841/Crimping_Machine_xy8cho.jpg"
      },
      {
        title: "Mini Tape Casting Coater",
        description: "A standard mini tape casting coater with a bottom vacuum chuck, heatable up to 100oC, and an included film applicator. It is designed for achieving fixed-thickness and ultra-thin polymer coatings or conductive ceramic films on various substrates",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739796534/Coater_zoeg7l.png"
      },
      {
        title: "Compact Pouch Cell Case Forming Machine",
        description: "Compact gas-driven Aluminum Laminated Films pouch case forming machine for pouch cell fabrication laboratory. The adjustable depth allows the formed case to fit electrodes stacked at different heights",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739794953/Compact_Pouch_cell_case_forming_machine_roy8kb.jpg"
      },
      {
        title: "Hot Rolling Press",
        description: "A hot rolling cylinder press with a maximum working temperature of 200°C, designed for electrode preparation both inside and outside the glovebox. Its high-torque DC motor is Ar gas compatible, making it suitable for applications such as increasing the active material density of electrodes after coating",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739794967/Hot_Rolling_Press._i2srzm.jpg"
      },
      {
        title: "Pressure Controlled Split Pouch Cell",
        description: "Put content here",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739794994/Pressure_controlled_split_pouch_cell._dgoigz.jpg"
      },
      {
        title: "Compact Precision Die Cutter",
        description: "Compact precision disc cutter with four sets of cutting die (15, 19, 20, and 24 mm)",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739794955/Compact_precision_die_cutter_adogve.jpg"
      },
      {
        title: "Pressure and Temperature controller for Pouch and Split cell cycling",
        description: "Pneumatic Press with a precision constant pressure controller within +/- 0.5 Kg up to 9KN and 150°C. It is designed for testing the effect of pressure on solid-state battery performance and also can be used as the SEI formation or electrode lamination under hot pressing",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739794989/Pressure_and_Temperature_controller_for_pouch_and_split_cell_cycling_f3sipw.jpg"
      },
      {
        title: "Hydraulic Press",
        description: "15T hydraulic press, which has a built-in hydraulic pump with an auto-return function for quick die removal & sample retrieval",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739794970/Hydraulic_Press_mpcrk2.jpg"
      },
      {
        title: "Moisture Analyzer",
        description: "Halogen heating (up to 230 C) based superior weighing performance with high 0.001% moisture content readability with max capacity of 200 g",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739794978/Moisturte_Analyzer_db501p.jpg"
      },
      {
        title: "Climate Chamber",
        description: "After point four-digit sensitivity in gram scale (maybe incomplete content)",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739796155/Climate_Chamber_tq0efh.jpg"
      },
      {
        title: "Viscosity Meter",
        description: "The ROTAVISC series determines the viscosity of liquids with a viscosity measuring range of 1 - 6,000,000 mPas",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739795011/Viscosity_Meter_clkunh.jpg"
      },
      {
        title: "Planetary Centrifugal Ball Mill & Mixer",
        description: "Single container based centrifugal milling/mixer machine designed for mixing and ball milling slurries, pastes, and dry powder materials, especially for some high-viscosity materials. Container includes 20 ml, 50mlm and 300ml",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739794982/Planetary_Centrifugal_Ball_Mill_Mixer_xv8kkb.jpg"
      },
      {
        title: "Jet Mill",
        description: "Put content here",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739794975/Jet_mill_micronizer_ror3c8.jpg"
      },
      {
        title: "Isostatic Press",
        description: "Put content here",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739794950/Cold_Isostatic_Press_frn0p5.jpg"
      },
      {
        title: "DC Power Supplier",
        description: "Put content here",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739795519/DC_power_supplier_il7x9p.jpg"
      },
      {
        title: "Table Top Sputtering Unit",
        description: "Put content here",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739795004/table_top_Sputter_Coater_ddf1vz.jpg"
      },
      {
        title: "CO2 Laser",
        description: "Put content here",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739795515/CO2_Laser_rvplev.jpg"
      },
      {
        title: "Temperature Controlled Three Electrode Battery Cycler",
        description: "Put content here",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739795510/Temperature-controlled_three-electrode_battery_cycler_u17nkr.jpg"
      },
      // {
      //   title: "Viscosity Meter",
      //   description: "Put content here",
      //   imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739795011/Viscosity_Meter_clkunh.jpg"
      // },
      {
        title: "Thickness Change Monitoring During Battery Cycling",
        description: "Put content here",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739795008/Thickness_Change_monitoring_during_Battery_during_cycling_kzsraz.jpg"
      },
      {
        title: "Explosion Proof Chamber for Battery Cycling",
        description: "Put content here",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739795506/Explosion_Proof_Chamber_vcedqz.jpg"
      },
      {
        title: "Constant Temperature Oven for Solid State Battery Cycling",
        description: "Put content here",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739795503/Constant_temperature_oven_for_solid_state-battery_cycling_ljcuxn.jpg"
      },
      {
        title: "Spray Coater",
        description: "Put content here",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739795000/Spray_Coating_Pyrolysis_zndd8g.jpg"
      },
      {
        title: "Constant Temperature Oven for Battery Cycling",
        description: "Put content here",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739795524/Constant_temperature_oven_for_battery_cycling_n0apvn.jpg"
      },
      {
        title: "Solid State Cells",
        description: "Put content here",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739802391/In-situ_Pressure_Monitoring_for_Solid_State-LE_Battery_Cycling_tallcn.jpg"
      },
      {
        title: "Electrospinning Setup",
        description: "Put content here",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739794963/Electrospinning_Setup_qvwjzn.jpg"
      },
      {
        title: "Biologic BCS-805 Battery Cycler",
        description: "Put content here",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739794948/Battery_Cycler_Biologic_BCS-805_y5yzql.jpg"
      },
      {
        title: "Rotating Ring Disk Electrode",
        description: "Put content here",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739800353/Rotating_Ring_Disc_Electrode_Setup_ks4qev.jpg"
      },
      
    ]
  },
  {
    category: "Pouch Cell Facilities",
    items: [
      {
        title: "Pouch Cell Fabrication Line",
        description: "Our lab is equipped with a full pouch cell line installed inside the glove box, which allows fabrication of varieties of pouch cells, for example •	Li/Na metal battery (Anode Free battery) • Solid State Battery •	Li/Na ion battery. Heating  antechamber allows electrode drying for air-sensitive materials as well",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739884285/PC_irkbvv.png",
      },
    ]
  },
  {
    category: "Characterizations",
    items: [
      {
        title: "X-ray Photoelectron Spectroscopy (including UPS and argon-based sputtering)",
        description: "put content here",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739800359/XRay_Photoelectron_Spectroscopy_s52ume.jpg"
      },
      {
        title: "Bruker X-ray Diffractometer",
        description: "D8 advance X-ray analyzer for all power diffraction analysis, for example, phase identification, quantification phase analysis, micro/crystal structural analysis, residual stress analysis, microdiffraction, etc., max power is 3kW. Theta/theta, theta/2 theta geometry, Cu and Mo anode, Transmission and reflection geometry, Global mirror for capillary sample analysis. Capillary stage, electrochemical cell for operando battery analysis, high-temperature cell (1200 C) for temperature-dependent diffraction study",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739800055/X-ray_Diffractrometer_mrlwrx.jpg"
      },
      {
        title: "Compound and Stereo Microscope",
        description: "This materials microscope combines high-quality Leica optics with state-of-the-art universal white light LED illumination. 12 mm depth of field to find details fast. High magnification up to 55x and 9:1 zoom for quick changes from overview to more information, 122 mm working distance for easy sample manipulations under the microscope Integrated, network camera for easy image sharing",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739800600/Compound_and_Stereo_Microscope_h7jbd3.png"
      },
      {
        title: "Contact Angle Measurement Unit",
        description: "Contact angle instrument (0.5° accuracy) with Dynamic capture capability, Motorized syringe, Surface energy analysis, Pendant drop analysis, and high-temperature analysis",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739800094/Contacyt_Angle_Measurement_Unit_e0uk5q.jpg"
      },
      // {
      //   title: "Scanning Probe Microscopy",
      //   description: "Four probe conductometer with Keithley 2166 source meter and heating stage up to 120 C",
      //   imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739800710/Probe_Station_1_obkgrx.jpg"
      // },
      {
        title: "GC & GCMS",
        description: "Put content here",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739800368/GC-GCMS_cqjvrj.jpg"
      },
      {
        title: "Co-localized AFM and Raman Spectrometer",
        description: "Put content here",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739801005/Co-localised_Raman_AFM_Station_sfnewx.jpg"
      },
      {
        title: "Atomic Absorption Spectroscopy",
        description: "Put content here",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739800083/Atomic_Absorption_Spectrometer_je3eva.jpg"
      },
      {
        title: "Themrmogravimetric Analyzer",
        description: "Put content here",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739800077/Thermogrimmetric_Analyzer_j2j4lu.jpg"
      },
      {
        title: "ATR-FTIR Spectrometer",
        description: "Put content here",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739800088/ATR_FTIR_Spectrometer_sbnsux.jpg"
      },
      {
        title: "Differential Scanning Calorimeter",
        description: "Put content here",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739800066/Differential_Scanning_calorimeter_i5pvd3.jpg"
      },
      {
        title: "Optical Profilometer",
        description: "Put content here",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739800071/Optical_Profilometer_jfi19h.jpg"
      },
      {
        title: "BET Surface Area Analyzer",
        description: "Put content here",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739801475/BET_Surface_Area_Analyzer_p3ya8w.jpg"
      },
      {
        title: "Cryo Dual ion Microscope equipped with EDX and TOF-SIMS",
        description: "Put content here",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739800412/TEM_lbf9fp.jpg"
      },
      {
        title: "UV-Vis Spectrometer",
        description: "Put content here",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739800052/UV-Vis_Spectrometer_blmue4.jpg"
      },
      {
        title: "Scanning Probe Microscope",
        description: "Put content here",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739800710/Probe_Station_1_obkgrx.jpg"
      },
    ]
  },
  {
    category: "Inert Sample Transfer Systems",
    items: [
      {
        title: "Inert Sample transfer systems and heating/cooling System",
        description: "Our lab is equipped with various transfer holders and docking systems that allow sample transfer glove globe boxes to instruments without any atmosphere contamination. We also have various cold and hot stages to perform experiments at different temperatures.  All the details are shown in the following schematic",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739884421/Inert_Sample_Transfer_Systems_cbyil7.png"
      },
    ]
  },
  {
    category: "In-Operando Analysis of Electrochemical Cells",
    items: [
      {
        title: "In-situ Dilatometry (thickness change monitoring)",
        description: "Dynamic Thickness measurement of battery electrode with a resolution of less than 5 nm under charge-discharge. Can detect thickness changes of the individual electrode or the full cell stack during the electrochemical cycle.Operation with or without reference electrode",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739802432/In_situ_Dilatometry_aevkka.png"
      },
      {
        title: "In-situ Dynamic Electrochemical Mass Spectrometer",
        description: "The DEMS features a current collector with a spiral-shaped flow field that is to be constantly purged with a gentle stream of inert gas. The composition of the outgoing gas can be analysed by e.g. mass spectrometry.Operation with or without reference electrodeAdjustable, reproducible, and homogeneous mechanical pressure on electrodes",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739802425/In-situ_Dynamic_kbpwkx.png"
      },
      {
        title: "In-situ Raman for Metal Air Battery",
        description: "In-situ Raman spectroscopy analysis of materials on gas diffusion electrode of metal-air battery under charge/discharge condition.Minimized dimensions suitable for light and Raman microscopes working in the reflective mode. The disc-shaped GDE can have a diameter of up to 11 mm. The inspection area diameter is 10 mm",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739802418/In-situ_Raman_phbkyu.jpg"
      },
      {
        title: "In-situ IR, Raman Analysis",
        description: "A standard three-electrode cell with the optical widow for Various in situ measurement depending on window kits as follows.•	CaF2 window for in-situ IR analysis and •	Sapphire window kit for in situ Raman and Optical analysis",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739802411/In-situ_IR-Raman_ezmsca.png"
      },
      {
        title: "In-situ Light Microscopy Analysis",
        description: "It is designed for operando characterization of electrodes using light microscopy, Raman spectroscopy, or XRD in reflection mode. A low cell height of 21.5 mm for trouble-free use under many light microscopes, Fits well on standard microscope sample stages",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739802404/In-situ_Light_Microscopy_fdltf1.png"
      },
      {
        title: "In-situ XPS for solid Sample & Solid-State Battery (top & Cross-section)",
        description: "Contact Hot/Cold Stage Option with a temperature range of ambient to 500 oC with a single 25 mm. Contacts with sample holder for in situ electrochemical experiments (top surface). Pressure (Max 1Mpa) and Temperature (max 70 C) to apply on a Li battery cell of 8.5mm in diameter (cross-section)",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739802397/In-situ_XPS_lokamj.png"
      },
      {
        title: "In-situ pressure monitoring for solid state/LE battery cycling",
        description: "Dynamic pressure change in solid state. Battery cycling with resolution of 100g.  6 and 12 mm diameter cells are available for measurement",
        imageUrl: "https://res.cloudinary.com/dmw1bwmpr/image/upload/v1739802391/In-situ_Pressure_Monitoring_for_Solid_State-LE_Battery_Cycling_tallcn.jpg"
      }
    ]
  }
];