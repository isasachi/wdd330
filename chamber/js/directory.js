/* Comapanies Directory JSON */

const directoryContainer = document.querySelector('.directory-main');
const directoryURL = 'json/data.json';

async function getCompanies() {
    const response = await fetch(directoryURL);
    const responseJSON =  await response.json();
    responseJSON.forEach(item => {
        renderCompany(item);
    })
}

function renderCompany(company) {
    const container = document.createElement('div');
    const companyName = document.createElement('h3');
    const companyAddress = document.createElement('p');
    const companyPhoneNumber = document.createElement('p');
    const companyWebsite = document.createElement('a');
    const companyLogo = document.createElement('img');
    const companyArea = document.createElement('p');
    const companyMembershipLevel = document.createElement('p');

    companyName.textContent = `${company.name}`;
    companyAddress.textContent = `Address: ${company.address}`;
    companyPhoneNumber.textContent = `Phone number: ${company.phoneNumber}`;
    companyWebsite.href = company.websiteURL;
    companyWebsite.textContent = 'Visit website';
    companyLogo.src = company.logoImage;
    companyLogo.alt = company.name;
    companyArea.textContent = `Area: ${company.area}`;
    companyMembershipLevel.textContent = `Membership level: ${company.membershipLevel}`

    container.append(companyLogo, companyName, companyAddress, companyPhoneNumber, companyArea, companyMembershipLevel, companyWebsite);

    directoryContainer.append(container);
}