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

export const CHAPTERS_DROP_DOWN = [
  {
    label: "Arjuna's Dilemma",
    value: "Arjuna's Dilemma",
  },
  {
    label: "Sankhya Yoga",
    value: "Sankhya Yoga",
  },
  {
    label: "Karma Yoga",
    value: "Karma Yoga",
  },
  {
    label: "Jnana Karma Sanyasa Yoga",
    value: "Jnana Karma Sanyasa Yoga",
  },
  {
    label: "Karma Sanyasa Yoga",
    value: "Karma Sanyasa Yoga",
  },
  {
    label: "Dhyana Yoga",
    value: "Dhyana Yoga",
  },
  {
    label: "Gyaan Vigyana Yoga",
    value: "Gyaan Vigyana Yoga",
  },
  {
    label: "Akshara Brahma Yoga",
    value: "Akshara Brahma Yoga",
  },
  {
    label: "Raja Vidya Yoga",
    value: "Raja Vidya Yoga",
  },
  {
    label: "Vibhooti Yoga",
    value: "Vibhooti Yoga",
  },
  {
    label: "Vishwaroopa Darshana Yoga",
    value: "Vishwaroopa Darshana Yoga",
  },
  {
    label: "Bhakti Yoga",
    value: "Bhakti Yoga",
  },
  {
    label: "Ksetra Ksetrajna Vibhaaga Yoga",
    value: "Ksetra Ksetrajna Vibhaaga Yoga",
  },
  {
    label: "Gunatraya Vibhaga Yoga",
    value: "Gunatraya Vibhaga Yoga",
  },
  {
    label: "Purushottama Yoga",
    value: "Purushottama Yoga",
  },
  {
    label: "Daivasura Sampad Vibhaga Yoga",
    value: "Daivasura Sampad Vibhaga Yoga",
  },
  {
    label: "Sraddhatraya Vibhaga Yoga",
    value: "Sraddhatraya Vibhaga Yoga",
  },
  {
    label: "Moksha Sanyaas Yoga",
    value: "Moksha Sanyaas Yoga",
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
