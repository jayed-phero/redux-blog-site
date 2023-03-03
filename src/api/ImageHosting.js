export const GetImageUrl = async image => {
    const formData = new FormData()
    formData.append('image', image)
    const url = `https://api.imgbb.com/1/upload?key=9b9582a39a59e738303271bb9cc2d78f`

    const res = await fetch(url, {
        method: 'POST',
        body: formData
    })
    const data = await res.json()
    return data?.data?.display_url
}