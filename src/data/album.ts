import type { Album } from '../types';

import porcelainImage from '../assets/albums/porcelain-heart.jpeg'
import indigoImage from '../assets/albums/indigo-bruised.jpeg'
import travellingImage from '../assets/albums/traveling-forever.jpg'

export const albums: Album[] = [
  { title: "Porcelain Heart", 
    year: 2026,
    spotifyURL: "https://open.spotify.com/album/4PExSOAWDOhEQzPSFKIAhL?si=0G7uZdMTQDqhF-DjN8fJqQ",
    appleMusicURL: "https://music.apple.com/se/album/porcelain-heart/1878101985",
    soundcloudURL: "https://soundcloud.com/diane42348/sets/porcelain-heart-5",
    youtubeMusicURL: "https://music.youtube.com/playlist?list=OLAK5uy_mkoA9tj2RAx4PYvIUQYj7uI3gbh3G9MCs&si=YcXVtHG8HiPHATg8",
    tidalURL: "https://tidal.com/album/504695417",
    cover: porcelainImage,
  },
  { title: "Indigo Bruised", 
    year: 2024,
    spotifyURL: "https://open.spotify.com/album/4BxfBMRKQhFiIw1EpEm4Et?si=xrGtOekAStOR5pbtc0k5Xg",
    appleMusicURL: "https://music.apple.com/us/album/indigo-bruised-ep/1777244761",
    soundcloudURL: "https://soundcloud.com/diane42348/sets/indigo-bruised",
    youtubeMusicURL: "https://music.youtube.com/playlist?list=OLAK5uy_kyl83s4JyxIcWrhUZS1s1ud64796_2-5Q&si=h__0ZWdanEHw9cCG",
    tidalURL: "https://tidal.com/album/398311849",
    cover: indigoImage,
  },
  { title: "Traveling Forever", 
    year: 2024,
    spotifyURL: "https://open.spotify.com/album/6O6FjErdZMrFL6bvd0Gfun?si=jcTluPaVS12R8Yq5n-qLOg",
    appleMusicURL: "https://music.apple.com/se/album/travelling-forever/1736087615",
    soundcloudURL: "https://soundcloud.com/diane42348/sets/travelling-forever",
    youtubeMusicURL: "https://music.youtube.com/playlist?list=OLAK5uy_kITxk36TL34N5aiG1kbLaLWk_xfatA3eE&si=a-7vjFJprJTIuxqJ",
    tidalURL: "https://tidal.com/album/353964045",
    cover: travellingImage,
  },
];