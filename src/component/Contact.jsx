import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Contact = () => {
  const contact = useLoaderData();
  //   console.log(contact);

  const { name, number, email, date, _id } = contact;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const number = form.number.value;
    // const date = form.date.value;
    // console.log(name, email, number);
    const updateContact = {
      name,
      email,
      date,
      number,
    };

    fetch(`http://localhost:5000/contacts/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateContact),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data?.modifiedCount == 1) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Contact updated",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div>
      <div className="card w-1/2 mx-auto shadow-2xl my-10">
        <h2 className="text-3xl font-semibold text-center py-8">
          Update Contact
        </h2>
        <form onSubmit={handleUpdate} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name </span>
            </label>
            <input
              required
              defaultValue={name}
              type="text"
              name="name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              required
              defaultValue={email}
              type="email"
              name="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              required
              defaultValue={number}
              type="text"
              name="number"
              className="input input-bordered"
            />
          </div>
          {/* <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              required
              defaultValue={date}
              type="text"
              name="date"
              className="input input-bordered"
            />
          </div> */}
          <div className="form-control mt-6">
            <button
              type="submit"
              className="px-3 py-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700 "
            >
              Update Contact
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
