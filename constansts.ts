export type Vaccine = { label: string; photoUrl: string; cover: string; md5: string };

export const VACCINES: Vaccine[] = [
  {
    label: "Astrazeneca",
    photoUrl: "/az.png",
    cover: "/cover-az.png",
    md5: "cc8c0a97c2dfcd73caff160b65aa39e2",
  },
  {
    label: "Sinovac",
    photoUrl: "/sinovac.png",
    cover: "/cover-sin.png",
    md5: "00eb66149812aca535dd2f06e0562014",
  },
  {
    label: "Pfizer (SSR Rank)",
    photoUrl: "/pfizer.png",
    cover: "/cover-pfizer.png",
    md5: "05a203d85ee01909eaf728dc16f0f6cb",
  },
];
