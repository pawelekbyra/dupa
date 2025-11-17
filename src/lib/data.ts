// src/lib/data.ts
export const slidesData = [
  {
    id: "slide-001",
    likeId: "1",
    author: {
      name: "Paweł Czemiel",
      avatar: "https://i.pravatar.cc/100?u=pawel",
      is_vip: true,
    },
    title: "Big Buck Bunny",
    description: "A short computer-animated comedy film.",
    mp4Url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    access: "public",
    initialLikes: 10,
    isLiked: false,
    initialComments: 2,
  },
  {
    id: "slide-002",
    likeId: "2",
    author: {
      name: "Paweł Czemiel",
      avatar: "https://i.pravatar.cc/100?u=pawel",
      is_vip: true,
    },
    title: "Elephants Dream",
    description: "The first open-source animated film.",
    mp4Url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    access: "secret",
    initialLikes: 42,
    isLiked: false,
    initialComments: 5,
  },
  {
    id: "slide-003",
    likeId: "3",
    author: {
      name: "Paweł Czemiel",
      avatar: "https://i.pravatar.cc/100?u=pawel",
      is_vip: true,
    },
    title: "For Bigger Blazes",
    description: "A short film by the Blender Foundation.",
    mp4Url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    access: "pwa-secret",
    initialLikes: 101,
    isLiked: false,
    initialComments: 8,
  }
];
