var buildings = [];

var hallwayNorth = {

    coordinates: [{ lat: -39.073273597889234, lng: 174.05651718378067 }, { lat: -39.07247815193569, lng: 174.0561255812645 }, { lat: -39.07248856358984, lng: 174.0560907125473 }, { lat: -39.07328400942604, lng: 174.05649036169052 }]
}
buildings.push(hallwayNorth);
var hallwaySouth = {
    coordinates: [{ lat: -39.071112129588656, lng: 174.05534774065018 },
        { lat: -39.071540, lng: 174.055700, uh: 'outside corner' },
        { lat: -39.072069, lng: 174.055929, uh: 'se corner' },
        { lat: -39.072080, lng: 174.055890 },
        { lat: -39.071560, lng: 174.055670, uh: 'inside corner' },
        { lat: -39.071125, lng: 174.055320 }
    ]
}
buildings.push(hallwaySouth);

var hallwayMentalHealth = {
    coordinates: [{ lat: -39.072753019090506, lng: 174.05626237392426 }, { lat: -39.072675973102065, lng: 174.05653059482574 }, { lat: -39.0726343265868, lng: 174.05650913715363 }, { lat: -39.07262391495414, lng: 174.05654400587082 }, { lat: -39.072663479150066, lng: 174.05656546354294 }, { lat: -39.07262391495414, lng: 174.05669957399368 }, { lat: -39.07287171139459, lng: 174.05682295560837 }, { lat: -39.07288420530971, lng: 174.05678540468216 }, { lat: -39.07266764380098, lng: 174.05667543411255 }, { lat: -39.07278425392673, lng: 174.05627578496933 }]
}
buildings.push(hallwayMentalHealth);

var mentalHealth = {
    title: "Te Puna Waiora",
    key: "mentalHealth",
    titleCoordinates: { lat: -39.07277384231619, lng: 174.0574935078621 },
    description: "Te Puna Waiora/Mental Health",
    coordinates: [{lat: -39.072887328788156, lng: 174.05683234333992},{lat: -39.07294355137639, lng: 174.05685782432556},{lat: -39.07287795835243, lng: 174.0570804476738},{lat: -39.07298415655114, lng: 174.0571340918541},{lat: -39.07294771601077, lng: 174.0572588145733},{lat: -39.072827982674205, lng: 174.05720114707947},{lat: -39.07280924178574, lng: 174.05726820230484},{lat: -39.072878478932225, lng: 174.05730172991753},{lat: -39.072884725889466, lng: 174.05728094279766},{lat: -39.07319655246914, lng: 174.05745059251785},{lat: -39.07313408314785, lng: 174.05765309929848},{lat: -39.072961251070815, lng: 174.0575686097145},{lat: -39.07291752240592, lng: 174.05770540237427},{lat: -39.07282277687235, lng: 174.05765309929848},{lat: -39.0728633821166, lng: 174.05752032995224},{lat: -39.07280091250039, lng: 174.05748814344406},{lat: -39.072788418570504, lng: 174.0575310587883},{lat: -39.07258383015408, lng: 174.05742645263672},{lat: -39.07257185676784, lng: 174.0574613213539},{lat: -39.072438587635865, lng: 174.057387560606},{lat: -39.072517716213326, lng: 174.05710995197296},{lat: -39.07266191740591, lng: 174.05717968940735},{lat: -39.07278425392673, lng: 174.05677869915962}],
}
buildings.push(mentalHealth);

