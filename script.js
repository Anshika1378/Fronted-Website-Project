  const form = document.getElementById('leadForm');

  function showError(id, message) {
    document.getElementById(id).textContent = message;
  }
  function clearErrors() {
    showError('errorName', '');
    showError('errorEmail', '');
    showError('errorCompany', '');
    showError('errorLicense', '');
  }

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    clearErrors();
    let valid = true;

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const company = form.company.value.trim();
    const licenseType = form.licenseType.value;

    // Name validation
    if (!name) {
      showError('errorName', 'Name is required.');
      valid = false;
    }

    // Email validation: presence and basic format
    if (!email) {
      showError('errorEmail', 'Email is required.');
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showError('errorEmail', 'Please enter a valid email.');
      valid = false;
    }

    // Company validation
    if (!company) {
      showError('errorCompany', 'Company is required.');
      valid = false;
    }

    // License Type validation
    if (!licenseType) {
      showError('errorLicense', 'Please select a license type.');
      valid = false;
    }

    if (valid) {
      alert('Thank you for contacting SoftSell! We will get back to you shortly.');
      form.reset();
    }
  });

  // Smooth scroll for hero CTA button to contact form
  const ctaBtn = document.getElementById('ctaButton');
  const contactSection = document.getElementById('contactTitle');

  ctaBtn.addEventListener('click', () => {
    contactSection.scrollIntoView({ behavior: 'smooth' });
    document.getElementById('name').focus();
  });