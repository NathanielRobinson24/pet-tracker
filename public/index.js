const petForm = document.querySelector('#pet-form');

fetch('/getpets')
  .then((res) => res.json())
  .then((pets) => console.log(pets));
  const handleSubmit = (e) => {
    event.preventDefault();
    console.log(e)

    const formData = new FormData(e.target);
    const obj = Object.fromEntries(formData.entries());
    fetch('/addpets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    })
    .then(res => res.json())
    .then(data => console.log(data));
  }

  petForm.addEventListener('submit', handleSubmit)