var phu = {
    title: "PHU",
    key: "phu",
    titleCoordinates: { lat: -39.074081528579946, lng: 174.05679613351822 },
    description: "Hostel, Public Health Unit, Transport Services",
    coordinates: [{ lat: -39.07408569314717, lng: 174.05658155679703 }, { lat: -39.07419813636938, lng: 174.05663788318634 }, { lat: -39.07399615489765, lng: 174.05730910599232 }, { lat: -39.07388579364308, lng: 174.05725479125977 }]
}
buildings.push(phu);
var cacc = {
    title: "CACC, PHNs",
    key: "cacc",
    titleCoordinates: { lat: -39.074089857714156, lng: 174.05759274959564 },
    description: "Child & Adolescent Community Centre, Public Health Nurses",
    coordinates: [{ lat: -39.074006566327846, lng: 174.05729234218597 }, { lat: -39.07410443369665, lng: 174.05733928084373 }, { lat: -39.07428455094618, lng: 174.05759543180466 }, { lat: -39.074234576264075, lng: 174.05774094164371 }, { lat: -39.073985743465904, lng: 174.05761152505875 }, { lat: -39.073978976034454, lng: 174.05763432383537 }, { lat: -39.073900369667726, lng: 174.05759543180466 }, { lat: -39.07391911026642, lng: 174.05752837657928 }, { lat: -39.073716607422426, lng: 174.057432487607 }, { lat: -39.073754088712434, lng: 174.057297706604 }, { lat: -39.073715045701576, lng: 174.0572789311409 }, { lat: -39.07374888297891, lng: 174.05715219676495 }, { lat: -39.07382332493192, lng: 174.0572226047516 }, { lat: -39.07400084004143, lng: 174.0573124587536 }]
}
buildings.push(cacc);
var medicalRecords = {
    title: "Medical Records, Drug & Alcohol",
    key: "medicalRecords",
    titleCoordinates: { lat: -39.073161153193865, lng: 174.05604511499405 },
    description: "<b>L1</b> Medical Records<br/><b>L2</b> Drug & Alcohol",
    coordinates: [{ lat: -39.07329858557499, lng: 174.05638843774796 }, { lat: -39.073179893988865, lng: 174.05633479356766 }, { lat: -39.073152, lng: 174.056423 }, { lat: -39.073040, lng: 174.056367 }, { lat: -39.07306536683057, lng: 174.05627846717834 }, { lat: -39.07299665044637, lng: 174.05624896287918 }, { lat: -39.073040379062235, lng: 174.0560880303383 }, { lat: -39.07309035459004, lng: 174.05611217021942 }, { lat: -39.07308202533787, lng: 174.05613899230957 }, { lat: -39.07309660152854, lng: 174.05614703893661 }, { lat: -39.073186140919425, lng: 174.05587077140808 }, { lat: -39.07331524402724, lng: 174.05593246221542 }, { lat: -39.07322570480015, lng: 174.05621141195297 }, { lat: -39.073340231698246, lng: 174.05626237392426 }, ]
}
buildings.push(medicalRecords);
var districtNurses = {
    title: "DN, Older People's Health, SWs",
    key: "districtNurses",
    titleCoordinates: { lat: -39.072782171604736, lng: 174.05599415302277 },
    description: "District Nurses, Older People's Health & Rehabilitation, Social Workers",
    coordinates: [{ lat: -39.07267389077689, lng: 174.05612021684647 }, { lat: -39.072658, lng: 174.056176 }, { lat: -39.072709, lng: 174.056201 }, { lat: -39.072725948887935, lng: 174.0561443567276 }, { lat: -39.07296333338752, lng: 174.05626505613327 }, { lat: -39.07303204980416, lng: 174.05604243278503 }, { lat: -39.07297582728643, lng: 174.05601024627686 }, { lat: -39.07300081507762, lng: 174.0559297800064 }, { lat: -39.07293001631294, lng: 174.05588686466217 }, { lat: -39.07291127545159, lng: 174.0559458732605 }, { lat: -39.07263849123944, lng: 174.0558037161827 }, { lat: -39.0725593627974, lng: 174.0560558438301 }]
}
buildings.push(districtNurses);
var ict = {
    title: "ICT Services",
    key: "itServices",
    titleCoordinates: { lat: -39.0747770079001, lng: 174.0569919347763 },
    description: "Applications, Business Intellignence, Reporting and Development",
    coordinates: [{
        lat: -39.07470621091739,
        lng: 174.05701607465744
    }, {
        lat: -39.07475202073784,
        lng: 174.0570965409279
    }, {
        lat: -39.074962329077316,
        lng: 174.05688732862473
    }, {
        lat: -39.07491027261602,
        lng: 174.0568122267723
    }]
}
buildings.push(ict);
var medicalOutpatients = {
    title: "Med OPs/Oncology, Bone Density, MH OPs",
    key: "medicalOutpatients",
    titleCoordinates: { lat: -39.07296749802073, lng: 174.05679881572723 },
    description: "<b>L1</b> Medical Outpatients/Oncology, Bone Density<br/><b>L2</b> Mental Health Outpatients",
    coordinates: [{ lat: -39.073033, lng: 174.056400 }, { lat: -39.073129918524465, lng: 174.05644744634628 }, { lat: -39.07310284846647, lng: 174.0565386414528 }, { lat: -39.07324236326961, lng: 174.05660569667816 }, { lat: -39.07316740012608, lng: 174.05683904886246 }, { lat: -39.07304870831932, lng: 174.05677735805511 }, { lat: -39.073023720545095, lng: 174.0568631887436 }, { lat: -39.07292585167752, lng: 174.05681490898132 }, { lat: -39.072950839486396, lng: 174.0567371249199 }, { lat: -39.072782171604736, lng: 174.05665129423141 }, { lat: -39.07285505283764, lng: 174.05642062425613 }, { lat: -39.07300706202404, lng: 174.0564876794815 }]
}
buildings.push(medicalOutpatients);
var laundry = {
    coordinates: [{ lat: -39.073517227447894, lng: 174.0561255812645 }, { lat: -39.07390661653451, lng: 174.05629456043243 }, { lat: -39.07399615489765, lng: 174.05598878860474 }, { lat: -39.073604684007385, lng: 174.05580639839172 }]
}
buildings.push(laundry);
var thingByLaundry = {
    coordinates: [{ lat: -39.07364008306017, lng: 174.05559718608856 }, { lat: -39.07370463422837, lng: 174.05570715665817 }, { lat: -39.07364216535684, lng: 174.0557661652565 }, { lat: -39.07358386102686, lng: 174.0556588768959 }]
}
buildings.push(thingByLaundry);
var neoNatal = {
    title: "Neonatal",
    key: "neonatal",
    titleCoordinates: { lat: -39.07258226840817, lng: 174.05629992485046 },
    coordinates: [{ lat: -39.07270096099942, lng: 174.0562355518341 }, { lat: -39.072646820543966, lng: 174.05640989542007 }, { lat: -39.07258226840817, lng: 174.0563777089119 }, { lat: -39.072567692111264, lng: 174.0564152598381 }, { lat: -39.07246565794866, lng: 174.0563589334488 }, { lat: -39.0725265661145, lng: 174.05614838004112 }]
}
buildings.push(neoNatal);
var maternity = {
    title: "Maternity",
    key: "maternity",
    description: "<b>L1</b> Maternity Delivery Suite, Antenatal Clinic<br/><b>L2</b> Maternity Post Natal",
    titleCoordinates: { lat: -39.07232614161001, lng: 174.05628383159637 },
    coordinates: [{ lat: -39.07229490657104, lng: 174.0566948801279 }, { lat: -39.07226315093391, lng: 174.05667878687382 }, { lat: -39.07223191586705, lng: 174.05679412186146 }, { lat: -39.072140813509755, lng: 174.05674785375595 }, { lat: -39.0721605957459, lng: 174.05667878687382 }, { lat: -39.07212415478027, lng: 174.05665934085846 }, { lat: -39.07220536604935, lng: 174.05638575553894 }, { lat: -39.07224493047992, lng: 174.0564052015543 }, { lat: -39.07226575385552, lng: 174.05633211135864 }, { lat: -39.07221994242109, lng: 174.0563079714775 }, { lat: -39.07229282423462, lng: 174.0560746192932 }, { lat: -39.07245316395943, lng: 174.05614703893661 }, { lat: -39.07243234063913, lng: 174.05622482299805 }, { lat: -39.07245784920565, lng: 174.05623488128185 }, { lat: -39.072372473559035, lng: 174.05649572610855 }, { lat: -39.072359458969686, lng: 174.05649036169052 }]
}
buildings.push(maternity);
var antenatal = {
    title: "Antenatal",
    key: "antenatal",
    titleCoordinates: { lat: -39.072359458969686, lng: 174.0567746758461 },
    coordinates: [{ lat: -39.072427134808095, lng: 174.0567572414875 }, { lat: -39.072263671518236, lng: 174.05667945742607 }, { lat: -39.072227230605826, lng: 174.0568095445633 }, { lat: -39.07228449488831, lng: 174.05683904886246 }, { lat: -39.07229490657104, lng: 174.0568095445633 }, { lat: -39.072396420397176, lng: 174.05686050653458 }]
}
buildings.push(antenatal);
var outPatients = {
    title: "Surgical Outpatients",
    key: "surgicalOutpatients",
    titleCoordinates: { lat: -39.07185969692305, lng: 174.05638307332993 },
    coordinates: [{ lat: -39.07198203483452, lng: 174.0558908879757 }, { lat: -39.0720700138823, lng: 174.0559284389019 }, { lat: -39.07187323219177, lng: 174.05660033226013 }, { lat: -39.07169102643353, lng: 174.0565037727356 }, { lat: -39.07171809703307, lng: 174.0564152598381 }, { lat: -39.07176390879327, lng: 174.05643939971924 }, { lat: -39.0718867674579, lng: 174.05603975057602 }, { lat: -39.071903426243416, lng: 174.05604779720306 }, { lat: -39.071938826149584, lng: 174.05591905117035 }, { lat: -39.07196928046642, lng: 174.05593313276768 }]
}
buildings.push(outPatients);
var chapel = {
    title: "Chapel",
    key: "chapel",
    titleCoordinates: { lat: -39.071741002916895, lng: 174.05593246221542 },
    coordinates: [{ lat: -39.071719, lng: 174.05577900000003 }, { lat: -39.071847, lng: 174.055834 }, { lat: -39.07182846167762, lng: 174.05589759349823 }, { lat: -39.07184512047691, lng: 174.05590564012527 }, { lat: -39.071807638173, lng: 174.05602902173996 }, { lat: -39.07178993818923, lng: 174.05602030456066 }, { lat: -39.07178473231081, lng: 174.05603975057602 }, { lat: -39.07167644995255, lng: 174.05598878860474 }, { lat: -39.07168529995921, lng: 174.05595861375332 }, { lat: -39.07165354404778, lng: 174.05594386160374 }, { lat: -39.07169519114183, lng: 174.05579298734665 }, { lat: -39.07171289114936, lng: 174.05580036342144 }, ]
}
buildings.push(chapel);
var itOps = {
    title: "IT, Dept Med",
    key: "itOperations",
    titleCoordinates: { lat: -39.07205751982303, lng: 174.05564546585083 },
    description: "<b>L1</b> Information Technology Services<br/><b>L2</b> Department of Medicine",
    coordinates: [{ lat: -39.07192633206708, lng: 174.05582383275032 }, { lat: -39.072082, lng: 174.05588954687119 }, { lat: -39.07219078967461, lng: 174.05550062656403 }, { lat: -39.072066890367694, lng: 174.0554429590702 }, { lat: -39.072003378873944, lng: 174.05568838119507 }, { lat: -39.071967979000156, lng: 174.05567228794098 }]
}
buildings.push(itOps);

