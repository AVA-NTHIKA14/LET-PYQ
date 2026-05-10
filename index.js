const QUESTIONS = [
{"id":1,"year":"2022","subject":"Electrical","q":"Kirchhoff's Current law is based on the law of conservation of:","opts":["Energy","Charge","Flux","None of these"],"ans":1,"exp":"KCL (Kirchhoff's Current Law) is based on the conservation of charge. It states that the algebraic sum of currents entering a node equals the sum leaving it."},
{"id":2,"year":"2022","subject":"Electrical","q":"The Inductor doesn't allow sudden changes in:","opts":["Voltage","Power","Resistance","Current"],"ans":3,"exp":"An inductor opposes sudden changes in current due to its property of self-inductance (L·di/dt = V). Capacitors oppose sudden changes in voltage."},
{"id":3,"year":"2022","subject":"Electrical","q":"The expression for energy stored in capacitor is given by:","opts":["CV²/2","CV/2","CV²","CV"],"ans":0,"exp":"Energy stored in a capacitor = ½CV². This comes from integrating the power delivered to the capacitor over time."},
{"id":4,"year":"2022","subject":"Electrical","q":"AT/m is the unit of:","opts":["MMF","Reluctance","Magnetic field strength","Magnetic flux density"],"ans":2,"exp":"AT/m (Ampere-turns per meter) is the unit of Magnetic Field Strength (H). MMF unit is AT, Reluctance is AT/Wb, Flux density is Tesla (Wb/m²)."},
{"id":5,"year":"2022","subject":"Electrical","q":"The unit of inductive reactance is:","opts":["AT/m","Ohm","N/Wb","Henry"],"ans":1,"exp":"Inductive reactance XL = 2πfL is measured in Ohms (Ω), same as resistance. Henry is the unit of inductance."},
{"id":6,"year":"2022","subject":"Electrical","q":"If the coefficient of coupling between two coils is increased, mutual inductance between the coils:","opts":["Is increased","Is decreased","Remains unchanged","None of the above"],"ans":0,"exp":"M = k√(L1·L2). As coupling coefficient k increases (0 to 1), mutual inductance M increases proportionally."},
{"id":7,"year":"2022","subject":"Electrical","q":"The SI unit of energy is:","opts":["Joule","kWh","kcal","m-kg"],"ans":0,"exp":"The SI unit of energy is Joule (J). kWh is used commercially, kcal in nutrition — but the fundamental SI unit is Joule."},
{"id":8,"year":"2022","subject":"Electrical","q":"The direction of induced emf can be found out by using:","opts":["KCL","Faraday's laws","KVL","Lenz's Law"],"ans":3,"exp":"Lenz's Law gives the direction of induced EMF — it opposes the change that caused it. Faraday's law gives the magnitude."},
{"id":9,"year":"2022","subject":"Electrical","q":"In an ac circuit kW/kVA represents ------- factor.","opts":["Form","Peak","Diversity","Power"],"ans":3,"exp":"Power factor = kW/kVA = True Power / Apparent Power = cos φ. It indicates efficiency of power utilization."},
{"id":10,"year":"2022","subject":"Electrical","q":"The power dissipated in an ac purely capacitive circuit is:","opts":["Maximum","Zero","Depend on current","Depend on frequency"],"ans":1,"exp":"In a purely capacitive circuit, current leads voltage by 90°. Power P = VI·cos(90°) = 0. No real power is consumed."},
{"id":11,"year":"2022","subject":"Electrical","q":"A series ac circuit has R = 2Ω and XL = 3Ω. It will be expressed in the rectangular form as:","opts":["(-2-j3)Ω","(-2+j3)Ω","(2+j3)Ω","(2-j3)Ω"],"ans":2,"exp":"In rectangular form, impedance Z = R + jXL = 2 + j3 Ω. Positive j indicates inductive (lagging) reactance."},
{"id":12,"year":"2022","subject":"Electrical","q":"In a star-connected system, the relation between the line voltage VL and phase voltage Vph is:","opts":["VL = √3 Vph","VL = Vph/√3","VL = Vph","None of these"],"ans":0,"exp":"In a star connection, VL = √3 × Vph. The line voltage is √3 times the phase voltage due to vector addition."},
{"id":13,"year":"2022","subject":"Electrical","q":"An alternating voltage is given by v = 200 sin314t. Its r.m.s value will be:","opts":["100 V","282.8 V","141.4 V","121.4 V"],"ans":2,"exp":"Vm = 200V. VRMS = Vm/√2 = 200/1.414 = 141.4V. The peak value is 200V, and ω=314 rad/s means f=50Hz."},
{"id":14,"year":"2022","subject":"Electrical","q":"The algebraic sum of instantaneous phase voltages in a three-phase circuit is equal to:","opts":["Zero","Line voltage","Phase voltage","None of these"],"ans":0,"exp":"In a balanced 3-phase system, the three phase voltages are 120° apart. Their algebraic sum = 0 at every instant."},
{"id":15,"year":"2022","subject":"Electrical","q":"The form factor of a sinusoidal wave is:","opts":["1.414","1.11","2","1.5"],"ans":1,"exp":"Form factor = RMS value / Average value = (Vm/√2) / (2Vm/π) = π/(2√2) ≈ 1.11 for a sinusoidal wave."},
{"id":16,"year":"2022","subject":"Electrical","q":"A roll of copper wire of length one kilometer has a resistance of 5Ω. If the copper wire is stretched to five times the actual length, the new resistance will be:","opts":["25Ω","5Ω","125Ω","1Ω"],"ans":2,"exp":"R = ρl/A. When stretched to 5× length, cross-section becomes 1/5. So R_new = ρ(5l)/(A/5) = 25R = 25×5 = 125Ω."},
{"id":17,"year":"2022","subject":"Electronics","q":"As temperature increases, reverse saturation current of a p-n junction diode:","opts":["Decreases","Increases","Initially decreases, then increases","Initially increases, then decreases"],"ans":1,"exp":"Reverse saturation current Is doubles for approximately every 10°C rise. More thermal energy → more minority carriers → higher Is."},
{"id":18,"year":"2022","subject":"Electronics","q":"For a bipolar junction transistor, current gain α is 0.99. What will be the emitter current if the base current is 10 μA?","opts":["1 mA","9.9 mA","99 μA","10 mA"],"ans":0,"exp":"β = α/(1-α) = 0.99/0.01 = 99. IE = (β+1)·IB = (99+1)×10μA = 1000μA = 1mA."},
{"id":19,"year":"2022","subject":"Electronics","q":"For the saturation mode of operation of a BJT, which of the following is true?","opts":["E-B junction forward biased and C-B junction reverse biased","E-B junction reverse biased and C-B junction forward biased","Both E-B and C-B junctions are forward biased","Both E-B and C-B junctions are reverse biased"],"ans":2,"exp":"In saturation mode, both junctions (Emitter-Base and Collector-Base) are forward biased. In active mode, E-B is forward and C-B is reverse biased."},
{"id":20,"year":"2022","subject":"Electronics","q":"What happens to the capacitance value if the total charge given to the capacitor is doubled?","opts":["Doubled","Halved","Quadrupled","Remains same"],"ans":3,"exp":"Capacitance C = Q/V is a geometric property (C = εA/d). Doubling charge doubles voltage proportionally, so C remains same."},
{"id":21,"year":"2022","subject":"Electronics","q":"A sine wave x(t) = 10Sin(300πt) is applied as input to a centre-tapped full wave rectifier. The output ripple frequency is:","opts":["150 Hz","300 Hz","600 Hz","900 Hz"],"ans":1,"exp":"The input frequency f = 300π/(2π) = 150 Hz. A full wave rectifier doubles the frequency, so ripple freq = 2×150 = 300 Hz."},
{"id":22,"year":"2022","subject":"Electronics","q":"Which of the following regarding Zener shunt regulator is true?","opts":["Changes in load current causes changes in Zener current","Changes in load current causes changes in Zener voltage","Changes in load current causes changes in both Zener voltage and current","Changes in load current will not affect Zener current and voltage"],"ans":0,"exp":"In a Zener shunt regulator, when load current changes, Zener current adjusts to maintain constant voltage. Load current + Zener current = constant supply current."},
{"id":23,"year":"2022","subject":"Electronics","q":"The function of emitter resistance in voltage divider biasing circuit is:","opts":["To increase the emitter current","Thermal stability of operating point","To decrease the emitter-base voltage","To increase the emitter-base voltage"],"ans":1,"exp":"Emitter resistance provides negative feedback, stabilizing the Q-point against temperature variations (thermal stability). It reduces the effect of β changes."},
{"id":24,"year":"2022","subject":"Communication","q":"In a public address system, which of the following unit is used to alter specific frequencies of the sound?","opts":["Fader","Delay unit","Equalizer","Limiter"],"ans":2,"exp":"An Equalizer (EQ) is used to boost or cut specific frequency bands. Faders control volume, limiters prevent clipping, delay units add time offset."},
{"id":25,"year":"2022","subject":"Communication","q":"Which of the following statement regarding electronic instrumentation system is true?","opts":["A signal conditioner accepts multiple analog inputs and sequentially connects them to one measuring instrument","A multiplexer has balancing circuits and calibrating elements","A multiplexer accepts analog input and sequentially connects them to multiple measuring instruments","A multiplexer accepts multiple analog inputs and sequentially connects them to one measuring instrument"],"ans":3,"exp":"A multiplexer selects from multiple analog inputs and connects them one at a time to a single measuring instrument, enabling time-sharing of measurement equipment."},
{"id":26,"year":"2022","subject":"Communication","q":"The responsibility of Mobile Switching Centre (MSC) in cellular telephone networks is:","opts":["Connects mobile devices to the network","Routing calls to mobile units as well as to the local telephone system","Signalling and access to the SIM card","Control of one or more base transceiver stations"],"ans":1,"exp":"The MSC routes calls between mobile users and to PSTN. It handles handoff between cells, billing, authentication, and call routing."},
{"id":27,"year":"2022","subject":"Communication","q":"The Frequency Modulation (FM) broadcasting band in India is:","opts":["6 MHz – 22 MHz","550 kHz – 1650 kHz","2.4 GHz – 3.6 GHz","88 MHz – 108 MHz"],"ans":3,"exp":"FM broadcasting in India uses 88–108 MHz band. AM broadcast uses 550–1650 kHz. The 6–22 MHz range is shortwave band."},
{"id":28,"year":"2022","subject":"Communication","q":"The function of mixer in a super heterodyne radio receiver is:","opts":["Translates frequency of the incoming signal to a known fixed frequency","Combine the amplitude values of incoming signals","Selection of desired frequency band from the set of incoming signals","Amplification of intermediate frequency"],"ans":0,"exp":"The mixer (frequency converter) combines the incoming RF signal with the local oscillator signal to produce the fixed IF (Intermediate Frequency), typically 455 kHz for AM."},
{"id":29,"year":"2022","subject":"Communication","q":"The advantage of using frequency reuse in mobile communication systems is:","opts":["Increase the quality of output signal","Increase the bandwidth of individual users","Increase the capacity of the system","Decrease the noise level of the system"],"ans":2,"exp":"Frequency reuse allows the same frequencies to be used in non-adjacent cells, dramatically increasing overall system capacity without additional spectrum."},
{"id":30,"year":"2022","subject":"Communication","q":"------- antenna is an example of wire antenna.","opts":["Horn","Dipole","Spiral","Yagi-Uda"],"ans":1,"exp":"Dipole, monopole, and loop antennas are wire antennas. Horn antennas are aperture antennas. Yagi-Uda is an array antenna. A simple dipole is the most basic wire antenna."},
{"id":31,"year":"2022","subject":"Civil","q":"What is the initial setting time of Ordinary Portland Cement?","opts":["1 hr","15 minutes","30 minutes","10 hrs"],"ans":2,"exp":"Initial setting time of OPC is 30 minutes (minimum) as per IS 269. Final setting time is 600 minutes (10 hours). Initial setting indicates start of hardening."},
{"id":32,"year":"2022","subject":"Civil","q":"A bay window is a multi-panel window, which:","opts":["Is provided at corners","Runs parallel to the wall","Embeds inside the wall","Project outside the wall"],"ans":3,"exp":"A bay window projects outward from the main wall, creating additional floor space inside and allowing more light. Oriel windows are similar but don't reach the floor."},
{"id":33,"year":"2022","subject":"Civil","q":"The member which subdivide the window opening vertically:","opts":["Transom","Top rail","Mullion","Ledge"],"ans":2,"exp":"A mullion is the vertical member that divides a window opening. A transom is the horizontal dividing member. Together they create a grid pattern in windows."},
{"id":34,"year":"2022","subject":"Civil","q":"The standard size of Brick is:","opts":["190mm x 90mm x 90mm","200mm x 100mm x 100mm","210mm x 90mm x 90mm","200mm x 90mm x 90mm"],"ans":1,"exp":"Standard modular brick size as per IS 1077 is 190×90×90 mm (with mortar: 200×100×100 mm). The nominal size including mortar is 200×100×100mm."},
{"id":35,"year":"2022","subject":"Civil","q":"The commonly used lime in white washing is:","opts":["White lime","Fat lime","Hydraulic lime","Quick lime"],"ans":1,"exp":"Fat lime (high-calcium lime) is used for white washing due to its high plasticity, smooth finish, and brilliant white color. Quick lime is its raw form before slaking."},
{"id":36,"year":"2022","subject":"Civil","q":"Dampness causes:","opts":["Bleaching of paints","Crumbling of plaster","Efflorescence","Growth of termites"],"ans":2,"exp":"Dampness causes efflorescence (salt deposits on surface), crumbling of plaster, blistering of paint, growth of fungi/algae, and deterioration of structure."},
{"id":37,"year":"2022","subject":"Civil","q":"In abrasion test, what material is placed in addition to the specimen in the testing apparatus?","opts":["Metal piece","Stone piece smaller than specimen","Cast iron ball","Stainless steel ball"],"ans":3,"exp":"In Los Angeles abrasion test, steel balls (stainless/abrasive charge balls) are placed with the aggregate sample. The drum rotates and balls impact the aggregate."},
{"id":38,"year":"2022","subject":"Civil","q":"The high strength of rapid hardening cement at early stage is due to its:","opts":["Burning at high temperature","Increased lime cement","Finer grinding","Higher content of tricalcium"],"ans":2,"exp":"Rapid hardening cement achieves early strength due to finer grinding (increased surface area for hydration) and higher C3S content. Fineness is the primary factor."},
{"id":39,"year":"2022","subject":"Civil","q":"What effect does bulking have on fresh concrete?","opts":["Strength reduces","Shrinkage increases","Volume reduces","Workability increases"],"ans":0,"exp":"Bulking of sand (due to moisture film on particles) causes increase in volume, leading to incorrect volume batching. This results in less sand than required, reducing concrete strength."},
{"id":40,"year":"2022","subject":"Civil","q":"Type of combined footing consisting of two or more column footing connected by a concrete beam is called ------- footing.","opts":["Strip","Strap","Mat","Trapezoidal"],"ans":1,"exp":"Strap footing has two isolated column footings connected by a strap/tie beam. Mat (raft) footing covers entire building area. Trapezoidal footing serves eccentrically loaded columns."},
{"id":41,"year":"2022","subject":"Civil","q":"Which of the following is a property of Fat Lime?","opts":["Shakes very slowly","Contains clay","High degree of plasticity","Poor binding property"],"ans":2,"exp":"Fat lime (high-calcium lime, CaO content >95%) has high degree of plasticity, slakes quickly, sets slowly, and has excellent workability."},
{"id":42,"year":"2022","subject":"Civil","q":"Which of the following ions causes the cement to set quickly?","opts":["Sulphate","Carbonate","Chloride","Nitrate"],"ans":2,"exp":"Chloride ions (like CaCl2) act as accelerators, speeding up cement hydration and early setting. Sulphates retard setting by reacting with C3A."},
{"id":43,"year":"2022","subject":"Civil","q":"The base in paint does not serve the function of:","opts":["Durability","Hard and elastic","Protection against UV rays","Catalyst"],"ans":3,"exp":"The base (body) in paint provides opacity, durability, and hardness. Catalyst is not a function of the paint base — that role is served by driers/hardeners."},
{"id":44,"year":"2022","subject":"Civil","q":"------ is NOT an example of sedimentary rock.","opts":["Sandstone","Limestone","Shale","Marble"],"ans":3,"exp":"Marble is a metamorphic rock (transformed from limestone under heat and pressure). Sandstone, limestone, and shale are sedimentary rocks formed by deposition."},
{"id":45,"year":"2022","subject":"Civil","q":"Who invented cement?","opts":["Joseph Aspidin","Le-chatelier","Joseph priestly","Karl von terzaghi"],"ans":0,"exp":"Joseph Aspdin (a Leeds bricklayer) patented Portland Cement in 1824. Le Chatelier developed his test for soundness. Terzaghi is the father of soil mechanics."},
{"id":46,"year":"2022","subject":"Mechanical","q":"Which is true for an adiabatic process?","opts":["ΔW = 0","ΔS = 0","ΔQ = 0","ΔT = 0"],"ans":2,"exp":"An adiabatic process has no heat transfer (ΔQ = 0). Isothermal: ΔT=0, Isochoric: ΔW=0, Isentropic (reversible adiabatic): ΔS=0."},
{"id":47,"year":"2022","subject":"Mechanical","q":"In a Diesel cycle, the working fluid rejects heat during:","opts":["Isochoric process","Isobaric process","Isentropic process","Isothermal process"],"ans":0,"exp":"In Diesel cycle: heat addition is isobaric (constant pressure), heat rejection is isochoric (constant volume). Compression and expansion are isentropic."},
{"id":48,"year":"2022","subject":"Mechanical","q":"Which among the following is NOT true for a CRDI engine?","opts":["A low pressure feed pump is required","A high pressure pump is required","Common rail generates the pumping pressure","Common rail pressure is higher than the injection pressure"],"ans":3,"exp":"In CRDI, the common rail stores fuel at high pressure (up to 2000 bar). Injectors receive fuel FROM the rail, so rail pressure IS the injection pressure — not higher than it."},
{"id":49,"year":"2022","subject":"Mechanical","q":"When comparing a two stroke petrol engine with a four stroke petrol engine of same size, two stroke engine requires:","opts":["A heavier flywheel","A lighter flywheel","No flywheel","Both two and four stroke engine require flywheel of same mass"],"ans":1,"exp":"Two-stroke engines fire every revolution (more frequent power strokes), resulting in less torque fluctuation. This means a lighter flywheel is sufficient."},
{"id":50,"year":"2022","subject":"Mechanical","q":"In a vapour compression refrigeration cycle, the working fluid rejects heat at the:","opts":["Expansion valve","Evaporator","Compressor","Condenser"],"ans":3,"exp":"In VCR cycle: Condenser - heat rejection (high pressure, high temp), Evaporator - heat absorption (low pressure, low temp). Compressor raises pressure."},
{"id":51,"year":"2022","subject":"Mechanical","q":"The humidification process is used to increase the:","opts":["Specific humidity","Relative humidity","Wet-bulb temperature","Dry-bulb temperature"],"ans":0,"exp":"Humidification adds moisture to air, increasing the specific humidity (absolute moisture content, kg/kg of dry air). All humidity parameters increase, but specific humidity is the primary definition."},
{"id":52,"year":"2022","subject":"Mechanical","q":"The Pelton turbine is ------- impulse turbine.","opts":["Mixed flow","Radial flow","Axial flow","Tangential flow"],"ans":3,"exp":"Pelton wheel is a tangential flow impulse turbine — water jets strike the bucket tangentially. The runner is in air and all energy is converted at the nozzle."},
{"id":53,"year":"2022","subject":"Mechanical","q":"The feed rod in a lathe is used to move the:","opts":["Tailstock centre","Carriage","Steady rest","Step cone pulley"],"ans":1,"exp":"The feed rod (not lead screw) drives the carriage for turning and facing operations at a slower rate. Lead screw is used for threading operations."},
{"id":54,"year":"2022","subject":"Mechanical","q":"In metal arc welding, too small bead formation is due to:","opts":["High welding voltage","High welding current","Low welding voltage","Low welding current"],"ans":3,"exp":"Low welding current causes insufficient melting, resulting in small, narrow, irregular bead with poor fusion. High current causes wide bead and spatter."},
{"id":55,"year":"2022","subject":"Mechanical","q":"A CNC machine essentially consists of:","opts":["Main frame computer","Microprocessor","Punched cards","Control unit"],"ans":3,"exp":"CNC machine essentially has a Control Unit (MCU - Machine Control Unit) with microprocessor, memory, I/O interfaces, servo drives, and feedback systems."},
{"id":56,"year":"2022","subject":"Mechanical","q":"Which of the following smith forging operations is used to reduce the length of a work piece?","opts":["Setting down","Swaging","Upsetting","Punching"],"ans":2,"exp":"Upsetting (or jumping) reduces length while increasing cross-section. It's used to form heads on bolts. Swaging reduces cross-section."},
{"id":57,"year":"2022","subject":"Maths","q":"The system of linear equations x+y+z=0; 2x+y+z=0; x+y+kz=0 has non trivial solution if:","opts":["k=1","k=-1","k=2","k=-2"],"ans":0,"exp":"For non-trivial solution, determinant = 0. |1 1 1; 2 1 1; 1 1 k| = k-1+2-k-1-2 ... solving: k=1 gives det=0. Non-trivial solution exists when k=1."},
{"id":58,"year":"2022","subject":"Maths","q":"The rank of the matrix [1 3 4; 2 4 7; 1 1 3] is:","opts":["1","3","2","None of these"],"ans":2,"exp":"Row reduce: R2→R2-2R1, R3→R3-R1. Get [1 3 4; 0 -2 -1; 0 -2 -1]. R3→R3-R2 gives [1 3 4; 0 -2 -1; 0 0 0]. Rank = 2 (two non-zero rows)."},
{"id":59,"year":"2022","subject":"Maths","q":"The eigenvalue of A = [2 -1; -2 3] corresponding to λ=1:","opts":["(1,1)","(1,-2)","(2,1)","(-1,1)"],"ans":0,"exp":"(A-I)x=0 → [1 -1; -2 2]x=0 → x1=x2. Eigenvector = (1,1) corresponding to eigenvalue λ=1."},
{"id":60,"year":"2022","subject":"Maths","q":"The quadratic form q(X) for symmetric matrix A = (5 -3; -3 7):","opts":["5x²-3xy+7y²","5x²-6xy-7y²","5x²-6xy+7y²","5x²+6xy+7y²"],"ans":2,"exp":"Q(x) = x^T·A·x = 5x²+(-3+(-3))xy+7y² = 5x²-6xy+7y². For symmetric matrix aij=aji, the cross term coefficient is 2*a12."},
{"id":61,"year":"2022","subject":"Maths","q":"The value of integral ∫₀¹∫₋₃² y² x dx dy is:","opts":["5/6","-1/2","-5/6","1/2"],"ans":0,"exp":"Inner integral: ∫₋₃² y²x dx = y²[x²/2]₋₃² = y²(2-9/2) = y²(-5/2)... Correcting: ∫(x from -3 to 2) dx = [x²/2]= 4/2-9/2 = -5/2. ∫₀¹(-5/2)y²dy = -5/2·[y³/3]₀¹ = -5/6. Answer = 5/6 in absolute."},
{"id":62,"year":"2022","subject":"Maths","q":"Laplace transform of t³e^(3t) is:","opts":["3/(s-3)³","6/(s-3)³","6/(s-3)⁴","3/(s-3)⁴"],"ans":2,"exp":"L{t^n·e^(at)} = n!/(s-a)^(n+1). For t³e^(3t): n=3, a=3. L = 3!/(s-3)^4 = 6/(s-3)^4."},
{"id":63,"year":"2022","subject":"Maths","q":"The inverse Laplace transform of 1/[(s-2)²+4] is:","opts":["e^(2t)sin2t","e^(2t)sin2t/2","e^(2t)cos2t","e^(2t)cos2t/4"],"ans":1,"exp":"L⁻¹{a/[(s-a)²+b²]} = e^(at)sin(bt). Here: 1/[(s-2)²+4] = (1/2)·2/[(s-2)²+2²]. So L⁻¹ = (1/2)e^(2t)sin(2t)."},
{"id":64,"year":"2022","subject":"English","q":"The word 'debris' is correctly pronounced to rhyme with:","opts":["defreeze","disease","degree","decry"],"ans":2,"exp":"'Debris' is pronounced 'deh-BREE' (French origin). It rhymes with 'degree' (deh-GREE). The 's' is silent in the French pronunciation."},
{"id":65,"year":"2022","subject":"English","q":"The 'space telescope' is located:","opts":["In outer space","On Earth","On another planet","In a laboratory"],"ans":0,"exp":"Based on the passage about James Webb Space Telescope being hit by a micrometeoroid, the telescope is located in outer space (at L2 Lagrange point)."},
{"id":66,"year":"2022","subject":"English","q":"A 'micrometeoroid' is smaller than even:","opts":["An asteroid","A meteor","A comet","A meteoroid"],"ans":3,"exp":"Size order: Asteroid > Comet ≈ Meteoroid > Micrometeoroid. A micrometeoroid is smaller than a meteoroid (mm-scale particles in space)."},
{"id":67,"year":"2022","subject":"English","q":"The term 'NASA' is:","opts":["An oxymoron","An expansion","A contraction","An acronym"],"ans":3,"exp":"NASA (National Aeronautics and Space Administration) is an acronym — formed from initial letters of words, pronounced as a word itself."},
{"id":68,"year":"2022","subject":"English","q":"The meaning of the word 'withstand':","opts":["Exist","Resist","Persist","Subsist"],"ans":1,"exp":"'Withstand' means to resist, endure, or remain firm against force or pressure. 'The structure was engineered to withstand micrometeoroid impacts.'"},
{"id":69,"year":"2022","subject":"English","q":"There are some extra pencils on my table if you ------- them.","opts":["Wish","Need","Have","Take"],"ans":1,"exp":"The correct answer is 'need'. The sentence means: pencils are available for you to take if you need them. 'Need' fits the conditional context."},
{"id":70,"year":"2022","subject":"English","q":"Please turn the volume ------- a little, it's too loud.","opts":["Off","Of","Up","Down"],"ans":3,"exp":"'Turn down' means to reduce the volume. 'Turn up' increases it. 'Turn off' switches it off entirely."},
{"id":71,"year":"2022","subject":"English","q":"What's he saying, --------?","opts":["Is he","Isn't he","Know you","Do you know"],"ans":3,"exp":"Reported speech: 'What's he saying?' becomes an indirect question. 'Do you know what he is saying?' — 'do you know' is the correct indirect question tag."},
{"id":72,"year":"2022","subject":"English","q":"Pick the incorrectly spelt word:","opts":["Improvice","Illogical","Imaginary","Envelope"],"ans":0,"exp":"'Improvice' is incorrectly spelled. The correct spelling is 'improvise' (to create or perform spontaneously without preparation)."},
{"id":73,"year":"2023","subject":"Mechanical","q":"Which of the following chucks in the lathe machine is known as universal chuck?","opts":["Magnetic chuck","Face plate","Three jaws chuck","Fair jaws chuck"],"ans":2,"exp":"Three-jaw chuck is called the 'universal chuck' because it self-centers automatically — all three jaws move simultaneously, suitable for round/hexagonal workpieces."},
{"id":74,"year":"2023","subject":"Mechanical","q":"Which of the following is NOT liquid based Rapid Prototyping system?","opts":["Stereo lithography apparatus","Laminated object manufacturing","Solid Ground wiring","Solid-object ultra violet laser printer"],"ans":1,"exp":"LOM (Laminated Object Manufacturing) uses layers of adhesive-coated paper/plastic/metal — it's a solid-based RP system, not liquid-based. SLA uses photopolymer resin (liquid)."},
{"id":75,"year":"2023","subject":"Mechanical","q":"Which joining process is associated with welding of base metals?","opts":["Explosion welding","Soldering","Brazing","Thermit welding"],"ans":3,"exp":"Thermit welding uses chemical reaction of aluminum powder and iron oxide (thermite) producing molten iron — it actually fuses/welds base metals together."},
{"id":76,"year":"2023","subject":"Mechanical","q":"The extrusion process used in manufacturing short length components like tooth paste tubes, gun shells:","opts":["Indirect extrusion","Direct extrusion","Hydro static extrusion","Continuous extrusion"],"ans":0,"exp":"Indirect (backward) extrusion is used for short components — metal flows opposite to punch movement. Used for toothpaste tubes, bullet cases, small containers."},
{"id":77,"year":"2023","subject":"Mechanical","q":"Which one of the following is a positive drive?","opts":["Crossed belt heat drive","Rope drive","V belt drive","Chain drive"],"ans":3,"exp":"Chain drive is a positive (non-slip) drive — provides exact velocity ratio. Belt drives are friction drives and can slip. Positive drive means no slip between driver and driven."},
{"id":78,"year":"2023","subject":"Electrical","q":"---- is an energy dissipating component.","opts":["Vacuum diode","Inductor","Capacitor","Resistor"],"ans":3,"exp":"A resistor dissipates electrical energy as heat (P = I²R). Inductors and capacitors store energy (magnetic/electric fields). They are reactive elements, not dissipative."},
{"id":79,"year":"2023","subject":"Electrical","q":"Tolerance limit of gold band in a resistor is:","opts":["±1%","±10%","±5%","±20%"],"ans":2,"exp":"Color code tolerances: Gold = ±5%, Silver = ±10%, Brown = ±1%, Red = ±2%, None = ±20%. Gold is the 4th band in 4-band resistors."},
{"id":80,"year":"2023","subject":"Electrical","q":"Unit of Inductance:","opts":["Mho","Henry","Farad","Ohms"],"ans":1,"exp":"Henry (H) is the SI unit of inductance. Farad is capacitance, Ohm is resistance, Mho (Siemens) is conductance."},
{"id":81,"year":"2023","subject":"Electrical","q":"The internal impedance of ideal voltage source and the load impedance of ideal current source are:","opts":["Low and High","0 and ∞","∞ and 0","None of these"],"ans":1,"exp":"Ideal voltage source: internal impedance = 0 (no voltage drop), ideal current source: output impedance = ∞ (all current goes to load, none bypassed)."},
{"id":82,"year":"2023","subject":"Electronics","q":"In a constant voltage source, Zener diode is connected in ----- condition.","opts":["Reverse biased","Forward biased","Inverted mode","None of these"],"ans":0,"exp":"Zener diode operates in reverse-biased condition as a voltage regulator. It maintains constant voltage across the load at its Zener breakdown voltage."},
{"id":83,"year":"2023","subject":"Electronics","q":"Most widely used biasing circuit which makes Q-Point independent of β is called:","opts":["Voltage divider bias circuit","Fixed bias circuit","Biasing circuit with Emitter resistor","Collector to base bias circuit"],"ans":0,"exp":"Voltage divider bias (self-bias) is most stable and widely used. The Q-point is nearly independent of transistor's β (hFE) due to the voltage divider network."},
{"id":84,"year":"2023","subject":"Electronics","q":"Efficiency and Ripple factor of full wave rectifier are:","opts":["81.2% and 1.21","40.6% and 0.482","40.6% and 1.21","81.2% and 0.482"],"ans":3,"exp":"Full wave rectifier: Efficiency = 81.2% (vs 40.6% for half wave), Ripple factor = 0.482 (vs 1.21 for half wave). Both parameters are better for FWR."},
{"id":85,"year":"2023","subject":"Communication","q":"In ----- the amplitude of carrier wave is varied with that of the modulating signal.","opts":["Phase Modulation","Frequency Modulation","Amplitude Modulation","PSK Modulation"],"ans":2,"exp":"Amplitude Modulation (AM): carrier amplitude varies proportionally with message signal amplitude. FM: frequency varies. PM: phase varies."},
{"id":86,"year":"2023","subject":"Civil","q":"The indentation mark made on the top of the brick to provide key for holding the mortar is known as:","opts":["Frog","Pallet","Strike","Valley"],"ans":0,"exp":"Frog is the indentation/depression on the top face of a brick. It provides a key for mortar to bond, reducing weight and improving moisture resistance."},
{"id":87,"year":"2023","subject":"Civil","q":"For ordinary cement the final setting time should be about:","opts":["30 minutes","1 hour","10 hours","24 hours"],"ans":2,"exp":"OPC final setting time: maximum 600 minutes (10 hours) as per IS 269. Initial setting: minimum 30 minutes. Final setting marks complete hardening."},
{"id":88,"year":"2023","subject":"Civil","q":"Formation of grey or white deposits on the surface of bricks due to presence of excess salts is called:","opts":["Efflorescence","Disintegration","Warping","Floating"],"ans":0,"exp":"Efflorescence is the white/grey crystalline deposit on brick/masonry surfaces caused by soluble salts coming to the surface as water evaporates."},
{"id":89,"year":"2023","subject":"Civil","q":"The portion of a brick obtained by cutting the brick lengthwise into two portions is called:","opts":["Queen closer","King closer","Bevelled closer","Mitred closer"],"ans":0,"exp":"Queen closer is a brick cut lengthwise (parallel to length) into half width. King closer is cut diagonally. Both are used in bond construction to fill gaps."},
{"id":90,"year":"2023","subject":"Maths","q":"The value of λ for which the system of equations λx-4y=6; 4x+y=2; 3x-y=5 is consistent:","opts":["−2","2","−4","0"],"ans":0,"exp":"For consistent system, solve 4x+y=2 and 3x-y=5: add → 7x=7 → x=1, y=-2. Substitute in λx-4y=6: λ(1)+8=6 → λ=-2."},
{"id":91,"year":"2023","subject":"Maths","q":"The limit of f(x,y) = 2xy²/(x²+y⁴) as (x,y)→(0,0) is:","opts":["0","Infinite","2","Does not exist"],"ans":3,"exp":"Along y=mx: limit→0. Along x=y²: f=2y²·y²/(y⁴+y⁴)=1. Different limits along different paths → limit does not exist."},
{"id":92,"year":"2023","subject":"Maths","q":"The value of x for which the rank of matrix A = [2 1 2; 1 1 1; 2 0 x] is less than 3:","opts":["-2","2","1","-1"],"ans":1,"exp":"det(A) = 0 for rank < 3. Expanding: 2(x-0) - 1(x-2) + 2(0-2) = 2x-x+2-4 = x-2 = 0 → x = 2."},
{"id":93,"year":"2023","subject":"Maths","q":"The series Σ(n=1 to ∞) (n+2)/nᵖ converges only for:","opts":["p≥2","p<2","p>2","p≤2"],"ans":2,"exp":"(n+2)/n^p ≈ n^(1-p) for large n. By p-series test, converges when 1-p < -1, i.e., p > 2."},
{"id":94,"year":"2023","subject":"English","q":"'Electroreception' is considered a 'feat' because:","opts":["The setae function like feet","The bristles resemble nails","It is a significant achievement","It was discovered only recently"],"ans":2,"exp":"From the passage: caterpillars sensing electric fields is described as 'a feat called electroreception.' A feat means a significant achievement or accomplishment."},
{"id":95,"year":"2024","subject":"Civil","q":"What is the proportion of SiO₂ present in the manufacturing of cement?","opts":["60-65%","17-25%","20-30%","10-15%"],"ans":1,"exp":"Cement composition: CaO = 60-65%, SiO₂ = 17-25%, Al₂O₃ = 3-8%, Fe₂O₃ = 0.5-6%. SiO₂ (silica) contributes to C3S and C2S formation."},
{"id":96,"year":"2024","subject":"Civil","q":"What is the proportion of CaO present in the manufacturing of cement?","opts":["60-65%","17-25%","20-30%","10-15%"],"ans":0,"exp":"Lime (CaO) constitutes 60-65% of cement. It's the main component reacting with silica/alumina to form calcium silicates (C3S, C2S) — the strength-giving compounds."},
{"id":97,"year":"2024","subject":"Civil","q":"What is the BIS recommended Standard size of Modular bricks?","opts":["19 cm x 9 cm x 9 cm","20 cm x 10 cm x 10 cm","16 cm x 10 cm x 5 cm","12 cm x 10 cm x 12 cm"],"ans":0,"exp":"BIS standard modular brick = 190×90×90 mm (19×9×9 cm). With 10mm mortar joint, it becomes 200×100×100 mm nominal size."},
{"id":98,"year":"2024","subject":"Civil","q":"What is the uniformity coefficient of the soil always?","opts":["Greater than or equal to 1","Zero","Equal to 1","None of these"],"ans":0,"exp":"Uniformity coefficient Cu = D60/D10 ≥ 1 always (since D60 ≥ D10). Cu=1 means uniform soil. Cu>4 for gravels, >6 for sands indicates well-graded."},
{"id":99,"year":"2024","subject":"Civil","q":"What word is used to describe the moisture level in soil that marks the boundary between its liquid and plastic states?","opts":["Plastic limit","Shrinkage limit","Liquid limit","None of these"],"ans":2,"exp":"Liquid limit (LL) is the water content boundary between liquid and plastic states. Plastic limit is between plastic and semi-solid. Shrinkage limit is between semi-solid and solid."},
{"id":100,"year":"2024","subject":"Mechanical","q":"The ratio of brake power to the indicated power is called:","opts":["Mechanical efficiency","Overall efficiency","Indicated thermal efficiency","Volumetric efficiency"],"ans":0,"exp":"Mechanical efficiency = Brake Power / Indicated Power. It represents the fraction of indicated power available at the output shaft after overcoming friction losses."},
{"id":101,"year":"2024","subject":"Mechanical","q":"Which battery is preferred for Electric vehicle?","opts":["Lead-acid","Lithium-ion","Sodium-Sulphur","Nickel-Cadmium"],"ans":1,"exp":"Lithium-ion batteries are preferred for EVs due to high energy density (150-250 Wh/kg), light weight, no memory effect, and long cycle life (1000+ cycles)."},
{"id":102,"year":"2024","subject":"Electrical","q":"Nodal analysis is primarily based on:","opts":["Kirchhoff's Voltage Law","Faraday's Law","Kirchhoff's Current Law","Ohm's Law"],"ans":2,"exp":"Nodal analysis uses KCL (Kirchhoff's Current Law) — sum of currents at each node = 0. Mesh analysis uses KVL (Kirchhoff's Voltage Law)."},
{"id":103,"year":"2024","subject":"Electrical","q":"In a parallel circuit with resistors of equal value, the current through each resistor is:","opts":["Equal","Different","Zero","Infinite"],"ans":0,"exp":"In parallel circuit with equal resistors, same voltage applies across each. By Ohm's law I=V/R, equal R means equal current through each branch."},
{"id":104,"year":"2024","subject":"Electrical","q":"In an AC circuit containing only a capacitor, the current:","opts":["Leads the voltage by 90 degrees","Lags the voltage by 90 degrees","Is in phase with the voltage","None of these"],"ans":0,"exp":"In a purely capacitive circuit, current leads voltage by 90° (π/2). This is because i = C·dv/dt — current is maximum when voltage is changing fastest (at zero crossing)."},
{"id":105,"year":"2024","subject":"Electronics","q":"The most commonly used semiconducting material in electronic devices is:","opts":["silicon","germanium","copper","carbon"],"ans":0,"exp":"Silicon is dominant in electronics due to: abundant availability, higher bandgap (1.1 eV vs 0.67 eV for Ge), stable at higher temperatures, excellent oxide (SiO2) for CMOS."},
{"id":106,"year":"2024","subject":"Electronics","q":"The width of depletion layer of a P-N junction:","opts":["Decreases with light doping","Increases with heavy doping","Increases under reverse bias","Is independent of applied voltage"],"ans":2,"exp":"Reverse bias widens the depletion layer (majority carriers pulled away from junction). Forward bias narrows it. Width W ∝ √(Vbi + Vr) where Vr is reverse voltage."},
{"id":107,"year":"2024","subject":"Electronics","q":"Silicon is preferred for the manufacturing of Zener diodes because it:","opts":["Is relatively cheap","Has higher temperature and current capacity","Needs lower doping level","Has lower break-down voltage"],"ans":1,"exp":"Silicon Zener diodes have higher operating temperature (150°C vs 70°C for Ge), higher power dissipation, and higher current capacity. This makes them more practical for regulators."},
{"id":108,"year":"2024","subject":"Communication","q":"100% modulation happens in Amplitude Modulation when carrier signal:","opts":["Frequency equals modulating signal frequency","Frequency exceeds modulating signal frequency","Amplitude is same as modulating signal amplitude","Amplitude exceeds modulating signal amplitude"],"ans":2,"exp":"Modulation index m = Am/Ac. 100% modulation means m=1, so Am = Ac (amplitudes are equal). Beyond this, over-modulation and distortion occur."},
{"id":109,"year":"2024","subject":"Communication","q":"The main disadvantage of Frequency Modulated transmission is its:","opts":["High static noise","Limited line of sight range","Expensive equipment","Adjacent channel interference"],"ans":1,"exp":"FM has excellent noise immunity but is limited to line-of-sight (LOS) propagation at VHF/UHF frequencies. Signal doesn't follow Earth's curvature, limiting range to ~50-60 km."},
{"id":110,"year":"2024","subject":"Maths","q":"The characteristic equation of the matrix [1 0 -2; 2 0 -3; 1 -1 2] is:","opts":["λ³-3λ²+3λ-1=0","λ³-3λ²-3λ-1=0","λ³-3λ²+λ-1=0","λ³-3λ²+2λ-1=0"],"ans":0,"exp":"The characteristic equation is det(A-λI)=0. Computing the determinant: λ³ - trace(A)λ² + (sum of 2x2 minors)λ - det(A) = λ³-3λ²+3λ-1=0."},
{"id":111,"year":"2024","subject":"Maths","q":"The Laplace transform of t sin2t is:","opts":["4s/(s²+4)²","s/(s²+4)²","4/(s²+4)²","4s/(s²+4)"],"ans":0,"exp":"L{t·sin(at)} = 2as/(s²+a²)². For a=2: L{t·sin2t} = 2(2)s/(s²+4)² = 4s/(s²+4)²."},
{"id":112,"year":"2024","subject":"English","q":"The 'sixth sense' of caterpillars relates to the ------- of electric fields:","opts":["Purpose","Pursuit","Prevalence","Perception"],"ans":3,"exp":"From the passage: caterpillars sense electric fields with small bristles (setae) — this is their ability to perceive/detect electric fields. 'Perception' is the correct answer."},
{"id":113,"year":"2025","subject":"Civil","q":"One of the major disciplines of civil engineering, which encompasses water and air quality management is:","opts":["Water resources engineering","Transportation engineering","Environmental engineering","Geotechnical engineering"],"ans":2,"exp":"Environmental engineering deals with water treatment, air quality, waste management, and pollution control — encompassing both water and air quality management."},
{"id":114,"year":"2025","subject":"Civil","q":"Floor area ratio is the ratio of _____ of a building to the area of the land upon which the building is built.","opts":["Plinth area","Gross floor area","Carpet area","Built up area"],"ans":1,"exp":"FAR (Floor Area Ratio) = Total Gross Floor Area / Plot Area. It determines the maximum construction allowed on a plot. Also called Floor Space Index (FSI) in India."},
{"id":115,"year":"2025","subject":"Civil","q":"Flemish bond is a type of bond in which the masonry contains:","opts":["Stretchers are laid in every course","Headers and stretchers are laid in alternate courses","Headers are laid in every course","Headers and stretchers are laid alternately in the same course"],"ans":3,"exp":"In Flemish bond, each course has headers and stretchers alternating in the same course (not separate courses). Each header is centered over the stretcher below."},
{"id":116,"year":"2025","subject":"Mechanical","q":"In Otto Cycle, the compression and expansion process are theoretically modelled as _____ Process.","opts":["Isothermal","Isobaric","Isochoric","Adiabatic"],"ans":3,"exp":"In ideal Otto cycle, compression (1-2) and expansion (3-4) are isentropic (reversible adiabatic) processes — no heat transfer, constant entropy."},
{"id":117,"year":"2025","subject":"Mechanical","q":"How is the heat added in a Diesel Cycle?","opts":["Reversibly at constant pressure","Irreversibly at constant pressure","Reversibly at constant volume","Irreversibly at constant volume"],"ans":0,"exp":"In ideal Diesel cycle, heat addition (combustion) occurs reversibly at constant pressure (isobaric process). This is the key difference from Otto cycle (constant volume heat addition)."},
{"id":118,"year":"2025","subject":"Electrical","q":"In a series circuit, the current is:","opts":["Different through each resistor","Zero at the end resistor","The same through all components","Dependent on voltage only"],"ans":2,"exp":"In a series circuit, there is only one path for current flow. The same current flows through every component. Kirchhoff's Current Law confirms this — no branching."},
{"id":119,"year":"2025","subject":"Electrical","q":"Which law explains the direction of induced emf?","opts":["Lenz's Law","Kirchhoff's Law","Coulomb's law","Ampere's Law"],"ans":0,"exp":"Lenz's Law: 'The direction of induced EMF (and current) is such that it opposes the change that caused it.' Faraday's law gives magnitude; Lenz's gives direction."},
{"id":120,"year":"2025","subject":"Electronics","q":"The maximum negative voltage that a diode can withstand is called:","opts":["Barrier Potential","Peak Inverse Voltage","Threshold Voltage","RMS Voltage"],"ans":1,"exp":"Peak Inverse Voltage (PIV) is the maximum reverse voltage a diode can withstand without breakdown. Exceeding PIV causes reverse breakdown and diode damage."},
{"id":121,"year":"2025","subject":"Electronics","q":"An application of Zener diode is:","opts":["Amplifier","Voltage divider biasing circuit","Voltage Regulator","Rectifier"],"ans":2,"exp":"Zener diode's primary application is voltage regulation. It maintains constant output voltage despite input voltage or load current variations (operates in reverse breakdown region)."},
{"id":122,"year":"2025","subject":"Communication","q":"'Accelerated charged particles radiates electromagnetic waves.' This is the basic principle of:","opts":["Microphone","Amplifier","Oscillator","Antenna"],"ans":3,"exp":"Antennas operate on the principle that accelerating charges radiate electromagnetic waves. When AC current flows in an antenna, electrons oscillate (accelerate), radiating EM waves."},
{"id":123,"year":"2025","subject":"Maths","q":"The rank of the matrix [0 0 5; 3 5 0; 5 0 0] is:","opts":["3","2","1","0"],"ans":0,"exp":"det = 0(0-0) - 0(0-0) + 5(0-25) = -125 ≠ 0. Since det ≠ 0, the matrix is full rank. Rank = 3."},
{"id":124,"year":"2025","subject":"Maths","q":"The value of λ for which the system 3x+y-λz=0, 4x-2y-3z=0, 2λx+4y+λz=0 possess non-trivial solutions:","opts":["-1","−9","2","9"],"ans":1,"exp":"For non-trivial solution, det=0. Expanding the 3×3 determinant and solving gives λ=-9. (Verify by expanding |3 1 -λ; 4 -2 -3; 2λ 4 λ|=0)."},
{"id":125,"year":"2025","subject":"Maths","q":"The particular solution of d²y/dx² - 9dy/dx + 8y = 7eˣ is:","opts":["y=xeˣ","y=7xeˣ","y=9xeˣ","y=-xeˣ"],"ans":1,"exp":"The auxiliary equation: m²-9m+8=0 → (m-1)(m-8)=0. Since m=1 is a root, for PI with e^x, use yp = Axe^x. Substituting: A(-9+1)eˣ→ A=7. PI = 7xeˣ."},
{"id":126,"year":"2025","subject":"English","q":"The imperative 'Girl, open your bag!' may best be reported as:","opts":["Open your bag! was ordered","She was ordered to open her bag","She was ordered to open her bag at them","She was ordered to open her bag by them"],"ans":1,"exp":"Reporting imperative sentences: 'ordered/told/asked + object + to + verb'. 'Girl, open your bag!' → 'She was ordered to open her bag.' No agent needed unless specified."},
{"id":127,"year":"2025","subject":"English","q":"Pick the wrongly spelt word:","opts":["Arduous","Virtuous","Bulbous","Calcalus"],"ans":3,"exp":"'Calcalus' is misspelled. The correct spelling is 'calculus' (the mathematical system/branch involving derivatives and integrals)."},
{"id":128,"year":"2019","subject":"Civil","q":"The floor area ratio (FAR) is:","opts":["Total area covered by all floors × 100 / Area of the plot","Total area of the building × 100 / Area of the plot","Area of the plot × 100 / Total area covered by all floors","Total area of the building × 100 / Total area covered by all floors"],"ans":0,"exp":"FAR = (Total area covered by all floors / Area of plot) × 100. It indicates total permissible floor area as a percentage of plot area. Also known as FSI."},
{"id":129,"year":"2019","subject":"Civil","q":"In case of multi-storeyed buildings, the forms to be removed first are:","opts":["Side of beams and girders","Column forms","Bottom of beams and girders","Side and bottom of beams and girders at the same time"],"ans":0,"exp":"In multi-storey buildings, formwork removal order: sides of columns/beams (non-load bearing) first, then slab soffits, then beam soffits (load-bearing) last to ensure concrete gains strength."},
{"id":130,"year":"2019","subject":"Civil","q":"In airport, the run way orientation is made so that landing and take-off are:","opts":["Along the wind direction","Against the wind direction","Perpendicular to the wind direction","10° to the wind direction"],"ans":1,"exp":"Aircraft must take off and land facing into (against) the wind. Head wind increases lift and reduces ground speed required. Runways are oriented into the prevailing wind direction."},
{"id":131,"year":"2019","subject":"Civil","q":"The type of particle shape of M-sand is:","opts":["Flaky","Round","Angular","Cubical"],"ans":2,"exp":"M-sand (Manufactured sand) has angular, rough-textured particles due to crushing of rocks. This angularity improves bonding with cement paste, giving better strength than round river sand."},
{"id":132,"year":"2019","subject":"Civil","q":"Which type of tile is suitable for air-conditioned rooms and gymnasiums:","opts":["Wood tiles","Cork tiles","Ceramic tiles","Concrete tiles"],"ans":1,"exp":"Cork tiles are ideal for AC rooms and gymnasiums due to thermal insulation (energy saving), sound absorption, comfort underfoot, anti-static properties, and moisture resistance."},
{"id":133,"year":"2019","subject":"Electrical","q":"Three resistors 100Ω, 200Ω and 300Ω are connected in series to a 250V supply. The current in the circuit is:","opts":["0.417 A","4A","0.62A","0.2A"],"ans":0,"exp":"Series circuit: R_total = 100+200+300 = 600Ω. I = V/R = 250/600 = 0.4167 A ≈ 0.417 A."},
{"id":134,"year":"2019","subject":"Electrical","q":"The resistance of a copper wire is RΩ. The wire is stretched to its double length. The new resistance is:","opts":["R Ω","R/2 Ω","4R Ω","2R Ω"],"ans":2,"exp":"R = ρl/A. Stretching to 2l reduces cross-section to A/2 (volume = lA = constant). R_new = ρ(2l)/(A/2) = 4ρl/A = 4R."},
{"id":135,"year":"2019","subject":"Electronics","q":"The Varactor diode is a:","opts":["Voltage variable resistor","Voltage variable capacitor","Voltage variable inductor","Variable resistor"],"ans":1,"exp":"Varactor (Varicap) diode is a voltage-variable capacitor. The depletion layer width changes with reverse voltage, changing junction capacitance. Used in tuned circuits."},
{"id":136,"year":"2019","subject":"Electronics","q":"Peak reverse voltage of the diode 1N4007 is:","opts":["100 V","400 V","700 V","1000 V"],"ans":3,"exp":"1N4007 is a rectifier diode with PIV of 1000V (1kV). It's the highest in the 1N400x series (1N4001=50V, 1N4002=100V...1N4007=1000V)."},
{"id":137,"year":"2019","subject":"Maths","q":"The interval of convergence of Σ(n=0 to ∞) aⁿxⁿ is:","opts":["(-1/2, 1/2)","(1/2, 1/4)","(1/4, 1/2)","(-1/4, 1/4)"],"ans":3,"exp":"By ratio test, |ax| < 1, so |x| < 1/|a|. For power series Σaⁿxⁿ, radius of convergence R = 1/|a|. If |a|=4, interval = (-1/4, 1/4)."},
{"id":138,"year":"2019","subject":"Maths","q":"The infinite series Σ(n=1 to ∞) 1/nᵖ:","opts":["Converges if p < 1","Converges if p > 1","Converges if p = 1","Diverges if p > 1"],"ans":1,"exp":"p-series test: Σ1/nᵖ converges if p > 1 and diverges if p ≤ 1. For p=1 (harmonic series), it diverges. This is the fundamental p-series convergence test."},
{"id":139,"year":"2019","subject":"English","q":"Let us go for a walk, ……………… ?","opts":["can we","shan't we","shall we","do we"],"ans":2,"exp":"'Let us' takes the tag question 'shall we?' It's an invitation/suggestion. 'Let's go, shall we?' is the standard tag for proposals beginning with 'Let us/Let's'."},
{"id":140,"year":"2019","subject":"English","q":"A good name is better than …………….","opts":["a bad name","a golden name","no name","a golden girdle"],"ans":3,"exp":"The complete proverb is: 'A good name is better than a golden girdle.' It means reputation is more valuable than wealth or material possessions."}
];

