const API_KEY = '60d07ebef5dc7eac7a2c1943ca443902'
const API_BASE = 'https://api.themoviedb.org/3'



/*
 - Originais da NetFlix
 - Recomendados (trending)
 - Am alta (top rated)
 - Acao 
 - Comedia
 - Terror 
 - Romance
 - documentarios
*/


const basicFetch = async (endpoint) => {
    const req = await fetch (`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getHomeList: async () => {
        return [
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: await basicFetch (`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFetch (`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
        ];
    },
    getMovieInfo: async (movieId, type) => {
        let info = {};

        if(movieId) {
            // eslint-disable-next-line default-case
            switch(type) {
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                
                break;

                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);

                break;

                default:
                    info = null;
                break;
            }

        }

        return info;
    },

    getMovieCredts: async (movieId, type) => {
        let credits = {};

        if(movieId) {
            // eslint-disable-next-line default-case
            switch(type) {
                case 'movie':
                    credits = await basicFetch(`/movie/${movieId}/credits?language=pt-BR&api_key=${API_KEY}`);
                
                break;

                case 'tv':
                    credits = await basicFetch(`/tv/${movieId}/credits?language=pt-BR&api_key=${API_KEY}`);

                break;

                default:
                    credits = null;
                break;
            }

        }
        return credits;
    }
}