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
        listingGrid.innerHTML += `
          <div class="col">
            <a href="/listings/${listing._id}" class="listing-link">
              <div class="card h-100">
                <img src="${listing.image.url}" class="card-img-top">

                <div class="card-img-overlay"></div>

                <div class="card-body d-flex flex-column">
                  <h5 class="card-title">${listing.title}</h5>

                  <p class="card-price mt-auto">
                    ₹${Number(listing.price).toLocaleString("en-IN")} for 2 Nights
                  </p>
                </div>
              </div>
            </a>
          </div>
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
