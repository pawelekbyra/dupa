export const slidesData = [
  {
    id: "slide-001",
    likeId: "1",
    author: {
        name: "Test User",
        avatar: "https://i.pravatar.cc/100?u=bunny",
    },
    title: "Big Buck Bunny",
    description: "To jest testowy slajd publiczny.",
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
        name: "Secret Agent",
        avatar: "https://i.pravatar.cc/100?u=agent",
    },
    title: "Elephants Dream",
    description: "To jest slajd typu 'secret'. Widoczny tylko dla zalogowanych.",
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
        name: "PWA Exclusive",
        avatar: "https://i.pravatar.cc/100?u=pwa",
    },
    title: "For Bigger Blazes",
    description: "To jest slajd 'pwa-secret'. Dostępny tylko w aplikacji PWA.",
    mp4Url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    access: "pwa-secret",
    initialLikes: 101,
    isLiked: false,
    initialComments: 8,
  }
];
