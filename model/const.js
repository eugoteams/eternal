/** @format */

export const fontSizes = ["sm", "md", "l"];
export const fontTypes = ["open sans", "popins"];
export const FONT_1 = `"Poppins", sans-serif`;
export const FONT_2 = `'Noto Sans Devanagari', sans-serif`;
export const STORAGE_KEY = "HARE_KRISHNA";
export const GITA_CH = "GITA_CHAPTERS";
export const PERSIST_SETTING = "setting";
export const TRANSLATION_LANG = [
  { id: "et", name: "english" },
  { id: "ht", name: "hindi" },
  { id: "sc", name: "sanskrit" },
];
export const defaultAuthors = {
  et: {
    id: "gambir",
    name: "Swami Gambirananda",
    translationLang: ["et"],
    description:
      "Swami Gambirananda was a distinguished monk of the Ramakrishna Order who dedicated his life to the study, practice, and dissemination of Vedanta philosophy and spiritual teachings.",
  },
  ht: {
    id: "rams",
    name: "Swami Ramsukhdas",
    translationLang: ["ht", "hc"],
    description:
      "Swami Ramsukhdas Ji was a renowned Hindu saint and spiritual teacher, known for his teachings on Bhakti (devotion), self-realization, and the practical application of spiritual principles in daily life.",
  },
  sc: {
    id: "sankar",
    name: "Sri Shankaracharya",
    translationLang: ["ht", "sc", "et"],
    description:
      "Adi Shankara was an 8th-century Indian philosopher and theologian who revitalized and systematized Advaita Vedanta, advocating the non-dualistic understanding of reality and contributing significantly to Hindu philosophy.",
  },
};
export const defaultSetting = {
  fontSize: { sloak: 1.5, translation: 1.5 },
  fontType: "",
  chapters: [],
  fontStyle: FONT_1,
  translationTo: "et",
  author: defaultAuthors["et"],
  readingPreference: "translation",
  transliterationInline: true,
  wordMeaning: false,
  player: { chapter: 0, sloakId: 0, playState: false },
};

export const AUTHORS = [
  {
    id: "rams",
    name: "Swami Ramsukhdas",
    translationLang: ["ht", "hc"],
    description:
      "Swami Ramsukhdas Ji was a renowned Hindu saint and spiritual teacher, known for his teachings on Bhakti (devotion), self-realization, and the practical application of spiritual principles in daily life.",
  },
  {
    id: "chinmay",
    name: "Swami Chinmayananda",
    translationLang: ["hc"],
    description:
      "Swami Chinmayananda was a prominent Indian spiritual teacher who disseminated Advaita Vedanta philosophy, inspiring individuals to lead purposeful lives through self-discovery and spiritual wisdom.",
  },
  {
    id: "anand",
    name: "Sri Anandgiri",
    translationLang: ["sc"],
    description:
      "Anandagiri Tika is a commentary written by Anandagiri on various Hindu scriptures, providing profound insights and explanations to enhance the understanding of spiritual and philosophical texts.",
  },
  {
    id: "dhan",
    name: "Sri Dhanpati",
    translationLang: ["sc"],
    description: "prominent hindu scholar.",
  },
  {
    id: "madhav",
    name: "Sri Madhavacharya",
    translationLang: ["sc"],
    description:
      "Sri Madhavacharya was a 13th-century Indian philosopher and theologian who founded the Dvaita Vedanta school of thought, emphasizing the distinct dualistic nature of the individual soul and the supreme reality.",
  },
  {
    id: "neel",
    name: "Sri Neelkanth",
    translationLang: ["sc"],
    description:
      "Swaminarayan Yogi refers to Sahajanand Swami, also known as Bhagwan Swaminarayan, who was a revered spiritual leader and the founder of the Swaminarayan Sampradaya, emphasizing devotion, ethical living, and the worship of Lord Swaminarayan as the ultimate reality.",
  },

  {
    id: "srid",
    name: "Sri Sridhara Swami",
    translationLang: ["sc"],
    description:
      "Sridhara Swami was a revered Hindu philosopher and commentator who provided profound insights into Vedanta through his commentaries on various scriptures, illuminating the path of spiritual understanding.",
  },

  {
    id: "jaya",
    name: "Sri Jayatritha",
    translationLang: ["sc"],
    description:
      "Jayatirtha was a prominent 16th-century philosopher and disciple of Madhvacharya who contributed to the Dvaita Vedanta tradition through his writings and interpretations of Vedic philosophy.",
  },
  {
    id: "ms",
    name: "Sri Madhusudan Saraswati",
    translationLang: ["sc"],
    description:
      "Madhusudana Saraswati was a 16th-century Advaita Vedanta philosopher who harmoniously integrated non-dualistic philosophy with devotional aspects, enriching the understanding of spiritual knowledge and practice.",
  },
  {
    id: "puru",
    name: "Sri Purushottamji",
    translationLang: ["sc"],
    description: "no data found",
  },
  {
    id: "sankar",
    name: "Sri Shankaracharya",
    translationLang: ["ht", "sc", "et"],
    description:
      "Adi Shankara was an 8th-century Indian philosopher and theologian who revitalized and systematized Advaita Vedanta, advocating the non-dualistic understanding of reality and contributing significantly to Hindu philosophy.",
  },
  {
    id: "vallabh",
    name: "Sri Vallabhacharya",
    translationLang: ["sc"],
    description:
      "Vallabhacharya was a 16th-century Hindu philosopher and spiritual leader who founded the Pushti Marg tradition, emphasizing devotion to Lord Krishna and the path of divine grace.",
  },
  {
    id: "siva",
    name: "Swami Sivananda",
    translationLang: ["et", "ec"],
    description:
      "Guru Sivananda was a revered Hindu spiritual teacher and founder of the Divine Life Society, promoting holistic yoga practices, Vedanta teachings, and selfless service for spiritual evolution.",
  },
  {
    id: "tej",
    name: "Swami Tejomayananda",
    translationLang: ["ht"],
    description:
      "Swami Tejomayananda was a prominent spiritual teacher and former head of the Chinmaya Mission, dedicated to disseminating Vedanta and promoting spiritual growth through self-knowledge and service.",
  },
  {
    id: "adi",
    name: "Swami Adidevananda",
    translationLang: ["et"],
    description:
      "Swami Adidevananda (1912 – 1983) was an Indian monk of the Ramakrishna Mission. Swami Adidevananda.",
  },
  {
    id: "gambir",
    name: "Swami Gambirananda",
    translationLang: ["et"],
    description:
      "Swami Gambirananda was a distinguished monk of the Ramakrishna Order who dedicated his life to the study, practice, and dissemination of Vedanta philosophy and spiritual teachings.",
  },
  {
    id: "san",
    name: "Dr. S. Sankaranarayan",
    translationLang: ["et"],
    description: "no data found",
  },
  {
    id: "purohit",
    name: "Shri Purohit Swami",
    translationLang: ["et"],
    description:
      "Shri Purohit Swami was a revered spiritual teacher and disciple of Ramana Maharshi, known for his deep insight into Advaita Vedanta and his guidance on the path of self-inquiry and self-realization.",
  },
];
