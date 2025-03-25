export type CollectionName = "blog" | "projects";


export type GlobalSite = {
  title: string;
  description: string;
  author: string;
  authorPhotoSrc: string;
  logo?: {
    darkThemeSrc?: string;
    lightThemeSrc?: string;
  };
};

export const GLOBAL: GlobalSite = {
  title: "Jacob Edie - Blog",
  description: "A blog about an aspireing software engineer and his journey through the world of software development.",
  author: "Jacob Edie",
  authorPhotoSrc: "/egg.png",
  logo: {
    darkThemeSrc: "/logo-dark.svg",
    lightThemeSrc: "/logo-light.svg",
  }
};


type CollectionSite =  {
  pageSize: number;
};

type HomeSite =  {
  blogEntries?: number;
  projectEntries?: number;
  talkEntries?: number;
}

export const HOME: HomeSite = {
  blogEntries: 5,
  projectEntries: 3,
  talkEntries: 0,
};

type BlogSite = CollectionSite & {
  license: {
    name: string;
    href: string;
  }
};

export const BLOG: BlogSite = {
  pageSize: 10,
  license: {
    name: "CC BY-NC-ND 4.0",
    href: "https://creativecommons.org/licenses/by-nc-nd/4.0",
  },
};

export const PROJECTS: CollectionSite = {
  pageSize: 10,
};

export const TALKS: CollectionSite = {
  pageSize: 10,
};

export const TAGS: CollectionSite = {
  pageSize: 10,
};

type ContactInfo = {
  type: string;
  href: string;
  displayAs?: string;
}

type ContactSite = ContactInfo[]

export const CONTACT: ContactSite = [
  {
    type: "Email",
    href: "mailto:jacobedie1@gmail.com",
    displayAs: "jacobedie1@gmail.com",
  },
  {
    type: "BlueSky",
    href: "https://bsky.app/profile/jak6jak.bsky.social",
    displayAs: "@jak6jak.bsky.social",
  },
  {
    type: "GitHub",
    href: "https://github.com/jak6jak",
  },
  {
    type: "LinkedIn",
    href: "https://www.linkedin.com/in/jacob-edie/",
  },
];