var corporate = {
    title: "Corporate offices",
    key: "corporate",
    description: "Finance, Planning & Funding, Communications",
    titleCoordinates: { lat: -39.072213695405004, lng: 174.05573666095734 },
    coordinates: [{ lat: -39.07219078967461, lng: 174.05549995601177 }, { lat: -39.07243025830676, lng: 174.05561663210392 }, { lat: -39.072324059274514, lng: 174.05597001314163 }, { lat: -39.07211374307236, lng: 174.05587412416935 }, { lat: -39.072180377976515, lng: 174.05563473701477 }, { lat: -39.07215695165019, lng: 174.05562199652195 }]
}
buildings.push(corporate);

var admin = {
    key: "admin",
    description: "<b>L2</b> Orderly & Cleaning Services<br/><b>L3</b> Screening Unit, Specialist Education Services",
    coordinates: [{ lat: -39.07205960216639, lng: 174.05596733093262 }, { lat: -39.07208667262456, lng: 174.05586272478104 }, { lat: -39.07250105757281, lng: 174.05605047941208 }, { lat: -39.07246982261124, lng: 174.05615508556366 }]
}
buildings.push(admin);

var storesOrhotics = {
    title: "Stores & Orthotics",
    key: "storesOrthotics",
    description: "<b>L1</b> Stores<br/><b>L2</b> Orthotics",
    titleCoordinates: { lat: -39.07187843806367, lng: 174.0555328130722 },
    coordinates: [{ lat: -39.071730591152445, lng: 174.05574068427086 }, { lat: -39.071903426243416, lng: 174.05581712722778 }, { lat: -39.07201795528739, lng: 174.0554255247116 }, { lat: -39.07184303812721, lng: 174.05534237623215 }]
}
buildings.push(storesOrhotics);

