export interface HeaderLinkType {
  name: string;
  to: string;
}

export const musicHeaderLinks: HeaderLinkType[] = [
  {
    name: "HOME",
    to: "/music",
  },
  {
    name: "BIO",
    to: "/music/bio",
  },
  // TODO add these in as pages are completed
  // {
  //   name: "MEDIA",
  //   to: "/music/media",
  // },
  // {
  //   name: "SHOWS",
  //   to: "/music/shows",
  // },
  {
    name: "CONTACT",
    to: "/music/contact",
  },
];
