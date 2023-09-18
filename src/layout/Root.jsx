import generatePDF from "react-to-pdf";
import Navbar from "../component/Navbar";
import { useRef, useState } from "react";
import ContactList from "../component/ContactList";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Root = () => {
  const targetRef = useRef();

  const handlePdf = () => {
    generatePDF(targetRef, { filename: "contact-management.pdf" });
  };

  // for sorting and searching

  const [sortOrder, setSortOrder] = useState("desc");
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
    refetch();
  };
  console.log(search);

  const handleSort = () => {
    setSortOrder(sortOrder === "desc" ? "asc" : "desc");
    refetch();
  };

  const { data: contacts = [], refetch } = useQuery({
    queryKey: ["contacts"],
    queryFn: () =>
      axios
        .get(
          `https://contact-management-server-eight.vercel.app/contacts?search=${search}&sort=${sortOrder}`
        )
        .then((res) => {
          return res.data;
        }),
  });

  return (
    <div className="">
      <Navbar
        handlePdf={handlePdf}
        handleSort={handleSort}
        handleSearch={handleSearch}
        setSearch={setSearch}
      ></Navbar>
      <div ref={targetRef}>
        <ContactList contacts={contacts} refetch={refetch}></ContactList>
      </div>
    </div>
  );
};

export default Root;
