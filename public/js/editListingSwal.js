const editForm = document.querySelector("#listing-form-edit");

if (editForm) {
  editForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const result = await Swal.fire({
      title: "Are You Sure",
      text: "Do you want to edit this listing?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, Edit It!",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      editForm.submit();
    }
  });
}
