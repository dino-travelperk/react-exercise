export default async function request<T>(
  path: string,
  options: {},
): Promise<T> {
  try {
    const response = await fetch(path, options)
    const isValid = response.status >= 200 && response.status <= 299

    if (!isValid) {
      throw new Error(response.statusText)
    }

    const body = await response.json()

    return body
  } catch (status) {
    let errorMessage
    if (status instanceof Error) {
      errorMessage = status.message
    } else {
      errorMessage = status
    }

    return Promise.reject(errorMessage)
  }
}
