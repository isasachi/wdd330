const rootContainer = document.querySelector('.temples');

const URL = '/temple/json/data.json';

const renderData = (data) => {
    data.map(elem => {
        const container = document.createElement('div');
        container.className = 'temple-card';
        const image = document.createElement('img');
        image.src = elem.image;
        image.alt = elem.name;
        const name = document.createElement('h3');
        name.textContent = elem.name;
        const addressLbl = document.createElement('p');
        addressLbl.textContent = 'Address:';
        addressLbl.className = 'label';
        const address = document.createElement('p');
        address.textContent = elem.address;
        address.className = 'para';
        const telephoneLbl = document.createElement('p');
        telephoneLbl.textContent = 'Telephone:';
        telephoneLbl.className = 'label';
        const telephone = document.createElement('p');
        telephone.textContent = elem.telephone;
        telephone.className = 'para';
        const servicesLbl = document.createElement('p');
        servicesLbl.textContent = 'Services:';
        servicesLbl.className = 'label';
        const services = document.createElement('ul');
        elem.services.map(item => {
            const service = document.createElement('li');
            service.textContent = item;
            services.append(service);
        })
        const history = document.createElement('a');
        history.textContent = 'Read history';
        history.href = elem.history;
        const closure = document.createElement('button');
        closure.textContent = 'View scheduled closures';
        closure.style.display = 'block';
        const closureContainer = document.createElement('div');
        closureContainer.className = 'modal';
        closureContainer.style.display = 'none';
        const closureClose = document.createElement('span');
        closureClose.className = 'close';
        closureClose.textContent = 'x';
        closureContainer.append(closureClose);
        elem.closure[0].map(item => {
            const closureItem = document.createElement('p');
            closureItem.textContent = item;
            closureContainer.append(closureItem);
        })
        if (elem.closure[1]) {
            elem.closure[1].map(item => {
                const closureItem = document.createElement('p');
                closureItem.textContent = item;
                closureContainer.append(closureItem);
            })
        }
        
        closure.onclick = function() {
            closureContainer.style.display = 'block';
        }
        closureClose.onclick = function() {
            closureContainer.style.display = 'none';
        }

        container.append(image, name, addressLbl, address, telephoneLbl, telephone, servicesLbl, services, history, closure,);
        rootContainer.append(closureContainer);
        rootContainer.append(container);
    });
}

const fetchData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    renderData(data);
}

fetchData();