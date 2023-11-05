const createContactPage = () =>{
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const form = document.createElement('form');
    form.classList.add('contact-form');

    const headingInput = document.createElement('input');
    headingInput.type = 'text';
    headingInput.placeholder = 'Enter heading';
    form.appendChild(headingInput);

    const emailAddress = document.createElement('input');
    emailAddress.type = 'email'
    form.appendChild(emailAddress);

    const submit = document.createElement('input');
    submit.value = 'Submit';
    submit.type = "submit";
    form.appendChild(submit);

    pageContent.appendChild(form);

    content.appendChild(pageContent);
}

export default createContactPage;