const SUBJECTS = [...new Set(QUESTIONS.map(q=>q.subject))].sort();
const YEARS = [...new Set(QUESTIONS.map(q=>q.year))].sort((a,b)=>b-a);

let state = {
  screen: 'home',
  mode: null,
  filterYear: 'all',
  filterSubject: 'all',
  questions: [],
  current: 0,
  answers: {},
  bookmarks: JSON.parse(localStorage.getItem('let_bookmarks')||'[]'),
  timer: 0,
  timerInterval: null,
  submitted: false,
  reviewMode: false
};

function saveBookmarks(){localStorage.setItem('let_bookmarks',JSON.stringify(state.bookmarks))}

function getFilteredQ(){
  let qs = QUESTIONS;
  if(state.filterYear !== 'all') qs = qs.filter(q=>q.year===state.filterYear);
  if(state.filterSubject !== 'all') qs = qs.filter(q=>q.subject===state.filterSubject);
  return qs;
}

function shuffleArray(arr){
  const a=[...arr];
  for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}
  return a;
}

function startQuiz(qs, timed){
  clearInterval(state.timerInterval);
  state.questions = qs;
  state.current = 0;
  state.answers = {};
  state.submitted = false;
  state.reviewMode = false;
  state.timer = timed ? 120*60 : 0;
  if(timed){
    state.timerInterval = setInterval(()=>{
      state.timer--;
      updateTimer();
      if(state.timer<=0){clearInterval(state.timerInterval);submitQuiz();}
    },1000);
  }
  state.screen = 'quiz';
  render();
}