var specialistsServices = {
    title: "Specialist Services",
    key: "specialistServices",
    description: "<b>L1</b> Cafeteria, Dietitians<br/><b>L2</b> Physiotherapy, Occupational Therapy<br/><b>L3</b> Education Centre, Library, Human Resources<br/><b>L4</b> Intensive Care Unit",
    titleCoordinates: { lat: -39.071603567502486, lng: 174.0553316473961 },
    coordinates: [{ lat: -39.07137867261068, lng: 174.05550062656403 }, { lat: -39.07165146169244, lng: 174.05571788549423 }, { lat: -39.071851367525625, lng: 174.05532628297806 }, { lat: -39.071576496859, lng: 174.05510634183884 }]
}
buildings.push(specialistsServices);

var maoriHealth = {
    title: "Whaiora",
    key: "whaiora",
    description: "Whaiora & Maori Health",
    titleCoordinates: { lat: -39.07200129652891, lng: 174.0572065114975 },
    coordinates: [{ lat: -39.07191592032997, lng: 174.0573352575302 }, { lat: -39.07200129652891, lng: 174.05737817287445 }, { lat: -39.07207521973968, lng: 174.05713073909283 }, { lat: -39.07209552257979, lng: 174.05714079737663 }, { lat: -39.07212884004834, lng: 174.05703619122505 }, { lat: -39.072024202320804, lng: 174.056983217597 }]
}
buildings.push(maoriHealth);


