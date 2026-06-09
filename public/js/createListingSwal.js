const createForm = document.querySelector("#listing-form-create");

if (createForm) {
  createForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const result = await Swal.fire({
      title: "Create Listing?",
      text: "Do you want to add this listing?",
      icon: "success",
      showCancelButton: true,
      confirmButtonText: "Yes, Add It!",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      createForm.submit();
    }
  });
}