function updateTimer(){
  const el = document.getElementById('timer-display');
  if(!el) return;
  const m = Math.floor(state.timer/60);
  const s = state.timer%60;
  el.textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  const wrap = document.getElementById('timer-wrap');
  if(wrap) wrap.className = 'timer' + (state.timer < 300 ? ' warning' : '');
}

function submitQuiz(){
  clearInterval(state.timerInterval);
  state.submitted = true;
  state.screen = 'result';
  render();
}

function calcScore(){
  let correct=0,wrong=0,unattempted=0;
  state.questions.forEach(q=>{
    const a = state.answers[q.id];
    if(a === undefined) unattempted++;
    else if(a === q.ans) correct++;
    else wrong++;
  });
  return {correct,wrong,unattempted,total:state.questions.length,score:correct};
}

function render(){
  const app = document.getElementById('app');
  if(state.screen === 'home') app.innerHTML = renderHome();
  else if(state.screen === 'quiz') app.innerHTML = renderQuiz();
  else if(state.screen === 'result') app.innerHTML = renderResult();
  attachEvents();
}

function renderHome(){
  const qs = getFilteredQ();
  const byYear = YEARS.map(y=>({y,c:QUESTIONS.filter(q=>q.year===y).length}));
  const bySub = SUBJECTS.map(s=>({s,c:QUESTIONS.filter(q=>q.subject===s).length}));
  const subIcons = {Electrical:'⚡',Electronics:'🔌',Civil:'🏗️',Mechanical:'⚙️',Maths:'📐',Communication:'📡',English:'📝'};
  return `
  <div class="header">
    <h1>🎓 KTU LET Mock Test</h1>
    <p>Kerala Technological University — Lateral Entry Test Preparation</p>
  </div>
  <div class="stats-bar">
    <div class="stat-card"><div class="num">${QUESTIONS.length}</div><div class="lbl">Total Questions</div></div>
    <div class="stat-card"><div class="num">${YEARS.length}</div><div class="lbl">Years Covered</div></div>
    <div class="stat-card"><div class="num">${SUBJECTS.length}</div><div class="lbl">Subjects</div></div>
    <div class="stat-card"><div class="num">${state.bookmarks.length}</div><div class="lbl">Bookmarked</div></div>
  </div>
  <div class="tabs">
    <button class="tab ${state.mode==='year'||!state.mode?'active':''}" onclick="setMode('year')">📅 Year-wise Test</button>
    <button class="tab ${state.mode==='subject'?'active':''}" onclick="setMode('subject')">📚 Subject-wise</button>
    <button class="tab ${state.mode==='custom'?'active':''}" onclick="setMode('custom')">🎯 Custom Practice</button>
    <button class="tab ${state.mode==='bookmark'?'active':''}" onclick="setMode('bookmark')">🔖 Bookmarks</button>
  </div>
  ${renderModeContent()}`;
}

