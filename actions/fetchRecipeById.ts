'use server'

export async function getRecipeById(id: string) {
  try {
    const response = await fetch(
      `${process.env.BASE_URL}/recipes/${id}/information?apiKey=${process.env.API_KEY}`
    )
    return await response.json()
  } catch (error) {
    console.error(error)
  }
}
