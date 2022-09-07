

const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: 'e1c31f1d174a0a27796215b556cae8e4',
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500lImage: (imgPath) => `https://image.tmdb.org/t/p/w500/original${imgPath}`,
}

export default apiConfig