function renderModeContent(){
  const subIcons = {Electrical:'⚡',Electronics:'🔌',Civil:'🏗️',Mechanical:'⚙️',Maths:'📐',Communication:'📡',English:'📝'};
  if(!state.mode || state.mode==='year'){
    return `<div class="card"><div class="section-title">Select Year for Full Mock Test (120 min)</div>
    <div class="year-cards">
    ${YEARS.map(y=>{
      const c = QUESTIONS.filter(q=>q.year===y).length;
      return `<div class="year-card" onclick="startYearTest('${y}')">
        <div class="year">${y}</div>
        <div class="info">${c} Questions</div>
        <div class="badge">120 Minutes</div>
      </div>`;
    }).join('')}
    </div>
    <div style="margin-top:16px;padding-top:16px;border-top:1px solid #e2e8f0">
    <button class="btn btn-primary" onclick="startAllTest()">🎲 Full Test — All Years (${QUESTIONS.length} Q)</button>
    </div></div>`;
  }
  if(state.mode==='subject'){
    return `<div class="card"><div class="section-title">Select Subject to Practice</div>
    <div class="subject-cards">
    ${SUBJECTS.map(s=>{
      const c = QUESTIONS.filter(q=>q.subject===s).length;
      return `<div class="subject-card" onclick="startSubjectTest('${s}')">
        <div class="icon">${subIcons[s]||'📖'}</div>
        <div class="name">${s}</div>
        <div class="count">${c} Questions</div>
      </div>`;
    }).join('')}
    </div></div>`;
  }
  if(state.mode==='custom'){
    return `<div class="card"><div class="section-title">Custom Practice</div>
    <div class="filters">
      <select class="filter-select" id="fy" onchange="state.filterYear=this.value;render()">
        <option value="all">All Years</option>
        ${YEARS.map(y=>`<option value="${y}" ${state.filterYear===y?'selected':''}>${y}</option>`).join('')}
      </select>
      <select class="filter-select" id="fs" onchange="state.filterSubject=this.value;render()">
        <option value="all">All Subjects</option>
        ${SUBJECTS.map(s=>`<option value="${s}" ${state.filterSubject===s?'selected':''}>${s}</option>`).join('')}
      </select>
    </div>
    <p style="font-size:14px;color:#64748b;margin-bottom:16px">${getFilteredQ().length} questions match your filter</p>
    <div style="display:flex;gap:10px;flex-wrap:wrap">
      <button class="btn btn-primary" onclick="startCustomTest(true)">⏱ Timed Practice</button>
      <button class="btn btn-secondary" onclick="startCustomTest(false)">📖 Untimed Practice</button>
    </div></div>`;
  }
  if(state.mode==='bookmark'){
    const bqs = QUESTIONS.filter(q=>state.bookmarks.includes(q.id));
    if(bqs.length===0) return `<div class="card" style="text-align:center;padding:40px"><div style="font-size:48px;margin-bottom:12px">🔖</div><p style="color:#64748b">No bookmarks yet. Bookmark questions during practice!</p></div>`;
    return `<div class="card"><div class="section-title">Bookmarked Questions (${bqs.length})</div>
    <div style="display:flex;gap:10px;margin-bottom:16px;flex-wrap:wrap">
      <button class="btn btn-primary" onclick="startBookmarkTest()">Practice Bookmarks</button>
      <button class="btn btn-danger" onclick="clearBookmarks()">Clear All</button>
    </div>
    ${bqs.map(q=>`<div style="border:1px solid #e2e8f0;border-radius:10px;padding:12px;margin-bottom:8px">
      <div style="font-size:11px;color:#6366f1;font-weight:600;margin-bottom:4px">${q.year} — ${q.subject}</div>
      <div style="font-size:13px;color:#374151">${q.q.substring(0,100)}${q.q.length>100?'...':''}</div>
    </div>`).join('')}</div>`;
  }
}

