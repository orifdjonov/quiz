export type Question = {
  category: string;
  question: string;
  options: string[];
  answer: string;
};

export const questions: Question[] = [
  // ============================================
  // IT — 20 TA
  // ============================================

  {
    category: "IT",
    question: "JavaScript'da const bilan e'lon qilingan o'zgaruvchiga qayta qiymat berish mumkinmi?",
    options: [
      "Ha, har doim",
      "Yo'q",
      "Faqat string bo'lsa",
      "Faqat browserda"
    ],
    answer: "Yo'q",
  },

  {
    category: "IT",
    question: "React'da komponent holatini boshqarish uchun qaysi Hook ishlatiladi?",
    options: [
      "useState",
      "useHTML",
      "useComponent",
      "useValue"
    ],
    answer: "useState",
  },

  {
    category: "IT",
    question: "HTTP 404 status kodi nimani anglatadi?",
    options: [
      "Server xatosi",
      "Topilmadi",
      "Muvaffaqiyatli",
      "Ruxsat berilmagan"
    ],
    answer: "Topilmadi",
  },

  {
    category: "IT",
    question: "Git'da yangi branch yaratish uchun qaysi buyruq ishlatiladi?",
    options: [
      "git branch",
      "git new",
      "git create",
      "git make"
    ],
    answer: "git branch",
  },

  {
    category: "IT",
    question: "Node.js qaysi JavaScript engine'dan foydalanadi?",
    options: [
      "V8",
      "SpiderMonkey",
      "Chakra",
      "Hermes"
    ],
    answer: "V8",
  },

  {
    category: "IT",
    question: "REST API'da yangi resource yaratish uchun odatda qaysi HTTP method ishlatiladi?",
    options: [
      "GET",
      "POST",
      "DELETE",
      "HEAD"
    ],
    answer: "POST",
  },

  {
    category: "IT",
    question: "TypeScript JavaScript'dan nimasi bilan farq qiladi?",
    options: [
      "Static typing qo'llab-quvvatlaydi",
      "HTML o'rnini bosadi",
      "Faqat backendda ishlaydi",
      "Database hisoblanadi"
    ],
    answer: "Static typing qo'llab-quvvatlaydi",
  },

  {
    category: "IT",
    question: "SQL'da ma'lumotlarni tanlash uchun qaysi keyword ishlatiladi?",
    options: [
      "SELECT",
      "GET",
      "READ",
      "FIND"
    ],
    answer: "SELECT",
  },

  {
    category: "IT",
    question: "CSS'da elementni Flex container qilish uchun nima yoziladi?",
    options: [
      "display: flex",
      "flex: true",
      "position: flex",
      "layout: flex"
    ],
    answer: "display: flex",
  },

  {
    category: "IT",
    question: "JSON'da object property va value orasida qaysi belgi ishlatiladi?",
    options: [
      ":",
      "=",
      "=>",
      "|"
    ],
    answer: ":",
  },

  {
    category: "IT",
    question: "Next.js'da sahifalar yaratish uchun zamonaviy routing tizimi qaysi?",
    options: [
      "App Router",
      "Page Router only",
      "Vue Router",
      "Express Router"
    ],
    answer: "App Router",
  },

  {
    category: "IT",
    question: "Database'da primary key nima uchun ishlatiladi?",
    options: [
      "Recordni noyob aniqlash uchun",
      "Parol saqlash uchun",
      "Serverni ishga tushirish uchun",
      "CSS yozish uchun"
    ],
    answer: "Recordni noyob aniqlash uchun",
  },

  {
    category: "IT",
    question: "Docker container nima?",
    options: [
      "Izolyatsiyalangan application environment",
      "Database turi",
      "Programming language",
      "Operating system"
    ],
    answer: "Izolyatsiyalangan application environment",
  },

  {
    category: "IT",
    question: "npm nimani boshqaradi?",
    options: [
      "JavaScript paketlarini",
      "Rasmlarni",
      "Windows driverlarini",
      "BIOS sozlamalarini"
    ],
    answer: "JavaScript paketlarini",
  },

  {
    category: "IT",
    question: "Async/await asosan nima bilan ishlashni osonlashtiradi?",
    options: [
      "Promise",
      "CSS",
      "HTML",
      "SQL table"
    ],
    answer: "Promise",
  },

  {
    category: "IT",
    question: "MongoDB qanday turdagi database?",
    options: [
      "NoSQL document database",
      "Relational database",
      "Graph database",
      "Spreadsheet"
    ],
    answer: "NoSQL document database",
  },

  {
    category: "IT",
    question: "React'da komponentlar orasida ma'lumot uzatish odatda nima orqali amalga oshiriladi?",
    options: [
      "Props",
      "SQL",
      "Cookies only",
      "CSS"
    ],
    answer: "Props",
  },

  {
    category: "IT",
    question: "GitHub asosan nima uchun ishlatiladi?",
    options: [
      "Code repository va collaboration",
      "Video montaj",
      "Database hosting only",
      "Operating system"
    ],
    answer: "Code repository va collaboration",
  },

  {
    category: "IT",
    question: "JWT odatda nima uchun ishlatiladi?",
    options: [
      "Authentication ma'lumotlarini uzatish",
      "Rasm siqish",
      "Database yaratish",
      "CSS animation"
    ],
    answer: "Authentication ma'lumotlarini uzatish",
  },

  {
    category: "IT",
    question: "Frontend va backend o'rtasida ma'lumot almashishning keng tarqalgan formati qaysi?",
    options: [
      "JSON",
      "PNG",
      "MP3",
      "EXE"
    ],
    answer: "JSON",
  },

  // ============================================
  // TARIX — 20 TA
  // ============================================

  {
    category: "Tarix",
    question: "Amir Temur qaysi yilda tug'ilgan?",
    options: ["1336", "1340", "1325", "1350"],
    answer: "1336",
  },

  {
    category: "Tarix",
    question: "Amir Temur davlatining poytaxti qaysi shahar bo'lgan?",
    options: [
      "Samarqand",
      "Buxoro",
      "Toshkent",
      "Xiva"
    ],
    answer: "Samarqand",
  },

  {
    category: "Tarix",
    question: "O'zbekiston mustaqilligi qachon e'lon qilingan?",
    options: [
      "1991-yil 31-avgust",
      "1991-yil 1-sentabr",
      "1990-yil 21-mart",
      "1992-yil 8-dekabr"
    ],
    answer: "1991-yil 31-avgust",
  },

  {
    category: "Tarix",
    question: "O'zbekiston Respublikasi Konstitutsiyasi qachon qabul qilingan?",
    options: [
      "1992-yil 8-dekabr",
      "1991-yil 31-avgust",
      "1993-yil 8-dekabr",
      "1992-yil 1-sentabr"
    ],
    answer: "1992-yil 8-dekabr",
  },

  {
    category: "Tarix",
    question: "Mirzo Ulug'bek asosan qaysi fan bilan mashhur bo'lgan?",
    options: [
      "Astronomiya",
      "Biologiya",
      "Kimyo",
      "Tibbiyot"
    ],
    answer: "Astronomiya",
  },

  {
    category: "Tarix",
    question: "Ulug'bek rasadxonasi qayerda joylashgan?",
    options: [
      "Samarqand",
      "Buxoro",
      "Xiva",
      "Termiz"
    ],
    answer: "Samarqand",
  },

  {
    category: "Tarix",
    question: "Ipak yo'li asosan qaysi hududlarni bog'lagan?",
    options: [
      "Sharq va G'arb",
      "Faqat Yevropani",
      "Faqat Afrikani",
      "Faqat Amerikani"
    ],
    answer: "Sharq va G'arb",
  },

  {
    category: "Tarix",
    question: "Qadimgi Rim imperiyasining markazi qaysi shahar edi?",
    options: [
      "Rim",
      "Afina",
      "Sparta",
      "Karfagen"
    ],
    answer: "Rim",
  },

  {
    category: "Tarix",
    question: "Misr piramidalari asosan nima uchun qurilgan?",
    options: [
      "Fir'avnlar maqbarasi sifatida",
      "Bozor sifatida",
      "Harbiy baza sifatida",
      "Observatoriya sifatida"
    ],
    answer: "Fir'avnlar maqbarasi sifatida",
  },

  {
    category: "Tarix",
    question: "Ikkinchi jahon urushi qaysi yillarda davom etgan?",
    options: [
      "1939–1945",
      "1914–1918",
      "1941–1945",
      "1935–1940"
    ],
    answer: "1939–1945",
  },

  {
    category: "Tarix",
    question: "Birinchi jahon urushi qaysi yillarda bo'lgan?",
    options: [
      "1914–1918",
      "1939–1945",
      "1900–1905",
      "1920–1925"
    ],
    answer: "1914–1918",
  },

  {
    category: "Tarix",
    question: "Renessans dastlab qaysi hududda kuchli rivojlangan?",
    options: [
      "Italiya",
      "Xitoy",
      "Hindiston",
      "Misr"
    ],
    answer: "Italiya",
  },

  {
    category: "Tarix",
    question: "Buyuk Fransuz inqilobi qaysi yilda boshlangan?",
    options: ["1789", "1776", "1812", "1804"],
    answer: "1789",
  },

  {
    category: "Tarix",
    question: "AQSh Mustaqillik deklaratsiyasi qaysi yilda qabul qilingan?",
    options: ["1776", "1789", "1800", "1812"],
    answer: "1776",
  },

  {
    category: "Tarix",
    question: "Chingizxon qaysi imperiyani asos solgan?",
    options: [
      "Mo'g'ullar imperiyasi",
      "Rim imperiyasi",
      "Usmonlilar imperiyasi",
      "Vizantiya imperiyasi"
    ],
    answer: "Mo'g'ullar imperiyasi",
  },

  {
    category: "Tarix",
    question: "Alisher Navoiy qaysi asari bilan mashhur?",
    options: [
      "Xamsa",
      "Boburnoma",
      "Qutadg'u bilig",
      "Devoni Hikmat"
    ],
    answer: "Xamsa",
  },

  {
    category: "Tarix",
    question: "Zahiriddin Muhammad Bobur qaysi davlatga asos solgan?",
    options: [
      "Boburiylar imperiyasi",
      "Temuriylar imperiyasi",
      "Usmonlilar imperiyasi",
      "Saljuqiylar imperiyasi"
    ],
    answer: "Boburiylar imperiyasi",
  },

  {
    category: "Tarix",
    question: "Qadimgi Yunonistonda demokratiya bilan mashhur shahar qaysi?",
    options: [
      "Afina",
      "Sparta",
      "Rim",
      "Troya"
    ],
    answer: "Afina",
  },

  {
    category: "Tarix",
    question: "Birinchi inson kosmosga qaysi yilda uchgan?",
    options: ["1961", "1957", "1969", "1972"],
    answer: "1961",
  },

  {
    category: "Tarix",
    question: "Yuriy Gagarin qaysi davlat fuqarosi bo'lgan?",
    options: [
      "Sovet Ittifoqi",
      "AQSh",
      "Germaniya",
      "Fransiya"
    ],
    answer: "Sovet Ittifoqi",
  },

  // ============================================
  // SPORT — 20 TA
  // ============================================

  {
    category: "Sport",
    question: "Futbol jamoasida maydonda nechta o'yinchi bo'ladi?",
    options: ["9", "10", "11", "12"],
    answer: "11",
  },

  {
    category: "Sport",
    question: "Olimpiya ramzida nechta halqa bor?",
    options: ["4", "5", "6", "7"],
    answer: "5",
  },

  {
    category: "Sport",
    question: "Basketbol jamoasida maydonda bir vaqtning o'zida nechta o'yinchi bo'ladi?",
    options: ["4", "5", "6", "7"],
    answer: "5",
  },

  {
    category: "Sport",
    question: "Tennisda Grand Slam turnirlari nechta?",
    options: ["3", "4", "5", "6"],
    answer: "4",
  },

  {
    category: "Sport",
    question: "FIFA qaysi sport turi bilan bog'liq?",
    options: [
      "Futbol",
      "Tennis",
      "Basketbol",
      "Boks"
    ],
    answer: "Futbol",
  },

  {
    category: "Sport",
    question: "Marafonning standart masofasi qancha?",
    options: [
      "42.195 km",
      "40 km",
      "45 km",
      "50 km"
    ],
    answer: "42.195 km",
  },

  {
    category: "Sport",
    question: "Shaxmat taxtasida nechta katak bor?",
    options: ["64", "72", "81", "100"],
    answer: "64",
  },

  {
    category: "Sport",
    question: "Futbolda qizil kartochka nimani bildiradi?",
    options: [
      "O'yinchining maydondan chetlatilishi",
      "Gol",
      "Tanaffus",
      "Jarima zarbasi"
    ],
    answer: "O'yinchining maydondan chetlatilishi",
  },

  {
    category: "Sport",
    question: "Voleybol jamoasida maydonda nechta o'yinchi bo'ladi?",
    options: ["5", "6", "7", "8"],
    answer: "6",
  },

  {
    category: "Sport",
    question: "Formula 1 avtomobil poygasi qaysi sportga kiradi?",
    options: [
      "Avtosport",
      "Yengil atletika",
      "Velosport",
      "Suv sporti"
    ],
    answer: "Avtosport",
  },

  {
    category: "Sport",
    question: "Boks jangida ringda nechta bokschi bo'ladi?",
    options: ["1", "2", "3", "4"],
    answer: "2",
  },

  {
    category: "Sport",
    question: "Olimpiya o'yinlari odatda necha yilda bir marta o'tkaziladi?",
    options: ["2", "3", "4", "5"],
    answer: "4",
  },

  {
    category: "Sport",
    question: "Futbolda penalti nuqtasi darvozadan taxminan necha metr uzoqda?",
    options: ["9 m", "10 m", "11 m", "12 m"],
    answer: "11 m",
  },

  {
    category: "Sport",
    question: "NBA qaysi sport ligasi?",
    options: [
      "Basketbol",
      "Futbol",
      "Beysbol",
      "Xokkey"
    ],
    answer: "Basketbol",
  },

  {
    category: "Sport",
    question: "Tour de France qaysi sport bilan bog'liq?",
    options: [
      "Velosport",
      "Avtosport",
      "Yugurish",
      "Suzish"
    ],
    answer: "Velosport",
  },

  {
    category: "Sport",
    question: "Futbolda sariq kartochka odatda nimani bildiradi?",
    options: [
      "Ogohlantirish",
      "Chetlatish",
      "Gol",
      "Tanaffus"
    ],
    answer: "Ogohlantirish",
  },

  {
    category: "Sport",
    question: "Beysbol jamoasida odatda nechta o'yinchi maydonda bo'ladi?",
    options: ["7", "8", "9", "10"],
    answer: "9",
  },

  {
    category: "Sport",
    question: "Badminton raketkasida nima uriladi?",
    options: [
      "Volan",
      "To'p",
      "Disk",
      "Shayba"
    ],
    answer: "Volan",
  },

  {
    category: "Sport",
    question: "Dzyudo qaysi davlatda paydo bo'lgan?",
    options: [
      "Yaponiya",
      "Xitoy",
      "Koreya",
      "Hindiston"
    ],
    answer: "Yaponiya",
  },

  {
    category: "Sport",
    question: "Futbol bo'yicha Jahon chempionati qaysi tashkilot tomonidan o'tkaziladi?",
    options: [
      "FIFA",
      "UEFA",
      "IOC",
      "NBA"
    ],
    answer: "FIFA",
  },

  // ============================================
  // KINO — 20 TA
  // ============================================

  {
    category: "Kino",
    question: "Titanic filmining rejissyori kim?",
    options: [
      "James Cameron",
      "Christopher Nolan",
      "Steven Spielberg",
      "Ridley Scott"
    ],
    answer: "James Cameron",
  },

  {
    category: "Kino",
    question: "The Dark Knight filmida Batman rolini kim ijro etgan?",
    options: [
      "Christian Bale",
      "Tom Hardy",
      "Ben Affleck",
      "Robert Pattinson"
    ],
    answer: "Christian Bale",
  },

  {
    category: "Kino",
    question: "Harry Potter filmlarida Harry Potter rolini kim o'ynagan?",
    options: [
      "Daniel Radcliffe",
      "Rupert Grint",
      "Tom Felton",
      "Elijah Wood"
    ],
    answer: "Daniel Radcliffe",
  },

  {
    category: "Kino",
    question: "The Lord of the Rings filmida Frodo rolini kim ijro etgan?",
    options: [
      "Elijah Wood",
      "Orlando Bloom",
      "Sean Bean",
      "Viggo Mortensen"
    ],
    answer: "Elijah Wood",
  },

  {
    category: "Kino",
    question: "Avatar filmining rejissyori kim?",
    options: [
      "James Cameron",
      "Peter Jackson",
      "Christopher Nolan",
      "Denis Villeneuve"
    ],
    answer: "James Cameron",
  },

  {
    category: "Kino",
    question: "Inception filmining rejissyori kim?",
    options: [
      "Christopher Nolan",
      "James Cameron",
      "David Fincher",
      "Quentin Tarantino"
    ],
    answer: "Christopher Nolan",
  },

  {
    category: "Kino",
    question: "The Matrix filmida Neo rolini kim o'ynagan?",
    options: [
      "Keanu Reeves",
      "Brad Pitt",
      "Tom Cruise",
      "Johnny Depp"
    ],
    answer: "Keanu Reeves",
  },

  {
    category: "Kino",
    question: "Iron Man rolini Marvel filmlarida kim ijro etgan?",
    options: [
      "Robert Downey Jr.",
      "Chris Evans",
      "Chris Hemsworth",
      "Mark Ruffalo"
    ],
    answer: "Robert Downey Jr.",
  },

  {
    category: "Kino",
    question: "Joker rolini The Dark Knight filmida kim ijro etgan?",
    options: [
      "Heath Ledger",
      "Joaquin Phoenix",
      "Jack Nicholson",
      "Jared Leto"
    ],
    answer: "Heath Ledger",
  },

  {
    category: "Kino",
    question: "Oppenheimer filmining rejissyori kim?",
    options: [
      "Christopher Nolan",
      "James Cameron",
      "Denis Villeneuve",
      "Martin Scorsese"
    ],
    answer: "Christopher Nolan",
  },

  {
    category: "Kino",
    question: "Interstellar filmida asosiy rolni kim ijro etgan?",
    options: [
      "Matthew McConaughey",
      "Leonardo DiCaprio",
      "Christian Bale",
      "Matt Damon"
    ],
    answer: "Matthew McConaughey",
  },

  {
    category: "Kino",
    question: "Forrest Gump filmida bosh rolni kim o'ynagan?",
    options: [
      "Tom Hanks",
      "Brad Pitt",
      "Tom Cruise",
      "Jim Carrey"
    ],
    answer: "Tom Hanks",
  },

  {
    category: "Kino",
    question: "The Godfather filmi qaysi janrga yaqin?",
    options: [
      "Kriminal drama",
      "Fantastika",
      "Komediya",
      "Horror"
    ],
    answer: "Kriminal drama",
  },

  {
    category: "Kino",
    question: "Pirates of the Caribbean filmida Jack Sparrow rolini kim ijro etgan?",
    options: [
      "Johnny Depp",
      "Orlando Bloom",
      "Tom Hardy",
      "Hugh Jackman"
    ],
    answer: "Johnny Depp",
  },

  {
    category: "Kino",
    question: "The Lion King animatsion filmida Simba kim?",
    options: [
      "Sher",
      "Yo'lbars",
      "Bo'ri",
      "Fil"
    ],
    answer: "Sher",
  },

  {
    category: "Kino",
    question: "Mission: Impossible film seriyasining asosiy qahramoni kim?",
    options: [
      "Ethan Hunt",
      "James Bond",
      "Jason Bourne",
      "John Wick"
    ],
    answer: "Ethan Hunt",
  },

  {
    category: "Kino",
    question: "John Wick rolini kim ijro etadi?",
    options: [
      "Keanu Reeves",
      "Jason Statham",
      "Tom Cruise",
      "Dwayne Johnson"
    ],
    answer: "Keanu Reeves",
  },

  {
    category: "Kino",
    question: "The Shawshank Redemption filmida Andy Dufresne rolini kim o'ynagan?",
    options: [
      "Tim Robbins",
      "Morgan Freeman",
      "Tom Hanks",
      "Kevin Spacey"
    ],
    answer: "Tim Robbins",
  },

  {
    category: "Kino",
    question: "Star Wars filmidagi Jedi kim?",
    options: [
      "Luke Skywalker",
      "Tony Stark",
      "Bruce Wayne",
      "Peter Parker"
    ],
    answer: "Luke Skywalker",
  },

  {
    category: "Kino",
    question: "Spider-Man rolini MCU filmlarida Tom Holland ijro etganmi?",
    options: [
      "Ha",
      "Yo'q",
      "Faqat serialda",
      "Faqat animatsiyada"
    ],
    answer: "Ha",
  },

  // ============================================
  // GEOGRAFIYA — 20 TA
  // ============================================

  {
    category: "Geografiya",
    question: "Yer yuzidagi eng katta okean qaysi?",
    options: [
      "Tinch okeani",
      "Atlantika okeani",
      "Hind okeani",
      "Shimoliy Muz okeani"
    ],
    answer: "Tinch okeani",
  },

  {
    category: "Geografiya",
    question: "Dunyodagi eng katta qit'a qaysi?",
    options: [
      "Osiyo",
      "Afrika",
      "Yevropa",
      "Shimoliy Amerika"
    ],
    answer: "Osiyo",
  },

  {
    category: "Geografiya",
    question: "Dunyodagi eng uzun daryolardan biri bo'lgan Nil qaysi qit'ada?",
    options: [
      "Afrika",
      "Osiyo",
      "Yevropa",
      "Janubiy Amerika"
    ],
    answer: "Afrika",
  },

  {
    category: "Geografiya",
    question: "Everest qaysi tog' tizmasida joylashgan?",
    options: [
      "Himolay",
      "Alp",
      "And",
      "Kavkaz"
    ],
    answer: "Himolay",
  },

  {
    category: "Geografiya",
    question: "O'zbekiston nechta davlat bilan chegaradosh?",
    options: ["4", "5", "6", "7"],
    answer: "5",
  },

  {
    category: "Geografiya",
    question: "O'zbekiston poytaxti qaysi shahar?",
    options: [
      "Toshkent",
      "Samarqand",
      "Buxoro",
      "Andijon"
    ],
    answer: "Toshkent",
  },

  {
    category: "Geografiya",
    question: "Dunyodagi eng katta cho'l qaysi?",
    options: [
      "Antarktika cho'li",
      "Sahroi Kabir",
      "Gobi",
      "Qizilqum"
    ],
    answer: "Antarktika cho'li",
  },

  {
    category: "Geografiya",
    question: "Sahroi Kabir qaysi qit'ada?",
    options: [
      "Afrika",
      "Osiyo",
      "Avstraliya",
      "Janubiy Amerika"
    ],
    answer: "Afrika",
  },

  {
    category: "Geografiya",
    question: "Yaponiya poytaxti qaysi shahar?",
    options: [
      "Tokio",
      "Kioto",
      "Osaka",
      "Xirosima"
    ],
    answer: "Tokio",
  },

  {
    category: "Geografiya",
    question: "Fransiya poytaxti qaysi?",
    options: [
      "Parij",
      "Lion",
      "Marsel",
      "Nitsa"
    ],
    answer: "Parij",
  },

  {
    category: "Geografiya",
    question: "AQSh nechta shtatdan iborat?",
    options: ["48", "49", "50", "52"],
    answer: "50",
  },

  {
    category: "Geografiya",
    question: "Kanadaning poytaxti qaysi shahar?",
    options: [
      "Ottava",
      "Toronto",
      "Vankuver",
      "Monreal"
    ],
    answer: "Ottava",
  },

  {
    category: "Geografiya",
    question: "Braziliya qaysi qit'ada joylashgan?",
    options: [
      "Janubiy Amerika",
      "Shimoliy Amerika",
      "Afrika",
      "Yevropa"
    ],
    answer: "Janubiy Amerika",
  },

  {
    category: "Geografiya",
    question: "Avstraliyaning poytaxti qaysi?",
    options: [
      "Canberra",
      "Sydney",
      "Melbourne",
      "Perth"
    ],
    answer: "Canberra",
  },

  {
    category: "Geografiya",
    question: "Dunyodagi eng katta orol qaysi?",
    options: [
      "Grenlandiya",
      "Madagaskar",
      "Borneo",
      "Yangi Gvineya"
    ],
    answer: "Grenlandiya",
  },

  {
    category: "Geografiya",
    question: "Qaysi davlat ikki qit'ada joylashgan?",
    options: [
      "Turkiya",
      "Braziliya",
      "Yaponiya",
      "Avstraliya"
    ],
    answer: "Turkiya",
  },

  {
    category: "Geografiya",
    question: "Orol davlat bo'lgan qaysi mamlakat Hind okeanida joylashgan?",
    options: [
      "Maldiv orollari",
      "Shveytsariya",
      "Mo'g'uliston",
      "Nepal"
    ],
    answer: "Maldiv orollari",
  },

  {
    category: "Geografiya",
    question: "Qizilqum cho'li asosan qaysi hududda joylashgan?",
    options: [
      "Markaziy Osiyo",
      "Shimoliy Afrika",
      "Janubiy Amerika",
      "G'arbiy Yevropa"
    ],
    answer: "Markaziy Osiyo",
  },

  {
    category: "Geografiya",
    question: "Bering bo'g'ozi qaysi ikki hududni ajratadi?",
    options: [
      "Osiyo va Shimoliy Amerika",
      "Afrika va Yevropa",
      "Osiyo va Afrika",
      "Yevropa va Amerika"
    ],
    answer: "Osiyo va Shimoliy Amerika",
  },

  {
    category: "Geografiya",
    question: "Amazonka daryosi asosan qaysi qit'ada oqadi?",
    options: [
      "Janubiy Amerika",
      "Afrika",
      "Osiyo",
      "Yevropa"
    ],
    answer: "Janubiy Amerika",
  },

  // ============================================
  // FAN — 20 TA
  // ============================================

  {
    category: "Fan",
    question: "Suvning kimyoviy formulasi qaysi?",
    options: ["H2O", "CO2", "O2", "NaCl"],
    answer: "H2O",
  },

  {
    category: "Fan",
    question: "Yerning tabiiy yo'ldoshi nima?",
    options: [
      "Oy",
      "Quyosh",
      "Mars",
      "Venera"
    ],
    answer: "Oy",
  },

  {
    category: "Fan",
    question: "Quyosh sistemasidagi eng katta sayyora qaysi?",
    options: [
      "Yupiter",
      "Saturn",
      "Yer",
      "Neptun"
    ],
    answer: "Yupiter",
  },

  {
    category: "Fan",
    question: "Inson yuragi nechta kameradan iborat?",
    options: ["2", "3", "4", "5"],
    answer: "4",
  },

  {
    category: "Fan",
    question: "Fotosintez jarayonida o'simliklar qaysi gazni yutadi?",
    options: [
      "CO2",
      "O2",
      "N2",
      "H2"
    ],
    answer: "CO2",
  },

  {
    category: "Fan",
    question: "Yer atmosferasida eng ko'p qaysi gaz mavjud?",
    options: [
      "Azot",
      "Kislorod",
      "Karbonat angidrid",
      "Vodorod"
    ],
    answer: "Azot",
  },

  {
    category: "Fan",
    question: "Suv dengiz sathida taxminan necha °C da qaynaydi?",
    options: ["90", "100", "110", "120"],
    answer: "100",
  },

  {
    category: "Fan",
    question: "Elektr tok kuchining SI birligi nima?",
    options: [
      "Amper",
      "Volt",
      "Om",
      "Vatt"
    ],
    answer: "Amper",
  },

  {
    category: "Fan",
    question: "Kuchning SI birligi nima?",
    options: [
      "Nyuton",
      "Joul",
      "Vatt",
      "Paskal"
    ],
    answer: "Nyuton",
  },

  {
    category: "Fan",
    question: "Energiya birligi nima?",
    options: [
      "Joul",
      "Nyuton",
      "Amper",
      "Volt"
    ],
    answer: "Joul",
  },

  {
    category: "Fan",
    question: "DNA nimani saqlaydi?",
    options: [
      "Genetik ma'lumot",
      "Elektr energiyasi",
      "Issiqlik",
      "Suv"
    ],
    answer: "Genetik ma'lumot",
  },

  {
    category: "Fan",
    question: "Atomning markazida nima joylashgan?",
    options: [
      "Yadro",
      "Elektron buluti",
      "Molekula",
      "Ion"
    ],
    answer: "Yadro",
  },

  {
    category: "Fan",
    question: "pH qiymati 7 bo'lgan eritma qanday hisoblanadi?",
    options: [
      "Neytral",
      "Kuchli kislotali",
      "Kuchli ishqoriy",
      "Radioaktiv"
    ],
    answer: "Neytral",
  },

  {
    category: "Fan",
    question: "Inson tanasidagi eng katta organ qaysi?",
    options: [
      "Teri",
      "Jigar",
      "Yurak",
      "O'pka"
    ],
    answer: "Teri",
  },

  {
    category: "Fan",
    question: "Yer Quyosh atrofini taxminan qancha vaqtda aylanib chiqadi?",
    options: [
      "365 kun",
      "30 kun",
      "24 soat",
      "7 kun"
    ],
    answer: "365 kun",
  },

  {
    category: "Fan",
    question: "Yorug'lik vakuumda taxminan qanday tezlikda tarqaladi?",
    options: [
      "300 000 km/s",
      "30 000 km/s",
      "3 000 km/s",
      "300 km/s"
    ],
    answer: "300 000 km/s",
  },

  {
    category: "Fan",
    question: "Qaysi vitamin quyosh nuri ta'sirida organizmda hosil bo'lishi mumkin?",
    options: [
      "Vitamin D",
      "Vitamin C",
      "Vitamin B12",
      "Vitamin K"
    ],
    answer: "Vitamin D",
  },

  {
    category: "Fan",
    question: "Qaysi sayyora Quyoshga eng yaqin?",
    options: [
      "Merkuriy",
      "Venera",
      "Yer",
      "Mars"
    ],
    answer: "Merkuriy",
  },

  {
    category: "Fan",
    question: "Ovoz vakuumda tarqala oladimi?",
    options: [
      "Yo'q",
      "Ha",
      "Faqat yuqori chastotada",
      "Faqat past haroratda"
    ],
    answer: "Yo'q",
  },

  {
    category: "Fan",
    question: "Qaysi qon hujayralari kislorod tashishda asosiy rol o'ynaydi?",
    options: [
      "Eritrotsitlar",
      "Leykotsitlar",
      "Trombotsitlar",
      "Neyronlar"
    ],
    answer: "Eritrotsitlar",
  },

  // ============================================
  // AVTO — 20 TA
  // ============================================

  {
    category: "Avto",
    question: "ABS tizimining asosiy vazifasi nima?",
    options: [
      "G'ildirak bloklanishini oldini olish",
      "Motorni kuchaytirish",
      "Yoqilg'ini ko'paytirish",
      "Konditsionerni boshqarish"
    ],
    answer: "G'ildirak bloklanishini oldini olish",
  },

  {
    category: "Avto",
    question: "ESP tizimi asosan nima uchun xizmat qiladi?",
    options: [
      "Avtomobil barqarorligini saqlash",
      "Yoqilg'i quyish",
      "Motor moyini almashtirish",
      "Faralarni yoqish"
    ],
    answer: "Avtomobil barqarorligini saqlash",
  },

  {
    category: "Avto",
    question: "Dvigatel moyining asosiy vazifalaridan biri nima?",
    options: [
      "Ishqalanishni kamaytirish",
      "G'ildirakni aylantirish",
      "Farani yoqish",
      "Signal berish"
    ],
    answer: "Ishqalanishni kamaytirish",
  },

  {
    category: "Avto",
    question: "Akkumulyatorning asosiy vazifasi nima?",
    options: [
      "Elektr energiyasini saqlash va ta'minlash",
      "Benzin ishlab chiqarish",
      "G'ildirakni boshqarish",
      "Radiatorni sovutish"
    ],
    answer: "Elektr energiyasini saqlash va ta'minlash",
  },

  {
    category: "Avto",
    question: "Radiatorning asosiy vazifasi nima?",
    options: [
      "Dvigatelni sovutish",
      "Yoqilg'i quyish",
      "Tormozlash",
      "Rulni boshqarish"
    ],
    answer: "Dvigatelni sovutish",
  },

  {
    category: "Avto",
    question: "Tormoz kolodkalari qaysi tizimning qismi?",
    options: [
      "Tormoz tizimi",
      "Yonilg'i tizimi",
      "Sovutish tizimi",
      "Egzoz tizimi"
    ],
    answer: "Tormoz tizimi",
  },

  {
    category: "Avto",
    question: "Mexanik transmissiyada clutch nima uchun kerak?",
    options: [
      "Dvigatel va transmissiyani vaqtincha ajratish uchun",
      "Faralarni boshqarish uchun",
      "Yoqilg'ini filtrlash uchun",
      "Radiatorni sovutish uchun"
    ],
    answer: "Dvigatel va transmissiyani vaqtincha ajratish uchun",
  },

  {
    category: "Avto",
    question: "VIN kodi odatda nechta belgidan iborat?",
    options: ["15", "17", "18", "20"],
    answer: "17",
  },

  {
    category: "Avto",
    question: "RPM nimani bildiradi?",
    options: [
      "Dvigatel aylanishlar sonini",
      "Yoqilg'i hajmini",
      "Shina bosimini",
      "Tormoz kuchini"
    ],
    answer: "Dvigatel aylanishlar sonini",
  },

  {
    category: "Avto",
    question: "Turbocharger nima qiladi?",
    options: [
      "Dvigatelga ko'proq havo yuborishga yordam beradi",
      "Tormozni sovutadi",
      "Benzinni saqlaydi",
      "Rulni boshqaradi"
    ],
    answer: "Dvigatelga ko'proq havo yuborishga yordam beradi",
  },

  {
    category: "Avto",
    question: "Differensialning vazifasi nima?",
    options: [
      "G'ildiraklarning turli tezlikda aylanishiga imkon berish",
      "Dvigatelni sovutish",
      "Yoqilg'i sarfini o'lchash",
      "Faralarni boshqarish"
    ],
    answer: "G'ildiraklarning turli tezlikda aylanishiga imkon berish",
  },

  {
    category: "Avto",
    question: "Shina bosimi juda past bo'lsa nima sodir bo'lishi mumkin?",
    options: [
      "Yoqilg'i sarfi oshishi mumkin",
      "Motor quvvati ikki baravar oshadi",
      "Tormoz kerak bo'lmaydi",
      "Faralar kuchayadi"
    ],
    answer: "Yoqilg'i sarfi oshishi mumkin",
  },

  {
    category: "Avto",
    question: "Alternatorning vazifasi nima?",
    options: [
      "Elektr energiyasi ishlab chiqarish va akkumulyatorni zaryadlash",
      "Motorni sovutish",
      "Tormozlash",
      "Benzinni filtrlash"
    ],
    answer: "Elektr energiyasi ishlab chiqarish va akkumulyatorni zaryadlash",
  },

  {
    category: "Avto",
    question: "Airbag tizimining asosiy maqsadi nima?",
    options: [
      "To'qnashuvda jarohat xavfini kamaytirish",
      "Tezlikni oshirish",
      "Motorni sovutish",
      "Yoqilg'ini tejash"
    ],
    answer: "To'qnashuvda jarohat xavfini kamaytirish",
  },

  {
    category: "Avto",
    question: "Odometr nimani o'lchaydi?",
    options: [
      "Bosib o'tilgan masofani",
      "Tezlikni",
      "Motor haroratini",
      "Yoqilg'i bosimini"
    ],
    answer: "Bosib o'tilgan masofani",
  },

  {
    category: "Avto",
    question: "Spidometr nimani ko'rsatadi?",
    options: [
      "Avtomobil tezligini",
      "Motor moyini",
      "Masofani",
      "Akkumulyator kuchlanishini"
    ],
    answer: "Avtomobil tezligini",
  },

  {
    category: "Avto",
    question: "Katalizator avtomobilning qaysi tizimiga tegishli?",
    options: [
      "Egzoz tizimi",
      "Tormoz tizimi",
      "Rul tizimi",
      "Sovutish tizimi"
    ],
    answer: "Egzoz tizimi",
  },

  {
    category: "Avto",
    question: "Antifriz qaysi tizimda ishlatiladi?",
    options: [
      "Sovutish tizimida",
      "Tormoz tizimida",
      "Yonilg'i tizimida",
      "Rul tizimida"
    ],
    answer: "Sovutish tizimida",
  },

  {
    category: "Avto",
    question: "G'ildirak balansining buzilishi nimaga olib kelishi mumkin?",
    options: [
      "Vibratsiyaga",
      "Motor quvvatining keskin oshishiga",
      "Yoqilg'i ko'payishiga",
      "Faralar o'chishiga"
    ],
    answer: "Vibratsiyaga",
  },

  {
    category: "Avto",
    question: "4WD tizimi nimani anglatadi?",
    options: [
      "To'rt g'ildirakdan tortish",
      "To'rt pog'onali transmissiya",
      "To'rt silindrli motor",
      "To'rt xil tormoz"
    ],
    answer: "To'rt g'ildirakdan tortish",
  },

  // ============================================
  // MANTIQ — 20 TA
  // ============================================

  {
    category: "Mantiq",
    question: "2, 4, 8, 16, ?",
    options: ["20", "24", "32", "36"],
    answer: "32",
  },

  {
    category: "Mantiq",
    question: "1, 4, 9, 16, 25, ?",
    options: ["30", "36", "40", "49"],
    answer: "36",
  },

  {
    category: "Mantiq",
    question: "3, 6, 12, 24, ?",
    options: ["36", "42", "48", "52"],
    answer: "48",
  },

  {
    category: "Mantiq",
    question: "100, 90, 80, 70, ?",
    options: ["50", "55", "60", "65"],
    answer: "60",
  },

  {
    category: "Mantiq",
    question: "Agar barcha A lar B bo'lsa va barcha B lar C bo'lsa, A lar C bo'ladimi?",
    options: [
      "Ha",
      "Yo'q",
      "Faqat ba'zilari",
      "Aniqlab bo'lmaydi"
    ],
    answer: "Ha",
  },

  {
    category: "Mantiq",
    question: "5 ta olma bor edi. 2 tasini oldingiz. Sizda nechta olma bor?",
    options: ["2", "3", "5", "7"],
    answer: "2",
  },

  {
    category: "Mantiq",
    question: "Soat 3:00 bo'lganda soat va minut strelkalari orasidagi burchak qancha?",
    options: ["45°", "60°", "90°", "180°"],
    answer: "90°",
  },

  {
    category: "Mantiq",
    question: "Agar kecha dushanba bo'lgan bo'lsa, ertaga qaysi kun?",
    options: [
      "Seshanba",
      "Chorshanba",
      "Payshanba",
      "Yakshanba"
    ],
    answer: "Chorshanba",
  },

  {
    category: "Mantiq",
    question: "10 ning 20% i nechaga teng?",
    options: ["1", "2", "3", "5"],
    answer: "2",
  },

  {
    category: "Mantiq",
    question: "Bir oilada 3 o'g'il bor. Har bir o'g'ilning bitta singlisi bor. Jami nechta farzand?",
    options: ["3", "4", "6", "7"],
    answer: "4",
  },

  {
    category: "Mantiq",
    question: "2 ta tuxum 4 daqiqada pishsa, 4 ta tuxum qancha vaqtda pishadi?",
    options: ["4 daqiqa", "8 daqiqa", "6 daqiqa", "16 daqiqa"],
    answer: "4 daqiqa",
  },

  {
    category: "Mantiq",
    question: "Bir sonning yarmi 25 bo'lsa, sonning o'zi nechaga teng?",
    options: ["40", "45", "50", "75"],
    answer: "50",
  },

  {
    category: "Mantiq",
    question: "7 + 7 × 0 = ?",
    options: ["0", "7", "14", "49"],
    answer: "7",
  },

  {
    category: "Mantiq",
    question: "Ketma-ketlikni davom ettiring: A, C, E, G, ?",
    options: ["H", "I", "J", "K"],
    answer: "I",
  },

  {
    category: "Mantiq",
    question: "Agar 5 ta mashina 5 daqiqada 5 ta detal ishlab chiqarsa, 1 mashina 5 daqiqada nechta detal ishlab chiqaradi?",
    options: ["1", "5", "10", "25"],
    answer: "1",
  },

  {
    category: "Mantiq",
    question: "12, 24, 36, 48, ?",
    options: ["50", "54", "60", "72"],
    answer: "60",
  },

  {
    category: "Mantiq",
    question: "Agar barcha mushuklar hayvon bo'lsa, barcha hayvonlar mushukmi?",
    options: [
      "Ha",
      "Yo'q",
      "Faqat uy hayvonlari",
      "Aniqlab bo'lmaydi"
    ],
    answer: "Yo'q",
  },

  {
    category: "Mantiq",
    question: "3 ta ketma-ket natural sonning yig'indisi 18. O'rtadagi son nechaga teng?",
    options: ["5", "6", "7", "8"],
    answer: "6",
  },

  {
    category: "Mantiq",
    question: "Bir daraxtda 10 ta qush bor edi. Ovchi bittasini otdi. Daraxtda nechta qush qoldi?",
    options: ["0", "1", "9", "10"],
    answer: "0",
  },

  {
    category: "Mantiq",
    question: "Agar 2 + 3 = 10, 3 + 4 = 21, 4 + 5 = 36 bo'lsa, 5 + 6 = ?",
    options: ["45", "50", "55", "60"],
    answer: "55",
  },

  // ============================================
  // MUSIQA — 20 TA
  // ============================================

  {
    category: "Musiqa",
    question: "Gitara odatda nechta torli bo'ladi?",
    options: ["4", "5", "6", "7"],
    answer: "6",
  },

  {
    category: "Musiqa",
    question: "Pianinoda standart nechta klavish bor?",
    options: ["76", "88", "92", "100"],
    answer: "88",
  },

  {
    category: "Musiqa",
    question: "Musiqadagi 'tempo' nimani bildiradi?",
    options: [
      "Ijro tezligini",
      "Ovoz balandligini",
      "Asbob turini",
      "Matn uzunligini"
    ],
    answer: "Ijro tezligini",
  },

  {
    category: "Musiqa",
    question: "Michael Jackson qaysi laqab bilan mashhur?",
    options: [
      "King of Pop",
      "King of Rock",
      "King of Jazz",
      "King of Soul"
    ],
    answer: "King of Pop",
  },

  {
    category: "Musiqa",
    question: "The Beatles qaysi davlatdan chiqqan?",
    options: [
      "Buyuk Britaniya",
      "AQSh",
      "Kanada",
      "Avstraliya"
    ],
    answer: "Buyuk Britaniya",
  },

  {
    category: "Musiqa",
    question: "Freddie Mercury qaysi guruhning solisti bo'lgan?",
    options: [
      "Queen",
      "ABBA",
      "Metallica",
      "Nirvana"
    ],
    answer: "Queen",
  },

  {
    category: "Musiqa",
    question: "Mozart qaysi davrning mashhur kompozitori?",
    options: [
      "Klassik davr",
      "Renessans",
      "Barokko",
      "Romantizm"
    ],
    answer: "Klassik davr",
  },

  {
    category: "Musiqa",
    question: "Skripka nechta torli?",
    options: ["3", "4", "5", "6"],
    answer: "4",
  },

  {
    category: "Musiqa",
    question: "Baraban qaysi asboblar oilasiga kiradi?",
    options: [
      "Urma cholg'ular",
      "Torli",
      "Nafasli",
      "Klavishli"
    ],
    answer: "Urma cholg'ular",
  },

  {
    category: "Musiqa",
    question: "Gitara qaysi turdagi cholg'u?",
    options: [
      "Torli",
      "Nafasli",
      "Urma",
      "Klavishli"
    ],
    answer: "Torli",
  },

  {
    category: "Musiqa",
    question: "Opera qaysi san'at turlarini birlashtiradi?",
    options: [
      "Musiqa va teatr",
      "Faqat raqs",
      "Faqat tasviriy san'at",
      "Faqat kino"
    ],
    answer: "Musiqa va teatr",
  },

  {
    category: "Musiqa",
    question: "DJ qisqartmasi nimani anglatadi?",
    options: [
      "Disc Jockey",
      "Digital Jam",
      "Dance Judge",
      "Disc Judge"
    ],
    answer: "Disc Jockey",
  },

  {
    category: "Musiqa",
    question: "Grammy mukofoti qaysi soha bilan bog'liq?",
    options: [
      "Musiqa",
      "Kino",
      "Sport",
      "Adabiyot"
    ],
    answer: "Musiqa",
  },

  {
    category: "Musiqa",
    question: "Nirvana guruhining mashhur solisti kim bo'lgan?",
    options: [
      "Kurt Cobain",
      "Freddie Mercury",
      "John Lennon",
      "Elvis Presley"
    ],
    answer: "Kurt Cobain",
  },

  {
    category: "Musiqa",
    question: "Elvis Presley qaysi janr rivojiga katta hissa qo'shgan?",
    options: [
      "Rock and Roll",
      "Classical",
      "Opera",
      "Reggae"
    ],
    answer: "Rock and Roll",
  },

  {
    category: "Musiqa",
    question: "Saksofon qaysi turdagi cholg'u?",
    options: [
      "Nafasli",
      "Torli",
      "Urma",
      "Klavishli"
    ],
    answer: "Nafasli",
  },

  {
    category: "Musiqa",
    question: "Bass gitara odatda oddiy gitaraga qaraganda qanday tovush beradi?",
    options: [
      "Pastroq",
      "Yuqoriroq",
      "Bir xil",
      "Faqat shovqin"
    ],
    answer: "Pastroq",
  },

  {
    category: "Musiqa",
    question: "Nota yozuvida 'Do-Re-Mi' nimani bildiradi?",
    options: [
      "Musiqiy tovush nomlarini",
      "Asbob nomlarini",
      "Raqs turlarini",
      "Tempo belgilarini"
    ],
    answer: "Musiqiy tovush nomlarini",
  },

  {
    category: "Musiqa",
    question: "ABBA guruhi qaysi davlatdan?",
    options: [
      "Shvetsiya",
      "Angliya",
      "AQSh",
      "Germaniya"
    ],
    answer: "Shvetsiya",
  },

  {
    category: "Musiqa",
    question: "Reggae musiqasi qaysi davlat bilan ko'proq bog'liq?",
    options: [
      "Yamayka",
      "Ispaniya",
      "Italiya",
      "Yaponiya"
    ],
    answer: "Yamayka",
  },
];