var clinicalServices = {
    title: "Clinical Services",
    key: "clinicalServices",
    description: "<b>L1</b> Main Reception, TSB Cardiology Suite, Ophthalmology, Emergency Department, Pharmacy, Case Managers<br/><b>L2</b> Fulford Radiology<br/><b>L3</b> Labcare, Hospital & Specialist Services",
    titleCoordinates: { lat: -39.071253730694444, lng: 174.05569106340408 },
    coordinates: [{ lat: -39.07150153194594, lng: 174.05566960573196 }, { lat: -39.071324531140796, lng: 174.0560182929039 }, { lat: -39.0709892695755, lng: 174.05574470758438 }, { lat: -39.070962198696385, lng: 174.05580639839172 }, { lat: -39.070803937964556, lng: 174.05568301677704 }, { lat: -39.071003846198415, lng: 174.05525654554367 }]
}
buildings.push(clinicalServices);

var blockC = {
    title: "Block C",
    key: "blockC",
    description: "<b>L1</b> Renal Unit<br/><b>L2</b> Dental Unit<br/><b>L3</b> Audiology/Speech Therapy",
    titleCoordinates: { lat: -39.07111837670225, lng: 174.05514657497406 },
    coordinates: [{ lat: -39.07099968144931, lng: 174.05525386333466 }, { lat: -39.071130870927796, lng: 174.0549749135971 }, { lat: -39.071174600699756, lng: 174.05500710010529 }, { lat: -39.071220412812764, lng: 174.05490785837173 }, { lat: -39.07119125965338, lng: 174.05487835407257 }, { lat: -39.07121416570819, lng: 174.05483275651932 }, { lat: -39.071322448775746, lng: 174.0549185872078 }, { lat: -39.071112129588656, lng: 174.05534774065018 }]
}
buildings.push(blockC);

