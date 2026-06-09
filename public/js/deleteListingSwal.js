const deleteForms = document.querySelectorAll(".delete-form");
deleteForms.forEach((form) => {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This listing will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      form.submit();
    }
  });
});
