const input = document.querySelector(".home-input");
const inputButton = document.querySelector(".home-signup-button");

const submitEmailPost = async () => {
  const email = { passed_email: input.value };
  await fetch("/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(email),
  });
};

inputButton.addEventListener("click", () => submitEmailPost());
