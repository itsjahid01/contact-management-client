import { MdDelete } from "react-icons/md";
import useContacts from "../hooks/useContacts";
import { BiSolidEdit } from "react-icons/bi";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ContactList = () => {
  const [contacts, refetch] = useContacts();
  //   console.log(contacts);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/contacts/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.acknowledged) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Contact deleted",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <div className="overflow-x-auto container mx-auto p-8">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Created Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row */}
            {contacts.map((item) => (
              <tr key={item._id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.number}</td>
                <td>{item.date}</td>
                <td>
                  <div className="text-3xl flex gap-3">
                    <Link to={`/contacts/${item?._id}`}>
                      <BiSolidEdit className=" hover:text-blue-500 cursor-pointer" />
                    </Link>
                    <MdDelete
                      onClick={() => handleDelete(item?._id)}
                      className=" hover:text-blue-500 cursor-pointer"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactList;
