/** @format */
export const ICON_SIZE = 15;
export const ICON_COLOR = "#5c7cfa";
export const fontSizes = ["sm", "md", "l"];
export const fontTypes = ["open sans", "popins"];
export const readingPrefSwitch = [
  {
    label: "translation",
    value: "translation",
  },
  {
    label: "reading",
    value: "reading",
  },
];
export const fontToggleBtx = [
  {
    label: "noto sans devanagiri",
    value: `'Noto Sans Devanagari', sans-serif`,
    description:
      " Noto is a global font collection for writing in all modern and ancient languages. Noto Sans Devanagari is an unmodulated (“sans serif”) design for texts in the Indic ",
  },
  {
    label: "poppins",
    value: `"Poppins", sans-serif`,
    description:
      "Poppins is desgined by Indian Type Foundry , this font is widley used for printing vedic scripts and on web for ancient scripts.",
  },
];

export const STORAGE_KEY = "HARE_KRISHNA";
export const GITA_CH = "GITA_CHAPTERS";
export const PERSIST_SETTING = "setting";
export const TRANSLATION_LANG = [
  { id: "et", name: "english" },
  { id: "ht", name: "hindi" },
];
export const LOCAL_DATA = [
  {
    value: "et",
    label: "english",
  },
  { value: "ht", label: "hindi" },
];
export const CONTENT_TYPE_DATA = ["translation", "transliteration"];
export const W_DISPLAY_DATA = ["tooltip", "in-line"];
export const defaultAuthors = {
  et: "gambir",
  ht: "rams",
  sc: "sankar",
};
export const defaultSetting = {
  navigation: {
    chapter: "Arjuna's Dilemma",
    sloks: 0,
    navigationIsVisible: false,
  },
  gitaReaderStyles: { gitaFont: fontToggleBtx[1]["value"] },
  readingPreferencesN: {
    readingPreference: "translation",
    wordByWordLocale: "et",
    wordByWordContentType: [],
    wordByWordDisplay: [],
    readingPreferenceTranslator: defaultAuthors["et"],
  },
};