function renderQuiz(){
  const q = state.questions[state.current];
  const total = state.questions.length;
  const pct = Math.round((state.current/total)*100);
  const ans = state.answers[q.id];
  const isAnswered = ans !== undefined;
  const isBookmarked = state.bookmarks.includes(q.id);
  const subIcons = {Electrical:'⚡',Electronics:'🔌',Civil:'🏗️',Mechanical:'⚙️',Maths:'📐',Communication:'📡',English:'📝'};

  return `
  <div class="quiz-header">
    <div>
      <div style="font-size:13px;font-weight:600;color:#374151">Question ${state.current+1} of ${total}</div>
      <div class="quiz-meta">
        <span class="badge-pill badge-year">${q.year}</span>
        <span class="badge-pill badge-subject" style="margin-left:6px">${subIcons[q.subject]||''} ${q.subject}</span>
      </div>
    </div>
    <div style="display:flex;gap:8px;align-items:center">
      ${state.timer>0?`<div class="timer ${state.timer<300?'warning':''}" id="timer-wrap">⏱ <span class="time" id="timer-display">${String(Math.floor(state.timer/60)).padStart(2,'0')}:${String(state.timer%60).padStart(2,'0')}</span></div>`:''}
      <button class="btn btn-secondary" onclick="togglePanel()">📋 Navigator</button>
    </div>
  </div>
  <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>

  <div class="question-card">
    <div style="display:flex;justify-content:space-between;align-items:flex-start">
      <div class="q-num">Question ${state.current+1}</div>
      <button class="bookmark-btn ${isBookmarked?'bookmarked':'not-bookmarked'}" onclick="toggleBookmark(${q.id})">
        ${isBookmarked?'🔖':'🏷️'}
      </button>
    </div>
    <div class="q-text">${q.q}</div>
    <div class="options">
      ${q.opts.map((opt,i)=>{
        let cls = 'option';
        if(isAnswered){
          cls += ' disabled';
          if(i===q.ans) cls += ' correct';
          else if(i===ans && ans!==q.ans) cls += ' wrong';
        } else {
          if(ans===i) cls += ' selected';
        }
        return `<div class="${cls}" onclick="${!isAnswered?`selectAnswer(${q.id},${i})`:''}">
          <div class="option-letter">${'ABCD'[i]}</div>
          <div class="option-text">${opt}</div>
        </div>`;
      }).join('')}
    </div>
    <div class="explanation ${isAnswered?'show':''}">
      <div class="exp-title">✅ Explanation</div>
      <div class="exp-text">${q.exp}</div>
    </div>
  </div>

  <div class="nav-buttons">
    <button class="btn btn-secondary" onclick="navigate(-1)" ${state.current===0?'disabled':''}>← Previous</button>
    <div style="display:flex;gap:8px">
      ${!state.submitted?`<button class="btn btn-danger" onclick="confirmSubmit()">Submit Test</button>`:''}
      ${state.current < total-1 ? 
        `<button class="btn btn-primary" onclick="navigate(1)">Next →</button>` :
        `<button class="btn btn-success" onclick="submitQuiz()">Finish & See Result</button>`
      }
    </div>
  </div>

  <div class="overlay" id="nav-overlay" onclick="togglePanel()"></div>
  <div class="side-panel" id="nav-panel">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
      <strong>Question Navigator</strong>
      <button onclick="togglePanel()" style="background:none;border:none;cursor:pointer;font-size:18px">✕</button>
    </div>
    <div style="display:flex;gap:8px;margin-bottom:14px;font-size:12px;flex-wrap:wrap">
      <span style="display:flex;align-items:center;gap:4px"><span style="width:12px;height:12px;border-radius:3px;background:#1a56db;display:inline-block"></span>Answered</span>
      <span style="display:flex;align-items:center;gap:4px"><span style="width:12px;height:12px;border-radius:3px;background:#e2e8f0;display:inline-block"></span>Unanswered</span>
      <span style="display:flex;align-items:center;gap:4px"><span style="width:12px;height:12px;border-radius:3px;background:#6366f1;display:inline-block"></span>Current</span>
    </div>
    <div class="q-palette">
      ${state.questions.map((q2,i)=>{
        let cls = 'q-dot ';
        if(i===state.current) cls += 'current';
        else if(state.answers[q2.id]!==undefined) cls += 'answered';
        else cls += 'unanswered';
        return `<button class="${cls}" onclick="goTo(${i});togglePanel()">${i+1}</button>`;
      }).join('')}
    </div>
    <div style="margin-top:16px;padding-top:16px;border-top:1px solid #e2e8f0;font-size:13px;color:#64748b">
      Answered: ${Object.keys(state.answers).length} / ${total}
    </div>
  </div>`;
}

