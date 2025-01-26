import httpMovie from "../httpMovie"

export const getCartoonMovie = (page: string | number, limit: string | number) => {
    return httpMovie.get('/v1/api/danh-sach/hoat-hinh', {
        params: {
            _page: page,
            _limit: limit
        }
    })
}