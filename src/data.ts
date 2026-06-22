import { MenuItem, Review, GalleryItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // Signature Kebabs
  {
    name: 'Galauti Kebab',
    description: '.',
    price: '₹450',
    category: 'kebab',
  },
  {
    name: 'Kakori Kebab',
    description: "The world's softest seekh kebab, flavored with saffron and rose.",
    price: '₹480',
    category: 'kebab',
  },
  {
    name: 'Boti Kebab',
    description: 'Succulent cubes of lamb marinated overnight in a rich yogurt blend.',
    price: '₹420',
    category: 'kebab',
  },
  // Specialties
  {
    name: 'Lucknowi Dum Biryani',
    description: "Long-grain Basmati rice and tender goat meat layered and cooked on 'Dum' (slow-steam).",
    price: '₹550',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiWzmsY5vqGMry9pl6RwEjTG98BDle6zRLA5fmj-Un7a7TBFdLXh-TCzIx-HNOd61FAfJYDtVNry22_9EGC1A4ma1jHH0kM39tN5K3qUzQWXwWoQ4IKQKmjU42H7NRtxmfHROJz72mS4ZNccJDdX8tDcV15nKU95SVAYvpkM3O0ggm2zfliuWZXQTTmszMjccd12WntoJvABQqDUfa2fTq91mbfFqjBLNWJZGx7lAwDVfwVlz_WgzqlhnnByApX1tbgusSaM09Wi2R',
    category: 'specialty',
  },
  {
    name: 'Nihari Gosht',
    description: 'A traditional breakfast-to-lunch stew, slow-cooked overnight with marrow and specialized spices.',
    price: '₹580',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBp71ZpVbajPRxWSPIPpj0wE3BnH21PnM2mYh3uBTdCuAaJSgIMo7hdjAMPLsrG_9mv_ST34UKihrV_a1BaW-97zWsbAoBEe-Xz8KEVW5dZupi2KOn89O4BLp571Ufw-1d_iEmJP8Odip7agm6JSyJho4GXQ5-1AkqSmZ3z0O8m3S2S-QxOmF7KshsKGkk7V7T412A66KArB9fbpsjvjO42zKp80Y1tnJgX-pewOBbr7fHKjfEy8VVDqewITq-rf7h_7uRT3-A_ggTC',
    category: 'specialty',
  },
  // Mithaas
  {
    name: 'SHAHI TUKDA',
    description: 'Golden fried bread soaked in saffron milk and rabri, garnished with silver vark and crushed nuts.',
    price: '60/-',
    image: 'https://www.palatesdesire.com/wp-content/uploads/2021/05/shahi-tukda-recipe@palates-desire-2-1024x683.jpg',
    category: 'dessert',
  },
  {
    name: 'SHAHI KHEER',
    description: 'Traditional Shahi Kheer rice pudding served in an earthenware bowl, topped with slivered almonds and pistachios.',
    price: '60/-',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByMGhqr6pAGCd3EuaWX3g5MZRuJmYQRvtvJ0bJc8YD-ad24xglLqU5EriaB9aY3giiHu1rD2c3zJP0efEcJGwFZDY7NH7HmhnE9JABgMru7IErMnkY0jmKbaxGek6a5oEKcVzw9yujsKFbSBGu3Xvx6JSlF7Mv1_0tkeAfoTTwuTVpQMBvd2V4qAZ2D15ysSil8GMndQWfGyEaYAGj_lzqg3aC2dVuPBLc0d4l36w2siNrTg6WHMl8wBq1HswMceMZoFkUrjZ3BXbS',
    category: 'dessert',
  },
  {
    name: 'KALI GAJAR HALWA',
    description: 'Premium purple carrot halwa slow-cooked.',
    price: '99/-',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaTo7VAvflZqvxkjZcVfuf65HOiWEiiBBLk67ffE3dDQ&s=10',
    category: 'dessert',
  },
  // Beverages
  {
    name: 'WATER BOTTLE',
    price: '10/- | 20/-',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAeoFdkotTjqpR7_R0y6vvoh69kQy2DkbQOJYiBmHWaOSdaWv_JyO6XIpDoWRVKLdInUXj6Ci20DC7Otn2Trw4uGxirJ-Py2jHn_d6FSpkCQDJnlYaUNYyp0NiJNc3RZTz8IMsBh1T3byzUWCywiOJXLrjnMq-5L1smEjdqmx4Z3dYXf4y8G53zkHfkQXbnxeUXQwJFNgjcWeJTUTba7bupMmwldY_LkXNapJ7lKN65wx77STlK-OFS98AcB7CLzJn3borFTONC2keP',
    category: 'beverage',
  },
  {
    name: 'COLDRINKS',
    price: '20/-',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZ80OzkYgI0qx69wC0-f3HbxDYRQ2sV0-frdoSt8EWm-7D7mchH0xW_b3N6QrGIoa0pfknQCxNKH2m5TkRPsxC8sOQjEGc9mJkaRsbSxO6clQbRZyCl5tMMhWUxy_zdTLg-gAzE1_A-wmKtEaVhM94DythS80DeHZS-mxVPZ3zl8kLSV1laJ4ktJRzMFvsnv1nOOVsHByVvNsSWqfEn9DLI6ALg7Eq_0uilsuDtFuRKf343PtPILI6OuWMKOT20fvFeDJOoLy9wLba',
    category: 'beverage',
  },
  {
    name: 'MASALA COLD DRINK',
    price: '30/-',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxRLcDtx28QOt1C5yBfD3OKZ-rEFrza4kWwrneP9ReaboYarvwDS1OYEqw7JldWAzA24dsvzgQDtY3uBy1bk2lkeWHHWn-L6XgwvJ_URzLAvoas9F5sMWkvJMz1Quc5eXuWB9x_WrPS0z1EvMpVf7GMzcSgvPEvsp_D6szQLwA9py7U-XHmdjo5tIVIuWqHFSv96-50natllcPIU8YYXWzjlPnQdQO4ecu2N1GhsbA5YRWkbgLUWRP8t5inerFzxwUlwBUBMq8d4OU',
    category: 'beverage',
  },
  {
    name: 'MOJITO',
    price: '50/-',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZ80OzkYgI0qx69wC0-f3HbxDYRQ2sV0-frdoSt8EWm-7D7mchH0xW_b3N6QrGIoa0pfknQCxNKH2m5TkRPsxC8sOQjEGc9mJkaRsbSxO6clQbRZyCl5tMMhWUxy_zdTLg-gAzE1_A-wmKtEaVhM94DythS80DeHZS-mxVPZ3zl8kLSV1laJ4ktJRzMFvsnv1nOOVsHByVvNsSWqfEn9DLI6ALg7Eq_0uilsuDtFuRKf343PtPILI6OuWMKOT20fvFeDJOoLy9wLba',
    category: 'beverage',
  },
];

