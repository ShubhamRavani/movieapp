const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'fbdaabaa835507aa7456bf058998996e',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;
