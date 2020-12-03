const URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Q5QgYGK08E4WMOU3gDCv/scores/';

const sendScore = async (name, score) => {
  try {
    const response = await fetch(URL, {
      method: 'POST',
      mode: 'cors',
      headers: {
        Accept: 'Application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: name, score: Number(score) }),
    });
    return response.json();
  } catch (error) {
    return error.message;
  }
};

const showScore = async () => {
  try {
    const response = await fetch(URL, {
      method: 'GET',
      mode: 'cors',
      headers: {
        Accept: 'Application/json',
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  } catch (error) {
    return error.message;
  }
};

export { sendScore, showScore };