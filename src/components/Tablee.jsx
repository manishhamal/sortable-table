import { useEffect, useState } from "react";
const URL = "https://jsonplaceholder.typicode.com/albums";
const Tablee = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setAlbums(data));
  }, []);
  return (
    <table>
      <thead>
        <tr>
          {albums.length &&
            Object.keys(albums?.[0]).map((key) => <th key={key}>{key}</th>)}
        </tr>
      </thead>
      <tbody>
        {albums.length &&
          albums?.map((item, idx) => (
            <tr key={idx}>
              <td>{item.userId}</td>
              <td>{item.id}</td>
              <td>{item.title}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Tablee;
