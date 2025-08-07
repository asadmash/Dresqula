export async function fetchProducts({ q, category } = {}) {
  try {
    // Force fresh data on each navigation so server filtering reflects the current URL params
    const response = await fetch("https://fakestoreapi.com/products", {
      // cache: "no-store",
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    let data = await response.json();
    data = Array.isArray(data) ? data : [];

    // Normalize helpers
    const norm = (s) =>
      String(s ?? "")
        .toLowerCase()
        .trim();

    // Apply category filter first (exact match, if provided)
    if (category) {
      const cat = String(category);
      data = data.filter((product) => product.category === cat);
    }

    // Apply name/title query filter (case-insensitive contains)
    if (q && norm(q).length) {
      const nq = norm(q);
      data = data.filter((product) => norm(product.title).includes(nq));
    }

    return data;
  } catch (error) {
    console.error("Fetch Failed:", error);
    // Return empty array to keep callers safe (e.g., .map)
    return [];
  }
}

export async function fetchProductById(id) {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
      // cache: "no-store",
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data ?? null;
  } catch (error) {
    console.error("Fetch Failed:", error);
    return null;
  }
}