var clinicalSkills = {
    title: "Clinical Skills",
    key: "clinicalSkills",
    titleCoordinates: { lat: -39.071645214626024, lng: 174.0543955564499 },
    coordinates: [{ lat: -39.07180972052374, lng: 174.0544331073761 }, { lat: -39.071778485256196, lng: 174.0545055270195 }, { lat: -39.071753497032205, lng: 174.0544894337654 }, { lat: -39.07173267350545, lng: 174.0545403957367 }, { lat: -39.071522355540885, lng: 174.0543794631958 }, { lat: -39.07153901441242, lng: 174.0543445944786 }, { lat: -39.071509861384655, lng: 174.0543231368065 }, { lat: -39.071551508563495, lng: 174.05422925949097 }]
}
buildings.push(clinicalSkills);

var acuteServices = {
    title: "Acute Services Building",
    key: "acuteServicesBuilding",
    description: "<b>L1</b> Theatres & Endoscopy Suite, Sterile Services Department (SSD)<br><b>L2</b> Ward 2A - Older People’s Health & Rehabilitation, Ward 2B - TSB Children & Young People<br><b>L3</b> Ward 3A - General Surgery, Ward 3B - Orthopaedic/Surgical Specialist<br><b>L4</b> Ward 4A - General Medicine, Ward 4B - General Medicine",
    titleCoordinates: { lat: -39.07080185558414, lng: 174.05467182397842 },
    coordinates: [{ lat: -39.07088463015836, lng: 174.05529007315636 }, { lat: -39.070958033944834, lng: 174.0553531050682 }, { lat: -39.07099551669997, lng: 174.05527397990227 }, { lat: -39.070958033944834, lng: 174.05523777008057 }, { lat: -39.07128496619424, lng: 174.05458062887192 }, { lat: -39.07131203694954, lng: 174.05460208654404 }, { lat: -39.071366178428995, lng: 174.05449479818344 }, { lat: -39.07112670618619, lng: 174.05427753925323 }, { lat: -39.07105694672785, lng: 174.05440628528595 }, { lat: -39.07076645510768, lng: 174.0541434288025 }, { lat: -39.070645676877845, lng: 174.05439019203186 }, { lat: -39.070608193936906, lng: 174.05435800552368 }, { lat: -39.070456179583466, lng: 174.0546664595604 }, { lat: -39.07086640934847, lng: 174.0550272166729 }, { lat: -39.070781031776605, lng: 174.05520021915436 }, { lat: -39.07083933842223, lng: 174.05524984002113 }]
}
buildings.push(acuteServices);

var stJohns = {
    title: "Ambulance House",
    titleCoordinates: { lat: -39.06984187166944, lng: 174.05486226081848 },
    coordinates: [{ lat: -39.069950156842474, lng: 174.05481666326523 }, { lat: -39.06990434390492, lng: 174.05498027801514 }, { lat: -39.06972942150621, lng: 174.05487567186356 }, { lat: -39.06970443255672, lng: 174.05495077371597 }, { lat: -39.069619053579196, lng: 174.0549024939537 }, { lat: -39.06967527877113, lng: 174.05471473932266 }, { lat: -39.0697981410717, lng: 174.05478447675705 }, { lat: -39.069810635530956, lng: 174.05473619699478 }]
}
buildings.push(stJohns);

var engineering = {
    title: "Engineering",
    key: "engineering",
    titleCoordinates: { lat: -39.072644738217924, lng: 174.05534237623215 },
    coordinates: [{ lat: -39.07313616545945, lng: 174.05541747808456 }, { lat: -39.07310909540385, lng: 174.05552208423615 }, { lat: -39.07308202533787, lng: 174.05550867319107 }, { lat: -39.073046626005144, lng: 174.0556213259697 }, { lat: -39.07233447095141, lng: 174.05527532100677 }, { lat: -39.072303235916124, lng: 174.05537724494934 }, { lat: -39.07220953072731, lng: 174.05532628297806 }, { lat: -39.07229074189813, lng: 174.05503928661346 }, { lat: -39.07281757107012, lng: 174.05530482530594 }, { lat: -39.07283006499484, lng: 174.0552619099617 }]
}
buildings.push(engineering);

