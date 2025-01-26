import httpMovie from "../httpMovie"

export const getSeriesMovie = (page: string | number, limit: string | number) => {
    return httpMovie.get('/v1/api/danh-sach/phim-bo', {
        params: {
            _page: page,
            _limit: limit
        }
    })
}