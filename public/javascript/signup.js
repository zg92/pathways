const input = document.querySelector(".card-input");
const inputButton = document.querySelector(".card-signup-button");

const postData = async (email) => {
  const response = await fetch("/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(email),
  });
  return response.json();
};

const submitEmailPost = async () => {
  const email = { passed_email: input.value };
  const res = await postData(email);
  input.value = res.message;
};

inputButton.addEventListener("click", () => submitEmailPost());