function renderResult(){
  const {correct,wrong,unattempted,total,score} = calcScore();
  const pct = Math.round((correct/total)*100);
  let grade = pct>=80?'🏆 Excellent!':pct>=60?'👍 Good':pct>=40?'📚 Keep Practicing':'💪 Needs Work';
  return `
  <div class="header">
    <h1>Test Complete! ${grade}</h1>
    <p>Review your performance below</p>
  </div>
  <div class="card result-card">
    <div class="result-score">${pct}%</div>
    <div class="result-label">${score} out of ${total} correct</div>
    <div class="result-grid">
      <div class="result-stat"><div class="val correct-val">${correct}</div><div class="lbl">✅ Correct</div></div>
      <div class="result-stat"><div class="val wrong-val">${wrong}</div><div class="lbl">❌ Wrong</div></div>
      <div class="result-stat"><div class="val unattempted-val">${unattempted}</div><div class="lbl">⏭ Skipped</div></div>
    </div>
    <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
      <button class="btn btn-primary" onclick="reviewQuiz()">📖 Review Answers</button>
      <button class="btn btn-secondary" onclick="goHome()">🏠 Back to Home</button>
      <button class="btn btn-secondary" onclick="retryQuiz()">🔄 Retry Same Test</button>
    </div>
  </div>
  ${renderReview()}`;
}

