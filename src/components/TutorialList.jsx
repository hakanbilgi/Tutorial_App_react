import { CiEdit } from "react-icons/ci";
import { AiFillDelete } from "react-icons/ai";

const TutorialList = () => {
  const tutorials = [
    { id: 1, title: "JS", description: "JS is a programming" },
    { id: 2, title: "React", description: "JS library for UI design" },
  ];

  return (
    <div className="container mt-4 ">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>

        <tbody>
          {tutorials.map((item) => {
            const { id, title, description } = item;
            return (
              <tr key={id}>
                <th>{id}</th>
                <td>{title}</td>
                <td>{description}</td>
                <td>
                  <CiEdit size={20} type="button" className="text-danger" />
                  <AiFillDelete
                    size={22}
                    type="button"
                    className="text-danger"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TutorialList;
