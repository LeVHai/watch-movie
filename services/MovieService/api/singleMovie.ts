import httpMovie from "../httpMovie"

export const getSingleMovie = (page: string | number, limit: string | number) => {
    return httpMovie.get('/v1/api/danh-sach/phim-le', {
        params: {
            _page: page,
            _limit: limit
        }
    })
}