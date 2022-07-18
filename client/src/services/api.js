export async function api(url, method, data, headers) {
  try {
    const result = await fetch(url, {
      method,
      headers: headers || {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    });

    return result.json();
  } catch (error) {
    console.error(error);
  }
}
