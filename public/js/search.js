const searchInput = document.getElementById("searchInput");
const listingGrid = document.getElementById("listingGrid");

let timer;

searchInput.addEventListener("input", () => {
  clearTimeout(timer);

  timer = setTimeout(async () => {
    const query = searchInput.value.trim();

    const res = await fetch(
      `/listings/search?search=${encodeURIComponent(query)}`,
    );
    const listings = await res.json();

    renderListings(listings);
  }, 300);
});

async function renderListings(listings) {
  listingGrid.classList.add("fade-out");

  setTimeout(() => {
    listingGrid.innerHTML = "";

    if (listings.length === 0) {
      listingGrid.classList.add("empty-grid");

      listingGrid.innerHTML = `
        <div class="no-results">
          <div class="no-results-icon">
            <i class="fa-solid fa-magnifying-glass-location"></i>
          </div>

          <h2>No listings found</h2>

          <p>
            We couldn't find any homes matching
            <strong>"${searchInput.value}"</strong>
          </p>

          <button class="clear-search-btn">
            <i class="fa-solid fa-rotate-left"></i>
            Show All Listings
          </button>
        </div>
      `;

      document.querySelector(".clear-search-btn").onclick = () => {
        searchInput.value = "";
        searchInput.dispatchEvent(new Event("input"));
      };
    } else {
      listingGrid.classList.remove("empty-grid");

      listings.forEach((listing) => {
        const imageUrl =
          listing.image && listing.image.url
            ? listing.image.url
            : "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=80";

        listingGrid.innerHTML += `
      <a href="/listings/${listing._id}" class="listing-card-wrapper">

        <div class="premium-card">

          <div class="card-img-container">

            <img
              src="${imageUrl}"
              alt="${listing.title || "Listing"}"
              class="card-img"
            >

            <button
              class="wishlist-btn"
              onclick="event.preventDefault();"
            >
              <i class="fa-regular fa-heart"></i>
            </button>

          </div>

          <div class="card-header">

            <h3 class="card-title">
              ${listing.title || "Beautiful Home"}
            </h3>

            <div class="card-rating">
              <i class="fa-solid fa-star"></i>
              4.9
            </div>

          </div>

          <p class="card-details">
            ${listing.location || "Beautiful Destination"}
            ${listing.country ? `, ${listing.country}` : ""}
          </p>

          <div class="card-price-wrap">

            <span class="card-price">
              ₹${
                listing.price
                  ? Number(listing.price).toLocaleString("en-IN")
                  : "0"
              }
            </span>

            <span class="card-price-suffix">
              / night 
            </span>

          </div>

        </div>

      </a>
    `;
      });
    }

    listingGrid.classList.remove("fade-out");
    listingGrid.classList.add("fade-in");

    setTimeout(() => {
      listingGrid.classList.remove("fade-in");
    }, 250);
  }, 200);
}