var chopper = {
    title: "Helicopter House",
    titleCoordinates: { lat: -39.07331940863968, lng: 174.0551707148552 },
    coordinates: [{ lat: -39.07315698857208, lng: 174.0551707148552 }, { lat: -39.07322986941789, lng: 174.05536115169525 }, { lat: -39.07344434689886, lng: 174.05522167682648 }, { lat: -39.07336730166518, lng: 174.0550285577774 }]
}
buildings.push(chopper);

var groundsKeeper = {
    title: "Grounds Keeper",
    titleCoordinates: { lat: -39.07424394651966, lng: 174.05620872974396 },
    coordinates: [{ lat: -39.074154408470925, lng: 174.05608534812927 }, { lat: -39.07422520600724, lng: 174.05628383159637 }, { lat: -39.07428350980732, lng: 174.05624896287918 }, { lat: -39.0742147946093, lng: 174.05605047941208 }]
}
buildings.push(groundsKeeper);

var overnightUnits = {
    title: "Overnight Units",
    key: "overnightUnits",
    titleCoordinates: { lat: -39.07148695542582, lng: 174.0567746758461 },
    coordinates: [{ lat: -39.07150153194594, lng: 174.05665397644043 }, { lat: -39.07157024978595, lng: 174.05669152736664 }, { lat: -39.07150777902506, lng: 174.05690878629684 }, { lat: -39.07143697876255, lng: 174.05687123537064 }]
}
buildings.push(overnightUnits);

var recCenter = {
    title: "Recreation Centre",
    key: "recreationCentre",
    titleCoordinates: { lat: -39.07354637964643, lng: 174.0573513507843 },
    coordinates: [{ lat: -39.073735868643396, lng: 174.05736207962036 }, { lat: -39.07337719261205, lng: 174.05717700719833 }, { lat: -39.07334335515649, lng: 174.05730240046978 }, { lat: -39.073702551933536, lng: 174.05748277902603 }]
}
buildings.push(recCenter);

var oldDental = {
    coordinates: [{ lat: -39.07503520805864, lng: 174.05686050653458 }, { lat: -39.07511225147131, lng: 174.05697852373123 }, { lat: -39.07519970605405, lng: 174.05686855316162 }, { lat: -39.075126827242634, lng: 174.05675321817398 }, ]
}
buildings.push(oldDental);

var projectMaungaHouse = {
    coordinates: [{ lat: -39.075153896524235, lng: 174.05674517154694 }, { lat: -39.0752725847902, lng: 174.05680686235428 }, { lat: -39.07532672323118, lng: 174.05662178993225 }, { lat: -39.0752142818073, lng: 174.05657082796097 }, { lat: -39.07519970605405, lng: 174.05662178993225 }, { lat: -39.07522469305778, lng: 174.05663520097733 }, { lat: -39.075216364057525, lng: 174.0566647052765 }, { lat: -39.07517680129286, lng: 174.0566486120224 }]
}
buildings.push(projectMaungaHouse);

var qualityRisk = {
    title: "QR, Nursing Dir",
    key: "quality",
    description: "Quality & Risk, Customer Services, Nursing Directorate",
    titleCoordinates: { lat: -39.07246149328583, lng: 174.05579566955566 },
    coordinates: [{ lat: -39.072352, lng: 174.05598199999997 }, { lat: -39.07236570597287, lng: 174.05593782663345 }, { lat: -39.07234696496165, lng: 174.0559270977974 }, { lat: -39.07241464081204, lng: 174.0557038038969 }, { lat: -39.0725812272442, lng: 174.05579030513763 }, { lat: -39.07250886631104, lng: 174.05601494014263 }, { lat: -39.07244066996799, lng: 174.0559834241867 }, { lat: -39.072429, lng: 174.056017 }]
}
buildings.push(qualityRisk);