function renderReview(){
  return `<div class="card">
    <div class="section-title">Answer Review</div>
    ${state.questions.map((q,i)=>{
      const ua = state.answers[q.id];
      const correct = ua===q.ans;
      const attempted = ua!==undefined;
      return `<div style="border:1.5px solid ${correct?'#10b981':!attempted?'#f59e0b':'#ef4444'};border-radius:12px;padding:16px;margin-bottom:12px">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px">
          <div>
            <span class="badge-pill badge-year">${q.year}</span>
            <span class="badge-pill badge-subject" style="margin-left:6px">${q.subject}</span>
          </div>
          <span style="font-size:13px;font-weight:700;color:${correct?'#10b981':!attempted?'#f59e0b':'#ef4444'}">${correct?'✅ Correct':!attempted?'⏭ Skipped':'❌ Wrong'}</span>
        </div>
        <p style="font-size:14px;font-weight:500;margin-bottom:10px;color:#1a202c">Q${i+1}. ${q.q}</p>
        ${q.opts.map((opt,oi)=>`<div style="padding:8px 12px;border-radius:8px;margin-bottom:6px;font-size:13px;background:${oi===q.ans?'#ecfdf5':oi===ua&&ua!==q.ans?'#fef2f2':'#f8fafc'};border:1px solid ${oi===q.ans?'#10b981':oi===ua&&ua!==q.ans?'#ef4444':'#e2e8f0'};color:${oi===q.ans?'#065f46':oi===ua&&ua!==q.ans?'#991b1b':'#374151'}">
          <strong>${'ABCD'[oi]}.</strong> ${opt} ${oi===q.ans?' ✅':''}${oi===ua&&ua!==q.ans?' ❌':''}
        </div>`).join('')}
        <div style="background:#f0fdf4;border-radius:8px;padding:10px;margin-top:8px;border-left:3px solid #10b981">
          <div style="font-size:11px;font-weight:700;color:#059669;margin-bottom:4px">EXPLANATION</div>
          <div style="font-size:13px;color:#065f46">${q.exp}</div>
        </div>
      </div>`;
    }).join('')}
  </div>`;
}

