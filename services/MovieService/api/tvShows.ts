import httpMovie from "../httpMovie"

export const getTvShows = (page: string | number, limit: string | number) => {
    return httpMovie.get('/v1/api/danh-sach/tv-shows', {
        params: {
            _page: page,
            _limit: limit
        }
    })
}