export const CHAPTERS_MENU = [
  {
    label: "Arjuna Visada Yoga",
    value: "Arjuna Visada Yoga",
    meaning: { en: "Arjuna's Dilemma", hi: "अर्जुन विषाद योग" },

    verses: 47,
  },
  {
    label: "Sankhya Yoga",
    value: "Sankhya Yoga",
    meaning: { en: "Transcendental Knowledge", hi: "गीता का सार" },
    verses: 72,
  },
  {
    label: "Karma Yoga",
    value: "Karma Yoga",
    meaning: { en: "Path of Selfless Service", hi: "कर्मयोग" },
    verses: 43,
  },
  {
    label: "Jnana Karma Sanyasa Yoga",
    value: "Jnana Karma Sanyasa Yoga",
    meaning: {
      en: "Path of Knowledge and the Disciplines of Action",
      hi: "दिव्य ज्ञान",
    },
    verses: 42,
  },
  {
    label: "Karma Sanyasa Yoga",
    value: "Karma Sanyasa Yoga",
    meaning: {
      en: "Path of Renunciation",
      hi: "कर्मयोग-कृष्णभावनाभावित कर्म",
    },
    verses: 29,
  },
  {
    label: "Dhyana Yoga",
    value: "Dhyana Yoga",
    meaning: { en: "Path of Meditation", hi: "ध्यानयोग" },
    verses: 47,
  },
  {
    label: "Gyaan Vigyana Yoga",
    value: "Gyaan Vigyana Yoga",
    meaning: { en: "Self-Knowledge and Enlightenment", hi: "भगवद्ज्ञान" },
    verses: 30,
  },
  {
    label: "Akshara Brahma Yoga",
    value: "Akshara Brahma Yoga",
    meaning: { en: "Path of the Eternal God", hi: "भगवत्प्राप्ति" },
    verses: 28,
  },
  {
    label: "Raja Vidya Yoga",
    value: "Raja Vidya Yoga",
    meaning: {
      en: "Yoga through the King of Sciences",
      hi: "परम गुह्य ज्ञान",
    },
    verses: 34,
  },
  {
    label: "Vibhooti Yoga",
    value: "Vibhooti Yoga",
    meaning: {
      en: "Yoga through Appreciating the Infinite Opulences of God",
      hi: "श्री भगवान् का ऐश्वर्य",
    },
    verses: 42,
  },
  {
    label: "Vishwaroopa Darshana Yoga",
    value: "Vishwaroopa Darshana Yoga",
    meaning: {
      en: "Yoga through Beholding the Cosmic Form of God",
      hi: "विराट रूप",
    },
    verses: 55,
  },
  {
    label: "Bhakti Yoga",
    value: "Bhakti Yoga",
    meaning: { en: "The Yoga of Devotion", hi: "भक्तियोग" },
    verses: 20,
  },
  {
    label: "Ksetra Ksetrajna Vibhaaga Yoga",
    value: "Ksetra Ksetrajna Vibhaaga Yoga",
    meaning: {
      en: "Yoga through Distinguishing the Field and the Knower of the Field",
      hi: "प्रकृति, पुरुष तथा चेतना",
    },
    verses: 35,
  },
  {
    label: "Gunatraya Vibhaga Yoga",
    value: "Gunatraya Vibhaga Yoga",
    meaning: {
      en: "Yoga through Understanding the Three Modes of Material Nature",
      hi: "प्रकृति के तीन गुण",
    },
    verses: 27,
  },
  {
    label: "Purushottama Yoga",
    value: "Purushottama Yoga",
    meaning: {
      en: "The Yoga of the Supreme Divine Personality",
      hi: "पुरुषोत्तम योग",
    },
    verses: 20,
  },
  {
    label: "Daivasura Sampad Vibhaga Yoga",
    value: "Daivasura Sampad Vibhaga Yoga",
    meaning: {
      en: "Yoga through Discerning the Divine and Demoniac Natures",
      hi: "दैवी तथा आसुरी स्वभाव",
    },
    verses: 24,
  },
  {
    label: "Sraddhatraya Vibhaga Yoga",
    value: "Sraddhatraya Vibhaga Yoga",
    meaning: {
      en: "Yoga through Discerning the Three Divisions of Faith",
      hi: "श्रद्धा के विभाग",
    },
    verses: 28,
  },
  {
    label: "Moksha Sanyaas Yoga",
    value: "Moksha Sanyaas Yoga",
    meaning: {
      en: "Yoga through the Perfection of Renunciation and Surrender",
      hi: "उपसंहार-संन्यास की सिद्धि",
    },
    verses: 78,
  },
];

