const dataForm = document.querySelector(".get-data");
const arr = [...new FormData(dataForm)];
const data = Object.fromEntries(arr);

const AJAX = async function () {
  const res = await fetch("http://localhost:4000/api/v1", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const dataVal = res.json();
  console.log(dataVal);
};
