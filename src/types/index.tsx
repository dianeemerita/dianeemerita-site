export interface Album {
  title: string;
  year: number;
  spotifyURL?: string;
  appleMusicURL?: string;
  youtubeMusicURL?: string;
  tidalURL?: string;
  itunesURL?: string;
  soundcloudURL?: string;
  cover?: string;
  thumbnail?: string;
}

export interface TourDate {
  date: string;
  year?: string;
  venue: string;
  city: string;
  tickets?: string;
}

export interface Video{
  title: string;
  year: number;
  youtubeId: string;
  description?: string;
}

export interface Merch{
  name: string;
  price: string;
  image?: string;
  thumbnail?: string;
}