export const translators = [
  {
    value: "rams",
    label: "Swami Ramsukhdas",
    translationlang: ["ht", "hc"],
    description:
      "Swami Ramsukhdas Ji was a renowned Hindu saint and spiritual teacher, known for his teachings on Bhakti (devotion), self-realization, and the practical application of spiritual principles in daily life.",
  },
  {
    value: "chinmay",
    label: "Swami Chinmayananda",
    translationlang: ["hc"],
    description:
      "Swami Chinmayananda was a prominent Indian spiritual teacher who disseminated Advaita Vedanta philosophy, inspiring individuals to lead purposeful lives through self-discovery and spiritual wisdom.",
  },
  {
    value: "anand",
    label: "Sri Anandgiri",
    translationlang: ["sc"],
    description:
      "Anandagiri Tika is a commentary written by Anandagiri on various Hindu scriptures, providing profound insights and explanations to enhance the understanding of spiritual and philosophical texts.",
  },
  {
    value: "dhan",
    label: "Sri Dhanpati",
    translationlang: ["sc"],
    description: "prominent hindu scholar.",
  },
  {
    value: "madhav",
    label: "Sri Madhavacharya",
    translationlang: ["sc"],
    description:
      "Sri Madhavacharya was a 13th-century Indian philosopher and theologian who founded the Dvaita Vedanta school of thought, emphasizing the distinct dualistic nature of the individual soul and the supreme reality.",
  },
  {
    value: "neel",
    label: "Sri Neelkanth",
    translationlang: ["sc"],
    description:
      "Swaminarayan Yogi refers to Sahajanand Swami, also known as Bhagwan Swaminarayan, who was a revered spiritual leader and the founder of the Swaminarayan Sampradaya, emphasizing devotion, ethical living, and the worship of Lord Swaminarayan as the ultimate reality.",
  },

  {
    value: "srid",
    label: "Sri Sridhara Swami",
    translationlang: ["sc"],
    description:
      "Sridhara Swami was a revered Hindu philosopher and commentator who provided profound insights into Vedanta through his commentaries on various scriptures, illuminating the path of spiritual understanding.",
  },

  {
    value: "jaya",
    label: "Sri Jayatritha",
    translationlang: ["sc"],
    description:
      "Jayatirtha was a prominent 16th-century philosopher and disciple of Madhvacharya who contributed to the Dvaita Vedanta tradition through his writings and interpretations of Vedic philosophy.",
  },
  {
    value: "ms",
    label: "Sri Madhusudan Saraswati",
    translationlang: ["sc"],
    description:
      "Madhusudana Saraswati was a 16th-century Advaita Vedanta philosopher who harmoniously integrated non-dualistic philosophy with devotional aspects, enriching the understanding of spiritual knowledge and practice.",
  },
  {
    value: "puru",
    label: "Sri Purushottamji",
    translationlang: ["sc"],
    description: "description of the author not found.",
  },
  {
    value: "sankar",
    label: "Sri Shankaracharya",
    translationlang: ["ht", "sc", "et"],
    description:
      "Adi Shankara was an 8th-century Indian philosopher and theologian who revitalized and systematized Advaita Vedanta, advocating the non-dualistic understanding of reality and contributing significantly to Hindu philosophy.",
  },
  {
    value: "vallabh",
    label: "Sri Vallabhacharya",
    translationlang: ["sc"],
    description:
      "Vallabhacharya was a 16th-century Hindu philosopher and spiritual leader who founded the Pushti Marg tradition, emphasizing devotion to Lord Krishna and the path of divine grace.",
  },
  {
    value: "siva",
    label: "Swami Sivananda",
    translationlang: ["et", "ec"],
    description:
      "Guru Sivananda was a revered Hindu spiritual teacher and founder of the Divine Life Society, promoting holistic yoga practices, Vedanta teachings, and selfless service for spiritual evolution.",
  },
  {
    value: "tej",
    label: "Swami Tejomayananda",
    translationlang: ["ht"],
    description:
      "Swami Tejomayananda was a prominent spiritual teacher and former head of the Chinmaya Mission, dedicated to disseminating Vedanta and promoting spiritual growth through self-knowledge and service.",
  },
  {
    value: "adi",
    label: "Swami Adidevananda",
    translationlang: ["et"],
    description:
      "Swami Adidevananda (1912 – 1983) was an Indian monk of the Ramakrishna Mission. Swami Adidevananda.",
  },
  {
    value: "gambir",
    label: "Swami Gambirananda",
    translationlang: ["et"],
    description:
      "Swami Gambirananda was a distinguished monk of the Ramakrishna Order who dedicated his life to the study, practice, and dissemination of Vedanta philosophy and spiritual teachings.",
  },
  {
    value: "san",
    label: "Dr. S. Sankaranarayan",
    translationlang: ["et"],
    description: "no data found",
  },
  {
    value: "purohit",
    label: "Shri Purohit Swami",
    translationlang: ["et"],
    description:
      "Shri Purohit Swami was a revered spiritual teacher and disciple of Ramana Maharshi, known for his deep insight into Advaita Vedanta and his guidance on the path of self-inquiry and self-realization.",
  },
];