export const REVIEWS: Review[] = [
  {
    name: 'Aditya Verma',
    role: 'Food Critic',
    stars: 5,
    content: '"The Galouti kebabs literally melt in your mouth. I haven\'t tasted such authentic Awadhi flavor outside of Aminabad. Absolutely royal!"',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCM1yZx-ydIBSi66A7glgd6_QnRL6jG1VtKW1cHRYC9EdsbfXng2IDGDBKwQKGC1J6GfdK_MSr2qY0jFd27eTawwzE4z0q9ykEii9Io3bmKy6bpwqR6gCMi8Bibh-AGqtRjK8oMSFv-389e2JgAuSW_s2dx0k3C4-SbfeKDGmKexgXtsjvi0OtUz1iT69Tfi-m2e3LS6wpH6K47tBlMDlZnoJDEctixKtKT5B0z8BiXLwuOD7LCmSLM1b8iSxGpp4X7zuT-GDKAPxrF',
  },
  {
    name: 'Priya Sharma',
    role: 'Lifestyle Blogger',
    stars: 5,
    content: '"Their Biryani is a masterpiece. Each grain of rice is perfectly cooked and infused with the most delicate aroma of saffron and mace."',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTJqTfciEDkMDWr99ck09FgFdJVwG8Mb85BrOQBS4YbDWUsqQOsRZaQolua2oCLo84xdDIFO9Ao6arzHfq-Cw_DhUCVvHVRONn2QPXciBr45Cl4OcWd4Oi5PqrsGjbwru_XZbkqyHQTcjQnmEasjTKMH1kMzr-9HzEyqEMiNttU5kTWkGr6Pn_8OHC0x6Qczfn3uPVLNFHVx2K0w1T9zB2k7yX848AuSiJjcy5Ym46OqDUG-Qg27fJMY5s4YL77IJaIVItQcDUWeut',
  },
  {
    name: 'Zaid Ibrahim',
    role: 'Regular Guest',
    stars: 5,
    content: '"The ambiance takes you back to the Mughal era. The staff\'s hospitality is truly \'Pehle Aap\' in spirit. Best dinner in months."',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYLUhzCWMJffSf4_UxT0DBPe5qUD7dcO6i-vytwje0QfYfkkMXAj7dilgXIer48r-jh5CQV88FFAfIaE4V2La5PiT5XYqhWGUPGUSGa2PI38DJRpDZ9S0kAZN4ZcqRSF48fawSUnZ-2uGExPhA7a0IUasgAS44pZcAAW-KbXbEFbY3aGlhGY-YTjzgpRCaRaG7VRcVQLwjQ2_JUE6ANkboKPcA-4ljbtoGN1tm5TtME6z2mH3eD4XqQU_TTrpLPhosSj6pWyCgJtQL',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'entrance',
    title: 'A Grand Welcome to Tradition',
    subtitle: 'The Entrance',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD90vBcwWDFbLQw8v7xuFdj7vtUoGYkXKmdR_GNzmAntd6SrHt1ZX4pKrbIcJil8YlON2VtVlae6zUv7L-Xhhjk9LvS3IMDsjpm0XlvaBioF3sRoA_5DcOuUZU3ujXR0F_zpz5Ejhpw3VsC7MUA8q2zwTTmy0pX-7MrSKzdYrqHwsMyIwVd8ozKmJuPHg7GfSJUlX0pXmYnXujyh21aqSuLXhTQgUOX_QBHS14yADAE6sNhTJNkpDWYulOdV78NQbA8_G5PO1-3ftfG',
    category: 'ambiance',
  },
  {
    id: 'interior',
    title: 'Regal Ambiance',
    subtitle: 'Interior',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLzxF_6JWlsgvmnqM_bge2jr5nCve4ero6ZCCi9gtgJ5nCXgiQ81faK5dacDjMSGBopUmgX84Qkng1aAYNtTU6FI5f3NcIPR4mJiERPN6hzVcqSv1T4LN4dPVKfhVpvov-ktFy_HU3Kky7klqrpRCibSHLxoSzJlPy6Zikldg3v9j41OyzDMSvfAP_7QpYNAcyxw6C4hQxn5eBEEQ82mJmDok7owWXGKQGkqLpc8LLI9FcDmRwgcNqtMuBdo-2NtqEU5rApcjevT8P',
    category: 'ambiance',
  },
  {
    id: 'biryani',
    title: 'Awadhi Dum Biryani',
    subtitle: 'Chef\'s Special',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQNzbdh6EDJ45s6__jqRU2bNlapMsOMAWcZFaJ7PQ8H1sbo_FQQSao2AF40o6pY5i6F3aCFVx_fNXPPZRuE2RRLszY5QO0MTP28svWeDSDwBhX8m6fLYgfid37o-dkerb1ZYt1RMlILc6LL51ev0_7uFj2ANDFZLFbkWZnmEhz9qPYGf3M9a6wZIaRDenaoAst8hY-HBQmB55xiGfbydxfON56IJJ3zSS-ghtNMN40xtCUjLdW-wiPU8ukcItLQF-tNmRNrHl6bjud',
    category: 'gastronomy',
    chefSpecial: true,
  },
  {
    id: 'grill',
    title: 'The Street Soul',
    subtitle: 'Live Cooking',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUTDrxpiOvXfwZkTwv5XxoXn3dIamNGDbNM1lwy48Zu34jMKKsuqIaD2_E40GnpT4cw9M46cgNZC1Z4EpveChrml8-O7FMif5yu-sqj9q0Iu9b68x9ivkeImFkW0uVM6aVyxfD-KDUaWuwONGkpFRBPuxHJOIeBY_DRj1JrXEFVT9VbgLK6_hEpDXRC0paJ60uDtax_L8XVH2QDDBNH1T0VYNQ2ewVPyaWCx-cgcSOt5fd3nMXBY896LIR3HvOfMNBogBNXlNx9wjV',
    category: 'live',
  },
  {
    id: 'platter',
    title: 'Heritage Platter',
    subtitle: 'Tandoori Platters',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHhq7xaHw0-_aCTHq8H2HSe5Rl2OOjB6tFJHvlvwCwm5Vjm8xS-nDf_uM1Q8c4rqESVQRAvXStcTb2KxZ_Ngn-zuzf_BzIXS7ceX8qY5qjvupfr8pmDoB6h_ncYjpjQ8rd6WIHgKBiMS0WHQTq6JwRm6OlutGz4KLnYtS-04fDkbBJoXuk2tSHf-kse8wrCgTMkLAbdSS0ffOOLzYvksYgfM5DK5XiiYf6-7kNXcaWcdJzHX6IH46X8mUlqhNnG0o1zYGPLTHOCHFe',
    category: 'gastronomy',
  },
  {
    id: 'galouti',
    title: 'Signature Galouti Kebabs',
    subtitle: 'The Art of Spices',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_sm1UP0FNj66C3zXVFyBojUqQFyR3H72wT-LkJ29EG9G19kC93MPKvjnULbCXElS43VJHaTaE897AD2nbxth7fyhiLDxrO_U43UHVVJeden6gqaw7SK0IUX0zSjm7hACA_s7JO2WmRZVbuHaYcGEe__N3Ietu95yDReIYQSTbUzQuSdB8Nr0isBMIf3sBsor4sQbt-EWUsrVvUhzi_20hRwHbfLXi7aVtJYLnn9Q8ghWgG9JX2VZImqOMPMRY6-st5G10nv0c-mme',
    category: 'gastronomy',
  },
];
