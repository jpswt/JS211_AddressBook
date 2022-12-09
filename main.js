let contacts = [];

const fetchUsers = () => {
	fetch('https://randomuser.me/api?results=20')
		.then((res) => res.json())
		.then((contact) => {
			contacts = contact.results;
			console.log(contacts);
			displayContacts();
		});
};

const displayContacts = () => {
	const contactList = document.getElementById('contacts');
	contacts.map((user) => {
		const li = document.createElement('li');
		const image = document.createElement('img');
		image.className = 'contact-image';
		image.src = user.picture.medium;

		const text = document.createTextNode(
			`${user.name.first} ${user.name.last}`
		);

		contactList.appendChild(li);
		li.appendChild(image);
		li.appendChild(text);

		const button = document.createElement('button');
		button.id = 'info';
		button.innerHTML = 'Click for Info';
		button.onclick = () => {
			const details = document.createElement('p');
			details.style.textAlign = 'center';
			details.style.paddingBottom = '1rem';
			details.innerHTML = `<strong>Cell:</strong> ${
				user.cell
			}</br> <strong>Phone:</strong> ${
				user.phone
			} <br/> <strong>Street:</strong> ${
				(user.location.street.number, user.location.street.name)
			} <br/> <strong>City:</strong> ${
				user.location.city
			} <br/> <strong>State:</strong> ${
				user.location.state
			}<br/> <strong>Zip Code:</strong> ${user.location.postcode}`;

			li.appendChild(details);
			button.disabled = 'true';
		};
		li.appendChild(button);
	});
};

window.onload = () => {
	fetchUsers();
};
