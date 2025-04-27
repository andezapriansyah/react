import React, { useEffect, useState } from "react";
// import Records from "./temp.json";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://52.187.53.213/colours")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div class="grid grid-cols gap-4">
      {data.map((record, key) => {
        return (
          <div class="grid grid-cols-3 gap-4">
            <div
              style={{ backgroundColor: record.value }}
              class="rounded-2xl p-5 text-center tracking-widest text-outline">
              [{key + 1}]
            </div>
            <div
              style={{ backgroundColor: record.value }}
              class="rounded-2xl p-5 text-center tracking-widest text-outline">
              {record.color}
            </div>
            <div
              style={{ backgroundColor: record.value }}
              class="rounded-2xl p-5 text-center tracking-widest text-outline">
              {record.value}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
