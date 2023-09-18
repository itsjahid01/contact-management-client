import axios from "axios";
import Swal from "sweetalert2";

const AddContact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const number = form.number.value;
    // console.log(name, email, number);
    const date = new Date().toLocaleDateString();
    //   console.log(date);

    axios
      .post("https://contact-management-server-eight.vercel.app/contacts", {
        name,
        email,
        number,
        date,
      })
      .then((res) => {
        if (res.data?.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "New Contact Added",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="card w-1/2 mx-auto shadow-2xl my-10">
        <h2 className="text-3xl font-semibold text-center py-8">
          Add New Contact
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name </span>
            </label>
            <input
              required
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              required
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              required
              type="text"
              name="number"
              placeholder="Phone"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <button
              type="submit"
              className="px-3 py-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700 "
            >
              Add Contact
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