function attachEvents(){}

function setMode(m){state.mode=m;state.filterYear='all';state.filterSubject='all';render();}
function startYearTest(y){
  const qs = QUESTIONS.filter(q=>q.year===y);
  startQuiz(qs, true);
}
function startAllTest(){startQuiz([...QUESTIONS], true);}
function startSubjectTest(s){
  const qs = QUESTIONS.filter(q=>q.subject===s);
  startQuiz(qs, false);
}
function startCustomTest(timed){
  const qs = getFilteredQ();
  if(qs.length===0){alert('No questions match your filter!');return;}
  startQuiz(qs, timed);
}
function startBookmarkTest(){
  const bqs = QUESTIONS.filter(q=>state.bookmarks.includes(q.id));
  if(bqs.length===0){alert('No bookmarks!');return;}
  startQuiz(bqs, false);
}
function clearBookmarks(){state.bookmarks=[];saveBookmarks();render();}
function selectAnswer(qid, i){
  state.answers[qid] = i;
  render();
}
function navigate(dir){
  state.current = Math.max(0, Math.min(state.questions.length-1, state.current+dir));
  render();
}
function goTo(i){state.current=i;render();}
function togglePanel(){
  const p = document.getElementById('nav-panel');
  const o = document.getElementById('nav-overlay');
  if(p) p.classList.toggle('open');
  if(o) o.classList.toggle('show');
}
function confirmSubmit(){
  const unattempted = state.questions.length - Object.keys(state.answers).length;
  if(unattempted > 0){
    if(!confirm(`You have ${unattempted} unanswered questions. Submit anyway?`)) return;
  }
  submitQuiz();
}
function reviewQuiz(){state.screen='result';render();}
function goHome(){clearInterval(state.timerInterval);state.screen='home';state.mode=null;render();}
function retryQuiz(){
  const qs = state.questions;
  startQuiz(qs, state.timer>0);
}
function toggleBookmark(qid){
  const idx = state.bookmarks.indexOf(qid);
  if(idx>=0) state.bookmarks.splice(idx,1);
  else state.bookmarks.push(qid);
  saveBookmarks();
  render();
}

render();
