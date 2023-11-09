const url = "https://www.github.com/azizcodes";

const getResponse = async () => {
  const res = await fetch(url);
  console.log(res.data);
};

getResponse();
