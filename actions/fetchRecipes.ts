'use server'

export async function getRecipes({
  query,
  cuisine,
  maxReadyTime,
}: {
  [key: string]: string | string[] | undefined
}) {
  try {
    const queryString = [
      query ? `query=${query}` : '',
      cuisine ? `cuisine=${cuisine}` : '',
      maxReadyTime ? `maxReadyTime=${maxReadyTime}` : '',
    ]
      .filter(Boolean)
      .join('&')

    const response = await fetch(
      `${process.env.BASE_URL}recipes/complexSearch?${queryString}&apiKey=${process.env.API_KEY}`,
      { next: { revalidate: 0 } }
    )
    return await response.json()
  } catch (error) {
    console.error(error)
  }
}
